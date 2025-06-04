import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Suspense } from 'react';

// Import brands data
import brandsData from '../../../data/brands.json';

// Group brands by category
const groupBrandsByCategory = () => {
  const grouped = brandsData.reduce((acc: any, brand: any) => {
    if (!acc[brand.category]) {
      acc[brand.category] = [];
    }
    acc[brand.category].push(brand);
    return acc;
  }, {});
  return grouped;
};

// Brand Card Component
const BrandCard = ({ brand }: { brand: any }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
        <img 
          src={brand.image_url} 
          alt={brand.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder-brand.svg';
          }}
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-lg">{brand.name}</h3>
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-2">
          {brand.category}
        </span>
      </div>
      <div className="text-orange-600">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
);

// Stats Component
const StatsSection = () => {
  const totalBrands = brandsData.length;
  const categories = [...new Set(brandsData.map(brand => brand.category))];
  const featuredBrands = brandsData.filter(brand => brand.category === "Thương hiệu nổi bật").length;

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{totalBrands}+</div>
          <div className="text-gray-700 font-medium">Thương hiệu đối tác</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{categories.length}</div>
          <div className="text-gray-700 font-medium">Danh mục sản phẩm</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{featuredBrands}</div>
          <div className="text-gray-700 font-medium">Thương hiệu nổi bật</div>
        </div>
      </div>
    </div>
  );
};

// Partners Table Component
const PartnersTable = () => {
  const groupedBrands = groupBrandsByCategory();
  const categories = Object.keys(groupedBrands).sort();

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              {category}
            </h3>
            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
              {groupedBrands[category].length} thương hiệu
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedBrands[category].map((brand: any, index: number) => (
              <BrandCard key={`${category}-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function HappyMarket() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Mua sắm có ý nghĩa
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">Happy</span> Market
            </h1>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-orange-100">
              <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4">
                💝 Thông điệp đặc biệt 💝
              </div>
              <p className="text-xl lg:text-2xl text-gray-800 font-semibold leading-relaxed">
                "Mỗi 2 triệu mua sắm trên Happy Market, bạn đã giúp cho 1 học sinh có nhà vệ sinh sạch để sử dụng khi đến trường"
              </p>
            </div>
            <div className="mt-8">
              <a href="https://happymarket.vn" target="_blank" className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Mua sắm trong hạnh phúc</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Đối tác của chúng tôi
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Happy Market tự hào hợp tác với hàng trăm thương hiệu uy tín, mang đến cho bạn những sản phẩm chất lượng cao với ý nghĩa thiện nguyện sâu sắc.
            </p>
          </div>

          <StatsSection />
          
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
          }>
            <PartnersTable />
          </Suspense>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cách thức hoạt động</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Happy Market là nhà tài trợ chiến lược cho Chương trình TRƯỜNG SẠCH
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mua sắm tại Happy Market</h3>
              <p className="text-gray-700 leading-relaxed">
                Bạn mua sắm các sản phẩm chất lượng với giá ưu đãi tại Happy Market
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">5% doanh thu được chuyển</h3>
              <p className="text-gray-700 leading-relaxed">
                5% doanh thu từ đơn hàng của bạn sẽ được chuyển vào quỹ Chương trình TRƯỜNG SẠCH
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m12 0v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0H5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bạn chọn trường được hỗ trợ</h3>
              <p className="text-gray-700 leading-relaxed">
                Bạn được quyền chỉ định trường học nào sẽ nhận khoản tài trợ từ Happy Market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Danh mục sản phẩm</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Tất cả những gì bạn cần, giờ đây có ý nghĩa thiện nguyện
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Thực phẩm & Đồ uống', icon: '🍎', description: 'Thực phẩm tươi ngon, chất lượng cao', color: 'from-red-100 to-red-200' },
              { name: 'Thời trang & Phụ kiện', icon: '👕', description: 'Quần áo, giày dép, túi xách', color: 'from-purple-100 to-purple-200' },
              { name: 'Điện tử & Công nghệ', icon: '📱', description: 'Điện thoại, laptop, phụ kiện công nghệ', color: 'from-blue-100 to-blue-200' },
              { name: 'Sức khỏe & Làm đẹp', icon: '💄', description: 'Mỹ phẩm, chăm sóc sức khỏe', color: 'from-pink-100 to-pink-200' },
              { name: 'Gia dụng & Nội thất', icon: '🏠', description: 'Đồ gia dụng, nội thất, decor', color: 'from-green-100 to-green-200' },
              { name: 'Sách & Văn phòng phẩm', icon: '📚', description: 'Sách, dụng cụ học tập, văn phòng', color: 'from-yellow-100 to-yellow-200' },
              { name: 'Thể thao & Du lịch', icon: '⚽', description: 'Dụng cụ thể thao, đồ du lịch', color: 'from-indigo-100 to-indigo-200' },
              { name: 'Mẹ & Bé', icon: '👶', description: 'Đồ dùng cho mẹ và bé yêu', color: 'from-orange-100 to-orange-200' },
            ].map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Bắt đầu hành trình mua sắm có ý nghĩa
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Mỗi sản phẩm bạn mua không chỉ mang lại giá trị cho bản thân mà còn góp phần 
            tạo nên tương lai tốt đẹp cho các em học sinh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://happymarket.vn" target="_blank" className="inline-flex items-center bg-white text-orange-700 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Mua sắm trong hạnh phúc</span>
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 