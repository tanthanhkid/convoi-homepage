import { NextRequest, NextResponse } from 'next/server';
import { readFile, unlink } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const postsDir = join(process.cwd(), 'content', 'posts');
    const filePath = join(postsDir, `${slug}.json`);
    
    const content = await readFile(filePath, 'utf-8');
    const post = JSON.parse(content);
    
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
    const filePath = join(postsDir, `${slug}.json`);
    
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