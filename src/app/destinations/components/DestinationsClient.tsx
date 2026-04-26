'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';
import { allDestinations, moodColors } from '../../../data/destinations';
const moods = ['All', 'Tropical', 'Adventure', 'Relaxation', 'Budget-Friendly'];

export default function DestinationsClient() {
  const [activeMood, setActiveMood] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating');

  const filtered = useMemo(() => {
    let list = allDestinations;
    if (activeMood !== 'All') list = list.filter((d) => d.mood === activeMood);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (d) => d.name.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q) || d.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return [...list].sort((a, b) =>
    sortBy === 'price' ? a.priceNum - b.priceNum : b.rating - a.rating
    );
  }, [activeMood, search, sortBy]);

  return (
    <>
      {/* Page Hero */}
      <div className="relative bg-primary pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              All Destinations
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-4">
              Find Your{' '}
              <span className="italic text-white/60">Next Adventure</span>
            </h1>
            <p className="text-white/70 text-lg font-light max-w-xl">
              {allDestinations.length} handpicked destinations. Filter by mood, sort by price, and discover your perfect escape.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10" aria-hidden="true">
            <path fill="#FFF9F4" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Mood Tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
            {moods.map((mood) =>
            <button
              key={mood}
              onClick={() => setActiveMood(mood)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeMood === mood ?
              'bg-primary text-primary-foreground shadow-sm' :
              'bg-muted text-muted-foreground hover:bg-border'}`
              }>
              
                {mood}
              </button>
            )}
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            {/* Search */}
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2 flex-1 sm:w-52">
              <Icon name="MagnifyingGlassIcon" size={16} variant="outline" className="text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" />
              
            </div>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'rating')}
              className="bg-card border border-border rounded-xl px-3 py-2 text-xs font-medium text-foreground outline-none cursor-pointer">
              
              <option value="rating">Top Rated</option>
              <option value="price">Price: Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm text-muted-foreground mb-6">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> destinations
          {activeMood !== 'All' &&
          <span> · <span className="font-semibold text-primary">{activeMood}</span></span>
          }
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMood + search + sortBy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          
          {filtered.map((dest, i) =>
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
              
                <Link href={`/destination-detail?dest=${dest.id}`} className="block group spotlight-card bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <AppImage
                  src={dest.image}
                  alt={dest.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: moodColors[dest.mood] ?? '#005F73' }}>
                      
                        {dest.mood}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
                      <Icon name="CloudIcon" size={12} variant="outline" />
                      {dest.weather}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-display text-base font-medium text-foreground italic">{dest.name}</h3>
                        <p className="text-xs text-muted-foreground">{dest.tagline}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Icon name="StarIcon" size={12} variant="solid" className="text-accent" />
                        <span className="text-xs font-bold text-foreground">{dest.rating}</span>
                        <span className="text-xs text-muted-foreground">({dest.reviews})</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap mb-3">
                      {dest.tags.map((tag) =>
                  <span key={tag} className="px-2 py-0.5 bg-muted rounded-full text-xs text-muted-foreground">
                          {tag}
                        </span>
                  )}
                    </div>

                    {/* Currency */}
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted rounded-lg px-2.5 py-1.5 mb-3">
                      <Icon name="CurrencyDollarIcon" size={12} variant="outline" />
                      <span className="truncate">{dest.currency}</span>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">From</span>
                        <span className="block text-lg font-bold text-primary">{dest.price}</span>
                        <span className="text-xs text-muted-foreground">{dest.duration}</span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon name="ArrowRightIcon" size={16} variant="outline" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
          )}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 &&
        <div className="text-center py-20">
            <Icon name="MagnifyingGlassIcon" size={40} variant="outline" className="text-muted-foreground mx-auto mb-4" />
            <p className="font-display text-xl text-foreground italic">No destinations found</p>
            <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters</p>
          </div>
        }
      </div>
    </>);

}