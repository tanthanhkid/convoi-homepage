import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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

    // Tạo thư mục posts nếu chưa tồn tại
    const postsDir = join(process.cwd(), 'public', 'posts');
    await mkdir(postsDir, { recursive: true });

    let processedContent = '';
    let metadata: any = {};
    let slug = '';

    if (fileExtension === 'html') {
      // Xử lý file HTML
      processedContent = content;
      
      // Tạo slug từ tên file
      slug = file.name.replace(/\.html$/, '').toLowerCase()
        .replace(/[^a-z0-9\-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
        
      // Tạo metadata cơ bản
      metadata = {
        title: file.name.replace(/\.html$/, ''),
        date: new Date().toISOString(),
        type: 'html'
      };
    } else {
      // Xử lý file Markdown
      const { data, content: markdownContent } = matter(content);
      
      // Chuyển đổi Markdown sang HTML
      const processedMarkdown = await remark()
        .use(html)
        .process(markdownContent);
      
      processedContent = processedMarkdown.toString();
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
    }

    // Lưu file JSON chứa metadata và content
    const postData = {
      ...metadata,
      slug,
      content: processedContent,
      originalFilename: file.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const fileName = `${slug}.json`;
    const filePath = join(postsDir, fileName);
    
    await writeFile(filePath, JSON.stringify(postData, null, 2));

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
    const postsDir = join(process.cwd(), 'public', 'posts');
    
    try {
      const files = await readdir(postsDir);
      const posts = [];
      
      for (const file of files) {
        if (file.endsWith('.json')) {
          const filePath = join(postsDir, file);
          const content = await readFile(filePath, 'utf-8');
          const post = JSON.parse(content);
          
          // Chỉ trả về metadata, không trả về content đầy đủ
          posts.push({
            slug: post.slug,
            title: post.title || 'Không có tiêu đề',
            date: post.date,
            type: post.type,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt
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