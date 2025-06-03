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
                Về <span className="text-green-700">Dự án Clean for All</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Giải quyết triệt để "nỗi ám ảnh nhà vệ sinh công cộng", thay đổi theo hướng tích cực bộ mặt của đất nước và con người Việt Nam
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
                    Tìm hiểu chi tiết về sứ mệnh, công nghệ và tác động của dự án Clean for All thông qua video giới thiệu.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Công nghệ BRT-3 tiên tiến</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Giải pháp bền vững cho môi trường</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Tác động tích cực cho cộng đồng</span>
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
                      title="Video giới thiệu dự án Clean for All"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      📺 Video giới thiệu về dự án Clean for All và chương trình Trường Sạch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Đặt vấn đề */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">1</span>
                  Đặt vấn đề
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">Tác động đến sức khỏe</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Học sinh có nguy cơ mắc phải các bệnh mạn tính và nan y do tình trạng thường xuyên chủ động nín nhịn đi vệ sinh khi đến trường
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Lây nhiễm chéo và tăng tỷ lệ nhiễm trùng bệnh viện
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Công nhân không được sử dụng nhà vệ sinh sạch
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Tác động xã hội</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Người dân gặp khó khăn khi có nhu cầu vệ sinh khi lỡ đường, xả thải mất trật tự và mất vệ sinh
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Du khách có những trải nghiệm không tốt khi đến Việt Nam du lịch
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Thách thức kỹ thuật</h3>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Hoạt động làm sạch các nhà vệ sinh công cộng hiện đang gặp các thách thức về kỹ thuật làm sạch và nhân sự thực hiện dẫn đến nhiều hệ lụy cho xã hội.
                  </p>
                  <p>
                    Chất thải của con người hiện nay hoàn toàn khác với cách đây vài mươi năm đòi hỏi phải có phương pháp làm sạch phù hợp. 
                    Hơn nữa, nhân sự làm công việc này cũng cần được trang bị phương tiện tiên tiến và dễ thực hiện thì bài toán này mới được giải.
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
                  Câu chuyện Trường Sạch
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">
                      Chính phủ, Bộ Giáo dục và các Ban Ngành liên quan đã có nhiều cố gắng vận động và thực thi các biện pháp khắc phục vấn đề này và đã đạt một số kết quả khả quan. Tuy nhiên một lượng lớn các nhà vệ sinh trong trường học vẫn chưa sạch và tình trạng mùi hôi trong nhà vệ sinh vẫn chưa khắc phục được vì chưa có giải pháp kỹ thuật phù hợp.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">🏢 Thành lập công ty (2017)</h3>
                    <p className="text-gray-700">
                      Hiểu được những nỗi đau và thách thức trên, năm 2017, Công ty Cổ phần Giải pháp Con Voi được thành lập, kế thừa hoạt động dịch vụ và triển khai Dự án Trường sạch từ Công ty TNHH Tường Minh - là một trong những công ty chuyên cung cấp dịch vụ vệ sinh công nghiệp hàng đầu tại Việt Nam.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">👨‍💼 Đội ngũ lãnh đạo</h3>
                    <p className="text-gray-700">
                      Lãnh đạo Công ty là những doanh nhân có trên 20 năm kinh nghiệm trong việc cung cấp các giải pháp vệ sinh công nghiệp và chế tạo ra các thiết bị làm sạch bằng nước cao áp tiên tiến; cũng ở vai trò làm cha mẹ nên vấn đề nhà vệ sinh trường học đã chạm đến trái tim của các thành viên trong Dự án.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">🚀 Ra mắt dự án (2018)</h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">
                      Nhóm đã bắt tay nghiên cứu việc làm sạch các nhà vệ sinh cộng đồng và đã có lời giải cho vấn đề này.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Cuối năm 2018, Dự án TRƯỜNG SẠCH chính thức ra mắt với mục đích mang lại Nhà vệ sinh sạch sẽ cho các trường học có nhu cầu trên toàn Việt Nam.
                    </p>
                    <p className="text-gray-700">
                      Đến nay, Dự án đã triển khai thành công tại nhiều trường tại Tp Hồ Chí Minh, giúp các nhà vệ sinh trường học được Làm sạch, Khử khuẩn và Khử mùi với chi phí ít hơn 1.000đ/học sinh mỗi ngày.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Về chúng tôi */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">3</span>
                  Về chúng tôi
                </h2>
                <p className="text-xl text-gray-600">
                  Con Voi đã đồng hành với nhiều trường học từ năm học 2014-2015
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">🔬 Công nghệ tiên tiến</h3>
                  <p className="text-gray-700 mb-4">
                    Dự án TRƯỜNG SẠCH sử dụng Công nghệ Bọt tuyết Enzyme gốc sinh học BRT-3 với máy rửa cao áp để làm sạch các nhà vệ sinh công cộng, làm sạch, khử khuẩn, khử mùi cho nhà vệ sinh Trường học, hoàn toàn không độc hại, thân thiện với môi trường.
                  </p>
                  <p className="text-gray-700">
                    Trong tương lai, chúng tôi có kế hoạch phát triển robot để thay thế nhân công ở một số địa điểm phù hợp.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">👥 Đội ngũ chuyên gia</h4>
                    <p className="text-gray-700">
                      Chúng tôi có chuyên gia giải pháp có hơn 20 năm kinh nghiệm trong ngành tẩy rửa và làm sạch trong công nghiệp, kết hợp với chuyên gia về công nghệ thông tin (IoT, AI, Robot) để có các giải pháp phù hợp cho từng nhóm đối tượng.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">🌱 Mục tiêu chung</h4>
                    <p className="text-gray-700">
                      Chúng tôi có cùng mục tiêu là giải quyết triệt để "nỗi ám ảnh Nhà vệ sinh công cộng", thay đổi theo hướng tích cực bộ mặt của đất nước và con người Việt Nam.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">🏢 Doanh nghiệp xã hội</h3>
                  <p className="text-gray-700 mb-4">
                    Việc sử dụng chất tẩy rửa ít tác hại với môi trường là tiêu chí hàng đầu mà chúng tôi theo đuổi. Ngoài ra, chúng tôi cũng đang trên hành trình ứng dụng IoT vào việc quản lý thiết bị. Việc ứng dụng AI phục vụ công việc và sử dụng Robot trong việc tẩy rửa nhà vệ sinh cũng đã được bắt đầu.
                  </p>
                  <p className="text-gray-700">
                    Là một doanh nghiệp định hướng trở thành Doanh nghiệp xã hội, chúng tôi đặt mục tiêu tác động xã hội lên hàng đầu nhưng vẫn không tách rời mục tiêu hiệu quả kinh tế. Phụng sự xã hội và hiệu quả kinh doanh là 2 nhóm công việc diễn ra song song và bổ trợ lẫn nhau.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📈 Kết quả đạt được</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-700 mb-2">
                        <strong>Hiệu quả đã chứng minh:</strong> Giải pháp đã được chứng minh hiệu quả trong 3 năm qua ở hơn 10 Trường tại Tp. Hồ Chí Minh.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Kế hoạch mở rộng:</strong> Chúng tôi dự kiến năm học 2024-2025 sẽ triển khai mở rộng Dự án đến 300 Trường học trên địa bàn 10 Tỉnh - Thành.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sự khác biệt */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">4</span>
                  Sự khác biệt
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Dự án Clean for All cung cấp giải pháp điền đầy bức tranh phát triển kinh tế của đất nước Việt Nam nói chung ở khía cạnh vệ sinh công cộng.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                <p className="text-lg text-gray-700 text-center mb-8">
                  Chúng tôi khác biệt với các giải pháp truyền thống ở chỗ chúng tôi không cung cấp sản phẩm riêng rẽ mà chúng tôi cung cấp một giải pháp tổng thể về mặt kinh tế, xã hội và có lợi cho môi trường.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h3 className="text-xl font-bold text-green-800 mb-3">💪 Thế mạnh</h3>
                      <p className="text-gray-700">
                        Đội ngũ chuyên gia am hiểu kỹ thuật, am hiểu thị trường, có kỹ năng kinh doanh hiệu quả
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">🤝 Nguồn lực</h3>
                      <p className="text-gray-700">
                        Chúng tôi không mạnh về vốn. Dự án này đòi hỏi một nguồn vốn lớn, chúng tôi tự tin sẽ tìm được nhiều nguồn lực trong xã hội sẽ hậu thuẫn mạnh mẽ để đi đến thành công.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lĩnh vực ứng dụng */}
        {/* <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">5</span>
                  Lĩnh vực ứng dụng giải pháp
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Dự án hướng tới làm sạch các nhà vệ sinh công cộng ở những nơi có nhiều người sử dụng và mở rộng đến các gia đình có nhu cầu làm sạch
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <thead className="bg-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Lĩnh vực</th>
                      <th className="px-6 py-4 text-left">Tổng số</th>
                      <th className="px-6 py-4 text-left">Mục tiêu phục vụ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Trường học</td>
                      <td className="px-6 py-4 text-gray-700">37.000 trường với hơn 200.000 nhà vệ sinh</td>
                      <td className="px-6 py-4 text-gray-700">10.000 trường học ~ 60.000 nhà VS ~ 6.000.000 HS-SV</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Bệnh viện</td>
                      <td className="px-6 py-4 text-gray-700">1.531 Bệnh viện</td>
                      <td className="px-6 py-4 text-gray-700">500 Bệnh viện</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cơ sở tôn giáo</td>
                      <td className="px-6 py-4 text-gray-700">46.000+ Ngôi chùa, Nhà thờ, thánh thất...</td>
                      <td className="px-6 py-4 text-gray-700">8.000 điểm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cơ sở kinh doanh F&B, cửa hàng tiện lợi</td>
                      <td className="px-6 py-4 text-gray-700">400.000+ cơ sở</td>
                      <td className="px-6 py-4 text-gray-700">50.000 cơ sở</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cơ sở hành chính</td>
                      <td className="px-6 py-4 text-gray-700">32.000+ cơ sở cấp TW, cấp tỉnh, cấp huyện, cấp xã</td>
                      <td className="px-6 py-4 text-gray-700">10.000 cơ sở</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Khu công nghiệp</td>
                      <td className="px-6 py-4 text-gray-700">414 khu CN với hơn 14.000.000 lao động</td>
                      <td className="px-6 py-4 text-gray-700">20.000 nhà máy 5.000.000 lao động</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Nhà vệ sinh công cộng</td>
                      <td className="px-6 py-4 text-gray-700">25.000+ cây xăng, trạm dừng chân, NVS đô thị, trạm xe khách liên tỉnh, bến xe, ga tàu hỏa</td>
                      <td className="px-6 py-4 text-gray-700">8.000 điểm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Hộ gia đình</td>
                      <td className="px-6 py-4 text-gray-700">25.000.000 hộ</td>
                      <td className="px-6 py-4 text-gray-700">250.000 hộ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section> */}

        {/* Giá trị đề xuất */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">6</span>
                  Giá trị đề xuất
                </h2>
              </div>

              <div className="space-y-8">
                {/* Tác động kinh tế */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">💰</span>
                    A. Tác động về kinh tế
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Gia tăng khách hàng, tăng doanh thu cho những ngành: F&B, Du lịch, Vận tải hành khách, cửa hàng tiện lợi, chợ truyền thống, thủ công mỹ nghệ, nông nghiệp sạch ...bằng cách nâng chất lượng phục vụ, tăng trải nghiệm khách hàng và mang lại một nguồn thu đáng kể cho ngân sách.
                    </p>
                    <p>
                      Giảm chi phí y tế của toàn xã hội, tiết kiệm ngân sách cho chính phủ. Giảm áp lực cho ngành y tế, quản lý đô thị.
                    </p>
                  </div>
                </div>

                {/* Tác động xã hội */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🤝</span>
                    B. Tác động về xã hội
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Góp phần thay đổi một cách tích cực bộ mặt của đất nước và con người Việt Nam trước bạn bè quốc tế.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Tăng chỉ số hạnh phúc cho học sinh, cho toàn dân, củng cố khối "Đại đoàn kết" toàn dân khi chung tay dần giải quyết được một vấn đề tồn tại từ lâu trong xã hội.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Giảm bức xúc, xung đột giữa chính quyền và người dân, gia tăng lòng tin của người dân vào chính phủ.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Tạo thêm việc làm cho hơn 6.000 lao động tại các địa phương.
                    </li>
                  </ul>
                </div>

                {/* Phân khúc đối tượng */}
                {/* <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    C. Phân khúc đối tượng mục tiêu và giá trị đề xuất chi tiết
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-3">🏫 Trường học & Cơ sở giáo dục</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Đề xuất giá trị:</strong> Nhà vệ sinh sạch sẽ giúp nâng cao sức khỏe học sinh và tạo động lực cho quá trình học tập hiệu quả. Cải thiện hình ảnh nhà trường và thu hút sự tham gia của phụ huynh vào các hoạt động cộng đồng.
                      </p>
                      <p className="text-sm text-green-800 font-medium">
                        "Nhà vệ sinh sạch sẽ – Nền tảng cho sức khỏe và hiệu quả học tập."
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-3">🏭 Nhà máy & Doanh nghiệp</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Giá trị đề xuất:</strong> Cải thiện vệ sinh giúp tăng năng suất lao động, giảm số ngày nghỉ ốm và phù hợp với mục tiêu ESG/CSR.
                      </p>
                      <p className="text-sm text-blue-800 font-medium">
                        "Nâng cao năng suất thông qua cơ sở sạch sẽ và nhân viên khỏe mạnh hơn."
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-3">🏥 Bệnh viện & GT công cộng</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Giá trị đề xuất:</strong> Nhà vệ sinh sạch sẽ giúp giảm nhiễm trùng và nâng cao lòng tin của công chúng.
                      </p>
                      <p className="text-sm text-red-800 font-medium">
                        "Không gian sạch hơn, cuộc sống khỏe mạnh hơn."
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                      <h4 className="font-bold text-orange-800 mb-3">🍽️ Du lịch & F&B</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Giá trị đề xuất:</strong> Nhà vệ sinh sạch sẽ làm tăng sự hài lòng của khách hàng và tăng lượng khách hàng quay lại.
                      </p>
                      <p className="text-sm text-orange-800 font-medium">
                        "Luôn luôn có một trải nghiệm sạch sẽ."
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-3">🏛️ Cơ sở tôn giáo</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Giá trị đề xuất:</strong> Không gian sạch sẽ tạo ra môi trường hấp dẫn và tôn kính.
                      </p>
                      <p className="text-sm text-yellow-800 font-medium">
                        "Sự tôn kính bắt đầu từ sự sạch sẽ."
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                      <h4 className="font-bold text-teal-800 mb-3">👤 Cá nhân & Người tiêu dùng Xanh</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Đề xuất giá trị:</strong> Đáp ứng nhu cầu mua sắm sản phẩm thân thiện với môi trường và tích hợp đóng góp xã hội vào từng giao dịch.
                      </p>
                      <p className="text-sm text-teal-800 font-medium">
                        "Mỗi lần mua sắm là một lần đóng góp cho cộng đồng."
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Đối tác đã liên kết */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center text-lg font-bold mr-4">7</span>
                  Các đối tác đã liên kết
                </h2>
                <p className="text-xl text-gray-600">
                  Dự án hoàn thành tại các trường học
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Trường THCS Khánh Hội A Quận 4',
                  'Trường THCS Nguyễn Thị Thập Q7', 
                  'Trường THCS Quang Trung Q4',
                  'Trường Tiểu Học Tăng Bạt Hổ B Quận 4',
                  'Trường THCS Chánh Hưng Q8',
                  'Và Một Số Trường Khác'
                ].map((school, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{school}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      ✅ Hoàn thành
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    🎯 Mục tiêu năm học 2024-2025
                  </h3>
                  <p className="text-lg text-gray-700">
                    Triển khai mở rộng Dự án đến <strong className="text-green-700">300 Trường học</strong> trên địa bàn <strong className="text-blue-700">10 Tỉnh - Thành</strong>
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