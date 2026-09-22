import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Theme } from './components/Theme';
import { EventInfo } from './components/EventInfo';
import { Experience } from './components/Experience';
import { DeckWorkshopsAttractions } from './components/DeckWorkshopsAttractions';
import { Activities } from './components/Activities';
import { Entertainment } from './components/Entertainment';
import { Venue } from './components/Venue';
import { CompetitionEPC } from './components/CompetitionEPC';
import { Community } from './components/Community';
import { Sponsors } from './components/Sponsors';
import { Gallery } from './components/Gallery';
import { Tickets } from './components/Tickets';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { TicketModal } from './components/TicketModal';
import { SponsorModal } from './components/SponsorModal';
import { ActivityDetailModal } from './components/ActivityDetailModal';
import { ActivityItem } from './types';
import { ACTIVITIES_LIST } from './data/eventData';
import { SunsetionAmbientGlow } from './components/TropicalDecor';

export default function App() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const handleOpenTickets = () => {
    setIsTicketModalOpen(true);
  };

  const handleOpenSponsors = () => {
    setIsSponsorModalOpen(true);
  };

  const handleSelectAttractionByName = (name: string) => {
    const found = ACTIVITIES_LIST.find((a) =>
      a.title.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(a.title.toLowerCase())
    );
    if (found) {
      setSelectedActivity(found);
    } else {
      setSelectedActivity(ACTIVITIES_LIST[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1F1914] font-sans selection:bg-[#FFAA47]/30 selection:text-[#1F1914] fine-grain-overlay relative">
      {/* Global Sunsetion Ambient Glow System */}
      <SunsetionAmbientGlow />

      {/* Fixed / Sticky Navigation Bar with Deck Branding */}
      <Navbar onOpenTickets={handleOpenTickets} />

      {/* Main Content Sections */}
      <main>
        {/* Deck Slide 1: Hero with Tropical Bloom & Tagline */}
        <Hero onOpenTickets={handleOpenTickets} />

        {/* Deck Slide 2, 3, 4: About, Background & 4 Event Purpose Pillars */}
        <About />

        {/* Deck Slide 1 & Theme: Tropical Bloom Festival "Nature, People, Passion" */}
        <Theme />

        {/* Deck Slide 5 & 6: Event Coordinates & 700 Pax Target */}
        <EventInfo />

        {/* Experience Flow: 01 Connect, 02 Create, 03 Play, 04 Celebrate */}
        <Experience />

        {/* Deck Slide 12 & 13: Academic Workshops & Attractions */}
        <DeckWorkshopsAttractions
          onBookWorkshop={handleOpenTickets}
          onSelectAttraction={handleSelectAttractionByName}
        />

        {/* What's Happening Interactive Grid */}
        <Activities onSelectActivity={(act) => setSelectedActivity(act)} />

        {/* Deck Slide 14: The Stage (Student Performance & Balinese Traditional Dance) */}
        <Entertainment />

        {/* Deck Slide 8, 9, 10: Real Campus Venues (Taman Bethesda, Toya Bhagawan, Garden Cafe Lab) */}
        <Venue />

        {/* Deck Slide 7: Event Plan Competition (EPC) - ROOTS Challenge */}
        <CompetitionEPC onRegister={handleOpenTickets} />

        {/* Deck Slide 4 & 11: Food Village & Community Atmosphere */}
        <Community onOpenVendorInquiry={handleOpenSponsors} />

        {/* Deck Slide 15 & 16: Complete Sponsor Packages & Matrices (Radiance, Tropical, Vibrant, Heavenly) */}
        <Sponsors
          onDownloadDeck={handleOpenSponsors}
          onTalkToTeam={handleOpenSponsors}
        />

        {/* Visual Archive & Atmosphere Gallery */}
        <Gallery />

        {/* Festival Passes & Tickets */}
        <Tickets
          onOpenTickets={handleOpenTickets}
          onScrollToDetails={() => {
            const el = document.getElementById('event-info');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Closing Call to Action */}
        <FinalCTA onOpenTickets={handleOpenTickets} />
      </main>

      {/* Deck Slide 17: Dark Footer with Thank You message and Committee WhatsApp */}
      <Footer
        onOpenSponsors={handleOpenSponsors}
        onOpenVendor={handleOpenSponsors}
      />

      {/* Modals */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      <SponsorModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
      />

      <ActivityDetailModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
        onBookActivity={handleOpenTickets}
      />
    </div>
  );
}
