# Registration System - Planning

## Overview
User registration system for capturing leads interested in Aeroland project. Modal form on home page that collects user data and stores in MongoDB Atlas.

## Objectives
- Capture user interest/leads efficiently
- Store registration data in MongoDB Atlas
- Redirect users to project highlights after registration
- Build lead database for follow-up

## Key Features
1. **Registration Modal**
   - Appears on home page with "Register Interest" button
   - Clean, minimal form design
   - Form validation before submission
   - Loading and success states

2. **Form Fields**
   - Name (required)
   - Email (required, validated)
   - Phone number (required, formatted)
   - Preferred Pocket (A/B - optional dropdown)
   - Investment Budget (optional dropdown)
   - Message (optional textarea)

3. **Data Storage**
   - MongoDB Atlas database
   - Collection: `registrations`
   - Fields: name, email, phone, pocket, budget, message, createdAt

4. **Post-Registration**
   - Success message in modal
   - Auto-redirect to `/highlights` after 2 seconds
   - Or manual "View Highlights" button

5. **Error Handling**
   - Validation errors display in form
   - Network error messages
   - Duplicate email prevention

## Technical Stack
- Frontend: React, TypeScript, Framer Motion
- Backend: Next.js API Routes
- Database: MongoDB Atlas
- Driver: Native `mongodb` v6 (no Mongoose)

## Dependencies Used
- `axios` — client-side API calls
- `mongodb` v6 — native driver for Atlas connection

## Environment Variables
- `MONGODB_URI` — MongoDB Atlas connection string
- `MONGODB_DB` — Database name (`aeroland`)
- `NEXT_PUBLIC_SITE_URL` — Site base URL

## Status: COMPLETE ✓
All features implemented and verified. Build passes with zero errors (verified 2026-04-22).
