import { NextRequest, NextResponse } from 'next/server';
import { readFile, unlink } from 'fs/promises';
import { join } from 'path';

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

// Function to extract body content from full HTML document
function extractBodyContent(htmlContent: string): string {
  // Try to extract content between <body> tags
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content: string;
  
  if (bodyMatch) {
    content = bodyMatch[1].trim();
  } else {
    // If no body tags found, check if it's already just content
    const hasHtmlStructure = htmlContent.includes('<!DOCTYPE') || htmlContent.includes('<html');
    if (!hasHtmlStructure) {
      content = htmlContent; // It's already just content
    } else {
      // Fallback: return content after </head> and before </body> or </html>
      const headEndMatch = htmlContent.match(/<\/head>\s*([\s\S]*?)(?:<\/body>|<\/html>)/i);
      if (headEndMatch) {
        content = headEndMatch[1].trim();
      } else {
        // Last resort: return the original content
        content = htmlContent;
      }
    }
  }
  
  // Normalize line endings to prevent hydration mismatch
  return content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const postsDir = join(process.cwd(), 'content', 'posts');
    const filePath = join(postsDir, `${slug}.html`);
    
    const content = await readFile(filePath, 'utf-8');
    
    // Trích xuất metadata từ HTML
    const metadata = extractMetadataFromHTML(content, `${slug}.html`);
    
    // Lấy thời gian tạo file
    const { stat } = require('fs/promises');
    let createdAt = new Date().toISOString();
    let updatedAt = new Date().toISOString();
    
    try {
      const stats = await stat(filePath);
      createdAt = stats.birthtime.toISOString();
      updatedAt = stats.mtime.toISOString();
    } catch (e) {
      // Fallback to current time if can't get file stats
    }
    
    const post = {
      ...metadata,
      content: extractBodyContent(content),
      createdAt,
      updatedAt
    };
    
    return NextResponse.json({ post });
  } catch (error) {
    console.error('Lỗi khi lấy bài viết:', error);
    return NextResponse.json({ 
      error: 'Không tìm thấy bài viết' 
    }, { status: 404 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const postsDir = join(process.cwd(), 'content', 'posts');
    const filePath = join(postsDir, `${slug}.html`);
    
    await unlink(filePath);
    
    return NextResponse.json({ 
      message: 'Bài viết đã được xóa thành công' 
    });
  } catch (error) {
    console.error('Lỗi khi xóa bài viết:', error);
    return NextResponse.json({ 
      error: 'Có lỗi xảy ra khi xóa bài viết' 
    }, { status: 500 });
  }
} 