import React from 'react';
import { SUNSETION_2026_THEME, SUNSETION_BRAND } from '../data/eventData';
import { Sparkles, Sun } from 'lucide-react';
import {
  FrangipaniFlower,
  TaglinePill,
  PalmLeafCorner,
  MonsteraLeafSilhouette,
  FloatingTropicalPetals,
  SunsetSunDisc,
  SunsetHillsSilhouette,
} from './TropicalDecor';

export const Theme: React.FC = () => {
  return (
    <section
      id="theme-section"
      className="py-28 sm:py-36 bg-sunsetion-sunset relative overflow-hidden border-y border-[#FFAA47]/30"
    >
      {/* Radiant Glowing Sun Disc behind the section header */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-70 pointer-events-none">
        <SunsetSunDisc size={360} />
      </div>

      {/* Botanical Silhouette Background Accents */}
      <div className="absolute -top-10 -left-10 pointer-events-none opacity-40">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute -bottom-16 -right-16 pointer-events-none opacity-30">
        <MonsteraLeafSilhouette className="w-96 h-96" color="#3F5139" />
      </div>

      {/* Horizon Silhouette along the base of Theme section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <SunsetHillsSilhouette className="w-full h-20" color="#33442E" opacity={0.07} />
      </div>

      {/* Floating Animated Frangipani Petals */}
      <FloatingTropicalPetals />

      {/* Radiant warm sunset glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-r from-[#FFAA47]/25 via-[#FF6B8B]/20 to-[#2BAEBA]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#FFAA47]/40 shadow-xs">
            <FrangipaniFlower className="w-4 h-4" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#3F5139]">
              THE OFFICIAL THEME & ESSENCE
            </span>
          </div>

          {/* Tropical Bloom Festival Title */}
          <div className="space-y-2 relative">
            <h2
              id="theme-headline"
              className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] tracking-tight text-[#1F1914]"
            >
              Tropical Bloom Festival
            </h2>
            <div className="font-script text-3xl sm:text-5xl text-[#F57224] pt-1">
              Sunsetion Edition
            </div>
          </div>

          {/* Tagline Pill matching Slide 1 of Deck */}
          <div className="pt-2">
            <TaglinePill className="text-base sm:text-lg px-6 py-3 shadow-md" />
          </div>

          {/* Three Pillars Display from Tagline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-4">
            <div className="p-6 rounded-2xl sunsetion-glass text-center space-y-2 hover:translate-y-[-2px] transition-transform">
              <span className="text-xs uppercase font-sans tracking-widest text-[#3F5139] font-bold block">
                01 • NATURE
              </span>
              <h3 className="font-serif text-2xl text-[#1F1914]">Lakeside Sanctuary</h3>
              <p className="font-sans text-xs text-[#706256]">
                Open-air green lawns of Taman Bethesda and serene waters of Toya Bhagawan.
              </p>
            </div>

            <div className="p-6 rounded-2xl sunsetion-glass text-center space-y-2 hover:translate-y-[-2px] transition-transform">
              <span className="text-xs uppercase font-sans tracking-widest text-[#F57224] font-bold block">
                02 • PEOPLE
              </span>
              <h3 className="font-serif text-2xl text-[#1F1914]">700+ Community</h3>
              <p className="font-sans text-xs text-[#706256]">
                PIB College students, high school creators, local MSMEs, and public visitors.
              </p>
            </div>

            <div className="p-6 rounded-2xl sunsetion-glass text-center space-y-2 hover:translate-y-[-2px] transition-transform">
              <span className="text-xs uppercase font-sans tracking-widest text-[#E85D75] font-bold block">
                03 • PASSION
              </span>
              <h3 className="font-serif text-2xl text-[#1F1914]">Creative Vitality</h3>
              <p className="font-sans text-xs text-[#706256]">
                Culinary arts, digital business, event production, live music, and Balinese dance.
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-[#706256] max-w-2xl font-light leading-relaxed pt-2">
            {SUNSETION_2026_THEME.description}
          </p>

          {/* Editorial Note regarding the 2026 official announcement */}
          <div className="flex items-center gap-2 text-xs font-sans text-[#33442E]/90 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FFAA47]" />
            <span>Organized by {SUNSETION_BRAND.organizer}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
