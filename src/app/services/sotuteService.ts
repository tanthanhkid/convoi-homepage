export interface SotuteProject {
  id: string;
  title: string;
  description: string;
  school_name: string;
  location: string;
  target_amount: number;
  raised_amount: number;
  progress_percentage: number;
  status: 'active' | 'completed' | 'pending';
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface SotuteApiResponse {
  success: boolean;
  data: SotuteProject[];
  total: number;
  page: number;
  limit: number;
}

class SotuteService {
  private baseUrl = 'https://sotute.com';
  private apiEndpoint = '/api/projects'; // Endpoint giả định
  private cache: SotuteProject[] = [];
  private lastFetch: number = 0;
  private cacheExpiry = 5 * 60 * 1000; // 5 phút cache
  private intervalId: NodeJS.Timeout | null = null;
  private listeners: ((projects: SotuteProject[]) => void)[] = [];

  constructor() {
    // Khởi tạo job chạy ngầm
    this.startBackgroundJob();
  }

  // Bắt đầu job chạy ngầm
  startBackgroundJob() {
    // Fetch ngay lập tức
    this.fetchProjects();
    
    // Sau đó fetch mỗi 5 phút
    this.intervalId = setInterval(() => {
      this.fetchProjects();
    }, this.cacheExpiry);
  }

  // Dừng job chạy ngầm
  stopBackgroundJob() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Đăng ký listener để nhận thông báo khi có dữ liệu mới
  subscribe(callback: (projects: SotuteProject[]) => void) {
    this.listeners.push(callback);
    // Gọi callback ngay với dữ liệu hiện tại nếu có
    if (this.cache.length > 0) {
      callback(this.cache);
    }
    
    // Trả về function để unsubscribe
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Thông báo cho tất cả listeners
  private notifyListeners(projects: SotuteProject[]) {
    this.listeners.forEach(callback => callback(projects));
  }

  // Fetch dữ liệu từ sotute.com
  async fetchProjects(): Promise<SotuteProject[]> {
    try {
      console.log('🔄 Đang lấy dữ liệu từ sotute.com...');
      
      // Thử fetch từ API thực
      const response = await fetch(`${this.baseUrl}${this.apiEndpoint}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data: SotuteApiResponse = await response.json();
        this.cache = data.data;
        this.lastFetch = Date.now();
        console.log(`✅ Đã lấy ${data.data.length} dự án từ sotute.com`);
        this.notifyListeners(this.cache);
        return this.cache;
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.warn('⚠️ Không thể lấy dữ liệu từ sotute.com, sử dụng dữ liệu mẫu:', error);
      
      // Sử dụng dữ liệu mẫu khi không thể fetch từ API
      const mockData = this.getMockData();
      this.cache = mockData;
      this.lastFetch = Date.now();
      this.notifyListeners(this.cache);
      return this.cache;
    }
  }

  // Lấy dữ liệu từ cache hoặc fetch mới
  async getProjects(forceRefresh = false): Promise<SotuteProject[]> {
    const now = Date.now();
    const isCacheValid = (now - this.lastFetch) < this.cacheExpiry;

    if (!forceRefresh && this.cache.length > 0 && isCacheValid) {
      console.log('📋 Sử dụng dữ liệu từ cache');
      return this.cache;
    }

    return await this.fetchProjects();
  }

  // Lấy dự án theo trạng thái
  getProjectsByStatus(status: SotuteProject['status']): SotuteProject[] {
    return this.cache.filter(project => project.status === status);
  }

  // Lấy dự án đang thực hiện
  getActiveProjects(): SotuteProject[] {
    return this.getProjectsByStatus('active');
  }

  // Lấy dự án đang vận động kinh phí
  getPendingProjects(): SotuteProject[] {
    return this.getProjectsByStatus('pending');
  }

  // Lấy dự án đã hoàn thành
  getCompletedProjects(): SotuteProject[] {
    return this.getProjectsByStatus('completed');
  }

  // Dữ liệu mẫu khi không thể fetch từ API
  private getMockData(): SotuteProject[] {
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

  // Format số tiền
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('₫', 'đ');
  }

  // Cleanup khi component unmount
  destroy() {
    this.stopBackgroundJob();
    this.listeners = [];
  }
}

// Tạo instance singleton
export const sotuteService = new SotuteService();

// Export default
export default sotuteService; 