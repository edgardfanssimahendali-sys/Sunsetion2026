import React from 'react';
import { Utensils, Users, Store, ArrowUpRight } from 'lucide-react';
import { PalmLeafCorner, BananaLeafSilhouette } from './TropicalDecor';

interface CommunityProps {
  onOpenVendorInquiry?: () => void;
}

export const Community: React.FC<CommunityProps> = ({ onOpenVendorInquiry }) => {
  const cards = [
    {
      id: 'community-food',
      icon: Utensils,
      title: 'FOOD',
      subtitle: 'Local culinary experiences',
      description:
        'Savor artisanal Bali street gastronomy, chilled organic young coconuts, third-wave tropical coffee roasters, and plant-based feasts from celebrated island pop-ups.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      tag: 'Culinary Bazaar',
    },
    {
      id: 'community-people',
      icon: Users,
      title: 'COMMUNITY',
      subtitle: 'Meet people and communities',
      description:
        'Connect with student clubs, eco-initiatives, arts collectives, and creative enthusiasts who share your zest for outdoor gatherings and youthful collaboration.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
      tag: 'Social Gatherings',
    },
    {
      id: 'community-business',
      icon: Store,
      title: 'LOCAL BUSINESS',
      subtitle: 'Discover local brands and MSMEs',
      description:
        'Support independent Balinese artisans, sustainable fashion makers, ceramicists, and innovative campus startups showcasing handcrafted tropical lifestyle goods.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      tag: 'Creative MSMEs',
    },
  ];

  return (
    <section id="community" className="py-24 sm:py-32 bg-tropical-sunset relative overflow-hidden border-y border-[#171717]/5">
      {/* Tropical Foliage Watermark Accents */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20">
        <PalmLeafCorner className="w-80 h-80 text-[#3F5139]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <BananaLeafSilhouette className="w-48 h-80" color="#3F5139" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#607A55]">
            CULINARY & GRASSROOTS
          </span>
          <h2
            id="community-headline"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#171717] mt-2"
          >
            TASTE. MEET. <span className="italic text-[#3F5139]">CONNECT.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6F6F6F] mt-4 font-normal max-w-xl">
            Bring local food, F&B partners, creators, communities, and small businesses into one
            shared festival experience.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="group rounded-3xl bg-[#F7F4EC] border border-[#171717]/5 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-white/90 text-[#171717]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3F5139] mb-4 group-hover:bg-[#3F5139] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-3xl text-[#171717] tracking-tight">
                      {item.title}
                    </h3>
                    <div className="font-sans text-xs uppercase tracking-wider text-[#607A55] font-semibold mt-1 mb-3">
                      {item.subtitle}
                    </div>

                    <p className="font-sans text-sm text-[#6F6F6F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#171717]/5 flex items-center justify-between">
                    <button
                      onClick={onOpenVendorInquiry}
                      className="font-sans text-xs uppercase tracking-wider font-semibold text-[#3F5139] hover:text-[#171717] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Join as partner</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
