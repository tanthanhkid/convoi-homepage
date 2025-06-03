'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function ChungNhan() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const chungNhanList = [
    {
      id: 1,
      title: "",
      image: "/chungnhan/90933266-chung-nhan-1.jpg",
      category: "Bản quyền",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "",
      image: "/chungnhan/71124171-chung-nhan-2.jpg", 
      category: "Chất lượng Sản phẩm",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const tieuchuan = [
    {
      icon: "🏆",
      title: "ISO 9001:2015",
      description: "Hệ thống quản lý chất lượng",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🌱",
      title: "ISO 14001:2015", 
      description: "Hệ thống quản lý môi trường",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🛡️",
      title: "OHSAS 18001",
      description: "An toàn và sức khỏe nghề nghiệp",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "✅",
      title: "TCVN 5509:2009",
      description: "Tiêu chuẩn vệ sinh an toàn thực phẩm Việt Nam",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Chứng nhận <span className="text-blue-700">Tiêu chuẩn</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Chúng tôi tự hào đạt được các chứng nhận uy tín về chất lượng, an toàn và tiêu chuẩn vệ sinh, 
                khẳng định cam kết mang đến những sản phẩm và dịch vụ tốt nhất cho cộng đồng.
              </p>
            </div>
          </div>
        </section>

         

        {/* Certificates Gallery */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-12 h-12 inline-flex items-center justify-center text-2xl font-bold mr-4">📜</span>
                  Chứng nhận đạt được
                </h2>
                <p className="text-xl text-gray-600">
                  Nhấp vào ảnh để xem chi tiết
                </p>
              </div>

              {/* Certificate Images Grid */}
              <div className="grid gap-8">
                {chungNhanList.map((cert) => (
                  <div key={cert.id} className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-semibold`}>
                        {cert.category}
                      </span>
                    </div>
                    
                    {/* Certificate Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                      {cert.title}
                    </h3>

                    {/* Certificate Image */}
                    <div 
                      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      <div className="aspect-[16/10] relative">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white bg-opacity-90 rounded-full p-3">
                              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Click hint */}
                    <p className="text-center text-gray-500 text-sm mt-4">
                      🔍 Nhấp để phóng to và xem chi tiết
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Close button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold z-60"
              >
                ✕ Đóng
              </button>
              
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Chứng nhận phóng to"
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Navigation hint */}
              <p className="text-white text-center mt-4 text-sm">
                Nhấp vào vùng tối để đóng
              </p>
            </div>
          </div>
        )}

       

        {/* Quality Assurance Process */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Quy trình đảm bảo chất lượng
                </h2>
                <p className="text-xl text-gray-600">
                  Từ nghiên cứu đến triển khai, mọi bước đều được kiểm soát chặt chẽ
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    🔬
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nghiên cứu & Phát triển</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nghiên cứu sâu về công nghệ làm sạch, phát triển công thức tối ưu cho môi trường trường học
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    🧪
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kiểm nghiệm & Thử nghiệm</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kiểm nghiệm nghiêm ngặt tại các phòng thí nghiệm uy tín, đảm bảo hiệu quả và an toàn
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    ✅
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Chứng nhận & Triển khai</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Đạt chứng nhận từ các tổ chức uy tín, triển khai rộng rãi với chất lượng đảm bảo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="section-padding bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Tin tưởng vào chất lượng đã được chứng minh
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Với các chứng nhận uy tín, chúng tôi cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/truong-sach" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  Tìm hiểu dự án
                </a>
                <a 
                  href="/lien-he" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 