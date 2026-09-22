import React from 'react';
import { COMPETITION_EPC } from '../data/eventData';
import { Award, Calendar, Phone, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FrangipaniFlower, PalmLeafCorner, BananaLeafSilhouette } from './TropicalDecor';

interface CompetitionEPCProps {
  onRegister?: () => void;
}

export const CompetitionEPC: React.FC<CompetitionEPCProps> = ({ onRegister }) => {
  return (
    <section
      id="competition-epc"
      className="py-24 sm:py-32 bg-tropical-sunset relative overflow-hidden border-t border-[#171717]/5"
    >
      {/* Tropical accent foliage */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <BananaLeafSilhouette className="w-48 h-80" color="#3F5139" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F3EBDD] text-[#3F5139] text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D98252]" />
              <span>SPECIAL STUDENT COMPETITION</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#171717] tracking-tight">
              Event Plan Competition (EPC)
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#6F6F6F] mt-2 max-w-xl">
              {COMPETITION_EPC.themeTitle} —{' '}
              <span className="italic text-[#3F5139]">“{COMPETITION_EPC.subtitle}”</span>
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#171717]/5 text-right">
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#D98252] font-bold block">
              TOTAL PRIZEPOOL
            </span>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#171717]">
              {COMPETITION_EPC.prizepool}
            </div>
          </div>
        </div>

        {/* Competition Banner Card matching Deck Page 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F4EC] rounded-3xl p-6 sm:p-10 border border-[#171717]/10 shadow-sm">
          {/* Left Column: Timeline & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <FrangipaniFlower className="w-7 h-7" />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171717]">
                  ROOTS — Event Plan Challenge
                </h3>
                <p className="font-sans text-xs text-[#6F6F6F]">
                  Registration Fee: Free Stage 1 (Next Level IDR 150.000)
                </p>
              </div>
            </div>

            {/* Stages Timeline */}
            <div className="space-y-3 pt-2">
              <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#171717]">
                Competition Stages & Milestones:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COMPETITION_EPC.stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#171717]/5 flex items-start gap-2.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3F5139] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-sans text-xs font-semibold text-[#171717]">
                        {stage.name}
                      </div>
                      <div className="font-mono text-[11px] text-[#607A55] font-medium">
                        {stage.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacts from Deck Page 7 */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans">
              <span className="font-semibold text-[#171717]">Who to Reach Out:</span>
              {COMPETITION_EPC.contactPersons.map((cp, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${cp.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#3F5139] border border-[#171717]/10 hover:bg-[#3F5139] hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>
                    {cp.phone} ({cp.name})
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Callout with QR & Registration */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#171717]/5 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E7B85C]/20 text-[#D98252] flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>

            <div>
              <h4 className="font-serif text-2xl text-[#171717]">
                Submit Your Event Deck
              </h4>
              <p className="font-sans text-xs text-[#6F6F6F] mt-1 max-w-xs mx-auto">
                Pitch your creative event concept to renowned academic & industry judges at PIB
                College.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F4EC] border border-[#171717]/5 text-xs text-[#3F5139] font-medium">
              ✨ Final Pitching Day takes place during Sunsetion Main Stage sessions.
            </div>

            <button
              onClick={onRegister}
              className="w-full py-3.5 rounded-full bg-[#171717] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#3F5139] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Register For Competition</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
