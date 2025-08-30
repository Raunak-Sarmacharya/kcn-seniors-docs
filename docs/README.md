# KCN Seniors Documentation

This directory contains the markdown-based documentation for the KCN Seniors website. The documentation is organized by sections and uses frontmatter for metadata.

## Structure

```
docs/
├── getting-started/
│   └── welcome.md
├── user-management/
│   └── overview.md
├── maintenance-support/
│   └── overview.md
├── troubleshooting/
│   └── common-issues.md
└── README.md
```

## File Format

Each markdown file should include frontmatter at the top with the following metadata:

```yaml
---
title: "Document Title"
description: "Brief description of the content"
sectionId: "section-name"
slug: "file-slug"
tags: ["tag1", "tag2", "tag3"]
difficulty: "beginner|intermediate|advanced"
estimatedTime: "5 minutes"
lastUpdated: "2025-01-15"
order: 1
---
```

## Frontmatter Fields

- **title**: The display title of the document
- **description**: Brief description for search and preview
- **sectionId**: The section this document belongs to (must match section ID in markdown-docs.ts)
- **slug**: URL-friendly identifier for the document
- **tags**: Array of tags for categorization and search
- **difficulty**: Content difficulty level
- **estimatedTime**: Estimated reading time
- **lastUpdated**: Last update date
- **order**: Display order within the section

## Adding New Documentation

1. Create a new markdown file in the appropriate section directory
2. Add proper frontmatter with all required fields
3. Write content using standard markdown syntax
4. Update the section definition in `app/lib/markdown-docs.ts` if needed
5. Test the documentation by visiting the docs page

## Markdown Features

The documentation system supports:

- **Standard Markdown**: Headers, lists, links, images, etc.
- **GitHub Flavored Markdown**: Tables, strikethrough, task lists
- **Code Highlighting**: Syntax highlighting for code blocks
- **Tables**: Responsive tables with proper styling
- **Links**: Internal and external links with proper formatting

## Best Practices

1. **Use Clear Titles**: Make titles descriptive and specific
2. **Organize Content**: Use headers to organize content logically
3. **Include Examples**: Provide practical examples where helpful
4. **Keep Updated**: Regularly update documentation as features change
5. **Use Tags**: Tag content appropriately for better searchability
6. **Test Links**: Ensure all internal links work correctly

## Development

The documentation system automatically:
- Reads markdown files from this directory
- Converts markdown to HTML
- Caches content for performance
- Provides search functionality
- Generates navigation breadcrumbs

## Cache Management

The system caches markdown content for 5 minutes. To clear the cache during development, call:

```typescript
import { clearMarkdownCache } from '@/app/lib/markdown-docs';
clearMarkdownCache();
```
