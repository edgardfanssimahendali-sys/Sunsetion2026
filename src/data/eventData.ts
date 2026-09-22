import {
  ActivityItem,
  AttractionItem,
  EventInfoCard,
  ExperienceCategory,
  FAQItem,
  GalleryItem,
  NavItem,
  PerformerItem,
  SponsorMatrixBenefit,
  SponsorPackage,
  TicketTier,
  VenueSpot,
  VenueZone,
  WorkshopTrack,
} from '../types';

export const SUNSETION_BRAND = {
  name: 'SUNSETION',
  edition: 'Tropical Bloom Festival',
  editionName: 'Tropical Bloom Festival',
  year: '2026',
  fullTitle: 'SUNSETION 2026 — Tropical Bloom Festival',
  tagline: 'Reconnect with Nature, People, and Passion',
  natureWord: 'Nature',
  peopleWord: 'People',
  passionWord: 'Passion',
  organizer: 'Edgard Fans Simahendali',
  college: 'PIB College',
  collegeTagline: 'School of Tourism, Digital & Creative Arts',
  targetAudience: '700+ pax',
  instagram: '@edgard.fans.simahendali',
  instagramUrl: 'https://instagram.com/edgard.fans.simahendali',
  tiktok: '@sunsetion.official',
  email: 'edgardfanssimahendali@gmail.com',
  committeeName: 'Edgard',
  committeePhone: '081384499621',
  contactNumber: '081384499621',
  contactPerson2: '081384499621',
};

// Deck Page 3 & 4: Background & Event Purpose
export const EVENT_PURPOSE = {
  title: 'Event Purpose',
  pillars: [
    {
      title: 'Creative Campus Initiative',
      desc: 'Introducing PIB College as a premier creative campus nurturing student ingenuity.',
      icon: 'Sparkles',
    },
    {
      title: 'Youth Lifestyle Trends',
      desc: 'Promoting a healthy, sustainable lifestyle aligned with contemporary youth values.',
      icon: 'Compass',
    },
    {
      title: 'Community Engagement',
      desc: 'Building vibrant collaborative networks between students, communities, and local MSMEs.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Real Management Experience',
      desc: 'Providing real-world event production & leadership experience for Hi-Vent organizers.',
      icon: 'Award',
    },
  ],
};

// Deck Page 5: Main Event & Workshop Schedule
export const DECK_SCHEDULE = {
  mainEvent: {
    title: 'Main Event',
    date: 'Saturday, October 25, 2025 / 2026 Edition',
    time: '07:00 AM – 13:00 PM',
    location: 'PIB Campus Lake Area (Taman Bethesda & Toya Bhagawan)',
    participants: 'PIB students, communities, and local residents',
  },
  workshop: {
    title: 'Interactive Workshops',
    date: 'Friday, October 24, 2025 / 2026 Edition',
    time: '08:00 – 11:00 WITA',
    location: 'PIB Campus Area',
    participants: 'Highschool students & public creative enthusiasts',
  },
};

// Deck Page 7: Event Plan Competition (EPC)
export const COMPETITION_EPC = {
  themeTitle: 'SEA Special Premiere — ROOTS',
  subtitle: 'Reimagining Our Origins Through Sustainability, Innovation & Culture',
  prizepool: '5 MILLION IDR + SPECIAL SCHOLARSHIP OFFER',
  registrationFee: 'Free Stage 1 (Next Level IDR 150,000)',
  contactPersons: [
    { name: 'Edgard', phone: '081384499621' },
  ],
  stages: [
    { name: 'Registration Open', date: 'August 24 – September 26' },
    { name: 'Technical Meeting 1', date: '27 September' },
    { name: 'Proposal Collection', date: 'Deadline October 5' },
    { name: 'Technical Meeting 2', date: '8 October' },
    { name: 'Event Deck Submission', date: 'Deadline October 11' },
    { name: 'Stage 2 & Pitching Day', date: 'October 24 – 25' },
  ],
};

// Easily editable 2026 theme block (PRD Section 9 & Deck Theme)
export const SUNSETION_2026_THEME = {
  label: 'THE 2026 EXPERIENCE',
  tagline: 'Reconnect with Nature, People, and Passion',
  mainHeadline: 'Tropical Bloom Festival',
  subheading: 'Reconnect. Create. Experience.',
  description:
    'A new chapter of Sunsetion celebrating Bali’s tropical nature, creative campus initiatives, and collaborative human warmth.',
  note: 'Organized by Edgard Fans Simahendali',
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Workshops', href: '#workshops-deck' },
  { name: 'Attractions', href: '#attractions-deck' },
  { name: 'Venue', href: '#venue' },
  { name: 'Competition', href: '#competition-epc' },
  { name: 'Sponsors', href: '#sponsors' },
];

export const EVENT_INFO_CARDS: EventInfoCard[] = [
  {
    id: 'date-card',
    label: 'DATE',
    value: 'October 24–25',
    subtext: 'Workshop Day & Main Festival',
    iconName: 'Calendar',
  },
  {
    id: 'time-card',
    label: 'TIME',
    value: '07:00 AM – 13:00 PM',
    subtext: 'WITA (Bali Time)',
    iconName: 'Clock',
  },
  {
    id: 'location-card',
    label: 'LOCATION',
    value: 'PIB Campus Lake Area',
    subtext: 'Taman Bethesda & Toya Bhagawan',
    iconName: 'MapPin',
  },
  {
    id: 'audience-card',
    label: 'TARGET AUDIENCE',
    value: '700+ Pax',
    subtext: 'Students • Communities • MSMEs • Public',
    iconName: 'Users',
  },
];

// Deck Page 10: Real Campus Venues
export const DECK_VENUES: VenueSpot[] = [
  {
    id: 'taman-bethesda',
    name: 'Taman Bethesda',
    tagline: 'Outdoor Festival Lawn & Main Stage',
    description:
      'Spacious grassy amphitheater bordering the lake, featuring the live performance stage, BCPS pavilions, Beverage Lab, Cafe Lab, sponsor booths, and lawn games.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80',
    activities: ['Main Stage', 'Sponsor Booths', 'F&B Stalls', 'Lawn Games', 'VIP Pavilion'],
    deckLayoutRef: 'Deck Page 8',
  },
  {
    id: 'toya-bhagawan',
    name: 'Toya Bhagawan',
    tagline: 'Scenic Lakeside Promenade',
    description:
      'Tranquil water reservoir surrounded by tropical paved pathways, hosting the DIY Maker Class, Aloha Thrift Shop, and Live Mural Painting.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    activities: ['DIY Class', 'Aloha Thrift Shop', 'Live Painting', 'Lake View Walk'],
    deckLayoutRef: 'Deck Page 9',
  },
  {
    id: 'garden-cafe-lab',
    name: 'Garden Cafe Lab',
    tagline: 'Wellness Stepped Lawn Amphitheater',
    description:
      'Lush stone-terraced garden overlooking campus grounds, dedicated to morning sunrise/sunset mindful Yoga Class sessions.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    activities: ['Lawn Yoga Class', 'Mindfulness Sessions', 'Artisan Coffee Tasting'],
    deckLayoutRef: 'Deck Page 10',
  },
];

// Deck Page 12: Workshops & Academic Disciplines
export const WORKSHOP_TRACKS: WorkshopTrack[] = [
  {
    id: 'culinary-arts',
    title: 'Culinary Arts',
    division: 'School of Tourism & Hospitality',
    description:
      'Master hands-on gourmet pastry techniques, delicate cupcake decorating, and modern tropical plating with PIB culinary chefs.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    iconName: 'Utensils',
    target: 'Highschool & Creative Foodies',
  },
  {
    id: 'business-digital',
    title: 'Business Digital',
    division: 'Digital & Creative Arts',
    description:
      'Interactive masterclass on UI/UX product wireframing, mobile app prototyping, and digital brand marketing trends.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    iconName: 'Laptop',
    target: 'Aspiring Tech Innovators',
  },
  {
    id: 'event-management',
    title: 'Event Management',
    division: 'HIMA Event Management (Hi-Vent)',
    description:
      'Explore live festival sound engineering, camera composition, creative lighting rigs, and festival stage production.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    iconName: 'Camera',
    target: 'Future Event Producers',
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management',
    division: 'International Hospitality',
    description:
      'Learn specialty manual pour-over coffee brewing, latte art etching, and craft mocktail mixology from professional baristas.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    iconName: 'Coffee',
    target: 'Hospitality Enthusiasts',
  },
];

// Deck Page 13: Our Attractions
export const DECK_ATTRACTIONS: AttractionItem[] = [
  {
    id: 'aloha-shop',
    title: 'Aloha Shop',
    category: 'Curated Thrifting',
    description:
      'Browse curated racks of vintage streetwear, tropical Hawaiian shirts, and pre-loved sustainable fashion treasures.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    location: 'Toya Bhagawan Lakeside',
  },
  {
    id: 'photobooth',
    title: 'PhotoBooth',
    category: 'Floral Installation',
    description:
      'Strike a pose against our handcrafted flower fan wall and decorative photo installations for instant memories.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    location: 'Taman Bethesda Entrance',
  },
  {
    id: 'painting',
    title: 'Live Painting & Art',
    category: 'Visual Showcase',
    description:
      'Participate in collaborative tropical mini canvases and watch guest artists paint ocean waves and hibiscus flowers.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    location: 'Toya Bhagawan Art Walk',
  },
  {
    id: 'diy-class',
    title: 'DIY Class',
    category: 'Handmade Crafts',
    description:
      'String custom vibrant beaded bracelets, phone charms, and personalized festival accessories to take home.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80',
    location: 'Toya Bhagawan Pavilion',
  },
  {
    id: 'yoga-class',
    title: 'Yoga Class',
    category: 'Lawn Wellness',
    description:
      'Open-air mindful breathing, stretching, and morning yoga led by certified instructors on the green lawns.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    location: 'Garden Cafe Lab',
  },
];

// Deck Page 14: Entertainment
export const PERFORMERS_LIST: PerformerItem[] = [
  {
    id: 'student-perf',
    title: 'Student Performance',
    role: 'Campus Showcase',
    genre: 'Live Band / Vocal Ensemble',
    description:
      'Live music showcases by talented PIB College student musicians featuring guitars, bass, keys, and contemporary pop covers.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    isConfirmed: true,
  },
  {
    id: 'balinese-perf',
    title: 'Balinese Traditional Dance',
    role: 'Cultural Crossover',
    genre: 'Balinese Fusion Choreography',
    description:
      'Mesmerizing traditional Balinese dance and dynamic gamelan percussion honoring the sacred cultural heritage of the island.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    isConfirmed: true,
  },
  {
    id: 'artist-01',
    title: '[GUEST HEADLINER 01]',
    role: 'Festival Headliner',
    genre: 'Indie Pop / Tropical Rhythms',
    description:
      'Headline musical artist lineup for Sunsetion to accompany the tropical twilight countdown.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    isConfirmed: false,
  },
  {
    id: 'artist-02',
    title: '[SUNSET ACOUSTIC SET]',
    role: 'Special Guest',
    genre: 'Acoustic / Melodic Sunset Grooves',
    description:
      'Intimate acoustic melodies as the golden hour turns to twilight across the PIB campus lake.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    isConfirmed: false,
  },
];

// Deck Pages 15 & 16: Complete Sponsor Packages & Matrices
export const SPONSOR_PACKAGES: SponsorPackage[] = [
  {
    id: 'radiance',
    name: 'RADIANCE',
    price: 'Rp 15.000.000',
    tier: 'Platinum Tier',
    benefits: [
      '6 VIP Passes + Lunch Vouchers (50k/pax)',
      '6 VIP Passes at EPC Final Pitching Day',
      '2 Free Workshop Tickets',
      '5x Adlibs + 1x Scripted Adlibs by MC on Stage',
      'Large Logo on Backdrop EPC & Photobooth Sunsetion',
      'Maximum social media exposure including after movie',
      '1 Premium Booth near Main Stage for selling & promo',
      'Product placement on Sunsetion VIP & EPC Judges table',
      'Stage promotion by MC with products at Sunsetion',
      'Video ads non-audio on LED TV screen',
      'Official MoU signing ceremony on stage',
    ],
    popular: true,
  },
  {
    id: 'tropical',
    name: 'TROPICAL',
    price: 'Rp 10.000.000',
    tier: 'Gold Tier',
    benefits: [
      '4 VIP Passes + Lunch Vouchers (50k/pax)',
      '4 VIP Passes at EPC Final Pitching Day',
      '1 Free Workshop Ticket',
      '3x Adlibs by MC on Stage',
      'Normal Logo on Backdrop EPC & Photobooth Sunsetion',
      'Logo placement and mention on all social media ads',
      '1 Premium Booth near Registration area',
      'Product placement on EPC Judges table',
      'Brochure distribution to all participants',
      'Logo on event gate, official ID card & all certificates',
      'MoU signing ceremony',
    ],
  },
  {
    id: 'vibrant',
    name: 'VIBRANT',
    price: 'Rp 5.000.000',
    tier: 'Silver Tier',
    benefits: [
      '2 VIP Passes + Lunch Vouchers (50k/pax)',
      '2 VIP Passes at EPC Final Pitching Day',
      '1x Adlib by MC on Stage',
      'Normal Logo on Backdrop EPC & Photobooth',
      'Logo placement and mention on all social media ads',
      '1 Standard Booth for selling & promoting products',
      'Brochure distribution to participants',
      'Logo on official ID Card & LED TV display',
      'MoU signing ceremony',
    ],
  },
  {
    id: 'heavenly',
    name: 'HEAVENLY',
    price: '< Rp 5.000.000',
    tier: 'Bronze / Supporting Tier',
    benefits: [
      '1 VIP Pass for Sunsetion',
      '1x Adlib by MC on Stage',
      'Small/Normal Logo on Backdrop (based on nominal)',
      'Small Logo Placement on 1 social media ad',
      'Logo on official festival ID Card',
      'Official MoU signing ceremony',
    ],
  },
];

// Deck Pages 15 & 16: Detailed Comparison Matrix
export const SPONSOR_BRAND_MATRIX: SponsorMatrixBenefit[] = [
  {
    benefit: 'VIP Pass for Sunsetion + Lunch Voucher (50k/pax)',
    radiance: '6 VIP Pass + Voucher',
    tropical: '4 VIP Pass + Voucher',
    vibrant: '2 VIP Pass + Voucher',
    heavenly: '1 VIP Pass',
  },
  {
    benefit: 'VIP Pass at EPC Final Pitching Day',
    radiance: '6 VIP Pass',
    tropical: '4 VIP Pass',
    vibrant: '2 VIP Pass',
    heavenly: false,
  },
  {
    benefit: 'Workshop Ticket',
    radiance: '2 Free Tickets',
    tropical: '1 Free Ticket',
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Adlibs by MC on Stage',
    radiance: '5x adlibs + 1x scripted',
    tropical: '3x adlibs',
    vibrant: '1x adlib',
    heavenly: '1x adlib',
  },
  {
    benefit: 'Logo on Backdrop EPC & Photobooth Sunsetion',
    radiance: 'Large Logo',
    tropical: 'Normal Logo',
    vibrant: 'Normal Logo',
    heavenly: 'Small/Normal Logo',
  },
  {
    benefit: 'Maximum social media exposure including after movie',
    radiance: true,
    tropical: false,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Logo placement & mention on all social media ads',
    radiance: true,
    tropical: true,
    vibrant: true,
    heavenly: 'Small (1 ad)',
  },
  {
    benefit: 'Logo on event gate & all booth signage',
    radiance: true,
    tropical: true,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Logo on official ID Card',
    radiance: true,
    tropical: true,
    vibrant: true,
    heavenly: true,
  },
  {
    benefit: 'Logo on all certificates for EPC',
    radiance: true,
    tropical: true,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Roll-up banner for EPC (provided by sponsor)',
    radiance: true,
    tropical: true,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Logo Ads on LED TV',
    radiance: true,
    tropical: true,
    vibrant: true,
    heavenly: false,
  },
];

export const SPONSOR_PRODUCT_MATRIX: SponsorMatrixBenefit[] = [
  {
    benefit: 'Booth for Selling / Promoting on Sunsetion',
    radiance: '1 Premium booth (near stage)',
    tropical: '1 Premium booth (near registration)',
    vibrant: '1 Standard booth',
    heavenly: false,
  },
  {
    benefit: 'Product selling within venue for Sunsetion',
    radiance: true,
    tropical: true,
    vibrant: true,
    heavenly: false,
  },
  {
    benefit: 'Product Placement on Sunsetion VIP table',
    radiance: true,
    tropical: false,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Product Placement on EPC Judges table',
    radiance: true,
    tropical: true,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Product sample for participants & EPC Winner',
    radiance: true,
    tropical: false,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Brochure distribution to participants',
    radiance: true,
    tropical: true,
    vibrant: true,
    heavenly: false,
  },
  {
    benefit: 'Stage promotion by MC with products',
    radiance: true,
    tropical: false,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Product placement on games stall',
    radiance: true,
    tropical: false,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'Video non-audio / Ads on LED TV',
    radiance: true,
    tropical: false,
    vibrant: false,
    heavenly: false,
  },
  {
    benefit: 'MoU signing ceremony',
    radiance: true,
    tropical: true,
    vibrant: true,
    heavenly: true,
  },
  {
    benefit: 'Rights to provide doorprize for games',
    radiance: true,
    tropical: false,
    vibrant: false,
    heavenly: false,
  },
];

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    number: '01',
    title: 'CONNECT',
    description:
      'Meet 700+ students, creators, and MSME partners in an open-air tropical campus environment.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    tag: 'Community & Networks',
  },
  {
    number: '02',
    title: 'CREATE',
    description:
      'Hands-on culinary decorating, digital UX workshops, live mural painting, and DIY craft classes.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Arts & Masterclasses',
  },
  {
    number: '03',
    title: 'PLAY',
    description:
      'Explore the Aloha thrift shop, lawn carnival games, flower fan photobooths, and artisanal culinary market.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    tag: 'Lawn & Aloha Shop',
  },
  {
    number: '04',
    title: 'CELEBRATE',
    description:
      'Enjoy energetic student live bands and graceful Balinese traditional dance under tropical twilight.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    tag: 'Live Stage & Culture',
  },
];

export const ACTIVITIES_LIST: ActivityItem[] = [
  {
    id: 'yoga',
    number: '01',
    title: 'Yoga Class',
    category: 'Wellness & Mindfulness',
    description:
      'Morning mindfulness and sun salutations on the stepped lawn amphitheater of Garden Cafe Lab.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    highlight: 'Garden Cafe Lab',
  },
  {
    id: 'diy-class',
    number: '02',
    title: 'DIY Bead & Craft Class',
    category: 'Craft & Hands-on',
    description:
      'String colorful custom beaded bracelets, phone charms, and botanical crafts by the Toya Bhagawan lakeside.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80',
    highlight: 'Toya Bhagawan',
  },
  {
    id: 'live-painting',
    number: '03',
    title: 'Live Painting Art Walk',
    category: 'Visual Arts',
    description:
      'Watch campus illustrators paint tropical flora and ocean waves on mini canvases along the lake.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    highlight: 'Art Exhibition',
  },
  {
    id: 'thrift-shop',
    number: '04',
    title: 'Aloha Shop',
    category: 'Sustainable Fashion',
    description:
      'Curated racks of vintage island wear, pre-loved clothes, and streetwear treasures.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    highlight: 'Thrift Market',
  },
  {
    id: 'photo-booth',
    number: '05',
    title: 'Paper Fan PhotoBooth',
    category: 'Visual Installations',
    description:
      'Snap tropical memories in front of the colorful handmade paper fan flower wall.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    highlight: 'Instant Keepsakes',
  },
  {
    id: 'culinary-workshop',
    number: '06',
    title: 'Culinary Arts Workshop',
    category: 'Gastronomy',
    description:
      'Cupcake decoration and pastry crafting led by PIB College culinary mentors.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    highlight: 'Sweet Creations',
  },
  {
    id: 'digital-workshop',
    number: '07',
    title: 'Digital Business Prototyping',
    category: 'Creative Tech',
    description:
      'Hands-on UI/UX wireframing and mobile prototyping interactive masterclass.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    highlight: 'Tech Skills',
  },
  {
    id: 'barista-workshop',
    number: '08',
    title: 'Hotel Coffee & Mixology',
    category: 'Hospitality',
    description:
      'Manual pour-over brewing, latte art techniques, and craft tropical beverages.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    highlight: 'Beverage Lab',
  },
  {
    id: 'event-production',
    number: '09',
    title: 'Event Management Class',
    category: 'Production',
    description:
      'Behind the scenes of stage lighting, festival sound, and photography production.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    highlight: 'Hi-Vent Masterclass',
  },
  {
    id: 'lawn-games',
    number: '10',
    title: 'Lawn Carnival Games',
    category: 'Interactive Social',
    description:
      'Fun group challenges, giant games, and friendly competitions on the Taman Bethesda grass.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    highlight: 'Fun Tournaments',
  },
];

export const VENUE_ZONES: VenueZone[] = [
  {
    id: 'main-stage',
    name: 'Main Stage (Taman Bethesda)',
    category: 'Live Music & Shows',
    description: 'Outdoor festival stage with sound & lighting rigs near the Beverage Lab and BCPS.',
    x: 35,
    y: 75,
    color: '#D98252',
  },
  {
    id: 'vip-area',
    name: 'VIP Area',
    category: 'Exclusive Lounge',
    description: 'Covered VIP seating with prime stage sightlines and hospitality table service.',
    x: 25,
    y: 20,
    color: '#E7B85C',
  },
  {
    id: 'fb-lake',
    name: 'FnB Lake Promenade',
    category: 'Culinary Stalls',
    description: 'Food and drink booths lining the edge of the scenic lake in Taman Bethesda.',
    x: 55,
    y: 35,
    color: '#607A55',
  },
  {
    id: 'games-zone',
    name: 'Games Stall',
    category: 'Interactive Games',
    description: 'Lawn games area near the lake with friendly competitions and sponsor prizes.',
    x: 48,
    y: 48,
    color: '#3F5139',
  },
  {
    id: 'sponsor-stalls',
    name: 'Sponsor Stalls',
    category: 'Brand Experience',
    description: 'Premier brand booths positioned along the high-traffic walkway of Taman Bethesda.',
    x: 32,
    y: 40,
    color: '#D98252',
  },
  {
    id: 'yoga-lawn',
    name: 'Garden Cafe Lab (Yoga)',
    category: 'Wellness',
    description: 'Stepped grassy amphitheater by the Cafe Lab for morning and sunset yoga sessions.',
    x: 75,
    y: 25,
    color: '#607A55',
  },
  {
    id: 'toya-bhagawan-zone',
    name: 'Toya Bhagawan (DIY & Aloha)',
    category: 'Lakeside Crafts',
    description: 'Spacious reservoir perimeter hosting Aloha Shop, DIY Classes, and Live Painting.',
    x: 75,
    y: 75,
    color: '#E7B85C',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Taman Bethesda Lake Area',
    category: 'Campus Venue',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=900&q=80',
    aspect: 'portrait',
  },
  {
    id: 'gal-2',
    title: 'Student Live Performance Band',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
  },
  {
    id: 'gal-3',
    title: 'Balinese Traditional Dance',
    category: 'Cultural Showcase',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'Aloha Shop Curated Thrifting',
    category: 'Attractions',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
    aspect: 'portrait',
  },
  {
    id: 'gal-5',
    title: 'DIY Beaded Jewelry Making',
    category: 'Creative Classes',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80',
    aspect: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Garden Cafe Lab Yoga Class',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
  },
  {
    id: 'gal-7',
    title: 'Culinary Arts & Pastry Craft',
    category: 'Workshops',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    aspect: 'portrait',
  },
  {
    id: 'gal-8',
    title: 'Festival Bunting & Deco Archway',
    category: 'Decorations',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
  },
];

export const TICKET_TIERS: TicketTier[] = [
  {
    id: 'student-pass',
    name: 'STUDENT PASS (PIB & EXTERNAL)',
    price: 'Rp 35.000',
    availability: 'With Student ID',
    perks: [
      'Full festival grounds entry to Taman Bethesda & Toya Bhagawan',
      'Entry to live Student Performance & Balinese Dance stage',
      'Access to Aloha Shop, PhotoBooth & Art exhibits',
      'Eligible for lawn games & community tournament challenges',
    ],
  },
  {
    id: 'regular-pass',
    name: 'GENERAL ADMISSION PASS',
    price: 'Rp 50.000',
    availability: 'Public Release',
    recommended: true,
    perks: [
      'Full day festival grounds entry',
      'Access to Culinary Bazaar & MSME market',
      'Priority access to Aloha Shop and PhotoBooth',
      'Sunsetion collectible sticker pack & wristband',
      'Complete stage performance and closing session access',
    ],
  },
  {
    id: 'workshop-bundle',
    name: 'WORKSHOP + FESTIVAL BUNDLE',
    price: 'Rp 100.000',
    availability: 'Limited 100 Seats',
    perks: [
      'Friday Workshop entry (Culinary, Digital, Event, or Barista)',
      'Saturday Main Event Festival access included',
      'All workshop materials, ingredients & tool kits provided',
      'Official PIB College Hi-Vent Masterclass Certificate',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Sunsetion Tropical Bloom Festival?',
    answer:
      'Sunsetion is an annual flagship creative festival organized by Edgard Fans Simahendali under the theme "Tropical Bloom Festival: Reconnect with Nature, People, and Passion". It fuses student talent, local MSMEs, workshops, and entertainment on the scenic campus lake.',
  },
  {
    id: 'faq-2',
    category: 'Location',
    question: 'Where are the venue spots located on campus?',
    answer:
      'Sunsetion takes place across the picturesque PIB Campus Lake Area, specifically Taman Bethesda (Main Stage, F&B, Games, Sponsors), Toya Bhagawan (Aloha Shop, DIY Class, Live Painting), and Garden Cafe Lab (Lawn Yoga Class).',
  },
  {
    id: 'faq-3',
    category: 'Workshops',
    question: 'What interactive workshops are offered?',
    answer:
      'Four signature workshops take place on Friday (08:00–11:00 WITA): Culinary Arts (cupcake/pastry craft), Business Digital (UI/UX prototyping), Event Management (stage sound, lighting & camera), and Hotel Management (pour-over coffee & mixology).',
  },
  {
    id: 'faq-4',
    category: 'Competition',
    question: 'What is the Event Plan Competition (EPC)?',
    answer:
      'The EPC is titled "SEA Special Premiere — ROOTS: Reimagining Our Origins Through Sustainability, Innovation & Culture", featuring a total prizepool of IDR 5 Million and a special scholarship offer for high school and university participants.',
  },
  {
    id: 'faq-5',
    category: 'Audience',
    question: 'How many attendees are expected and who can come?',
    answer:
      'Sunsetion welcomes a target audience of 700+ pax including PIB students, high school students, university networks, creative communities, local families, and tourists.',
  },
  {
    id: 'faq-6',
    category: 'Attractions',
    question: 'What attractions are open during the festival?',
    answer:
      'You can visit the Aloha Shop (thrift & vintage fashion), the Paper Fan PhotoBooth, DIY Bead & Craft Class, Live Floral Painting, Lawn Carnival Games, and the Culinary Village with local street food and drinks.',
  },
  {
    id: 'faq-7',
    category: 'Sponsorship',
    question: 'What sponsor packages are available for brands?',
    answer:
      'We offer four tailored tiers: Radiance (Rp 15.000.000), Tropical (Rp 10.000.000), Vibrant (Rp 5.000.000), and Heavenly (< Rp 5.000.000), featuring premium booths near stage/registration, MC adlibs, LED TV ads, and VIP passes.',
  },
  {
    id: 'faq-8',
    category: 'Contact',
    question: 'How do I contact the committee?',
    answer:
      'You can reach committee liaison Edgard via WhatsApp at 081384499621, email edgardfanssimahendali@gmail.com, or DM Instagram @edgard.fans.simahendali.',
  },
];
