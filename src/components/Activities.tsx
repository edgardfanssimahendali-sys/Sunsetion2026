import React, { useState } from 'react';
import { ACTIVITIES_LIST } from '../data/eventData';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { ActivityItem } from '../types';
import { PalmLeafCorner, BananaLeafSilhouette } from './TropicalDecor';

interface ActivitiesProps {
  onSelectActivity?: (activity: ActivityItem) => void;
}

export const Activities: React.FC<ActivitiesProps> = ({ onSelectActivity }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Wellness & Mindfulness', 'Craft & Hands-on', 'Visual Arts', 'Sustainable Fashion', 'Culinary Bazaar', 'Lifestyle & Design'];

  const filteredActivities =
    selectedFilter === 'All'
      ? ACTIVITIES_LIST
      : ACTIVITIES_LIST.filter((a) => a.category.toLowerCase().includes(selectedFilter.toLowerCase()) || selectedFilter.toLowerCase().includes(a.category.toLowerCase()));

  return (
    <section id="activities" className="py-24 sm:py-32 bg-tropical-warmth relative overflow-hidden">
      {/* Botanical Silhouette Background Accents */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <BananaLeafSilhouette className="w-48 h-80" color="#3F5139" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
              ACTIVITIES & HAPPENINGS
            </span>
            <h2
              id="activities-headline"
              className="font-serif text-4xl sm:text-6xl text-[#171717] mt-2 tracking-tight"
            >
              WHAT’S HAPPENING
            </h2>
            <p className="font-sans text-base text-[#6F6F6F] mt-3">
              Explore hands-on classes, art jams, thrift alleys, and open-air games designed for
              lively creative discovery.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                id={`activity-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedFilter(cat)}
                className={`font-sans text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#171717] text-white shadow-xs font-semibold'
                    : 'bg-[#F7F4EC] text-[#6F6F6F] hover:text-[#171717] hover:bg-[#F3EBDD]'
                }`}
              >
                {cat === 'All' ? 'All Activities' : cat.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              id={`activity-card-${act.id}`}
              onClick={() => onSelectActivity && onSelectActivity(act)}
              className="group rounded-3xl bg-[#F7F4EC] border border-[#171717]/5 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-serif text-lg font-medium px-3 py-1 rounded-full bg-[#171717]/80 text-white backdrop-blur-xs">
                    {act.number}
                  </span>
                </div>

                {/* Highlight Tag */}
                {act.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="font-sans text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full bg-[#E7B85C] text-[#171717]">
                      {act.highlight}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="font-sans text-[11px] tracking-widest uppercase font-semibold text-[#607A55]">
                    {act.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] mt-1.5 mb-2.5 leading-snug group-hover:text-[#3F5139] transition-colors">
                    {act.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
                    {act.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="pt-6 mt-6 border-t border-[#171717]/5 flex items-center justify-between">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#3F5139] group-hover:text-[#171717] transition-colors">
                    View Activity Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#171717] group-hover:bg-[#3F5139] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
