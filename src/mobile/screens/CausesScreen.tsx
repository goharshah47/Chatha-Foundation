import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Droplets, Utensils, Users, Moon, Shield, Sparkles, Building } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { CAUSES_LIST } from '../../data/charityData';
import { CharityImage } from '../../components/CharityImage';
import { CauseSlug } from '../../types';

export const CausesScreen: React.FC = () => {
  const { pushScreen, openDonationFlow } = useMobileApp();
  const [filter, setFilter] = useState<'all' | 'essential' | 'seasonal'>('all');

  const filteredCauses = CAUSES_LIST.filter((cause) => {
    if (filter === 'seasonal') return ['ramadan', 'qurban'].includes(cause.id);
    if (filter === 'essential') return ['water', 'food', 'orphans', 'family'].includes(cause.id);
    return true;
  });

  return (
    <div id="mobile-causes-screen" className="pb-8 space-y-4">
      {/* Screen Title & Brief */}
      <div className="px-4 pt-3 space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-[#16241B]">Our Causes</h2>
        <p className="text-xs text-[#637468]">
          Transparent, community-led humanitarian interventions delivering dignified relief.
        </p>
      </div>

      {/* Filter Category Chips */}
      <div className="px-4 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {[
          { key: 'all', label: 'All Causes' },
          { key: 'essential', label: 'Essential Relief' },
          { key: 'seasonal', label: 'Sacred & Seasonal' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key as 'all' | 'essential' | 'seasonal')}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filter === tab.key
                ? 'bg-brand-primary text-white shadow-2xs'
                : 'bg-[#EFECE6] text-[#4A5A50] hover:text-[#18261E]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Causes List — Touch Optimized Vertical Stream */}
      <div className="px-4 space-y-3">
        {filteredCauses.map((cause) => (
          <div
            key={cause.id}
            className="rounded-[20px] bg-[#FDFCFB] border border-[#E6E1D6] overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col"
          >
            {/* Touchable Card Body */}
            <button
              type="button"
              onClick={() =>
                pushScreen({
                  type: 'cause_detail',
                  params: { causeSlug: cause.id as CauseSlug },
                })
              }
              className="text-left w-full cursor-pointer group"
            >
              {/* Image Container with 16:9 Aspect */}
              <div className="aspect-[16/8.5] w-full overflow-hidden relative bg-[#EBE7DE]">
                <CharityImage
                  src={cause.imageUrl}
                  fallbackUrls={cause.fallbackUrls}
                  alt={cause.name}
                  className="w-full h-full object-cover group-active:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-semibold bg-brand-primary/90 px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {cause.exampleMetric}
                  </span>
                  <span className="text-[11px] font-medium flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Explore <ChevronRight size={13} />
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-3.5 space-y-1">
                <h3 className="text-[16px] font-bold text-[#16251C] group-hover:text-brand-primary transition-colors">
                  {cause.name}
                </h3>
                <p className="text-[12.5px] text-[#55665C] leading-relaxed line-clamp-2">
                  {cause.shortDesc}
                </p>
              </div>
            </button>

            {/* Quick Support Action Bar */}
            <div className="px-3.5 pb-3.5 pt-1 flex items-center gap-2 border-t border-[#F2EFE8]">
              <button
                type="button"
                onClick={() => openDonationFlow(cause.id as CauseSlug, 2500)}
                className="flex-1 min-h-[42px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-98 transition-all cursor-pointer shadow-2xs"
              >
                <span>Donate to {cause.name}</span>
                <ArrowRight size={13} />
              </button>
              <button
                type="button"
                onClick={() =>
                  pushScreen({
                    type: 'cause_detail',
                    params: { causeSlug: cause.id as CauseSlug },
                  })
                }
                className="min-h-[42px] px-3.5 rounded-xl bg-[#F0ECE3] hover:bg-[#E8E3D8] text-[#2A3930] text-xs font-semibold transition-colors cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
