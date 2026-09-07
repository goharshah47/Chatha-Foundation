import React from 'react';
import { IMPACT_STATS } from '../data/charityData';

export const ImpactSection: React.FC = () => {
  return (
    <section
      id="impact"
      className="py-16 sm:py-24 border-t border-[#ECE8E0] bg-[#FAF8F4]"
      aria-label="Humanitarian Impact"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Minimal Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D2E]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0F3D2E] uppercase">
              Proven Delivery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#14231B]">
            Verified Impact
          </h2>
          <p className="text-[#59675D] text-base leading-relaxed">
            Every contribution directly transforms human vulnerability into enduring resilience.
          </p>
        </div>

        {/* Minimal Metric Grid (No dashboard cards, pure typography & whitespace) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E1D6]">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col space-y-2.5 ${
                idx > 0 ? 'pt-8 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0F3D2E]">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-[#18261E] tracking-tight">
                {stat.label}
              </div>
              <p className="text-xs sm:text-[13px] text-[#637267] leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Quiet Trust Statement */}
        <div className="mt-14 pt-8 border-t border-[#E8E4DA] text-center text-xs text-[#718076]">
          Independent annual audits published in accordance with international humanitarian transparency standards.
        </div>
      </div>
    </section>
  );
};
