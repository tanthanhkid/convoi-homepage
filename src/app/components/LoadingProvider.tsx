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
  const [previousPathname, setPreviousPathname] = useState('');
  const pathname = usePathname();

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const startLoading = () => {
    setIsNavigating(true);
    setIsLoading(true);
    setPreviousPathname(pathname);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setIsNavigating(false);
  };

  // Handle route changes - chỉ tắt loading khi DOM đã render xong
  useEffect(() => {
    if (isNavigating && pathname !== previousPathname) {
      // Sử dụng requestIdleCallback hoặc fallback setTimeout để đợi DOM render xong
      const handlePageLoad = () => {
        if (typeof window !== 'undefined') {
          if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
              stopLoading();
            }, { timeout: 1000 });
          } else {
            // Fallback cho browsers không support requestIdleCallback
            setTimeout(() => {
              stopLoading();
            }, 300);
          }
        }
      };

      // Đợi một tick để đảm bảo component mới đã mount
      setTimeout(handlePageLoad, 50);
    } else if (!isNavigating) {
      // Reset nếu không đang navigate
      stopLoading();
    }
  }, [pathname, isNavigating, previousPathname]);

  // Cleanup loading state nếu bị stuck
  useEffect(() => {
    if (isLoading) {
      const maxLoadingTime = setTimeout(() => {
        console.warn('Loading exceeded maximum time, auto-stopping');
        stopLoading();
      }, 5000); // Maximum 5 seconds loading

      return () => clearTimeout(maxLoadingTime);
    }
  }, [isLoading]);

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
        {/* Logo với animation xoay */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto animate-spin">
            <img 
              src="/favicon.png" 
              alt="Convoi" 
              width={80} 
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text đơn giản */}
        {/* <h3 className="text-lg font-semibold text-green-700 mb-2">Convoi</h3> */}
        <p className="text-sm text-gray-600">Đang tải trang...</p>
      </div>
    </div>
  );
} 