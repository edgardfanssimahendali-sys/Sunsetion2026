import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAV_ITEMS, SUNSETION_BRAND } from '../data/eventData';
import { SunsetGateIcon } from './TropicalDecor';

interface NavbarProps {
  onOpenTickets: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTickets }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'experience', 'activities', 'venue', 'sponsors'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FFF8F0]/92 backdrop-blur-md shadow-sm py-4 border-b border-[#FFAA47]/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-[#E7B85C]/20 border border-[#E7B85C]/50 flex items-center justify-center">
              <SunsetGateIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span
                  className={`font-serif text-2xl sm:text-3xl tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-[#171717]' : 'text-[#171717] sm:text-white drop-shadow-xs'
                  }`}
                >
                  {SUNSETION_BRAND.name}
                </span>
                <sup
                  className={`text-[10px] font-serif font-light transition-colors duration-300 ${
                    isScrolled ? 'text-[#6F6F6F]' : 'text-[#6F6F6F] sm:text-white/80'
                  }`}
                >
                  ®
                </sup>
              </div>
              <span
                className={`text-[9px] font-sans tracking-widest uppercase font-semibold -mt-1 hidden sm:block ${
                  isScrolled ? 'text-[#DE4B68]' : 'text-[#FFD166]'
                }`}
              >
                Tropical Bloom Festival
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-8 lg:gap-10 font-sans text-xs tracking-wider uppercase font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const itemKey = item.href.replace('#', '');
              const isActive = activeSection === itemKey;
              return (
                <a
                  key={item.name}
                  id={`nav-link-${itemKey}`}
                  href={item.href}
                  className={`transition-all duration-200 relative py-1 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#171717] font-semibold'
                        : 'text-[#6F6F6F] hover:text-[#171717]'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                        isScrolled ? 'bg-[#3F5139]' : 'bg-white'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              id="header-get-tickets-btn"
              onClick={onOpenTickets}
              className="hidden sm:inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider font-semibold rounded-full px-6 py-2.5 bg-[#171717] text-[#FFFFFF] shadow-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 hover:bg-[#3F5139] cursor-pointer"
            >
              <span>Get Tickets</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`md:hidden p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-[#171717] hover:bg-[#171717]/5'
                  : 'text-[#171717] sm:text-white hover:bg-black/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#FFF8F0] pt-24 px-8 pb-10 flex flex-col justify-between md:hidden animate-fade-rise"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#171717]/10">
              <Sparkles className="w-4 h-4 text-[#D98252]" />
              <span className="font-sans text-xs tracking-widest uppercase text-[#607A55] font-semibold">
                {SUNSETION_BRAND.edition}
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  id={`mobile-nav-${item.href.replace('#', '')}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-[#171717] hover:text-[#3F5139] transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#6F6F6F]">
                    Explore
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#171717]/10">
            <button
              id="mobile-drawer-get-tickets-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTickets();
              }}
              className="w-full flex items-center justify-center gap-2 font-sans text-sm uppercase tracking-wider font-semibold rounded-full py-4 bg-[#171717] text-white hover:bg-[#3F5139] transition-colors"
            >
              <span>Get Your Ticket</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center font-sans text-xs text-[#6F6F6F]">
              Organized by {SUNSETION_BRAND.organizer}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
