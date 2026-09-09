import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { HUMAN_STORY_DATA } from '../data/charityData';
import { CharityImage } from './CharityImage';
import { StoryModal } from './StoryModal';

interface HumanStoryProps {
  onOpenDonate: () => void;
}

export const HumanStory: React.FC<HumanStoryProps> = ({ onOpenDonate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="story"
        className="py-12 sm:py-20 lg:py-24 border-t border-[#ECE8E0] bg-[#FAF8F5]/60"
        aria-label="Humanitarian Field Story"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Contained Authentic Photograph */}
            <div className="lg:col-span-6">
              <div className="relative h-[280px] xs:h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl sm:rounded-[22px] overflow-hidden bg-[#E9E5DC] shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-[#E6E1D6]">
                <CharityImage
                  src={HUMAN_STORY_DATA.imageUrl}
                  fallbackUrls={HUMAN_STORY_DATA.fallbackUrls}
                  alt={HUMAN_STORY_DATA.imageAlt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  categoryLabel="Human Story"
                />
                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBFBF9]/90 backdrop-blur-md text-[11px] sm:text-[12px] font-medium text-[#25322A] border border-[#E8E4DA]/80 shadow-xs">
                  <MapPin size={12} className="text-brand-primary" />
                  <span>{HUMAN_STORY_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                  Human Story
                </span>
              </div>

              <h2 className="text-2xl xs:text-[28px] sm:text-3xl lg:text-[40px] leading-[1.2] font-medium tracking-tight text-[#14231B]">
                “{HUMAN_STORY_DATA.quote}”
              </h2>

              <p className="text-[#516055] text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
                {HUMAN_STORY_DATA.shortStory}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="read-human-story-btn"
                  onClick={() => setIsModalOpen(true)}
                  className="min-h-[44px] inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-brand-primary hover:text-brand-hover group cursor-pointer"
                >
                  <span className="underline underline-offset-8 decoration-brand-primary/40 group-hover:decoration-brand-primary transition-all">
                    Read Amina's story
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={onOpenDonate}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  <span>Support Clean Water</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Full Editorial Reading Modal */}
      <StoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenDonate={onOpenDonate}
      />
    </>
  );
};
