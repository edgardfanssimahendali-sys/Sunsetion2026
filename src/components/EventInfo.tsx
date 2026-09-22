import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowUpRight } from 'lucide-react';
import { EVENT_INFO_CARDS } from '../data/eventData';
import { BananaLeafSilhouette, PalmLeafCorner } from './TropicalDecor';

interface EventInfoProps {
  onNotifyDate?: () => void;
}

export const EventInfo: React.FC<EventInfoProps> = ({ onNotifyDate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#D98252]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#E7B85C]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#607A55]" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[#3F5139]" />;
    }
  };

  return (
    <section id="event-info" className="py-20 sm:py-24 bg-sunsetion-golden relative overflow-hidden border-b border-[#FFAA47]/20">
      {/* Botanical Background Silhouettes */}
      <div className="absolute -left-12 top-0 pointer-events-none opacity-20">
        <BananaLeafSilhouette className="w-48 h-80" color="#33442E" />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-25">
        <PalmLeafCorner className="w-72 h-72 text-[#4E6844]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#4E6844]">
              AT A GLANCE • HI-VENT DECK SLIDES 5 & 6
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1F1914] mt-2">
              Event Information
            </h2>
          </div>
          <p className="font-sans text-sm text-[#706256] max-w-sm">
            Key coordinates for Sunsetion 2026. Official date, venue, and time are maintained in
            real-time as approvals finalize.
          </p>
        </div>

        {/* Four Information Cards with Tropical Sunset Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_INFO_CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="p-8 rounded-3xl sunsetion-glass hover:shadow-lg hover:border-[#F57224]/50 hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#706256]">
                    {card.label}
                  </span>
                  <div className="p-2.5 rounded-full bg-[#FFF8F0] group-hover:bg-[#FCEFD8] transition-colors shadow-xs">
                    {getIcon(card.iconName)}
                  </div>
                </div>

                <div className="font-serif text-2xl sm:text-3xl text-[#1F1914] font-medium leading-tight group-hover:text-[#F57224] transition-colors">
                  {card.value}
                </div>
              </div>

              {card.subtext && (
                <div className="mt-8 pt-4 border-t border-[#FFAA47]/15 flex items-center justify-between">
                  <span className="font-sans text-xs text-[#706256] leading-normal">
                    {card.subtext}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
