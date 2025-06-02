import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section với Video Intro */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Chương trình <span className="text-yellow-300">TRƯỜNG SẠCH</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-green-100">
                "Tôi muốn có nhà vệ sinh sạch để học sinh sử dụng khi đến trường"
              </p>
              <p className="text-lg mb-8 text-green-100">
                Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/truong-sach" className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold">
                  Đăng ký trường học
                </Link>
                <Link href="/quyen-gop" className="btn-secondary border-white text-white hover:bg-white hover:text-green-700">
                  Quyên góp ngay
                </Link>
              </div>
            </div>
            
            {/* Video Placeholder */}
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a4.5 4.5 0 010 9H9m3-9a4.5 4.5 0 010 9m1.5-9H15" />
                  </svg>
                  <p className="text-gray-600">Video INTRO giới thiệu Chương trình TRƯỜNG SẠCH</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nhân vật trong video:</h3>
                <p className="text-gray-600 text-sm">
                  Phụ huynh Nam • Phụ Huynh Nữ • Thầy Hiệu trưởng • Cô giáo • Ông nội • Bà ngoại • 
                  Học sinh nam tiểu học • Học sinh nữ THCS • Học sinh nữ PTTH • Staff CON VOI • Staff Eduz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section 1 - Chương trình TRƯỜNG SẠCH */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Chương trình TRƯỜNG SẠCH
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường. 
                Chúng tôi cam kết mang đến môi trường học tập an toàn và vệ sinh cho tất cả học sinh Việt Nam.
              </p>
              <Link href="/truong-sach" className="btn-primary">
                Tìm hiểu thêm
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m12 0v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0H5" />
                    </svg>
                    <p className="text-green-700 font-semibold">Trường học sạch sẽ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section 2 - Happy Market */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-orange-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p className="text-orange-700 font-semibold">Happy Market</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                HAPPY MARKET
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Nhà tài trợ chiến lược cho Chương trình TRƯỜNG SẠCH. 
                Mỗi lần mua sắm trên Happy Market, bạn đã góp phần giúp các em học sinh có nhà vệ sinh sạch hơn.
              </p>
              <Link href="/happy-market" className="btn-primary bg-orange-600 hover:bg-orange-700">
                Mua sắm trong hạnh phúc
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section 3 - SOTUTE */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                SOTUTE
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Nền tảng quyên góp trực tuyến hỗ trợ học sinh. 
                Chúng tôi giúp biến ước mơ của các em có nhà vệ sinh sạch thành hiện thực.
              </p>
              <a href="#" className="btn-primary bg-purple-600 hover:bg-purple-700">
                Biến ước mơ thành hiện thực
              </a>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="text-purple-700 font-semibold">SOTUTE Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-green-700">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-xl text-green-100">
              Những con số ấn tượng về chương trình TRƯỜNG SẠCH
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Trường học tham gia', icon: '🏫' },
              { number: '50,000+', label: 'Học sinh được hỗ trợ', icon: '👨‍🎓' },
              { number: '200+', label: 'Nhà vệ sinh được cải tạo', icon: '🚽' },
              { number: '5,000+', label: 'Người quyên góp', icon: '❤️' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Hãy cùng chúng tôi tạo nên sự thay đổi
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Mỗi đóng góp của bạn đều có ý nghĩa to lớn trong việc mang đến môi trường học tập tốt hơn cho các em học sinh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/truong-sach" className="btn-primary bg-white text-green-700 hover:bg-gray-100">
              Đăng ký trường học
            </Link>
            <Link href="/quyen-gop" className="btn-secondary border-white text-white hover:bg-white hover:text-green-700">
              Quyên góp hỗ trợ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
