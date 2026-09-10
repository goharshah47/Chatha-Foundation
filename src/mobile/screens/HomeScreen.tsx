import React, { useState, useRef } from 'react';
import { ChevronRight, ArrowRight, Heart, Droplets, Utensils, Users, Moon, ShieldCheck, Sparkles } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { HERO_CAMPAIGNS, CAUSES_LIST } from '../../data/charityData';
import { CharityImage } from '../../components/CharityImage';
import { CauseSlug } from '../../types';

export const HomeScreen: React.FC = () => {
  const { openDonationFlow, pushScreen, currency, setCurrency } = useMobileApp();

  // Campaign Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Quick Donate State
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [quickCause, setQuickCause] = useState<CauseSlug>('water');

  const pkrPresets = [1000, 2500, 5000];
  const gbpPresets = [25, 50, 100];
  const activePresets = currency === 'Rs.' ? pkrPresets : gbpPresets;

  const currentCampaign = HERO_CAMPAIGNS[activeSlide] || HERO_CAMPAIGNS[0];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45 && activeSlide < HERO_CAMPAIGNS.length - 1) {
      setActiveSlide((prev) => prev + 1);
    } else if (diff < -45 && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
    touchStartX.current = null;
  };

  const handleQuickDonate = () => {
    const finalAmount = isCustom ? Number(customAmount) || 1000 : selectedAmount;
    openDonationFlow(quickCause, finalAmount, donationType);
  };

  return (
    <div id="mobile-home-screen" className="pb-8 space-y-6">
      {/* 1. CAMPAIGN CAROUSEL HERO (Swipeable, portrait-optimized, single active campaign) */}
      <section
        className="relative px-4 pt-3"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative rounded-[22px] overflow-hidden shadow-[0_10px_25px_rgba(20,35,27,0.12)] border border-[#E8E2D5] bg-[#14221A] text-white">
          {/* Portrait Image Canvas */}
          <div className="relative aspect-[4/4.6] w-full overflow-hidden">
            <CharityImage
              src={currentCampaign.imageUrl}
              fallbackUrls={currentCampaign.fallbackUrls}
              alt={currentCampaign.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            {/* Soft Warm Gradient Overlay (preserving photography) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14221A] via-[#14221A]/35 to-transparent" />

            {/* Campaign Category Badge */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#16251C] text-[11px] font-bold tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span>{currentCampaign.label}</span>
            </div>

            {/* Location Tag */}
            <div className="absolute top-3.5 right-3.5 text-[10.5px] font-medium text-white/80 px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-xs">
              {currentCampaign.location}
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 inset-x-0 p-4 space-y-2.5">
              <h2 className="text-xl font-bold tracking-tight text-white leading-tight">
                {currentCampaign.headline.split('\n')[0]}
              </h2>
              <p className="text-[12.5px] text-[#E5EADF] line-clamp-2 leading-relaxed font-normal">
                {currentCampaign.supportingText}
              </p>

              {/* Action Button */}
              <div className="pt-1 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openDonationFlow(currentCampaign.causeId as CauseSlug, 2500)}
                  className="flex-1 min-h-[44px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-[13.5px] font-semibold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  <span>Support {currentCampaign.label}</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    pushScreen({
                      type: 'cause_detail',
                      params: { causeSlug: currentCampaign.causeId as CauseSlug },
                    })
                  }
                  className="min-h-[44px] px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-[12.5px] font-medium backdrop-blur-md transition-colors cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="bg-[#14221A] py-2 px-4 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-1.5">
              {HERO_CAMPAIGNS.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === i ? 'w-6 bg-brand-primary' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium text-white/60 tracking-wider">
              SWIPE TO BROWSE ({activeSlide + 1}/{HERO_CAMPAIGNS.length})
            </span>
          </div>
        </div>
      </section>

      {/* 2. QUICK DONATE COMPONENT (Fast, thumb-friendly, instant state update) */}
      <section className="px-4">
        <div className="rounded-2xl bg-[#FDFCFB] border border-[#E5E0D5] p-4 shadow-sm space-y-3.5">
          {/* Header & Currency Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center">
                <Heart size={13} strokeWidth={2.4} fill="currentColor" />
              </div>
              <h3 className="text-sm font-bold text-[#18261E] tracking-tight">Quick Donate</h3>
            </div>
            {/* Currency Segment */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-[#EFECE6] text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => {
                  setCurrency('Rs.');
                  setSelectedAmount(2500);
                  setIsCustom(false);
                }}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  currency === 'Rs.' ? 'bg-brand-primary text-white shadow-xs' : 'text-[#506055]'
                }`}
              >
                PKR (Rs.)
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrency('£');
                  setSelectedAmount(50);
                  setIsCustom(false);
                }}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  currency === '£' ? 'bg-brand-primary text-white shadow-xs' : 'text-[#506055]'
                }`}
              >
                GBP (£)
              </button>
            </div>
          </div>

          {/* Toggle: One-time | Monthly */}
          <div className="grid grid-cols-2 p-1 rounded-xl bg-[#EFECE6] border border-[#E2DDD3]">
            <button
              type="button"
              onClick={() => setDonationType('one-time')}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                donationType === 'one-time'
                  ? 'bg-brand-primary text-white shadow-2xs'
                  : 'text-[#4A5A50] hover:text-[#18261E]'
              }`}
            >
              One-Time
            </button>
            <button
              type="button"
              onClick={() => setDonationType('monthly')}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                donationType === 'monthly'
                  ? 'bg-brand-primary text-white shadow-2xs'
                  : 'text-[#4A5A50] hover:text-[#18261E]'
              }`}
            >
              Monthly Giving
            </button>
          </div>

          {/* Preset Amounts & Custom */}
          <div className="grid grid-cols-4 gap-2">
            {activePresets.map((amt) => {
              const isActive = !isCustom && selectedAmount === amt;
              return (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amt);
                    setIsCustom(false);
                  }}
                  className={`min-h-[44px] rounded-xl flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                      : 'bg-[#F9F7F2] text-[#25352C] border-[#E3DDD1] hover:border-brand-primary/50'
                  }`}
                >
                  <span>
                    {currency} {amt.toLocaleString()}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setIsCustom(true)}
              className={`min-h-[44px] rounded-xl flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer border ${
                isCustom
                  ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                  : 'bg-[#F9F7F2] text-[#25352C] border-[#E3DDD1] hover:border-brand-primary/50'
              }`}
            >
              <span>Custom</span>
            </button>
          </div>

          {/* Custom Amount Input if active */}
          {isCustom && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F6F3EC] border border-brand-primary/50">
              <span className="text-xs font-bold text-[#35453C]">{currency}</span>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-[#18261E] focus:outline-none"
                autoFocus
              />
            </div>
          )}

          {/* Cause Selector Pills */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-[#65766B] uppercase tracking-wider">
              Allocate toward:
            </label>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {[
                { slug: 'water', label: 'Clean Water', icon: Droplets },
                { slug: 'food', label: 'Food Aid', icon: Utensils },
                { slug: 'orphans', label: 'Orphans', icon: Users },
                { slug: 'ramadan', label: 'Ramadan', icon: Moon },
              ].map((c) => {
                const Icon = c.icon;
                const isSelected = quickCause === c.slug;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setQuickCause(c.slug as CauseSlug)}
                    className={`shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-brand-light border-brand-primary text-brand-primary font-semibold'
                        : 'bg-[#F9F7F2] border-[#E2DDD1] text-[#4A5A50]'
                    }`}
                  >
                    <Icon size={12} />
                    <span>{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Final Instant Donate CTA */}
          <button
            type="button"
            onClick={handleQuickDonate}
            className="w-full min-h-[46px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <span>
              Donate {currency}{' '}
              {(isCustom ? Number(customAmount) || 0 : selectedAmount).toLocaleString()} Now
            </span>
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* 3. URGENT CAMPAIGNS & HUMANITARIAN FOCUS */}
      <section className="px-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-bold text-[#18261E] tracking-tight">Active Relief</h3>
            <p className="text-[11px] text-[#6E7E73]">Direct field projects currently seeking support</p>
          </div>
          <button
            type="button"
            onClick={() => pushScreen({ type: 'tab_root' })}
            className="text-xs font-semibold text-brand-primary hover:underline"
          >
            Explore all
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {CAUSES_LIST.slice(0, 4).map((cause) => (
            <button
              key={cause.id}
              type="button"
              onClick={() =>
                pushScreen({
                  type: 'cause_detail',
                  params: { causeSlug: cause.id as CauseSlug },
                })
              }
              className="text-left rounded-xl bg-[#FDFCFB] border border-[#E6E1D6] p-2.5 shadow-2xs hover:border-brand-primary/40 active:scale-98 transition-all cursor-pointer flex flex-col justify-between space-y-2"
            >
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden relative bg-[#E8E4DA]">
                <CharityImage
                  src={cause.imageUrl}
                  fallbackUrls={cause.fallbackUrls}
                  alt={cause.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">{cause.name}</h4>
                <p className="text-[10px] text-brand-primary font-medium mt-0.5">
                  {cause.exampleMetric}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 4. VERIFIED IMPACT & 100% ZAKAT TRANSPARENCY CARD */}
      <section className="px-4">
        <div className="rounded-2xl bg-gradient-to-br from-[#F2EFE8] to-[#E9E4D8] border border-[#DED8CB] p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck size={20} strokeWidth={2.2} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-[#16251C]">100% Verified Transparency</h4>
            <p className="text-[11px] text-[#55665C] leading-snug">
              Every donation is audited and mapped to real field beneficiaries.
            </p>
          </div>
          <button
            type="button"
            onClick={() => pushScreen({ type: 'tab_root' })}
            className="text-xs font-bold text-brand-primary shrink-0"
          >
            Trace →
          </button>
        </div>
      </section>
    </div>
  );
};
