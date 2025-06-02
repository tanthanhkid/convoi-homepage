'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

interface PostListProps {
  refreshTrigger?: number;
}

export default function PostList({ refreshTrigger }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/posts/upload');
      const data = await response.json();
      
      if (response.ok) {
        setPosts(data.posts);
        setError('');
      } else {
        setError(data.error || 'Có lỗi xảy ra khi tải danh sách bài viết');
      }
    } catch (error) {
      console.error('Lỗi khi tải bài viết:', error);
      setError('Có lỗi xảy ra khi tải danh sách bài viết');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [refreshTrigger]);

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa bài viết "${title}"?`)) {
      return;
    }

    try {
      setDeletingSlug(slug);
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (response.ok) {
        setPosts(posts.filter(post => post.slug !== slug));
      } else {
        alert(result.error || 'Có lỗi xảy ra khi xóa bài viết');
      }
    } catch (error) {
      console.error('Lỗi khi xóa bài viết:', error);
      alert('Có lỗi xảy ra khi xóa bài viết');
    } finally {
      setDeletingSlug(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải danh sách bài viết...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Danh sách bài viết ({posts.length})
        </h2>
        <button
          onClick={fetchPosts}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Làm mới
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-xl text-gray-600 mb-2">Chưa có bài viết nào</p>
          <p className="text-gray-500">Hãy tải lên bài viết đầu tiên của bạn!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(post.createdAt)}
                    </span>
                    
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.type === 'html' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {post.type.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    Slug: <code className="bg-gray-100 px-1 rounded">{post.slug}</code>
                  </p>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                  >
                    Xem
                  </Link>
                  
                  <button
                    onClick={() => handleDelete(post.slug, post.title)}
                    disabled={deletingSlug === post.slug}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deletingSlug === post.slug ? (
                      <div className="flex items-center">
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                        Xóa
                      </div>
                    ) : (
                      'Xóa'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 