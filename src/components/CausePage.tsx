import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Heart, MapPin, Users, Activity, Sparkles } from 'lucide-react';
import { CausePageData, CauseOpportunity, CauseId } from '../types';
import { CharityImage } from './CharityImage';

interface CausePageProps {
  data: CausePageData;
  onNavigateHome: () => void;
  onOpenDonate: (causeId?: CauseId, customLabel?: string, suggestedAmount?: number) => void;
  onSelectOpportunity: (opportunity: CauseOpportunity) => void;
}

export const CausePage: React.FC<CausePageProps> = ({
  data,
  onNavigateHome,
  onOpenDonate,
  onSelectOpportunity,
}) => {
  return (
    <div className="pt-20 sm:pt-24 pb-16">
      
      {/* 1. MINIMAL BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs font-medium text-[#68776E]" aria-label="Breadcrumb">
          <button
            onClick={onNavigateHome}
            className="hover:text-brand-primary transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight size={12} className="text-[#A5B3AA]" />
          <span className="text-[#68776E]">Causes</span>
          <ChevronRight size={12} className="text-[#A5B3AA]" />
          <span className="text-[#1E2822] font-semibold">{data.name}</span>
        </nav>
      </div>

      {/* 2. HUMANITARIAN HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Emotional Typography & Prominent Single CTA */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-primary/15">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                {data.tagline}
              </span>
            </div>

            {/* Emotional Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#14231B] leading-[1.18]">
              {data.heroHeadline}
            </h1>

            {/* Short Narrative Description */}
            <p className="text-base sm:text-lg text-[#47574D] leading-relaxed font-normal max-w-xl">
              {data.heroDescription}
            </p>

            {/* Impact Statement Badge */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F6F2EB] border border-[#E9E4DA] flex items-start gap-3">
              <Sparkles size={18} className="text-brand-primary shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium text-[#303E35] leading-snug">
                {data.impactStatement}
              </p>
            </div>

            {/* Prominent Donate Now CTA & Secondary Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenDonate(data.causeId, `${data.name} Relief Fund`)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-hover transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Donate to {data.name}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#giving-opportunities"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#4E5E54] hover:text-brand-primary uppercase transition-colors"
              >
                <span>View Opportunities</span>
                <ChevronRight size={14} />
              </a>
            </div>

          </div>

          {/* Right: Authentic Large Documentary Photography */}
          <div className="lg:col-span-6">
            <div className="relative h-[360px] sm:h-[460px] lg:h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EAE5DC] border border-[#E4DFD3] shadow-[0_18px_48px_rgba(18,32,24,0.08)]">
              <CharityImage
                src={data.heroImage}
                fallbackUrls={data.heroFallbackUrls}
                alt={data.heroAlt}
                className="w-full h-full object-cover object-center"
                loading="eager"
                categoryLabel={data.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white/90 text-xs font-medium">
                {data.heroAlt}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CAUSE CONTENT — ASYMMETRIC EDITORIAL LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-t border-[#ECE7DC] space-y-16 sm:space-y-24">
        
        {/* ROW 1: WHY THIS MATTERS (Image → Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#ECE8E0] border border-[#E5DFD4]">
              <CharityImage
                src={data.whyMatters.imageUrl}
                fallbackUrls={data.whyMatters.fallbackUrls}
                alt={data.whyMatters.imageAlt}
                className="w-full h-full object-cover object-center"
                categoryLabel="The Need"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#718076] uppercase">
                Why This Matters
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14231B] leading-snug">
              {data.whyMatters.title}
            </h2>
            
            <p className="text-base text-[#4C5B51] leading-relaxed">
              {data.whyMatters.text}
            </p>

            {data.whyMatters.stat && (
              <div className="p-4 rounded-xl bg-[#F6F2EB] border-l-4 border-brand-primary text-xs sm:text-sm font-semibold text-[#27372D]">
                {data.whyMatters.stat}
              </div>
            )}
          </div>

        </div>

        {/* ROW 2: HOW WE HELP (Text → Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#718076] uppercase">
                How We Help
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14231B] leading-snug">
              {data.howWeHelp.title}
            </h2>

            <p className="text-base text-[#4C5B51] leading-relaxed">
              {data.howWeHelp.text}
            </p>

            {/* Key Action Points */}
            {data.howWeHelp.points && (
              <ul className="space-y-3 pt-2">
                {data.howWeHelp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#35453B]">
                    <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#ECE8E0] border border-[#E5DFD4]">
              <CharityImage
                src={data.howWeHelp.imageUrl}
                fallbackUrls={data.howWeHelp.fallbackUrls}
                alt={data.howWeHelp.imageAlt}
                className="w-full h-full object-cover object-center"
                categoryLabel="Field Impact"
              />
            </div>
          </div>

        </div>

        {/* ROW 3: YOUR SUPPORT & IMPACT TIERS */}
        <div className="p-7 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#F6F2EB] border border-[#E9E4DA] space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                Your Support
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14231B]">
              {data.yourSupport.title}
            </h2>
            <p className="text-sm sm:text-base text-[#4C5B51] leading-relaxed">
              {data.yourSupport.text}
            </p>
          </div>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.yourSupport.impactTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#FDFCFB] border border-[#E7E2D7] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-bold text-brand-primary">
                    {tier.amount}
                  </div>
                  <p className="text-xs sm:text-sm text-[#3E4E44] leading-relaxed">
                    {tier.effect}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onOpenDonate(data.causeId, `${data.name}: ${tier.amount}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-hover uppercase tracking-wider cursor-pointer"
                  >
                    <span>Donate this amount</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 4. DEDICATED GIVING OPPORTUNITIES (Humanitarian stories, NOT e-commerce product cards) */}
      <section id="giving-opportunities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-xl mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#718076] uppercase">
              Field Opportunities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14231B]">
            {data.opportunitiesTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#4E5E54] leading-relaxed">
            {data.opportunitiesSubtitle}
          </p>
        </div>

        {/* Opportunities List: Asymmetric & Scannable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {data.opportunities.map((opp) => (
            <div
              key={opp.id}
              className="group rounded-2xl bg-[#FDFCFB] border border-[#E9E4DA] overflow-hidden flex flex-col justify-between hover:border-brand-primary/40 hover:shadow-[0_12px_32px_rgba(20,34,26,0.06)] transition-all duration-300"
            >
              {/* Card Photo with Category & Location tags */}
              <div className="relative h-52 sm:h-56 bg-[#ECE8E0] overflow-hidden">
                <CharityImage
                  src={opp.imageUrl}
                  fallbackUrls={opp.fallbackUrls}
                  alt={opp.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  categoryLabel={opp.title}
                />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#14221A]/75 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1">
                  <MapPin size={11} className="text-white/80" />
                  <span>{opp.location.split(',')[0]}</span>
                </div>

                {/* Status or Progress */}
                {opp.isProject && typeof opp.progressPercent === 'number' && (
                  <div className="absolute bottom-3 left-3 right-3 bg-[#14221A]/85 backdrop-blur-md p-2 rounded-lg text-white text-[11px] space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>Funded</span>
                      <span className="font-semibold text-brand-light">{opp.progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
                      <div
                        className="h-full bg-brand-light rounded-full"
                        style={{ width: `${opp.progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">
                    {opp.subtitle || data.name}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#14231B] group-hover:text-brand-primary transition-colors leading-snug">
                    {opp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4E5E54] leading-relaxed line-clamp-3">
                    {opp.shortDesc}
                  </p>
                </div>

                {/* Impact Metric & Quick Detail */}
                <div className="pt-2 border-t border-[#EFEBE2] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5D6D63]">
                    <span className="font-medium text-[#29382F]">{opp.impactMetric}</span>
                    {opp.suggestedAmount && (
                      <span className="font-semibold text-brand-primary">
                        from £{opp.suggestedAmount}
                      </span>
                    )}
                  </div>

                  {/* Actions: Read Detail + Donate Now */}
                  <div className="flex items-center justify-between pt-1 gap-2">
                    <button
                      onClick={() => onSelectOpportunity(opp)}
                      className="text-xs font-semibold text-[#48584E] hover:text-brand-primary transition-colors cursor-pointer"
                    >
                      Read details & impact →
                    </button>

                    <button
                      onClick={() => onOpenDonate(opp.causeSlug as CauseId, `${data.name}: ${opp.title}`, opp.suggestedAmount)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-primary text-white text-xs font-semibold hover:bg-brand-hover transition-colors cursor-pointer"
                    >
                      <span>Donate</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CAUSE CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#18261F] text-white text-center space-y-6 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-primary/10 filter blur-3xl pointer-events-none" />
          
          <div className="relative max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck size={14} />
              <span>Chatha Foundation Direct Impact</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              {data.finalCtaHeadline}
            </h2>

            <p className="text-sm sm:text-base text-[#B3C2B9] leading-relaxed">
              {data.finalCtaSubtext}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDonate(data.causeId, `${data.name} General Appeal`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-hover transition-colors shadow-sm cursor-pointer"
            >
              <span>Donate to {data.name}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onNavigateHome}
              className="text-xs font-semibold text-[#B3C2B9] hover:text-white transition-colors cursor-pointer"
            >
              ← Back to All Causes
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
