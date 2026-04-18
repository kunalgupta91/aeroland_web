# Stats Counter Module - Implementation

## File Location
`src/components/StatsCounter.tsx`

## Implementation Details

### Data Structure
```typescript
interface Stat {
  value: number;
  label: string;
  unit: string;
}
```

### Component Structure
```typescript
export default function StatsCounter()
```

### Animation Implementation
- Use Framer Motion `useMotionValue` and `useTransform`
- Intersection Observer to trigger on view
- AnimatePresence for mount/unmount

### Layout
```tsx
<section className="section-padding bg-white">
  <div className="container-max">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Stat items */}
    </div>
  </div>
</section>
```

### Individual Stat Item
- Centered layout
- Large bold number
- Label below
- Optional icon above
- Hover effect on desktop

### Content Source
- Stats from `t.stats` array in content JSON
- Properties: value, label, unit
- Support bilingual labels

### Animation Details
- Duration: 2-3 seconds
- Easing: "easeOut"
- Trigger: When element enters viewport
- Counter format: Whole numbers with formatting

## Testing Checklist
- [ ] Counters animate smoothly
- [ ] Animation triggers only once
- [ ] Numbers format correctly
- [ ] Responsive grid layout
- [ ] Works on mobile/tablet/desktop
- [ ] Bilingual labels display correctly
- [ ] Performance acceptable
- [ ] Accessibility for screen readers
