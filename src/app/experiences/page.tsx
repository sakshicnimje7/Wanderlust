import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LiveBookingToast from '../components/LiveBookingToast';
import { experienceSpecs } from '../../data/experiences';

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.22),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(6,182,212,0.22),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Curated Experiences</p>
          <h1 className="mt-3 font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            Choose the feeling, we build the journey.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore premium travel styles designed around your mood. Every experience combines stays, activities,
            logistics, and local specialists into one seamless plan.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {experienceSpecs.map((item) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${item.bg} p-7 text-white shadow-xl shadow-black/20`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <h2 className="relative font-display text-3xl font-light tracking-tight">{item.title}</h2>
                <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/85">{item.description}</p>
                <Link
                  href={`/experiences/${item.slug}`}
                  className="relative mt-7 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <LiveBookingToast />
    </main>
  );
}
