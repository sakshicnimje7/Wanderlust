'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../components/ui/AppIcon';

const notifications = [
  { destination: 'Bali, Indonesia', count: 3, time: '2 min ago' },
  { destination: 'Santorini, Greece', count: 7, time: 'just now' },
  { destination: 'Maldives', count: 2, time: '5 min ago' },
  { destination: 'Tokyo, Japan', count: 5, time: '1 min ago' },
  { destination: 'Patagonia, Chile', count: 4, time: 'just now' },
];

export default function LiveBookingToast() {
  const [current, setCurrent] = useState<(typeof notifications)[number] | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showToast = () => {
      setCurrent(notifications[index % notifications.length]);
      setIndex((prev) => prev + 1);
      setTimeout(() => setCurrent(null), 4500);
    };

    const timer = setTimeout(showToast, 3000);
    const interval = setInterval(showToast, 10000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="fixed bottom-6 left-4 z-50 pointer-events-none">
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-2xl px-4 py-3.5 shadow-xl shadow-primary/10 flex items-center gap-3 max-w-xs pointer-events-auto"
          >
            <div className="relative flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="EyeIcon" size={18} variant="outline" className="text-primary" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-card animate-pulse" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground leading-tight">
                {current?.count} people viewing
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {current?.destination} · {current?.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}