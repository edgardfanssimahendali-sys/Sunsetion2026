export interface NavItem {
  name: string;
  href: string;
}

export interface EventInfoCard {
  id: string;
  label: string;
  value: string;
  subtext?: string;
  iconName: string;
}

export interface ExperienceCategory {
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ActivityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  image: string;
  highlight?: string;
}

export interface PerformerItem {
  id: string;
  title: string;
  role: string;
  genre: string;
  description: string;
  image: string;
  isConfirmed: boolean;
}

export interface VenueZone {
  id: string;
  name: string;
  category: string;
  description: string;
  x: number; // percentage on map
  y: number; // percentage on map
  color: string;
}

export interface SponsorPackage {
  id: string;
  name: string;
  price: string;
  tier: string;
  benefits: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface VenueSpot {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  activities: string[];
  deckLayoutRef?: string;
}

export interface WorkshopTrack {
  id: string;
  title: string;
  division: string;
  description: string;
  image: string;
  iconName: string;
  target: string;
}

export interface AttractionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
}

export interface SponsorMatrixBenefit {
  benefit: string;
  radiance: string | boolean;
  tropical: string | boolean;
  vibrant: string | boolean;
  heavenly: string | boolean;
}

export interface TicketTier {
  id: string;
  name: string;
  price: string;
  availability: string;
  perks: string[];
  recommended?: boolean;
}

