import React from 'react';

// Handcrafted Frangipani / Bunga Kamboja SVG matching the PDF deck
export const FrangipaniFlower: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} shrink-0`}
  >
    {/* Petal 1 */}
    <path
      d="M50 50 C45 20 25 10 32 30 C38 45 46 48 50 50 Z"
      fill="#F28C9F"
      stroke="#D2506B"
      strokeWidth="1.5"
    />
    <path d="M47 45 C40 30 35 22 36 28" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />

    {/* Petal 2 */}
    <path
      d="M50 50 C70 20 85 30 75 42 C65 52 56 50 50 50 Z"
      fill="#F7A2B2"
      stroke="#D2506B"
      strokeWidth="1.5"
    />

    {/* Petal 3 */}
    <path
      d="M50 50 C80 55 90 75 70 82 C55 86 52 60 50 50 Z"
      fill="#E85D75"
      stroke="#B8324C"
      strokeWidth="1.5"
    />

    {/* Petal 4 */}
    <path
      d="M50 50 C45 80 25 90 20 75 C15 60 42 54 50 50 Z"
      fill="#F47A90"
      stroke="#B8324C"
      strokeWidth="1.5"
    />

    {/* Petal 5 */}
    <path
      d="M50 50 C15 50 10 25 28 22 C42 20 46 42 50 50 Z"
      fill="#FFA8B8"
      stroke="#D2506B"
      strokeWidth="1.5"
    />

    {/* Bright Golden Center Core */}
    <circle cx="50" cy="50" r="11" fill="#FFCC00" />
    <circle cx="50" cy="50" r="6" fill="#FFA500" />
    <circle cx="48" cy="48" r="2" fill="#FFFFFF" opacity="0.8" />
  </svg>
);

// Sunset Candi Bentar (Balinese Temple Gate) + Sun icon from PIB Sunsetion logo
export const SunsetGateIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} shrink-0`}
  >
    {/* Sun Disk */}
    <circle cx="30" cy="30" r="24" fill="url(#sunGradient)" />
    {/* Birds */}
    <path d="M22 14 Q25 12 28 14 Q31 12 34 14" stroke="#4A1E0E" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M32 18 Q34 16 36 18 Q38 16 40 18" stroke="#4A1E0E" strokeWidth="1" strokeLinecap="round" />
    {/* Silhouette Gate & Palm / People */}
    <path
      d="M12 48 L18 48 L18 34 L21 34 L21 48 L25 48 L25 26 L23 26 L23 23 L26 21 L26 48 L34 48 L34 21 L37 23 L37 26 L35 26 L35 48 L39 48 L39 34 L42 34 L42 48 L48 48 L48 50 L12 50 Z"
      fill="#281106"
    />
    <defs>
      <linearGradient id="sunGradient" x1="30" y1="6" x2="30" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5B041" />
        <stop offset="0.6" stopColor="#E67E22" />
        <stop offset="1" stopColor="#D35400" />
      </linearGradient>
    </defs>
  </svg>
);

// Monstera Leaf Silhouette
export const MonsteraLeafSilhouette: React.FC<{ className?: string; color?: string; opacity?: number }> = ({
  className = 'w-72 h-72',
  color = '#3F5139',
  opacity = 0.07,
}) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none select-none`}
    style={{ opacity }}
  >
    <path
      d="M100 15 C145 15 185 55 185 110 C185 155 145 185 100 185 C55 185 15 155 15 110 C15 55 55 15 100 15 Z"
      fill={color}
    />
    {/* Monstera Cutouts / Fenestrations */}
    <path d="M100 30 Q100 170 100 185" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
    <path d="M100 60 Q135 50 160 38" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
    <path d="M100 90 Q145 85 175 75" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
    <path d="M100 120 Q145 125 170 135" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
    <path d="M100 150 Q135 160 155 170" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
    {/* Left Cutouts */}
    <path d="M100 60 Q65 50 40 38" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
    <path d="M100 90 Q55 85 25 75" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
    <path d="M100 120 Q55 125 30 135" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
    <path d="M100 150 Q65 160 45 170" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

// Tropical Palm Leaf Corner / Branch
export const PalmLeafCorner: React.FC<{ className?: string; color?: string; opacity?: number }> = ({
  className = 'w-64 h-64',
  color = '#3F5139',
  opacity = 0.08,
}) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none select-none`}
    style={{ opacity }}
  >
    {/* Central Stem */}
    <path d="M10 10 Q100 80 190 190" stroke={color} strokeWidth="4" strokeLinecap="round" />
    {/* Right Fronds */}
    <path d="M40 35 Q90 20 120 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M60 52 Q120 40 150 25" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M85 75 Q150 70 180 50" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M110 100 Q170 100 195 85" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M135 125 Q185 135 200 125" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Left Fronds */}
    <path d="M40 35 Q20 80 10 110" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M60 52 Q40 110 25 140" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M85 75 Q70 140 50 170" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M110 100 Q100 160 85 185" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M135 125 Q130 175 120 195" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Banana / Traveler's Palm Leaf
export const BananaLeafSilhouette: React.FC<{ className?: string; color?: string; opacity?: number }> = ({
  className = 'w-48 h-96',
  color = '#607A55',
  opacity = 0.06,
}) => (
  <svg
    viewBox="0 0 120 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none select-none`}
    style={{ opacity }}
  >
    <path
      d="M60 10 C90 60 110 140 100 230 C95 270 70 290 60 300 C50 290 25 270 20 230 C10 140 30 60 60 10 Z"
      fill={color}
    />
    <path d="M60 10 L60 300" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.4" />
    {/* Slits */}
    <path d="M60 70 L95 85" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
    <path d="M60 120 L25 140" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
    <path d="M60 170 L98 195" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
    <path d="M60 220 L22 245" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
  </svg>
);

// Tropical Water Ripple effect for lake areas
export const TropicalWaterRipples: React.FC<{ className?: string; opacity?: number }> = ({
  className = 'w-full h-32',
  opacity = 0.12,
}) => (
  <svg
    viewBox="0 0 1200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none select-none`}
    style={{ opacity }}
    preserveAspectRatio="none"
  >
    <path
      d="M0 40 Q300 10 600 40 T1200 40"
      stroke="#2BAEBA"
      strokeWidth="2.5"
      strokeDasharray="12 8"
    />
    <path
      d="M0 70 Q300 100 600 70 T1200 70"
      stroke="#2BAEBA"
      strokeWidth="2"
      strokeDasharray="16 10"
    />
    <path
      d="M0 100 Q300 75 600 100 T1200 100"
      stroke="#607A55"
      strokeWidth="1.5"
      strokeDasharray="8 6"
    />
  </svg>
);

// Subtle Floating Tropical Petals
export const FloatingTropicalPetals: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div className="absolute top-12 left-10 opacity-35 rotate-12 animate-float">
      <FrangipaniFlower className="w-8 h-8" />
    </div>
    <div className="absolute top-1/3 right-12 opacity-25 -rotate-45 animate-float" style={{ animationDelay: '2s' }}>
      <FrangipaniFlower className="w-10 h-10" />
    </div>
    <div className="absolute bottom-16 left-1/4 opacity-30 rotate-45 animate-float" style={{ animationDelay: '3.5s' }}>
      <FrangipaniFlower className="w-7 h-7" />
    </div>
  </div>
);

// Deck Theme Pill Badge: "Reconnect with Nature, People, and Passion"
export const TaglinePill: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-[#171717]/10 font-sans text-xs sm:text-sm font-medium text-[#171717] ${className}`}
  >
    <FrangipaniFlower className="w-5 h-5 -ml-1 animate-spin-slow" />
    <span>Reconnect with </span>
    <strong className="text-[#3F5139] font-bold">Nature</strong>,{' '}
    <strong className="text-[#D98252] font-bold">People</strong>, and{' '}
    <strong className="text-[#DE4B68] font-bold">Passion</strong>
  </div>
);

// Radiant Sunsetion Golden Sun Orb
export const SunsetSunDisc: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 280,
}) => (
  <div
    className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
    style={{ width: size, height: size }}
  >
    {/* Outer soft ambient sunset glow */}
    <div
      className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFAA47]/35 via-[#FF6B8B]/25 to-transparent blur-3xl"
      style={{ transform: 'scale(1.4)' }}
    />
    {/* Middle halo ring */}
    <div className="absolute inset-4 rounded-full bg-gradient-to-b from-[#FFAA47]/40 to-[#E85D75]/20 blur-xl" />
    {/* Inner Sun Orb */}
    <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-[#FFF4D4] via-[#FFAA47] to-[#E85D75] shadow-[0_0_60px_rgba(255,170,71,0.5)] opacity-85 border border-white/60" />
  </div>
);

// Balinese Sunset Mountain & Hills Silhouette Horizon
export const SunsetHillsSilhouette: React.FC<{ className?: string; color?: string; opacity?: number }> = ({
  className = 'w-full h-24',
  color = '#2E2218',
  opacity = 0.08,
}) => (
  <svg
    viewBox="0 0 1200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none select-none`}
    style={{ opacity }}
    preserveAspectRatio="none"
  >
    {/* Distant Mt. Batukaru / Bali Hills silhouette */}
    <path
      d="M0 120 L0 80 Q180 50 350 75 Q520 100 700 45 Q880 75 1050 55 Q1150 70 1200 65 L1200 120 Z"
      fill={color}
      opacity="0.5"
    />
    {/* Foreground rolling green / lake bank hills */}
    <path
      d="M0 120 L0 95 Q240 70 480 92 Q720 110 960 85 Q1100 75 1200 90 L1200 120 Z"
      fill={color}
    />
    {/* Small silhouette palm trees along the hilltops */}
    <g transform="translate(340, 58) scale(0.6)">
      <path d="M10 30 Q12 15 15 0" stroke={color} strokeWidth="3" />
      <path d="M15 0 Q28 -5 32 8" stroke={color} strokeWidth="2.5" />
      <path d="M15 0 Q2 -8 -5 4" stroke={color} strokeWidth="2.5" />
      <path d="M15 0 Q22 -14 26 -6" stroke={color} strokeWidth="2" />
      <path d="M15 0 Q6 -15 2 -4" stroke={color} strokeWidth="2" />
    </g>
    <g transform="translate(710, 32) scale(0.7)">
      <path d="M10 30 Q14 15 15 0" stroke={color} strokeWidth="3" />
      <path d="M15 0 Q30 -6 35 7" stroke={color} strokeWidth="2.5" />
      <path d="M15 0 Q0 -9 -8 5" stroke={color} strokeWidth="2.5" />
      <path d="M15 0 Q22 -16 27 -7" stroke={color} strokeWidth="2" />
    </g>
    <g transform="translate(1040, 42) scale(0.55)">
      <path d="M10 30 Q8 15 15 0" stroke={color} strokeWidth="3" />
      <path d="M15 0 Q28 -5 32 8" stroke={color} strokeWidth="2.5" />
      <path d="M15 0 Q2 -8 -5 4" stroke={color} strokeWidth="2.5" />
    </g>
  </svg>
);

// Sunsetion Ambient Glow System for rich warm sunset atmosphere
export const SunsetionAmbientGlow: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Top Golden Hour Sunlight Wash */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#FFAA47]/15 via-[#FF6B8B]/08 to-transparent rounded-full blur-[140px]" />
    {/* Mid-page Coral Twilight Glow */}
    <div className="absolute top-1/3 -right-36 w-[650px] h-[650px] bg-[#E85D75]/10 rounded-full blur-[160px]" />
    {/* Mid-page Golden Hour Glow Left */}
    <div className="absolute top-2/3 -left-36 w-[600px] h-[600px] bg-[#FFAA47]/12 rounded-full blur-[150px]" />
    {/* Lakeside Aqua Refraction Glow */}
    <div className="absolute top-1/2 left-1/3 w-[500px] h-[400px] bg-[#2BAEBA]/06 rounded-full blur-[130px]" />
  </div>
);

