---
name: theme-customization
description: 'Change site color palette, typography, or visual identity. Use for: rebranding, updating colors, changing fonts, creating new color schemes, adjusting visual design, switching from light to dark theme.'
argument-hint: 'What to customize (e.g., "darker palette", "corporate blue", "serif fonts")'
---

# Theme Customization

## When to Use
- Change the site's color palette or visual identity
- Update brand colors
- Switch fonts or typography
- Create alternative color schemes
- Adjust visual design system
- Rebrand the site

## How the Palette Works

All colors are controlled by **5 CSS custom properties** at the top of [src/styles/global.css](../../../src/styles/global.css):

```css
:root {
  /* 🎨 PRIMARY PALETTE — Edit these 5 values to retheme the entire site */
  --color-primary: #010440;      /* Deep navy — headers, nav, footer bg */
  --color-secondary: #272A59;    /* Dark indigo — subtle text, borders */
  --color-accent: #8586A6;       /* Muted lavender — CTAs, highlights, badges */
  --color-accent-dark: #C7C8D9;  /* Light lavender — hover states, links */
  --color-light: #F2F2F2;        /* Off-white — light text on dark bg */
}
```

**That's it.** Change those 5 values and the entire site updates — buttons, nav, hero, cards, footer, cookie banner, everything.

## Color Roles Explained

| Variable | Role | Used in |
|----------|------|---------|
| `--color-primary` | Brand identity, authority | Nav bg, footer bg, hero gradient, headings, post header |
| `--color-secondary` | Supporting, subtle | Hero gradient endpoint, date labels, muted text |
| `--color-accent` | Action, attention | CTAs, badges, hover underlines, stat numbers, accent borders |
| `--color-accent-dark` | Interactive states | Button hovers, link hovers, "read more" links |
| `--color-light` | Light text/bg | Text on dark backgrounds, hero subtitle |

## Example Palettes

### Current: MF Color Palette (Monochromatic Navy)
```css
--color-primary: #010440;
--color-secondary: #272A59;
--color-accent: #8586A6;
--color-accent-dark: #C7C8D9;
--color-light: #F2F2F2;
```

### Previous: MFIT (Navy + Gold)
```css
--color-primary: #010440;
--color-secondary: #64668C;
--color-accent: #F2CB07;
--color-accent-dark: #8C7B23;
--color-light: #F2F2F2;
```

### Alternative: Ocean Blue
```css
--color-primary: #0F172A;
--color-secondary: #475569;
--color-accent: #38BDF8;
--color-accent-dark: #0284C7;
--color-light: #F1F5F9;
```

### Alternative: Forest Green
```css
--color-primary: #14532D;
--color-secondary: #4D7C5B;
--color-accent: #86EFAC;
--color-accent-dark: #22C55E;
--color-light: #F0FDF4;
```

### Alternative: Warm Coral
```css
--color-primary: #1C1917;
--color-secondary: #78716C;
--color-accent: #FB923C;
--color-accent-dark: #EA580C;
--color-light: #FFF7ED;
```

### Alternative: Professional Purple
```css
--color-primary: #3B0764;
--color-secondary: #6B21A8;
--color-accent: #A78BFA;
--color-accent-dark: #7C3AED;
--color-light: #FAF5FF;
```

## Changing Typography

Fonts are also CSS variables in [global.css](../../../src/styles/global.css):

```css
:root {
  --font-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

To change fonts:
1. Update the Google Fonts `<link>` in [BaseLayout.astro](../../../src/layouts/BaseLayout.astro)
2. Update the CSS variables in [global.css](../../../src/styles/global.css)

Example: Switch to serif fonts for a more editorial feel
```css
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Merriweather', Georgia, serif;
```

## Derived/Hardcoded Colors to Check

Some colors in `global.css` are derived but hardcoded (not using `var()`). 
If changing the palette drastically, search for and update:
- `rgba(242, 203, 7, ...)` — accent with opacity (hero badge, nav border)
- `rgba(242, 242, 242, ...)` — light with opacity (footer text, hero subtitle)
- `rgba(1, 4, 64, ...)` — primary with opacity (card shadows)

Search pattern:
```bash
grep -n "rgba(" src/styles/global.css
```

## Procedure

1. **Gather requirements**: What feeling/brand should the new palette convey?
2. **Choose/create palette**: Use examples above or generate new colors
3. **Update CSS variables**: Edit the 5 variables in [src/styles/global.css](../../../src/styles/global.css)
4. **Check derived colors**: Search for hardcoded `rgba()` values and update if needed
5. **Update fonts (if needed)**: Change Google Fonts link in BaseLayout + CSS vars
6. **Preview**: Run `npm run dev` and check:
   - Homepage hero
   - Navigation
   - Blog cards
   - Blog post page
   - Footer
   - Cookie banner
   - Buttons/CTAs
7. **Build**: Run `npm run build` to ensure no issues

## Notes

- The palette is intentionally minimal (5 vars) for easy theming
- All other colors are derived from these 5 base colors
- For accessibility, maintain at least 4.5:1 contrast ratio for text
- Test hover states and interactive elements thoroughly
- Check both light backgrounds (content) and dark backgrounds (nav, footer)
