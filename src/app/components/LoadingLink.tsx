'use client';

import Link from 'next/link';
import { useLoading } from './LoadingProvider';
import { usePathname } from 'next/navigation';
import { ReactNode, MouseEvent } from 'react';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function LoadingLink({ href, children, className, onClick }: LoadingLinkProps) {
  const { startLoading } = useLoading();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Only trigger loading for internal navigation and if navigating to different page
    if ((href.startsWith('/') || href.startsWith('#')) && href !== pathname) {
      startLoading();
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