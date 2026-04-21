# Registration System - Plan

> **How to use this file:** Edit any value below and ask Claude to "update the website to match plan.md". Every field maps directly to code — Claude will find the right file and make the change.

---

## Overview
User registration system for capturing leads interested in Aeroland project. Modal form on home page collects user data and stores it in MongoDB Atlas.

---

## Post-Registration Behaviour
| Setting | Current Value |
|---------|--------------|
| Redirect page after success | `/about` |
| Redirect delay | `2000ms` (2 seconds) |
| Success message text | `Thank you for your interest. Redirecting to About...` |

> To change redirect: update "Redirect page" above. Maps to `router.push(...)` in `RegistrationModal.tsx`.

---

## Form Fields
| Field | Label | Type | Required | Validation |
|-------|-------|------|----------|------------|
| name | Full Name | text input | Yes | Min 3 characters |
| email | Email Address | email input | Yes | Valid email format (`x@x.x`), duplicate check in DB |
| phone | Phone Number | tel input | Yes | 10-digit Indian mobile (starts with 6–9) |
| pocket | Preferred Pocket | dropdown | No | A or B |
| budget | Investment Budget | dropdown | No | See options below |
| message | Message | textarea | No | Max 500 characters |

### Pocket Dropdown Options
- `A` → Pocket A (North - Dyalpur)
- `B` → Pocket B (South - Matran)

### Budget Dropdown Options
- `below-20` → Below 20 Lakhs
- `20-50` → 20 - 50 Lakhs
- `50-100` → 50 - 100 Lakhs
- `above-100` → Above 100 Lakhs

---

## Validation Rules
| Field | Rule | Error Message Shown |
|-------|------|---------------------|
| email | Must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | `Enter a valid email address` |
| phone | Must match `/^[6-9]\d{9}$/` (spaces/dashes stripped) | `Enter a valid 10-digit Indian mobile number` |
| name | Min 3 chars | Handled server-side (400 response) |

> Validation fires: (1) on input change as user types, (2) on form submit before API call.
> Invalid fields show red border + red error text below the field.

---

## Modal Behaviour
| Setting | Current Value |
|---------|--------------|
| Trigger button text | `Register Interest` |
| Trigger button location | Home page hero section |
| Close on backdrop click | Yes |
| Close button | Top-right `✕` |
| Header title | `Register Your Interest` |
| Header subtitle | `Join us on the journey to Punjab's future` |
| Header style | `gradient-green` (dark green diagonal) |

---

## Data Storage
- **Database:** MongoDB Atlas
- **Cluster:** `aerolanduserdb.uojig88.mongodb.net`
- **Database name:** `aeroland`
- **Collection:** `registrations`
- **Document fields:** `name`, `email`, `phone`, `pocket`, `budget`, `message`, `createdAt`

---

## API Endpoint
- **Route:** `POST /api/register`
- **Success response:** `{ success: true, message: "Registration successful", data: { _id, email } }`
- **Error responses:**
  - `400` — validation failure
  - `409` — duplicate email (`"Email already registered"`)
  - `500` — database error

---

## Environment Variables
| Variable | Value | Where to set |
|----------|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://root:root@aerolanduserdb.uojig88.mongodb.net/` | `.env.local` (local), Vercel dashboard (production) |
| `MONGODB_DB` | `aeroland` | `.env.local` (local), Vercel dashboard (production) |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` (local) / `https://aeroland.co.in` (prod) | `.env.local` |

---

## Technical Stack
- **Frontend:** React, TypeScript, Framer Motion
- **Backend:** Next.js 14 App Router API Routes
- **Database:** MongoDB Atlas, native `mongodb` v6 driver (no Mongoose)
- **HTTP client:** `axios` v1.6

---

## Status: COMPLETE ✓
Last verified: 2026-04-22. Build passes with zero errors. MongoDB connection confirmed live (3 registrations in DB). Deployed to `aeroland.co.in` via Vercel.
