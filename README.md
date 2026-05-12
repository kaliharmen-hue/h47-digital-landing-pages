# H47 Digital Landing Pages

Astro landing pages for the H47 Digital package ladder, scaffolded with Markdown content collections and custom CSS:

- Presence: `/social-media-management-package/`
- Growth: `/digital-marketing-growth-package/`
- Authority: `/outsourced-marketing-partner-package/`

## Local Commands

```bash
npm install
npm run dev
npm run build
```

## Content

Package copy is stored in `src/content/packages/` as Markdown entries. Each entry has structured frontmatter for the landing page sections, CTAs, form fields, and display order.

The dynamic route at `src/pages/[slug].astro` builds each page using the `pageSlug` field from the Markdown frontmatter.

## GitHub Pages

The included GitHub Actions workflow builds the site and deploys it to GitHub Pages when changes are pushed to `main`.
