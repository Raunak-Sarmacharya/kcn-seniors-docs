import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

// Calculate reading time based on content length
function calculateReadingTime(content: string): string {
  // Average reading speed: 200-250 words per minute
  // Using 225 words per minute as a reasonable average
  const wordsPerMinute = 225;
  
  // Count words (split by whitespace and filter out empty strings)
  const words = content.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Calculate minutes
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  // Return formatted string
  if (minutes < 1) {
    return 'Less than 1 minute';
  } else if (minutes === 1) {
    return '1 minute';
  } else {
    return `${minutes} minutes`;
  }
}

export interface DocContent {
  id: string;
  title: string;
  content: string;
  htmlContent: string;
  sectionId: string;
  slug: string;
  tags: string[];
  lastUpdated: Date;
  videoUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  order: number;
}

const docsDirectory = join(process.cwd(), 'docs');

// Get all markdown files recursively
function getAllMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  
  if (!existsSync(dir)) {
    return files;
  }

  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Parse markdown file and convert to HTML
async function parseMarkdownFile(filePath: string): Promise<DocContent | null> {
  try {
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .use(remarkGfm)
      .process(content);
    
    const htmlContent = processedContent.toString();

    return {
      id: data.slug || filePath.split('/').pop()?.replace('.md', '') || '',
      title: data.title || 'Untitled',
      content: content,
      htmlContent: htmlContent,
      sectionId: data.sectionId || '',
      slug: data.slug || filePath.split('/').pop()?.replace('.md', '') || '',
      tags: data.tags || [],
      lastUpdated: new Date(data.lastUpdated || Date.now()),
      videoUrl: data.videoUrl,
      difficulty: data.difficulty || 'beginner',
      estimatedTime: calculateReadingTime(content),
      prerequisites: data.prerequisites,
      order: data.order || 1,
    };
  } catch (error) {
    console.error(`Error parsing markdown file ${filePath}:`, error);
    return null;
  }
}

// Get all markdown documentation content
async function getAllMarkdownDocs(): Promise<DocContent[]> {
  const markdownFiles = getAllMarkdownFiles(docsDirectory);
  const docs: DocContent[] = [];

  for (const filePath of markdownFiles) {
    const doc = await parseMarkdownFile(filePath);
    if (doc) {
      docs.push(doc);
    }
  }

  // Sort by section order and then by document order
  docs.sort((a, b) => {
    if (a.sectionId !== b.sectionId) {
      return a.sectionId.localeCompare(b.sectionId);
    }
    return a.order - b.order;
  });

  return docs;
}

export async function GET(request: NextRequest) {
  try {
    // Safely get search params without using request.url directly
    let searchParams: URLSearchParams;
    try {
      searchParams = request.nextUrl.searchParams;
    } catch (error) {
      // Fallback for static generation
      return NextResponse.json(
        { error: 'Documentation not available during static generation' },
        { status: 400 }
      );
    }

    const slug = searchParams.get('slug');
    const sectionId = searchParams.get('sectionId');

    if (slug) {
      // Get specific document
      const docs = await getAllMarkdownDocs();
      const doc = docs.find(d => d.slug === slug);
      
      if (!doc) {
        return NextResponse.json({ error: 'Document not found' }, { status: 404 });
      }
      
      return NextResponse.json(doc);
    }

    if (sectionId) {
      // Get documents by section
      const docs = await getAllMarkdownDocs();
      const sectionDocs = docs.filter(d => d.sectionId === sectionId);
      
      return NextResponse.json(sectionDocs);
    }

    // Get all documents
    const docs = await getAllMarkdownDocs();
    return NextResponse.json(docs);
  } catch (error) {
    console.error('Error loading documentation:', error);
    return NextResponse.json(
      { error: 'Failed to load documentation' },
      { status: 500 }
    );
  }
}
