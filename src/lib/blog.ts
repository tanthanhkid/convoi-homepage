import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  author?: string;
  tags?: string[];
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
}

// Hàm lấy tất cả slug của các bài viết
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Hàm lấy metadata của tất cả bài viết (không bao gồm content)
export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, false))
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

// Hàm lấy bài viết theo slug
export function getPostBySlug(slug: string, includeContent: true): BlogPost | null;
export function getPostBySlug(slug: string, includeContent: false): BlogPostMetadata | null;
export function getPostBySlug(slug: string, includeContent: boolean = true): BlogPost | BlogPostMetadata | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post = {
      slug,
      title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt || '',
      author: data.author || '',
      tags: data.tags || [],
      ...(includeContent && { content })
    };

    return post as BlogPost | BlogPostMetadata;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Hàm chuyển đổi markdown thành HTML
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Hàm tìm kiếm bài viết
export function searchPosts(query: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  const lowerQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt?.toLowerCase().includes(lowerQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
} 