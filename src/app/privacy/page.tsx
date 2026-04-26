export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 pb-14 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-7 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Wanderlust Policy</p>
        <h1 className="font-display text-4xl font-light text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          We collect only the information needed to process bookings and improve your trip planning experience.
          Data is never sold to third parties. Payment and identity details are processed through secure providers.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          For policy updates or data requests, contact support at privacy@wanderlust.example.
        </p>
      </div>
    </main>
  );
}
