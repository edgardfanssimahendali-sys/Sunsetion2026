import React from 'react';
import { TICKET_TIERS } from '../data/eventData';
import { ArrowUpRight, Check, Sparkles, ShieldCheck, Ticket } from 'lucide-react';
import { TicketTier } from '../types';
import { PalmLeafCorner, MonsteraLeafSilhouette } from './TropicalDecor';

interface TicketsProps {
  onOpenTickets: () => void;
  onScrollToDetails: () => void;
}

export const Tickets: React.FC<TicketsProps> = ({ onOpenTickets, onScrollToDetails }) => {
  return (
    <section id="tickets" className="py-24 sm:py-32 bg-tropical-sunset relative overflow-hidden border-t border-[#171717]/5">
      {/* Tropical Foliage Watermark Accents */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-25">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <MonsteraLeafSilhouette className="w-96 h-96" color="#3F5139" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
            PASSES & REGISTRATION
          </span>
          <h2
            id="tickets-headline"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#171717] mt-2"
          >
            YOUR SUNSETION
            <br />
            <span className="italic text-[#3F5139]">EXPERIENCE STARTS HERE.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6F6F6F] mt-4 font-normal max-w-xl">
            Save your spot and be part of Sunsetion 2026. Secure your pass to an unforgettable
            amalgam of tropical tunes, community warmth, and hands-on artistry.
          </p>
        </div>

        {/* 3 Ticket Tiers Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TICKET_TIERS.map((tier) => (
            <div
              key={tier.id}
              id={`ticket-card-${tier.id}`}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                tier.recommended
                  ? 'bg-[#FFFFFF] border-2 border-[#3F5139] shadow-xl'
                  : 'bg-[#FFFFFF] border border-[#171717]/5 shadow-xs hover:border-[#3F5139]/30'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-sans text-[10px] tracking-widest uppercase font-bold px-3.5 py-1 rounded-full bg-[#3F5139] text-white shadow-xs">
                    MOST POPULAR PASS
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold text-[#607A55]">
                    {tier.availability}
                  </span>
                  <Ticket className="w-5 h-5 text-[#D98252]" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] font-medium tracking-tight mb-3">
                  {tier.name}
                </h3>

                {/* Editable 2026 Price Box */}
                <div className="mb-6 p-3.5 rounded-2xl bg-[#F7F4EC] border border-[#171717]/5 flex items-baseline gap-2">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#171717]">
                    {tier.price}
                  </span>
                  <span className="font-sans text-xs text-[#6F6F6F]">/ pass</span>
                </div>

                {/* Included Perks */}
                <div className="space-y-3 pt-2">
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Includes:
                  </span>
                  <ul className="space-y-2.5">
                    {tier.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#6F6F6F] leading-relaxed">
                        <Check className="w-4 h-4 text-[#3F5139] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs inside card */}
              <div className="pt-8 mt-8 border-t border-[#171717]/5 space-y-3">
                <button
                  id={`ticket-get-btn-${tier.id}`}
                  onClick={onOpenTickets}
                  className={`w-full py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.recommended
                      ? 'bg-[#171717] text-white hover:bg-[#3F5139] shadow-sm'
                      : 'bg-[#F7F4EC] text-[#171717] hover:bg-[#171717] hover:text-white'
                  }`}
                >
                  <span>GET YOUR TICKET</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onScrollToDetails}
                  className="w-full py-2 text-center font-sans text-xs text-[#6F6F6F] hover:text-[#171717] transition-colors cursor-pointer"
                >
                  VIEW EVENT DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Badge */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-[#6F6F6F]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3F5139]" />
            <span>Official PIB College Hi-Vent Ticket Portal</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div>Instant Digital Pass & QR wristband collection</div>
        </div>
      </div>
    </section>
  );
};
