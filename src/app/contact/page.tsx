import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LiveBookingToast from '../components/LiveBookingToast';
import Icon from '../../components/ui/AppIcon';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(10,147,150,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(238,155,0,0.14),transparent_38%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Contact Us</p>
          <h1 className="mt-3 font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            Let&apos;s plan your next escape.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us your travel mood, timeline, and budget. Our team will get back with a curated plan.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <h2 className="font-display text-2xl italic text-foreground">Reach us directly</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                    <Icon name="EnvelopeIcon" size={16} variant="outline" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p>hello@wanderlust.travel</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                    <Icon name="PhoneIcon" size={16} variant="outline" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p>+1 (415) 555-0198</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                    <Icon name="MapPinIcon" size={16} variant="outline" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Office</p>
                    <p>210 Market Street, San Francisco, CA</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm lg:col-span-3">
              <h2 className="font-display text-2xl italic text-foreground">Request a callback</h2>
              <form className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
                    Travel Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us destination ideas, budget range, and preferred travel dates..."
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg hover:shadow-accent/30"
                  >
                    Send Request
                    <Icon name="ArrowRightIcon" size={16} variant="outline" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveBookingToast />
    </main>
  );
}
