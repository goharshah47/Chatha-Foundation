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
      className="py-16 sm:py-24 border-t border-[#ECE8E0]"
      aria-label="Humanitarian Causes"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-primary uppercase">
              Core Relief Pillars
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#14231B]">
            Our Humanitarian Causes
          </h2>
          <p className="text-[#556358] text-base leading-relaxed">
            Delivering direct, dignified relief across the critical pillars of human survival, recovery, and sustainable hope.
          </p>
        </div>

        {/* 7 Causes Showcase — Minimal Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {CAUSES_LIST.map((cause) => {
            const causeSlug = cause.id as CauseSlug;
            return (
              <div
                key={cause.id}
                className="group flex flex-col justify-between space-y-5 pb-6 border-b border-[#EAE6DD]"
              >
                {/* Photo (clickable to subpage) */}
                <div
                  onClick={() => onNavigateCause?.(causeSlug)}
                  className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#ECE8E0] border border-[#E7E3D8] cursor-pointer"
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
                <div className="space-y-2.5 flex-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onNavigateCause?.(causeSlug)}
                      className="text-xl font-semibold tracking-tight text-[#14231B] group-hover:text-brand-primary transition-colors text-left cursor-pointer"
                    >
                      {cause.name}
                    </button>
                    <span className="text-[11px] font-medium text-[#738277] tracking-wider uppercase">
                      {cause.exampleMetric}
                    </span>
                  </div>
                  <p className="text-sm text-[#556358] leading-relaxed">
                    {cause.shortDesc}
                  </p>
                </div>

                {/* Actions: View Subpage + Donate */}
                <div className="pt-2 flex items-center justify-between border-t border-[#F0ECE3]">
                  <button
                    onClick={() => onNavigateCause?.(causeSlug)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#344439] hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    <span>View Cause</span>
                    <ChevronRight size={13} />
                  </button>

                  <button
                    id={`cause-donate-btn-${cause.id}`}
                    onClick={() => onSelectCause(cause.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Donate</span>
                    <ArrowRight size={12} />
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
