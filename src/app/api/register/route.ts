import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import { RegistrationData, RegistrationResponse } from '@/types/registration';

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

function validateName(name: string): boolean {
  return name.trim().length >= 3;
}

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationData = await request.json();

    // Validate required fields
    if (!validateName(body.name)) {
      return NextResponse.json(
        { success: false, error: 'Name must be at least 3 characters' },
        { status: 400 }
      );
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!validatePhone(body.phone)) {
      return NextResponse.json(
        { success: false, error: 'Phone number must be 10 digits' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    if (!db) {
      throw new Error('Database connection failed');
    }

    const collection = db.collection('registrations');

    // Check for duplicate email
    const existingUser = await collection.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create registration document
    const registrationData: RegistrationData = {
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone.replace(/\D/g, ''),
      pocket: body.pocket || undefined,
      budget: body.budget || undefined,
      message: body.message ? body.message.trim() : undefined,
      createdAt: new Date(),
    };

    // Insert into database
    const result = await collection.insertOne(registrationData);

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful! Redirecting to highlights...',
        data: {
          ...registrationData,
          _id: result.insertedId.toString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Use POST method to register' },
    { status: 405 }
  );
}
