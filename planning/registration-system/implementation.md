# Registration System - Implementation

> **How to use this file:** Each section maps 1:1 to a source file. Edit any detail here and ask Claude to "update the website to match implementation.md". Include the section name so Claude knows which file to touch.

---

## File Map
| Purpose | File |
|---------|------|
| MongoDB connection | `src/app/lib/mongodb.ts` |
| Registration API endpoint | `src/app/api/register/route.ts` |
| Modal UI component | `src/components/RegistrationModal.tsx` |
| TypeScript interfaces | `src/types/registration.ts` |
| Home page (modal trigger) | `src/app/page.tsx` |

---

## `src/app/lib/mongodb.ts` — MongoDB Connection
- Uses native `mongodb` v6 driver
- Caches `MongoClient` across requests (connection pooling for serverless)
- Throws `Error: Please define the MONGODB_URI environment variable` if env var missing
- Exported function: `connectToDatabase()` → returns `{ client, db }`

```typescript
// Pattern used — do not change without updating this file
let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}
```

---

## `src/app/api/register/route.ts` — API Endpoint
- Method: `POST`
- Server-side validation:
  - `name`: min 3 characters
  - `email`: regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - `phone`: regex `/^\d{10}$/`
- Duplicate email check: queries `registrations` collection before insert
- Inserts document with `createdAt: new Date()`
- HTTP status codes: `201` success, `400` validation, `409` duplicate, `500` DB error

---

## `src/components/RegistrationModal.tsx` — Modal UI

### State
| State variable | Type | Purpose |
|---------------|------|---------|
| `isLoading` | boolean | Disables form + shows "Registering..." on button |
| `isSuccess` | boolean | Switches form to success screen |
| `error` | string \| null | Shows global API error banner |
| `fieldErrors` | `{ email?, phone? }` | Shows inline error under each field |
| `formData` | object | Controlled form values |

### Validation (client-side)
```typescript
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^[6-9]\d{9}$/.test(phone.replace(/\s|-/g, ''));
```
- Fires on each keystroke (`handleInputChange`) and on submit
- Invalid field: red border (`border-red-400 focus:ring-red-400`) + red error text below
- Valid field: green border (`border-gray-300 focus:ring-green-500`)

### Success screen
- Shows checkmark, "Registration Successful!" heading
- Message: `Thank you for your interest. Redirecting to About...`
- After `2000ms`: calls `onClose()` then `router.push('/about')`

### Key classes
| Element | Tailwind classes |
|---------|-----------------|
| Modal header | `gradient-green p-6 text-white` |
| Input (valid) | `border-gray-300 focus:ring-green-500` |
| Input (invalid) | `border-red-400 focus:ring-red-400` |
| Field error text | `text-red-500 text-xs mt-1` |
| Submit button | `gradient-green text-white py-3 rounded-lg font-bold` |
| Global error banner | `p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm` |

---

## `src/types/registration.ts` — TypeScript Interfaces
```typescript
interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  pocket?: 'A' | 'B';
  budget?: string;
  message?: string;
  createdAt?: Date;
}
```
> To add a new form field: add it here first, then add to `formData` state, the form JSX, and the API route.

---

## `src/app/page.tsx` — Home Page Modal Trigger
- State: `const [isModalOpen, setIsModalOpen] = useState(false)`
- Button `onClick`: `setIsModalOpen(true)`
- Component: `<RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />`

---

## Deployment
| Environment | Config |
|-------------|--------|
| Local | `.env.local` with `MONGODB_URI` and `MONGODB_DB` |
| Production (Vercel) | Set `MONGODB_URI` and `MONGODB_DB` in Vercel Dashboard → Settings → Environment Variables |
| Domain | `aeroland.co.in` → A record pointing to `76.76.21.21` (Vercel) |

---

## Testing Checklist
- [x] Modal opens on "Register Interest" button click
- [x] Modal closes on backdrop click and ✕ button
- [x] Email shows red border + error on invalid format
- [x] Phone shows red border + error if not 10-digit Indian mobile
- [x] Submit blocked if email or phone invalid
- [x] API stores data in MongoDB `registrations` collection
- [x] Duplicate email returns error message in form
- [x] Success screen shows after valid submission
- [x] Auto-redirects to `/about` after 2 seconds
- [x] Works on mobile and desktop
- [x] Build passes: `npm run build` zero errors

---

## Build Verification
Last verified: 2026-04-22. `npm run build` — zero TypeScript errors, zero lint errors. All 11 pages compile. `/api/register` confirmed dynamic (server-rendered on demand).
