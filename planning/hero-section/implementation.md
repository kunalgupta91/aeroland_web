# Hero Section Module - Implementation

## File Location
`src/components/HeroSection.tsx`

## Implementation Details

### Component Props
```typescript
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}
```

### Component Structure
```typescript
export default function HeroSection({ title, subtitle, imageSrc }: HeroSectionProps)
```

### Layout Structure
```tsx
<div className="gradient-green py-20 md:py-32 px-4">
  <div className="container-max">
    {/* Content */}
  </div>
</div>
```

### Content Areas
1. **Title**
   - `text-4xl md:text-5xl font-bold text-white`
   - Support for rich text if needed

2. **Subtitle (Optional)**
   - `text-lg md:text-xl text-gray-100`
   - Secondary description

3. **Badge (Optional)**
   - Use `.page-hero-badge` class
   - Semi-transparent styling
   - For section labels

### Styling Classes
- Container: `gradient-green py-20 md:py-32`
- Inner wrapper: `container-max`
- Title: `text-white font-bold text-lg:text-5xl`
- Text color: `text-white` or `text-gray-100`

### Optional Features
- Background image support
- Overlay opacity adjustment
- Animation on mount (Framer Motion)
- CTA button integration

## Testing Checklist
- [ ] Title displays correctly
- [ ] Subtitle renders if provided
- [ ] Gradient background appears
- [ ] Responsive on mobile/tablet/desktop
- [ ] Text is readable with proper contrast
- [ ] Works with both EN and HI content
- [ ] Optional props handled gracefully
