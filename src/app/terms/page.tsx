export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-4 pb-14 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-7 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Wanderlust Terms</p>
        <h1 className="font-display text-4xl font-light text-foreground">Terms & Conditions</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Bookings are subject to destination availability, provider conditions, and cancellation windows shown at checkout.
          Travelers are responsible for visas, travel documents, and destination-specific requirements.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          By using this website you agree to these terms and our privacy policy.
        </p>
      </div>
    </main>
  );
}
