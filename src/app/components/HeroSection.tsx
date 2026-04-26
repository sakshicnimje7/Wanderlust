'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef?.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110 will-change-transform">
        <AppImage
          src="https://images.unsplash.com/photo-1618822996699-999c36c8b368"
          alt="Dramatic mountain peaks at golden hour with misty valleys below, deep shadow cliffs, atmospheric low-key lighting"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Scrim — dark overlay for white text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
      </div>
      {/* Atmospheric depth blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-60" />
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-16 flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/90">
            140+ Curated Destinations
          </span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-white leading-[0.88] tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
          
          The World
          <br />
          <span className="italic text-accent relative inline-block">
            Awaits You
            <svg
              className="absolute w-full -bottom-2 left-0 text-accent/50"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              aria-hidden="true">
              
              <path d="M0 8 Q 50 0 100 8" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-white/75 font-light max-w-xl leading-relaxed">
          
          Handpicked journeys matched to your mood — from tropical escapes to high-altitude adventures.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center">
          
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/40">
            
            Explore Destinations
            <Icon name="ArrowRightIcon" size={18} variant="outline" className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#story"
            className="group inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
          >
            <Icon name="PlayCircleIcon" size={20} variant="solid" className="text-accent" />
            Watch Our Story
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-8 md:gap-16 mt-4 pt-8 border-t border-white/15">
          
          {[
          { value: '140+', label: 'Destinations' },
          { value: '28K', label: 'Happy Travelers' },
          { value: '4.9★', label: 'Average Rating' }]?.
          map((stat) =>
          <div key={stat?.label} className="text-center group cursor-default">
              <span className="block font-display text-3xl md:text-4xl font-light text-white group-hover:text-accent transition-colors duration-300">
                {stat?.value}
              </span>
              <span className="block text-xs uppercase tracking-widest text-white/50 mt-1">
                {stat?.label}
              </span>
            </div>
          )}
        </motion.div>
      </div>
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20" aria-hidden="true">
          <path
            fill="#FFF9F4"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          
        </svg>
      </div>
    </section>);




}