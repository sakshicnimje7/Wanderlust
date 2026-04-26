import { NextResponse } from 'next/server';

interface SignInPayload {
  email?: string;
  password?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SignInPayload;
    const email = body.email?.trim() ?? '';
    const password = body.password ?? '';

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, message: 'Email and password are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { ok: false, message: 'Password must be at least 6 characters.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: 'Signed in successfully.',
      user: { email },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
