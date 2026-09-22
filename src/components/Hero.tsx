import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Play, Volume2, VolumeX } from 'lucide-react';
import { SUNSETION_BRAND } from '../data/eventData';
import { FrangipaniFlower, SunsetGateIcon, TaglinePill, SunsetHillsSilhouette } from './TropicalDecor';

interface HeroProps {
  onOpenTickets: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTickets }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoOpacity, setVideoOpacity] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let isLooping = false;

    const monitorPlayback = () => {
      if (video && video.duration > 0 && !isLooping) {
        const current = video.currentTime;
        const duration = video.duration;

        // Fade in: first 0.5 seconds (0 -> 1)
        if (current <= 0.5) {
          const progress = Math.min(1, Math.max(0, current / 0.5));
          setVideoOpacity(progress);
        }
        // Fade out: last 0.5 seconds before end (1 -> 0)
        else if (duration - current <= 0.5) {
          const remaining = duration - current;
          const progress = Math.min(1, Math.max(0, remaining / 0.5));
          setVideoOpacity(progress);
        } else {
          setVideoOpacity(1);
        }
      }
      animationFrameId = requestAnimationFrame(monitorPlayback);
    };

    const handleEnded = () => {
      isLooping = true;
      setVideoOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video
            .play()
            .then(() => {
              isLooping = false;
            })
            .catch(() => {
              isLooping = false;
            });
        }
      }, 100);
    };

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(() => {
        // Autoplay may be restricted until interaction
      });
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);

    animationFrameId = requestAnimationFrame(monitorPlayback);

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-8"
    >
      {/* Video Background with custom loop & cross-fade logic */}
      <div className="absolute inset-0 w-full h-full bg-[#FFF8F0] overflow-hidden -z-10">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: videoOpacity }}
        />

        {/* Cinematic Sunset Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/30 via-[#FFF8F0]/70 via-35% to-[#FFF8F0]" />
        {/* Warm sunset radiance overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,170,71,0.22),transparent_65%)]" />
        {/* Subtle radial vignette for editorial depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(245,114,36,0.06)_100%)]" />
        {/* Natural bottom blend overlay to harmonize with Sunsetion peach canvas #FFF8F0 */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#FFF8F0] via-[#FFF8F0]/85 to-transparent" />
        {/* Distant Sunset Hills silhouette along bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <SunsetHillsSilhouette className="w-full h-24" color="#D98252" opacity={0.14} />
        </div>
      </div>

      {/* Floating Sound Toggle */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 flex justify-end">
        <button
          id="hero-sound-toggle-btn"
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute festival video' : 'Mute festival video'}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#FFAA47]/40 text-[#1F1914] text-xs font-semibold tracking-wider uppercase hover:bg-white shadow-xs transition-all cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#BA4816]" />
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#BA4816]" />
              <span>Sound On</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Content: positioned toward the lower-middle portion */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 my-auto pt-10 sm:pt-16">
        <div className="max-w-4xl space-y-6 sm:space-y-8 animate-fade-rise">
          {/* Eyebrow and Deck Top Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-white/40">
              <div className="w-5 h-5 rounded-full bg-[#E7B85C]/30 flex items-center justify-center">
                <SunsetGateIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase font-bold text-[#171717]">
                PIB SUNSETION
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-[11px] font-sans text-[#607A55] font-semibold">
                PIB College
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DE4B68]/90 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <FrangipaniFlower className="w-4 h-4" />
              <span>Tropical Bloom Festival</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-main-headline"
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-normal leading-[0.92] tracking-tight text-[#1F1914]"
          >
            WHERE <span className="italic font-light text-[#2E4D26] transition-colors">NATURE</span>
            <br />
            MEETS <span className="italic font-light text-[#BA4816] transition-colors">PEOPLE</span>,
            <br />
            <span className="italic font-light text-[#BD213E] transition-colors">PASSION</span> &amp; EXPERIENCE.
          </h1>

          {/* Official Deck Tagline Pill from Slide 1 */}
          <div className="pt-1">
            <TaglinePill />
          </div>

          {/* Hero Description */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#4A3C31] max-w-2xl font-normal leading-relaxed">
            A creative tropical festival bringing students, communities, and local businesses
            together through experiences, creativity, entertainment, and connection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              id="hero-primary-ticket-btn"
              onClick={onOpenTickets}
              className="inline-flex items-center justify-center gap-2 font-sans text-sm tracking-wider uppercase font-semibold rounded-full px-8 py-4 bg-[#171717] text-white hover:bg-[#3F5139] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>Get Your Ticket</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              id="hero-secondary-explore-btn"
              href="#about"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm tracking-wider uppercase font-semibold rounded-full px-8 py-4 bg-white/85 backdrop-blur-md border border-[#FFAA47]/50 text-[#1F1914] hover:bg-white hover:text-[#BA4816] hover:border-[#F57224] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xs cursor-pointer"
            >
              <span>Explore Sunsetion</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Micro Information Row & Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#171717]/15 pt-6">
          {/* Micro Information */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-sans text-xs tracking-[0.2em] uppercase font-medium text-[#171717]/80 sm:text-[#171717]">
            <span className="font-bold text-[#171717]">2026</span>
            <span className="w-1 h-1 rounded-full bg-[#3F5139]" />
            <span>PIB COLLEGE</span>
            <span className="w-1 h-1 rounded-full bg-[#3F5139]" />
            <span>TROPICAL CREATIVE FESTIVAL</span>
          </div>

          {/* Scroll Indicator */}
          <a
            id="hero-scroll-indicator"
            href="#about"
            className="group inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase font-semibold text-[#171717] hover:text-[#3F5139] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
