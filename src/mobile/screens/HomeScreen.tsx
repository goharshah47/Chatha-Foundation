import React, { useState, useRef } from 'react';
import {
  ChevronRight,
  ArrowRight,
  Droplets,
  Utensils,
  Users,
  Moon,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { HERO_CAMPAIGNS, CAUSES_LIST } from '../../data/charityData';
import { CharityImage } from '../../components/CharityImage';
import { CauseSlug } from '../../types';

interface RecentDonatedItem {
  id: string;
  title: string;
  cause: string;
  causeSlug: CauseSlug;
  location: string;
  amountPKR: number;
  amountGBP: number;
  timestamp: string;
  status: string;
  details: string;
  icon: React.FC<{ size?: number; className?: string; strokeWidth?: number }>;
  iconBg: string;
  iconColor: string;
}

const RECENT_DONATED_ITEMS: RecentDonatedItem[] = [
  {
    id: 'item-1',
    title: 'Solar Water Tube-Well Unit',
    cause: 'Clean Water',
    causeSlug: 'water-aid',
    location: 'Tharparkar, Sindh',
    amountPKR: 25000,
    amountGBP: 75,
    timestamp: '6m ago',
    status: 'Verified Dispatch',
    details: 'Fresh drinking water for 120 families in drought corridor',
    icon: Droplets,
    iconBg: 'bg-teal-50 border border-teal-200/80',
    iconColor: 'text-teal-700',
  },
  {
    id: 'item-2',
    title: 'Monthly Food Staples Parcel',
    cause: 'Food Aid',
    causeSlug: 'food-aid',
    location: 'South Punjab Flood Zone',
    amountPKR: 5000,
    amountGBP: 18,
    timestamp: '19m ago',
    status: 'Field Delivered',
    details: '80kg flour, rice, cooking oil, and lentils for 1 household',
    icon: Utensils,
    iconBg: 'bg-amber-50 border border-amber-200/80',
    iconColor: 'text-amber-700',
  },
  {
    id: 'item-3',
    title: 'Orphan Education & Nutrition Kit',
    cause: 'Orphan Support',
    causeSlug: 'orphan-aid',
    location: 'Rawalpindi Community Center',
    amountPKR: 3500,
    amountGBP: 12,
    timestamp: '38m ago',
    status: 'Sponsored',
    details: 'School uniform, curriculum books, and daily hot lunch support',
    icon: Users,
    iconBg: 'bg-blue-50 border border-blue-200/80',
    iconColor: 'text-blue-700',
  },
  {
    id: 'item-4',
    title: 'Winter Warmth Blankets & Fuel',
    cause: 'Emergency Relief',
    causeSlug: 'family-support',
    location: 'Quetta Mountain Settlements',
    amountPKR: 2000,
    amountGBP: 8,
    timestamp: '1h ago',
    status: 'Dispatched',
    details: '2 heavy cold-weather thermal quilts and heating supplies',
    icon: ShieldCheck,
    iconBg: 'bg-rose-50 border border-rose-200/80',
    iconColor: 'text-rose-700',
  },
  {
    id: 'item-5',
    title: 'Community Iftar Feast (40 People)',
    cause: 'Ramadan Relief',
    causeSlug: 'ramadan',
    location: 'Urban Shelter, Lahore',
    amountPKR: 6000,
    amountGBP: 20,
    timestamp: '2h ago',
    status: 'Distributed',
    details: 'Hot biryani, fresh dates, fruit, and safe water packets',
    icon: Moon,
    iconBg: 'bg-emerald-50 border border-emerald-200/80',
    iconColor: 'text-emerald-700',
  },
];

const causeIdToSlug = (id: string): CauseSlug => {
  switch (id) {
    case 'water':
      return 'water-aid';
    case 'food':
      return 'food-aid';
    case 'orphans':
      return 'orphan-aid';
    case 'family':
      return 'family-support';
    case 'ramadan':
      return 'ramadan';
    case 'qurban':
      return 'qurban';
    case 'donor-projects':
      return 'donor-projects';
    default:
      return 'water-aid';
  }
};

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
    const defaultAmount = currency === 'Rs.' ? 1000 : 25;
    const finalAmount = isCustom ? Number(customAmount) || defaultAmount : selectedAmount;
    openDonationFlow('water-aid', finalAmount, donationType);
  };

  return (
    <div id="mobile-home-screen" className="pb-12 space-y-4">
      {/* 1. COMPACT HERO / CAMPAIGN SLIDER (Approx 75% shorter than previous ~450px height) */}
      <section
        className="relative px-4 pt-2.5"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-[120px] rounded-2xl overflow-hidden shadow-2xs border border-[#E7E1D4] bg-[#14221A] text-white">
          {/* Photography Canvas */}
          <CharityImage
            src={currentCampaign.imageUrl}
            fallbackUrls={currentCampaign.fallbackUrls}
            alt={currentCampaign.imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 transition-opacity duration-300"
          />
          {/* Subtle Warm Horizontal Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#14221A]/95 via-[#14221A]/80 to-[#14221A]/40" />

          {/* Banner Internal Layout */}
          <div className="relative h-full p-2.5 flex flex-col justify-between">
            {/* Top Row: Category Pill + Location + Slide Indicators */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 text-[#16251C] text-[9.5px] font-bold tracking-wider shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {currentCampaign.label}
                </span>
                <span className="text-[10px] font-medium text-white/80 hidden xs:inline truncate max-w-[130px]">
                  {currentCampaign.location}
                </span>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full">
                {HERO_CAMPAIGNS.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === i ? 'w-3.5 bg-brand-primary' : 'w-1 bg-white/40'
                    }`}
                  />
                ))}
                <span className="text-[9px] font-medium text-white/70 ml-1">
                  {activeSlide + 1}/{HERO_CAMPAIGNS.length}
                </span>
              </div>
            </div>

            {/* Middle Row: Headline & Snippet */}
            <div className="pr-2 space-y-0.5">
              <h2 className="text-[13px] font-bold tracking-tight text-white leading-tight line-clamp-1">
                {currentCampaign.headline.split('\n')[0]}
              </h2>
              <p className="text-[10.5px] text-[#E0E7DC] line-clamp-1 leading-tight font-normal">
                {currentCampaign.supportingText}
              </p>
            </div>

            {/* Bottom Row: Micro Actions */}
            <div className="flex items-center justify-between pt-0.5">
              <span className="text-[9.5px] text-white/70 font-medium">
                Swipe to browse ({HERO_CAMPAIGNS.length} campaigns)
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    pushScreen({
                      type: 'cause_detail',
                      params: { causeSlug: causeIdToSlug(currentCampaign.causeId) },
                    })
                  }
                  className="px-2 py-0.5 rounded-md bg-white/15 hover:bg-white/25 text-white text-[10.5px] font-medium transition-colors cursor-pointer"
                >
                  Details
                </button>
                <button
                  type="button"
                  onClick={() => openDonationFlow(causeIdToSlug(currentCampaign.causeId), 2500)}
                  className="min-h-[26px] px-2.5 rounded-lg bg-brand-primary hover:bg-brand-hover text-white text-[11px] font-bold flex items-center gap-1 shadow-xs active:scale-95 transition-all cursor-pointer"
                >
                  <span>Support</span>
                  <ArrowRight size={11} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPACT DONATE SECTION */}
      <section className="px-4">
        <div className="rounded-2xl bg-[#FDFCFB] border border-[#E7E2D6] p-3 shadow-2xs space-y-2.5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[14px] font-bold text-[#16251C] tracking-tight leading-snug">
                Donate Today
              </h3>
              <p className="text-[11px] text-[#65756B] leading-none mt-0.5">
                Choose an amount and make an impact.
              </p>
            </div>

            {/* Currency Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-[#EFECE5] text-[10.5px] font-semibold">
              <button
                type="button"
                onClick={() => {
                  setCurrency('Rs.');
                  setSelectedAmount(2500);
                  setIsCustom(false);
                }}
                className={`px-1.5 py-0.5 rounded-md transition-all cursor-pointer ${
                  currency === 'Rs.'
                    ? 'bg-white text-[#16251C] font-bold shadow-2xs'
                    : 'text-[#65756B] hover:text-[#16251C]'
                }`}
              >
                Rs.
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrency('£');
                  setSelectedAmount(50);
                  setIsCustom(false);
                }}
                className={`px-1.5 py-0.5 rounded-md transition-all cursor-pointer ${
                  currency === '£'
                    ? 'bg-white text-[#16251C] font-bold shadow-2xs'
                    : 'text-[#65756B] hover:text-[#16251C]'
                }`}
              >
                GBP
              </button>
            </div>
          </div>

          {/* One-time | Monthly Segmented Control */}
          <div className="grid grid-cols-2 p-0.5 rounded-xl bg-[#EFECE5] border border-[#E1DDD2]">
            <button
              type="button"
              onClick={() => setDonationType('one-time')}
              className={`py-1.5 rounded-[10px] text-xs font-semibold transition-all cursor-pointer ${
                donationType === 'one-time'
                  ? 'bg-white text-[#16251C] shadow-2xs font-bold'
                  : 'text-[#55665C] hover:text-[#16251C]'
              }`}
            >
              One-time
            </button>
            <button
              type="button"
              onClick={() => setDonationType('monthly')}
              className={`py-1.5 rounded-[10px] text-xs font-semibold transition-all cursor-pointer ${
                donationType === 'monthly'
                  ? 'bg-white text-[#16251C] shadow-2xs font-bold'
                  : 'text-[#55665C] hover:text-[#16251C]'
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Amounts Row: Rs. 1,000 | Rs. 2,500 | Rs. 5,000 | Custom */}
          <div className="space-y-1.5">
            <div className="grid grid-cols-4 gap-1.5">
              {activePresets.map((amt) => {
                const isSelected = !isCustom && selectedAmount === amt;
                const formatted =
                  currency === 'Rs.' ? `Rs. ${amt.toLocaleString()}` : `£${amt}`;
                return (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amt);
                      setIsCustom(false);
                    }}
                    className={`h-9 px-1 rounded-xl flex items-center justify-center text-[11px] sm:text-xs font-bold transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-brand-primary text-white border-brand-primary shadow-xs ring-1 ring-brand-primary/25'
                        : 'bg-[#FAF8F3] text-[#25352C] border-[#E3DDD1] hover:border-brand-primary/40 active:scale-97'
                    }`}
                  >
                    <span className="truncate">{formatted}</span>
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setIsCustom(true)}
                className={`h-9 px-1 rounded-xl flex items-center justify-center text-[11px] sm:text-xs font-bold transition-all cursor-pointer border ${
                  isCustom
                    ? 'bg-brand-primary text-white border-brand-primary shadow-xs ring-1 ring-brand-primary/25'
                    : 'bg-[#FAF8F3] text-[#25352C] border-[#E3DDD1] hover:border-brand-primary/40 active:scale-97'
                }`}
              >
                <span>Custom</span>
              </button>
            </div>

            {/* Custom Amount Field */}
            {isCustom && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F6F3EC] border border-brand-primary/50 shadow-2xs">
                <span className="text-xs font-bold text-[#35453C]">{currency}</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#18261E] focus:outline-none"
                  autoFocus
                />
                {customAmount && (
                  <button
                    type="button"
                    onClick={() => setCustomAmount('')}
                    className="text-[10px] text-[#7A8A7F] font-semibold hover:text-[#18261E] cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Full-width Prominent Donate CTA: Donate Now → */}
          <button
            type="button"
            onClick={handleQuickDonate}
            className="w-full min-h-[42px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-[13.5px] font-bold flex items-center justify-center gap-1.5 shadow-[0_3px_12px_rgba(31,94,59,0.22)] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Donate Now</span>
            <ArrowRight size={15} strokeWidth={2.4} />
          </button>
        </div>
      </section>

      {/* 3. ACTIVE RELIEF — HORIZONTALLY SCROLLABLE ON MOBILE */}
      <section className="px-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              <h3 className="text-[14.5px] font-bold text-[#18261E] tracking-tight">
                Active Relief
              </h3>
            </div>
            <p className="text-[11px] text-[#6E7E73]">
              Swipe horizontally to explore direct field initiatives
            </p>
          </div>
          <button
            type="button"
            onClick={() => pushScreen({ type: 'tab_root' })}
            className="text-xs font-semibold text-brand-primary hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>All Causes</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {/* Horizontal Scroll Row with Subtle Peek of Next Card */}
        <div className="flex items-stretch gap-3 overflow-x-auto pb-2 pt-1 px-4 -mx-4 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {CAUSES_LIST.map((cause) => (
            <div
              key={cause.id}
              onClick={() =>
                pushScreen({
                  type: 'cause_detail',
                  params: { causeSlug: causeIdToSlug(cause.id) },
                })
              }
              className="w-[240px] shrink-0 snap-start rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] p-3 shadow-2xs hover:border-brand-primary/50 transition-all flex flex-col justify-between cursor-pointer active:scale-[0.98]"
            >
              {/* Image with Tag Overlay */}
              <div className="space-y-2">
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative bg-[#E8E4DA]">
                  <CharityImage
                    src={cause.imageUrl}
                    fallbackUrls={cause.fallbackUrls}
                    alt={cause.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                      {cause.name}
                    </span>
                  </div>
                </div>

                {/* Text Details */}
                <div>
                  <h4 className="text-xs font-bold text-[#18261E] line-clamp-1">{cause.name}</h4>
                  <p className="text-[10.5px] text-[#55665C] line-clamp-2 leading-relaxed mt-0.5 font-normal">
                    {cause.shortDesc}
                  </p>
                </div>
              </div>

              {/* Bottom Metrics & Quick CTA */}
              <div className="pt-2.5 mt-2 border-t border-[#F2EFE8] flex items-center justify-between">
                <span className="text-[9.5px] font-semibold text-brand-primary truncate max-w-[130px]">
                  {cause.exampleMetric}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openDonationFlow(causeIdToSlug(cause.id), 2500);
                  }}
                  className="min-h-[28px] px-2.5 rounded-lg bg-brand-light hover:bg-brand-primary hover:text-white text-brand-primary text-[10.5px] font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Donate</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. RECENT DONATED ITEMS (Mobile-first, compact activity rows) */}
      <section className="px-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Community
              </span>
            </div>
            <h3 className="text-[14.5px] font-bold text-[#18261E] tracking-tight mt-1">
              Recent Donated Items
            </h3>
            <p className="text-[11px] text-[#6E7E73]">
              Real-time contributions reaching verified field recipients
            </p>
          </div>
        </div>

        {/* Compact List Card */}
        <div className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] divide-y divide-[#F0ECE3] overflow-hidden shadow-2xs">
          {RECENT_DONATED_ITEMS.map((item) => {
            const Icon = item.icon;
            const displayAmount = currency === 'Rs.' ? item.amountPKR : item.amountGBP;
            return (
              <div
                key={item.id}
                onClick={() => openDonationFlow(item.causeSlug, displayAmount)}
                className="p-3 flex items-start gap-3 hover:bg-[#FAF8F3] transition-colors cursor-pointer active:bg-[#F3EFE7]"
              >
                {/* Cause Icon */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon size={16} strokeWidth={2.2} />
                </div>

                {/* Content Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-1">
                    <h4 className="text-xs font-bold text-[#16251C] truncate">{item.title}</h4>
                    <span className="text-[11px] font-extrabold text-brand-primary bg-brand-light px-1.5 py-0.5 rounded shrink-0">
                      {currency} {displayAmount.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-[10.5px] text-[#55665C] leading-snug truncate mt-0.5">
                    {item.details}
                  </p>

                  <div className="flex items-center gap-2 mt-1 text-[9.5px] text-[#7A8B7F]">
                    <span className="font-medium text-[#4D5D52]">{item.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-emerald-700 font-semibold">
                      <Check size={10} strokeWidth={3} />
                      {item.status}
                    </span>
                    <span>•</span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Compact Trust Footer */}
          <div className="bg-[#FAF8F3] p-2.5 px-3 flex items-center justify-between text-[10.5px]">
            <span className="text-[#647569]">Audited 100% direct-donation policy</span>
            <button
              type="button"
              onClick={() => openDonationFlow('water-aid', 2500)}
              className="font-bold text-brand-primary hover:underline cursor-pointer flex items-center gap-0.5"
            >
              <span>Give today</span>
              <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. EXISTING REMAINING HOME CONTENT (Verified Impact & Transparency) */}
      <section className="px-4">
        <div className="rounded-2xl bg-gradient-to-br from-[#F2EFE8] to-[#E9E4D8] border border-[#DED8CB] p-3.5 flex items-center gap-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck size={20} strokeWidth={2.2} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-[#16251C]">100% Verified Transparency</h4>
            <p className="text-[10.5px] text-[#55665C] leading-snug">
              Every donation is audited and mapped to real field beneficiaries.
            </p>
          </div>
          <button
            type="button"
            onClick={() => pushScreen({ type: 'tab_root' })}
            className="text-xs font-bold text-brand-primary shrink-0 hover:underline cursor-pointer"
          >
            Trace →
          </button>
        </div>
      </section>
    </div>
  );
};
