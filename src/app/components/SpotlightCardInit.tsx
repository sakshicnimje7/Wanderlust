'use client';

import { useEffect } from 'react';

export default function SpotlightCardInit() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.spotlight-card');

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

  return null;
}
