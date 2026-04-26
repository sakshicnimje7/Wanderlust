import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import LiveBookingToast from '../../components/LiveBookingToast';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';
import { allDestinations, moodColors } from '../../../data/destinations';
import { experienceSpecBySlug, experienceSpecs } from '../../../data/experiences';

export function generateStaticParams() {
  return experienceSpecs.map((experience) => ({ slug: experience.slug }));
}

export default function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const spec = experienceSpecBySlug[params.slug];
  if (!spec) {
    notFound();
  }

  const destinations = allDestinations.filter((destination) => spec.moodFilters.includes(destination.mood));

  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-primary px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 hover:bg-white/20 transition"
          >
            <Icon name="ArrowLeftIcon" size={14} variant="outline" />
            Back to experiences
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Experience Collection</p>
          <h1 className="mt-3 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">{spec.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">{spec.heroCopy}</p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{destinations.length}</span> destinations for{' '}
            <span className="font-semibold text-primary">{spec.title}</span>
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/destination-detail?dest=${destination.id}`}
                className="group spotlight-card block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <AppImage
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                      style={{ backgroundColor: moodColors[destination.mood] ?? '#005F73' }}
                    >
                      {destination.mood}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h2 className="font-display text-base italic text-foreground">{destination.name}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">{destination.tagline}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {destination.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">From</span>
                      <span className="block text-lg font-bold text-primary">{destination.price}</span>
                      <span className="text-xs text-muted-foreground">{destination.duration}</span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon name="ArrowRightIcon" size={16} variant="outline" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <LiveBookingToast />
    </main>
  );
}
