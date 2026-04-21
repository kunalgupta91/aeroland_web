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
- ORM: Mongoose (optional) or native driver

## Dependencies Required
- axios or fetch (for API calls)
- mongoose or mongodb package
- nodemailer (optional, for confirmation emails)

## Environment Variables
- `MONGODB_URI` - MongoDB Atlas connection string
- `MONGODB_DB` - Database name
- `NEXT_PUBLIC_API_URL` - API base URL (for Vercel)
