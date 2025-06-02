'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingLink from '../components/LoadingLink';
import ProjectCard from '../components/ProjectCard';
import { useSotuteData } from '../hooks/useSotuteData';

export default function TruongSach() {
  const { 
    activeProjects, 
    pendingProjects, 
    completedProjects,
    loading, 
    error, 
    refreshData, 
    lastUpdated 
  } = useSotuteData();

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
              
              {/* Status và Last Updated */}
              <div className="flex justify-center items-center gap-4 mb-8">
                {loading && (
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">Đang cập nhật dữ liệu...</span>
                  </div>
                )}
                
                {lastUpdated && !loading && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">
                      Cập nhật lúc: {lastUpdated.toLocaleTimeString('vi-VN')}
                    </span>
                  </div>
                )}
                
                <button
                  onClick={refreshData}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white text-sm px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
                >
                  🔄 Làm mới
                </button>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8 max-w-md mx-auto">
                  <p className="text-sm">⚠️ {error}</p>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Đang thực hiện */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Đang thực hiện</h3>
                    <p className="text-green-600 font-medium">{activeProjects.length} dự án đang lắp đặt</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-gray-600">Đang tải dữ liệu...</p>
                    </div>
                  ) : activeProjects.length > 0 ? (
                    activeProjects.slice(0, 3).map((project) => (
                      <ProjectCard key={project.id} project={project} showDonateButton={false} />
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>Hiện tại không có dự án nào đang thực hiện</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Đang vận động kinh phí */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Đang vận động kinh phí</h3>
                    <p className="text-orange-600 font-medium">{pendingProjects.length} dự án cần hỗ trợ</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-2 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-gray-600">Đang tải dữ liệu...</p>
                    </div>
                  ) : pendingProjects.length > 0 ? (
                    pendingProjects.slice(0, 3).map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>Hiện tại không có dự án nào đang vận động kinh phí</p>
                    </div>
                  )}
                </div>
                
                {pendingProjects.length > 0 && (
                  <div className="mt-6 pt-6 border-t">
                    <a 
                      href="https://sotute.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full text-center block"
                    >
                      Xem tất cả trên SOTUTE
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Dự án đã hoàn thành */}
            {completedProjects.length > 0 && (
              <div className="mt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Dự án đã hoàn thành
                  </h3>
                  <p className="text-gray-600">
                    {completedProjects.length} dự án đã thành công cải thiện môi trường học tập
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedProjects.slice(0, 6).map((project) => (
                    <ProjectCard key={project.id} project={project} showDonateButton={false} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 