# Skill: Astro New Blog Post

## When to use
When the user wants to publish a new blog post on the Astro site.

## Steps

1. **Gather information**: Ask for title, topic, and optionally a draft or outline.

2. **Generate the slug** from the title:
   - Lowercase, accents stripped (NFD + remove diacritics)
   - Spaces → hyphens, remove special chars
   - Example: "La Prima Via di DevOps" → `la-prima-via-di-devops`

3. **Create the file** at `src/content/blog/{slug}.md` with this frontmatter:

```markdown
---
title: "Title Here"
date: "YYYY-MM-DD"
slug: "slug-here"
categories: []
---

Content here...
```

4. **Content guidelines**:
   - Write in Italian (the blog's language)
   - Use ## for section headings
   - Include actionable takeaways when possible
   - Keep paragraphs short (3-4 lines max)
   - Do NOT include the "Sharing is caring" boilerplate (it's in the layout CTA)

5. **Verify**: Run `npm run dev` and check `http://localhost:4321/blog/{slug}.md/` loads correctly.

6. **Build**: Run `npm run build` to ensure static generation succeeds.

## Content collection schema
```typescript
{
  title: z.string(),          // Required
  date: z.string(),           // Required, format: "YYYY-MM-DD"
  slug: z.string().optional(),
  categories: z.array(z.number()).optional(),
  draft: z.boolean().optional().default(false),
}
```

## Notes
- Posts with `draft: true` are excluded from listings and RSS
- The blog index shows the first meaningful paragraph as excerpt (auto-extracted from body)
- Date format in frontmatter must be ISO: "2026-02-28"
- The BlogPost layout automatically adds JSON-LD BlogPosting schema, breadcrumbs, and newsletter CTA
