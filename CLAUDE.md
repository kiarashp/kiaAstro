# CLAUDE.md — kiaAstro Portfolio

## Project Overview

Personal portfolio site for Kiarash, a frontend/full-stack web developer. Built with Astro.js as a fully static site. Content is driven by Astro Content Collections (markdown files), so adding or updating projects requires no code changes — only file additions.

## Dev Commands

```bash
npm run dev      # Start dev server at http://127.0.0.1:4321
npm run build    # Build static output to ./dist/
npm run preview  # Preview production build locally
```

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Icons | astro-icon + @iconify-json/lucide |
| React | @astrojs/react (React 19) — available for interactive components |
| Contact form | Formspree (external service) |
| TypeScript | Strict mode (`astro/tsconfigs/strict`) |

## Project Structure

```
src/
├── assets/app.css          # Global styles — Tailwind + DaisyUI import
├── components/             # Shared UI components
├── content/projects/       # One .md file per project (content collection)
├── images/
│   ├── about/              # Profile photo
│   └── projects/           # Project screenshots
├── layouts/Layout.astro    # Root layout (Header + slot + Footer)
├── pages/                  # File-based routing
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   └── projects/
│       ├── index.astro     # Project listing
│       └── [slug].astro    # Dynamic project detail page
└── sections/               # Page-specific section components
    ├── home/
    ├── about/
    ├── projects/
    └── contact/
```

## Adding a New Project

1. Add an image to `src/images/projects/<name>.jpg`
2. Create `src/content/projects/<slug>.md` with this frontmatter:

```yaml
---
title: "Project Title"
publishDate: YYYY-MM-DD
desc: "Full description shown on the detail page."
short: "Short description shown in project cards."
imageUrl: "../../images/projects/<name>.jpg"
tags: ["Tag1", "Tag2"]
github: "https://github.com/..." # or null
demo: "https://example.com/"    # or null
featured: false                 # true = shown in Featured section on home + projects pages
---
```

3. Write the markdown body with sections: `### Overview`, `### Tech Stack`, `### Features`, `### Outcome`

The site automatically picks up the new file — no imports or config changes needed.

## Themes

Two DaisyUI themes configured in `src/assets/app.css`:
- `silk` — light theme (default)
- `abyss` — dark theme (used when `prefers-color-scheme: dark`)

Theme is toggled via `data-theme` on `<html>` and persisted in `localStorage`. Toggle lives in `src/components/ThemeToggle.astro`, which is included in the Header.

## Component Conventions

- **Pages** (`src/pages/`) — thin orchestrators; import Layout + sections, call `getCollection()` if needed
- **Sections** (`src/sections/<page>/`) — full-width page sections; accept data as props from the page
- **Components** (`src/components/`) — reusable UI pieces used across multiple pages/sections
- All components use Astro's `interface Props` pattern for prop typing
- Use `CollectionEntry<"projects">` type for project data passed to components

## Styling Conventions

- Tailwind CSS v4 utility classes throughout
- DaisyUI component classes for interactive elements (`btn`, `btn-primary`, `badge`, `card`, `form-control`, `input`, `textarea`, etc.)
- Responsive breakpoints: `md:` for tablet, `lg:` for desktop
- Theme-aware colors use DaisyUI semantic tokens (`bg-base-100`, `bg-base-200`, `text-base-content`, `text-primary`, etc.) — avoid hardcoded colors

## Content Collection Schema (`src/content.config.ts`)

| Field | Type | Required |
|---|---|---|
| `title` | string | yes |
| `publishDate` | date | yes |
| `desc` | string | yes |
| `short` | string | yes |
| `imageUrl` | image | no |
| `tags` | string[] | yes |
| `github` | string \| null | no |
| `demo` | string \| null | no |
| `featured` | boolean | yes |

## Key Files

| File | Purpose |
|---|---|
| `astro.config.mjs` | Astro config — integrations (icon, react), Vite plugins (tailwind), static output |
| `tsconfig.json` | TypeScript strict config with React JSX |
| `src/assets/app.css` | Global stylesheet — Tailwind + DaisyUI plugin config |
| `src/content.config.ts` | Content collection schema definition |
| `src/layouts/Layout.astro` | Root layout wrapping all pages |
| `src/components/Header.astro` | Navbar with active link detection and theme toggle |
| `src/components/ProjectCard.astro` | Card used in "More Projects" grid |
| `src/components/FeaturedProjectCard.astro` | Larger card for featured projects |
| `src/pages/projects/[slug].astro` | Dynamic project detail page — renders markdown content |

## No Linting / Formatting Config

There is no ESLint or Prettier config in this project. Rely on Astro's built-in TypeScript checking (`astro check`) and editor defaults.
