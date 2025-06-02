'use client';

import { useEffect } from 'react';
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

  // Tính toán derived data từ projects
  const activeProjects = projects.filter(p => p.status === 'active');
  const pendingProjects = projects.filter(p => p.status === 'pending');
  const completedProjects = projects.filter(p => p.status === 'completed');

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
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                "Tôi muốn có nhà vệ sinh sạch để học sinh sử dụng khi đến trường"
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường
              </p>
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
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-24 w-24 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-green-700 font-semibold text-lg">Chương trình Trường Sạch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GetFly Form Section */}
        <section className="section-padding">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Form đăng ký tham gia chương trình
                  </h2>
                  <p className="text-gray-600">
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
              /* Masonry layout - hiển thị tất cả dự án */
              <div className="masonry-container columns-1 md:columns-2 lg:columns-3 xl:columns-4">
                {projects.map((project, index) => (
                  <div key={`${project.id}_${index}`} className="masonry-item">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 