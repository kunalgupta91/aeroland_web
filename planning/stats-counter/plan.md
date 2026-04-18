# Stats Counter Module - Planning

## Overview
Component that displays key statistics about Aeroland project with animated counters.

## Objectives
- Display project statistics (area, plots, investment, etc.)
- Animate counter values on scroll/load
- Create visual interest with numbers and icons
- Support responsive layout

## Key Features
1. **Animated Counters**
   - Count up animation from 0 to target value
   - Trigger on scroll into view
   - Smooth easing animations

2. **Statistics Display**
   - Number/value
   - Label or title
   - Optional icon or image
   - Unit (acres, plots, crores, etc.)

3. **Responsive Layout**
   - Grid layout (2-4 columns depending on screen)
   - Mobile: 1-2 columns
   - Tablet: 2-3 columns
   - Desktop: 3-4 columns

4. **Bilingual Support**
   - Labels from content JSON
   - Support for EN and HI text

## Dependencies
- React hooks (useEffect, useRef, useState)
- Framer Motion (for animations)
- Intersection Observer API
- Tailwind CSS

## Data Structure
- Array of stats with: value, label, unit, icon
- Source from content JSON files

## Technical Considerations
- Performance for multiple counters
- Intersection Observer for viewport detection
- Smooth animation curves
- Mobile performance optimization
