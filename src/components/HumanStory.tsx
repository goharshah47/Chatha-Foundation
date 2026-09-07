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
        className="py-16 sm:py-24 border-t border-[#ECE8E0] bg-[#FAF8F5]/60"
        aria-label="Humanitarian Field Story"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Large Contained Photograph */}
            <div className="lg:col-span-6">
              <div className="relative h-[360px] sm:h-[440px] lg:h-[480px] rounded-[22px] overflow-hidden bg-[#E9E5DC] shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-[#E6E1D6]">
                <CharityImage
                  src={HUMAN_STORY_DATA.imageUrl}
                  fallbackUrls={HUMAN_STORY_DATA.fallbackUrls}
                  alt={HUMAN_STORY_DATA.imageAlt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  categoryLabel="Human Story"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FBFBF9]/90 backdrop-blur-md text-[12px] font-medium text-[#25322A] border border-[#E8E4DA]/80 shadow-xs">
                  <MapPin size={13} className="text-[#0F3D2E]" />
                  <span>{HUMAN_STORY_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D2E]" />
                <span className="text-[12px] font-bold tracking-[0.2em] text-[#0F3D2E] uppercase">
                  Human Story
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.18] font-medium tracking-tight text-[#14231B]">
                “{HUMAN_STORY_DATA.quote}”
              </h2>

              <p className="text-[#516055] text-base sm:text-lg leading-relaxed font-normal">
                {HUMAN_STORY_DATA.shortStory}
              </p>

              <div className="pt-2">
                <button
                  id="read-human-story-btn"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[#0F3D2E] hover:text-[#09271E] group cursor-pointer"
                >
                  <span className="underline underline-offset-8 decoration-[#0F3D2E]/40 group-hover:decoration-[#0F3D2E] transition-all">
                    Read the story
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
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
