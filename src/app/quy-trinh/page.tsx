import Header from '../components/Header';
import Footer from '../components/Footer';

export default function QuyTrinh() {
  const quyTrinhSteps = [
    {
      id: 1,
      title: "Tiếp nhận, tư vấn giải pháp vệ sinh, làm sạch",
      icon: "💬",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100",
      description: "Mỗi người mỗi vẻ - Mỗi Trường mỗi cảnh. Chúng tôi làm việc với từng Trường dựa trên việc khảo sát chi tiết thực trạng. Tư vấn giải pháp tối ưu về kỹ thuật cũng như kinh phí.",
      features: [
        "Lắng nghe nhu cầu của nhà trường",
        "Tư vấn giải pháp phù hợp với từng trường hợp",
        "Đưa ra các phương án kỹ thuật và kinh phí tối ưu"
      ]
    },
    {
      id: 2,
      title: "Khảo sát và đánh giá chi tiết thực trạng",
      icon: "🔍",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-100",
      description: "Khi vệ sinh đang là vấn đề trọng tâm được tất cả Phụ Huynh, Nhà Trường và toàn thể các bạn học sinh quan tâm hàng đầu. \"Trường sạch\" thực sự đồng cảm. Chúng tôi tiến hành khảo sát thật chi tiết để có thông tin đầy đủ trước khi phân tích và tìm ra giải pháp tối ưu để mang lại không gian sạch cho khu vệ sinh của từng Trường.",
      features: [
        "Khảo sát toàn bộ khu vực vệ sinh của trường",
        "Đánh giá tình trạng hiện tại và các vấn đề tồn tại",
        "Thu thập thông tin chi tiết về cơ sở hạ tầng",
        "Ghi nhận nhu cầu đặc biệt của từng trường"
      ]
    },
    {
      id: 3,
      title: "Phân tích và gửi báo giá",
      icon: "📊",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-100",
      description: "Việc phân tích sau khi đã tiến hành khảo sát chi tiết sẽ là tiền đề cho việc đưa ra giải pháp tối ưu cho từng trường. Chúng tôi luôn bàn bạc và thống nhất với Nhà trường trước khi xác định chi phí tiết kiệm nhất cho từng trường hợp cụ thể.",
      features: [
        "Phân tích dữ liệu khảo sát một cách chi tiết",
        "Đưa ra giải pháp kỹ thuật phù hợp",
        "Tính toán chi phí tiết kiệm và hiệu quả",
        "Bàn bạc và thống nhất với nhà trường"
      ]
    },
    {
      id: 4,
      title: "Ký kết hợp đồng và triển khai",
      icon: "📝",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-100",
      description: "Hợp đồng sẽ được ký kết với giải pháp và chi phí tiết kiệm nhất do Nhà trường quyết định. \"Trường sạch\" sẽ tiến hành công việc trong thời gian chậm nhất là một tuần để mang lại không gian vệ sinh sạch sẽ, tươi mới cho các bạn học sinh. Khi được \"Trường sạch\" đồng hành, sự yên tâm về nhà vệ sinh sẽ đến với Nhà trường, Phụ huynh và các bạn học sinh.",
      features: [
        "Ký kết hợp đồng với điều khoản rõ ràng",
        "Triển khai trong thời gian tối đa 1 tuần",
        "Đảm bảo chất lượng và tiến độ cam kết",
        "Mang lại sự yên tâm cho tất cả các bên"
      ]
    },
    {
      id: 5,
      title: "Khảo sát sau triển khai",
      icon: "🔄",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-100",
      description: "Hợp đồng sẽ được ký kết với giải pháp và chi phí tiết kiệm nhất do Nhà trường quyết định. \"Trường sạch\" sẽ tiến hành công việc trong thời gian nhanh nhất.",
      features: [
        "Kiểm tra chất lượng công việc đã thực hiện",
        "Đảm bảo mọi yêu cầu đã được đáp ứng",
        "Thu thập phản hồi từ nhà trường",
        "Điều chỉnh nếu cần thiết"
      ]
    },
    {
      id: 6,
      title: "Đánh giá và phản hồi",
      icon: "⭐",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-100",
      description: "Nhận phiếu đánh giá từ ban Giám hiệu nhà trường về dịch vụ vệ sinh của Công ty CP Giải pháp Con Voi và thái độ, kỹ năng làm việc của nhân viên dịch vụ vệ sinh.",
      features: [
        "Nhận đánh giá từ ban Giám hiệu nhà trường",
        "Đánh giá chất lượng dịch vụ vệ sinh",
        "Đánh giá thái độ và kỹ năng nhân viên",
        "Cải thiện dịch vụ dựa trên phản hồi"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Quy trình <span className="text-green-700">Làm việc</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Từ tư vấn đến triển khai, chúng tôi đồng hành cùng nhà trường với quy trình làm việc 
                chuyên nghiệp, đảm bảo mang lại kết quả tốt nhất cho môi trường vệ sinh trường học.
              </p>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">6</div>
                  <p className="text-gray-700 font-medium">Bước quy trình</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">≤ 7</div>
                  <p className="text-gray-700 font-medium">Ngày triển khai</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                  <p className="text-gray-700 font-medium">Cam kết chất lượng</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full w-12 h-12 inline-flex items-center justify-center text-2xl font-bold mr-4">📋</span>
                  Chi tiết quy trình
                </h2>
                <p className="text-xl text-gray-600">
                  6 bước đảm bảo chất lượng dịch vụ tối ưu
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 rounded-full"></div>

                {/* Steps */}
                <div className="space-y-12 lg:space-y-20">
                  {quyTrinhSteps.map((step, index) => (
                    <div key={step.id} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Step number circle */}
                      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-gray-200 rounded-full items-center justify-center z-10 shadow-lg">
                        <span className="text-2xl">{step.icon}</span>
                      </div>

                      {/* Content */}
                      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                        <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50`}>
                          {/* Mobile icon */}
                          <div className="lg:hidden flex items-center mb-6">
                            <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl mr-4`}>
                              {step.icon}
                            </div>
                            <div className={`px-3 py-1 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-semibold`}>
                              Bước {step.id}
                            </div>
                          </div>

                          {/* Desktop step badge */}
                          <div className="hidden lg:block mb-4">
                            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-semibold`}>
                              Bước {step.id}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed mb-6">
                            {step.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Nội dung chính:</h4>
                            {step.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Spacer for desktop */}
                      <div className="hidden lg:block w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Lợi ích của quy trình
                </h2>
                <p className="text-xl text-gray-600">
                  Quy trình chuyên nghiệp mang lại những giá trị vượt trội
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nhanh chóng</h3>
                  <p className="text-gray-700">Triển khai trong thời gian tối đa 1 tuần</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    💎
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Chất lượng</h3>
                  <p className="text-gray-700">Quy trình chuẩn, đảm bảo chất lượng cao</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    🤝
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Đồng hành</h3>
                  <p className="text-gray-700">Hỗ trợ và theo dõi sau triển khai</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    💰
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tiết kiệm</h3>
                  <p className="text-gray-700">Chi phí hợp lý, tối ưu cho từng trường</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Chuyên nghiệp</h3>
                  <p className="text-gray-700">Đội ngũ có kinh nghiệm và chuyên môn cao</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                    📈
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hiệu quả</h3>
                  <p className="text-gray-700">Kết quả đo lường được và bền vững</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="section-padding bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Bắt đầu quy trình với chúng tôi
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Liên hệ ngay để nhận tư vấn miễn phí và khảo sát thực trạng vệ sinh tại trường của bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/lien-he" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  Tư vấn miễn phí
                </a>
                <a 
                  href="/truong-sach" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                >
                  Tìm hiểu dự án
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