import React, { useState } from 'react';
import {
  SPONSOR_PACKAGES,
  SPONSOR_BRAND_MATRIX,
  SPONSOR_PRODUCT_MATRIX,
} from '../data/eventData';
import {
  Check,
  X as XIcon,
  Download,
  MessageSquare,
  Sparkles,
  Table,
  LayoutGrid,
} from 'lucide-react';
import { FrangipaniFlower, PalmLeafCorner, MonsteraLeafSilhouette } from './TropicalDecor';

interface SponsorsProps {
  onDownloadDeck: () => void;
  onTalkToTeam: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onDownloadDeck, onTalkToTeam }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'brand_matrix' | 'product_matrix'>('cards');

  const renderCellContent = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#607A55]/15 text-[#3F5139] font-bold text-xs">
          ✓
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DE4B68]/15 text-[#DE4B68] font-bold text-xs">
          ✕
        </span>
      );
    }
    return (
      <span className="text-xs font-sans text-[#171717] font-medium leading-tight">
        {value}
      </span>
    );
  };

  return (
    <section id="sponsors" className="py-24 sm:py-32 bg-botanical-canvas relative overflow-hidden">
      {/* Background Foliage Watermarks */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-25">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-20">
        <MonsteraLeafSilhouette className="w-96 h-96" color="#3F5139" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#171717]/5 mb-3 shadow-xs">
              <FrangipaniFlower className="w-4 h-4" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-[#607A55]">
                PARTNERSHIP & SPONSOR PACKAGES
              </span>
            </div>
            <h2
              id="sponsors-headline"
              className="font-serif text-4xl sm:text-6xl text-[#171717] tracking-tight"
            >
              Sponsor Packages (Deck Page 15 & 16)
            </h2>
            <p className="font-sans text-base text-[#6F6F6F] mt-2 leading-relaxed">
              Connect your brand with 700+ energetic youth, students, and community attendees
              through immersive on-ground and digital activations at PIB College.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="sponsor-download-deck-btn"
              onClick={onDownloadDeck}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-white text-xs font-sans uppercase tracking-wider font-semibold hover:bg-[#3F5139] hover:scale-[1.02] transition-all cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD SPONSOR DECK</span>
            </button>

            <button
              id="sponsor-talk-team-btn"
              onClick={onTalkToTeam}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] border border-[#171717]/15 text-[#171717] text-xs font-sans uppercase tracking-wider font-semibold hover:bg-[#F3EBDD] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>TALK TO OUR TEAM</span>
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-2 rounded-2xl bg-white border border-[#171717]/5 shadow-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('cards')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-[#3F5139] text-white shadow-xs'
                  : 'text-[#6F6F6F] hover:text-[#171717]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Package Cards</span>
            </button>
            <button
              onClick={() => setViewMode('brand_matrix')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'brand_matrix'
                  ? 'bg-[#D98252] text-white shadow-xs'
                  : 'text-[#6F6F6F] hover:text-[#171717]'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Brand Experience (Slide 15)</span>
            </button>
            <button
              onClick={() => setViewMode('product_matrix')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'product_matrix'
                  ? 'bg-[#DE4B68] text-white shadow-xs'
                  : 'text-[#6F6F6F] hover:text-[#171717]'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Product Experience (Slide 16)</span>
            </button>
          </div>

          <div className="font-mono text-xs text-[#6F6F6F] px-3">
            HIMA Event Management PIB College • Hi-Vent
          </div>
        </div>

        {/* 1. CARDS VIEW */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-rise">
            {SPONSOR_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                id={`sponsor-package-${pkg.id}`}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? 'bg-[#3F5139] text-[#F7F4EC] shadow-xl border border-[#E7B85C]/40 ring-1 ring-[#E7B85C]/40'
                    : 'bg-[#FFFFFF] text-[#171717] border border-[#171717]/5 shadow-xs hover:border-[#3F5139]/30'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="font-sans text-[10px] tracking-widest uppercase font-bold px-3.5 py-1 rounded-full bg-[#E7B85C] text-[#171717] shadow-xs flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>RECOMMENDED TIER</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                        pkg.popular ? 'text-[#E7B85C]' : 'text-[#607A55]'
                      }`}
                    >
                      {pkg.tier}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-2">
                    {pkg.name}
                  </h3>

                  {/* Exact Price from Deck */}
                  <div
                    className={`font-mono text-base py-2 px-3 rounded-xl inline-block mb-6 font-bold ${
                      pkg.popular
                        ? 'bg-white/15 text-[#F3EBDD]'
                        : 'bg-[#F7F4EC] text-[#3F5139]'
                    }`}
                  >
                    {pkg.price}
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-3 pt-2">
                    {pkg.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs">
                        <div
                          className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            pkg.popular
                              ? 'bg-[#E7B85C]/20 text-[#E7B85C]'
                              : 'bg-[#607A55]/15 text-[#607A55]'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span
                          className={`font-sans leading-relaxed ${
                            pkg.popular ? 'text-[#F7F4EC]/90' : 'text-[#6F6F6F]'
                          }`}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-current/10">
                  <button
                    onClick={onTalkToTeam}
                    className={`w-full py-3 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      pkg.popular
                        ? 'bg-[#E7B85C] text-[#171717] hover:bg-white'
                        : 'bg-[#171717] text-white hover:bg-[#3F5139]'
                    }`}
                  >
                    Partner with {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. BRAND EXPERIENCE MATRIX VIEW (Deck Slide 15) */}
        {viewMode === 'brand_matrix' && (
          <div className="bg-white rounded-3xl border border-[#171717]/10 shadow-sm overflow-hidden animate-fade-rise">
            <div className="p-6 border-b border-[#171717]/5 flex items-center justify-between bg-[#F7F4EC]/50">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D98252] font-bold">
                  DECK SLIDE 15
                </span>
                <h3 className="font-serif text-2xl text-[#171717]">
                  Your Brand Experience Matrix
                </h3>
              </div>
              <div className="text-xs text-[#6F6F6F] hidden sm:block">
                Comprehensive comparison of promotional & media deliverables
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#171717]/10 bg-[#FAF8F5]">
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#6F6F6F]">
                      Deliverables / Benefits
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#DE4B68] text-center w-40">
                      <div>RADIANCE</div>
                      <div className="text-[10px] text-[#6F6F6F]">15.000.000</div>
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#3F5139] text-center w-40">
                      <div>TROPICAL</div>
                      <div className="text-[10px] text-[#6F6F6F]">10.000.000</div>
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#2BAEBA] text-center w-40">
                      <div>VIBRANT</div>
                      <div className="text-[10px] text-[#6F6F6F]">5.000.000</div>
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#E7B85C] text-center w-40">
                      <div>HEAVENLY</div>
                      <div className="text-[10px] text-[#6F6F6F]">&lt; 5.000.000</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#171717]/5">
                  {SPONSOR_BRAND_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F4EC]/30 transition-colors">
                      <td className="p-4 text-xs font-sans text-[#171717] font-medium">
                        {row.benefit}
                      </td>
                      <td className="p-4 text-center">{renderCellContent(row.radiance)}</td>
                      <td className="p-4 text-center">{renderCellContent(row.tropical)}</td>
                      <td className="p-4 text-center">{renderCellContent(row.vibrant)}</td>
                      <td className="p-4 text-center">{renderCellContent(row.heavenly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. PRODUCT EXPERIENCE MATRIX VIEW (Deck Slide 16) */}
        {viewMode === 'product_matrix' && (
          <div className="bg-white rounded-3xl border border-[#171717]/10 shadow-sm overflow-hidden animate-fade-rise">
            <div className="p-6 border-b border-[#171717]/5 flex items-center justify-between bg-[#F7F4EC]/50">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#DE4B68] font-bold">
                  DECK SLIDE 16
                </span>
                <h3 className="font-serif text-2xl text-[#171717]">
                  Your Product Experience Matrix
                </h3>
              </div>
              <div className="text-xs text-[#6F6F6F] hidden sm:block">
                On-ground sales, booth locations, product samplings & stage endorsements
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#171717]/10 bg-[#FAF8F5]">
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#6F6F6F]">
                      Product Experience Deliverables
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#DE4B68] text-center w-40">
                      <div>RADIANCE</div>
                      <div className="text-[10px] text-[#6F6F6F]">15.000.000</div>
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#3F5139] text-center w-40">
                      <div>TROPICAL</div>
                      <div className="text-[10px] text-[#6F6F6F]">10.000.000</div>
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#2BAEBA] text-center w-40">
                      <div>VIBRANT</div>
                      <div className="text-[10px] text-[#6F6F6F]">5.000.000</div>
                    </th>
                    <th className="p-4 text-xs font-mono uppercase tracking-wider text-[#E7B85C] text-center w-40">
                      <div>HEAVENLY</div>
                      <div className="text-[10px] text-[#6F6F6F]">&lt; 5.000.000</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#171717]/5">
                  {SPONSOR_PRODUCT_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F4EC]/30 transition-colors">
                      <td className="p-4 text-xs font-sans text-[#171717] font-medium">
                        {row.benefit}
                      </td>
                      <td className="p-4 text-center">{renderCellContent(row.radiance)}</td>
                      <td className="p-4 text-center">{renderCellContent(row.tropical)}</td>
                      <td className="p-4 text-center">{renderCellContent(row.vibrant)}</td>
                      <td className="p-4 text-center">{renderCellContent(row.heavenly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
