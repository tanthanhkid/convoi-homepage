import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TamNhinSuMenh() {
  const giaTriCotLoi = [
    {
      title: "Trách nhiệm với cộng đồng & môi trường",
      icon: "🌱",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-500",
      iconBg: "bg-green-500",
      description: [
        "Ưu tiên lợi ích và sự phát triển bền vững của cộng đồng, môi trường",
        "Lồng ghép các mục tiêu SDG, áp dụng mô hình kinh tế tuần hoàn"
      ]
    },
    {
      title: "Minh bạch & liêm chính",
      icon: "💎",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-500",
      iconBg: "bg-blue-500",
      description: [
        "Trung thực, rõ ràng trong mọi hoạt động và báo cáo",
        "Hợp tác với các bên liên quan một cách công khai, đáng tin cậy"
      ]
    },
    {
      title: "Sáng tạo & đổi mới tích cực",
      icon: "💡",
      color: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-500",
      iconBg: "bg-yellow-500",
      description: [
        "Liên tục ứng dụng ý tưởng và công nghệ mới để gia tăng tác động xã hội",
        "Khuyến khích tư duy sáng tạo, tinh thần khởi xướng trong tổ chức"
      ]
    },
    {
      title: "Đề cao con người & tôn trọng sự đa dạng",
      icon: "👥",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-500",
      iconBg: "bg-purple-500",
      description: [
        "Xây dựng môi trường làm việc cởi mở, công bằng",
        "Hỗ trợ phát triển năng lực, gắn kết cộng đồng bên trong và bên ngoài"
      ]
    },
    {
      title: "Hợp tác & liên kết bền vững",
      icon: "🤝",
      color: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-500",
      iconBg: "bg-indigo-500",
      description: [
        "Kiến tạo và tham gia mạng lưới đa đối tác (chính phủ, NGO, doanh nghiệp…)",
        "Kết hợp nguồn lực, duy trì lợi ích lâu dài cho tất cả các bên"
      ]
    },
    {
      title: "Đo lường & cải tiến liên tục",
      icon: "📊",
      color: "from-red-50 to-red-100",
      borderColor: "border-red-500",
      iconBg: "bg-red-500",
      description: [
        "Theo dõi, đánh giá tác động xã hội và môi trường rõ ràng",
        "Dùng dữ liệu làm nền tảng điều chỉnh chiến lược và quy trình"
      ]
    },
    {
      title: "Nuôi dưỡng tinh thần nhân ái & chia sẻ",
      icon: "❤️",
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-500",
      iconBg: "bg-pink-500",
      description: [
        "Khích lệ sự đoàn kết, hỗ trợ lẫn nhau trong đội ngũ và cộng đồng",
        "Tích cực tham gia các hoạt động thiện nguyện, vì lợi ích chung"
      ]
    }
  ];

  const mucTieu = [
    {
      icon: "🏫",
      title: "Hỗ trợ 80% kinh phí triển khai Chương trình TRƯỜNG SẠCH",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "👨‍🎓",
      title: "Giúp 6.000.000 học sinh có nhà vệ sinh sạch để sử dụng khi đến trường",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🏢",
      title: "Hỗ trợ các cơ sở hành chính, kinh doanh, công cộng làm sạch các nhà vệ sinh",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: "🌐",
      title: "Xây dựng mạng lưới chia sẻ 50.000 nhà vệ sinh \"SẠCH, MIỄN PHÍ và Welcome to use\"",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Tầm nhìn & <span className="text-indigo-700">Sứ mệnh</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Với tầm nhìn và sứ mệnh rõ ràng, chúng tôi hướng tới mục tiêu trở thành đơn vị tiên phong trong việc cải thiện môi trường học đường tại Việt Nam. Chúng tôi đặt mục tiêu đến năm 2025, mọi trường học trên cả nước sẽ áp dụng công nghệ làm sạch tiên tiến, đảm bảo mỗi học sinh được học tập trong môi trường sạch sẽ, an toàn và lành mạnh.
              </p>
            </div>
          </div>
        </section>

        {/* Tầm nhìn & Sứ mệnh */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Tầm nhìn */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl mr-4">
                      🔭
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Tầm nhìn</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Công ty <strong>CỔ PHẦN GIẢI PHÁP CON VOI</strong> trở thành doanh nghiệp xã hội có nhiều cống hiến nhất cho việc thay đổi theo chiều hướng tích cực tình trạng vệ sinh công cộng.
                  </p>
                </div>

                {/* Sứ mệnh */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-3xl mr-4">
                      🎯
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Sứ mệnh</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Làm cho không gian sống ở Việt Nam sạch như các nước phát triển.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Giá trị cốt lõi */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full w-12 h-12 inline-flex items-center justify-center text-2xl font-bold mr-4">⭐</span>
                  Giá trị cốt lõi
                </h2>
                <p className="text-xl text-gray-600">
                  7 giá trị định hướng mọi hoạt động của chúng tôi
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {giaTriCotLoi.map((giaTriv, index) => (
                  <div key={index} className={`bg-gradient-to-br ${giaTriv.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${giaTriv.borderColor}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${giaTriv.iconBg} rounded-full flex items-center justify-center text-2xl mr-3`}>
                        {giaTriv.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {giaTriv.title}
                    </h3>
                    <div className="space-y-2">
                      {giaTriv.description.map((desc, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-gray-500 mr-2 mt-1 text-sm">•</span>
                          <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mục tiêu */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-12 h-12 inline-flex items-center justify-center text-2xl font-bold mr-4">🚀</span>
                  Mục tiêu đến 2025
                </h2>
                <p className="text-xl text-gray-600">
                  Những con số cụ thể chúng tôi cam kết đạt được
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {mucTieu.map((muc, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${muc.color} opacity-90`}></div>
                    <div className="relative p-8 text-white">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">{muc.icon}</span>
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed font-medium">
                        {muc.title}
                      </p>
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full transform translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="section-padding bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Cùng chúng tôi hiện thực hóa tầm nhìn
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Hãy tham gia cùng chúng tôi để mang đến môi trường học tập sạch sẽ, an toàn cho mọi học sinh Việt Nam
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/truong-sach" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  Tham gia chương trình
                </a>
                <a 
                  href="/lien-he" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                >
                  Liên hệ hợp tác
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