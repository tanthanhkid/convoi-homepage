'use client';

import { useState } from 'react';
import PostUploader from '../../components/PostUploader';
import PostList from '../../components/PostList';

export default function PostsAdminPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'list'>('upload');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadSuccess = () => {
    // Trigger refresh của PostList
    setRefreshTrigger(prev => prev + 1);
    // Chuyển sang tab danh sách để xem bài viết mới
    setActiveTab('list');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Quản lý bài viết
          </h1>
          <p className="text-gray-600 mt-2">
            Tải lên và quản lý các bài viết HTML hoặc Markdown
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('upload')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'upload'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Tải lên bài viết
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('list')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'list'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Danh sách bài viết
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {activeTab === 'upload' && (
            <div className="p-6">
              <PostUploader onUploadSuccess={handleUploadSuccess} />
            </div>
          )}
          
          {activeTab === 'list' && (
            <div className="p-6">
              <PostList refreshTrigger={refreshTrigger} />
            </div>
          )}
        </div>
      </div>

      {/* Quick Help */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            💡 Hướng dẫn sử dụng
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">File Markdown (.md)</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Có thể chứa front matter với metadata</li>
                <li>• Sẽ được chuyển đổi tự động sang HTML</li>
                <li>• Hỗ trợ các cú pháp Markdown tiêu chuẩn</li>
                <li>• Ví dụ metadata: title, date, author, tags</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">File HTML (.html)</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Được hiển thị trực tiếp như HTML</li>
                <li>• Tiêu đề được tạo từ tên file</li>
                <li>• Thích hợp cho nội dung đã được định dạng</li>
                <li>• Có thể chứa CSS và JavaScript inline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 