import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  type: string;
  content: string;
  originalFilename: string;
  createdAt: string;
  updatedAt: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/posts/${slug}`,
      { 
        cache: 'no-store' // Để có dữ liệu mới nhất
      }
    );
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error('Lỗi khi lấy bài viết:', error);
    return null;
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link 
            href="/admin/posts"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(post.createdAt)}
            </span>
            
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              post.type === 'html' 
                ? 'bg-orange-100 text-orange-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {post.type.toUpperCase()}
            </span>
            
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {post.originalFilename}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
        
        {/* Metadata Footer */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Thông tin bài viết
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Slug:</span>
              <code className="ml-2 bg-white px-2 py-1 rounded">{post.slug}</code>
            </div>
            <div>
              <span className="font-medium text-gray-700">Loại file:</span>
              <span className="ml-2">{post.type.toUpperCase()}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">File gốc:</span>
              <span className="ml-2">{post.originalFilename}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Cập nhật lần cuối:</span>
              <span className="ml-2">{formatDate(post.updatedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata cho SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Bài viết không tìm thấy',
    };
  }
  
  return {
    title: post.title,
    description: `Bài viết ${post.title} - Được tải lên từ file ${post.originalFilename}`,
  };
} 