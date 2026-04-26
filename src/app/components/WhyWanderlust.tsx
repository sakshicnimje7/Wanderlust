'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Icon from '../../components/ui/AppIcon';
import AppImage from '../../components/ui/AppImage';

const reasons = [
{
  icon: 'ShieldCheckIcon',
  title: 'Fully Insured Journeys',
  description: '24/7 emergency support and comprehensive travel insurance included with every booking.'
},
{
  icon: 'MapPinIcon',
  title: 'Local Expert Guides',
  description: 'Every destination curated with on-the-ground local experts who live and breathe their region.'
},
{
  icon: 'CreditCardIcon',
  title: 'Price Match Promise',
  description: 'Find it cheaper elsewhere? We match it — and add a complimentary airport transfer.'
},
{
  icon: 'CalendarDaysIcon',
  title: 'Flexible Booking',
  description: 'Change or cancel up to 48 hours before departure. Your plans, your rules.'
}];


const stats = [
{ value: '28K+', label: 'Travelers served' },
{ value: '140+', label: 'Destinations' },
{ value: '4.9', label: 'Average rating' },
{ value: '12yr', label: 'In business' }];


export default function WhyWanderlust() {
  return (
    <section id="about" className="bg-muted py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Text Content — 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full">
            
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                  Why Wanderlust
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-light leading-tight mb-6">
                Travel that feels like{' '}
                <span className="italic text-primary">coming home</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10 max-w-sm">
                We've spent 12 years perfecting the art of curated travel — so every moment of your journey is exactly as it should be.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) =>
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group">
                
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon name={reason.icon as any} size={20} variant="outline" className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-medium text-foreground mb-1 italic">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              )}
            </div>

            <div className="mt-10">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
                
                Start Planning
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Image + Stats Card — 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative flex flex-col gap-6 h-full">
            
            {/* Main Image */}
            <div className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden group">
              <AppImage
                src="https://images.unsplash.com/photo-1593168167938-0dd7195966d3"
                alt="Joyful couple with backpacks exploring a vibrant sunlit market street, bright warm daytime setting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Stats Card — fills right column height */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                By the numbers
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) =>
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center">
                  
                    <span className="block font-display text-3xl font-light text-primary">{stat.value}</span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>);

}