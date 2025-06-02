import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function HappyMarket() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">Happy</span> Market
            </h1>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4">
                💝 Thông điệp đặc biệt 💝
              </div>
              <p className="text-xl lg:text-2xl text-gray-800 font-semibold">
                "Mỗi 2 triệu mua sắm trên Happy Market, bạn đã giúp cho 1 học sinh có nhà vệ sinh sạch để sử dụng khi đến trường"
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="btn-primary bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                Mua sắm trong hạnh phúc
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cách thức hoạt động</h2>
            <p className="text-lg text-gray-700">
              Happy Market là nhà tài trợ chiến lược cho Chương trình TRƯỜNG SẠCH
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Mua sắm tại Happy Market</h3>
              <p className="text-gray-700">
                Bạn mua sắm các sản phẩm chất lượng với giá ưu đãi tại Happy Market
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. 5% doanh thu được chuyển</h3>
              <p className="text-gray-700">
                5% doanh thu từ đơn hàng của bạn sẽ được chuyển vào quỹ Chương trình TRƯỜNG SẠCH
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m12 0v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0H5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Bạn chọn trường được hỗ trợ</h3>
              <p className="text-gray-700">
                Bạn được quyền chỉ định trường học nào sẽ nhận khoản tài trợ từ Happy Market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tính toán tác động của bạn</h2>
              <p className="text-lg text-gray-700">
                Xem bạn có thể giúp được bao nhiêu học sinh thông qua việc mua sắm
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    Số tiền bạn dự định mua sắm (VNĐ):
                  </label>
                  <input
                    type="number"
                    placeholder="2,000,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Mỗi 2 triệu = 1 học sinh được hỗ trợ
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orange-100 rounded-lg p-6">
                    <div className="text-4xl mb-2">🎓</div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                    <div className="text-gray-700">Học sinh được hỗ trợ</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a href="#" className="btn-primary bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                  Bắt đầu mua sắm ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Danh mục sản phẩm</h2>
            <p className="text-lg text-gray-700">
              Tất cả những gì bạn cần, giờ đây có ý nghĩa thiện nguyện
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Thực phẩm & Đồ uống', icon: '🍎', description: 'Thực phẩm tươi ngon, chất lượng cao' },
              { name: 'Thời trang & Phụ kiện', icon: '👕', description: 'Quần áo, giày dép, túi xách' },
              { name: 'Điện tử & Công nghệ', icon: '📱', description: 'Điện thoại, laptop, phụ kiện công nghệ' },
              { name: 'Sức khỏe & Làm đẹp', icon: '💄', description: 'Mỹ phẩm, chăm sóc sức khỏe' },
              { name: 'Gia dụng & Nội thất', icon: '🏠', description: 'Đồ gia dụng, nội thất, decor' },
              { name: 'Sách & Văn phòng phẩm', icon: '📚', description: 'Sách, dụng cụ học tập, văn phòng' },
              { name: 'Thể thao & Du lịch', icon: '⚽', description: 'Dụng cụ thể thao, đồ du lịch' },
              { name: 'Mẹ & Bé', icon: '👶', description: 'Đồ dùng cho mẹ và bé yêu' },
            ].map((category, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Selection */}
      <section className="section-padding bg-blue-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Chọn trường để ủng hộ</h2>
              <p className="text-lg text-gray-700">
                Bạn có thể chỉ định trường học cụ thể để nhận khoản hỗ trợ từ việc mua sắm của mình
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'THCS Mường Lay', location: 'Điện Biên', need: '85 triệu', raised: '60%' },
                  { name: 'TH Bắc Hà', location: 'Lào Cai', need: '92 triệu', raised: '45%' },
                  { name: 'THPT Mù Cang Chải', location: 'Yên Bái', need: '78 triệu', raised: '30%' },
                ].map((school, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-2">{school.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{school.location}</p>
                    <p className="text-sm text-gray-700 mb-3">Cần: {school.need}</p>
                    <div className="mb-3">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: school.raised}}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Đã đạt: {school.raised}</p>
                    </div>
                    <button className="btn-secondary w-full text-sm py-2">
                      Chọn trường này
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/truong-sach" className="text-blue-600 hover:text-blue-700 font-medium">
                  Xem tất cả các trường cần hỗ trợ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Bắt đầu hành trình mua sắm có ý nghĩa
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Mỗi sản phẩm bạn mua không chỉ mang lại giá trị cho bản thân mà còn góp phần 
            tạo nên tương lai tốt đẹp cho các em học sinh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary bg-white text-orange-700 hover:bg-gray-100 text-lg px-8 py-4">
              Mua sắm trong hạnh phúc
            </a>
            <Link href="/truong-sach" className="btn-secondary border-white text-white hover:bg-white hover:text-orange-700">
              Tìm hiểu thêm về chương trình
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 