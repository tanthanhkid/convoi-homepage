'use client';

import { useLoading } from './LoadingProvider';
import { ReactNode, MouseEvent, useState } from 'react';

interface LoadingButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function LoadingButton({ 
  children, 
  className, 
  onClick, 
  type = 'button',
  disabled = false 
}: LoadingButtonProps) {
  const { startLoading, stopLoading } = useLoading();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      try {
        setIsProcessing(true);
        startLoading();
        
        const result = onClick(e);
        if (result instanceof Promise) {
          await result;
        }
      } catch (error) {
        console.error('Button click error:', error);
      } finally {
        setIsProcessing(false);
        stopLoading();
      }
    }
  };

  return (
    <button
      type={type}
      className={`${className} ${(disabled || isProcessing) ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleClick}
      disabled={disabled || isProcessing}
    >
      {isProcessing ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Đang xử lý...
        </div>
      ) : (
        children
      )}
    </button>
  );
} 