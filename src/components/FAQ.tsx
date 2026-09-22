import React, { useState } from 'react';
import { FAQ_ITEMS, SUNSETION_BRAND } from '../data/eventData';
import { ChevronDown, HelpCircle, Mail, Phone } from 'lucide-react';
import { PalmLeafCorner, BananaLeafSilhouette } from './TropicalDecor';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-tropical-sunset relative overflow-hidden border-t border-[#171717]/5">
      {/* Tropical Foliage Watermarks */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <BananaLeafSilhouette className="w-48 h-80" color="#3F5139" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
            COMMON INQUIRIES
          </span>
          <h2
            id="faq-headline"
            className="font-serif text-4xl sm:text-6xl text-[#171717] mt-2 tracking-tight"
          >
            FREQUENTLY ASKED
          </h2>
          <p className="font-sans text-base text-[#6F6F6F] mt-3">
            Everything you need to know about joining Sunsetion 2026 as an attendee, creator,
            or partner.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="rounded-2xl border border-[#171717]/10 bg-[#F7F4EC]/50 overflow-hidden transition-all duration-300 hover:border-[#3F5139]/30"
              >
                <button
                  id={`faq-toggle-${item.id}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#171717] font-normal">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#171717] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#3F5139] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-[#6F6F6F] font-sans text-sm sm:text-base leading-relaxed border-t border-[#171717]/5 animate-fade-rise">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-8 rounded-3xl bg-[#F7F4EC] border border-[#171717]/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-2xl text-[#171717]">Still have questions?</h3>
            <p className="font-sans text-xs sm:text-sm text-[#6F6F6F] mt-1">
              Reach out directly to committee: <strong className="text-[#171717]">{SUNSETION_BRAND.committeeName}</strong> ({SUNSETION_BRAND.committeePhone}).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/6281384499621`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3F5139] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#171717] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Edgard</span>
            </a>
            <a
              href={`mailto:${SUNSETION_BRAND.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#3F5139] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
