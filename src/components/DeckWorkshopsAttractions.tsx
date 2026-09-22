import React, { useState } from 'react';
import { WORKSHOP_TRACKS, DECK_ATTRACTIONS, DECK_SCHEDULE } from '../data/eventData';
import { FrangipaniFlower, MonsteraLeafSilhouette, PalmLeafCorner, FloatingTropicalPetals } from './TropicalDecor';
import { Clock, MapPin, Sparkles, Utensils, Laptop, Camera, Coffee, ArrowRight } from 'lucide-react';

interface DeckWorkshopsAttractionsProps {
  onSelectAttraction?: (name: string) => void;
  onBookWorkshop?: () => void;
}

export const DeckWorkshopsAttractions: React.FC<DeckWorkshopsAttractionsProps> = ({
  onSelectAttraction,
  onBookWorkshop,
}) => {
  const [activeTab, setActiveTab] = useState<'workshops' | 'attractions'>('workshops');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="workshops-deck" className="py-24 sm:py-32 bg-botanical-canvas relative overflow-hidden">
      {/* Background Foliage Watermarks */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-25">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <MonsteraLeafSilhouette className="w-96 h-96" color="#3F5139" />
      </div>
      <FloatingTropicalPetals />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xs border border-[#171717]/5 mb-4">
            <FrangipaniFlower className="w-4 h-4" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#607A55] font-semibold">
              ACADEMIC & CREATIVE HAPPENINGS
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#171717] tracking-tight">
            Workshops & Attractions
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#6F6F6F] mt-3">
            Directly curated by HIMA Event Management PIB College. Learn from industry masters,
            explore curated vintage fashion, and spark your creativity.
          </p>

          {/* Toggle Pills */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#171717]/10 mt-8 shadow-xs">
            <button
              onClick={() => setActiveTab('workshops')}
              className={`px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === 'workshops'
                  ? 'bg-[#3F5139] text-white shadow-xs'
                  : 'text-[#6F6F6F] hover:text-[#171717]'
              }`}
            >
              Workshops (Page 12)
            </button>
            <button
              onClick={() => setActiveTab('attractions')}
              className={`px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === 'attractions'
                  ? 'bg-[#DE4B68] text-white shadow-xs'
                  : 'text-[#6F6F6F] hover:text-[#171717]'
              }`}
            >
              Our Attractions (Page 13)
            </button>
          </div>
        </div>

        {/* WORKSHOPS VIEW */}
        {activeTab === 'workshops' && (
          <div className="space-y-12 animate-fade-rise">
            {/* Schedule Banner from Deck Page 5 */}
            <div className="p-5 rounded-2xl bg-white border border-[#171717]/5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D98252]" />
                <div>
                  <span className="font-semibold text-[#171717]">Workshop Schedule: </span>
                  <span className="text-[#6F6F6F]">{DECK_SCHEDULE.workshop.date}</span> (
                  {DECK_SCHEDULE.workshop.time})
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#607A55]" />
                <div>
                  <span className="font-semibold text-[#171717]">Location: </span>
                  <span className="text-[#6F6F6F]">{DECK_SCHEDULE.workshop.location}</span>
                </div>
              </div>
              <button
                onClick={onBookWorkshop}
                className="px-4 py-2 rounded-full bg-[#171717] text-white hover:bg-[#3F5139] transition-colors font-semibold uppercase tracking-wider cursor-pointer text-[11px]"
              >
                Join Workshop Pass
              </button>
            </div>

            {/* 4 Workshop Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKSHOP_TRACKS.map((track) => (
                <div
                  key={track.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#171717]/5 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 p-2 rounded-full bg-white/90 text-[#3F5139] shadow-xs">
                      {getIcon(track.iconName)}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#E7B85C] text-[#171717]">
                        {track.target}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#607A55] font-semibold block">
                        {track.division}
                      </span>
                      <h3 className="font-serif text-2xl text-[#171717]">{track.title}</h3>
                      <p className="font-sans text-xs text-[#6F6F6F] leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    <button
                      onClick={onBookWorkshop}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3F5139] group-hover:text-[#DE4B68] transition-colors cursor-pointer pt-2"
                    >
                      <span>Reserve Workshop Spot</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ATTRACTIONS VIEW (Deck Page 13) */}
        {activeTab === 'attractions' && (
          <div id="attractions-deck" className="space-y-8 animate-fade-rise">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DECK_ATTRACTIONS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectAttraction && onSelectAttraction(item.title)}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#171717]/5 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 text-[#DE4B68] shadow-xs">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white/90 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#E7B85C]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-serif text-2xl text-[#171717] group-hover:text-[#3F5139] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-[#6F6F6F] leading-relaxed mt-1.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#607A55]">
                      <span>Experience this attraction</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
