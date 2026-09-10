import React from 'react';
import { ArrowLeft, Clock, MapPin, Share2, Heart, ArrowRight, ShieldCheck, Quote } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { MOBILE_STORIES } from '../data/mobileMockData';
import { CharityImage } from '../../components/CharityImage';

interface StoryDetailScreenProps {
  storyId?: string;
}

export const StoryDetailScreen: React.FC<StoryDetailScreenProps> = ({ storyId }) => {
  const { popScreen, openDonationFlow, showToast } = useMobileApp();

  const story = MOBILE_STORIES.find((s) => s.id === storyId) || MOBILE_STORIES[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: story.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      showToast('Story link copied to clipboard');
    }
  };

  return (
    <div id="mobile-story-detail-screen" className="pb-36 relative bg-[#FBFBF9]">
      {/* 1. TOP APP BAR */}
      <div className="sticky top-0 z-30 bg-[#FDFCFB]/96 backdrop-blur-md border-b border-[#ECE7DC] px-3 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={popScreen}
          className="flex items-center gap-1 text-[#2A3830] font-semibold text-xs py-1 px-2 rounded-lg hover:bg-[#F0ECE3] cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Stories</span>
        </button>
        <span className="text-xs font-bold text-[#16241B] truncate max-w-[180px]">
          {story.causeName}
        </span>
        <button
          type="button"
          onClick={handleShare}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#35453C] hover:bg-[#F0ECE3] cursor-pointer"
        >
          <Share2 size={16} />
        </button>
      </div>

      {/* 2. HERO IMAGE */}
      <div className="relative aspect-[16/10] w-full bg-[#18261E] overflow-hidden">
        <CharityImage
          src={story.imageUrl}
          fallbackUrls={story.fallbackUrls}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-light bg-brand-primary/80 px-2 py-0.5 rounded">
            {story.causeName}
          </span>
          <h1 className="text-lg font-bold leading-tight text-white">{story.title}</h1>
        </div>
      </div>

      {/* 3. METADATA BAR */}
      <div className="px-4 py-3 bg-[#F4F1EA] border-b border-[#E8E2D5] flex items-center justify-between text-[11px] text-[#55665C]">
        <div className="flex items-center gap-1.5">
          <MapPin size={12} className="text-brand-primary" />
          <span>{story.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>{story.readTime}</span>
        </div>
      </div>

      {/* 4. STORY EDITORIAL BODY */}
      <div className="p-4 space-y-4">
        <p className="text-xs font-medium text-[#25352C] leading-relaxed border-l-3 border-brand-primary pl-3 italic">
          {story.summary}
        </p>

        <div className="space-y-3 pt-1">
          {story.paragraphs.map((p, i) => (
            <p key={i} className="text-[13px] text-[#3A4A40] leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Pull Quote Box */}
        <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-[#ECE7DC] to-[#E2DDD0] border border-[#D5CFBF] space-y-2">
          <Quote size={22} className="text-brand-primary" />
          <blockquote className="text-xs font-semibold text-[#18261E] italic leading-relaxed">
            "{story.quote}"
          </blockquote>
          <span className="text-[10.5px] font-bold text-brand-primary uppercase tracking-wider block">
            — {story.quoteAuthor}
          </span>
        </div>

        {/* Impact Metrics Verified */}
        <div className="space-y-2 pt-2 border-t border-[#ECE7DC]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#637468]">
            Outcomes Delivered
          </span>
          <div className="grid grid-cols-3 gap-2">
            {story.impactMetrics.map((m, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-[#FDFCFB] border border-[#E6E1D6] text-center"
              >
                <span className="text-xs font-extrabold text-brand-primary block">
                  {m.value}
                </span>
                <span className="text-[9.5px] text-[#637468] block mt-0.5">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. STICKY BOTTOM DONATE CTA (Floats cleanly above fixed bottom tab bar) */}
      <div className="fixed bottom-[62px] inset-x-0 p-3 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-[#E6E1D6] z-30 shadow-[0_-4px_20px_rgba(20,35,27,0.08)]">
        <div className="max-w-md mx-auto flex items-center gap-2.5">
          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-bold text-[#6D7D72] block">
              Support this cause
            </span>
            <span className="text-xs font-bold text-[#18261E] truncate block">
              {story.causeName}
            </span>
          </div>
          <button
            type="button"
            onClick={() => openDonationFlow(story.causeSlug, 2500)}
            className="flex-2 min-h-[46px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <Heart size={15} fill="currentColor" />
            <span>Donate Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
