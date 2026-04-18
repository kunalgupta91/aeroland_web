# Navbar Module - Planning

## Overview
Navigation bar component for the Aeroland website. Handles responsive navigation, language switching, and dynamic styling based on scroll position and current page.

## Objectives
- Provide consistent navigation across all pages
- Support bilingual language switching (EN/HI)
- Implement responsive design for mobile and desktop
- Dynamic navbar styling (transparent on home page, dark on other pages)
- Fixed positioning with frosted glass effect on scroll/non-home pages

## Key Features
1. **Responsive Navigation**
   - Mobile hamburger menu
   - Desktop horizontal navigation
   - Sticky/fixed positioning

2. **Language Switching**
   - Toggle between English and Hindi
   - Persist language preference
   - Dynamic content from `useLanguage()` hook

3. **Dynamic Styling**
   - Transparent with white text on home page at scroll 0
   - Dark frosted style on all other pages
   - Smooth transitions between states

4. **Active Route Indicator**
   - Highlight current page in navigation
   - Update on route change

## Dependencies
- React hooks (useState, useEffect, useRef)
- Next.js Router
- LanguageContext (useLanguage hook)
- Tailwind CSS classes
- Framer Motion (for animations)

## Technical Considerations
- Scroll detection performance
- Mobile menu state management
- Language context integration
- Route tracking
- Z-index positioning for fixed navbar
