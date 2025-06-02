'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function LienHe() {
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
      f.style.height = "600px";
      f.setAttribute("frameborder", "0");
      f.setAttribute("marginheight", "0");
      f.setAttribute("marginwidth", "0");
      
      const container = document.getElementById("getfly-contact-form");
      if (container) {
        container.innerHTML = '';
        container.appendChild(f);
      }
    };

    // Load the form after component mounts
    loadGetFlyForm();
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Liên hệ với <span className="text-green-700">DOANH NGHIỆP XÃ HỘI CON VOI</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường. 
              Chúng tôi cam kết mang đến môi trường giáo dục an toàn và sạch sẽ cho tất cả học sinh Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Convoi Logo"
                  width={60}
                  height={60}
                  className="h-15 w-auto"
                />
                <span className="ml-4 text-2xl font-bold text-gray-900">DOANH NGHIỆP XÃ HỘI CON VOI</span>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường. 
                Chúng tôi cam kết mang đến môi trường giáo dục an toàn và sạch sẽ cho tất cả học sinh Việt Nam.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.702 0 1.041.219 1.041 1.142 0 .696-.219 1.738-.359 2.699-.199.937.469 1.674 1.406 1.674 1.687 0 2.98-1.781 2.98-4.346 0-2.27-1.626-3.856-3.938-3.856-2.686 0-4.266 2.018-4.266 4.105 0 .813.313 1.68.703 2.153a.36.36 0 0 1 .084.343c-.094.39-.303 1.22-.344 1.391-.053.218-.173.265-.402.159-1.499-.696-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017.016z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chương trình chính</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  <span className="text-gray-700">Chương trình TRƯỜNG SẠCH</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  <span className="text-gray-700">Nền tảng SOTUTE</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  <span className="text-gray-700">Thương hiệu HAPPY MARKET</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Thông tin liên hệ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Địa chỉ</h3>
                    <p className="text-gray-700 leading-relaxed">
                      42 Đường 95, Phường Thạnh Mỹ Lợi,<br />
                      Thành phố Thủ Đức, TPHCM,<br />
                      Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Điện thoại</h3>
                    <p className="text-gray-700">
                      <a href="tel:+84931116853" className="text-green-600 hover:text-green-700 font-medium">0931 116 853</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:truongsach@convoi.com.vn" className="text-green-600 hover:text-green-700 font-medium">truongsach@convoi.com.vn</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Giờ làm việc</h3>
                    <p className="text-gray-700">
                      Thứ 2 - Thứ 6: 8:00 - 17:30<br />
                      Thứ 7: 8:00 - 12:00<br />
                      Chủ nhật: Nghỉ
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Theo dõi chúng tôi</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-900 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.702 0 1.041.219 1.041 1.142 0 .696-.219 1.738-.359 2.699-.199.937.469 1.674 1.406 1.674 1.687 0 2.98-1.781 2.98-4.346 0-2.27-1.626-3.856-3.938-3.856-2.686 0-4.266 2.018-4.266 4.105 0 .813.313 1.68.703 2.153a.36.36 0 0 1 .084.343c-.094.39-.303 1.22-.344 1.391-.053.218-.173.265-.402.159-1.499-.696-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017.016z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
                <p className="text-gray-600 mb-8">
                  Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ và hỗ trợ trong thời gian sớm nhất.
                </p>
                
                {/* GetFly Form Container */}
                <div id="getfly-contact-form" className="min-h-[500px] w-full">
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-gray-600">Đang tải form liên hệ...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vị trí văn phòng</h2>
            <p className="text-lg text-gray-700">
              Đến thăm chúng tôi tại văn phòng chính ở Thành phố Thủ Đức, TPHCM
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1756644!2d106.78265371530652!3d10.853977792276445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zNDIgxJDGsOG7nW5nIDk1LCBUaOG6oW5oIE3hu7kgTOG7o2ksIFRo6BuaCBwaOG7kSBUaOG7pyDEkOG7qWMsIFRo6buRbSBQaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1645123456789!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ văn phòng DOANH NGHIỆP XÃ HỘI CON VOI"
              ></iframe>
            </div>
            <div className="p-6 bg-green-50">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">DOANH NGHIỆP XÃ HỘI CON VOI</h3>
                  <p className="text-gray-700">42 Đường 95, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, TPHCM, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
            <p className="text-lg text-gray-700">
              Một số câu hỏi phổ biến về DOANH NGHIỆP XÃ HỘI CON VOI và các chương trình của chúng tôi
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Chương trình Trường Sạch hoạt động như thế nào?",
                answer: "Chương trình Trường Sạch kết nối các nguồn lực xã hội để cải thiện hệ thống vệ sinh tại các trường học. Chúng tôi sử dụng công nghệ BRT-3 tiên tiến và huy động sự đóng góp từ cộng đồng, doanh nghiệp để xây dựng và nâng cấp nhà vệ sinh tại các trường học, đặc biệt ở vùng sâu vùng xa."
              },
              {
                question: "Làm thế nào để trường của tôi tham gia chương trình?",
                answer: "Các trường học có thể đăng ký tham gia chương trình thông qua form đăng ký trên website hoặc liên hệ trực tiếp với chúng tôi. Sau khi nhận được đăng ký, đội ngũ của CON VOI sẽ khảo sát thực tế và đánh giá nhu cầu để đưa trường vào danh sách ưu tiên."
              },
              {
                question: "Công nghệ BRT-3 có an toàn không?",
                answer: "BRT-3 là công nghệ được nghiên cứu và phát triển kỹ lưỡng, đảm bảo an toàn tuyệt đối cho người sử dụng và môi trường. Sản phẩm đã được kiểm nghiệm và có các chứng nhận chất lượng cần thiết. BRT-3 có khả năng diệt khuẩn 99.9% và thân thiện với môi trường."
              },
              {
                question: "Tôi có thể đóng góp cho chương trình bằng cách nào?",
                answer: "Bạn có thể đóng góp theo nhiều cách: (1) Quyên góp trực tiếp bằng tiền mặt thông qua nền tảng SOTUTE, (2) Mua sắm tại Happy Market - 5% doanh thu sẽ được chuyển vào quỹ, (3) Tham gia các chương trình giáo dục, (4) Chia sẻ thông tin về chương trình để lan tỏa nhận thức cộng đồng."
              },
              {
                question: "Happy Market khác gì so với các sàn thương mại điện tử khác?",
                answer: "Happy Market không chỉ là nơi mua sắm mà còn là cách để bạn đóng góp cho cộng đồng. Mỗi 2 triệu VNĐ mua sắm tại Happy Market sẽ giúp 1 học sinh có nhà vệ sinh sạch. Bạn cũng có thể chỉ định trường học cụ thể để nhận khoản hỗ trợ từ việc mua sắm của mình."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 