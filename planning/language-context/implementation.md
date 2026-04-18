# Language Context Module - Implementation

## File Location
`src/context/LanguageContext.tsx`

## Implementation Details

### Context Type
```typescript
interface LanguageContextType {
  t: typeof contentEN;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
}
```

### Content Import
```typescript
import contentEN from '@/data/content.en.json';
import contentHI from '@/data/content.hi.json' assert { type: 'json' };
```

### Provider Component
```typescript
export function LanguageProvider({ children }: { children: React.ReactNode })
```

### Hook
```typescript
export function useLanguage(): LanguageContextType
```

### State Management
- `language: 'en' | 'hi'` - Current language
- Initialize from localStorage `'aeroland-language'`
- Default to 'en' if not found

### Functions
1. **setLanguage(lang)** 
   - Update state
   - Save to localStorage
   - Trigger re-render in all consumers

2. **Get content object (t)**
   - Return EN or HI content based on language
   - Type EN content with `as typeof contentEN` for HI

### Setup in Root Layout
```typescript
// In src/app/layout.tsx
<LanguageProvider>
  {children}
</LanguageProvider>
```

### Usage in Components
```typescript
const { t, language, setLanguage } = useLanguage();
// Access content: t.navbar.logo, t.footer.links, etc.
```

## Testing Checklist
- [ ] Context provides correct EN/HI content
- [ ] setLanguage updates all components
- [ ] Language persists on page reload
- [ ] No hydration mismatch errors
- [ ] Performance adequate (memoized)
- [ ] Type-safety working correctly
- [ ] Content structure matches between EN and HI
