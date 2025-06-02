'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingLink from '../components/LoadingLink';
import ProjectCard from '../components/ProjectCard';
import { useSotuteData } from '../hooks/useSotuteData';

export default function TruongSach() {
  const { 
    projects,
    loading, 
    error, 
    refreshData, 
    metadata 
  } = useSotuteData();

  // State cho pagination
  const [visibleCount, setVisibleCount] = useState(4); // Mặc định hiển thị 4 cards (desktop)
  const [isMobile, setIsMobile] = useState(false);

  // Tính toán derived data từ projects
  const activeProjects = projects.filter(p => p.status === 'active');
  const pendingProjects = projects.filter(p => p.status === 'pending');
  const completedProjects = projects.filter(p => p.status === 'completed');

  // Kiểm tra screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      // Reset visible count khi change screen size
      setVisibleCount(mobile ? 2 : 4);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Reset visible count khi có projects mới
  useEffect(() => {
    if (projects.length > 0) {
      setVisibleCount(isMobile ? 2 : 4);
    }
  }, [projects.length, isMobile]);

  // Function để load more projects
  const loadMore = () => {
    const increment = isMobile ? 2 : 4;
    setVisibleCount(prev => Math.min(prev + increment, projects.length));
  };

  // Projects để hiển thị (slice theo visibleCount)
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  useEffect(() => {
    // Load GetFly form script
    const loadGetFlyForm = () => {
      const r = window.document.referrer !== "" ? window.document.referrer : window.location.origin;
      const regex = /(https?:\/\/.*?)\//g; 
      const furl = regex.exec(r); 
      let referrer = furl ? furl[0] : r;
      
      const f = document.createElement("iframe");
      const url_string = new URLSearchParams(window.location.search);
      
      // Handle UTM parameters
      const utmParams = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term', 'utm_user', 'utm_account'];
      
      utmParams.forEach(param => {
        const cookieMatch = document.cookie.match(new RegExp(param + '=([^;]+)'));
        if ((!url_string.has(param) || url_string.get(param) === '') && cookieMatch != null) {
          referrer += "&" + cookieMatch[0];
        } else { 
          referrer += url_string.get(param) != null ? `&${param}=` + url_string.get(param) : "";
        }
      });
      
      referrer += "&full_url=" + encodeURIComponent(window.location.href);
      
      f.setAttribute("src", "https://convoi.getflycrm.com/api/forms/viewform?key=9TdyZEuWdlkco6SaY36GQKZAE6z33ddazYcl6XTxxs8jCMPVHi&referrer=" + referrer);
      f.style.width = "100%";
      f.style.height = "600px"; // Set a reasonable height
      f.setAttribute("frameborder", "0");
      f.setAttribute("marginheight", "0");
      f.setAttribute("marginwidth", "0");
      
      const container = document.getElementById("getfly-optin-form-iframe-1748841527");
      if (container) {
        container.innerHTML = ''; // Clear any existing content
        container.appendChild(f);
      }
    };

    // Load the form after component mounts
    loadGetFlyForm();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Chương trình <span className="text-green-700">TRƯỜNG SẠCH</span>
              </h1>
              {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                "Tôi muốn có nhà vệ sinh sạch để học sinh sử dụng khi đến trường"
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường
              </p> */}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Đăng ký trường học tham gia chương trình
                  </h2>
                  <p className="text-gray-600">
                    Hãy để lại thông tin trường học của bạn, chúng tôi sẽ liên hệ và hỗ trợ trong thời gian sớm nhất.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Form đăng ký tham gia chương trình
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Vui lòng điền đầy đủ thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
                  </p>
                </div>
                
                {/* GetFly Form Container */}
                <div id="getfly-optin-form-iframe-1748841527" className="min-h-[500px] w-full">
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-gray-600">Đang tải form đăng ký...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Giới thiệu chương trình TRƯỜNG SẠCH */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Về chương trình <span className="text-green-700">TRƯỜNG SẠCH</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Hiểu rõ hơn về sứ mệnh, triển khai và tác động của chương trình
                </p>
              </div>

              <div className="space-y-8">
                {/* Chương trình là gì */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">2</span>
                    Chương trình "TRƯỜNG SẠCH" là gì?
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">
                      Chương trình "TRƯỜNG SẠCH" nằm trong dự án tổng thể <strong>Clean for All</strong>, nhằm mang đến giải pháp cải thiện vệ sinh công cộng tại Việt Nam, tập trung trước hết vào các cơ sở giáo dục. Chúng tôi hướng tới mô hình <strong>Doanh nghiệp xã hội</strong> – đặt mục tiêu tác động xã hội song song với hiệu quả kinh tế, cụ thể:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li><strong>Giải quyết "nỗi ám ảnh nhà vệ sinh công cộng":</strong> Cung cấp và duy trì giải pháp BRT-3P, giúp các trường học có nhà vệ sinh sạch, được khử khuẩn, khử mùi mỗi ngày.</li>
                      <li><strong>Đóng góp vào sự phát triển bền vững:</strong> Sử dụng chất tẩy rửa ít tác hại môi trường BRT-3, kết hợp nước cao áp, công nghệ IoT, AI, Robot để tối ưu quy trình, giảm ô nhiễm và tiết kiệm nguồn lực.</li>
                      <li><strong>Huy động nguồn lực toàn xã hội:</strong> Kết nối với chính quyền, doanh nghiệp, tổ chức phi chính phủ, cộng đồng thiện nguyện… để tạo sức mạnh tổng hợp, giảm áp lực cho ngân sách.</li>
                    </ul>
                  </div>
                </div>

                {/* Triển khai như thế nào */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">3</span>
                    Chương trình "TRƯỜNG SẠCH" triển khai như thế nào?
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Giải pháp tổng thể */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 text-blue-800">Giải pháp tổng thể</h4>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">🔬 Công nghệ làm sạch tiên tiến</h5>
                          <p className="text-gray-700 text-sm">Dung dịch bọt tuyết cao áp gốc sinh học BRT-3 kết hợp máy rửa cao áp để làm sạch, khử khuẩn và khử mùi nhà vệ sinh công cộng mỗi ngày.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">👥 Đội ngũ chuyên gia hàng đầu</h5>
                          <p className="text-gray-700 text-sm">Chuyên gia giải pháp với hơn 20 năm kinh nghiệm trong ngành tẩy rửa công nghiệp. Chuyên gia công nghệ thông tin (IoT, AI, Robot) đồng hành.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">🌱 Định hướng xanh và bền vững</h5>
                          <p className="text-gray-700 text-sm">Ưu tiên chất tẩy rửa ít độc hại, ứng dụng IoT để quản lý thiết bị, triển khai AI và Robot để tối ưu hóa quy trình.</p>
                        </div>
                      </div>
                    </div>

                    {/* Triển khai cụ thể */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 text-blue-800">Triển khai cụ thể</h4>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">🔧 Giải pháp kỹ thuật</h5>
                          <p className="text-gray-700 text-sm">Máy móc làm sạch tiên tiến, dung dịch tẩy rửa gốc sinh học BRT-3 và quy trình thi công đơn giản giúp đảm bảo tính hiệu quả, tiết kiệm thời gian.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">💰 Giải pháp tài chính</h5>
                          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                            <li>Quyên góp bằng tiền trên Sotute.com</li>
                            <li>Phối hợp các NGO trong và ngoài nước</li>
                            <li>Dịch vụ CSR cho doanh nghiệp</li>
                            <li>Trích doanh thu từ các đối tác</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">📚 Giải pháp tăng cường giáo dục</h5>
                          <p className="text-gray-700 text-sm">Triển khai giáo dục – huấn luyện để nâng cao ý thức vệ sinh công cộng, tạo sự đồng thuận rộng rãi trong xã hội.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sự khác biệt */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">✨</span>
                    Sự khác biệt
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-3xl mb-3">🌍</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Giải pháp toàn diện</h4>
                      <p className="text-gray-700 text-sm">Kinh tế – xã hội – môi trường. Gói giải pháp khép kín từ máy móc, dung dịch đến đào tạo vận hành.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-3xl mb-3">🤖</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Công nghệ hiện đại</h4>
                      <p className="text-gray-700 text-sm">IoT, AI được đưa vào giám sát chất lượng, dự đoán bảo trì, giảm thiểu chi phí vận hành.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-3xl mb-3">🤝</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Xã hội hóa kinh phí</h4>
                      <p className="text-gray-700 text-sm">Tạo cơ hội cho mọi thành phần trong xã hội đóng góp vào mục tiêu chung.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-3xl mb-3">👨‍💼</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Đội ngũ chuyên gia</h4>
                      <p className="text-gray-700 text-sm">Kết hợp kiến thức kỹ thuật, am hiểu thị trường và kỹ năng kinh doanh chuyên nghiệp.</p>
                    </div>
                  </div>
                </div>

                {/* Liên hệ với SDGs */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">4</span>
                    Liên hệ với Mục tiêu Phát triển Bền vững (SDGs)
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">3</div>
                        <h4 className="font-semibold text-gray-900">Sức khỏe và Cuộc sống Khỏe mạnh</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Nhà vệ sinh sạch đóng vai trò quan trọng trong việc ngăn ngừa dịch bệnh lây lan, giảm nguy cơ mắc bệnh nan y và mạn tính.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">4</div>
                        <h4 className="font-semibold text-gray-900">Giáo dục Chất lượng</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Môi trường học tập tốt hơn giúp học sinh tập trung học tập, giảm tình trạng nghỉ học do bệnh tật.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">17</div>
                        <h4 className="font-semibold text-gray-900">Quan hệ đối tác</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Tạo liên kết bền vững giữa chính quyền, doanh nghiệp, NGOs, cộng đồng để nhân rộng mô hình "TRƯỜNG SẠCH".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Status Section - Dữ liệu thực từ SOTUTE */}
        <section className="section-padding bg-gray-50">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Tình trạng các dự án thực tế
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Dữ liệu trực tiếp từ nền tảng SOTUTE
              </p>
              
              {/* Status và Cache Info */}
              <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
                {loading && (
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">Đang cập nhật dữ liệu...</span>
                  </div>
                )}
                
                {/* {metadata && !loading && (
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        Cập nhật: {new Date(metadata.cached_at).toLocaleString('vi-VN')}
                      </span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      metadata.is_fresh && metadata.cache_age_minutes < 5 
                        ? 'bg-green-100 text-green-800' 
                        : metadata.cache_age_minutes < 10
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {metadata.is_fresh && metadata.cache_age_minutes < 5 
                        ? '🟢 Fresh' 
                        : metadata.cache_age_minutes < 10
                        ? '🟡 Aging'
                        : '🔴 Stale'}
                    </div>
                  </div>
                )} */}
                
                {/* <button
                  onClick={refreshData}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white text-sm px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Đang tải...</span>
                    </>
                  ) : (
                    <>
                      <span>🔄</span>
                      <span>Làm mới</span>
                    </>
                  )}
                </button> */}
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8 max-w-md mx-auto">
                  <div className="flex items-center gap-2">
                    <span>⚠️</span>
                    <span className="text-sm">{error}</span>
                  </div>
                </div>
              )}

              {/* Summary Stats */}
              {metadata && !loading && (
                <div className="flex justify-center gap-8 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>{metadata.active_projects} Đang thực hiện</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>{metadata.pending_projects} Vận động kinh phí</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>{metadata.completed_projects} Đã hoàn thành</span>
                  </div>
                </div>
              )}
            </div>

            {loading ? (
              /* Loading skeleton */
              <div className="masonry-container columns-1 md:columns-2 lg:columns-3 xl:columns-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={`loading_skeleton_${i}`} className="masonry-item">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                      <div className="h-12 bg-gray-200"></div>
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="flex gap-2">
                          <div className="h-8 bg-gray-200 rounded flex-1"></div>
                          <div className="h-8 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Không thể kết nối tới SOTUTE
                </h3>
                <p className="text-gray-600 mb-6">
                  Hệ thống đang gặp sự cố kết nối. Vui lòng thử lại sau.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Thử lại
                </button>
              </div>
            ) : projects.length === 0 ? (
              <div className="text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Chưa có dữ liệu dự án
                </h3>
                <p className="text-gray-600 mb-6">
                  Hệ thống đang cập nhật dữ liệu từ SOTUTE, vui lòng thử lại sau.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Tải lại
                </button>
              </div>
            ) : (
              /* Table layout với pagination */
              <>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Table Header */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Dự án
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                            Trường học
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                            Địa điểm
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mục tiêu
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                            Đã quyên góp
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tiến độ
                          </th>
                          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Trạng thái
                          </th> */}
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hành động
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {visibleProjects.map((project, index) => (
                          <tr key={`${project.id}_${index}`} className="hover:bg-gray-50 transition-colors duration-200">
                            {/* Dự án (with image and title) */}
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-16 w-16">
                                  <img 
                                    className="h-16 w-16 rounded-lg object-cover border"
                                    src={project.image_url || '/images/default-project.jpg'} 
                                    alt={project.title}
                                    onError={(e) => {
                                      e.currentTarget.src = '/images/default-project.jpg';
                                    }}
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900 line-clamp-2">
                                    {project.title}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {project.categories?.join(', ') || 'Chương trình trường sạch'}
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* Trường học */}
                            <td className="px-6 py-4 hidden md:table-cell">
                              <div className="text-sm text-gray-900">
                                {project.school_name || 'N/A'}
                              </div>
                            </td>

                            {/* Địa điểm */}
                            <td className="px-6 py-4 hidden lg:table-cell">
                              <div className="text-sm text-gray-900">
                                {project.location || 'N/A'}
                              </div>
                            </td>

                            {/* Mục tiêu */}
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium text-gray-900">
                                {project.target_amount.toLocaleString('vi-VN')}đ
                              </div>
                            </td>

                            {/* Đã quyên góp */}
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <div className="text-sm text-gray-900">
                                {project.raised_amount.toLocaleString('vi-VN')}đ
                              </div>
                            </td>

                            {/* Tiến độ */}
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      project.progress_percentage >= 100 
                                        ? 'bg-green-600' 
                                        : project.progress_percentage >= 50 
                                        ? 'bg-blue-600' 
                                        : 'bg-orange-600'
                                    }`}
                                    style={{ width: `${Math.min(project.progress_percentage, 100)}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                                  {project.progress_percentage.toFixed(1)}%
                                </span>
                              </div>
                            </td>

                            {/* Trạng thái */}
                            {/* <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                project.status === 'completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : project.status === 'active' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-orange-100 text-orange-800'
                              }`}>
                                {project.status === 'completed' ? 'Hoàn thành' : 
                                 project.status === 'active' ? 'Đang thực hiện' : 'Vận động kinh phí'}
                              </span>
                            </td> */}

                            {/* Hành động */}
                            <td className="px-6 py-4">
                              <div className="flex flex-col sm:flex-row gap-2">
                                {project.url && (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                                  >
                                  Quyên góp
                                  </a>
                                )}
                                {/* {project.url && (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    Chi tiết
                                  </a>
                                )} */}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination footer */}
                  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <div className="text-sm text-gray-700">
                        Hiển thị {visibleCount} / {projects.length} dự án
                      </div>
                      {hasMore && (
                        <button
                          onClick={loadMore}
                          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Xem thêm
                        </button>
                      )}
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Hiển thị <span className="font-medium">{Math.min(visibleCount, projects.length)}</span> trong tổng số{' '}
                          <span className="font-medium">{projects.length}</span> dự án
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {hasMore && (
                          <button
                            onClick={loadMore}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                          >
                            <span className="flex items-center gap-2">
                              <span>Xem thêm {isMobile ? 2 : 4} dự án</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </button>
                        )}
                        
                        {!hasMore && projects.length > (isMobile ? 2 : 4) && (
                          <button
                            onClick={() => setVisibleCount(isMobile ? 2 : 4)}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                          >
                            ↑ Thu gọn
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary message when all viewed */}
                {!hasMore && projects.length > (isMobile ? 2 : 4) && (
                  <div className="text-center mt-8">
                    <div className="text-gray-600">
                      <span className="text-lg">🎉</span>
                      <span className="ml-2">Bạn đã xem hết tất cả {projects.length} dự án</span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 