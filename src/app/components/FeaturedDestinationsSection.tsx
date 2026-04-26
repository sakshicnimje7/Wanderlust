'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';
import DestinationCard from '../../components/DestinationCard';

const destinations = [
{
  id: 'bali',
  name: 'Bali, Indonesia',
  tagline: 'Island of the Gods',
  mood: 'Tropical',
  price: '$1,299',
  duration: '7 days',
  rating: 4.9,
  reviews: 342,
  image: "https://images.unsplash.com/photo-1694152490825-f48bde967113",
  alt: 'Lush terraced rice fields in Bali bathed in warm afternoon sunlight, bright green landscape, airy sky',
  featured: true
},
{
  id: 'santorini',
  name: 'Santorini, Greece',
  tagline: 'Cliffside Sunsets',
  mood: 'Relaxation',
  price: '$2,199',
  duration: '6 days',
  rating: 4.8,
  reviews: 289,
  image: "https://images.unsplash.com/photo-1662121783914-9ee843f21504",
  alt: 'Iconic white-washed Santorini buildings with blue domes overlooking Aegean Sea, bright daylight',
  featured: false
},
{
  id: 'patagonia',
  name: 'Patagonia, Chile',
  tagline: 'Edge of the Earth',
  mood: 'Adventure',
  price: '$3,499',
  duration: '10 days',
  rating: 4.9,
  reviews: 178,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_111dda823-1772161176360.png",
  alt: 'Dramatic granite peaks of Torres del Paine in Patagonia with turquoise lake, bright dramatic sky',
  featured: false
},
{
  id: 'maldives',
  name: 'Maldives',
  tagline: 'Overwater Paradise',
  mood: 'Tropical',
  price: '$4,299',
  duration: '8 days',
  rating: 5,
  reviews: 415,
  image: "https://images.unsplash.com/photo-1727805230211-4a15f84956b1",
  alt: 'Crystal-clear turquoise Maldives water with overwater villas, bright tropical sunshine, white sand',
  featured: false
},
{
  id: 'tokyo',
  name: 'Tokyo, Japan',
  tagline: 'Neon & Tradition',
  mood: 'Adventure',
  price: '$2,799',
  duration: '9 days',
  rating: 4.7,
  reviews: 521,
  image: "https://images.unsplash.com/photo-1593839154339-377e24b3ba32",
  alt: 'Tokyo cityscape at dusk with Mount Fuji in background, well-lit skyline, dramatic golden hour sky',
  featured: false
}];


const moodColors: Record<string, string> = {
  Tropical: '#0A9396',
  Relaxation: '#94B8A0',
  Adventure: '#005F73'
};

function StarRating({ rating }: { readonly rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Icon name="StarIcon" size={14} variant="solid" className="text-accent" />
      <span className="text-xs font-bold text-foreground">{rating}</span>
    </div>);

}

export default function FeaturedDestinations() {
  return (
    <section className="bg-background pt-4 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-10 bg-secondary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                Handpicked For You
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
              Featured <span className="italic text-primary">Escapes</span>
            </h2>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group">
            
            View all destinations
            <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* BENTO GRID AUDIT:
              Array: [Bali(cs-2 rs-2), Santorini, Patagonia, Maldives, Tokyo]
              Row 1: [col-1-2: Bali cs-2 rs-2] [col-3: Santorini cs-1] [col-4: Patagonia cs-1]
              Row 2: [col-1-2: Bali(cont)]      [col-3: Maldives cs-1] [col-4: Tokyo cs-1]
              Placed 5/5 cards ✓
             */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* Bali — col-span-2, row-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:row-span-2 spotlight-card group relative rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full min-h-[360px] md:min-h-[520px]">
            
            <Link href={`/destination-detail?dest=${destinations[0].id}`} className="absolute inset-0 z-10" aria-label="View Bali destination" />
            <AppImage
              src={destinations[0].image}
              alt={destinations[0].alt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">
                ✦ Editor's Pick
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col h-full justify-end">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: moodColors[destinations[0].mood] }}>
                  
                  {destinations[0].mood}
                </span>
                <StarRating rating={destinations[0].rating} />
                <span className="text-xs text-white/60">({destinations[0].reviews})</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white font-light mb-1">
                {destinations[0].name}
              </h3>
              <p className="text-white/70 text-sm mb-4">{destinations[0].tagline}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/50">From</span>
                  <span className="block text-xl font-bold text-accent">{destinations[0].price}</span>
                  <span className="text-xs text-white/50">{destinations[0].duration}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <Icon name="ArrowRightIcon" size={18} variant="outline" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Santorini */}
          {destinations.slice(1).map((dest, i) =>
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i + 1) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <DestinationCard
                href={`/destination-detail?dest=${dest.id}`}
                name={dest.name}
                mood={dest.mood}
                price={dest.price}
                duration={dest.duration}
                rating={dest.rating}
                image={dest.image}
                alt={dest.alt}
                tagline={dest.tagline}
                moodColor={moodColors[dest.mood] ?? '#005F73'}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}