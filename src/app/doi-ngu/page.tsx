import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function DoiNgu() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Đội ngũ <span className="text-indigo-700">Con Voi</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Những con người tâm huyết đang cùng nhau xây dựng tương lai tốt đẹp cho giáo dục Việt Nam
              </p>
            </div>
          </div>
        </section>

        {/* Ban lãnh đạo */}
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-indigo-600 text-white rounded-full w-10 h-10 inline-flex items-center justify-center text-xl font-bold mr-4">👑</span>
                  Ban lãnh đạo
                </h2>
                <p className="text-xl text-gray-600">
                  Những người dẫn dắt với tầm nhìn và kinh nghiệm sâu rộng
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Ông Lương Ngọc Trung */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-3 border-orange-500">
                      <Image
                        src="/avt/avt-trung.jpg"
                        alt="Ông Lương Ngọc Trung"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Ông LƯƠNG NGỌC TRUNG</h3>
                      <p className="text-orange-600 font-semibold">Business Coach - Chuyên gia giải pháp</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-orange-500 text-lg mr-3 mt-1">🏆</span>
                      <p className="text-gray-700">
                        Business Coach có chứng nhận của ActionCoach toàn cầu từ năm 2015
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 text-lg mr-3 mt-1">🔬</span>
                      <p className="text-gray-700">
                        Chuyên gia giải pháp có trên 20 năm làm việc trong ngành tẩy rửa và làm sạch công nghiệp
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 text-lg mr-3 mt-1">⚙️</span>
                      <p className="text-gray-700">
                        Kinh nghiệm phong phú trong việc tẩy rửa máy móc thiết bị, bồn bể, dàn khoan, nhà máy lọc dầu, 
                        nhà máy nhiệt điện, máy bay, tàu ngầm, trang thiết bị xây dựng, thiết bị chế biến thực phẩm, trường học
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ông Nguyễn Thiên Bảo */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-3 border-blue-500">
                      <Image
                        src="/avt/NGUYEN THIEN BẢO.jpg"
                        alt="Ông Nguyễn Thiên Bảo"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Ông NGUYỄN THIÊN BẢO</h3>
                      <p className="text-blue-600 font-semibold">Tiến sĩ Công nghệ Thông tin</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-blue-500 text-lg mr-3 mt-1">🎓</span>
                      <p className="text-gray-700">
                        Tiến sĩ Công nghệ Thông tin chuyên ngành AI
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 text-lg mr-3 mt-1">💼</span>
                      <p className="text-gray-700">
                        Chủ Doanh nghiệp Công nghệ Thông tin chuyên lập trình lĩnh vực AI
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 text-lg mr-3 mt-1">👨‍🏫</span>
                      <p className="text-gray-700">
                        Giảng viên Đại học
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Bà Trần Tuệ Như */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-3 border-pink-500">
                      <Image
                        src="/avt/avt-tue-nhu.png"
                        alt="Bà Trần Tuệ Như"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Bà TRẦN TUỆ NHƯ</h3>
                      <p className="text-pink-600 font-semibold">Chuyên gia giáo dục - Doanh nhân xã hội</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-pink-500 text-lg mr-3 mt-1">👶</span>
                      <p className="text-gray-700">
                        Chuyên gia giáo dục sớm cho trẻ từ 0-6 tuổi
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-pink-500 text-lg mr-3 mt-1">🌱</span>
                      <p className="text-gray-700">
                        Doanh nhân xã hội với tâm huyết phát triển giáo dục
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ông Phạm Xuân Thanh */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-3 border-green-500">
                      <Image
                        src="/avt/pham xuan thanh.jpg"
                        alt="Ông Phạm Xuân Thanh"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Ông PHẠM XUÂN THANH</h3>
                      <p className="text-green-600 font-semibold">Giảng viên - Chủ DN Công nghệ</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-500 text-lg mr-3 mt-1">🎓</span>
                      <p className="text-gray-700">
                        Giảng viên đại học chuyên ngành Công nghệ Thông tin
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-lg mr-3 mt-1">🏗️</span>
                      <p className="text-gray-700">
                        Chủ DN Công nghệ Thông tin chuyên xây dựng Platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Đội ngũ cố vấn */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="container-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  <span className="bg-purple-600 text-white rounded-full w-10 h-10 inline-flex items-center justify-center text-xl font-bold mr-4">💡</span>
                  Đội ngũ cố vấn
                </h2>
                <p className="text-xl text-gray-600">
                  Những cố vấn giàu kinh nghiệm hỗ trợ định hướng phát triển
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Huỳnh Minh Băng Nga */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-3 border-purple-500">
                      <Image
                        src="/avt/MS.-HUYNH-MINH-BANG-NGA-727x1024.jpg"
                        alt="Huỳnh Minh Băng Nga"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">HUỲNH MINH BĂNG NGA</h3>
                      <p className="text-purple-600 font-semibold">Chuyên gia Kinh doanh & Marketing</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      30+ năm kinh nghiệm
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">🏢 Hệ thống & Phân phối</h4>
                        <p className="text-gray-600 text-sm">
                          Xây dựng hệ thống, kênh phân phối và đội ngũ bán hàng
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">👥 Chăm sóc khách hàng</h4>
                        <p className="text-gray-600 text-sm">
                          Đội ngũ chăm sóc khách hàng và hoạt động tiếp thị
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">📊 Phân tích thị trường</h4>
                        <p className="text-gray-600 text-sm">
                          Đánh giá phân tích thị trường và mở rộng thị trường
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">💼 Tư vấn doanh nghiệp</h4>
                        <p className="text-gray-600 text-sm">
                          Tư vấn kế hoạch tài chính, nhân sự, kinh doanh tại nhiều công ty FMCG
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cô Mi Tâm */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-3 border-indigo-500">
                      <Image
                        src="/avt/le thị thanh tâm.png"
                        alt="Cô Mi Tâm"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Cô MI TÂM</h3>
                      <p className="text-indigo-600 font-semibold">Luật sư - Chuyên gia Tài sản Trí tuệ</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-indigo-500 text-lg mr-3 mt-1">🎓</span>
                      <p className="text-gray-700">
                        Giảng viên Đại học Quốc gia TP. HCM
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-indigo-500 text-lg mr-3 mt-1">⚖️</span>
                      <p className="text-gray-700">
                        Luật sư với nhiều năm kinh nghiệm chuyên sâu
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-indigo-500 text-lg mr-3 mt-1">💡</span>
                      <p className="text-gray-700">
                        Chuyên gia trong lĩnh vực tài sản trí tuệ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Cùng chúng tôi xây dựng tương lai giáo dục
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Với đội ngũ giàu kinh nghiệm và tâm huyết, chúng tôi cam kết mang đến những giải pháp tốt nhất cho giáo dục Việt Nam
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/lien-he" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Liên hệ với chúng tôi
                </a>
                <a 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                >
                  Tìm hiểu thêm về dự án
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