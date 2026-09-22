import React from 'react';
import { ArrowUpRight, Compass, Sparkles, HeartHandshake, Globe } from 'lucide-react';
import { SUNSETION_BRAND } from '../data/eventData';
import { PalmLeafCorner, MonsteraLeafSilhouette, FrangipaniFlower } from './TropicalDecor';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Creative Campus Initiative',
      desc: 'Empowering student innovation and collaborative talent from PIB College.',
    },
    {
      icon: Compass,
      title: 'Youth Lifestyle Trends',
      desc: 'Curating modern culture, sustainable fashion, music, and mindfulness.',
    },
    {
      icon: HeartHandshake,
      title: 'Community Engagement',
      desc: 'Bridging campus creators with local Balinese MSMEs and public enthusiasts.',
    },
    {
      icon: Globe,
      title: 'Global-Inspired Concepts',
      desc: 'Fusing international outdoor festival aesthetics with authentic island warmth.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-botanical-canvas relative overflow-hidden">
      {/* Background Tropical Botanical Foliage Overlays */}
      <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 pointer-events-none">
        <PalmLeafCorner className="w-80 h-80 opacity-40 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-16 translate-y-16 pointer-events-none">
        <MonsteraLeafSilhouette className="w-96 h-96 opacity-30" color="#3F5139" />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none opacity-20 -rotate-12">
        <FrangipaniFlower className="w-12 h-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
                ABOUT SUNSETION
              </span>
              <h2
                id="about-headline"
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#171717]"
              >
                MORE THAN AN EVENT.
                <br />
                <span className="italic text-[#3F5139]">IT’S AN EXPERIENCE.</span>
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
              Sunsetion is an annual event organized by{' '}
              <strong className="font-semibold text-[#171717]">{SUNSETION_BRAND.organizer}</strong>,
              created as a space where students, communities, and local businesses can connect
              through creativity, lifestyle, and shared experiences.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#6F6F6F] leading-relaxed">
              Building upon the successful foundation of previous editions, the 2026 evolution
              elevates campus vitality into an open tropical sanctuary where ideas spark, rhythms
              unwind, and friendships blossom under golden skies.
            </p>

            {/* Core Pillars from the 2025 foundation */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    id={`about-pillar-${idx}`}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#171717]/5 shadow-xs hover:border-[#3F5139]/30 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#3F5139] mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans text-sm font-semibold text-[#171717] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#6F6F6F] leading-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Editorial Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl border border-[#171717]/10 group">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80"
                  alt="Students and community gathering at Sunsetion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#E7B85C] font-semibold">
                    CAMPUS & COMMUNITY SYNERGY
                  </span>
                  <p className="font-serif text-2xl font-light text-[#F3EBDD]">
                    Where youthful passion meets tropical tranquility.
                  </p>
                </div>
              </div>

              {/* Overlapping Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 sm:p-6 bg-[#3F5139] text-[#F7F4EC] rounded-2xl shadow-xl max-w-xs border border-white/10 hidden sm:block">
                <div className="space-y-1">
                  <div className="font-sans text-[11px] uppercase tracking-wider text-[#E7B85C] font-semibold">
                    Organized by Hi-Vent
                  </div>
                  <div className="font-serif text-lg leading-snug">
                    HIMA Event Management PIB College
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
