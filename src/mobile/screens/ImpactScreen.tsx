import React from 'react';
import { Sparkles, CheckCircle, Clock, MapPin, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { MOBILE_PROJECTS } from '../data/mobileMockData';
import { IMPACT_STATS } from '../../data/charityData';
import { CharityImage } from '../../components/CharityImage';

export const ImpactScreen: React.FC = () => {
  const { pushScreen, openDonationFlow, currency } = useMobileApp();

  return (
    <div id="mobile-impact-screen" className="pb-8 space-y-5">
      {/* 1. SCREEN HEADER */}
      <div className="px-4 pt-3 space-y-1">
        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary uppercase tracking-wider bg-brand-light px-2 py-0.5 rounded">
          <Sparkles size={12} />
          <span>Real-time Accountability</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-[#16241B]">Our Impact</h2>
        <p className="text-xs text-[#637468]">
          Trace every donation directly to verified humanitarian outcomes in the field.
        </p>
      </div>

      {/* 2. CORE IMPACT METRICS (2x2 Grid) */}
      <div className="px-4 grid grid-cols-2 gap-2.5">
        {IMPACT_STATS.map((stat, i) => (
          <div
            key={i}
            className="p-3 rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] shadow-2xs space-y-0.5"
          >
            <span className="text-lg font-extrabold text-brand-primary tracking-tight">
              {stat.value}
            </span>
            <h3 className="text-xs font-bold text-[#18261E]">{stat.label}</h3>
            <p className="text-[10px] text-[#637468] leading-tight">{stat.subtext}</p>
          </div>
        ))}
      </div>

      {/* 3. ACTIVE FIELD PROJECTS (With progress bars & traceability) */}
      <section className="px-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#18261E]">Active Projects</h3>
          <span className="text-xs font-semibold text-brand-primary">
            {MOBILE_PROJECTS.length} In Progress
          </span>
        </div>

        <div className="space-y-3">
          {MOBILE_PROJECTS.map((proj) => {
            const percent = Math.min(100, Math.round((proj.raisedAmount / proj.targetAmount) * 100));

            return (
              <div
                key={proj.id}
                className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] overflow-hidden shadow-2xs space-y-3 p-3.5 hover:border-brand-primary/40 transition-colors"
              >
                {/* Thumbnail & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden relative bg-[#EBE7DE] shrink-0">
                    <CharityImage
                      src={proj.imageUrl}
                      fallbackUrls={proj.fallbackUrls}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-[10.5px] font-medium text-brand-primary">
                      <MapPin size={11} />
                      <span className="truncate">{proj.location}</span>
                    </div>
                    <h4 className="text-xs font-bold text-[#16251C] truncate">{proj.title}</h4>
                    <p className="text-[10.5px] text-[#66776D]">
                      {proj.beneficiariesCount.toLocaleString()} beneficiaries
                    </p>
                  </div>
                </div>

                {/* Progress Bar & Amounts */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#18261E]">
                      {percent}% Funded
                    </span>
                    <span className="text-[#64746A]">
                      {currency} {(proj.targetAmount - proj.raisedAmount).toLocaleString()} needed
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#EBE7DE] overflow-hidden">
                    <div
                      style={{ width: `${percent}%` }}
                      className="h-full bg-brand-primary rounded-full transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-1 border-t border-[#F2EFE8]">
                  <button
                    type="button"
                    onClick={() =>
                      pushScreen({
                        type: 'project_detail',
                        params: { projectId: proj.id },
                      })
                    }
                    className="text-xs font-semibold text-[#38483F] hover:text-brand-primary flex items-center gap-1 cursor-pointer"
                  >
                    <span>View updates & milestones</span>
                    <ChevronRight size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => openDonationFlow(proj.causeSlug, 2500)}
                    className="min-h-[34px] px-3 rounded-lg bg-brand-primary hover:bg-brand-hover text-white text-xs font-semibold active:scale-98 transition-all cursor-pointer"
                  >
                    Fund Project
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. VERIFIED TRACEABILITY GUARANTEE */}
      <section className="px-4">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#18261E] to-[#25392D] text-white space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-brand-light" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-light">
              100% Zakat & Sadaqah Policy
            </h3>
          </div>
          <p className="text-xs text-[#E1E7E2] leading-relaxed">
            We operate on a zero-deduction model for emergency food parcels and water wells. Every single rupee given for direct aid reaches the vetted beneficiary without third-party commission cuts.
          </p>
        </div>
      </section>
    </div>
  );
};
