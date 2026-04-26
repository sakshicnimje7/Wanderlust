import type { DestinationSummary } from './destinations';

export type ExperienceSpec = {
  slug: string;
  title: string;
  description: string;
  cta: string;
  bg: string;
  heroCopy: string;
  moodFilters: DestinationSummary['mood'][];
};

export const experienceSpecs: ExperienceSpec[] = [
  {
    slug: 'adrenaline-trails',
    title: 'Adrenaline Trails',
    description: 'Mountain expeditions, jungle treks, and dramatic summit views for active explorers.',
    cta: 'Explore Adventure',
    bg: 'from-cyan-600 via-sky-700 to-slate-900',
    heroCopy: 'Routes for travelers who love high-altitude climbs, wild terrain, and adrenaline-heavy days.',
    moodFilters: ['Adventure'],
  },
  {
    slug: 'island-slowdowns',
    title: 'Island Slowdowns',
    description: 'Crystal-water escapes, villa mornings, and sunset rituals built for pure relaxation.',
    cta: 'Explore Tropical',
    bg: 'from-emerald-500 via-teal-600 to-cyan-800',
    heroCopy: 'Warm-water itineraries with beach stays, island hopping, and restorative downtime.',
    moodFilters: ['Tropical'],
  },
  {
    slug: 'culture-cuisine',
    title: 'Culture & Cuisine',
    description: 'City stories, local food trails, and neighborhood-led experiences at your own pace.',
    cta: 'Explore Smart Trips',
    bg: 'from-amber-500 via-orange-600 to-rose-700',
    heroCopy: 'Design your journey around local flavors, history walks, and culture-rich neighborhoods.',
    moodFilters: ['Budget-Friendly'],
  },
  {
    slug: 'wellness-retreats',
    title: 'Wellness Retreats',
    description: 'Spa sanctuaries, mindful itineraries, and oceanfront resets for balanced travel.',
    cta: 'Explore Relaxation',
    bg: 'from-violet-600 via-indigo-700 to-blue-900',
    heroCopy: 'Calm-focused escapes with spa sessions, scenic stays, and slow, restorative routines.',
    moodFilters: ['Relaxation'],
  },
];

export const experienceSpecBySlug: Record<string, ExperienceSpec> = experienceSpecs.reduce(
  (acc, spec) => {
    acc[spec.slug] = spec;
    return acc;
  },
  {} as Record<string, ExperienceSpec>
);
