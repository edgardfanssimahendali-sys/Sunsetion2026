import React from 'react';
import { X, Sparkles, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { ActivityItem } from '../types';

interface ActivityDetailModalProps {
  activity: ActivityItem | null;
  onClose: () => void;
  onBookActivity: () => void;
}

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({
  activity,
  onClose,
  onBookActivity,
}) => {
  if (!activity) return null;

  return (
    <div
      id="activity-detail-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-2xl border border-[#171717]/10 animate-fade-rise my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="inline-block font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E7B85C] text-[#171717] font-bold">
              {activity.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-2">
              {activity.title}
            </h3>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#607A55] font-semibold">
              ABOUT THIS HAPPENING
            </h4>
            <p className="font-sans text-sm sm:text-base text-[#171717]/80 leading-relaxed">
              {activity.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#171717]/5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#D98252]" />
              <div>
                <div className="font-sans text-xs text-[#6F6F6F]">Schedule:</div>
                <div className="font-sans text-xs font-semibold text-[#171717]">
                  Session times published in festival guide
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#171717]/5 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#607A55]" />
              <div>
                <div className="font-sans text-xs text-[#6F6F6F]">Zone Location:</div>
                <div className="font-sans text-xs font-semibold text-[#171717]">
                  Dedicated Workshop & Lawn Pavilions
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-sans text-xs uppercase tracking-wider font-semibold text-[#171717]">
              What to Expect:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6F6F6F]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3F5139]" />
                <span>Materials & tools provided on site</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3F5139]" />
                <span>Guided by experienced instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3F5139]" />
                <span>Open for all skill levels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3F5139]" />
                <span>Limited slots per time slot</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#171717]/5 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full font-sans text-xs uppercase tracking-wider text-[#6F6F6F] hover:text-[#171717]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookActivity();
              }}
              className="px-8 py-3.5 rounded-full bg-[#171717] text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#3F5139] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get Festival Pass For Entry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
