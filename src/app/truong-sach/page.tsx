'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingLink from '../components/LoadingLink';
import LoadingButton from '../components/LoadingButton';

export default function TruongSach() {
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Chương trình <span className="text-green-700">TRƯỜNG SẠCH</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                "Tôi muốn có nhà vệ sinh sạch để học sinh sử dụng khi đến trường"
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Đăng ký trường học tham gia chương trình
                  </h2>
                  <p className="text-gray-600">
                    Hãy để lại thông tin trường học của bạn, chúng tôi sẽ liên hệ và hỗ trợ trong thời gian sớm nhất.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-24 w-24 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-green-700 font-semibold text-lg">Chương trình Trường Sạch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="section-padding">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto">
              <form className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tên trường học <span className="text-red-500">*</span>
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
                    </select>
                  </div>

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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số học sinh hiện tại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nhập số học sinh hiện tại"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Người liên hệ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Họ và tên người liên hệ"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Số điện thoại"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mô tả tình trạng hiện tại
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Mô tả tình trạng nhà vệ sinh hiện tại tại trường..."
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <LoadingButton
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto"
                    onClick={handleFormSubmit}
                  >
                    Đăng ký tham gia chương trình
                  </LoadingButton>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Project Status Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Tình trạng các dự án
              </h2>
              <p className="text-xl text-gray-600">
                Theo dõi tiến độ thực hiện chương trình Trường Sạch
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Đang thực hiện */}
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
                    { name: 'THPT Nguyễn Trãi', location: 'Hà Nội', progress: '85%' },
                    { name: 'THCS Lê Quý Đôn', location: 'TP.HCM', progress: '70%' },
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

              {/* Đang vận động kinh phí */}
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
                    { name: 'THPT Sơn La', location: 'Sơn La', needed: '120 triệu', raised: '45%' },
                    { name: 'THCS Điện Biên', location: 'Điện Biên', needed: '95 triệu', raised: '30%' },
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
                
                <div className="mt-6 pt-6 border-t">
                  <LoadingLink href="/quyen-gop" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full text-center block">
                    Quyên góp hỗ trợ
                  </LoadingLink>
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