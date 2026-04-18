# Footer Module - Implementation

## File Location
`src/components/Footer.tsx`

## Implementation Details

### Component Structure
```typescript
export default function Footer()
```

### Content Structure
- Footer sections defined in `content.en.json` and `content.hi.json`
- Structure: `t.footer.sections` array with links
- Company info: `t.footer.company`
- Contact: `t.footer.contact`

### Layout
- Flex container with responsive columns
- Grid layout for multi-column on desktop
- Single column on mobile
- Top padding for separation: `pt-20`
- Background: `bg-gray-900` (dark)
- Text color: `text-white`

### Sections
1. **Company Section**
   - Logo
   - Description/tagline
   - Company info

2. **Quick Links**
   - About, Location, Media, Highlights
   - Contact, Docs

3. **Contact Information**
   - Email link
   - Phone number
   - Address (if applicable)

4. **Legal**
   - Privacy Policy (if exists)
   - Terms and Conditions (if exists)

### Components Used
- Next.js Link for navigation
- Tailwind classes for styling
- useLanguage hook for content

## Testing Checklist
- [ ] All links work correctly
- [ ] Bilingual content displays properly
- [ ] Responsive layout on mobile/desktop
- [ ] Footer appears on all pages
- [ ] Footer content matches JSON files
- [ ] Links highlight on hover
- [ ] Text is readable with proper contrast
