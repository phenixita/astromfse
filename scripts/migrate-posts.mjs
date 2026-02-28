/**
 * Migrates posts from posts/archive/IT/ format to Astro content collections.
 * 
 * Source format: markdown with JSON metadata in HTML comment at bottom:
 *   <!-- { "title": "...", "slug": "...", "plannedDate": "...", "categories": [...] } -->
 * 
 * Target format: markdown with YAML frontmatter at top:
 *   ---
 *   title: "..."
 *   date: "..."
 *   slug: "..."
 *   categories: [...]
 *   ---
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'posts', 'archive', 'IT');
const TARGET_DIR = path.join(ROOT, 'src', 'content', 'blog');

// Ensure target directory exists
fs.mkdirSync(TARGET_DIR, { recursive: true });

const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));
let migrated = 0;
let skipped = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf-8');
  
  // Extract JSON metadata from HTML comment
  const metaMatch = content.match(/<!--\s*\n?\s*(\{[\s\S]*?\})\s*\n?\s*-->/);
  
  let title = '';
  let date = '';
  let slug = '';
  let categories = [];

  if (metaMatch) {
    try {
      const meta = JSON.parse(metaMatch[1]);
      title = meta.title || '';
      slug = meta.slug || '';
      categories = meta.categories || [];
      
      // Parse date from plannedDate or filename
      if (meta.plannedDate) {
        const d = new Date(meta.plannedDate);
        date = d.toISOString().split('T')[0];
      }
    } catch (e) {
      // Fallback: parse from filename
    }
  }

  // Fallback: extract date from filename (format: YYYYMMDD-Title.md)
  if (!date) {
    const dateMatch = file.match(/^(\d{4})(\d{2})(\d{2})/);
    if (dateMatch) {
      date = `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`;
    } else {
      date = '2025-01-01';
    }
  }

  // Fallback: generate title from filename
  if (!title) {
    const nameMatch = file.match(/^\d{8}-(.+)\.md$/);
    if (nameMatch) {
      // Convert camelCase/PascalCase to spaced words
      title = nameMatch[1]
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
    } else {
      title = file.replace('.md', '');
    }
  }

  // Fallback: generate slug from title or filename
  if (!slug) {
    slug = file.replace('.md', '').toLowerCase()
      .replace(/^\d{8}-/, '')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  // Remove the HTML comment metadata from content
  let cleanContent = content.replace(/<!--\s*\n?\s*\{[\s\S]*?\}\s*\n?\s*-->\s*$/, '').trim();
  
  // Remove the "Sharing is caring" boilerplate from content
  cleanContent = cleanContent.replace(/## Sharing is caring[\s\S]*$/, '').trim();

  // Build the new file with Astro frontmatter
  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `date: "${date}"`,
    `slug: "${slug}"`,
    categories.length > 0 ? `categories: [${categories.join(', ')}]` : null,
    '---',
  ].filter(Boolean).join('\n');

  const newContent = `${frontmatter}\n\n${cleanContent}\n`;

  // Sanitize slug for filesystem: remove accented chars, question marks, etc.
  const safeSlug = slug
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // strip accents
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  const targetFile = `${safeSlug}.md`;
  fs.writeFileSync(path.join(TARGET_DIR, targetFile), newContent, 'utf-8');
  migrated++;
}

console.log(`✅ Migration complete: ${migrated} posts migrated, ${skipped} skipped`);
console.log(`📁 Output: ${TARGET_DIR}`);
