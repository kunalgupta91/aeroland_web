# Registration System - Implementation

## File Structure
```
src/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts          # API endpoint for registration
│   ├── page.tsx                  # Home page (updated)
│   └── lib/
│       └── mongodb.ts            # MongoDB connection
├── components/
│   └── RegistrationModal.tsx     # Modal component
└── types/
    └── registration.ts           # TypeScript interfaces
```

## Implementation Steps

### 1. MongoDB Connection (`src/app/lib/mongodb.ts`)
```typescript
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_DB = process.env.MONGODB_DB || 'aeroland';

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}
```

### 2. API Route (`src/app/api/register/route.ts`)
- POST endpoint
- Validate form data
- Check for duplicate email
- Store in MongoDB `registrations` collection
- Return success/error response
- Add timestamps (createdAt)

### 3. Registration Modal Component (`src/components/RegistrationModal.tsx`)
- Use Framer Motion for animations
- Form fields: name, email, phone, pocket, budget, message
- Real-time validation
- Loading state during submission
- Success message with redirect option
- Error display
- Close button and backdrop dismiss

### 4. Home Page Updates (`src/app/page.tsx`)
- Import RegistrationModal component
- Add state for modal visibility
- Change "Register Interest" button to trigger modal open
- Pass close handler to modal

### 5. Environment Setup
Create `.env.local`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB=aeroland
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Form Validation
- Name: min 3 characters
- Email: valid email format, check duplicates
- Phone: 10 digits, can be formatted
- Pocket: A or B (optional)
- Budget: optional dropdown
- Message: max 500 characters (optional)

## API Response Format
```json
Success:
{
  "success": true,
  "message": "Registration successful",
  "data": { "_id": "...", "email": "..." }
}

Error:
{
  "success": false,
  "error": "Email already registered"
}
```

## Testing Checklist
- [ ] Modal opens/closes correctly
- [ ] Form validates inputs
- [ ] API endpoint accepts POST requests
- [ ] Data stores in MongoDB
- [ ] Duplicate emails rejected
- [ ] Timestamp created automatically
- [ ] Redirect to /highlights works
- [ ] Error messages display properly
- [ ] Works on mobile/desktop
- [ ] Bilingual support for labels
