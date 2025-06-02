# Tích hợp SOTUTE - Job chạy ngầm lấy dữ liệu

## Tổng quan

Hệ thống này tự động lấy dữ liệu các dự án từ nền tảng SOTUTE để hiển thị thông tin thời gian thực trên trang Trường Sạch.

## Cấu trúc hệ thống

### 1. SotuteService (`src/app/services/sotuteService.ts`)

**Tính năng chính:**
- 🔄 **Job chạy ngầm**: Tự động fetch dữ liệu mỗi 5 phút
- 💾 **Caching thông minh**: Lưu cache để giảm tải API
- 🔔 **Real-time notifications**: Thông báo cho các component khi có dữ liệu mới
- 🛡️ **Error handling**: Fallback sang dữ liệu mẫu khi API không khả dụng
- 🎯 **Type-safe**: Đầy đủ TypeScript interfaces

**API Endpoints:**
```typescript
// Endpoint chính (giả định)
https://sotute.com/api/projects

// Response format:
{
  "success": boolean,
  "data": SotuteProject[],
  "total": number,
  "page": number,
  "limit": number
}
```

**Cách sử dụng:**
```typescript
import { sotuteService } from '../services/sotuteService';

// Lấy dữ liệu (từ cache hoặc fetch mới)
const projects = await sotuteService.getProjects();

// Force refresh
const freshData = await sotuteService.getProjects(true);

// Lấy theo trạng thái
const activeProjects = sotuteService.getActiveProjects();
const pendingProjects = sotuteService.getPendingProjects();
const completedProjects = sotuteService.getCompletedProjects();
```

### 2. useSotuteData Hook (`src/app/hooks/useSotuteData.ts`)

**Tính năng:**
- ⚛️ **React Integration**: Hook để sử dụng trong React components
- 🔄 **Auto-updates**: Tự động cập nhật khi có dữ liệu mới từ background job
- 🎯 **Derived data**: Tự động tính toán dữ liệu theo trạng thái
- 🎛️ **Manual refresh**: Cho phép làm mới thủ công
- ⏱️ **Loading states**: Quản lý trạng thái loading và error

**Cách sử dụng:**
```typescript
import { useSotuteData } from '../hooks/useSotuteData';

function MyComponent() {
  const { 
    projects,
    activeProjects,
    pendingProjects, 
    completedProjects,
    loading,
    error,
    refreshData,
    lastUpdated 
  } = useSotuteData();

  return (
    <div>
      {loading && <p>Đang tải...</p>}
      {error && <p>Lỗi: {error}</p>}
      
      <button onClick={refreshData}>Làm mới</button>
      
      {activeProjects.map(project => 
        <ProjectCard key={project.id} project={project} />
      )}
    </div>
  );
}
```

### 3. ProjectCard Component (`src/app/components/ProjectCard.tsx`)

**Tính năng:**
- 🎨 **UI thân thiện**: Hiển thị đẹp mắt với progress bar
- 🏷️ **Status indicators**: Màu sắc khác nhau theo trạng thái dự án
- 💰 **Currency formatting**: Format số tiền theo chuẩn Việt Nam
- 🔗 **Deep linking**: Link trực tiếp đến SOTUTE để quyên góp
- 📱 **Responsive**: Tương thích đa thiết bị

## Luồng hoạt động

### 1. Khởi tạo (App start)
```
App starts → SotuteService constructor → startBackgroundJob() → 
First fetch → Update cache → Notify subscribers
```

### 2. Background job (Mỗi 5 phút)
```
Timer triggers → fetchProjects() → 
Try API call → Success? Update cache : Use mock data → 
Notify all subscribers → Components re-render
```

### 3. Component lifecycle
```
Component mounts → useSotuteData() → Subscribe to service → 
Receive updates → Auto re-render → 
Component unmounts → Unsubscribe
```

## Data Flow

```
SOTUTE API ──┐
             ├─→ SotuteService ──→ Cache ──→ Subscribers
Mock Data ───┘                              ┌─→ useSotuteData Hook
                                           ├─→ ProjectCard Component  
                                           └─→ TruongSach Page
```

## Cấu hình

### Thời gian cache
```typescript
private cacheExpiry = 5 * 60 * 1000; // 5 phút
```

### API endpoints
```typescript
private baseUrl = 'https://sotute.com';
private apiEndpoint = '/api/projects';
```

### Mock data
Khi không thể kết nối API, hệ thống sử dụng dữ liệu mẫu được định nghĩa trong `getMockData()`.

## Monitoring & Debugging

### Console logs
- 🔄 `"Đang lấy dữ liệu từ sotute.com..."`
- ✅ `"Đã lấy X dự án từ sotute.com"`
- ⚠️ `"Không thể lấy dữ liệu từ sotute.com, sử dụng dữ liệu mẫu"`
- 📋 `"Sử dụng dữ liệu từ cache"`

### Performance
- Cache để giảm API calls
- Lazy loading components
- Optimized re-renders với proper dependencies

## Troubleshooting

### Không có dữ liệu hiển thị
1. Kiểm tra console logs
2. Xem network tab trong DevTools
3. Verify API endpoint
4. Check mock data fallback

### Performance issues
1. Kiểm tra cache expiry time
2. Monitor fetch frequency
3. Check component re-render patterns

### API errors
- Hệ thống tự động fallback sang mock data
- Hiển thị error message cho user
- Retry mechanism trong background job

## Tương lai

### Planned improvements
- [ ] Websocket connection cho real-time updates
- [ ] Better error retry strategies  
- [ ] Progressive loading với pagination
- [ ] Offline support với service worker
- [ ] Analytics tracking
- [ ] A/B testing cho UI components

### API enhancements
- [ ] Authentication headers
- [ ] Rate limiting handling
- [ ] Partial updates (delta sync)
- [ ] GraphQL integration
- [ ] Caching strategies (Redis, etc.)

---

## Liên hệ

Nếu có vấn đề với tích hợp SOTUTE, vui lòng liên hệ team phát triển. 