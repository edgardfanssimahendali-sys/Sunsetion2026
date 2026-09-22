import React from 'react';
import { PERFORMERS_LIST } from '../data/eventData';
import { Music2, Sparkles, Mic2, Disc3 } from 'lucide-react';
import { PalmLeafCorner, MonsteraLeafSilhouette } from './TropicalDecor';

export const Entertainment: React.FC = () => {
  return (
    <section
      id="entertainment"
      className="py-28 sm:py-36 bg-jungle-stage text-[#F7F4EC] relative overflow-hidden"
    >
      {/* Tropical Night Stage Atmosphere Overlays */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20">
        <PalmLeafCorner className="w-96 h-96 text-[#607A55]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <MonsteraLeafSilhouette className="w-96 h-96" color="#607A55" />
      </div>

      {/* Cinematic subtle light glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E7B85C]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#DE4B68]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[300px] bg-[#2BAEBA]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#E7B85C] mb-4">
            <Music2 className="w-3.5 h-3.5" />
            <span>LIVE EXPERIENCE</span>
          </div>

          <h2
            id="entertainment-headline"
            className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white font-normal"
          >
            THE STAGE
          </h2>

          <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold text-[#F3EBDD]/70 mt-3">
            MUSIC. PERFORMANCE. CULTURE.
          </p>

          <p className="font-sans text-sm sm:text-base text-white/60 max-w-xl mx-auto mt-4 font-light">
            As the tropical sun dips below the horizon, the amphitheater lights illuminate
            breathtaking musical sets, cultural choreography, and campus synergy.
          </p>
        </div>

        {/* 4 Performer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERFORMERS_LIST.map((performer, idx) => (
            <div
              key={performer.id}
              id={`performer-card-${performer.id}`}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#E7B85C]/50 transition-all duration-500 flex flex-col justify-end min-h-[420px] p-6 sm:p-7"
            >
              {/* Performer Image */}
              <img
                src={performer.image}
                alt={performer.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-80"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E140F] via-[#0E140F]/70 to-transparent" />

              {/* Card Meta Content */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block font-sans text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full bg-[#E7B85C]/20 text-[#E7B85C] border border-[#E7B85C]/30">
                    {performer.role}
                  </span>
                  <Disc3 className="w-4 h-4 text-white/40 group-hover:rotate-180 transition-transform duration-1000" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight leading-tight group-hover:text-[#E7B85C] transition-colors">
                  {performer.title}
                </h3>

                <div className="font-sans text-xs text-[#E7B85C] uppercase tracking-wider font-semibold">
                  {performer.genre}
                </div>

                <p className="font-sans text-xs text-white/70 leading-relaxed pt-1">
                  {performer.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-sans text-white/50">
                  <span>Lineup</span>
                  <span className={performer.isConfirmed ? 'text-[#607A55] font-semibold' : 'text-[#E7B85C]'}>
                    {performer.isConfirmed ? '✓ Confirmed (Deck Slide 14)' : 'Guest Announcement'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
