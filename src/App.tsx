/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { HumanStory } from './components/HumanStory';
import { OurCauses } from './components/OurCauses';
import { ImpactSection } from './components/ImpactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { CauseId } from './types';

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<CauseId>('where-needed');

  const handleOpenDonate = (causeId?: CauseId) => {
    if (causeId) {
      setSelectedCause(causeId);
    }
    setDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1E2621] font-sans selection:bg-[#0F3D2E]/15 selection:text-[#0F3D2E]">
      {/* Sticky Header with single primary CTA */}
      <Header onOpenDonate={() => handleOpenDonate('where-needed')} />

      {/* SECTION 1 — HERO CAROUSEL (60-70vh Editorial visual centerpiece) */}
      <main>
        <HeroCarousel onOpenDonate={handleOpenDonate} />

        {/* SECTION 2 — HUMAN STORY */}
        <HumanStory onOpenDonate={() => handleOpenDonate('water')} />

        {/* SECTION 3 — OUR CAUSES */}
        <OurCauses onSelectCause={(cause) => handleOpenDonate(cause)} />

        {/* SECTION 4 — IMPACT */}
        <ImpactSection />

        {/* SECTION 5 — FINAL DONATE CTA */}
        <FinalCta onOpenDonate={() => handleOpenDonate('where-needed')} />
      </main>

      {/* FOOTER */}
      <Footer onOpenDonate={() => handleOpenDonate('where-needed')} />

      {/* Non-ecommerce Clean Donation Flow Modal */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        initialCause={selectedCause}
      />
    </div>
  );
}
