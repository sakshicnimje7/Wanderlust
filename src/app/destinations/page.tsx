import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DestinationsWrapper from './components/DestinationsWrapper';
import LiveBookingToast from '../components/LiveBookingToast';
import SpotlightCardInit from '../components/SpotlightCardInit';

export default function DestinationsPage() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />
      <DestinationsWrapper />
      <Footer />
      <LiveBookingToast />
      <SpotlightCardInit />
    </main>
  );
}