'use client';

import Link from 'next/link';
import { useLoading } from './LoadingProvider';
import { ReactNode, MouseEvent } from 'react';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function LoadingLink({ href, children, className, onClick }: LoadingLinkProps) {
  const { startLoading } = useLoading();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Only trigger loading for internal navigation
    if (href.startsWith('/') || href.startsWith('#')) {
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