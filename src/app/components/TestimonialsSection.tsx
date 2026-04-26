'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

const testimonials = [
{
  id: 1,
  name: 'Priya Mehta',
  role: 'UX Designer, San Francisco',
  trip: 'Bali, 7 days',
  quote:
  '"Wanderlust found us a villa in Ubud that wasn\'t on any travel blog. Our guide knew every local warung. I\'ve been recommending them to everyone I know."',
  rating: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1985c262f-1763294244026.png",
  alt: 'Young woman with warm smile, professional headshot, neutral background',
  dot: '#0A9396'
},
{
  id: 2,
  name: 'Marcus Okafor',
  role: 'Software Engineer, Austin',
  trip: 'Patagonia, 10 days',
  quote:
  '"The Patagonia trek was flawlessly organized — permits, gear rental, lodge bookings. I just showed up and hiked. Worth every cent of the $3,499."',
  rating: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1651cfc0b-1763295052209.png",
  alt: 'Professional man with confident smile, neutral light background',
  dot: '#005F73'
},
{
  id: 3,
  name: 'Elena Vasquez',
  role: 'Architect, New York',
  trip: 'Santorini, 6 days',
  quote:
  '"The cave suite they booked had a private plunge pool overlooking the caldera. I\'ve traveled extensively — this was genuinely the best trip of my life."',
  rating: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c861163a-1763293703962.png",
  alt: 'Professional woman with elegant look, bright natural light background',
  dot: '#EE9B00'
}];


export default function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>('.spotlight-card');
    if (!cards) return;
    const handleMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14">
          
          <div className="inline-flex items-center gap-2 mb-4 border border-white/15 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
            <Icon name="StarIcon" size={14} variant="solid" className="text-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-white/70 font-medium">
              Traveler Stories
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight">
            Trusted by <span className="text-white/40 not-italic">Real Travelers</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) =>
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="spotlight-card group bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col justify-between gap-6 hover:bg-white/8 transition-colors duration-300"
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}>
            
              {/* Top: Avatar + Info */}
              <div className="flex items-start justify-between border-b border-white/8 pb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <AppImage
                    src={t.image}
                    alt={t.alt}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  
                    <div
                    className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-primary"
                    style={{ backgroundColor: t.dot }} />
                  
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) =>
                <Icon key={`${t.id}-star-${idx}`} name="StarIcon" size={12} variant="solid" className="text-accent" />
                )}
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl font-light leading-snug text-white/80 font-display italic">
                {t.quote}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <Icon name="MapPinIcon" size={14} variant="solid" className="text-accent" />
                  <span className="text-xs text-white/50">{t.trip}</span>
                </div>
                <span className="text-xs font-mono text-white/25">0{t.id}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}