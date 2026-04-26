'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/ui/AppIcon';

type TravelIntelItem = {
  city: string;
  country: string;
  weather: string;
  tempC: number;
  currencyPair: string;
  rate: string;
  updatedAt: string;
};

type TravelIntelResponse = {
  source: string;
  items: TravelIntelItem[];
};

export default function TravelIntelPanel() {
  const [data, setData] = useState<TravelIntelResponse | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchIntel = async () => {
      try {
        const response = await fetch('/api/travel-intel', { cache: 'no-store' });
        if (!response.ok) return;
        const json = (await response.json()) as TravelIntelResponse;
        if (isMounted) setData(json);
      } catch {
        // Keep UI stable with static placeholders if API is unreachable.
      }
    };

    void fetchIntel();
    const interval = setInterval(fetchIntel, 45_000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const items =
    data?.items ??
    [
      {
        city: 'Bali',
        country: 'Indonesia',
        weather: 'Partly Cloudy',
        tempC: 28,
        currencyPair: 'USD/IDR',
        rate: '15,800',
        updatedAt: 'placeholder',
      },
      {
        city: 'Santorini',
        country: 'Greece',
        weather: 'Sunny',
        tempC: 23,
        currencyPair: 'USD/EUR',
        rate: '0.93',
        updatedAt: 'placeholder',
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        weather: 'Clear',
        tempC: 19,
        currencyPair: 'USD/JPY',
        rate: '154',
        updatedAt: 'placeholder',
      },
    ];

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Travel Intel
            </p>
            <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
              Currency & Weather at a glance
            </h2>
          </div>
          <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            {data?.source ?? 'Placeholder API'}
          </span>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={`${item.city}-${item.currencyPair}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="spotlight-card rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-2xl font-light text-foreground">{item.city}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.country}</p>
                </div>
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Icon name="CloudIcon" size={18} variant="outline" />
                </div>
              </div>

              <div className="mb-3 flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                <span className="text-sm font-medium text-foreground">{item.weather}</span>
                <span className="text-sm font-semibold text-primary">{item.tempC}°C</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon name="CurrencyDollarIcon" size={14} variant="outline" />
                  {item.currencyPair}
                </span>
                <span className="text-sm font-semibold text-foreground">{item.rate}</span>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">Updated: {item.updatedAt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
