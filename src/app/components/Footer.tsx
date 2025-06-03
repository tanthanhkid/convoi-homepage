import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Convoi Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold">DOANH NGHIỆP XÃ HỘI CON VOI</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường. 
              Chúng tôi cam kết mang đến môi trường giáo dục an toàn và sạch sẽ cho tất cả học sinh Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="https://zalo.me/3105382268215205151" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="Liên hệ qua Zalo OA">
                <Image
                  src="/Icon_of_Zalo.svg.png"
                  alt="Zalo OA"
                  width={24}
                  height={24}
                  className="h-6 w-6 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">Về Con Voi</Link></li>
              <li><Link href="/truong-sach" className="text-gray-300 hover:text-white transition-colors">Chương trình Trường Sạch</Link></li>
              <li><Link href="/san-pham" className="text-gray-300 hover:text-white transition-colors">Sản phẩm</Link></li>
              <li><Link href="/happy-market" className="text-gray-300 hover:text-white transition-colors">Happy Market</Link></li>
              <li><Link href="/lien-he" className="text-gray-300 hover:text-white transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm leading-relaxed">42 Đường 95, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, TPHCM, Việt Nam</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                truongsach@convoi.com.vn
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0931 116 853
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 DOANH NGHIỆP XÃ HỘI CON VOI. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/lien-he" className="text-gray-300 hover:text-white text-sm transition-colors">
                Liên hệ
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                Về chúng tôi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 