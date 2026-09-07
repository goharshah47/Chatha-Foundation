import React from 'react';
import { X, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { HUMAN_STORY_DATA } from '../data/charityData';
import { CharityImage } from './CharityImage';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onOpenDonate
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16201A]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FBFBF9] rounded-[22px] shadow-2xl border border-[#E8E4DA] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="story-modal-dialog"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE9E1] bg-[#FAF8F4]">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0F3D2E] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D2E]" />
            Field Story · {HUMAN_STORY_DATA.causeTag}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#637267] hover:text-[#14231B] hover:bg-[#EFECE4] transition-colors cursor-pointer"
            aria-label="Close story"
            id="close-story-modal-btn"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Story Content */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-7">
          {/* Main Photo inside story */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#EAE6DD] border border-[#E5E0D4]">
            <CharityImage
              src={HUMAN_STORY_DATA.imageUrl}
              fallbackUrls={HUMAN_STORY_DATA.fallbackUrls}
              alt={HUMAN_STORY_DATA.imageAlt}
              className="w-full h-full object-cover object-center"
              categoryLabel="Field Story"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBFBF9]/90 backdrop-blur-md text-[11px] font-medium text-[#293830] border border-[#EAE6DD]">
              <MapPin size={12} className="text-[#0F3D2E]" />
              {HUMAN_STORY_DATA.location}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#14231B] leading-snug">
              “{HUMAN_STORY_DATA.quote}”
            </h2>
            <p className="mt-2 text-sm text-[#728076] font-medium">
              Documented with {HUMAN_STORY_DATA.person} · Verified field dispatch
            </p>
          </div>

          <div className="space-y-4 text-[#435248] text-base leading-relaxed font-normal">
            {HUMAN_STORY_DATA.fullStory.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Impact outcome notes */}
          <div className="p-5 rounded-xl bg-[#F4F1EA] border border-[#E5E1D6] space-y-2.5">
            <h4 className="text-xs font-semibold tracking-wider text-[#0F3D2E] uppercase">
              Sustainable Project Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#3E4D43]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#0F3D2E] shrink-0" />
                <span>Solar-powered borehole operating 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#0F3D2E] shrink-0" />
                <span>340 neighboring families directly served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#0F3D2E] shrink-0" />
                <span>Children returned to continuous schooling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#0F3D2E] shrink-0" />
                <span>Community-managed maintenance committee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 sm:px-10 py-4 border-t border-[#EDE9E1] bg-[#FAF8F4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#637267]">
            You can bring safe water and dignity to more families today.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenDonate();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0F3D2E] text-[#FBFBF9] text-xs font-semibold tracking-wide hover:bg-[#0A2C21] transition-all cursor-pointer"
            id="story-modal-donate-btn"
          >
            <span>DONATE NOW</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
