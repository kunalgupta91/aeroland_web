# Aeroland Website — Setup Guide

## Quick Start

```bash
cd D:\coding_with_ai\aeroland-website
npm install
npm run dev
```

Open http://localhost:3000

---

## Deploy to Vercel (Testing)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live at a `*.vercel.app` URL.
When you have a custom domain, run: `vercel --prod` and add the domain in the Vercel dashboard.

---

## Assets Already Copied

All assets from `D:\coding_with_ai\aeroland\` have been copied automatically:

| File | Location in project |
|------|---------------------|
| WhatsApp Image ...33 PM.jpeg | `/public/assets/news1.jpg` (Bhaskar AI Tower article) |
| WhatsApp Image ...34 PM.jpeg | `/public/assets/news2.jpg` (Govt notification) |
| WhatsApp Image ...31 PM.jpeg | `/public/assets/news3.jpg` (Fire/Police station) |
| WhatsApp Image ...30 PM.jpeg | `/public/assets/news4.jpg` (Hospital/Connectivity) |
| WhatsApp Image ...30 PM (1).jpeg | `/public/assets/news5.jpg` (Bypass/Road) |
| Aeroland Map.pdf | `/public/assets/aeroland.pdf` |

### Master Plan Map Image

The PDF map needs to be converted to JPG for the Location page:
1. Open `D:\coding_with_ai\aeroland\Aeroland Map.pdf`
2. Export/screenshot as `aeroland-map.jpg`
3. Place at `D:\coding_with_ai\aeroland-website\public\assets\aeroland-map.jpg`
4. Then uncomment the `<img>` tag in `src/app/location/page.tsx` (look for the `ASSET REQUIRED` comment)

---

## Project Structure

```
aeroland-website/
├── public/assets/          ← Images & PDF go here
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Root layout (Navbar + Footer)
│   │   ├── page.tsx        ← Home page
│   │   ├── about/          ← About Aeroland
│   │   ├── highlights/     ← 6 feature cards
│   │   ├── media/          ← Press gallery
│   │   ├── location/       ← Master plan + Google Maps
│   │   ├── docs/           ← PDF viewer & download
│   │   └── contact/        ← Register interest form
│   ├── components/
│   │   ├── Navbar.tsx      ← Fixed nav with EN/HI toggle
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx ← Animated hero with CTAs
│   │   └── StatsCounter.tsx← Animated number counters
│   ├── context/
│   │   └── LanguageContext.tsx  ← EN/HI switcher
│   └── data/
│       ├── content.en.json ← All English text
│       └── content.hi.json ← All Hindi text
```

## Updating Content

All website text lives in two JSON files — no code changes needed:
- `src/data/content.en.json` — English content
- `src/data/content.hi.json` — Hindi content

To add a new press article: add an entry to the `media.items` array in both files and drop the image in `/public/assets/`.

---

## Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm start` | Run production build locally |
