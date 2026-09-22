import React from 'react';
import { SUNSETION_BRAND } from '../data/eventData';
import { Instagram, Music, Mail, Phone, ArrowUp } from 'lucide-react';
import { FrangipaniFlower, SunsetGateIcon } from './TropicalDecor';

interface FooterProps {
  onOpenSponsors: () => void;
  onOpenVendor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSponsors, onOpenVendor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0E140F] text-[#F7F4EC] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3F5139]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Slide 17 Deck Tribute Banner */}
        <div className="mb-16 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E7B85C]/20 border border-[#E7B85C]/40 flex items-center justify-center shrink-0">
              <SunsetGateIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="font-script text-3xl sm:text-4xl text-[#E7B85C]">
                Thank you
              </div>
              <div className="text-xs font-sans text-white/80">
                “Reconnect with <strong className="text-[#607A55]">Nature</strong>,{' '}
                <strong className="text-[#D98252]">People</strong>, and{' '}
                <strong className="text-[#DE4B68]">Passion</strong>”
              </div>
            </div>
          </div>

          <div className="text-xs font-sans text-white/60 sm:text-right">
            <span className="text-[#E7B85C] font-semibold block uppercase tracking-wider">
              {SUNSETION_BRAND.college}
            </span>
            <span>{SUNSETION_BRAND.collegeTagline}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <span className="font-serif text-3xl sm:text-4xl tracking-tight text-white group-hover:text-[#E7B85C] transition-colors">
                {SUNSETION_BRAND.name}
              </span>
              <sup className="text-xs font-serif text-white/60">®</sup>
              <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#DE4B68] text-white font-bold uppercase tracking-wider">
                Tropical Bloom
              </span>
            </a>

            <p className="font-sans text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              An annual creative festival organized by {SUNSETION_BRAND.organizer},
              fusing creative student initiatives with vibrant Balinese community culture.
            </p>

            <div className="pt-2">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#E7B85C] font-semibold block mb-1">
                ORGANIZED BY
              </span>
              <p className="font-serif text-lg text-white">
                {SUNSETION_BRAND.organizer}
              </p>
            </div>
          </div>

          {/* Nav Column 1: EVENT */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E7B85C] mb-4">
              EVENT
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Sunsetion
                </a>
              </li>
              <li>
                <a href="#workshops-deck" className="hover:text-white transition-colors">
                  Workshops & Attractions
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-white transition-colors">
                  Campus Venues
                </a>
              </li>
              <li>
                <a href="#competition-epc" className="hover:text-white transition-colors">
                  Event Plan Challenge
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-white transition-colors">
                  Sponsorship Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: COMMITTEE CONTACTS */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E7B85C] mb-4">
              COMMITTEE
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/70">
              <li>
                <a
                  href={`https://wa.me/6281384499621`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E7B85C]" />
                  <span>Edgard: {SUNSETION_BRAND.committeePhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SUNSETION_BRAND.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E7B85C]" />
                  <span>{SUNSETION_BRAND.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SUNSETION_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E7B85C]" />
                  <span>{SUNSETION_BRAND.instagram}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: PARTNERS & SOCIALS */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E7B85C] mb-4">
              GET INVOLVED
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-white/70">
              <li>
                <button
                  onClick={onOpenSponsors}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Sponsor Packages
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVendor}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  F&B / MSME Vendor
                </button>
              </li>
              <li>
                <a
                  href={SUNSETION_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2 pt-2 text-xs"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E7B85C]" />
                  <span>{SUNSETION_BRAND.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50">
          <div>
            <p>© {SUNSETION_BRAND.year} {SUNSETION_BRAND.name} — {SUNSETION_BRAND.editionName}.</p>
            <p className="text-white/40 mt-0.5">{SUNSETION_BRAND.organizer}</p>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
