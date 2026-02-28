# Copilot Custom Instructions

This repository is an Astro static website for a software engineering consultant.

## Architecture
- **Framework:** Astro 5.x with MDX integration
- **Content:** Markdown blog posts in `src/content/blog/` with YAML frontmatter
- **Styling:** Pure CSS with CSS custom properties (no frameworks), palette defined in `src/styles/global.css`
- **Layouts:** `BaseLayout.astro` (sitewide SEO shell) → `BlogPost.astro` (article-specific)
- **Static output:** `npm run build` → `dist/`

## Key conventions
- All posts use frontmatter: `title`, `date`, `slug`, `categories`
- Color palette is controlled by 5 CSS variables at the top of `global.css` — change only those to retheme
- SEO meta (OG, Twitter, JSON-LD) is handled centrally in `BaseLayout.astro`
- Cookie consent dispatches a `cookie-consent` CustomEvent; any future analytics must listen for it
- The site is intentionally open to all AI crawlers (robots.txt, ai.txt, ai-plugin.json)

## Content workflow
1. Create a new `.md` file in `src/content/blog/` with proper frontmatter
2. Run `npm run dev` to preview
3. Run `npm run build` to generate static output
4. Deploy `dist/` to hosting

## Available custom agent skills
See `.github/skills/` for reusable agent prompts:
- `astro-new-post.md` — Create and publish a new blog post
- `seo-audit.md` — Audit and fix SEO issues
- `gdpr-compliance.md` — Add/update GDPR and cookie law compliance
- `content-migration.md` — Migrate content from external formats
- `theme-customization.md` — Change site palette and visual identity
