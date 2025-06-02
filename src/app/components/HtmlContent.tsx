'use client';

import { useEffect, useState } from 'react';

interface HtmlContentProps {
  content: string;
}

export default function HtmlContent({ content }: HtmlContentProps) {
  const [htmlContent, setHtmlContent] = useState<string>('');
  
  useEffect(() => {
    // Set content on client side to avoid hydration mismatch
    setHtmlContent(content);
  }, [content]);

  if (!htmlContent) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    );
  }

  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
} 