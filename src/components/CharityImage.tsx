import React, { useState, useEffect } from 'react';

interface CharityImageProps {
  src: string;
  fallbackUrls?: string[];
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  categoryLabel?: string;
}

export const CharityImage: React.FC<CharityImageProps> = ({
  src,
  fallbackUrls = [],
  alt,
  className = 'w-full h-full object-cover object-center',
  loading = 'lazy',
  categoryLabel = 'Humanitarian Relief',
}) => {
  // -1 means using primary src; 0..n means using fallbackUrls[index]; fallbackUrls.length means SVG fallback
  const [attemptIndex, setAttemptIndex] = useState<number>(-1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setAttemptIndex(-1);
    setIsLoaded(false);
  }, [src]);

  const getCurrentSource = () => {
    if (attemptIndex === -1) return src;
    if (attemptIndex < fallbackUrls.length) return fallbackUrls[attemptIndex];
    return null;
  };

  const handleError = () => {
    if (attemptIndex < fallbackUrls.length - 1) {
      setAttemptIndex((prev) => prev + 1);
    } else {
      // Switch to guaranteed local SVG illustration fallback
      setAttemptIndex(fallbackUrls.length);
      setIsLoaded(true);
    }
  };

  const activeSrc = getCurrentSource();

  // If all remote URLs fail, render a dignified humanitarian vector composition
  if (attemptIndex >= fallbackUrls.length || !activeSrc) {
    return (
      <div
        className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#EAE6DD] via-[#E2DDD3] to-[#D5CFC3] text-[#2F3E35] select-none"
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full bg-brand-light border border-brand-primary/20 flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
        <div className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase mb-1">
          Chatha Foundation
        </div>
        <div className="text-xs font-medium text-[#46554C] text-center max-w-[200px] leading-snug">
          {categoryLabel}
        </div>
        <div className="mt-2 text-[10px] text-[#718076]">
          Humanity · Dignity · Hope · Impact
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#ECE8E0]">
      {/* Warm placeholder backdrop while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E8E4DA] animate-pulse" />
      )}
      <img
        src={activeSrc}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
