'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/ui/AppIcon';

const services = [
  {
    icon: 'MapIcon',
    title: 'Custom Trip Planning',
    description: 'Personalized routes, pacing, and destination matching built around your travel mood.',
  },
  {
    icon: 'BuildingOffice2Icon',
    title: 'Stay + Transport Booking',
    description: 'Flights, hotels, airport transfers, and local mobility arranged in one coordinated plan.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Local Experience Curation',
    description: 'Authentic food tours, activity passes, and hidden-gem recommendations from local experts.',
  },
  {
    icon: 'LifebuoyIcon',
    title: 'On-Trip Support',
    description: 'Real-time assistance, itinerary updates, and backup options whenever plans change.',
  },
];

export default function TravelServicesSection() {
  return (
    <section id="services" className="bg-background px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-10 bg-secondary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                Our Services
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light leading-tight">
              Everything you need for a{' '}
              <span className="italic text-primary">smooth escape</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm md:text-base">
            From idea to return flight, Wanderlust handles the full trip lifecycle so you can focus on the experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="spotlight-card rounded-2xl border border-border bg-card p-5 md:p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={service.icon} size={20} variant="outline" className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground italic mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
