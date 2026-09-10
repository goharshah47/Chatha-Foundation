import React, { useState } from 'react';
import { ArrowRight, Check, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { CharityImage } from '../../components/CharityImage';

export const OnboardingScreen: React.FC = () => {
  const { completeOnboarding, popScreen, screenStack } = useMobileApp();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Give with Purpose',
      subtitle: 'Dignified Relief for Those in Need',
      text: 'Chatha Foundation brings direct humanitarian aid—clean water, emergency food, and orphan care—to vulnerable families across 28 nations.',
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
      badge: 'Chatha Foundation',
      icon: Heart,
    },
    {
      title: 'See Your Real Impact',
      subtitle: '100% Direct Field Transparency',
      text: 'Track your contributions to verified community boreholes and schools with real-time field officer updates and digital receipts.',
      imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=80',
      badge: '100% Zakat Policy',
      icon: ShieldCheck,
    },
    {
      title: 'Support a Cause Today',
      subtitle: 'Clean Water · Food · Orphans · Ramadan',
      text: 'Choose where your generosity makes an immediate difference. Fast, secure giving with instant tax-deductible confirmation.',
      imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Every Gift Matters',
      icon: Sparkles,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    completeOnboarding();
    if (screenStack.length > 1) {
      popScreen();
    }
  };

  const active = steps[currentStep];
  const Icon = active.icon;

  return (
    <div
      id="mobile-onboarding-screen"
      className="fixed inset-0 z-50 bg-[#16251C] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* 1. TOP BAR WITH SKIP BUTTON */}
      <div className="relative z-10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
          <span className="text-xs font-bold tracking-tight uppercase text-white/90">
            Chatha Foundation
          </span>
        </div>
        <button
          type="button"
          onClick={handleFinish}
          className="text-xs font-semibold text-white/70 hover:text-white px-2.5 py-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
        >
          Skip
        </button>
      </div>

      {/* 2. HERO IMAGE CANVAS WITH PORTRAIT RATIO */}
      <div className="relative flex-1 w-full overflow-hidden flex items-end">
        <CharityImage
          src={active.imageUrl}
          alt={active.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14221A] via-[#14221A]/50 to-black/30" />

        {/* Content Box */}
        <div className="relative z-10 p-5 space-y-3 w-full max-w-sm mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold text-white shadow-xs">
            <Icon size={13} className="text-brand-light" />
            <span>{active.badge}</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight leading-tight text-white">
            {active.title}
          </h1>
          <p className="text-xs text-[#D8E2D9] leading-relaxed">
            {active.text}
          </p>
        </div>
      </div>

      {/* 3. BOTTOM NAVIGATION CONTROLS */}
      <div className="relative z-10 p-5 bg-[#14221A] border-t border-white/10 space-y-4">
        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentStep === i ? 'w-6 bg-brand-primary' : 'w-1.5 bg-white/30'
              }`}
              aria-label={`Step ${i + 1}`}
            />
          ))}
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleNext}
          className="w-full min-h-[48px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
        >
          <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next Step'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
