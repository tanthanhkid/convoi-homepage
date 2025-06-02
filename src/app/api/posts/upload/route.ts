import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Function to extract metadata from HTML
function extractMetadataFromHTML(content: string, filename: string) {
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descriptionMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  
  const title = titleMatch ? titleMatch[1].trim() : filename.replace(/\.html$/, '');
  const description = descriptionMatch ? descriptionMatch[1].trim() : '';
  
  // Create slug from filename
  const slug = filename.replace(/\.html$/, '').toLowerCase()
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return {
    title,
    description,
    slug,
    type: 'html',
    date: new Date().toISOString()
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'Không có file được tải lên' }, { status: 400 });
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    if (!['html', 'md', 'markdown'].includes(fileExtension || '')) {
      return NextResponse.json({ 
        error: 'Chỉ chấp nhận file HTML hoặc Markdown (.html, .md, .markdown)' 
      }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const content = buffer.toString('utf-8');

    // Tạo thư mục content/posts để lưu trữ vĩnh viễn
    const postsDir = join(process.cwd(), 'content', 'posts');
    await mkdir(postsDir, { recursive: true });

    let slug = '';
    let metadata: any = {};

    if (fileExtension === 'html') {
      // Xử lý file HTML - lưu trực tiếp file HTML
      metadata = extractMetadataFromHTML(content, file.name);
      slug = metadata.slug;
      
      const fileName = `${slug}.html`;
      const filePath = join(postsDir, fileName);
      
      // Lưu file HTML trực tiếp
      await writeFile(filePath, content);
    } else {
      // Xử lý file Markdown - chuyển sang HTML và lưu
      const { data, content: markdownContent } = matter(content);
      
      // Chuyển đổi Markdown sang HTML
      const processedMarkdown = await remark()
        .use(html)
        .process(markdownContent);
      
      const htmlContent = processedMarkdown.toString();
      
      metadata = {
        ...data,
        date: data.date || new Date().toISOString(),
        type: 'markdown'
      };
      
      // Tạo slug từ title hoặc tên file
      slug = (data.slug || data.title || file.name.replace(/\.(md|markdown)$/, ''))
        .toLowerCase()
        .replace(/[^a-z0-9\-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      // Tạo HTML document hoàn chỉnh từ Markdown
      const fullHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${metadata.title || 'Không có tiêu đề'}</title>
    ${metadata.description ? `<meta name="description" content="${metadata.description}">` : ''}
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
            color: #333; 
        }
        h1, h2, h3, h4, h5, h6 { color: #2d3748; margin-top: 1.5em; }
        h1 { border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5em; }
        pre { background: #f7fafc; padding: 1em; border-radius: 4px; overflow-x: auto; }
        code { background: #edf2f7; padding: 0.2em 0.4em; border-radius: 3px; }
        blockquote { border-left: 4px solid #cbd5e0; margin: 1em 0; padding-left: 1em; color: #4a5568; }
        img { max-width: 100%; height: auto; }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>`;

      const fileName = `${slug}.html`;
      const filePath = join(postsDir, fileName);
      
      // Lưu file HTML
      await writeFile(filePath, fullHTML);
    }

    return NextResponse.json({ 
      message: 'Bài viết đã được tải lên thành công',
      post: {
        slug,
        title: metadata.title || 'Không có tiêu đề',
        date: metadata.date,
        type: metadata.type
      }
    });
    
  } catch (error) {
    console.error('Lỗi khi upload bài viết:', error);
    return NextResponse.json({ 
      error: 'Có lỗi xảy ra khi tải lên bài viết' 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { readdir, readFile } = require('fs/promises');
    const postsDir = join(process.cwd(), 'content', 'posts');
    
    try {
      const files = await readdir(postsDir);
      const posts = [];
      
      for (const file of files) {
        if (file.endsWith('.html')) {
          const filePath = join(postsDir, file);
          const content = await readFile(filePath, 'utf-8');
          
          // Trích xuất metadata từ HTML
          const metadata = extractMetadataFromHTML(content, file);
          
          // Lấy thời gian tạo file (hoặc dùng thời gian hiện tại)
          const { stat } = require('fs/promises');
          let createdAt = new Date().toISOString();
          try {
            const stats = await stat(filePath);
            createdAt = stats.birthtime.toISOString();
          } catch (e) {
            // Fallback to current time if can't get file stats
          }
          
          posts.push({
            slug: metadata.slug,
            title: metadata.title,
            description: metadata.description,
            date: metadata.date,
            type: metadata.type,
            createdAt,
            updatedAt: createdAt
          });
        }
      }
      
      // Sắp xếp theo ngày tạo mới nhất
      posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      
      return NextResponse.json({ posts });
    } catch (error) {
      // Nếu thư mục không tồn tại, trả về danh sách rỗng
      return NextResponse.json({ posts: [] });
    }
  } catch (error) {
    console.error('Lỗi khi lấy danh sách bài viết:', error);
    return NextResponse.json({ 
      error: 'Có lỗi xảy ra khi lấy danh sách bài viết' 
    }, { status: 500 });
  }
} 