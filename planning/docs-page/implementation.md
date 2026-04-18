# Docs Page Module - Implementation

## File Location
`src/app/docs/page.tsx`

## Implementation Details

### Page Structure
```tsx
export default function DocsPage()
```

### Layout
```tsx
<div className="pt-16">
  <div className="gradient-green ...">
    <HeroSection title="Documentation & Resources" />
  </div>
  <section className="section-padding bg-white">
    {/* Document Sections */}
  </section>
</div>
```

### Master Plan Section
- Display aeroland.pdf image/preview
- Embed PDF viewer (optional)
- `public/assets/aeroland.pdf`
- Download button
- File metadata

### Document Categories
- Group documents by type
- Use tabs or accordions for organization
- Grid or list layout

### Document Cards
- Document title
- Brief description
- File info (size, type)
- Download button
- Preview option (if applicable)

### Content from JSON
- `t.docs.categories`
- `t.docs.documents`
- Document descriptions
- Category titles

### Components Used
- HeroSection
- useLanguage hook
- Next.js Link component
- PDF viewer library (optional)

### File Structure
```
public/assets/
  ├── aeroland.pdf
  ├── aeroland-map.jpg
  ├── brochure.pdf (if added)
  └── other-docs/
```

### Download Handling
- Direct link to public assets
- Track downloads (optional)
- Error handling for missing files

## Testing Checklist
- [ ] PDF displays/downloads correctly
- [ ] All document links work
- [ ] File sizes display correctly
- [ ] Responsive layout
- [ ] Bilingual labels work
- [ ] Master plan image displays
- [ ] Download buttons functional
- [ ] Proper error messages for missing files
