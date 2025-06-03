'use client';

import { useEffect } from 'react';
import { useLoading } from '../components/LoadingProvider';

export function usePageLoad() {
  const { stopLoading } = useLoading();

  useEffect(() => {
    // Đảm bảo tắt loading khi component này mount (trang đã load xong)
    const handlePageLoad = () => {
      // Sử dụng requestIdleCallback để đợi browser idle
      if (typeof window !== 'undefined') {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => {
            stopLoading();
          });
        } else {
          // Fallback cho browsers cũ
          setTimeout(() => {
            stopLoading();
          }, 100);
        }
      }
    };

    // Gọi ngay khi component mount
    handlePageLoad();

    // Cleanup không cần thiết vì chỉ gọi một lần
  }, [stopLoading]);
} 