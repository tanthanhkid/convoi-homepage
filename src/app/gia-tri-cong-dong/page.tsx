import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GiaTriCongDong() {
  const doiTuongHuongLoi = [
    {
      title: "NHÀ TRƯỜNG",
      icon: "🏫",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100",
      benefits: [
        "Nhà vệ sinh tại trường luôn luôn sạch sẽ, không mùi",
        "Làm tròn trách nhiệm giáo dục, bảo vệ và chăm sóc học sinh, sinh viên"
      ]
    },
    {
      title: "PHỤ HUYNH",
      icon: "👨‍👩‍👧‍👦",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-100",
      benefits: [
        "An tâm hơn khi cho con đến trường",
        "Bớt đi một nỗi lo về sức khỏe của các con khi trưởng thành"
      ]
    },
    {
      title: "HỌC SINH",
      icon: "👨‍🎓",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-100",
      benefits: [
        "Có nhà vệ sinh sạch để sử dụng mỗi ngày khi đến trường",
        "Giảm Stress",
        "Tăng cường sức khỏe, giảm nguy cơ mắc phải nhiều bệnh mạn tính nguy hiểm"
      ]
    },
    {
      title: "NHÀ NƯỚC",
      icon: "🏛️",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-100",
      benefits: [
        "Bớt nỗi lo về một vấn đề xã hội đã tồn tại từ rất lâu",
        "Giảm áp lực về tài chính, dành ngân sách để lo cho các việc khác"
      ]
    },
    {
      title: "XÃ HỘI",
      icon: "🌏",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-100",
      benefits: [
        "Dần làm đẹp bộ mặt của đất nước",
        "Giảm bệnh tật, góp phần giảm áp lực cho ngành Y tế; Giảm chi phí chữa bệnh"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Giá trị mang lại cho <span className="text-emerald-700">Cộng đồng</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Dự án Trường Sạch không chỉ cải thiện môi trường học tập mà còn mang lại những giá trị tích cực 
                cho toàn bộ cộng đồng, từ học sinh, phụ huynh, nhà trường đến xã hội và đất nước.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">6M+</div>
                  <p className="text-gray-700 font-medium">Học sinh được hưởng lợi</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
                  <p className="text-gray-700 font-medium">Nhà vệ sinh được cải thiện</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                  <p className="text-gray-700 font-medium">Hỗ trợ kinh phí triển khai</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Đối tượng hưởng lợi */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full w-12 h-12 inline-flex items-center justify-center text-2xl font-bold mr-4">🤝</span>
                  Ai được hưởng lợi?
                </h2>
                <p className="text-xl text-gray-600">
                  Mọi thành phần trong cộng đồng đều được hưởng lợi từ dự án này
                </p>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {doiTuongHuongLoi.map((doiTuong, index) => (
                  <div key={index} className={`bg-gradient-to-br ${doiTuong.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50`}>
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${doiTuong.color} rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg`}>
                        {doiTuong.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {doiTuong.title}
                      </h3>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      {doiTuong.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start group">
                          <div className={`w-3 h-3 bg-gradient-to-br ${doiTuong.color} rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200`}></div>
                          <p className="text-gray-700 leading-relaxed font-medium">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Decorative element */}
                    <div className="mt-6 pt-6 border-t border-white/30">
                      <div className={`w-full h-2 bg-gradient-to-r ${doiTuong.color} rounded-full opacity-30`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Details */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Tác động sâu rộng
                </h2>
                <p className="text-xl text-gray-600">
                  Những thay đổi tích cực từ dự án Trường Sạch
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Health Impact */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-2xl mr-4">
                        🏥
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Sức khỏe cộng đồng</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Giảm đáng kể các bệnh liên quan đến vệ sinh kém, cải thiện sức khỏe học sinh 
                      và giảm gánh nặng cho hệ thống y tế.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl mr-4">
                        📚
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Giáo dục chất lượng</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Học sinh tập trung học tập tốt hơn khi không còn lo lắng về vấn đề vệ sinh, 
                      nâng cao chất lượng giáo dục.
                    </p>
                  </div>
                </div>

                {/* Right - Social Impact */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl mr-4">
                        💰
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Tiết kiệm kinh tế</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Giảm chi phí y tế, tối ưu hóa ngân sách nhà nước cho giáo dục và các lĩnh vực 
                      phát triển khác.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                        🌟
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Hình ảnh quốc gia</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Cải thiện hình ảnh đất nước trong mắt bạn bè quốc tế, thể hiện cam kết 
                      với chất lượng cuộc sống và giáo dục.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Lộ trình tác động
                </h2>
                <p className="text-xl text-gray-600">
                  Từ hiện tại đến 2025
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Hiện tại</h3>
                        <p className="text-gray-600">Triển khai tại 10+ trường học TP.HCM</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">2024-2025</h3>
                        <p className="text-gray-600">Mở rộng ra toàn quốc, hỗ trợ 6M học sinh</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Tương lai</h3>
                        <p className="text-gray-600">Mạng lưới 50K nhà vệ sinh sạch toàn quốc</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="section-padding bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Cùng tạo nên những giá trị tích cực
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Hãy tham gia cùng chúng tôi để mang lại những thay đổi ý nghĩa cho cộng đồng và xã hội
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/truong-sach" 
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  Tham gia dự án
                </a>
                <a 
                  href="/doi-ngu" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
                >
                  Tìm hiểu đội ngũ
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