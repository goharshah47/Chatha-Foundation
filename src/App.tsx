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
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { CausePage } from './components/CausePage';
import { OpportunityDetailModal } from './components/OpportunityDetailModal';
import { MobilePreviewWrapper } from './components/MobilePreviewWrapper';
import { CAUSES_PAGES_DATA } from './data/causesData';
import { CauseId, CauseSlug, CauseOpportunity } from './types';

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<CauseId>('where-needed');
  const [customCauseLabel, setCustomCauseLabel] = useState<string | undefined>(undefined);
  const [initialDonationAmount, setInitialDonationAmount] = useState<number | undefined>(undefined);

  // Active cause subpage (null = homepage)
  const [currentCauseSlug, setCurrentCauseSlug] = useState<CauseSlug | null>(null);

  // Active opportunity detail modal
  const [selectedOpportunity, setSelectedOpportunity] = useState<CauseOpportunity | null>(null);

  const handleOpenDonate = (
    causeId?: CauseId,
    customLabel?: string,
    suggestedAmount?: number
  ) => {
    if (causeId) {
      setSelectedCause(causeId);
    } else if (currentCauseSlug) {
      setSelectedCause(currentCauseSlug as CauseId);
    } else {
      setSelectedCause('where-needed');
    }

    setCustomCauseLabel(customLabel);
    setInitialDonationAmount(suggestedAmount);
    setDonateModalOpen(true);
  };

  const handleNavigateCause = (slug: CauseSlug) => {
    setCurrentCauseSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentCauseSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCauseData = currentCauseSlug ? CAUSES_PAGES_DATA[currentCauseSlug] : null;

  return (
    <MobilePreviewWrapper>
      <div className="min-h-screen bg-[#FBFBF9] text-[#1E2621] font-sans selection:bg-brand-light selection:text-brand-primary">
        {/* Sticky Header with single primary CTA, search, account & multi-level dropdowns */}
        <Header
          currentCauseSlug={currentCauseSlug}
          onOpenDonate={(causeId) => handleOpenDonate(causeId)}
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenAccount={() => setAccountModalOpen(true)}
          onNavigateHome={handleNavigateHome}
          onNavigateCause={handleNavigateCause}
        />

        {/* RENDER DEDICATED CAUSE SUBPAGE OR HOMEPAGE */}
        {activeCauseData ? (
          <main>
            <CausePage
              data={activeCauseData}
              onNavigateHome={handleNavigateHome}
              onOpenDonate={handleOpenDonate}
              onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            />
          </main>
        ) : (
          <main>
            {/* SECTION 1 — HERO CAROUSEL */}
            <HeroCarousel onOpenDonate={handleOpenDonate} />

            {/* SECTION 2 — HUMAN STORY */}
            <HumanStory onOpenDonate={() => handleOpenDonate('water')} />

            {/* SECTION 3 — OUR CAUSES WITH DIRECT ACCESS TO SUBPAGES */}
            <OurCauses
              onSelectCause={(cause) => handleOpenDonate(cause)}
              onNavigateCause={handleNavigateCause}
            />

            {/* SECTION 4 — IMPACT */}
            <ImpactSection />

            {/* SECTION 5 — FINAL DONATE CTA */}
            <FinalCta onOpenDonate={() => handleOpenDonate('where-needed')} />
          </main>
        )}

        {/* FOOTER */}
        <Footer
          onOpenDonate={() => handleOpenDonate(currentCauseSlug ? (currentCauseSlug as CauseId) : 'where-needed')}
          onNavigateCause={handleNavigateCause}
          onNavigateHome={handleNavigateHome}
        />

        {/* Search Modal */}
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectCause={(causeId) => handleOpenDonate(causeId)}
        />

        {/* Account Modal */}
        <AccountModal
          isOpen={accountModalOpen}
          onClose={() => setAccountModalOpen(false)}
          onOpenDonate={() => handleOpenDonate('where-needed')}
        />

        {/* Opportunity Detail Deep-Dive Modal */}
        <OpportunityDetailModal
          opportunity={selectedOpportunity}
          isOpen={!!selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onDonate={(opp) => {
            setSelectedOpportunity(null);
            handleOpenDonate(opp.causeSlug as CauseId, opp.title, opp.suggestedAmount);
          }}
        />

        {/* Non-ecommerce Clean Donation Flow Modal with Preselection Support */}
        <DonationModal
          isOpen={donateModalOpen}
          onClose={() => setDonateModalOpen(false)}
          initialCause={selectedCause}
          customCauseLabel={customCauseLabel}
          initialAmount={initialDonationAmount}
        />
      </div>
    </MobilePreviewWrapper>
  );
}
