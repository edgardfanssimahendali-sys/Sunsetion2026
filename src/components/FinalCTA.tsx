import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SUNSETION_BRAND } from '../data/eventData';
import { PalmLeafCorner, MonsteraLeafSilhouette } from './TropicalDecor';

interface FinalCTAProps {
  onOpenTickets: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTickets }) => {
  return (
    <section
      id="final-cta"
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center py-24 bg-[#121016] text-white"
    >
      {/* Tropical Foliage Silhouettes Framing the Sunset */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-30 z-1">
        <PalmLeafCorner className="w-96 h-96 text-[#FFAA47]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-25 z-1">
        <MonsteraLeafSilhouette className="w-96 h-96" color="#4E6844" />
      </div>

      {/* Tropical Sunset Background Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Tropical sunset atmosphere"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121016] via-[#121016]/50 to-[#121016]" />
        {/* Warm sunset radiant atmospheric overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,170,71,0.28)_0%,rgba(232,93,117,0.18)_45%,transparent_75%)]" />
      </div>

      {/* Subtle simulated grain / texture layer */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Small Brand Text */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-sans tracking-[0.25em] uppercase font-semibold text-[#E7B85C]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{SUNSETION_BRAND.fullTitle}</span>
        </div>

        {/* Large Cinematic Closing Text */}
        <h2
          id="final-cta-headline"
          className="font-serif text-6xl sm:text-8xl md:text-9xl font-normal leading-[0.9] tracking-tight text-white drop-shadow-md"
        >
          SEE YOU
          <br />
          <span className="italic font-light text-[#F3EBDD]">AT SUNSETION.</span>
        </h2>

        <p className="font-sans text-base sm:text-xl text-[#F3EBDD]/80 max-w-xl font-light leading-relaxed">
          Where Bali’s tropical twilight meets creative campus vitality. Be part of the next
          chapter of memory-making.
        </p>

        {/* Primary CTA Button */}
        <div className="pt-4">
          <button
            id="final-cta-ticket-btn"
            onClick={onOpenTickets}
            className="group inline-flex items-center gap-3 font-sans text-sm tracking-wider uppercase font-semibold rounded-full px-10 py-5 bg-[#E7B85C] text-[#171717] hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-2xl cursor-pointer"
          >
            <span>GET YOUR TICKET</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        <p className="font-sans text-xs text-white/50 tracking-wider uppercase">
          Organized by {SUNSETION_BRAND.organizer}
        </p>
      </div>
    </section>
  );
};
