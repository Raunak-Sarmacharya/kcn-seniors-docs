import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface BuildTimeDocContent {
  id: string;
  title: string;
  content: string;
  htmlContent: string;
  sectionId: string;
  slug: string;
  tags: string[];
  lastUpdated: string;
  videoUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  order: number;
}

// Calculate reading time based on content length
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  if (minutes < 1) {
    return 'Less than 1 minute';
  } else if (minutes === 1) {
    return '1 minute';
  } else {
    return `${minutes} minutes`;
  }
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

// Parse markdown file and convert to HTML at build time
async function parseMarkdownFile(filePath: string): Promise<BuildTimeDocContent | null> {
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
      lastUpdated: data.lastUpdated || new Date().toISOString(),
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

// Get all markdown documentation content at build time
export async function getAllMarkdownDocsForBuild(): Promise<BuildTimeDocContent[]> {
  const markdownFiles = getAllMarkdownFiles(docsDirectory);
  const docs: BuildTimeDocContent[] = [];

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

// Get documentation by slug at build time
export async function getMarkdownDocBySlugForBuild(slug: string): Promise<BuildTimeDocContent | null> {
  const docs = await getAllMarkdownDocsForBuild();
  return docs.find(d => d.slug === slug) || null;
}

// Get documentation by section at build time
export async function getMarkdownDocsBySectionForBuild(sectionId: string): Promise<BuildTimeDocContent[]> {
  const docs = await getAllMarkdownDocsForBuild();
  return docs.filter(d => d.sectionId === sectionId);
}
