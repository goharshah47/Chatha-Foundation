import React, { useEffect } from 'react';
import { X, ArrowRight, MapPin, Users, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CauseOpportunity } from '../types';
import { CharityImage } from './CharityImage';

interface OpportunityDetailModalProps {
  opportunity: CauseOpportunity | null;
  isOpen: boolean;
  onClose: () => void;
  onDonate: (opportunity: CauseOpportunity) => void;
}

export const OpportunityDetailModal: React.FC<OpportunityDetailModalProps> = ({
  opportunity,
  isOpen,
  onClose,
  onDonate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !opportunity) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#14221A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="opportunity-detail-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFCFB] rounded-2xl sm:rounded-3xl border border-[#E8E3D8] shadow-[0_24px_64px_rgba(20,34,26,0.18)] overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FDFCFB]/90 hover:bg-[#F4F0E8] border border-[#E2DDD2] text-[#47574E] hover:text-[#18261E] flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        {/* Large Humanitarian Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#EAE5DC] overflow-hidden">
          <CharityImage
            src={opportunity.imageUrl}
            fallbackUrls={opportunity.fallbackUrls}
            alt={opportunity.imageAlt}
            className="w-full h-full object-cover object-center"
            categoryLabel={opportunity.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14221A]/70 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md mb-1.5 text-white/90">
              {opportunity.subtitle || 'Field Opportunity'}
            </span>
            <h2 id="opportunity-detail-title" className="text-xl sm:text-2xl font-semibold tracking-tight text-white drop-shadow-sm">
              {opportunity.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-280px)] overflow-y-auto">
          {/* Short Description */}
          <p className="text-base text-[#3C4A41] leading-relaxed font-normal">
            {opportunity.shortDesc}
          </p>

          {/* Project Progress if applicable */}
          {opportunity.isProject && typeof opportunity.progressPercent === 'number' && (
            <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#E5DFD2] space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#2F3E35]">
                <span>Project Progress</span>
                <span className="text-brand-primary">{opportunity.progressPercent}% Funded</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#E2DBD0] overflow-hidden">
                <div
                  className="h-full bg-brand-primary rounded-full transition-all duration-500"
                  style={{ width: `${opportunity.progressPercent}%` }}
                />
              </div>
              <div className="text-[11px] text-[#637267] flex items-center justify-between pt-0.5">
                <span>Direct Community Project</span>
                <span>Impact: {opportunity.peopleImpacted || opportunity.impactMetric}</span>
              </div>
            </div>
          )}

          {/* Editorial Need & Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
            {/* THE NEED */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F9F7F2] border border-[#ECE7DC] space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#738278]">
                The Need
              </h3>
              <p className="text-sm text-[#435248] leading-relaxed">
                {opportunity.need}
              </p>
            </div>

            {/* THE IMPACT */}
            <div className="p-4 sm:p-5 rounded-xl bg-brand-light/60 border border-brand-primary/15 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                The Impact
              </h3>
              <p className="text-sm text-[#273B30] leading-relaxed">
                {opportunity.impact}
              </p>
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div className="border-t border-[#ECE7DC] pt-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#738278]">
              Project Details
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#ECE6DB]">
                <span className="flex items-center gap-1.5 text-[#738278] font-medium mb-1">
                  <MapPin size={12} className="text-brand-primary" /> Location
                </span>
                <span className="font-semibold text-[#25342B] block truncate">
                  {opportunity.location}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#ECE6DB]">
                <span className="flex items-center gap-1.5 text-[#738278] font-medium mb-1">
                  <Users size={12} className="text-brand-primary" /> Community
                </span>
                <span className="font-semibold text-[#25342B] block truncate">
                  {opportunity.community}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#ECE6DB]">
                <span className="flex items-center gap-1.5 text-[#738278] font-medium mb-1">
                  <Activity size={12} className="text-brand-primary" /> Status
                </span>
                <span className="font-semibold text-brand-primary block truncate">
                  {opportunity.status}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#ECE6DB]">
                <span className="flex items-center gap-1.5 text-[#738278] font-medium mb-1">
                  <CheckCircle2 size={12} className="text-brand-primary" /> Impact
                </span>
                <span className="font-semibold text-[#25342B] block truncate">
                  {opportunity.impactMetric}
                </span>
              </div>
            </div>
          </div>

          {/* Assurance Tag */}
          <div className="flex items-center gap-2 text-xs text-[#637267] pt-1">
            <ShieldCheck size={14} className="text-brand-primary shrink-0" />
            <span>100% verified donation delivery with comprehensive field feedback</span>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 sm:p-6 bg-[#F8F5EE] border-t border-[#ECE7DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#637267] block">Support this cause</span>
            <span className="text-sm font-semibold text-[#25342B]">
              {opportunity.suggestedAmount ? `Suggested from £${opportunity.suggestedAmount}` : 'Any amount helps'}
            </span>
          </div>
          
          <button
            onClick={() => {
              onClose();
              onDonate(opportunity);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-hover transition-colors shadow-sm cursor-pointer"
          >
            <span>Donate Now</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
