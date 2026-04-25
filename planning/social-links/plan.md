# Social Links - Plan

> **How to use this file:** Fill in the placeholder values below, then ask Claude to "implement the social links from plan.md". Any future change (new number, new handle) — edit here and ask Claude to update.

---

## Placement
Floating button cluster — **bottom-right corner**, visible on all pages.
- Stacked vertically (WhatsApp on top, Instagram middle, Facebook bottom)
- Always on top of other content (`z-50`)
- Smooth hover animation (scale up)

---

## Social Accounts

| Platform | Detail | Placeholder (replace this) |
|----------|--------|---------------------------|
| WhatsApp | Phone number with country code | `+91XXXXXXXXXX` |
| Instagram | Profile URL | `https://instagram.com/YOUR_HANDLE` |
| Facebook | Page URL | `https://facebook.com/YOUR_PAGE` |

---

## WhatsApp Behaviour
- Clicking opens: `https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20Aeroland`
- Pre-filled message: `Hi, I'm interested in Aeroland`
- Opens in new tab (`target="_blank"`)

---

## Button Design
| Property | Value |
|----------|-------|
| Position | Fixed, bottom-right |
| Offset | `bottom-6 right-6` |
| Button size | `w-12 h-12` rounded-full |
| WhatsApp color | `bg-[#25D366]` (WhatsApp green) |
| Instagram color | `bg-gradient instagram` (purple-pink) |
| Facebook color | `bg-[#1877F2]` (Facebook blue) |
| Icon size | 22px white icons |
| Hover effect | `scale-110` |
| Shadow | `shadow-lg` |

---

## Implementation File
- New component: `src/components/SocialFloat.tsx`
- Added to: `src/app/layout.tsx` (renders on all pages)

---

## Status: PENDING
Waiting for actual WhatsApp number, Instagram handle, and Facebook page URL before implementation.
