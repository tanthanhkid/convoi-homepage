import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Về <span className="text-green-700">Dự án Trường Sạch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Mang đến nhà vệ sinh sạch sẽ cho học sinh Việt Nam, tạo môi trường học tập tốt nhất cho các em
              </p>
            </div>

            {/* Video và nội dung giới thiệu */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                    🎬 Video giới thiệu dự án
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Tìm hiểu chi tiết về sứ mệnh và tác động của dự án Trường Sạch đối với giáo dục Việt Nam.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Công nghệ BRT-3 cho trường học</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">An toàn cho học sinh</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Cải thiện môi trường học tập</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/HmUMaBXPMyg"
                      title="Video giới thiệu dự án Trường Sạch"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      📺 Video giới thiệu về dự án Trường Sạch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vấn đề nhà vệ sinh trường học */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">1</span>
                  Vấn đề nhà vệ sinh trường học
                </h2>
                <p className="text-xl text-gray-600">
                  Thực trạng đáng báo động về tình trạng vệ sinh tại các trường học Việt Nam
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">🏥 Tác động sức khỏe học sinh</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Học sinh thường xuyên chủ động nín nhịn đi vệ sinh khi đến trường
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Nguy cơ mắc các bệnh mạn tính và tiêu hóa
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Ảnh hưởng đến khả năng tập trung học tập
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">📚 Tác động học tập</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Học sinh không thoải mái khi ở trường
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Giảm thời gian ở lại trường sau giờ học
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Ảnh hưởng đến hình ảnh nhà trường
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚙️ Thách thức kỹ thuật trong trường học</h3>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Việc làm sạch nhà vệ sinh trường học đặt ra nhiều thách thức đặc biệt. Với lượng học sinh sử dụng lớn mỗi ngày, 
                    nhà vệ sinh cần được làm sạch thường xuyên và triệt để.
                  </p>
                  <p>
                    Các phương pháp làm sạch truyền thống không đủ hiệu quả để đảm bảo vệ sinh và khử mùi hoàn toàn. 
                    Điều này đòi hỏi công nghệ và quy trình chuyên biệt phù hợp với môi trường giáo dục.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Câu chuyện Trường Sạch */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">2</span>
                  Hành trình phát triển Trường Sạch
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">
                      Chính phủ, Bộ Giáo dục và các Ban Ngành liên quan đã có nhiều cố gắng cải thiện tình trạng vệ sinh trong trường học. 
                      Tuy nhiên, vấn đề mùi hôi và vệ sinh trong nhà vệ sinh trường học vẫn chưa được khắc phục triệt để do thiếu giải pháp kỹ thuật phù hợp.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">🏢 Khởi đầu (2017)</h3>
                    <p className="text-gray-700">
                      Công ty Cổ phần Giải pháp Con Voi được thành lập, kế thừa kinh nghiệm từ Công ty TNHH Tường Minh 
                      với chuyên môn sâu về vệ sinh công nghiệp và quyết tâm giải quyết vấn đề vệ sinh trường học.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">👨‍🏫 Đội ngũ giáo dục</h3>
                    <p className="text-gray-700">
                      Lãnh đạo Công ty có trên 20 năm kinh nghiệm và đặc biệt là những người làm cha mẹ, 
                      hiểu rõ nỗi lo của các bậc phụ huynh về môi trường học tập của con em mình.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">🚀 Ra mắt Trường Sạch (2018)</h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">
                      Sau thời gian nghiên cứu chuyên sâu về đặc thù vệ sinh trường học, 
                      Dự án TRƯỜNG SẠCH chính thức ra mắt cuối năm 2018.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Mục tiêu: Mang lại nhà vệ sinh sạch sẽ, an toàn cho tất cả học sinh trên toàn quốc.
                    </p>
                    <p className="text-gray-700">
                      <strong>Thành tựu:</strong> Đến nay đã triển khai thành công tại hơn 10 trường ở TP. Hồ Chí Minh, 
                      giúp nhà vệ sinh được làm sạch, khử khuẩn và khử mùi hiệu quả với chi phí dưới 1.000đ/học sinh mỗi ngày.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Công nghệ và giải pháp */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">3</span>
                  Công nghệ cho trường học
                </h2>
                <p className="text-xl text-gray-600">
                  Giải pháp BRT-3 được thiết kế đặc biệt cho môi trường giáo dục
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">🔬 Công nghệ BRT-3 cho trường học</h3>
                  <p className="text-gray-700 mb-4">
                    Dự án TRƯỜNG SẠCH sử dụng Công nghệ Bọt tuyết Enzyme gốc sinh học BRT-3 
                    được tối ưu hóa đặc biệt cho môi trường trường học:
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>An toàn tuyệt đối:</strong> Không độc hại, an toàn cho học sinh và giáo viên
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>Thân thiện môi trường:</strong> Enzyme sinh học phân hủy hoàn toàn
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>Hiệu quả cao:</strong> Làm sạch, khử khuẩn và khử mùi triệt để
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>Phù hợp giờ học:</strong> Quy trình nhanh, không gián đoạn hoạt động giảng dạy
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    <strong>Tương lai:</strong> Chúng tôi đang phát triển hệ thống tự động hóa và robot 
                    để tối ưu chi phí và nâng cao hiệu quả cho các trường học.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">👨‍🏫 Đội ngũ chuyên biệt</h4>
                    <p className="text-gray-700">
                      Nhân viên được đào tạo chuyên sâu về đặc thù môi trường trường học, 
                      hiểu rõ nhu cầu và quy định giáo dục để đảm bảo an toàn tuyệt đối cho học sinh.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">📊 Quản lý chất lượng</h4>
                    <p className="text-gray-700">
                      Hệ thống giám sát và đánh giá chất lượng liên tục, 
                      đảm bảo tiêu chuẩn vệ sinh cao nhất cho môi trường học tập.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tác động với giáo dục */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">4</span>
                  Tác động với giáo dục
                </h2>
              </div>

              <div className="space-y-8">
                {/* Tác động học sinh */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">👦👧</span>
                    Lợi ích cho học sinh
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>Sức khỏe tốt hơn:</strong> Giảm nguy cơ mắc bệnh do vệ sinh kém
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>Tâm lý thoải mái:</strong> Không còn lo lắng khi đi vệ sinh ở trường
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>Tập trung học tập:</strong> Môi trường sạch sẽ giúp học tốt hơn
                      </li>
                    </ul>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>Giáo dục ý thức:</strong> Học sinh có thói quen giữ gìn vệ sinh
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>Thời gian ở trường:</strong> Sẵn sàng tham gia các hoạt động sau giờ học
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tác động nhà trường */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🏫</span>
                    Lợi ích cho nhà trường
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <strong>Nâng cao uy tín:</strong> Hình ảnh nhà trường chuyên nghiệp hơn
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <strong>Hài lòng phụ huynh:</strong> Gia đình yên tâm gửi con đến trường
                      </li>
                    </ul>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <strong>Tiết kiệm chi phí:</strong> Giảm thiểu các vấn đề về sức khỏe học sinh
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <strong>Đạt chuẩn kiểm định:</strong> Đáp ứng tiêu chuẩn vệ sinh giáo dục
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Chi phí hợp lý */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">💰</span>
                    Chi phí hợp lý cho trường học
                  </h3>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-6 inline-block">
                      <p className="text-4xl font-bold text-yellow-600 mb-2">&lt; 1.000đ</p>
                      <p className="text-lg text-gray-700">mỗi học sinh / ngày</p>
                    </div>
                    <p className="text-gray-700 mt-4">
                      Chi phí thấp, hiệu quả cao - Đầu tư xứng đáng cho sức khỏe và tương lai học sinh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cam kết chất lượng */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">5</span>
                  Cam kết với giáo dục
                </h2>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700">
                    Chúng tôi không chỉ cung cấp dịch vụ vệ sinh, mà mang đến 
                    <strong className="text-purple-700"> giải pháp toàn diện cho môi trường giáo dục</strong>
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h4 className="font-bold text-gray-900 mb-3">Chuyên biệt giáo dục</h4>
                    <p className="text-sm text-gray-700">
                      Hiểu rõ đặc thù và yêu cầu riêng của môi trường trường học
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="font-bold text-gray-900 mb-3">An toàn tuyệt đối</h4>
                    <p className="text-sm text-gray-700">
                      Các sản phẩm và quy trình đảm bảo an toàn 100% cho học sinh
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">💡</div>
                    <h4 className="font-bold text-gray-900 mb-3">Đổi mới liên tục</h4>
                    <p className="text-sm text-gray-700">
                      Nghiên cứu và phát triển công nghệ mới phù hợp với giáo dục
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Các trường đã triển khai */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">6</span>
                  Các trường đã đồng hành
                </h2>
                <p className="text-xl text-gray-600">
                  Những trường học tiên phong trong việc cải thiện môi trường vệ sinh
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  'Trường THCS Khánh Hội A Quận 4',
                  'Trường THCS Nguyễn Thị Thập Q7', 
                  'Trường THCS Quang Trung Q4',
                  'Trường Tiểu Học Tăng Bạt Hổ B Quận 4',
                  'Trường THCS Chánh Hưng Q8',
                  'Và nhiều trường khác...'
                ].map((school, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{school}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      ✅ Triển khai thành công
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    🎯 Kế hoạch mở rộng năm học 2024-2029
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">300</div>
                      <p className="text-lg text-gray-700">Trường học mục tiêu</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
                      <p className="text-lg text-gray-700">Tỉnh - Thành phố</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-6">
                    Mang nhà vệ sinh sạch đến với hàng triệu học sinh trên cả nước
                  </p>
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