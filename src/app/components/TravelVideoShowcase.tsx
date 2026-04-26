'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../../components/ui/AppIcon';
import AppImage from '../../components/ui/AppImage';

const galleryImages = [
  {
    name: 'Bora Bora',
    place: 'French Polynesia',
    details: 'Lagoon stays, private beaches, and calm sunset cruises.',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    alt: 'Relaxing beach hammock scene with tropical blue water and warm daylight',
    height: 'h-44 md:h-52',
  },
  {
    name: 'Torres Trail',
    place: 'Chile, Patagonia',
    details: 'Alpine trekking routes with cinematic mountain panoramas.',
    src: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81',
    alt: 'Traveler with backpack hiking on a scenic cliff trail in bright weather',
    height: 'h-56 md:h-64',
  },
  {
    name: 'Phi Phi Bay',
    place: 'Krabi, Thailand',
    details: 'Island-hopping, emerald waters, and long-tail boat rides.',
    src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21',
    alt: 'Person seated in a wooden boat facing emerald water and limestone cliffs',
    height: 'h-52 md:h-60',
  },
  {
    name: 'Milford Sound',
    place: 'South Island, New Zealand',
    details: 'Fjord kayaking through misty cliffs and waterfall corridors.',
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    alt: 'Kayak journey through dramatic fjord waters beneath towering mountain walls',
    height: 'h-56 md:h-64',
  },
  {
    name: 'Azure Coast',
    place: 'Cyclades, Greece',
    details: 'Sunlit coves, sailing days, and laid-back beach towns.',
    src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000',
    alt: 'Seagulls gliding above vivid turquoise sea and gentle ocean waves',
    height: 'h-44 md:h-52',
  },
  {
    name: 'Summit Ridge',
    place: 'Rocky Mountains, Canada',
    details: 'Scenic viewpoints, trail camps, and golden-hour mountain air.',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    alt: 'Traveler standing triumphantly on a mountain summit at sunrise',
    height: 'h-52 md:h-60',
  },
];

export default function TravelVideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = galleryImages[activeIndex];

  return (
    <section id="story" className="bg-background px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-border bg-[#F7F1E9] p-6 sm:p-8 lg:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3 py-1 text-xs font-semibold text-foreground/80">
              <Icon name="SparklesIcon" size={14} variant="solid" className="text-accent" />
              Explore world
            </div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-foreground font-light">
              Make Your{' '}
              <span className="italic text-accent">Next Journey</span>
              <br />
              Unforgettable.
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Watch a quick glimpse of how we design seamless itineraries, curated stays, and local experiences in one place.
            </p>
          </div>

          <div className="mt-8 relative overflow-hidden rounded-3xl border border-border/60 shadow-sm h-[240px] sm:h-[320px] md:h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.src}
                initial={{ opacity: 0.35, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.2, scale: 1.01 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <AppImage
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="rounded-2xl border border-white/20 bg-black/45 backdrop-blur-sm px-4 py-3 text-white max-w-md">
                <p className="text-xs uppercase tracking-[0.14em] text-white/70">{activeSlide.place}</p>
                <h3 className="font-display text-2xl leading-tight italic">{activeSlide.name}</h3>
                <p className="text-sm text-white/80 mt-1">{activeSlide.details}</p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-3 py-2 text-white backdrop-blur-sm">
                <Icon name="PlayIcon" size={14} variant="solid" />
                <span className="text-xs sm:text-sm font-medium">Auto slideshow</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl ${image.height} ${
                  activeIndex === index ? 'ring-2 ring-primary/60 ring-offset-2 ring-offset-[#F7F1E9]' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show slide for ${image.name}`}
                  className="absolute inset-0 z-10"
                />
                <AppImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-2.5">
                  <p className="text-white text-xs font-semibold leading-tight">{image.name}</p>
                  <p className="text-white/75 text-[11px] leading-tight">{image.place}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
