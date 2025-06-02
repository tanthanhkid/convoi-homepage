import Header from './components/Header';
import Footer from './components/Footer';
import LoadingLink from './components/LoadingLink';
import ProjectCard from './components/ProjectCard';
import { useSotuteData } from './hooks/useSotuteData';
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
                <LoadingLink href="/truong-sach" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                  Đăng ký trường học
                </LoadingLink>
                <LoadingLink href="/lien-he" className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-center">
                  Liên hệ ngay
                </LoadingLink>
              </div>
            </div>
            
            {/* YouTube Video */}
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/yKNzPTOC1jE"
                  title="Video INTRO giới thiệu Chương trình TRƯỜNG SẠCH"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Video INTRO giới thiệu Chương trình TRƯỜNG SẠCH</h3>
                <p className="text-green-600 text-sm">
                  Tìm hiểu về sứ mệnh và hoạt động của Con Voi trong việc cải thiện môi trường giáo dục
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Projects Section */}
      <ProjectsSection />

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
              <LoadingLink href="/happy-market" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
                Mua sắm trong hạnh phúc
              </LoadingLink>
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
              <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
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
            <LoadingLink href="/truong-sach" className="bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Đăng ký trường học
            </LoadingLink>
            <LoadingLink href="/lien-he" className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Liên hệ hỗ trợ
            </LoadingLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Component hiển thị các dự án
function ProjectsSection() {
  const { projects, loading, error } = useSotuteData();

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tình trạng các dự án thực tế
            </h2>
            <p className="text-xl text-gray-600">
              Dữ liệu trực tiếp từ nền tảng SOTUTE
            </p>
          </div>
          
          {/* Loading skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-10 bg-gray-200 rounded flex-1"></div>
                  <div className="h-10 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
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
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
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
        </div>
      </section>
    );
  }

  const activeProjects = projects.filter(p => p.status === 'active');
  const pendingProjects = projects.filter(p => p.status === 'pending');
  const completedProjects = projects.filter(p => p.status === 'completed');

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tình trạng các dự án thực tế
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Dữ liệu trực tiếp từ nền tảng SOTUTE
          </p>
          
          {/* Summary stats */}
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>{activeProjects.length} Đang thực hiện</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>{pendingProjects.length} Vận động kinh phí</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>{completedProjects.length} Đã hoàn thành</span>
            </div>
          </div>
        </div>

        {/* Hiển thị tất cả dự án dạng grid cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bạn muốn đăng ký trường học tham gia?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Chúng tôi sẵn sàng hỗ trợ trường học của bạn xây dựng nhà vệ sinh sạch cho học sinh. 
              Hãy liên hệ với chúng tôi để được tư vấn chi tiết.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingLink 
                href="/truong-sach" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <span>📝</span>
                <span>Đăng ký trường học</span>
              </LoadingLink>
              <LoadingLink 
                href="/lien-he" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>📞</span>
                <span>Liên hệ tư vấn</span>
              </LoadingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
