import React, { useState } from 'react';
import { X, Check, Ticket, Sparkles, AlertCircle } from 'lucide-react';
import { TICKET_TIERS, SUNSETION_BRAND } from '../data/eventData';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<string>(TICKET_TIERS[1].id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentTier = TICKET_TIERS.find((t) => t.id === selectedTier) || TICKET_TIERS[0];

  return (
    <div
      id="ticket-reservation-modal"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#171717]/10 animate-fade-rise my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-ticket-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F4EC] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-1 mb-6">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#607A55] font-semibold">
                TICKETING & PRE-REGISTRATION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717]">
                Reserve Sunsetion 2026
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#6F6F6F]">
                Lock in your priority access for the 2026 festival pass release by Hi-Vent.
              </p>
            </div>

            {/* Pass Selection */}
            <div className="space-y-2 mb-6">
              <label className="font-sans text-xs uppercase tracking-wider font-semibold text-[#171717]">
                Select Pass Category:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {TICKET_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedTier === tier.id
                        ? 'border-[#3F5139] bg-[#F7F4EC] shadow-xs'
                        : 'border-[#171717]/10 bg-white hover:bg-[#F7F4EC]/50'
                    }`}
                  >
                    <div className="font-sans text-[10px] uppercase font-bold text-[#607A55]">
                      {tier.availability}
                    </div>
                    <div className="font-serif text-sm font-semibold text-[#171717] mt-0.5 leading-tight">
                      {tier.name.split(' ')[0]}
                    </div>
                    <div className="font-mono text-xs text-[#3F5139] font-bold mt-1">
                      {tier.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-xs font-semibold text-[#171717] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#171717]/10 text-sm font-sans focus:outline-none focus:border-[#3F5139]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold text-[#171717] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#171717]/10 text-sm font-sans focus:outline-none focus:border-[#3F5139]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold text-[#171717] mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+62 8..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#171717]/10 text-sm font-sans focus:outline-none focus:border-[#3F5139]"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  className="rounded text-[#3F5139] focus:ring-0"
                />
                <span className="font-sans text-xs text-[#6F6F6F]">
                  I am a PIB College or accredited university student (eligible for student perks)
                </span>
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#171717] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#3F5139] transition-all cursor-pointer shadow-md"
                >
                  Confirm Priority Reservation
                </button>
              </div>

              <p className="text-[11px] font-sans text-center text-[#6F6F6F]">
                *No immediate payment required. You will receive an exclusive early access link once
                the official 2026 ticket price is opened by Hi-Vent.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F3EBDD] text-[#3F5139] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-3xl text-[#171717]">Reservation Recorded!</h3>
            <p className="font-sans text-sm text-[#6F6F6F] max-w-md mx-auto">
              Thank you, <strong className="text-[#171717]">{fullName}</strong>. Your priority
              spot for <strong>{currentTier.name}</strong> at Sunsetion 2026 has been registered.
              We sent a confirmation to <strong className="text-[#171717]">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#3F5139] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#171717] transition-all cursor-pointer"
              >
                Back to Festival Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
