import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, MapPin } from 'lucide-react';
import { HERO_CAMPAIGNS } from '../data/charityData';
import { CharityImage } from './CharityImage';
import { CauseId } from '../types';

interface HeroCarouselProps {
  onOpenDonate: (causeId?: CauseId) => void;
}

const AUTOPLAY_DURATION = 6500; // 6.5s per slide

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenDonate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
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
      className="relative pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-30 lg:pb-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Humanitarian Mission Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. DEDICATED MOBILE COMPOSITION (Below 768px / md:hidden) */}
        {/* Purpose-built: Top Label → Headline → Text → Clear Photo → Carousel Nav → Donate Now */}
        {/* ======================================================== */}
        <div className="md:hidden space-y-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide.id}
              custom={direction}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              {/* TOP: Small Campaign Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-primary/20 text-brand-primary text-[11px] font-bold tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span>{currentSlide.label}</span>
              </div>

              {/* HEADLINE: Strong, highly readable typography (32px-42px) */}
              <h1 className="text-[32px] xs:text-[36px] sm:text-[40px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#14231B] whitespace-pre-line">
                {currentSlide.headline}
              </h1>

              {/* SUPPORTING TEXT: 1-2 Short Lines */}
              <p className="text-[#4A5950] text-[15px] sm:text-base leading-relaxed font-normal">
                {currentSlide.supportingText}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE: Prominently displayed humanitarian photography in natural aspect ratio */}
          {/* Authentic imagery, clearly visible, NO heavy black overlay obscuring faces */}
          <div className="relative w-full aspect-[4/3] xs:aspect-[16/11] max-h-[360px] rounded-2xl overflow-hidden bg-[#16241C] shadow-sm border border-[#E5E0D5]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              </motion.div>
            </AnimatePresence>

            {/* Location Pill floating on photo corner */}
            <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-medium tracking-wide border border-white/20">
              <MapPin size={11} className="text-brand-accent" />
              <span>{currentSlide.location}</span>
            </div>

            {/* Small circular nav controls placed unobtrusively inside image edge */}
            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous campaign"
                className="w-8 h-8 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/20 flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next campaign"
                className="w-8 h-8 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/20 flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* CAROUSEL NAVIGATION: Minimal 01 / 05 and smooth progress line */}
          <div className="flex items-center justify-between px-1 pt-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#18261E]">
                {currentSlide.number} <span className="text-[#86958C] font-normal">/ 05</span>
              </span>

              {/* Progress Line */}
              <div className="flex items-center gap-1">
                {HERO_CAMPAIGNS.map((camp, idx) => {
                  const isActive = idx === currentIndex;
                  const isPast = idx < currentIndex;
                  return (
                    <button
                      key={camp.id}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${camp.number}`}
                      className="py-1 focus:outline-none cursor-pointer"
                    >
                      <div className="h-[3px] w-6 rounded-full bg-[#E0D9CD] overflow-hidden relative">
                        {isActive && (
                          <div
                            className="absolute inset-y-0 left-0 bg-brand-primary rounded-full transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        )}
                        {isPast && (
                          <div className="absolute inset-0 bg-brand-primary rounded-full" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pause / Play */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              className="p-1.5 rounded-lg text-[#5B6A60] hover:text-[#18261E] cursor-pointer"
            >
              {isPaused ? <Play size={13} /> : <Pause size={13} />}
            </button>
          </div>

          {/* PRIMARY DONATE NOW ACTION — Prominent, full-width, min 44px touch target */}
          <div className="pt-2 space-y-2.5">
            <button
              id={`mobile-hero-donate-${currentSlide.causeId}`}
              onClick={() => onOpenDonate(currentSlide.causeId)}
              className="min-h-[48px] w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-primary text-white text-[15px] font-semibold tracking-wide hover:bg-brand-hover active:scale-[0.98] transition-all shadow-md cursor-pointer border border-brand-primary"
            >
              <span>Donate Now</span>
              <ArrowRight size={17} />
            </button>

            {/* Gentle Impact Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#5E6D63] font-normal text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span>{currentSlide.impactMessage}</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. DESKTOP EDITORIAL HERO CONTAINER (768px+ / hidden md:block) */}
        {/* ======================================================== */}
        <div className="hidden md:block relative w-full h-[74vh] min-h-[560px] max-h-[760px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#16241C] shadow-[0_16px_48px_rgba(15,35,25,0.12)] border border-[#E5E0D5]">
          
          {/* ONLY SHOW ACTIVE SLIDE — No previous or next slides peeking on the sides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.div>
          </AnimatePresence>

          {/* SUBTLE READABILITY TREATMENT BEHIND TYPOGRAPHY */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/35 sm:to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Location Badge (Top Right) */}
          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium tracking-wide">
            <MapPin size={12} className="text-brand-accent" />
            <span>{currentSlide.location}</span>
          </div>

          {/* EDITORIAL CONTENT OVERLAY */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-2xl lg:max-w-3xl text-left">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Campaign Label Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-xs border border-white/20 text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  <span>{currentSlide.label}</span>
                </div>

                {/* Strong Oversized White Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-medium leading-[1.08] tracking-[-0.03em] text-white whitespace-pre-line drop-shadow-xs">
                  {currentSlide.headline}
                </h1>

                {/* Minimal Supporting Content */}
                <p className="text-white/85 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl drop-shadow-xs">
                  {currentSlide.supportingText}
                </p>

                {/* ONE PROMINENT DONATE NOW ACTION */}
                <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    id={`hero-donate-${currentSlide.causeId}`}
                    onClick={() => onOpenDonate(currentSlide.causeId)}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl bg-brand-primary text-white text-[15px] font-semibold tracking-wide hover:bg-brand-hover active:scale-[0.98] transition-all duration-200 shadow-[0_4px_24px_var(--color-brand-shadow)] cursor-pointer group border border-white/15 w-fit"
                  >
                    <span>Donate Now</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 text-brand-accent"
                    />
                  </button>

                  {/* Gentle Context Note */}
                  <span className="text-xs text-white/70 font-light flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-accent" />
                    {currentSlide.impactMessage}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MINIMAL CAROUSEL CONTROLS — Bottom Right */}
          <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-20 flex items-center gap-3.5 bg-black/40 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/20 text-white shadow-lg">
            {/* Slide Index Counter */}
            <span className="font-mono text-xs sm:text-[13px] tracking-wider text-white font-semibold">
              {currentSlide.number} <span className="text-white/60 font-normal">/ 05</span>
            </span>

            {/* Smooth Progress Lines */}
            <div className="flex items-center gap-1.5">
              {HERO_CAMPAIGNS.map((camp, idx) => {
                const isActive = idx === currentIndex;
                const isPast = idx < currentIndex;
                return (
                  <button
                    key={camp.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to campaign ${camp.number}: ${camp.label}`}
                    className="group py-2 focus:outline-none cursor-pointer"
                  >
                    <div className="h-[2px] w-6 sm:w-10 rounded-full bg-white/30 overflow-hidden relative transition-all duration-300 group-hover:bg-white/50">
                      {isActive && (
                        <div
                          className="absolute inset-y-0 left-0 bg-brand-accent rounded-full transition-all duration-75 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                      {isPast && (
                        <div className="absolute inset-0 bg-brand-accent rounded-full" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="w-px h-3 bg-white/25 mx-0.5" />

            {/* Pause / Play + Navigation */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
                className="p-1 rounded-lg hover:text-brand-accent hover:bg-white/10 transition-colors cursor-pointer"
                title={isPaused ? 'Resume' : 'Pause'}
              >
                {isPaused ? <Play size={13} /> : <Pause size={13} />}
              </button>
              <button
                onClick={prevSlide}
                aria-label="Previous campaign"
                className="p-1 rounded-lg hover:text-[#34D399] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next campaign"
                className="p-1 rounded-lg hover:text-[#34D399] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
