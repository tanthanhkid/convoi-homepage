'use client';

import { useState, useRef, DragEvent } from 'react';

interface Post {
  slug: string;
  title: string;
  date: string;
  type: string;
}

interface PostUploaderProps {
  onUploadSuccess?: (post: Post) => void;
}

export default function PostUploader({ onUploadSuccess }: PostUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const allowedTypes = ['text/html', 'text/markdown', 'text/plain'];
    const allowedExtensions = ['.html', '.md', '.markdown'];
    
    const hasValidExtension = allowedExtensions.some(ext => 
      file.name.toLowerCase().endsWith(ext)
    );
    
    if (!hasValidExtension) {
      setUploadMessage('Chỉ chấp nhận file HTML (.html) hoặc Markdown (.md, .markdown)');
      return;
    }
    
    setSelectedFile(file);
    setUploadMessage('');
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Vui lòng chọn file để tải lên');
      return;
    }

    setIsUploading(true);
    setUploadMessage('');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/posts/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setUploadMessage('Bài viết đã được tải lên thành công!');
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        if (onUploadSuccess) {
          onUploadSuccess(result.post);
        }
      } else {
        setUploadMessage(result.error || 'Có lỗi xảy ra khi tải lên');
      }
    } catch (error) {
      console.error('Lỗi upload:', error);
      setUploadMessage('Có lỗi xảy ra khi tải lên bài viết');
    } finally {
      setIsUploading(false);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setUploadMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Tải lên bài viết
      </h2>
      
      <div
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200
          ${isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center space-y-4">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          
          <div>
            <p className="text-lg text-gray-600 mb-2">
              Kéo thả file HTML hoặc Markdown vào đây
            </p>
            <p className="text-sm text-gray-500 mb-4">
              hoặc
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Chọn file
            </button>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept=".html,.md,.markdown"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      </div>

      {selectedFile && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">File đã chọn:</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <button
              onClick={handleClearFile}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {uploadMessage && (
        <div className={`mt-4 p-3 rounded-md ${
          uploadMessage.includes('thành công') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {uploadMessage}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          className={`
            px-6 py-3 rounded-md font-medium transition-colors
            ${selectedFile && !isUploading
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isUploading ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Đang tải lên...</span>
            </div>
          ) : (
            'Tải lên bài viết'
          )}
        </button>
      </div>
      
      <div className="mt-6 text-sm text-gray-600">
        <p className="font-semibold mb-2">Hướng dẫn:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Chấp nhận file HTML (.html) và Markdown (.md, .markdown)</li>
          <li>File Markdown có thể chứa front matter với metadata</li>
          <li>Tiêu đề bài viết sẽ được tự động tạo từ tên file hoặc metadata</li>
          <li>URL bài viết sẽ được tạo tự động từ tiêu đề</li>
        </ul>
      </div>
    </div>
  );
} 