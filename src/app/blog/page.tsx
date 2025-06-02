import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/posts/upload`,
      { 
        cache: 'no-store' // Để có dữ liệu mới nhất
      }
    );
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Lỗi khi lấy danh sách bài viết:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Về trang chủ
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Khám phá những bài viết và chia sẻ thú vị của chúng tôi
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="w-20 h-20 text-gray-300 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-600 mb-3">
              Chưa có bài viết nào
            </h2>
            <p className="text-gray-500 mb-8">
              Blog sẽ sớm có những bài viết thú vị. Hãy quay lại sau nhé!
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Về trang chủ
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-gray-600">
                Tìm thấy <span className="font-semibold">{posts.length}</span> bài viết
              </p>
            </div>
            
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.type === 'html' 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {post.type.toUpperCase()}
                      </span>
                      
                      <time className="text-sm text-gray-500">
                        {formatDate(post.createdAt)}
                      </time>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Đọc bài viết
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination placeholder - có thể mở rộng sau */}
            {posts.length > 10 && (
              <div className="mt-12 text-center">
                <p className="text-gray-500">
                  Hiển thị tất cả {posts.length} bài viết
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Blog - Convoi',
  description: 'Khám phá những bài viết và chia sẻ thú vị từ Convoi',
}; 