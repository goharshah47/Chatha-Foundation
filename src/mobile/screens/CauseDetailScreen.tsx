import React from 'react';
import { ArrowLeft, CheckCircle2, Heart, ShieldCheck, Share2, ArrowRight } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { CAUSES_PAGES_DATA } from '../../data/causesData';
import { CharityImage } from '../../components/CharityImage';
import { CauseSlug } from '../../types';

interface CauseDetailScreenProps {
  causeSlug?: CauseSlug;
}

export const CauseDetailScreen: React.FC<CauseDetailScreenProps> = ({ causeSlug = 'water' }) => {
  const { popScreen, openDonationFlow, showToast, currency } = useMobileApp();

  const causeData = CAUSES_PAGES_DATA[causeSlug] || CAUSES_PAGES_DATA['water'];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Chatha Foundation — ${causeData.name}`,
        text: causeData.heroDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      showToast('Link copied to clipboard');
    }
  };

  return (
    <div id="mobile-cause-detail-screen" className="pb-36 relative bg-[#FBFBF9]">
      {/* 1. TOP APP BAR */}
      <div className="sticky top-0 z-30 bg-[#FDFCFB]/96 backdrop-blur-md border-b border-[#ECE7DC] px-3 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={popScreen}
          className="flex items-center gap-1 text-[#2A3830] font-semibold text-xs py-1 px-2 rounded-lg hover:bg-[#F0ECE3] cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Causes</span>
        </button>
        <span className="text-xs font-bold text-[#16241B] truncate max-w-[180px]">
          {causeData.name}
        </span>
        <button
          type="button"
          onClick={handleShare}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#35453C] hover:bg-[#F0ECE3] cursor-pointer"
          aria-label="Share cause"
        >
          <Share2 size={16} />
        </button>
      </div>

      {/* 2. HERO PORTRAIT / 16:9 IMAGE */}
      <div className="relative aspect-[16/10] w-full bg-[#18261E] overflow-hidden">
        <CharityImage
          src={causeData.heroImage}
          fallbackUrls={causeData.heroFallbackUrls}
          alt={causeData.heroAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14221A]/85 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-light bg-brand-primary/80 px-2 py-0.5 rounded">
            {causeData.tagline}
          </span>
          <h1 className="text-lg font-bold leading-tight mt-1 text-white">
            {causeData.name}
          </h1>
        </div>
      </div>

      {/* 3. INTRODUCTION & IMPACT STATEMENT */}
      <div className="p-4 space-y-4">
        <div className="p-3.5 rounded-2xl bg-brand-light/60 border border-brand-border text-[#1B3024] space-y-1">
          <span className="text-[10.5px] uppercase font-bold tracking-wider text-brand-primary">
            Verified Field Impact
          </span>
          <p className="text-xs font-semibold leading-relaxed">
            {causeData.impactStatement}
          </p>
        </div>

        <p className="text-[13px] text-[#3E4E44] leading-relaxed">
          {causeData.heroDescription}
        </p>

        {/* 4. WHY IT MATTERS */}
        <section className="space-y-2 pt-2 border-t border-[#ECE7DC]">
          <h2 className="text-[15px] font-bold text-[#16251C]">
            {causeData.whyMatters.title}
          </h2>
          <p className="text-[12.5px] text-[#4A5A50] leading-relaxed">
            {causeData.whyMatters.text}
          </p>
          {causeData.whyMatters.stat && (
            <div className="p-2.5 rounded-xl bg-[#F4F1EB] border-l-3 border-brand-primary text-xs font-medium text-[#24332A]">
              {causeData.whyMatters.stat}
            </div>
          )}
        </section>

        {/* 5. HOW CHATHA FOUNDATION HELPS */}
        <section className="space-y-2.5 pt-2 border-t border-[#ECE7DC]">
          <h2 className="text-[15px] font-bold text-[#16251C]">
            {causeData.howWeHelp.title}
          </h2>
          <p className="text-[12.5px] text-[#4A5A50] leading-relaxed">
            {causeData.howWeHelp.text}
          </p>
          <div className="space-y-2 pt-1">
            {causeData.howWeHelp.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#334339]">
                <CheckCircle2 size={15} className="text-brand-primary shrink-0 mt-0.5" />
                <span className="leading-snug">{pt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WAYS TO SUPPORT (Charity donation rows, NO ecommerce shopping UI!) */}
        <section className="space-y-3 pt-3 border-t border-[#ECE7DC]">
          <div>
            <h2 className="text-[15px] font-bold text-[#16251C]">Ways to Support</h2>
            <p className="text-xs text-[#637468]">
              Select a dedicated humanitarian aid package to fund directly.
            </p>
          </div>

          <div className="space-y-2.5">
            {causeData.opportunities.map((opp) => (
              <div
                key={opp.id}
                className="p-3.5 rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] shadow-2xs space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xs font-bold text-[#18261E]">{opp.title}</h3>
                    <p className="text-[11px] text-[#55665C] leading-snug mt-0.5">
                      {opp.shortDesc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-brand-primary">
                      {opp.targetAmount || `${currency} 2,500`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#F2EFE8]">
                  <span className="text-[10px] font-medium text-[#708075]">
                    100% Direct Field Allocation
                  </span>
                  <button
                    type="button"
                    onClick={() => openDonationFlow(causeData.slug as CauseSlug, 2500)}
                    className="min-h-[36px] px-3.5 rounded-lg bg-brand-light hover:bg-brand-primary hover:text-white text-brand-primary text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Support This</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 7. STICKY MOBILE CTA (Floats right above persistent bottom tab bar) */}
      <div className="fixed bottom-[62px] inset-x-0 p-3 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-[#E6E1D6] z-30 shadow-[0_-4px_20px_rgba(20,35,27,0.08)]">
        <div className="max-w-md mx-auto flex items-center gap-2.5">
          <div className="flex-1">
            <span className="text-[10.5px] uppercase font-bold text-[#6D7D72] tracking-wider block">
              Direct Aid
            </span>
            <span className="text-xs font-semibold text-[#18261E]">
              {causeData.name} Fund
            </span>
          </div>
          <button
            type="button"
            onClick={() => openDonationFlow(causeData.slug as CauseSlug, 2500)}
            className="flex-2 min-h-[46px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <Heart size={15} fill="currentColor" />
            <span>Donate Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
