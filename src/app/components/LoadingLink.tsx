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
    // Chỉ trigger loading cho internal navigation và khi chuyển đến trang khác
    const isInternalLink = href.startsWith('/') && !href.startsWith('//');
    const isDifferentPage = href !== pathname && !href.startsWith('#');
    
    if (isInternalLink && isDifferentPage) {
      // Trigger loading ngay lập tức
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