# Media Page Module - Implementation

## File Location
`src/app/media/page.tsx`

## Implementation Details

### Page Structure
```tsx
export default function MediaPage()
```

### Layout
```tsx
<div className="pt-16">
  <div className="gradient-green ...">
    <HeroSection title="Media & News" />
  </div>
  <section className="section-padding bg-white">
    {/* News Grid or Tabs */}
  </section>
</div>
```

### Tabs/Filter Options
- All media
- News articles
- Photo gallery
- Press coverage

### News Grid Section
- Grid layout: 1-2 columns (mobile) → 2-3 (desktop)
- News cards showing:
  - Thumbnail image (public/assets/news1-5.jpg)
  - Publication name/date
  - Article title
  - Brief excerpt
  - "Read more" or "External link" button

### Photo Gallery
- Masonry or standard grid layout
- Images from public/assets/
- Lightbox on click
- Full-screen view
- Navigation (prev/next)
- Close button

### Lightbox Implementation
- Simple modal with image
- Optional: Add image library (react-medium-image-zoom)
- Keyboard navigation (arrow keys, Esc)
- Share button

### Press Coverage Section
- Publication logos
- "Featured in" section
- List or grid of media outlets
- Links to coverage

### Content Structure from JSON
```json
{
  "media": {
    "news": [
      {
        "id": 1,
        "title": "...",
        "image": "news1.jpg",
        "date": "2026-04-18",
        "source": "...",
        "excerpt": "...",
        "url": "..."
      }
    ],
    "gallery": [...]
  }
}
```

### Components Used
- useLanguage hook
- Next.js Image component
- useState for gallery/lightbox state
- Optional: Image zoom library

### Image Optimization
- Use Next.js Image component
- Lazy loading
- Responsive sizes
- WebP format where possible

## Testing Checklist
- [ ] News items display correctly
- [ ] Images load properly
- [ ] Lightbox opens/closes
- [ ] Gallery responsive
- [ ] Tabs/filters work
- [ ] External links open correctly
- [ ] Bilingual content displays
- [ ] Performance acceptable
- [ ] Mobile experience good
- [ ] Keyboard navigation works
