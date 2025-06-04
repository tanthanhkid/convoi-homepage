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
              Kết nối các nguồn lực xã hội giúp trường học có nhà vệ sinh sạch để học sinh sử dụng khi đến trường. 
              Chúng tôi cam kết mang đến môi trường giáo dục an toàn và sạch sẽ cho tất cả học sinh Việt Nam.
            </p>
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
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Image
                      src="/Icon_of_Zalo.svg.png"
                      alt="Zalo OA"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Zalo OA</h3>
                    <p className="text-gray-700">
                      <a href="https://zalo.me/3105382268215205151" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">Chat trực tiếp qua Zalo OA</a>
                    </p>
                  </div>
                </div>

             
              </div>

              {/* Zalo OA */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Liên hệ với chúng tôi</h3>
                <div className="flex space-x-4">
                  <a href="https://zalo.me/3105382268215205151" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2" title="Liên hệ qua Zalo OA">
                    <Image
                      src="/Icon_of_Zalo.svg.png"
                      alt="Zalo OA"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span className="font-medium">Chat qua Zalo OA</span>
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