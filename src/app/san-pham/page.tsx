import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function SanPham() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sản phẩm <span className="text-blue-700">Con Voi</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Những giải pháp tiên tiến và bền vững cho vệ sinh môi trường, góp phần tạo nên 
              không gian sống và học tập an toàn, sạch sẽ cho cộng đồng.
            </p>
            <Link href="/happy-market" className="btn-primary text-lg px-8 py-4">
              Mua hàng tại Happy Market
            </Link>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Máy rửa cao áp */}
            <div className="card">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="mx-auto h-20 w-20 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                  <p className="text-blue-700 font-semibold text-lg">Máy rửa cao áp</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Máy rửa cao áp chuyên nghiệp</h3>
              <p className="text-gray-700 mb-6">
                Dòng máy rửa cao áp đa dạng với nhiều công suất khác nhau, phù hợp với mọi nhu cầu 
                vệ sinh từ gia đình đến công nghiệp. Thiết kế bền bỉ, tiết kiệm nước và năng lượng.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Áp lực cao, làm sạch hiệu quả</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Tiết kiệm nước và điện năng</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Bảo hành chính hãng 24 tháng</span>
                </div>
              </div>
              <Link href="/happy-market" className="btn-primary w-full text-center block">
                Xem chi tiết & Đặt hàng
              </Link>
            </div>

            {/* Dung dịch BRT-3 */}
            <div className="card">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="mx-auto h-20 w-20 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                  <p className="text-green-700 font-semibold text-lg">Dung dịch BRT-3</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dung dịch BRT-3 đặc biệt</h3>
              <p className="text-gray-700 mb-6">
                Công nghệ tiên tiến BRT-3 được nghiên cứu và phát triển riêng, giúp xử lý triệt để 
                các vấn đề vệ sinh, diệt khuẩn và khử mùi hiệu quả tại nguồn.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Diệt khuẩn 99.9%</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">An toàn với môi trường</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Khử mùi lâu dài</span>
                </div>
              </div>
              <Link href="/happy-market" className="btn-primary w-full text-center block">
                Xem chi tiết & Đặt hàng
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Dụng cụ vệ sinh thông minh */}
            <div className="card">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="mx-auto h-20 w-20 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-purple-700 font-semibold text-lg">Dụng cụ thông minh</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dụng cụ vệ sinh thông minh</h3>
              <p className="text-gray-700 mb-6">
                Bộ dụng cụ vệ sinh được thiết kế thông minh, tích hợp công nghệ hiện đại giúp 
                tối ưu hóa quá trình làm sạch và bảo trì hệ thống vệ sinh.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Thiết kế ergonomic</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Chất liệu bền bỉ</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dễ sử dụng và bảo trì</span>
                </div>
              </div>
              <Link href="/happy-market" className="btn-primary w-full text-center block">
                Xem chi tiết & Đặt hàng
              </Link>
            </div>

            {/* Dịch vụ CSR */}
            <div className="card">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="mx-auto h-20 w-20 text-orange-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-orange-700 font-semibold text-lg">Dịch vụ CSR</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dịch vụ CSR cho doanh nghiệp</h3>
              <p className="text-gray-700 mb-6">
                Chương trình trách nhiệm xã hội doanh nghiệp (CSR) chuyên nghiệp, giúp doanh nghiệp 
                thực hiện cam kết về môi trường và cộng đồng một cách hiệu quả.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Tư vấn chiến lược CSR</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Thiết kế chương trình phù hợp</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Đo lường và báo cáo tác động</span>
                </div>
              </div>
              <Link href="/lien-he" className="btn-primary w-full text-center block">
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn sản phẩm Con Voi?</h2>
            <p className="text-lg text-gray-700">
              Chúng tôi cam kết mang đến những giải pháp tốt nhất cho cộng đồng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🔬',
                title: 'Công nghệ tiên tiến',
                description: 'Áp dụng công nghệ BRT-3 độc quyền, được nghiên cứu và phát triển kỹ lưỡng.'
              },
              {
                icon: '🌱',
                title: 'Thân thiện môi trường',
                description: 'Tất cả sản phẩm đều an toàn với môi trường và con người.'
              },
              {
                icon: '⚡',
                title: 'Hiệu quả cao',
                description: 'Mang lại kết quả vượt trội với chi phí tối ưu cho người sử dụng.'
              },
              {
                icon: '🛡️',
                title: 'Bảo hành uy tín',
                description: 'Chế độ bảo hành rõ ràng và dịch vụ hậu mãi chuyên nghiệp.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Solutions */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 Giải pháp kỹ thuật BRT-3</h2>
            <p className="text-lg text-gray-700">
              Hệ thống giải pháp toàn diện cho mọi nhu cầu vệ sinh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Giải pháp 1: Xử lý nước thải',
                description: 'Công nghệ BRT-3 xử lý nước thải hiệu quả, đảm bảo an toàn môi trường.',
                icon: '💧'
              },
              {
                title: 'Giải pháp 2: Khử mùi tự động',
                description: 'Hệ thống khử mùi thông minh, hoạt động tự động 24/7.',
                icon: '🌸'
              },
              {
                title: 'Giải pháp 3: Diệt khuẩn toàn diện',
                description: 'Diệt khuẩn, virus với hiệu quả 99.9%, an toàn cho người sử dụng.',
                icon: '🦠'
              },
              {
                title: 'Giải pháp 4: Tiết kiệm nước',
                description: 'Công nghệ tiết kiệm nước thông minh, giảm 30-50% lượng nước sử dụng.',
                icon: '💚'
              },
              {
                title: 'Giải pháp 5: Bảo trì thông minh',
                description: 'Hệ thống cảnh báo và bảo trì tự động, giảm thiểu chi phí vận hành.',
                icon: '🔧'
              }
            ].map((solution, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Sẵn sàng tạo nên sự khác biệt?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Hãy cùng chúng tôi mang đến những giải pháp vệ sinh tốt nhất cho cộng đồng. 
            Mỗi sản phẩm bạn mua không chỉ mang lại giá trị mà còn góp phần xây dựng tương lai tốt đẹp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/happy-market" className="btn-primary bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4">
              Mua sắm tại Happy Market
            </Link>
            <Link href="/lien-he" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-700">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 