import { NextResponse } from 'next/server';
import { SotuteProject } from '../../services/sotuteService';

// In-memory cache cho dữ liệu sotute
let cachedProjects: SotuteProject[] = [];
let lastFetch: number = 0;
let isJobRunning = false;
const CACHE_DURATION = 5 * 60 * 1000; // 5 phút
const FETCH_INTERVAL = 10 * 60 * 1000; // 10 phút

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
        console.warn('⚠️ Background job: Không parse được dữ liệu, giữ nguyên cache cũ');
        return cachedProjects;
      }
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('❌ Background job error:', error);
    
    // Nếu chưa có cache hoặc cache quá cũ, sử dụng mock data
    if (cachedProjects.length === 0 || (Date.now() - lastFetch) > (24 * 60 * 60 * 1000)) {
      console.log('📋 Background job: Sử dụng mock data');
      cachedProjects = getMockData();
      lastFetch = Date.now();
    }
    
    return cachedProjects;
  }
}

// Parse HTML từ sotute.com
function parseProjectFromHTML(html: string): SotuteProject[] {
  const projects: SotuteProject[] = [];
  
  try {
    if (html.includes('campaign-block')) {
      console.log('🔍 Tìm thấy campaign blocks trong HTML');
      
      const titleMatches = html.match(/<h4 class="title">[\s\S]*?<a[^>]*>([^<]+)<\/a>[\s\S]*?<\/h4>/g) || [];
      console.log(`📝 Tìm thấy ${titleMatches.length} titles`);
      
      for (const titleMatch of titleMatches) {
        try {
          const titleExtract = titleMatch.match(/<a[^>]*>([^<]+)<\/a>/);
          const title = titleExtract ? titleExtract[1].trim() : '';
          
          if (!title) continue;
          
          const urlMatch = titleMatch.match(/<a href="([^"]*)"[^>]*>/);
          const url = urlMatch ? urlMatch[1].trim() : '';
          const id = url ? url.split('/').filter(Boolean).pop() || `project_${Date.now()}` : `project_${Date.now()}`;
          
          const imageMatches = html.match(/<img[^>]*src="([^"]*)"[^>]*>/g) || [];
          let image_url = '';
          if (imageMatches.length > 0) {
            const firstImage = imageMatches[0]?.match(/src="([^"]*)"/);
            image_url = firstImage ? firstImage[1] : '';
          }
          
          const targetMatches = html.match(/<span class="value-goal">[\s\S]*?<bdi>([0-9.,]+)/g) || [];
          const raisedMatches = html.match(/<span class="value-raised">[\s\S]*?<bdi>([0-9.,]+)/g) || [];
          const progressMatches = html.match(/<div class="campaign-percent_raised">([0-9.]+)%<\/div>/g) || [];
          
          let target_amount = 0;
          let raised_amount = 0;
          let progress_percentage = 0;
          
          if (targetMatches.length > 0) {
            const amountMatch = targetMatches[0]?.match(/([0-9.,]+)/);
            target_amount = amountMatch ? parseFloat(amountMatch[1].replace(/[.,]/g, '')) : 0;
          }
          
          if (raisedMatches.length > 0) {
            const amountMatch = raisedMatches[0]?.match(/([0-9.,]+)/);
            raised_amount = amountMatch ? parseFloat(amountMatch[1].replace(/[.,]/g, '')) : 0;
          }
          
          if (progressMatches.length > 0) {
            const percentMatch = progressMatches[0]?.match(/([0-9.]+)/);
            progress_percentage = percentMatch ? parseFloat(percentMatch[1]) : 0;
          }
          
          const categoriesMatch = html.match(/<span class="posted_in">(.*?)<\/span>/);
          const categories: string[] = [];
          if (categoriesMatch) {
            const categoryLinks = categoriesMatch[1].match(/<a[^>]*rel="tag">([^<]*)<\/a>/g) || [];
            for (const link of categoryLinks) {
              const catMatch = link.match(/>([^<]*)</);
              if (catMatch) categories.push(catMatch[1].trim());
            }
          }
          
          const daysMatch = html.match(/<span class="info-value time-remaining-desc">(\d+)<\/span>/);
          const days_remaining = daysMatch ? parseInt(daysMatch[1]) : 0;
          
          let status: 'active' | 'completed' | 'pending' = 'active';
          if (categories.some(cat => cat.includes('Đã hoàn thành'))) {
            status = 'completed';
          } else if (progress_percentage < 10) {
            status = 'pending';
          }
          
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
          }
        } catch (error) {
          console.error('❌ Lỗi parse project individual:', error);
        }
      }
    }
  } catch (error) {
    console.error('❌ Lỗi parse HTML từ sotute.com:', error);
  }
  
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
      await fetchSotuteData();
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
      error: 'Không thể lấy dữ liệu dự án',
      data: cachedProjects.length > 0 ? cachedProjects : getMockData(),
      total: cachedProjects.length > 0 ? cachedProjects.length : getMockData().length,
      cached_at: new Date(lastFetch).toISOString(),
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