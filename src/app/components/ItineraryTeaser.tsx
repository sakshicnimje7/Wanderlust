'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Icon from '../../components/ui/AppIcon';

const initialDays = [
  { day: 1, title: 'Arrival & Ubud Exploration', activities: ['Airport pickup', 'Rice terrace walk', 'Sunset at Campuhan Ridge'] },
  { day: 2, title: 'Temple Circuit', activities: ['Tirta Empul purification', 'Goa Gajah elephant cave', 'Traditional cooking class'] },
  { day: 3, title: 'Mount Batur Sunrise Trek', activities: ['4AM summit hike', 'Volcanic hot springs', 'Craft village tour'] },
];

export default function ItineraryTeaser() {
  const [activeDay, setActiveDay] = useState(0);
  const [days, setDays] = useState(initialDays);
  const [dragged, setDragged] = useState<{ dayIndex: number; activityIndex: number } | null>(null);

  const onDropActivity = (targetDayIndex: number) => {
    if (!dragged) return;

    setDays((previousDays) => {
      const nextDays = previousDays.map((day) => ({ ...day, activities: [...day.activities] }));
      const sourceDay = nextDays[dragged.dayIndex];
      const [movedActivity] = sourceDay.activities.splice(dragged.activityIndex, 1);

      if (movedActivity) {
        nextDays[targetDayIndex].activities.push(movedActivity);
      }

      return nextDays;
    });

    setDragged(null);
  };

  return (
    <section id="experiences" className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-10 bg-secondary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                Itinerary Builder
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light leading-tight">
              Build your trip,{' '}
              <span className="italic text-primary">day by day</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">
              Drag activities between days, swap plans in seconds, and watch your itinerary update in real-time. No spreadsheets. No stress.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'ArrowsPointingOutIcon', label: 'Drag & drop days' },
                { icon: 'ClockIcon', label: 'Time estimates' },
                { icon: 'CurrencyDollarIcon', label: 'Live cost total' },
                { icon: 'ShareIcon', label: 'Share with friends' },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon as any} size={16} variant="outline" className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/destination-detail?dest=bali"
              className="inline-flex items-center gap-2 w-fit bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm hover:bg-amber-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Try the Builder
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </motion.div>

          {/* Right: Itinerary Preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-3xl p-6 shadow-lg shadow-primary/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-display text-lg font-medium text-foreground italic">Bali, Indonesia</p>
                <p className="text-xs text-muted-foreground">7-day sample itinerary</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                <Icon name="CurrencyDollarIcon" size={14} variant="outline" />
                <span>$1,299 total</span>
              </div>
            </div>

            {/* Day Tabs */}
            <div className="flex gap-2 mb-5 overflow-x-auto scrollbar-hide pb-1">
              {days.map((day, i) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(i)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeDay === i
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  Day {day.day}
                </button>
              ))}
            </div>

            {/* Day Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => onDropActivity(activeDay)}
                className="rounded-xl border border-border/60 p-2"
              >
                <p className="font-display text-base font-medium text-foreground italic mb-4">
                  {days[activeDay].title}
                </p>
                <div className="space-y-2.5">
                  {days[activeDay].activities.map((activity, j) => (
                    <motion.div
                      key={`${activity}-${j}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.07 }}
                      draggable
                      onDragStart={() => setDragged({ dayIndex: activeDay, activityIndex: j })}
                      className="flex items-center gap-3 p-3 bg-muted rounded-xl group cursor-grab active:cursor-grabbing hover:bg-border transition-colors"
                    >
                      <Icon name="Bars2Icon" size={16} variant="outline" className="text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{activity}</span>
                      <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-secondary ml-auto flex-shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer */}
            <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <div className="w-2 h-2 rounded-full bg-border" />
                <div className="w-2 h-2 rounded-full bg-border" />
              </div>
              <span className="text-xs text-muted-foreground">Drag activities into another day tab to replan</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}