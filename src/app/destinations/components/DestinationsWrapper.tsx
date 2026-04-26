'use client';

import dynamic from 'next/dynamic';

const DestinationsClient = dynamic(
  () => import('./DestinationsClient'),
  { ssr: false }
);

export default function DestinationsWrapper() {
  return <DestinationsClient />;
}
