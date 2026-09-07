import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CAUSES_LIST } from '../data/charityData';
import { CharityImage } from './CharityImage';
import { CauseId } from '../types';

interface OurCausesProps {
  onSelectCause: (causeId: CauseId) => void;
}

export const OurCauses: React.FC<OurCausesProps> = ({ onSelectCause }) => {
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D2E]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0F3D2E] uppercase">
              Core Relief
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#14231B]">
            Our Causes
          </h2>
          <p className="text-[#556358] text-base leading-relaxed">
            Delivering direct, dignified relief across the critical pillars of human survival and community recovery.
          </p>
        </div>

        {/* 5 Causes Showcase — Minimal Editorial Layout (No product cards, no cart, no pricing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {CAUSES_LIST.map((cause) => (
            <div
              key={cause.id}
              className="group flex flex-col justify-between space-y-5 pb-6 border-b border-[#EAE6DD]"
            >
              {/* Photo */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#ECE8E0] border border-[#E7E3D8]">
                <CharityImage
                  src={cause.imageUrl}
                  fallbackUrls={cause.fallbackUrls}
                  alt={cause.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  categoryLabel={cause.name}
                />
              </div>

              {/* Text & Cause Info */}
              <div className="space-y-2.5 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-tight text-[#14231B] group-hover:text-[#0F3D2E] transition-colors">
                    {cause.name}
                  </h3>
                  <span className="text-[11px] font-medium text-[#738277] tracking-wider uppercase">
                    {cause.exampleMetric}
                  </span>
                </div>
                <p className="text-sm text-[#556358] leading-relaxed">
                  {cause.shortDesc}
                </p>
              </div>

              {/* Action */}
              <div className="pt-1">
                <button
                  id={`cause-donate-btn-${cause.id}`}
                  onClick={() => onSelectCause(cause.id)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0F3D2E] uppercase group-hover:text-[#0A2C21] cursor-pointer"
                >
                  <span>Support {cause.name}</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
