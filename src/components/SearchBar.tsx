import Link from 'next/link';
import Icon from './ui/AppIcon';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  href: string;
  actionLabel?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search destinations, activities, or countries...',
  href,
  actionLabel = 'Search',
}: Readonly<SearchBarProps>) {
  return (
    <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-3.5 shadow-sm">
      <Icon name="MagnifyingGlassIcon" size={20} variant="outline" className="text-muted-foreground flex-shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none font-medium"
      />
      <Link
        href={href}
        className="flex-shrink-0 bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold hover:bg-secondary transition-colors"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
