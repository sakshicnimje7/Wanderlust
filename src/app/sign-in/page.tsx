"use client";

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as { ok: boolean; message: string };
      if (!response.ok || !data.ok) {
        setErrorMessage(data.message || 'Unable to sign in right now.');
        return;
      }

      setSuccessMessage(data.message || 'Signed in successfully. Redirecting...');
      router.push('/destinations');
    } catch {
      setErrorMessage('Network issue. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleForgotPassword() {
    setErrorMessage('');
    setSuccessMessage('');
    setIsResetting(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { ok: boolean; message: string };
      if (!response.ok || !data.ok) {
        setErrorMessage(data.message || 'Unable to process reset request.');
        return;
      }

      setSuccessMessage(data.message || 'Reset link sent.');
    } catch {
      setErrorMessage('Network issue. Please try again.');
    } finally {
      setIsResetting(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-4 pt-28 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-7 shadow-lg shadow-primary/10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Account Access</p>
        <h1 className="font-display text-4xl font-light text-foreground">Sign In</h1>
        <p className="mt-2 text-sm text-muted-foreground">Welcome back. Sign in to continue planning your next trip.</p>

        <form className="mt-7 space-y-4" onSubmit={handleSignIn} noValidate>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          {errorMessage ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p>
          ) : null}
          {successMessage ? (
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{successMessage}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-2xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg hover:shadow-accent/30"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Back to home
          </Link>
          <button
            type="button"
            onClick={handleForgotPassword}
            disabled={isResetting}
            className="hover:text-foreground transition-colors"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </main>
  );
}
