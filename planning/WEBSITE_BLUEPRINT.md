# Website Blueprint — Complete Build Instructions

> Give this document to Claude along with your project brief and it will generate a complete, production-ready website matching this stack and pattern. Replace every `[PLACEHOLDER]` with your project's values.

---

## 1. Project Brief (fill this in)

```
Project name:        [e.g. Aeroland]
Tagline:             [e.g. Where the Future Takes Flight]
Primary color:       [e.g. dark green #052e16 / #166534]
Audience:            [e.g. real estate investors, plot buyers]
Languages:           [e.g. English + Hindi (bilingual)]
WhatsApp number:     [e.g. +91 7840081118]
MongoDB Atlas URI:   [e.g. mongodb+srv://user:pass@cluster.mongodb.net/]
MongoDB DB name:     [e.g. aeroland]
Domain:              [e.g. aeroland.co.in]
```

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | react-icons |
| Counters | react-countup + react-intersection-observer |
| Database | MongoDB Atlas (native `mongodb` v6 driver, no Mongoose) |
| HTTP client | axios |
| Deployment | Vercel (auto-deploy from GitHub) |
| Domain | Hostinger DNS → Vercel A record |

### package.json dependencies to install
```bash
npm install next@14.2.0 react react-dom framer-motion react-icons react-countup react-intersection-observer mongodb axios
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer
```

---

## 3. Folder Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — Navbar + Footer + SocialFloat on every page
│   ├── globals.css             # Tailwind + custom CSS utilities
│   ├── page.tsx                # Home page (client component)
│   ├── about/page.tsx
│   ├── highlights/page.tsx
│   ├── media/page.tsx
│   ├── location/page.tsx
│   ├── docs/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       └── register/
│           └── route.ts        # POST endpoint → MongoDB
│   └── lib/
│       └── mongodb.ts          # MongoDB connection with caching
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── StatsCounter.tsx
│   ├── RegistrationModal.tsx
│   └── SocialFloat.tsx         # WhatsApp floating button
├── context/
│   └── LanguageContext.tsx     # Bilingual provider
├── data/
│   ├── content.en.json         # All English text
│   └── content.hi.json         # All Hindi text (same shape as EN)
├── types/
│   └── registration.ts         # TypeScript interfaces
public/
└── assets/                     # Images, PDFs
planning/                       # Source-of-truth planning docs
vercel.json                     # Minimal: buildCommand + framework only
.env.local                      # MONGODB_URI, MONGODB_DB, NEXT_PUBLIC_SITE_URL
```

---

## 4. globals.css — CSS Utilities

Always define these utility classes. Every page and component uses them.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-dark: #0f3d22;   /* darkest green */
  --brand:      #1a5c35;   /* mid green */
  --brand-light: #2d8653;  /* light green */
}

/* Hero banners and CTA backgrounds */
.gradient-green {
  background: linear-gradient(135deg, #052e16 0%, #166534 50%, #15803d 100%);
}

/* Light CTA sections */
.gradient-green-light {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
}

/* Standard section padding — use on every <section> */
.section-padding {
  @apply py-20 px-4 md:px-8 lg:px-16;
}

/* Max width container — wrap all section content in this */
.container-max {
  @apply max-w-7xl mx-auto;
}

/* Label pill on white backgrounds */
.badge {
  @apply inline-block text-green-600 text-xs font-semibold uppercase tracking-widest
         border border-green-200 bg-green-50 px-4 py-1.5 rounded-full mb-4;
}

/* Label pill on dark green hero banners */
.page-hero-badge {
  @apply inline-block bg-green-500 bg-opacity-20 border border-green-400
         text-green-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-4
         uppercase tracking-widest;
}
```

---

## 5. Bilingual Content System

**Rule: Never hardcode user-facing text in components. Always put it in JSON first.**

### content.en.json shape
```json
{
  "nav": { "home": "Home", "about": "About", ... },
  "hero": { "badge": "...", "title": "...", "subtitle": "...", "description": "...", "cta_primary": "...", "cta_secondary": "..." },
  "stats": [{ "value": 5500, "suffix": "+", "label": "Acres", "sublabel": "..." }],
  "about": { "badge": "...", "title": "...", "description": "...", "vision_title": "...", "vision": "...", "mission_title": "...", "mission": "..." },
  "highlights": { "badge": "...", "title": "...", "features": [{ "icon": "airplane", "title": "...", "description": "..." }] },
  "media": { "badge": "...", "title": "...", "items": [{ "image": "/assets/news1.jpg", "headline": "...", "source": "...", "date": "...", "tag": "..." }] },
  "location": { "badge": "...", "title": "...", "description": "...", "highlights": ["..."] },
  "docs": { "badge": "...", "title": "...", "summary_title": "...", "summary": "...", "download": "...", "view": "..." },
  "contact": { "badge": "...", "title": "...", "description": "...", "form": { "name": "...", "email": "...", "phone": "...", "message": "...", "submit": "...", "success": "..." }, "info": { "address": "...", "email": "...", "phone": "..." } },
  "footer": { "tagline": "...", "links": { "title": "Quick Links", "items": ["Home", ...] }, "legal": { "title": "Legal", "items": ["Privacy Policy", ...] }, "copyright": "..." }
}
```

### content.hi.json
Exact same JSON shape, all values translated to Hindi. Cast as `typeof en` in LanguageContext.

### LanguageContext.tsx pattern
```tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import en from '@/data/content.en.json';
import hi from '@/data/content.hi.json';

type Language = 'en' | 'hi';
interface LanguageContextType { language: Language; setLanguage: (l: Language) => void; t: typeof en; }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const t = language === 'en' ? en : (hi as typeof en);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
```

### Usage in any component
```tsx
const { t, language, setLanguage } = useLanguage();
// t.hero.title, t.nav.home, etc.
```

---

## 6. layout.tsx — Root Layout

```tsx
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialFloat from '@/components/SocialFloat';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SocialFloat />   {/* floating WhatsApp button on every page */}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

---

## 7. Page Structure Pattern

**Every non-home page must follow this exact structure:**

```tsx
'use client';
export default function SomePage() {
  const { t } = useLanguage();
  return (
    <div className="pt-16">                      {/* CRITICAL: clears 64px fixed navbar */}
      <div className="gradient-green py-24 px-4 text-white text-center">
        <span className="page-hero-badge">{t.section.badge}</span>
        <h1 className="text-4xl md:text-5xl font-black mt-2">{t.section.title}</h1>
      </div>
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* page content */}
        </div>
      </section>
    </div>
  );
}
```

**`pt-16` is non-negotiable** — without it, content slides behind the fixed navbar.

---

## 8. Navbar Pattern

Key rules:
- Fixed top, `z-50`, `h-16` (64px)
- **Home page at scroll=0:** transparent background, white text
- **All other pages or when scrolled:** white/frosted background, dark text
- Language toggle button (EN ↔ हिंदी)
- Mobile hamburger drawer with `AnimatePresence`

```tsx
const isHome = pathname === '/';
const dark = scrolled || !isHome;  // this single line controls the whole style
```

Nav hrefs array must match content.en.json nav keys order exactly:
```tsx
const navHrefs = ['/', '/about', '/highlights', '/media', '/location', '/docs', '/contact'];
```

---

## 9. Navbar Transparent Logic — When to Update

If you add a **new full-screen hero page** (like the home page) that should also start transparent:
- Update `const dark = scrolled || !isHome` to include the new path
- e.g. `const dark = scrolled || (pathname !== '/' && pathname !== '/new-page')`

---

## 10. MongoDB Connection (`src/app/lib/mongodb.ts`)

```typescript
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable');

const MONGODB_DB = process.env.MONGODB_DB || '[YOUR_DB_NAME]';

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}
```

**Important:** `MONGODB_URI` must be set in:
- `.env.local` for local development
- Vercel Dashboard → Settings → Environment Variables → Production + Preview + Development for deployed site

---

## 11. Registration API Route (`src/app/api/register/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, ...rest } = body;

    // Server-side validation
    if (!name || name.length < 3) return NextResponse.json({ success: false, error: 'Name must be at least 3 characters' }, { status: 400 });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 });
    if (!phone || !/^\d{10}$/.test(phone)) return NextResponse.json({ success: false, error: 'Phone must be 10 digits' }, { status: 400 });

    const { db } = await connectToDatabase();
    const collection = db.collection('registrations');

    // Duplicate check
    const existing = await collection.findOne({ email });
    if (existing) return NextResponse.json({ success: false, error: 'Email already registered' }, { status: 409 });

    const result = await collection.insertOne({ name, email, phone, ...rest, createdAt: new Date() });
    return NextResponse.json({ success: true, message: 'Registration successful', data: { _id: result.insertedId, email } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
```

---

## 12. Registration Modal Pattern

Key behaviours:
- Triggered by a button (`onClick={() => setIsModalOpen(true)}`) on the home page
- Backdrop `z-40`, modal `z-50`
- Client-side validation fires on keypress AND on submit
- Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Phone regex: `/^[6-9]\d{9}$/` (Indian mobile, strips spaces/dashes before testing)
- Invalid field: `border-red-400 focus:ring-red-400` + red error text below field
- On success: show success screen → `setTimeout(() => { router.push('/[TARGET_PAGE]'); }, 2000)`
- **Do NOT call `onClose()` before `router.push()`** — causes re-render interference. Navigation unmounts the modal automatically.

---

## 13. WhatsApp Floating Button (`src/components/SocialFloat.tsx`)

```tsx
'use client';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/[PHONE_WITHOUT_+]?text=Hi%2C%20I%27m%20interested%20in%20[PROJECT]';

export default function SocialFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-lg"
      style={{ backgroundColor: '#25D366', width: 52, height: 52 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 300 }}
    >
      {/* WhatsApp SVG — paste full SVG here */}
    </motion.a>
  );
}
```

Phone format: `+91 7840081118` → URL: `wa.me/917840081118` (remove `+`, no spaces)

---

## 14. Framer Motion Patterns Used

```tsx
// Fade in on scroll (use on section headings and cards)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

// Stagger children (use on card grids — add delay: i * 0.1)
transition={{ duration: 0.5, delay: i * 0.1 }}

// Hover lift (use on cards)
whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(22,101,52,0.12)' }}

// Fade in on page load (use on hero content)
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}

// AnimatePresence (use for modals and mobile drawers)
<AnimatePresence>
  {isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
</AnimatePresence>
```

---

## 15. vercel.json — Keep It Minimal

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Never add a `functions` block with a `runtime` key** — Next.js handles API routes automatically. Adding it causes: `"Function Runtimes must have a valid version"` error.

---

## 16. Domain Setup (Hostinger → Vercel)

1. In Vercel: Project → Settings → Domains → Add your domain
2. In Hostinger: hPanel → Domains → Manage → DNS Records
3. Add: **A record** `@` → `76.76.21.21`
4. Add: **CNAME** `www` → `cname.vercel-dns.com`
5. Wait 5–30 min. Root domain works with A record alone; CNAME enables `www.` variant.

---

## 17. Environment Variables

| Variable | Local (`.env.local`) | Production |
|----------|---------------------|------------|
| `MONGODB_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/` | Vercel Dashboard → Settings → Env Vars |
| `MONGODB_DB` | `[db_name]` | Vercel Dashboard |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | `https://[your-domain]` |

`.env.local` is gitignored. Never commit real credentials.

---

## 18. Planning Folder Convention

Every feature gets its own folder under `planning/[feature-name]/`:
- `plan.md` — what it does, all settings as editable tables
- `implementation.md` — file map, state, classes, patterns

**Purpose:** Editing a value in plan.md + saying "update the website to match plan.md" is enough for Claude to make the change — no need to explain the codebase.

---

## 19. Build Verification

Always run before pushing:
```bash
npm run build
```
Zero TypeScript errors + zero lint errors = safe to deploy. There are no tests — build is the test.

---

## 20. Common Gotchas

| Gotcha | Fix |
|--------|-----|
| Content behind navbar | Add `pt-16` to the outermost div of every non-home page |
| WhatsApp URL | Strip `+` from number, no spaces: `wa.me/917840081118` |
| Vercel `functions` runtime error | Remove `functions` block from `vercel.json` entirely |
| `MONGODB_URI` error on Vercel | Add env vars in Vercel Dashboard — `.env.local` is local only |
| Modal redirect not firing | Never call `onClose()` before `router.push()` |
| Duplicate email on test | Use a new email each time — 409 is returned for duplicates |
| Navbar always dark | Check `const dark = scrolled \|\| !isHome` — add new hero pages to the condition |
| Hindi JSON type error | Cast `hi as typeof en` in LanguageContext |
