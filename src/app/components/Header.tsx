'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import LoadingLink from './LoadingLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const aboutDropdownItems = [
    { name: 'Về Con Voi', href: '/about' },
    { name: 'Đội ngũ', href: '/doi-ngu' },
    { name: 'Tầm nhìn & Sứ mệnh', href: '/tam-nhin-su-menh' },
  ];

  const navigation = [
    { name: 'Trang chủ', href: '/' },
    { 
      name: 'Về chúng tôi', 
      hasDropdown: true,
      dropdownItems: aboutDropdownItems
    },
    { name: 'Chương trình Trường Sạch', href: '/truong-sach' },
    { name: 'Happy Market', href: '/happy-market' },
    { name: 'Liên hệ', href: '/lien-he' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LoadingLink href="/" className="flex items-center">
              <Image
                src="/favicon.png"
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
                <div key={item.name} className="relative" ref={item.hasDropdown ? dropdownRef : undefined}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isAboutDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <LoadingLink
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                              onClick={() => setIsAboutDropdownOpen(false)}
                            >
                              {dropdownItem.name}
                            </LoadingLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <LoadingLink
                      href={item.href || '#'}
                      className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </LoadingLink>
                  )}
                </div>
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
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="text-gray-700 hover:text-green-700 w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <svg 
                          className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isAboutDropdownOpen && (
                        <div className="pl-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <LoadingLink
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="text-gray-600 hover:text-green-700 block px-3 py-2 rounded-md text-sm font-medium"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsAboutDropdownOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </LoadingLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <LoadingLink
                      href={item.href || '#'}
                      className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </LoadingLink>
                  )}
                </div>
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