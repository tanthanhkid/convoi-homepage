import { NextResponse } from 'next/server';
import { SotuteProject } from '../../services/sotuteService';

// In-memory cache cho dữ liệu sotute
let cachedProjects: SotuteProject[] = [];
let lastFetch: number = 0;
let isJobRunning = false;
const CACHE_DURATION = 5 * 60 * 1000; // 5 phút
const FETCH_INTERVAL = 10 * 60 * 1000; // 10 phút

// Decode HTML entities
function decodeHtmlEntities(text: string): string {
  const entities: { [key: string]: string } = {
    '&#8211;': '–',  // en dash
    '&#8212;': '—',  // em dash  
    '&#8220;': '"',  // left double quotation mark
    '&#8221;': '"',  // right double quotation mark
    '&#8216;': '\'',  // left single quotation mark
    '&#8217;': '\'',  // right single quotation mark
    '&#8230;': '…',  // horizontal ellipsis
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&nbsp;': ' ',
    '&#39;': '\'',
    '&#x27;': '\'',
    '&#x2F;': '/',
    '&#x60;': '`',
    '&#x3D;': '='
  };

  let decoded = text;
  
  // Decode named entities
  Object.keys(entities).forEach(entity => {
    const regex = new RegExp(entity, 'g');
    decoded = decoded.replace(regex, entities[entity]);
  });
  
  // Decode numeric entities &#number;
  decoded = decoded.replace(/&#(\d+);/g, (match, number) => {
    return String.fromCharCode(parseInt(number, 10));
  });
  
  // Decode hex entities &#xhex;
  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
  
  return decoded.trim();
}

// Background job để fetch dữ liệu từ sotute.com
async function fetchSotuteData(): Promise<SotuteProject[]> {
  try {
    console.log('🔄 Background job: Đang fetch dữ liệu từ sotute.com...');
    
    const response = await fetch('https://sotute.com', {
      method: 'GET',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (response.ok) {
      const html = await response.text();
      const projects = parseProjectFromHTML(html);
      
      if (projects.length > 0) {
        cachedProjects = projects;
        lastFetch = Date.now();
        console.log(`✅ Background job: Đã cache ${projects.length} dự án từ sotute.com`);
        return projects;
      } else {
        console.warn('⚠️ Background job: Không parse được dữ liệu từ sotute.com');
        throw new Error('Không parse được dữ liệu từ sotute.com');
      }
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('❌ Background job error:', error);
    throw error; // Không fallback về mock data
  }
}

// Parse HTML từ sotute.com
function parseProjectFromHTML(html: string): SotuteProject[] {
  const projects: SotuteProject[] = [];
  
  try {
    // Tìm tất cả campaign-block
    const campaignBlockRegex = /<div class="campaign-block">([\s\S]*?)<\/div>\s*<\/div>/g;
    let blockMatch;
    let index = 0;
    
    while ((blockMatch = campaignBlockRegex.exec(html)) !== null) {
      try {
        const blockHtml = blockMatch[1];
        
        // Parse title và URL
        const titleMatch = blockHtml.match(/<h4 class="title">[\s\S]*?<a href="([^"]*)"[^>]*>([^<]+)<\/a>[\s\S]*?<\/h4>/);
        if (!titleMatch) continue;
        
        const url = titleMatch[1].trim();
        const rawTitle = titleMatch[2].trim();
        const title = decodeHtmlEntities(rawTitle);
        
        // Parse image URL từ campaign-image
        const imageMatch = blockHtml.match(/<div class="campaign-image">[\s\S]*?<img[^>]*src="([^"]*)"[^>]*>/);
        const image_url = imageMatch ? imageMatch[1] : '';
        
        // Parse raised amount từ value-raised với cấu trúc woocommerce
        const raisedMatch = blockHtml.match(/<span class="value-raised">[\s\S]*?<bdi>([0-9.,]+)/);
        const raised_amount = raisedMatch ? parseFloat(raisedMatch[1].replace(/[.,]/g, '')) : 0;
        
        // Parse target amount từ value-goal với cấu trúc woocommerce  
        const targetMatch = blockHtml.match(/<span class="value-goal">[\s\S]*?<bdi>([0-9.,]+)/);
        const target_amount = targetMatch ? parseFloat(targetMatch[1].replace(/[.,]/g, '')) : 0;
        
        // Parse progress percentage
        const progressMatch = blockHtml.match(/<div class="campaign-percent_raised">([0-9.]+)%<\/div>/);
        const progress_percentage = progressMatch ? parseFloat(progressMatch[1]) : 0;
        
        // Parse days remaining
        const daysMatch = blockHtml.match(/<span class="info-value time-remaining-desc">(\d+)<\/span>/);
        const days_remaining = daysMatch ? parseInt(daysMatch[1]) : 0;
        
        // Parse categories
        const categoriesMatch = blockHtml.match(/<span class="posted_in">(.*?)<\/span>/);
        const categories: string[] = [];
        if (categoriesMatch) {
          const categoryLinks = categoriesMatch[1].match(/<a[^>]*rel="tag">([^<]*)<\/a>/g) || [];
          for (const link of categoryLinks) {
            const catMatch = link.match(/>([^<]*)</);
            if (catMatch) {
              categories.push(decodeHtmlEntities(catMatch[1].trim()));
            }
          }
        }
        
        // Tạo ID duy nhất
        let id = '';
        if (url) {
          const urlParts = url.split('/').filter(Boolean);
          id = urlParts.pop() || `project_${index}_${Date.now()}`;
        } else {
          id = title.toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-')
            .substring(0, 50);
        }
        
        // Đảm bảo ID là duy nhất
        id = `${id}_${index}_${Date.now() % 10000}`;
        
        // Xác định status dựa vào progress và categories
        let status: 'active' | 'completed' | 'pending' = 'active';
        if (progress_percentage >= 100 || categories.some(cat => cat.includes('hoàn thành'))) {
          status = 'completed';
        } else if (progress_percentage < 10) {
          status = 'pending';
        }
        
        // Chỉ thêm project nếu có đủ thông tin cơ bản
        if (title && target_amount > 0) {
          projects.push({
            id,
            title,
            description: '',
            school_name: extractSchoolName(title),
            location: extractLocation(title),
            target_amount,
            raised_amount,
            progress_percentage,
            status,
            image_url,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            url,
            categories,
            days_remaining
          });
          
          console.log(`✅ Parsed project: ${title} - Target: ${target_amount.toLocaleString()}đ - Raised: ${raised_amount.toLocaleString()}đ - Progress: ${progress_percentage}% - Days: ${days_remaining}`);
        }
        
        index++;
      } catch (error) {
        console.error('❌ Lỗi parse project individual:', error);
      }
    }
  } catch (error) {
    console.error('❌ Lỗi parse HTML từ sotute.com:', error);
  }
  
  console.log(`✅ Parsed ${projects.length} projects với IDs: ${projects.map(p => p.id).join(', ')}`);
  return projects;
}

function extractSchoolName(title: string): string {
  const schoolMatch = title.match(/Trường\s+(THPT|THCS|TH)\s+([^,–-]+)/i);
  if (schoolMatch) {
    return `${schoolMatch[1]} ${schoolMatch[2].trim()}`;
  }
  
  const fallbackMatch = title.match(/cho học sinh\s+([^,–-]+)/i);
  if (fallbackMatch) {
    return fallbackMatch[1].trim();
  }
  
  return '';
}

function extractLocation(title: string): string {
  const locationPattern = /–\s*([^–]+)$/;
  const match = title.match(locationPattern);
  if (match) {
    return match[1].trim();
  }
  
  const provinces = ['Trà Vinh', 'TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Yên Bái'];
  for (const province of provinces) {
    if (title.includes(province)) {
      return province;
    }
  }
  
  return '';
}

function getMockData(): SotuteProject[] {
  return [
    {
      id: 'TS0006',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THPT Trần Hưng Đạo',
      description: 'Cải tạo hệ thống nhà vệ sinh cũ kỹ, không đảm bảo vệ sinh cho học sinh',
      school_name: 'THPT Trần Hưng Đạo',
      location: 'TP.HCM',
      target_amount: 62850000,
      raised_amount: 62000,
      progress_percentage: 0.1,
      status: 'pending',
      image_url: '/images/truong-hung-dao.jpg',
      created_at: '2024-01-15T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0003',
      title: 'Nhà vệ sinh sạch cho học sinh Trường TH Hưng Mỹ A',
      description: 'Xây dựng nhà vệ sinh mới để thay thế hệ thống cũ không còn sử dụng được',
      school_name: 'TH Hưng Mỹ A',
      location: 'Trà Vinh',
      target_amount: 58850000,
      raised_amount: 222000,
      progress_percentage: 0.38,
      status: 'pending',
      image_url: '/images/truong-hung-my-a.jpg',
      created_at: '2024-01-10T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0007',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THCS Hưng Yên',
      description: 'Dự án đang vận động gây quỹ để xây dựng nhà vệ sinh mới',
      school_name: 'THCS Hưng Yên',
      location: 'Hưng Yên',
      target_amount: 45000000,
      raised_amount: 1500000,
      progress_percentage: 3.3,
      status: 'pending',
      image_url: '/images/truong-hung-yen.jpg',
      created_at: '2024-01-25T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0008',
      title: 'Nhà vệ sinh sạch cho học sinh Trường TH Nam Định',
      description: 'Cần hỗ trợ kinh phí để cải tạo nhà vệ sinh cũ',
      school_name: 'TH Nam Định',
      location: 'Nam Định',
      target_amount: 38000000,
      raised_amount: 850000,
      progress_percentage: 2.2,
      status: 'pending',
      image_url: '/images/truong-nam-dinh.jpg',
      created_at: '2024-02-01T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0005',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THPT Tiểu Cần',
      description: 'Cải tạo và nâng cấp nhà vệ sinh để phục vụ tốt hơn cho học sinh',
      school_name: 'THPT Tiểu Cần',
      location: 'Trà Vinh',
      target_amount: 58850000,
      raised_amount: 27650000,
      progress_percentage: 46.98,
      status: 'active',
      image_url: '/images/truong-tieu-can.jpg',
      created_at: '2024-01-20T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0002',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THCS Lê Quý Đôn',
      description: 'Lắp đặt hệ thống nhà vệ sinh hiện đại, thân thiện với môi trường',
      school_name: 'THCS Lê Quý Đôn',
      location: 'TP.HCM',
      target_amount: 65000000,
      raised_amount: 45500000,
      progress_percentage: 70,
      status: 'active',
      image_url: '/images/truong-le-quy-don.jpg',
      created_at: '2023-12-15T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0004',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THPT Yên Bái',
      description: 'Cải thiện điều kiện vệ sinh cho học sinh vùng cao',
      school_name: 'THPT Yên Bái',
      location: 'Yên Bái',
      target_amount: 80000000,
      raised_amount: 48000000,
      progress_percentage: 60,
      status: 'active',
      image_url: '/images/truong-yen-bai.jpg',
      created_at: '2024-01-05T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0009',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THPT Bắc Giang',
      description: 'Đang trong quá trình thi công xây dựng nhà vệ sinh mới',
      school_name: 'THPT Bắc Giang',
      location: 'Bắc Giang',
      target_amount: 72000000,
      raised_amount: 68500000,
      progress_percentage: 95.1,
      status: 'active',
      image_url: '/images/truong-bac-giang.jpg',
      created_at: '2024-02-10T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0001',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THPT Nguyễn Trãi',
      description: 'Dự án đầu tiên của chương trình Trường Sạch - đã hoàn thành xuất sắc',
      school_name: 'THPT Nguyễn Trãi',
      location: 'Hà Nội',
      target_amount: 75000000,
      raised_amount: 75000000,
      progress_percentage: 100,
      status: 'completed',
      image_url: '/images/truong-nguyen-trai.jpg',
      created_at: '2023-12-01T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0010',
      title: 'Nhà vệ sinh sạch cho học sinh Trường THCS Hai Bà Trưng',
      description: 'Hoàn thành xây dựng nhà vệ sinh theo tiêu chuẩn quốc gia',
      school_name: 'THCS Hai Bà Trưng',
      location: 'Hà Nội',
      target_amount: 55000000,
      raised_amount: 55000000,
      progress_percentage: 100,
      status: 'completed',
      image_url: '/images/truong-hai-ba-trung.jpg',
      created_at: '2023-11-15T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
    {
      id: 'TS0011',
      title: 'Nhà vệ sinh sạch cho học sinh Trường TH Đống Đa',
      description: 'Dự án pilot thành công, nhà vệ sinh đã được bàn giao cho nhà trường',
      school_name: 'TH Đống Đa',
      location: 'Hà Nội',
      target_amount: 42000000,
      raised_amount: 42000000,
      progress_percentage: 100,
      status: 'completed',
      image_url: '/images/truong-dong-da.jpg',
      created_at: '2023-10-20T00:00:00Z',
      updated_at: new Date().toISOString(),
    },
  ];
}

// Khởi động background job
async function startBackgroundJob() {
  if (isJobRunning) return;
  
  isJobRunning = true;
  console.log('🚀 Starting background job for sotute data...');
  
  // Fetch ngay lập tức
  await fetchSotuteData();
  
  // Sau đó fetch định kỳ
  setInterval(async () => {
    try {
      await fetchSotuteData();
    } catch (error) {
      console.error('❌ Background job interval error:', error);
    }
  }, FETCH_INTERVAL);
}

// Khởi động job khi server start
if (typeof window === 'undefined') {
  // Chỉ chạy trên server side
  startBackgroundJob().catch(console.error);
}

// API Routes
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get('refresh') === 'true';
    const status = searchParams.get('status');
    
    // Nếu cache không có dữ liệu hoặc quá cũ, fetch ngay
    const now = Date.now();
    const isCacheExpired = (now - lastFetch) > CACHE_DURATION;
    
    if (cachedProjects.length === 0 || (forceRefresh && isCacheExpired)) {
      console.log('🔄 API: Force refresh dữ liệu sotute...');
      try {
        await fetchSotuteData();
      } catch (error) {
        console.error('❌ API: Không thể fetch dữ liệu từ sotute.com:', error);
        return NextResponse.json({
          success: false,
          error: 'Không thể kết nối tới sotute.com để lấy dữ liệu dự án',
          message: 'Vui lòng thử lại sau hoặc liên hệ admin',
          data: [],
          total: 0,
        }, { status: 503 });
      }
    }
    
    // Nếu vẫn không có dữ liệu cache
    if (cachedProjects.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Chưa có dữ liệu dự án',
        message: 'Hệ thống đang cập nhật dữ liệu, vui lòng thử lại sau',
        data: [],
        total: 0,
      }, { status: 503 });
    }
    
    let projects = cachedProjects;
    
    // Filter theo status nếu có
    if (status && ['active', 'pending', 'completed'].includes(status)) {
      projects = cachedProjects.filter(p => p.status === status);
    }
    
    // Return data với metadata
    return NextResponse.json({
      success: true,
      data: projects,
      total: projects.length,
      cached_at: new Date(lastFetch).toISOString(),
      cache_age_minutes: Math.round((now - lastFetch) / (1000 * 60)),
      is_fresh: !isCacheExpired,
      metadata: {
        total_projects: cachedProjects.length,
        active_projects: cachedProjects.filter(p => p.status === 'active').length,
        pending_projects: cachedProjects.filter(p => p.status === 'pending').length,
        completed_projects: cachedProjects.filter(p => p.status === 'completed').length,
      }
    });
    
  } catch (error) {
    console.error('❌ API Error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Lỗi hệ thống khi lấy dữ liệu dự án',
      message: 'Vui lòng thử lại sau',
      data: [],
      total: 0,
    }, { status: 500 });
  }
}

// POST endpoint để force refresh cache
export async function POST(request: Request) {
  try {
    console.log('🔄 API: Manual refresh triggered...');
    await fetchSotuteData();
    
    return NextResponse.json({
      success: true,
      message: 'Cache đã được làm mới',
      data: cachedProjects,
      total: cachedProjects.length,
      refreshed_at: new Date(lastFetch).toISOString(),
    });
    
  } catch (error) {
    console.error('❌ API Manual refresh error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Không thể làm mới cache',
      data: cachedProjects,
    }, { status: 500 });
  }
} 