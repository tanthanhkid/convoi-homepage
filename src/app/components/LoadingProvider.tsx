'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const startLoading = () => {
    setIsNavigating(true);
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setIsNavigating(false);
  };

  // Auto handle route changes với thời gian tối ưu
  useEffect(() => {
    // Chỉ hiện loading nếu đang navigate
    if (isNavigating) {
      const timer = setTimeout(() => {
        stopLoading();
      }, 100); // Giảm từ 300ms xuống 100ms cho trải nghiệm nhanh hơn

      return () => clearTimeout(timer);
    } else {
      // Tự động dừng loading khi route đã thay đổi
      stopLoading();
    }
  }, [pathname, isNavigating]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, startLoading, stopLoading }}>
      {children}
      {isLoading && <LoadingScreen />}
    </LoadingContext.Provider>
  );
}

// Loading Screen Component - tối ưu hóa
function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Logo đơn giản hơn */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        {/* Text đơn giản */}
        <h3 className="text-lg font-semibold text-green-700 mb-2">Convoi</h3>
        
        {/* Spinner đơn giản và nhanh */}
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
} 