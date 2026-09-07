import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { HERO_CAMPAIGNS } from '../data/charityData';
import { CharityImage } from './CharityImage';
import { CauseId } from '../types';

interface HeroCarouselProps {
  onOpenDonate: (causeId?: CauseId) => void;
}

const AUTOPLAY_DURATION = 6000; // 6 seconds

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenDonate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);

  const currentSlide = HERO_CAMPAIGNS[currentIndex];

  const goToSlide = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % HERO_CAMPAIGNS.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + HERO_CAMPAIGNS.length) % HERO_CAMPAIGNS.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Timer loop for smooth progress bar and autoplay
  useEffect(() => {
    if (isPaused) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * AUTOPLAY_DURATION;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        nextSlide();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Humanitarian Campaigns"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* 60-70vh Editorial Hero Composition */}
        <div className="min-h-[58vh] sm:min-h-[62vh] lg:h-[66vh] lg:max-h-[640px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -16 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                {/* Campaign Label */}
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D2E]" />
                  <span className="text-[12px] font-bold tracking-[0.22em] text-[#0F3D2E] uppercase">
                    {currentSlide.label}
                  </span>
                </div>

                {/* Large Editorial Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-[-0.025em] font-medium text-[#14231B] whitespace-pre-line">
                  {currentSlide.headline}
                </h1>

                {/* One short supporting sentence */}
                <p className="text-[#556358] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  {currentSlide.supportingText}
                </p>

                {/* Single Primary Action + Impact Message */}
                <div className="pt-2 space-y-4">
                  <div>
                    <button
                      id={`hero-donate-${currentSlide.causeId}`}
                      onClick={() => onOpenDonate(currentSlide.causeId)}
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0F3D2E] text-[#FBFBF9] text-[14px] font-semibold tracking-wide hover:bg-[#0A2C21] active:scale-[0.98] transition-all shadow-[0_3px_12px_rgba(15,61,46,0.2)] cursor-pointer group"
                    >
                      <span>DONATE NOW</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>

                  {/* Small Impact Message */}
                  <div className="flex items-center gap-2 text-[13px] text-[#6B796F]">
                    <span className="w-1 h-1 rounded-full bg-[#0F3D2E]/60" />
                    <span>{currentSlide.impactMessage}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Authentic Documentary Photograph */}
          <div className="lg:col-span-6 h-[320px] sm:h-[400px] lg:h-full order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#ECE8E0] shadow-[0_8px_32px_rgba(20,35,27,0.06)] border border-[#E7E3D8]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <CharityImage
                    src={currentSlide.imageUrl}
                    fallbackUrls={currentSlide.fallbackUrls}
                    alt={currentSlide.imageAlt}
                    className="w-full h-full object-cover object-center select-none"
                    loading="eager"
                    categoryLabel={currentSlide.label}
                  />
                  {/* Subtle, natural location badge for documentary dignity */}
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 px-3 py-1.5 rounded-full bg-[#FBFBF9]/90 backdrop-blur-md text-[11px] font-medium tracking-wide text-[#2B3830] border border-[#E8E4DA]/80 shadow-xs">
                    {currentSlide.location}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Minimal Editorial Carousel Navigation: 01 / 05 ━━━━━━━━ */}
        <div className="mt-8 pt-6 border-t border-[#EDE9E1] flex items-center justify-between">
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Slide Index Counter */}
            <span className="font-mono text-xs sm:text-[13px] tracking-wider text-[#14231B] font-semibold">
              {currentSlide.number} <span className="text-[#8C988F] font-normal">/ 05</span>
            </span>

            {/* Elegant Minimal Progress Bar Track */}
            <div className="flex items-center gap-1.5">
              {HERO_CAMPAIGNS.map((camp, idx) => {
                const isActive = idx === currentIndex;
                const isPast = idx < currentIndex;
                return (
                  <button
                    key={camp.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to campaign slide ${camp.number}: ${camp.label}`}
                    className="group py-2 focus:outline-none cursor-pointer"
                  >
                    <div className="h-[2px] w-8 sm:w-14 rounded-full bg-[#E2DED5] overflow-hidden relative transition-all duration-300 group-hover:bg-[#C9C4B7]">
                      {isActive && (
                        <div
                          className="absolute inset-y-0 left-0 bg-[#0F3D2E] rounded-full transition-all duration-75 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                      {isPast && (
                        <div className="absolute inset-0 bg-[#0F3D2E] rounded-full" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Minimal Controls: Previous / Next / Pause toggle */}
          <div className="flex items-center gap-1 text-[#657369]">
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              className="p-1.5 rounded-full hover:text-[#0F3D2E] hover:bg-[#EFECE4] transition-colors cursor-pointer"
              title={isPaused ? 'Resume' : 'Pause'}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>
            <div className="w-px h-3 bg-[#DDD8CE] mx-1" />
            <button
              onClick={prevSlide}
              aria-label="Previous campaign"
              className="p-1.5 rounded-full hover:text-[#0F3D2E] hover:bg-[#EFECE4] transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next campaign"
              className="p-1.5 rounded-full hover:text-[#0F3D2E] hover:bg-[#EFECE4] transition-colors cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
