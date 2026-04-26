import Link from 'next/link';
import AppImage from './ui/AppImage';
import Icon from './ui/AppIcon';

type DestinationCardProps = {
  href: string;
  name: string;
  mood: string;
  price: string;
  duration: string;
  rating: number;
  image: string;
  alt: string;
  tagline?: string;
  moodColor?: string;
};

export default function DestinationCard({
  href,
  name,
  mood,
  price,
  duration,
  rating,
  image,
  alt,
  tagline,
  moodColor = '#005F73',
}: Readonly<DestinationCardProps>) {
  return (
    <div className="spotlight-card group relative rounded-3xl overflow-hidden cursor-pointer min-h-[240px] md:min-h-[250px] flex flex-col h-full">
      <Link href={href} className="absolute inset-0 z-10" aria-label={`View ${name}`} />
      <AppImage
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end h-full">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: moodColor }}>
            {mood}
          </span>
          <div className="flex items-center gap-1">
            <Icon name="StarIcon" size={12} variant="solid" className="text-accent" />
            <span className="text-xs font-bold text-white">{rating}</span>
          </div>
        </div>
        <h3 className="font-display text-lg text-white font-light">{name}</h3>
        {tagline ? <p className="text-xs text-white/75">{tagline}</p> : null}
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-bold text-accent">{price}</span>
          <span className="text-xs text-white/60">{duration}</span>
        </div>
      </div>
    </div>
  );
}
