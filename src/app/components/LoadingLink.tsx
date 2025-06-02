'use client';

import Link from 'next/link';
import { useLoading } from './LoadingProvider';
import { usePathname } from 'next/navigation';
import { ReactNode, MouseEvent, useRef } from 'react';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function LoadingLink({ href, children, className, onClick }: LoadingLinkProps) {
  const { startLoading } = useLoading();
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Only trigger loading for internal navigation and if navigating to different page
    if ((href.startsWith('/') || href.startsWith('#')) && href !== pathname) {
      // Delay loading để tránh flash cho navigation nhanh
      timeoutRef.current = setTimeout(() => {
        startLoading();
      }, 50); // 50ms delay
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
} 