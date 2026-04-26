import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LiveBookingToast from '../components/LiveBookingToast';
import SpotlightCardInit from '../components/SpotlightCardInit';
import DestinationDetails from './components/DestinationDetails';

type DestinationDetailPageProps = {
  searchParams?: {
    dest?: string | string[];
  };
};

export default function DestinationDetailPage({ searchParams }: Readonly<DestinationDetailPageProps>) {
  const destinationId = Array.isArray(searchParams?.dest)
    ? searchParams?.dest[0]
    : searchParams?.dest;

  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />
      <DestinationDetails destinationId={destinationId} />
      <Footer />
      <LiveBookingToast />
      <SpotlightCardInit />
    </main>
  );
}