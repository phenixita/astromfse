---
name: content-migration
description: 'Migrate content from external formats to Astro content collection. Use for: converting markdown from Jekyll/Hugo/WordPress, importing blog posts, transforming CMS exports, batch content conversion, fixing metadata formats.'
argument-hint: 'Source format and location (e.g., "Jekyll posts in posts/archive/", "WordPress XML export")'
---

# Content Migration

## When to Use
- Convert existing content (markdown, CMS export, HTML) to Astro format
- Migrate blog posts from Jekyll, Hugo, WordPress, Notion
- Import posts from `posts/archive/` to `src/content/blog/`
- Batch convert metadata formats
- Fix encoding or formatting issues in existing posts

## General Approach

### 1. Analyze Source Format

Before writing any code, read 3-5 sample files to understand:
- Where is the metadata? (YAML frontmatter, JSON in comments, filename, database?)
- What fields exist? (title, date, slug, categories, tags, author?)
- What date format is used?
- Is there boilerplate to strip? (footer, sharing links, ads?)
- What encoding? (UTF-8, special chars, accented characters?)

### 2. Write Migration Script

Create migration script at [scripts/migrate-posts.mjs](../../../scripts/migrate-posts.mjs).

Key principles:
- **Always create a new script**, don't modify existing content in place
- **Multiple fallback strategies** for each field (metadata → filename → generated)
- **Sanitize filenames**: strip accents (NFD), remove special chars, lowercase
- **Strip boilerplate** from body content
- **Idempotent**: safe to run multiple times (overwrites target)

### 3. Template Structure

```javascript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = path.join(__dirname, '..', 'posts/archive/IT');
const TARGET_DIR = path.join(__dirname, '..', 'src', 'content', 'blog');

fs.mkdirSync(TARGET_DIR, { recursive: true });

const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));

for (const file of files) {
  const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf-8');
  
  // 1. Extract metadata (adapt to source format)
  let title, date, slug, categories;
  
  // 2. Fallback: parse from filename
  // e.g. "20250304-LaPrimaViaDiDevOps.md" → date: 2025-03-04
  const match = file.match(/^(\d{8})-(.+)\.md$/);
  if (match) {
    const [_, dateStr, titleStr] = match;
    date = `${dateStr.slice(0,4)}-${dateStr.slice(4,6)}-${dateStr.slice(6,8)}`;
    title = titleStr.replace(/([A-Z])/g, ' $1').trim();
  }
  
  // 3. Clean body content (strip metadata comments, boilerplate)
  let cleanBody = content.replace(/^---[\s\S]*?---\n/, ''); // remove existing frontmatter
  cleanBody = cleanBody.replace(/<!--[\s\S]*?-->/g, ''); // remove HTML comments
  
  // 4. Sanitize slug for filesystem
  const safeSlug = (slug || titleStr)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // special chars to hyphens
    .replace(/^-|-$/g, ''); // trim hyphens
  
  // 5. Write with Astro frontmatter
  const output = `---
title: "${title}"
date: "${date}"
slug: "${safeSlug}"
categories: []
---

${cleanBody.trim()}
`;
  
  fs.writeFileSync(path.join(TARGET_DIR, `${safeSlug}.md`), output, 'utf-8');
  console.log(`✓ Migrated: ${file} → ${safeSlug}.md`);
}

console.log(`\n✅ Migration complete! Migrated ${files.length} posts.`);
```

### 4. Common Source Formats

| Source | Metadata Location | Date Source |
|--------|------------------|-------------|
| Jekyll/Hugo | YAML frontmatter (keep as-is, adjust fields) | frontmatter `date:` |
| WordPress export | XML/HTML, titles in `<title>`, dates in `<pubDate>` | XML field |
| Custom markdown | JSON in HTML comment `<!-- {...} -->` | JSON field or filename |
| Plain files | Filename convention `YYYYMMDD-Title.md` | Filename prefix |
| Notion export | Markdown with properties block | Properties or filename |

### 5. Post-Migration Verification

```bash
# Run migration
node scripts/migrate-posts.mjs

# Count results
ls src/content/blog/*.md | wc -l

# Build to validate all frontmatter
npm run build

# Check for encoding issues
grep -r "â" src/content/blog/  # common UTF-8 mojibake
```

## Astro Content Collection Schema

Target format must match [src/content.config.ts](../../../src/content.config.ts):

```typescript
{
  title: z.string(),          // Required
  date: z.string(),           // Required, format: "YYYY-MM-DD"
  slug: z.string().optional(),
  categories: z.array(z.number()).optional(),
  draft: z.boolean().optional().default(false),
}
```

## Procedure

1. **Analyze**: Read 3-5 sample source files to understand format
2. **Create script**: Write migration script at `scripts/migrate-posts.mjs`
3. **Test**: Run on 1-2 files first, verify output in `src/content/blog/`
4. **Validate**: Run `npm run build` to check frontmatter schema
5. **Full migration**: Run on all files once confident
6. **Cleanup**: Remove source files or move to archive
7. **Commit**: Git commit the new posts

## Notes

- The existing [scripts/migrate-posts.mjs](../../../scripts/migrate-posts.mjs) can be used as reference
- For posts in `posts/archive/IT/` with `YYYYMMDD-Title.md` format, parse date from filename
- Strip Italian boilerplate like "Sharing is caring" — it's in the layout CTA
- Always use `draft: false` for published posts (or omit, it's the default)
