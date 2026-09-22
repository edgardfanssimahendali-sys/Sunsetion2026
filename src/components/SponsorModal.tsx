import React, { useState } from 'react';
import { X, Download, MessageSquare, Check, Sparkles, FileText } from 'lucide-react';
import { SPONSOR_PACKAGES, SUNSETION_BRAND } from '../data/eventData';

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export const SponsorModal: React.FC<SponsorModalProps> = ({
  isOpen,
  onClose,
  defaultPackage,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<string>(
    defaultPackage || SPONSOR_PACKAGES[0].name
  );
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState<'deck' | 'meeting'>('deck');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div
      id="sponsor-inquiry-modal"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#171717]/10 animate-fade-rise my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-sponsor-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F4EC] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!downloaded ? (
          <div>
            <div className="space-y-1 mb-6">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#607A55] font-semibold">
                BRAND PARTNERSHIP
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717]">
                Sunsetion 2026 Sponsorship
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#6F6F6F]">
                Connect with the Hi-Vent PIB College partnership division to receive the 2026
                Sponsor Deck or arrange an activation pitch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-[#F7F4EC] border border-[#171717]/5 mb-4">
                <button
                  type="button"
                  onClick={() => setInquiryType('deck')}
                  className={`py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer ${
                    inquiryType === 'deck'
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'text-[#6F6F6F] hover:text-[#171717]'
                  }`}
                >
                  Download Sponsor Deck
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('meeting')}
                  className={`py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer ${
                    inquiryType === 'meeting'
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'text-[#6F6F6F] hover:text-[#171717]'
                  }`}
                >
                  Talk with Our Team
                </button>
              </div>

              <div>
                <label className="block font-sans text-xs font-semibold text-[#171717] mb-1">
                  Brand or Company Name
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g., Artisan Island Roasters"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#171717]/10 text-sm font-sans focus:outline-none focus:border-[#3F5139]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold text-[#171717] mb-1">
                    Contact Representative
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#171717]/10 text-sm font-sans focus:outline-none focus:border-[#3F5139]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold text-[#171717] mb-1">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#171717]/10 text-sm font-sans focus:outline-none focus:border-[#3F5139]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs font-semibold text-[#171717] mb-1">
                  Target Tier of Interest
                </label>
                <select
                  value={selectedPkg}
                  onChange={(e) => setSelectedPkg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#171717]/10 text-sm font-sans focus:outline-none focus:border-[#3F5139]"
                >
                  {SPONSOR_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name} ({pkg.tier}) — {pkg.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#3F5139] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#171717] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  {inquiryType === 'deck' ? (
                    <>
                      <Download className="w-4 h-4" />
                      <span>ACCESS 2026 SPONSOR DECK</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" />
                      <span>REQUEST PARTNERSHIP CALL</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F3EBDD] text-[#3F5139] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-3xl text-[#171717]">Proposal Dispatched!</h3>
            <p className="font-sans text-sm text-[#6F6F6F] max-w-md mx-auto">
              Thank you, <strong className="text-[#171717]">{contactPerson}</strong> from{' '}
              <strong className="text-[#171717]">{companyName}</strong>. The Sunsetion 2026
              Partnership Deck & rate card overview has been delivered to{' '}
              <strong className="text-[#171717]">{email}</strong>. Our student liaison team will
              reach out within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setDownloaded(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#171717] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#3F5139] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
