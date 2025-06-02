import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function TruongSach() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Chương trình <span className="text-green-600">TRƯỜNG SẠCH</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường. 
              Mỗi ngôi trường sạch là một bước tiến trong việc xây dựng tương lai tốt đẹp cho thế hệ trẻ Việt Nam.
            </p>
            <Link href="#register" className="btn-primary text-lg px-8 py-4">
              Đăng ký tham gia ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Program Introduction */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lời giới thiệu Chương trình TRƯỜNG SẠCH</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Chương trình "Trường Sạch" được khởi xướng nhằm giải quyết bài toán cấp thiết về vệ sinh 
                  môi trường học đường tại Việt Nam. Với hơn 27.000 trường học trên toàn quốc, nhiều nơi 
                  vẫn thiếu hệ thống vệ sinh cơ bản.
                </p>
                <p>
                  Chúng tôi tin rằng môi trường học tập sạch sẽ không chỉ bảo vệ sức khỏe học sinh mà còn 
                  góp phần nâng cao chất lượng giáo dục và giảm tỷ lệ bỏ học, đặc biệt ở học sinh nữ.
                </p>
                <p>
                  Thông qua việc ứng dụng công nghệ BRT-3 tiên tiến và mô hình hợp tác đa phương, 
                  chúng tôi cam kết mang đến giải pháp bền vững cho từng ngôi trường.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-24 w-24 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m12 0v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0H5" />
                  </svg>
                  <p className="text-green-700 font-semibold text-lg">Trường học xanh - sạch - đẹp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Đăng ký tham gia</h2>
              <p className="text-lg text-gray-700">
                Hãy đăng ký để trường của bạn trở thành một phần của chương trình TRƯỜNG SẠCH
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tên trường <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nhập tên trường học"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cấp học <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Chọn cấp học</option>
                      <option value="mam-non">Mầm non</option>
                      <option value="tieu-hoc">Tiểu học</option>
                      <option value="thcs">THCS</option>
                      <option value="thpt">THPT</option>
                      <option value="cao-dang">Cao đẳng</option>
                      <option value="dai-hoc">Đại học</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tỉnh/Thành phố <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Chọn tỉnh thành</option>
                      <option value="ha-noi">Hà Nội</option>
                      <option value="ho-chi-minh">TP. Hồ Chí Minh</option>
                      <option value="da-nang">Đà Nẵng</option>
                      <option value="hai-phong">Hải Phòng</option>
                      <option value="can-tho">Cần Thơ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quận/Huyện <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nhập quận/huyện"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số học sinh <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nhập số học sinh hiện tại"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thông tin liên hệ <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Họ và tên người liên hệ"
                      required
                    />
                    <input
                      type="tel"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Số điện thoại"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả tình trạng hiện tại
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Mô tả tình trạng nhà vệ sinh hiện tại tại trường..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary text-lg px-8 py-4">
                    Gửi đăng ký tham gia
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Status */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tình trạng các trường tham gia</h2>
            <p className="text-lg text-gray-700">
              Theo dõi tiến độ thực hiện chương trình tại các trường học
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Completed Projects */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Đã vận hành</h3>
                  <p className="text-green-600 font-medium">45 dự án hoàn thành</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'THCS Nguyễn Du', location: 'Hà Giang', students: '350 học sinh' },
                  { name: 'TH Lê Quý Đôn', location: 'Cao Bằng', students: '280 học sinh' },
                  { name: 'THPT Trần Phú', location: 'Lào Cai', students: '420 học sinh' },
                ].map((school, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="font-semibold text-gray-900">{school.name}</p>
                    <p className="text-sm text-gray-600">{school.location} • {school.students}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/completed-projects" className="text-green-600 hover:text-green-700 font-medium">
                  Xem tất cả dự án đã hoàn thành →
                </Link>
              </div>
            </div>

            {/* In Progress Projects */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Đang thực hiện</h3>
                  <p className="text-green-600 font-medium">28 dự án đang lắp đặt</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'THCS Điện Biên', location: 'Điện Biên', progress: '85%' },
                  { name: 'TH Sơn La', location: 'Sơn La', progress: '70%' },
                  { name: 'THPT Yên Bái', location: 'Yên Bái', progress: '60%' },
                ].map((school, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="font-semibold text-gray-900">{school.name}</p>
                    <p className="text-sm text-gray-600">{school.location}</p>
                    <div className="mt-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: school.progress}}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Tiến độ: {school.progress}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fundraising Projects */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Đang vận động kinh phí</h3>
                  <p className="text-green-600 font-medium">67 dự án cần hỗ trợ</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'THCS Mường Lay', location: 'Điện Biên', needed: '85 triệu', raised: '60%' },
                  { name: 'TH Bắc Hà', location: 'Lào Cai', needed: '92 triệu', raised: '45%' },
                  { name: 'THPT Mù Cang Chải', location: 'Yên Bái', needed: '78 triệu', raised: '30%' },
                ].map((school, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="font-semibold text-gray-900">{school.name}</p>
                    <p className="text-sm text-gray-600">{school.location} • Cần: {school.needed}</p>
                    <div className="mt-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: school.raised}}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Đã quyên góp: {school.raised}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <Link href="/donate" className="btn-primary w-full text-center block">
                  Quyên góp bằng tiền
                </Link>
                <Link href="/happy-market" className="btn-secondary w-full text-center block">
                  Mua sắm trong hạnh phúc
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 