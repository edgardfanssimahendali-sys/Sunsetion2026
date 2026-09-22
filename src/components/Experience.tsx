import React, { useState } from 'react';
import { EXPERIENCE_CATEGORIES } from '../data/eventData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PalmLeafCorner, MonsteraLeafSilhouette } from './TropicalDecor';

export const Experience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-botanical-canvas relative overflow-hidden">
      {/* Background Tropical Foliage Watermarks */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <MonsteraLeafSilhouette className="w-96 h-96" color="#3F5139" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
            THE SUNSETION EXPERIENCE
          </span>
          <h2
            id="experience-headline"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#171717] mt-3"
          >
            COME FOR THE EVENT.
            <br />
            <span className="italic text-[#D98252]">STAY FOR THE EXPERIENCE.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6F6F6F] mt-4 font-normal max-w-xl">
            Four interconnected realms designed to spark curiosity, unleash imagination, and weave
            meaningful memories across golden tropical hours.
          </p>
        </div>

        {/* 4 Experience Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EXPERIENCE_CATEGORIES.map((cat, index) => (
            <div
              key={cat.number}
              id={`experience-card-${cat.number}`}
              onMouseEnter={() => setActiveCategory(index)}
              className="group relative rounded-3xl bg-[#FFFFFF] border border-[#171717]/5 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with editorial zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block font-sans text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-white/90 text-[#171717] backdrop-blur-xs">
                    {cat.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Large Number */}
                  <span className="font-serif text-4xl sm:text-5xl text-[#3F5139]/40 group-hover:text-[#D98252] transition-colors duration-300">
                    {cat.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] mt-2 mb-3 tracking-tight">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Micro Action link */}
                <div className="pt-6 mt-6 border-t border-[#171717]/5 flex items-center justify-between">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#3F5139] group-hover:text-[#171717] transition-colors">
                    Explore Realm
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F7F4EC] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-white group-hover:translate-x-1 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
