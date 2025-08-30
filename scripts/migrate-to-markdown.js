#!/usr/bin/env node

/**
 * Migration script to convert content from docs.ts to markdown files
 * 
 * Usage: node scripts/migrate-to-markdown.js
 */

const fs = require('fs');
const path = require('path');

// Read the docs.ts file
const docsPath = path.join(process.cwd(), 'app/lib/docs.ts');
const docsContent = fs.readFileSync(docsPath, 'utf8');

// Extract docContent array
const docContentMatch = docsContent.match(/export const docContent: DocContent\[\] = (\[[\s\S]*?\]);/);
if (!docContentMatch) {
  console.error('Could not find docContent array in docs.ts');
  process.exit(1);
}

// Parse the array (this is a simplified parser)
const docContentStr = docContentMatch[1];
const docs = [];

// Simple regex-based parsing (in production, you'd want a proper parser)
const docMatches = docContentStr.match(/\{[^}]+\}/g);
if (docMatches) {
  docMatches.forEach(match => {
    // Extract basic info
    const titleMatch = match.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const contentMatch = match.match(/content:\s*['"`]([^'"`]+)['"`]/);
    const slugMatch = match.match(/slug:\s*['"`]([^'"`]+)['"`]/);
    const sectionIdMatch = match.match(/sectionId:\s*['"`]([^'"`]+)['"`]/);
    
    if (titleMatch && slugMatch && sectionIdMatch) {
      docs.push({
        title: titleMatch[1],
        content: contentMatch ? contentMatch[1] : '',
        slug: slugMatch[1],
        sectionId: sectionIdMatch[1]
      });
    }
  });
}

console.log(`Found ${docs.length} documents to migrate`);

// Create markdown files
docs.forEach(doc => {
  const sectionDir = path.join(process.cwd(), 'docs', doc.sectionId);
  
  // Create section directory if it doesn't exist
  if (!fs.existsSync(sectionDir)) {
    fs.mkdirSync(sectionDir, { recursive: true });
  }
  
  const markdownPath = path.join(sectionDir, `${doc.slug}.md`);
  
  // Create frontmatter
  const frontmatter = `---
title: "${doc.title}"
description: "Auto-migrated from docs.ts"
sectionId: "${doc.sectionId}"
slug: "${doc.slug}"
tags: ["migrated"]
difficulty: "beginner"
estimatedTime: "10 minutes"
lastUpdated: "${new Date().toISOString().split('T')[0]}"
order: 1
---

`;
  
  // Write markdown file
  const markdownContent = frontmatter + doc.content;
  fs.writeFileSync(markdownPath, markdownContent);
  
  console.log(`Created: ${markdownPath}`);
});

console.log('\nMigration complete!');
console.log('\nNext steps:');
console.log('1. Review the generated markdown files');
console.log('2. Update frontmatter with proper metadata');
console.log('3. Fix any formatting issues in the content');
console.log('4. Update section definitions in markdown-docs.ts');
console.log('5. Test the documentation system');
