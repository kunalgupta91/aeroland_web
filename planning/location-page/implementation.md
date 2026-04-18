# Location Page Module - Implementation

## File Location
`src/app/location/page.tsx`

## Implementation Details

### Page Structure
```tsx
export default function LocationPage()
```

### Layout
```tsx
<div className="pt-16">
  <div className="gradient-green ...">
    <HeroSection title="Location & Geography" />
  </div>
  <section className="section-padding bg-white">
    {/* Location Content */}
  </section>
</div>
```

### Map Section
- Google Maps embed (API required)
- Embedded iframe or react component
- Custom markers for pockets A and B
- Directions link
- Responsive sizing

### Interactive Map Alternative
- Use Leaflet or Mapbox (if not using Google)
- SVG map with clickable zones
- Custom location pins

### Pocket Information Tabs
- Toggle between Pocket A and Pocket B
- Tab interface or separate sections
- Details for each pocket:
  - Location description
  - Size/area
  - Number of plots
  - Nearest areas/landmarks
  - Connectivity details

### Geographical Advantages
- Table or cards showing:
  - Distance to Airport: X km
  - Distance to City: X km
  - Travel time to Aerocity: X min
  - Proximity to Expo City
  - Road connectivity (National Highway, etc.)

### Nearby Landmarks/Amenities
- Grid of cards with:
  - Icon
  - Location name
  - Distance
  - Category (Shopping, Hospital, Education, etc.)

### Accessibility Section
- Public transport options
- Auto/Taxi availability
- Self-drive directions
- Travel time estimates

### Content from JSON
- `t.location.pockets.a`
- `t.location.pockets.b`
- `t.location.advantages`
- `t.location.landmarks`

### Components Used
- useLanguage hook
- Next.js Image component
- Google Maps embed or alternative

## Testing Checklist
- [ ] Map displays correctly
- [ ] Pocket information accurate
- [ ] Tab switching works
- [ ] Responsive layout mobile/desktop
- [ ] Bilingual content displays
- [ ] Google Maps or alternative loads
- [ ] Links and directions work
- [ ] Images load properly
- [ ] Table data readable on mobile
