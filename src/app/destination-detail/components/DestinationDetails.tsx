'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';
import { allDestinations } from '../../../data/destinations';

const destinationCopyById: Record<string, { description: string; highlights: string[]; humidity: string; gallery: Array<{ src: string; alt: string }> }> = {
  bali: {
    description:
      'Bali is a living postcard where rice terraces, volcanic peaks, spiritual temples, and warm Indian Ocean beaches create one of the world\'s most complete travel experiences.',
    highlights: ['Ubud Rice Terraces', 'Tirta Empul Temple', 'Mount Batur Sunrise', 'Seminyak Beach', 'Sacred Monkey Forest'],
    humidity: '78%',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1694152490825-f48bde967113',
        alt: 'Bali terraced rice fields bathed in warm afternoon sunlight, vivid green, bright airy sky',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12a7f316b-1773112584664.png',
        alt: 'Balinese temple water feature at golden hour, bright warm lighting, lush tropical surroundings',
      },
      {
        src: 'https://images.unsplash.com/photo-1589132185378-614524c0c3ca',
        alt: 'Bali beach sunset with silhouetted palm trees, warm golden tones, bright open sky',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_14c49e573-1766491080138.png',
        alt: 'Traditional Balinese offering ceremony, warm natural light, vibrant colorful flowers',
      },
      {
        src: 'https://images.unsplash.com/photo-1544620463-76ddc1e5d416',
        alt: 'Luxury infinity pool in Bali overlooking jungle valley, bright daylight, lush green setting',
      },
    ],
  },
};

const moodGalleryByType: Record<string, Array<{ src: string; alt: string }>> = {
  Tropical: [
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', alt: 'Tropical shoreline with bright blue sea and white waves in daylight' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', alt: 'Palm-lined tropical path with bright sunlight filtering through leaves' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Lush green tropical mountain valley under bright sky' },
    { src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206', alt: 'Sunny tropical beach with clear water and warm golden light' },
    { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e', alt: 'Dense tropical rainforest canopy with light rays and mist' },
  ],
  Adventure: [
    { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', alt: 'Dramatic mountain ridge under bright high-altitude sky' },
    { src: 'https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd', alt: 'Glacial lake and rugged peaks with crisp daylight' },
    { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa', alt: 'Wide valley trail through mountains in bright afternoon light' },
    { src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0', alt: 'Rocky alpine terrain with dramatic clouds and open views' },
    { src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b', alt: 'Expansive wilderness landscape with steep cliffs and blue sky' },
  ],
  Relaxation: [
    { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21', alt: 'Calm sunset over sea with soft warm light and gentle waves' },
    { src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda', alt: 'Quiet coastal village at dusk with pastel sky tones' },
    { src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', alt: 'Serene nature retreat with soft light and calm atmosphere' },
    { src: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4', alt: 'Peaceful hillside homes under clear evening sky' },
    { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', alt: 'Gentle coastline with tranquil water and warm daylight' },
  ],
  'Budget-Friendly': [
    { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000', alt: 'Lively city street with tram and bright daytime atmosphere' },
    { src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef', alt: 'Traditional architecture with vivid colors and clear sky' },
    { src: 'https://images.unsplash.com/photo-1471623432079-b009d30b6729', alt: 'Historic old-town street scene in bright natural light' },
    { src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a', alt: 'Compact urban district with local food markets and sunny weather' },
    { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156', alt: 'Affordable travel cityscape with colorful buildings and open square' },
  ],
};

const itineraryDays = [
{
  day: 1,
  title: 'Arrival & Ubud Exploration',
  activities: [
  { name: 'Airport pickup & hotel check-in', duration: '2h', type: 'Transfer' },
  { name: 'Campuhan Ridge Walk at sunset', duration: '1.5h', type: 'Nature' },
  { name: 'Welcome dinner at Locavore', duration: '2h', type: 'Dining' }]

},
{
  day: 2,
  title: 'Temple Circuit & Rice Terraces',
  activities: [
  { name: 'Tirta Empul purification ritual', duration: '2h', type: 'Culture' },
  { name: 'Tegallalang Rice Terraces', duration: '2h', type: 'Nature' },
  { name: 'Goa Gajah Elephant Cave', duration: '1h', type: 'History' }]

},
{
  day: 3,
  title: 'Mount Batur Sunrise Trek',
  activities: [
  { name: 'Pre-dawn summit hike (1717m)', duration: '4h', type: 'Adventure' },
  { name: 'Volcanic hot springs soak', duration: '1.5h', type: 'Wellness' },
  { name: 'Kintamani village craft tour', duration: '2h', type: 'Culture' }]

},
{
  day: 4,
  title: 'Seminyak & Beach Day',
  activities: [
  { name: 'Seminyak Beach morning surf', duration: '2h', type: 'Adventure' },
  { name: 'Potato Head beach club lunch', duration: '2h', type: 'Dining' },
  { name: 'Spa treatment at COMO Shambhala', duration: '3h', type: 'Wellness' }]

}];


const activityColors: Record<string, string> = {
  Transfer: '#94B8A0',
  Nature: '#0A9396',
  Dining: '#EE9B00',
  Culture: '#005F73',
  History: '#8B7355',
  Adventure: '#D97706',
  Wellness: '#7C9E8C'
};

type DestinationDetailClientProps = {
  destinationId?: string;
};

export default function DestinationDetailClient({ destinationId = 'bali' }: Readonly<DestinationDetailClientProps>) {
  const selected = allDestinations.find((item) => item.id === destinationId) ?? allDestinations[0];
  const moodGallery = moodGalleryByType[selected.mood] ?? moodGalleryByType.Adventure;
  const selectedCopy = destinationCopyById[selected.id] ?? {
    description: `${selected.name} blends ${selected.tags.join(', ').toLowerCase()} with unforgettable scenery and curated experiences.`,
    highlights: selected.tags,
    humidity: '72%',
    gallery: [
      { src: selected.image, alt: selected.alt },
      ...moodGallery.slice(0, 4),
    ],
  };

  const destination = {
    name: selected.name,
    tagline: selected.tagline,
    mood: selected.mood,
    price: selected.price,
    duration: selected.duration,
    rating: selected.rating,
    reviews: selected.reviews,
    weather: selected.weather,
    humidity: selectedCopy.humidity,
    currency: selected.currency,
    description: selectedCopy.description,
    highlights: selectedCopy.highlights,
    gallery: selectedCopy.gallery,
  };

  const relatedDestinations = allDestinations
    .filter((item) => item.id !== selected.id)
    .slice(0, 3)
    .map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      alt: item.alt,
    }));

  const [activeDay, setActiveDay] = useState(0);
  const [viewersCount] = useState(3);
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [galleryActive, setGalleryActive] = useState(0);

  return (
    <>
      {/* Cinematic Hero */}
      <div className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src={destination.gallery[galleryActive].src}
            alt={destination.gallery[galleryActive].alt}
            fill
            priority
            className="object-cover transition-all duration-700"
            sizes="100vw" />
          
          {/* Scrim for white text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/55" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>

        {/* Live viewers badge */}
        <div className="absolute top-24 right-4 sm:right-8 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-2">
            
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-white">
              {viewersCount} people viewing now
            </span>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-secondary">
                {destination.mood}
              </span>
              <div className="flex items-center gap-1">
                <Icon name="StarIcon" size={14} variant="solid" className="text-accent" />
                <span className="text-sm font-bold text-white">{destination.rating}</span>
                <span className="text-sm text-white/60">({destination.reviews} reviews)</span>
              </div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-3">
              {destination.name}
            </h1>
            <p className="text-xl text-white/70 font-light">{destination.tagline}</p>

            <div className="flex flex-wrap gap-6 mt-6">
              {[
              { icon: 'ClockIcon', label: destination.duration },
              { icon: 'CloudIcon', label: destination.weather },
              { icon: 'CurrencyDollarIcon', label: destination.currency }].
              map((item) =>
              <div key={item.label} className="flex items-center gap-2 text-white/80 text-sm">
                  <Icon name={item.icon as any} size={16} variant="outline" className="text-accent" />
                  {item.label}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Thumbnails */}
      <div className="bg-foreground py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/60">Gallery Preview — click a thumbnail to change hero photo</p>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {destination.gallery.map((img, i) =>
          <button
            key={`${img.src}-${i}`}
            onClick={() => setGalleryActive(i)}
            className={`flex-shrink-0 relative w-20 h-14 rounded-xl overflow-hidden transition-all duration-200 ${
            galleryActive === i ? 'ring-2 ring-accent scale-105' : 'opacity-60 hover:opacity-80'}`
            }
            aria-label={`Select gallery image ${i + 1}`}>
            
              <AppImage src={img.src} alt={img.alt} fill className="object-cover" sizes="80px" />
            </button>
          )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <h2 className="font-display text-2xl text-foreground font-medium italic mb-4">
                About this destination
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                {destination.description}
              </p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {destination.highlights.map((h) =>
                <div key={h} className="flex items-center gap-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-secondary flex-shrink-0" />
                    {h}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Weather & Currency Widget */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <h2 className="font-display text-2xl text-foreground font-medium italic mb-4">
                Travel Essentials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Weather Widget */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Icon name="CloudIcon" size={18} variant="outline" className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Weather</p>
                        <p className="text-sm font-medium text-foreground">Bali, Indonesia</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Live</span>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="font-display text-4xl text-foreground font-light">28°C</span>
                    <div className="mb-1">
                      <p className="text-sm text-foreground font-medium">Sunny</p>
                      <p className="text-xs text-muted-foreground">Humidity: {destination.humidity}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) =>
                    <div key={day} className="flex-1 text-center">
                        <p className="text-xs text-muted-foreground mb-1">{day}</p>
                        <p className="text-xs font-semibold text-foreground">{26 + i}°</p>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    * Live weather data placeholder — connect to OpenWeather API
                  </p>
                </div>

                {/* Currency Widget */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon name="CurrencyDollarIcon" size={18} variant="outline" className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Currency</p>
                      <p className="text-sm font-medium text-foreground">Conversion Rate</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                    { from: '1 USD', to: '15,800 IDR', flag: '🇮🇩' },
                    { from: '100 USD', to: '1,580,000 IDR', flag: '🇮🇩' },
                    { from: '500 USD', to: '7,900,000 IDR', flag: '🇮🇩' }].
                    map((rate) =>
                    <div key={rate.from} className="flex items-center justify-between bg-muted rounded-xl px-3 py-2">
                        <span className="text-sm font-semibold text-foreground">{rate.from}</span>
                        <Icon name="ArrowRightIcon" size={14} variant="outline" className="text-muted-foreground" />
                        <span className="text-sm text-foreground">
                          {rate.flag} {rate.to}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    * Live rates placeholder — connect to ExchangeRate API
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Itinerary Builder */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl text-foreground font-medium italic">
                  Day-by-Day Itinerary
                </h2>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  Drag to reorder
                </span>
              </div>

              {/* Day Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
                {itineraryDays.map((day, i) =>
                <button
                  key={day.day}
                  onClick={() => setActiveDay(i)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeDay === i ?
                  'bg-primary text-primary-foreground shadow-sm' :
                  'bg-muted text-muted-foreground hover:bg-border'}`
                  }>
                  
                    Day {day.day}
                  </button>
                )}
              </div>

              {/* Day Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-2xl p-6">
                  
                  <p className="font-display text-lg font-medium text-foreground italic mb-5">
                    {itineraryDays[activeDay].title}
                  </p>
                  <div className="space-y-3">
                    {itineraryDays[activeDay].activities.map((activity, j) =>
                    <motion.div
                      key={activity.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.08 }}
                      className="flex items-center gap-3 p-3.5 bg-muted rounded-xl group cursor-grab active:cursor-grabbing hover:bg-border transition-colors">
                      
                        <Icon name="Bars2Icon" size={16} variant="outline" className="text-muted-foreground flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{activity.name}</p>
                          <p className="text-xs text-muted-foreground">{activity.duration}</p>
                        </div>
                        <span
                        className="flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: activityColors[activity.type] ?? '#005F73' }}>
                        
                          {activity.type}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Photo Gallery Bento */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <h2 className="font-display text-2xl text-foreground font-medium italic mb-5">
                Photo Gallery
              </h2>
              {/* BENTO AUDIT:
                    Array has 5 images: [img0, img1, img2, img3, img4]
                    Row 1: [col-1-2: img0 cs-2 rs-2] [col-3: img1 cs-1] [col-4: img2 cs-1]
                    Row 2: [col-1-2: img0 cont]       [col-3: img3 cs-1] [col-4: img4 cs-1]
                    Placed 5/5 ✓ */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto">
                {/* img0 — col-span-2, row-span-2 */}
                <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[320px] group cursor-pointer">
                  <AppImage
                    src={destination.gallery[0].src}
                    alt={destination.gallery[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw" />
                  
                </div>
                {/* img1–img4 */}
                {destination.gallery.slice(1).map((img, i) =>
                <div key={`${img.src}-${i}`} className="relative rounded-2xl overflow-hidden min-h-[140px] md:min-h-[153px] group cursor-pointer">
                    <AppImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw" />
                  
                  </div>
                )}
              </div>
            </motion.div>

            {/* Traveler Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <h2 className="font-display text-2xl text-foreground font-medium italic mb-5">
                Traveler Reviews
              </h2>
              <div className="space-y-4">
                {[
                {
                  name: 'Priya Mehta',
                  date: 'March 2026',
                  rating: 5,
                  comment: 'The villa in Ubud was beyond anything I expected. Every detail was perfect — from the morning yoga session overlooking the rice terraces to the private temple ceremony.',
                  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18dcf7862-1772562312913.png",
                  avatarAlt: 'Young professional woman with warm smile, neutral background'
                },
                {
                  name: 'James Thornton',
                  date: 'February 2026',
                  rating: 5,
                  comment: 'Mount Batur at sunrise was a life-changing experience. The guide knew every secret trail. Worth every dollar of the trip cost.',
                  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13881563a-1763292584866.png",
                  avatarAlt: 'Professional man with friendly expression, bright natural light background'
                },
                {
                  name: 'Amara Osei',
                  date: 'January 2026',
                  rating: 5,
                  comment: 'Wanderlust handled everything flawlessly. The cooking class was the highlight — I\'ve been making nasi goreng every week since I got home.',
                  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1254ae28e-1775254336764.png",
                  avatarAlt: 'Confident woman with bright smile, warm natural light background'
                }].
                map((review, i) =>
                <div key={review.name} className="bg-card border border-border rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <AppImage
                        src={review.avatar}
                        alt={review.avatarAlt}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-xl object-cover" />
                      
                        <div>
                          <p className="text-sm font-semibold text-foreground">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, idx) =>
                      <Icon key={`${review.name}-star-${idx}`} name="StarIcon" size={12} variant="solid" className="text-accent" />
                      )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light italic">
                      "{review.comment}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Related Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <h2 className="font-display text-2xl text-foreground font-medium italic mb-5">
                You Might Also Love
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedDestinations.map((rel, i) =>
                <Link
                  key={rel.name}
                  href={`/destination-detail?dest=${rel.id}`}
                  className="group relative rounded-2xl overflow-hidden block h-44 spotlight-card">
                  
                    <AppImage
                    src={rel.image}
                    alt={rel.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 33vw" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-display text-base text-white font-light">{rel.name}</p>
                      <p className="text-xs text-accent font-bold mt-0.5">{rel.price}</p>
                    </div>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">

              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-card border border-border rounded-3xl p-6 shadow-lg shadow-primary/8">
                
                {/* Price */}
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <p className="font-display text-4xl text-primary font-light">{destination.price}</p>
                    <span className="text-xs text-muted-foreground">per person · {destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="StarIcon" size={14} variant="solid" className="text-accent" />
                    <span className="text-sm font-bold text-foreground">{destination.rating}</span>
                  </div>
                </div>

                {/* Live viewers */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted rounded-xl px-3 py-2.5 mb-5">
                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
                  <span>
                    <strong className="text-foreground">{viewersCount} people</strong> are looking at this trip right now
                  </span>
                </div>

                {/* Date */}
                <div className="mb-4">
                  <label htmlFor="departure-date" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                    Departure Date
                  </label>
                  <input
                    id="departure-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary transition-all" />
                  
                </div>

                {/* Travelers */}
                <div className="mb-6">
                  <label htmlFor="travelers-count" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                    Travelers
                  </label>
                  <div id="travelers-count" className="flex items-center gap-3 bg-muted border border-border rounded-xl px-4 py-2">
                    <button
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:bg-border transition-colors">
                      
                      <Icon name="MinusIcon" size={14} variant="outline" />
                    </button>
                    <span className="flex-1 text-center text-sm font-semibold text-foreground">
                      {travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}
                    </span>
                    <button
                      onClick={() => setTravelers(Math.min(12, travelers + 1))}
                      className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:bg-border transition-colors">
                      
                      <Icon name="PlusIcon" size={14} variant="outline" />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between mb-5 pt-4 border-t border-border">
                  <span className="text-sm font-medium text-foreground">Total estimate</span>
                  <span className="font-display text-xl text-primary font-medium">
                    ${(1299 * travelers).toLocaleString()}
                  </span>
                </div>

                <button className="w-full bg-accent text-accent-foreground py-4 rounded-2xl font-bold text-sm hover:bg-amber-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2 group">
                  Book This Trip
                  <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                  Free cancellation up to 48 hours before departure
                </p>
              </motion.div>

              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="bg-card border border-border rounded-3xl p-5">
                
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  What's Included
                </p>
                <div className="space-y-3">
                  {[
                  { icon: 'HomeIcon', label: 'Luxury villa accommodation' },
                  { icon: 'TruckIcon', label: 'All airport transfers' },
                  { icon: 'UserGroupIcon', label: 'Local expert guide' },
                  { icon: 'ShieldCheckIcon', label: 'Travel insurance' },
                  { icon: 'PhoneIcon', label: '24/7 concierge support' }].
                  map((item) =>
                  <div key={item.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={15} variant="outline" className="text-secondary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{item.label}</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Share / Save */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex gap-3">
                
                <button className="flex-1 flex items-center justify-center gap-2 bg-muted border border-border rounded-2xl py-3 text-sm font-medium text-foreground hover:bg-border transition-colors">
                  <Icon name="HeartIcon" size={16} variant="outline" className="text-primary" />
                  Save Trip
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-muted border border-border rounded-2xl py-3 text-sm font-medium text-foreground hover:bg-border transition-colors">
                  <Icon name="ShareIcon" size={16} variant="outline" className="text-primary" />
                  Share
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>);

}