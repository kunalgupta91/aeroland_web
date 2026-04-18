# Hero Section Module - Planning

## Overview
Reusable hero banner component used on all non-home pages. Displays a dark green gradient background with title and optional subtitle.

## Objectives
- Provide consistent hero section across all pages
- Display page title and description
- Use dark green gradient styling from globals.css
- Support bilingual content
- Optional CTA button placement

## Key Features
1. **Visual Design**
   - Dark green gradient background (`.gradient-green`)
   - Centered content alignment
   - Full-width banner design
   - Proper spacing and padding

2. **Content Areas**
   - Page title/heading
   - Optional subtitle or description
   - Optional badge or label
   - Optional call-to-action button

3. **Responsive Design**
   - Adapts to different screen sizes
   - Proper text sizing on mobile
   - Maintains readability

4. **Bilingual Support**
   - Content from language context
   - Supports both EN and HI text

## Dependencies
- React
- Tailwind CSS
- Optional: Framer Motion for animations
- LanguageContext (optional, if content used)

## Technical Considerations
- Override component for flexible content
- Props-based customization
- CSS utility classes from globals.css
- Performance optimization for reusability
