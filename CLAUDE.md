# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (run this to catch type/lint errors)
npm start        # Serve production build locally
```

There are no tests. Use `npm run build` to verify correctness before considering work done.

## Architecture

**Next.js 14 App Router** with Tailwind CSS, Framer Motion, and a hand-rolled bilingual (EN/HI) system.

### Bilingual content system
All user-facing text lives in two JSON files:
- `src/data/content.en.json`
- `src/data/content.hi.json`

`src/context/LanguageContext.tsx` exposes a `useLanguage()` hook that returns `{ t, language, setLanguage }`. Every page and component calls `useLanguage()` to get `t` (the typed content object). The Hindi JSON is cast `as typeof en` so TypeScript treats both as the same shape. **Never hardcode user-facing strings in components** — always add them to both JSON files first.

### Page structure pattern
Every non-home page follows this pattern:
```tsx
<div className="pt-16">           {/* clears fixed 64px navbar */}
  <div className="gradient-green ...">  {/* dark green hero banner */}
  <section className="section-padding bg-white">  {/* main content */}
```
The `pt-16` spacer is critical — without it content slides behind the fixed navbar.

### Navbar transparent/dark logic
The navbar is transparent with white text **only on the home page at scroll position 0**. On all other pages it uses the white/frosted dark style immediately. This is controlled by `const dark = scrolled || !isHome` in `Navbar.tsx`. If a new full-screen hero page is added, update this logic.

### CSS utilities (globals.css)
- `.gradient-green` — the dark green diagonal gradient used on all hero banners
- `.gradient-green-light` — pale green used for light CTA sections
- `.section-padding` — `py-20 px-4 md:px-8 lg:px-16`
- `.container-max` — `max-w-7xl mx-auto`
- `.badge` — light green pill for section labels on white backgrounds
- `.page-hero-badge` — semi-transparent pill for labels on dark green banners

### Assets
All public assets live in `public/assets/`:
- `news1.jpg` – `news5.jpg`: newspaper/press images (sourced from WhatsApp screenshots)
- `aeroland.pdf`: the GMADA master plan PDF (used in `/docs` page)
- `aeroland-map.jpg`: **not yet created** — requires converting `aeroland.pdf` to an image; the Location page has a placeholder until this file exists

### Key project facts (for content decisions)
- **Aeroland** is a GMADA (Greater Mohali Area Development Authority) planned township near Chandigarh International Airport
- Two pockets: **Pocket A** (north, near Dyalpur/Nandiali) and **Pocket B** (south, near Matran)
- Adjacent to Aerocity and upcoming Expo City (India's first AI Tower, 300+ companies)
- Official notification: H-U-H1/65/2026-6H1/I/452 dated 03/03/2026
- Primary audience: plot buyers and real estate investors
