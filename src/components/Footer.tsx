import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="about"
      className="border-t border-[#E8E4DA] bg-[#F7F5EF] pt-16 pb-12 text-[#2A372F]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
              <span className="font-semibold text-xl tracking-tight text-[#14231B]">
                Chatha <span className="font-light text-[#55655B]">Foundation</span>
              </span>
            </div>
            <div className="text-xs font-semibold tracking-wider text-brand-primary uppercase">
              Humanity · Dignity · Hope · Impact
            </div>
            <p className="text-sm text-[#5B6A60] leading-relaxed max-w-sm">
              An international humanitarian foundation dedicated to restoring human dignity through clean water, emergency food aid, orphan care, and community resilience.
            </p>
            <div className="text-xs text-[#7A887E] pt-2">
              Chatha Foundation Humanitarian Trust (No. 1198242) · Regulated by the Charity Commission.
            </div>
          </div>

          {/* Minimal Navigation Columns */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-wider text-brand-primary uppercase">
              Explore
            </div>
            <ul className="space-y-2.5 text-sm text-[#46544B]">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Featured Campaigns
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('causes')}
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Causes & Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('story')}
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Field Dispatch
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('impact')}
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Verified Impact
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDonate}
                  className="font-medium text-brand-primary hover:underline cursor-pointer"
                >
                  Donate to a Cause
                </button>
              </li>
            </ul>
          </div>

          {/* Field Dispatches Newsletter Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold tracking-wider text-brand-primary uppercase">
              Field Dispatches
            </div>
            <p className="text-sm text-[#5B6A60] leading-relaxed">
              Receive quiet, verified updates directly from our aid teams on the ground.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#EBE7DD] text-xs font-medium text-brand-primary flex items-center gap-2">
                <Check size={14} />
                <span>Thank you. You will receive our next quarterly dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center rounded-full bg-[#FBFBF9] border border-[#DDD8CE] p-1 focus-within:border-brand-primary">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 text-xs text-[#14231B] placeholder-[#88958C] bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-brand-primary text-[#FBFBF9] text-xs font-medium hover:bg-brand-hover transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                    aria-label="Subscribe to dispatches"
                  >
                    <span>Join</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
                <div className="text-[11px] text-[#7A887E]">
                  Zero spam. Unsubscribe with one click anytime.
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E4DFD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A887E]">
          <div>
            © {new Date().getFullYear()} Chatha Foundation Humanitarian Trust. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Ethical Aid Charter</span>
            <span>·</span>
            <span>Annual Audits</span>
            <span>·</span>
            <span>Privacy & Safeguarding</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
