import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/eventData';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GalleryItem } from '../types';
import { PalmLeafCorner, BananaLeafSilhouette } from './TropicalDecor';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-botanical-canvas relative overflow-hidden border-t border-[#171717]/5">
      {/* Tropical Foliage Watermarks */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-20">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-20">
        <BananaLeafSilhouette className="w-48 h-80" color="#3F5139" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-center mx-auto">
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
            VISUAL ARCHIVE
          </span>
          <h2
            id="gallery-headline"
            className="font-serif text-4xl sm:text-6xl text-[#171717] mt-2 tracking-tight"
          >
            A GLIMPSE OF SUNSETION
          </h2>
          <p className="font-sans text-base text-[#6F6F6F] mt-3">
            Moments frozen in golden light — where music, laughter, hands-on craft, and island breezes
            converge.
          </p>
        </div>

        {/* Masonry Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const aspectClasses =
              item.aspect === 'portrait'
                ? 'aspect-[3/4]'
                : item.aspect === 'landscape'
                ? 'aspect-[4/3]'
                : 'aspect-square';

            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setSelectedPhoto(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-[#F7F4EC] ${aspectClasses}`}
              >
                {/* Image with zoom on hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />

                {/* Floating Category Label & Title on Hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold">
                      {item.category}
                    </span>
                    <div className="p-1.5 rounded-full bg-white/20 text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-white font-normal leading-snug">
                      {item.title}
                    </h3>
                    <span className="font-sans text-xs text-[#E7B85C] uppercase tracking-wider">
                      Sunsetion Archive
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-rise"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121A13] rounded-3xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 text-white flex justify-between items-center bg-[#0E140F]">
              <div>
                <span className="font-sans text-xs text-[#E7B85C] uppercase tracking-widest font-semibold">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif text-2xl mt-1">{selectedPhoto.title}</h3>
              </div>
              <span className="font-sans text-xs text-white/50">
                Official Sunsetion Photographic Moment
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
