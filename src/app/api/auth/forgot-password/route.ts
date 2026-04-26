import { NextResponse } from 'next/server';

interface ForgotPasswordPayload {
  email?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ForgotPasswordPayload;
    const email = body.email?.trim() ?? '';

    if (!email) {
      return NextResponse.json(
        { ok: false, message: 'Please enter your email first.' },
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

    return NextResponse.json({
      ok: true,
      message: 'Password reset link sent. Please check your inbox.',
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
