import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function ChungNhan() {
  const chungNhanList = [
    {
      id: 1,
      title: "Chứng nhận Tiêu chuẩn Vệ sinh An toàn Thực phẩm",
      image: "/chungnhan/90933266-chung-nhan-1.jpg",
      category: "An toàn Thực phẩm",
      issuer: "Cơ quan Chứng nhận Quốc gia",
      issueDate: "2023",
      validUntil: "2026",
      description: "Chứng nhận đảm bảo an toàn vệ sinh thực phẩm theo tiêu chuẩn quốc gia, xác nhận rằng các sản phẩm và dịch vụ của chúng tôi đáp ứng đầy đủ các yêu cầu nghiêm ngặt về vệ sinh và an toàn.",
      features: [
        "Đảm bảo 100% an toàn cho sức khỏe con người",
        "Tuân thủ nghiêm ngặt quy chuẩn quốc gia về vệ sinh",
        "Quy trình sản xuất được kiểm soát chặt chẽ",
        "Nguyên liệu và thành phẩm được kiểm nghiệm định kỳ"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100"
    },
    {
      id: 2,
      title: "Chứng nhận Chất lượng Sản phẩm Công nghiệp",
      image: "/chungnhan/71124171-chung-nhan-2.jpg", 
      category: "Chất lượng Sản phẩm",
      issuer: "Tổ chức Tiêu chuẩn Chất lượng",
      issueDate: "2023",
      validUntil: "2026",
      description: "Chứng nhận chất lượng sản phẩm công nghiệp xác nhận rằng các sản phẩm làm sạch BRT-3 của chúng tôi đạt tiêu chuẩn chất lượng cao nhất trong ngành công nghiệp vệ sinh.",
      features: [
        "Hiệu quả làm sạch vượt trội, loại bỏ 99.9% vi khuẩn",
        "Công nghệ tiên tiến, thân thiện với môi trường",
        "Được kiểm định bởi các phòng thí nghiệm uy tín",
        "Đáp ứng tiêu chuẩn chất lượng quốc tế"
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-100"
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

        {/* Achievements Stats */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-gray-700 font-medium">Chứng nhận uy tín</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <p className="text-gray-700 font-medium">Hiệu quả diệt khuẩn</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <p className="text-gray-700 font-medium">An toàn sức khỏe</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                  <p className="text-gray-700 font-medium">Năm kinh nghiệm</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Display */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-12 h-12 inline-flex items-center justify-center text-2xl font-bold mr-4">📜</span>
                  Chứng nhận đạt được
                </h2>
                <p className="text-xl text-gray-600">
                  Các chứng nhận uy tín khẳng định chất lượng và độ tin cậy
                </p>
              </div>

              <div className="space-y-16">
                {chungNhanList.map((cert, index) => (
                  <div key={cert.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Certificate Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                        <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className={`bg-gradient-to-br ${cert.bgColor} rounded-3xl p-8 shadow-lg border border-white/50`}>
                        {/* Header */}
                        <div className="mb-6">
                          <div className={`inline-block px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-semibold mb-4`}>
                            {cert.category}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            {cert.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {cert.description}
                          </p>
                        </div>

                        {/* Certificate Info */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-600 font-medium">Cơ quan cấp</div>
                            <div className="text-gray-900 font-semibold">{cert.issuer}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 font-medium">Năm cấp</div>
                            <div className="text-gray-900 font-semibold">{cert.issueDate}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 font-medium">Hiệu lực đến</div>
                            <div className="text-gray-900 font-semibold">{cert.validUntil}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 font-medium">Trạng thái</div>
                            <div className="text-green-600 font-semibold flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              Còn hiệu lực
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4">Đặc điểm nổi bật:</h4>
                          <div className="space-y-3">
                            {cert.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`w-2 h-2 bg-gradient-to-r ${cert.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                <p className="text-gray-700 leading-relaxed">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Tuân thủ tiêu chuẩn quốc tế
                </h2>
                <p className="text-xl text-gray-600">
                  Cam kết đáp ứng các tiêu chuẩn cao nhất trong ngành
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tieuchuan.map((standard, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto`}>
                      {standard.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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