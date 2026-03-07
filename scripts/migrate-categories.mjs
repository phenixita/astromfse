import fs from 'node:fs/promises';
import path from 'node:path';

const categoriesById = new Map([
  [40, 'ai'],
  [41, 'cultura'],
  [38, 'daily'],
  [39, 'deploylandia'],
  [37, 'devops'],
  [42, 'kanban'],
  [32, 'my-take-on'],
  [27, 'predictions'],
  [35, 'software-factory'],
  [45, 'sicurezza'],
  [43, 'team'],
  [23, 'testing'],
  [44, 'valore'],
  [28, 'video'],
]);

const blogDir = path.resolve('src/content/blog');

function normalizeIds(raw) {
  return raw
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((value) => Number.parseInt(value, 10))
    .filter((value) => Number.isFinite(value));
}

function toSlugList(ids) {
  const missing = [];
  const slugs = ids
    .map((id) => {
      const slug = categoriesById.get(id);
      if (!slug) missing.push(id);
      return slug;
    })
    .filter(Boolean);

  return { slugs, missing };
}

const files = (await fs.readdir(blogDir)).filter((file) => file.endsWith('.md'));
let updated = 0;
const missingIds = new Set();

for (const file of files) {
  const filePath = path.join(blogDir, file);
  const content = await fs.readFile(filePath, 'utf8');

  if (!content.startsWith('---')) {
    continue;
  }

  const match = content.match(/\n---\n/);
  if (!match) {
    continue;
  }

  const frontmatter = content.slice(0, match.index + match[0].length);
  const body = content.slice(match.index + match[0].length);

  const categoryMatch = frontmatter.match(/^categories:\s*\[(.*?)\]\s*$/m);
  if (!categoryMatch) {
    continue;
  }

  const ids = normalizeIds(categoryMatch[1]);
  const { slugs, missing } = toSlugList(ids);

  missing.forEach((id) => missingIds.add(id));

  const updatedFrontmatter = frontmatter.replace(
    /^categories:\s*\[(.*?)\]\s*$/m,
    slugs.length > 0
      ? `categories: [${slugs.map((slug) => `'${slug}'`).join(', ')}]`
      : 'categories: []'
  );

  if (updatedFrontmatter !== frontmatter) {
    await fs.writeFile(filePath, updatedFrontmatter + body, 'utf8');
    updated += 1;
  }
}

console.log(`Updated ${updated} markdown files.`);
if (missingIds.size > 0) {
  console.warn(`Missing category IDs: ${Array.from(missingIds).join(', ')}`);
}
