import React from 'react';
import { BookOpen, Clock, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { MOBILE_STORIES } from '../data/mobileMockData';
import { CharityImage } from '../../components/CharityImage';

export const StoriesScreen: React.FC = () => {
  const { pushScreen, openDonationFlow } = useMobileApp();

  return (
    <div id="mobile-stories-screen" className="pb-8 space-y-4">
      {/* Header */}
      <div className="px-4 pt-3 space-y-1">
        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary uppercase tracking-wider bg-brand-light px-2 py-0.5 rounded">
          <BookOpen size={12} />
          <span>Voices of Dignity</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-[#16241B]">Human Stories</h2>
        <p className="text-xs text-[#637468]">
          Real journeys of resilience, hope, and life-changing transformation.
        </p>
      </div>

      {/* Stories Feed */}
      <div className="px-4 space-y-4">
        {MOBILE_STORIES.map((story) => (
          <article
            key={story.id}
            className="rounded-[22px] bg-[#FDFCFB] border border-[#E6E1D6] overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col"
          >
            {/* Tappable Story Card */}
            <button
              type="button"
              onClick={() =>
                pushScreen({
                  type: 'story_detail',
                  params: { storyId: story.id },
                })
              }
              className="text-left w-full cursor-pointer group"
            >
              {/* Portrait / 16:9 Image */}
              <div className="aspect-[16/9] w-full overflow-hidden relative bg-[#EBE7DE]">
                <CharityImage
                  src={story.imageUrl}
                  fallbackUrls={story.fallbackUrls}
                  alt={story.title}
                  className="w-full h-full object-cover group-active:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary/90 px-2 py-0.5 rounded backdrop-blur-xs">
                    {story.causeName}
                  </span>
                  <span className="text-[11px] font-medium flex items-center gap-1 text-white/90">
                    <Clock size={11} />
                    {story.readTime}
                  </span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="p-3.5 space-y-1.5">
                <div className="flex items-center gap-1 text-[10.5px] text-brand-primary font-medium">
                  <MapPin size={11} />
                  <span>{story.location}</span>
                </div>
                <h3 className="text-[15px] font-bold text-[#16251C] leading-snug group-hover:text-brand-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs text-[#55665C] leading-relaxed line-clamp-2">
                  {story.summary}
                </p>
              </div>
            </button>

            {/* Bottom Story Card Actions */}
            <div className="px-3.5 pb-3.5 pt-1 flex items-center justify-between border-t border-[#F2EFE8]">
              <span className="text-[11px] text-[#708075] italic">
                "{story.quote.slice(0, 38)}..."
              </span>
              <button
                type="button"
                onClick={() => openDonationFlow(story.causeSlug, 2500)}
                className="min-h-[34px] px-3 rounded-lg bg-brand-primary hover:bg-brand-hover text-white text-xs font-semibold active:scale-98 transition-all cursor-pointer flex items-center gap-1"
              >
                <span>Support {story.causeName}</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
