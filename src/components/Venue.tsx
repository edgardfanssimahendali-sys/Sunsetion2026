import React, { useState } from 'react';
import { VENUE_ZONES, DECK_VENUES } from '../data/eventData';
import { MapPin, Info, Compass, Sparkles, CheckCircle2, Navigation } from 'lucide-react';
import { VenueZone } from '../types';
import { FrangipaniFlower, TropicalWaterRipples, BananaLeafSilhouette, PalmLeafCorner, SunsetHillsSilhouette } from './TropicalDecor';

export const Venue: React.FC = () => {
  const [activeZone, setActiveZone] = useState<VenueZone>(VENUE_ZONES[0]);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);

  const displayedZone = hoveredZoneId
    ? VENUE_ZONES.find((z) => z.id === hoveredZoneId) || activeZone
    : activeZone;

  return (
    <section id="venue" className="py-24 sm:py-32 bg-lakeside-canvas relative overflow-hidden">
      {/* Background Lake Ripples & Foliage */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <TropicalWaterRipples className="w-full h-24 opacity-20" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <TropicalWaterRipples className="w-full h-32 opacity-25" />
      </div>
      <div className="absolute top-1/4 right-0 pointer-events-none opacity-20">
        <BananaLeafSilhouette className="w-48 h-96" color="#3F5139" />
      </div>
      <div className="absolute bottom-10 left-0 pointer-events-none opacity-25">
        <PalmLeafCorner className="w-72 h-72 text-[#607A55]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <SunsetHillsSilhouette className="w-full h-24" color="#1F1914" opacity={0.06} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#171717]/5 mb-3 shadow-xs">
              <FrangipaniFlower className="w-4 h-4" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
                CAMPUS GROUNDS & VENUES (DECK PAGE 8, 9, 10)
              </span>
            </div>
            <h2
              id="venue-headline"
              className="font-serif text-4xl sm:text-6xl text-[#171717] tracking-tight"
            >
              Our Venue: PIB Campus Lake Area
            </h2>
            <p className="font-sans text-base text-[#6F6F6F] mt-3">
              Explore the scenic tropical lakeside zones of Politeknik Internasional Bali (PIB College),
              featuring Taman Bethesda, Toya Bhagawan, and Garden Cafe Lab.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFFFFF] border border-[#171717]/5 text-xs font-sans text-[#6F6F6F] max-w-sm">
            <Info className="w-4 h-4 text-[#3F5139] shrink-0" />
            <span>
              Directly based on official event layout blueprints from Hi-Vent Deck Pages 8 & 9.
            </span>
          </div>
        </div>

        {/* 3 Real Campus Venues Cards (Deck Page 10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {DECK_VENUES.map((spot) => (
            <div
              key={spot.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#171717]/5 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#3F5139] text-[10px] font-bold uppercase tracking-wider">
                  {spot.deckLayoutRef}
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl text-white">{spot.name}</h3>
                  <p className="font-sans text-xs text-white/80">{spot.tagline}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="font-sans text-xs text-[#6F6F6F] leading-relaxed">
                  {spot.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#171717]/5">
                  <span className="font-sans text-[11px] font-semibold text-[#171717] uppercase tracking-wider block">
                    Featured Happenings:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.activities.map((act, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#F7F4EC] text-[#3F5139] text-[11px] font-medium"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Layout Blueprint (Deck Pages 8 & 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Stylized Map View */}
          <div className="lg:col-span-8 rounded-3xl bg-[#FFFFFF] border border-[#171717]/10 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Map Header Legend */}
            <div className="flex items-center justify-between pb-6 border-b border-[#171717]/5">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#3F5139]" />
                <span className="font-sans text-xs uppercase tracking-widest font-semibold text-[#171717]">
                  Taman Bethesda & Toya Bhagawan Interactive Blueprint
                </span>
              </div>
              <span className="font-sans text-[11px] text-[#6F6F6F] uppercase tracking-wider">
                Click Pin to Inspect Zone
              </span>
            </div>

            {/* Stylized Vector Map Canvas representing the lake and buildings from deck */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full mt-6 rounded-2xl bg-[#F7F4EC] border border-[#171717]/5 overflow-hidden flex items-center justify-center p-4">
              <svg
                className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
                viewBox="0 0 800 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lake Water Reservoir Shape (Taman Bethesda & Toya Bhagawan from slides 8 & 9) */}
                <path
                  d="M180 140 C280 80 440 90 520 160 C580 220 540 320 420 340 C280 360 140 300 130 220 C120 170 140 160 180 140 Z"
                  fill="#2BAEBA"
                  fillOpacity="0.2"
                  stroke="#2BAEBA"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <text x="310" y="225" fill="#184E59" opacity="0.6" fontSize="13" fontFamily="sans-serif" fontWeight="bold">
                  CAMPUS LAKE AREA
                </text>

                {/* Building Blocks: BCPS, Cafe Lab, Beverage Lab from Slide 8 */}
                <rect x="620" y="100" width="130" height="110" rx="8" fill="#FFFFFF" stroke="#3F5139" strokeWidth="1.5" />
                <text x="655" y="160" fill="#3F5139" fontSize="11" fontFamily="sans-serif" fontWeight="bold">BCPS</text>

                <rect x="620" y="230" width="130" height="120" rx="8" fill="#FFFFFF" stroke="#3F5139" strokeWidth="1.5" />
                <text x="645" y="295" fill="#3F5139" fontSize="11" fontFamily="sans-serif" fontWeight="bold">CAFE LAB</text>

                <rect x="180" y="320" width="160" height="75" rx="8" fill="#FFFFFF" stroke="#D98252" strokeWidth="1.5" />
                <text x="210" y="365" fill="#D98252" fontSize="11" fontFamily="sans-serif" fontWeight="bold">BEVERAGE LAB</text>

                {/* Stage symbol from Slide 8 */}
                <rect x="80" y="315" width="80" height="60" rx="6" fill="#3F5139" />
                <text x="95" y="350" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">STAGE</text>
              </svg>

              {/* Interactive Zone Hotspots */}
              {VENUE_ZONES.map((zone) => {
                const isSelected = activeZone.id === zone.id;
                const isHovered = hoveredZoneId === zone.id;

                return (
                  <button
                    key={zone.id}
                    id={`map-pin-${zone.id}`}
                    onClick={() => setActiveZone(zone)}
                    onMouseEnter={() => setHoveredZoneId(zone.id)}
                    onMouseLeave={() => setHoveredZoneId(null)}
                    style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 focus:outline-none transition-all duration-300 cursor-pointer ${
                      isSelected || isHovered ? 'scale-125 z-30' : 'scale-100 hover:scale-115'
                    }`}
                  >
                    {(isSelected || isHovered) && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping opacity-40"
                        style={{ backgroundColor: zone.color }}
                      />
                    )}

                    <div
                      className="relative px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white text-white font-sans text-[11px] font-semibold tracking-wide whitespace-nowrap"
                      style={{ backgroundColor: zone.color }}
                    >
                      <MapPin className="w-3 h-3" />
                      <span className="hidden sm:inline">{zone.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Zone Chips Bar */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#171717]/5">
              {VENUE_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  id={`zone-chip-${zone.id}`}
                  onClick={() => setActiveZone(zone)}
                  className={`font-sans text-xs px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeZone.id === zone.id
                      ? 'bg-[#171717] text-white font-medium shadow-xs'
                      : 'bg-[#F7F4EC] text-[#6F6F6F] hover:text-[#171717]'
                  }`}
                >
                  {zone.name}
                </button>
              ))}
            </div>
          </div>

          {/* Zone Detail Info Sidebar */}
          <div className="lg:col-span-4 rounded-3xl bg-[#FFFFFF] border border-[#171717]/10 p-8 shadow-sm h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#171717]/5">
                <span className="font-sans text-xs uppercase tracking-widest font-semibold text-[#607A55]">
                  SELECTED FESTIVAL ZONE
                </span>
                <span
                  className="font-sans text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white font-semibold"
                  style={{ backgroundColor: displayedZone.color }}
                >
                  {displayedZone.category}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal leading-tight">
                  {displayedZone.name}
                </h3>
                <p className="font-sans text-sm text-[#6F6F6F] mt-3 leading-relaxed">
                  {displayedZone.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F4EC] space-y-2.5 text-xs font-sans">
                <div className="flex justify-between text-[#171717]">
                  <span className="font-semibold">Festival Coordinates:</span>
                  <span className="font-mono text-[#607A55]">{displayedZone.id}</span>
                </div>
                <div className="flex justify-between text-[#6F6F6F]">
                  <span>Campus Zone:</span>
                  <span>Lake Area (PIB College)</span>
                </div>
                <div className="flex justify-between text-[#6F6F6F]">
                  <span>Access Permission:</span>
                  <span>Festival Ticket Holders</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#171717]/5 mt-6">
              <div className="flex items-center gap-2 text-xs text-[#3F5139] font-medium">
                <Navigation className="w-3.5 h-3.5" />
                <span>On-site marshals and directional signs will guide attendees.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
