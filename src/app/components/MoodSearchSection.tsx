'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Icon from '../../components/ui/AppIcon';
import AppImage from '../../components/ui/AppImage';
import SearchBar from '../../components/SearchBar';

const moods = [
{
  id: 'tropical',
  label: 'Tropical',
  icon: 'SunIcon',
  description: 'Beach paradise, crystal waters & palm-lined shores',
  color: '#0A9396',
  image: "https://images.unsplash.com/photo-1665992285362-bdf420fc9633",
  alt: 'Turquoise lagoon with overwater bungalows, bright tropical sun, white sandy beach'
},
{
  id: 'adventure',
  label: 'Adventure',
  icon: 'BoltIcon',
  description: 'Mountains, treks, adrenaline & wild landscapes',
  color: '#005F73',
  image: "https://images.unsplash.com/photo-1689689753565-3ee98e4cf3fd",
  alt: 'Hiker on dramatic rocky mountain ridge at sunrise, bright well-lit sky, golden light'
},
{
  id: 'relaxation',
  label: 'Relaxation',
  icon: 'SparklesIcon',
  description: 'Spa retreats, quiet coves & slow living',
  color: '#94B8A0',
  image: "https://images.unsplash.com/photo-1715786430795-feec6703f4dc",
  alt: 'Serene spa pool surrounded by tropical greenery, bright natural daylight, peaceful setting'
},
{
  id: 'budget',
  label: 'Budget-Friendly',
  icon: 'CurrencyDollarIcon',
  description: 'Incredible value, hidden gems & smart travel',
  color: '#EE9B00',
  image: "https://images.unsplash.com/photo-1645745958657-6a604e552968",
  alt: 'Charming European cobblestone street with colorful buildings, bright daytime, airy open setting'
}];


export default function MoodSearchSection() {
  const [activeMood, setActiveMood] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const activeMoodData = moods.find((m) => m.id === activeMood);
  const params = new URLSearchParams();
  if (searchQuery) params.set('q', searchQuery);
  if (activeMood) params.set('mood', activeMood);
  const queryString = params.toString();
  const searchHref = queryString ? `/destinations?${queryString}` : '/destinations';

  return (
    <section className="relative bg-background pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-10 bg-secondary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
              Mood-Based Discovery
            </span>
            <span className="h-px w-10 bg-secondary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-tight">
            How do you want to{' '}
            <span className="italic text-primary">feel?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Pick your travel mood and we'll match you with the perfect destination.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 max-w-2xl mx-auto">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            href={searchHref}
            actionLabel="Search"
          />
        </motion.div>

        {/* Mood Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {moods.map((mood, i) =>
          <motion.button
            key={mood.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveMood(activeMood === mood.id ? null : mood.id)}
            className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 text-left ${
            activeMood === mood.id ?
            'ring-2 ring-accent shadow-xl shadow-accent/20 scale-[1.02]' :
            'hover:scale-[1.02] hover:shadow-lg'}`
            }>
            
              <div className="relative h-48 md:h-56">
                <AppImage
                src={mood.image}
                alt={mood.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {activeMood === mood.id &&
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Icon name="CheckIcon" size={14} variant="solid" className="text-accent-foreground" />
                  </div>
              }
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={mood.icon as any} size={16} variant="solid" className="text-accent" />
                    <span className="text-sm font-bold text-white">{mood.label}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-snug">{mood.description}</p>
                </div>
              </div>
            </motion.button>
          )}
        </div>

        {/* Active Mood Result */}
        <AnimatePresence>
          {activeMoodData &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden">
            
              <div className="mt-6 p-5 bg-card border border-border rounded-2xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: activeMoodData.color + '20' }}>
                    <Icon name={activeMoodData.icon as any} size={20} variant="solid" style={{ color: activeMoodData.color }} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Showing <span className="text-primary">{activeMoodData.label}</span> destinations
                    </p>
                    <p className="text-xs text-muted-foreground">{activeMoodData.description}</p>
                  </div>
                </div>
                <Link
                href={`/destinations?mood=${activeMoodData.id}`}
                className="flex-shrink-0 inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold hover:bg-secondary transition-colors">
                
                  View All
                  <Icon name="ArrowRightIcon" size={14} variant="outline" />
                </Link>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}