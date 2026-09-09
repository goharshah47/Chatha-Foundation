import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CAUSES_LIST } from '../data/charityData';
import { CharityImage } from './CharityImage';
import { CauseId, CauseSlug } from '../types';

interface OurCausesProps {
  onSelectCause: (causeId: CauseId) => void;
  onNavigateCause?: (slug: CauseSlug) => void;
}

export const OurCauses: React.FC<OurCausesProps> = ({ onSelectCause, onNavigateCause }) => {
  return (
    <section
      id="causes"
      className="py-12 sm:py-20 lg:py-24 border-t border-[#ECE8E0]"
      aria-label="Humanitarian Causes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-brand-primary uppercase">
              Core Relief Pillars
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-medium tracking-tight text-[#14231B]">
            Our Humanitarian Causes
          </h2>
          <p className="text-[#556358] text-[15px] sm:text-base leading-relaxed">
            Delivering direct, dignified relief across the critical pillars of human survival, recovery, and sustainable hope.
          </p>
        </div>

        {/* 7 Causes Showcase — Clean mobile cards with generous touch targets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {CAUSES_LIST.map((cause) => {
            const causeSlug = cause.id as CauseSlug;
            return (
              <div
                key={cause.id}
                className="group flex flex-col justify-between space-y-4 pb-6 border-b border-[#EAE6DD]"
              >
                {/* Photo (clickable to subpage) */}
                <div
                  onClick={() => onNavigateCause?.(causeSlug)}
                  className="relative h-48 xs:h-52 sm:h-64 rounded-2xl overflow-hidden bg-[#ECE8E0] border border-[#E7E3D8] cursor-pointer"
                >
                  <CharityImage
                    src={cause.imageUrl}
                    fallbackUrls={cause.fallbackUrls}
                    alt={cause.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                    categoryLabel={cause.name}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>

                {/* Text & Cause Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => onNavigateCause?.(causeSlug)}
                      className="text-lg sm:text-xl font-semibold tracking-tight text-[#14231B] group-hover:text-brand-primary transition-colors text-left cursor-pointer"
                    >
                      {cause.name}
                    </button>
                    <span className="text-[10px] sm:text-[11px] font-medium text-[#738277] tracking-wider uppercase shrink-0">
                      {cause.exampleMetric}
                    </span>
                  </div>
                  <p className="text-[14px] sm:text-sm text-[#556358] leading-relaxed">
                    {cause.shortDesc}
                  </p>
                </div>

                {/* Actions: View Subpage + Donate (Min 44px Touch Targets) */}
                <div className="pt-2 flex items-center justify-between border-t border-[#F0ECE3] gap-2">
                  <button
                    onClick={() => onNavigateCause?.(causeSlug)}
                    className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#344439] hover:text-brand-primary transition-colors cursor-pointer py-2 px-1"
                  >
                    <span>View Cause</span>
                    <ChevronRight size={14} />
                  </button>

                  <button
                    id={`cause-donate-btn-${cause.id}`}
                    onClick={() => onSelectCause(cause.id)}
                    className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-brand-primary/10 hover:bg-brand-primary active:bg-brand-hover text-brand-primary hover:text-white active:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Donate</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
