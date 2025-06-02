'use client';

import { useState } from 'react';
import Image from 'next/image';
import LoadingLink from './LoadingLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Về Con Voi', href: '/about' },
    { name: 'Chương trình Trường Sạch', href: '/truong-sach' },
    // { name: 'Sản phẩm', href: '/san-pham' },
    { name: 'Happy Market', href: '/happy-market' },
    { name: 'Blog', href: '/blog' },
    { name: 'Liên hệ', href: '/lien-he' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LoadingLink href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Convoi Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-green-700">CON VOI</span>
            </LoadingLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <LoadingLink
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </LoadingLink>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <LoadingLink href="/truong-sach" className="btn-primary">
              Tham gia ngay
            </LoadingLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <LoadingLink
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </LoadingLink>
              ))}
              <LoadingLink href="/truong-sach" className="btn-primary w-full text-center block mt-4">
                Tham gia ngay
              </LoadingLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 