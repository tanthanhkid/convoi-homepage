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
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Về <span className="text-green-700">Con Voi</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tổ chức phi lợi nhuận cam kết cải thiện môi trường giáo dục và nâng cao chất lượng cuộc sống cho trẻ em Việt Nam
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  Sứ mệnh của chúng tôi
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Con Voi ra đời với sứ mệnh kết nối các nguồn lực xã hội để mang đến cho học sinh một môi trường giáo dục tốt hơn, 
                  đặc biệt là hạ tầng nhà vệ sinh sạch sẽ và an toàn.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Chúng tôi tin rằng, mỗi trẻ em đều xứng đáng có một môi trường học tập tốt nhất, 
                  và việc cải thiện hạ tầng cơ bản như nhà vệ sinh là bước đầu quan trọng.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-24 w-24 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-green-700 font-semibold text-lg">Sứ mệnh Con Voi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-green-50">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Giá trị cốt lõi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Những giá trị định hướng mọi hoạt động của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Tình thương</h3>
                <p className="text-gray-600">
                  Yêu thương và quan tâm đến từng học sinh, mong muốn mang đến cho các em một môi trường học tập tốt nhất.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Kết nối</h3>
                <p className="text-gray-600">
                  Xây dựng cầu nối giữa các tổ chức, doanh nghiệp và cộng đồng để cùng nhau tạo ra tác động tích cực.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Minh bạch</h3>
                <p className="text-gray-600">
                  Hoạt động công khai, minh bạch trong mọi dự án, đảm bảo sự tin tưởng từ cộng đồng và các nhà tài trợ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="section-padding">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Tác động của chúng tôi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Những con số ấn tượng về hành trình cải thiện môi trường giáo dục
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Trường học được hỗ trợ' },
                { number: '50,000+', label: 'Học sinh được hưởng lợi' },
                { number: '2,000+', label: 'Nhà vệ sinh được cải tạo' },
                { number: '100+', label: 'Đối tác hỗ trợ' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Đội ngũ của chúng tôi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Những con người tận tâm, nhiệt huyết với sứ mệnh mang đến sự thay đổi tích cực
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Nguyễn Văn A', role: 'Giám đốc điều hành', image: '/team-1.jpg' },
                { name: 'Trần Thị B', role: 'Trưởng phòng dự án', image: '/team-2.jpg' },
                { name: 'Lê Văn C', role: 'Chuyên gia kỹ thuật', image: '/team-3.jpg' }
              ].map((member, index) => (
                <div key={index} className="card text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="h-16 w-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 