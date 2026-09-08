import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CharityImage } from './CharityImage';

interface FinalCtaProps {
  onOpenDonate: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDonate }) => {
  return (
    <section
      id="final-cta"
      className="py-16 sm:py-24 border-t border-[#ECE8E0] bg-[#FBFBF9]"
      aria-label="Call to Action"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: One Powerful Documentary Photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative h-[320px] sm:h-[400px] lg:h-[460px] rounded-[22px] overflow-hidden bg-[#ECE8E0] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#E7E3D8]">
              <CharityImage
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=85"
                fallbackUrls={[
                  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=85",
                  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=85"
                ]}
                alt="Compassionate hands joining together in warm natural sunlight"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                categoryLabel="Hope & Action"
              />
            </div>
          </div>

          {/* Right: Large Emotional Statement + Donate Now */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                Chatha Foundation · Humanity & Hope
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.14] font-medium tracking-tight text-[#14231B]">
              Together, we can make a difference.
            </h2>

            <p className="text-[#516056] text-base sm:text-lg leading-relaxed font-normal">
              A single moment of generosity delivers clean water to a drought-stricken village, meals to hungry children, and dignity to displaced families.
            </p>

            <div className="pt-2">
              <button
                id="final-cta-donate-btn"
                onClick={onOpenDonate}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-primary text-[#FBFBF9] text-[15px] font-semibold tracking-wide hover:bg-brand-hover active:scale-[0.98] transition-all shadow-brand cursor-pointer group"
              >
                <span>DONATE NOW</span>
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="text-xs text-[#718076] pt-1">
              Chatha Foundation. 100% of public donations directly fund humanitarian relief programs.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
