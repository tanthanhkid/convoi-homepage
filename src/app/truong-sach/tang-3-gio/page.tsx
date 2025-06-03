'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadingLink from '../../components/LoadingLink';

export default function Tang3Gio() {
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
      
      f.setAttribute("src", "https://convoi.getflycrm.com/api/forms/viewform?key=mxl6yDGud7fAwsiZ80hlVnr7VJpBTFNtSQ08z4SbsSZXCejjk0&referrer=" + referrer);
      f.style.width = "100%";
      f.style.height = "700px";
      f.setAttribute("frameborder", "0");
      f.setAttribute("marginheight", "0");
      f.setAttribute("marginwidth", "0");
      
      const container = document.getElementById("getfly-optin-form-iframe-1748906938");
      if (container) {
        container.innerHTML = '';
        container.appendChild(f);
      }
    };

    loadGetFlyForm();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-green-600 py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-8">
              <LoadingLink 
                href="/truong-sach"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Quay lại Chương trình Trường Sạch
              </LoadingLink>
            </div>

            {/* Program Type Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-yellow-400 text-yellow-900 rounded-full px-6 py-3 font-bold text-lg">
                <span className="mr-2">⭐</span>
                Chương trình trải nghiệm
                <span className="ml-2">⭐</span>
              </div>
            </div>

            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white text-sm font-medium mb-6">
                🎉 Chương trình đặc biệt
              </div>

              {/* Main Title */}
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Chương trình <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  TRƯỜNG SẠCH
                </span>
              </h1>

              {/* Gift Banner */}
              <div className="relative inline-block mb-8">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl animate-bounce">🎁</span>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white">
                        MIỄN PHÍ 3 GIỜ
                      </h2>
                      <p className="text-white/90 text-lg">
                        Làm sạch nhà vệ sinh
                      </p>
                    </div>
                    <span className="text-4xl animate-bounce">✨</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-lg animate-pulse">
                  ⭐
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Dành riêng cho các trường học tại <strong>TP. Hồ Chí Minh</strong>
              </p>

              {/* CTA Button */}
              <a
                href="#dang-ky-form"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">📝</span>
                Đăng ký ngay
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Introduction */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12 mb-16 shadow-xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center bg-blue-600 text-white rounded-full px-6 py-3 mb-6">
                    <span className="text-2xl mr-3">🏢</span>
                    <span className="font-semibold">DOANH NGHIỆP XÃ HỘI CON VOI</span>
                  </div>
                  
                  <p className="text-gray-800 text-xl leading-relaxed mb-6">
                    <strong>DOANH NGHIỆP XÃ HỘI CON VOI</strong> đang triển khai "chương Trình Trường Sạch" 
                    với tầm nhìn hướng tới một đất nước Việt Nam sạch đến <strong className="text-blue-600">KHÔNG MÙI</strong> và 
                    mong muốn tất cả các học sinh đều tận hưởng được môi trường học tập sạch và an toàn nhất.
                  </p>

                  <div className="bg-white rounded-2xl p-6 border-l-4 border-red-500 shadow-lg">
                    <p className="text-gray-800 text-lg leading-relaxed font-medium">
                      🎁 Chúng tôi đang tiến hành gói quà tặng <strong className="text-red-600">Miễn phí 3 giờ làm sạch 
                      nhà vệ sinh</strong> cho một số trường tại TP-HCM. Quý trường mong muốn sử dụng gói quà tặng này, 
                      vui lòng để lại thông tin để chúng tôi tiến hành thực hiện.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology & Results */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {/* Technology */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center bg-green-600 text-white rounded-full px-4 py-2 mb-4">
                      <span className="text-xl mr-2">🔬</span>
                      <span className="font-semibold">Công nghệ tiên tiến</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">
                      Đã đăng ký bản quyền Tác giả
                    </h3>
                    <p className="text-green-800 font-semibold text-lg">
                      "Giải pháp làm sạch bằng máy bắng nước cao áp Tường Minh TM120/11 và dung dịch BRT-3"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-green-900 text-lg mb-3 flex items-center">
                      <span className="mr-2">⚡</span>
                      Quy trình làm sạch 4 bước:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                        <span className="mr-2">❄️</span>
                        <span className="text-green-900 font-medium">Phun bọt tuyết</span>
                      </div>
                      <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                        <span className="mr-2">🦠</span>
                        <span className="text-green-900 font-medium">Ủ khử trùng</span>
                      </div>
                      <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                        <span className="mr-2">💧</span>
                        <span className="text-green-900 font-medium">Rửa cao áp</span>
                      </div>
                      <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                        <span className="mr-2">🌟</span>
                        <span className="text-green-900 font-medium">Làm khô thông minh</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="inline-flex items-center bg-orange-600 text-white rounded-full px-4 py-2 mb-6">
                      <span className="text-xl mr-2">🏆</span>
                      <span className="font-semibold">Kết quả đạt được</span>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="text-6xl mb-4">✨</div>
                        <div className="text-green-600 font-bold text-2xl mb-2">Sạch đến không mùi</div>
                        <p className="text-gray-600">Công nghệ tiên tiến loại bỏ hoàn toàn mùi hôi</p>
                      </div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="text-6xl mb-4">🦠</div>
                        <div className="text-blue-600 font-bold text-2xl mb-2">Diệt khuẩn 99.9999%</div>
                        <p className="text-gray-600 text-sm">(đã qua kiểm định chất lượng)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 lg:p-12 mb-16 shadow-xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center bg-purple-600 text-white rounded-full px-6 py-3 mb-4">
                    <span className="text-xl mr-2">🔄</span>
                    <span className="font-semibold">Quy trình triển khai</span>
                  </div>
                  <h3 className="text-3xl font-bold text-purple-900 mb-4">
                    Quy trình nhận gói quà tặng
                  </h3>
                  <p className="text-purple-700 text-lg">
                    5 bước đơn giản để nhận miễn phí 3 giờ làm sạch
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">1</div>
                      <div className="text-3xl text-center">📝</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-purple-900 mb-2">Đăng ký thông tin</h4>
                      <p className="text-purple-700 leading-relaxed">
                        Chương Trình Trường Sạch nhận thông tin đăng ký từ link 
                        <a href="https://chiendichconvoi.online" className="text-blue-600 underline ml-1 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                          https://chiendichconvoi.online
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">2</div>
                      <div className="text-3xl text-center">📞</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-purple-900 mb-2">Liên hệ xác nhận</h4>
                      <p className="text-purple-700 leading-relaxed">
                        Chương Trình Trường Sạch gọi điện thoại hẹn đến trường gặp Thầy/cô Hiệu trưởng.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">3</div>
                      <div className="text-3xl text-center">🤝</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-purple-900 mb-2">Tư vấn trực tiếp</h4>
                      <p className="text-purple-700 leading-relaxed">
                        Chương Trình Trường Sạch đến trường gặp Thầy/cô hiệu trưởng tư vấn trực tiếp theo thực tế hiện trạng của Trường và chốt lịch thi công <strong className="text-red-600">Tặng 3 giờ</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">4</div>
                      <div className="text-3xl text-center">🔧</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-purple-900 mb-2">Thực hiện dịch vụ</h4>
                      <p className="text-purple-700 leading-relaxed">
                        Chương Trình Trường Sạch đến thi công tặng gói 3 giờ làm sạch nhà vệ sinh trường học theo lịch hẹn.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">5</div>
                      <div className="text-3xl text-center">✅</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-purple-900 mb-2">Hoàn tất và đánh giá</h4>
                      <p className="text-purple-700 leading-relaxed">
                        Chương Trình Trường Sạch nhận "Phiếu thu thập ý kiến của Ban Giám Hiệu" có chữ ký của Hiệu trưởng và đóng dấu đỏ nhà trường.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800" id="dang-ky-form">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-red-600 text-white rounded-full px-6 py-3 mb-6">
                  <span className="text-2xl mr-3">🎁</span>
                  <span className="font-semibold">ĐĂNG KÝ NGAY</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Nhận ngay <span className="text-red-400">gói quà tặng miễn phí 3 giờ</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Vui lòng điền thông tin trường học để chúng tôi liên hệ và tư vấn trực tiếp
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      📋 Form đăng ký nhận quà tặng
                    </h3>
                    <p className="text-white/90">
                      Chỉ cần 2 phút để hoàn tất đăng ký
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div id="getfly-optin-form-iframe-1748906938" className="min-h-[600px] w-full">
                    <div className="flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg">Đang tải form đăng ký...</p>
                        <p className="text-gray-500 text-sm mt-2">Vui lòng chờ trong giây lát</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-white/80 text-sm">
                    🔒 Thông tin của bạn được bảo mật tuyệt đối
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-blue-600 text-white rounded-full px-6 py-3 mb-6">
                  <span className="text-xl mr-2">🚀</span>
                  <span className="font-semibold">Bước tiếp theo</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sau khi trải nghiệm, tham gia chương trình chính thức
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Nếu hài lòng với dịch vụ, trường học có thể đăng ký tham gia chương trình TRƯỜNG SẠCH chính thức 
                  để được hỗ trợ dài hạn
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">🎁</div>
                  <h3 className="text-xl font-bold text-red-600 mb-3">Trải nghiệm miễn phí</h3>
                  <ul className="text-left space-y-2 text-gray-600 text-sm">
                    <li>✓ Miễn phí 3 giờ làm sạch</li>
                    <li>✓ Không cam kết dài hạn</li>
                    <li>✓ Đánh giá chất lượng dịch vụ</li>
                    <li>✓ Trải nghiệm công nghệ BRT-3</li>
                  </ul>
                  <div className="mt-4 text-sm text-red-600 font-medium">
                    👆 Bạn đang ở đây
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-4xl mb-4">🏫</div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Chương trình chính thức</h3>
                  <ul className="text-left space-y-2 text-gray-600 text-sm">
                    <li>✓ Hỗ trợ dài hạn định kỳ</li>
                    <li>✓ Quy trình làm sạch chuyên nghiệp</li>
                    <li>✓ Giảm chi phí vệ sinh cho trường</li>
                    <li>✓ Môi trường học tập sạch sẽ</li>
                  </ul>
                  <div className="mt-4">
                    <LoadingLink 
                      href="/truong-sach#dang-ky-form"
                      className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
                    >
                      <span className="mr-2">📝</span>
                      Tìm hiểu thêm
                      <span className="ml-2">→</span>
                    </LoadingLink>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💡</div>
                  <div className="text-left">
                    <h4 className="font-bold text-yellow-800 mb-2">Lưu ý quan trọng</h4>
                    <p className="text-yellow-700 text-sm">
                      Chương trình <strong>"Tặng 3 giờ"</strong> là dịch vụ trải nghiệm miễn phí để các trường học 
                      đánh giá chất lượng trước khi quyết định tham gia chương trình TRƯỜNG SẠCH chính thức. 
                      Đây không phải là chương trình hỗ trợ dài hạn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 