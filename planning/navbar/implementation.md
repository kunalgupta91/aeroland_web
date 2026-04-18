# Navbar Module - Implementation

## File Location
`src/components/Navbar.tsx`

## Implementation Details

### Component Structure
```typescript
export default function Navbar()
```

### State Management
- `scrolled: boolean` - Track scroll position
- `isHome: boolean` - Detect if on home page
- `mobileMenuOpen: boolean` - Mobile menu toggle
- `dark: boolean` - Derived state (scrolled || !isHome)

### Hooks Used
- `useState` - Local state management
- `useEffect` - Scroll listener setup/cleanup
- `useRouter` - Route detection
- `useLanguage` - Language context

### Key Functions
1. **handleScroll()** - Listen to window scroll events, update `scrolled` state
2. **toggleLanguage()** - Switch between EN and HI
3. **handleNavClick()** - Navigate to page and close mobile menu
4. **isCurrentRoute()** - Check if route is active

### Dynamic Classes
- Background: `bg-transparent` (home/top) → `bg-white/20 backdrop-blur`
- Text: `text-white` (home/top) → `text-gray-900`
- Navbar container: `fixed top-0 w-full z-50 transition-all`

### Mobile Responsive
- Hamburger menu icon visible on `md:` and below
- Desktop nav hidden on mobile
- Slide-out menu for mobile with overlay

### Content Integration
- Logo/Brand name from `t.navbar.logo` (via useLanguage)
- Nav links from `t.navbar.links` array
- Language toggle button

## Testing Checklist
- [ ] Scroll detection works smoothly
- [ ] Home page transparency switches correctly
- [ ] Other pages show dark style immediately
- [ ] Mobile menu opens/closes properly
- [ ] Language switching updates all content
- [ ] Active route highlighted correctly
- [ ] Responsive on various breakpoints
- [ ] No jank or lag on scroll
