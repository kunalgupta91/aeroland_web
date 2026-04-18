# Contact Page Module - Implementation

## File Location
`src/app/contact/page.tsx`

## Implementation Details

### Page Structure
```tsx
export default function ContactPage()
```

### Layout
```tsx
<div className="pt-16">
  <div className="gradient-green ...">
    <HeroSection title="Contact Us" />
  </div>
  <section className="section-padding bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      {/* Contact Info */}
    </div>
  </section>
</div>
```

### Contact Form
- Use React hook-form or basic state
- Fields:
  - Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Subject (optional)
  - Message (required)
  - Inquiry Type dropdown (optional)

### Form Validation
- Email format check
- Required fields check
- Phone format (optional)
- Spam protection (honeypot field)

### Contact Information Section
- Office address
- Phone number(s)
- Email address
- Business hours
- Office directions link

### Map (Optional)
- Google Maps embed or iframe
- Show office location
- Optional: Google Maps API with custom marker

### Components
- useLanguage hook
- Form inputs with labels
- Button component
- Next.js Image component

### Form Submission
- POST to API route or contact service
- Handle success/error messages
- Clear form on success
- Show loading state

## Testing Checklist
- [ ] Form fields validate correctly
- [ ] Form submits without errors
- [ ] Success message appears
- [ ] Bilingual labels work
- [ ] Form responsive on mobile
- [ ] Contact info displays properly
- [ ] Map loads correctly
- [ ] Phone links work
