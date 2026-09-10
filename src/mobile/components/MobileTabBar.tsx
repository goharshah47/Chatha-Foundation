import React from 'react';
import { Home, HeartHandshake, Sparkles, BookOpen, User } from 'lucide-react';
import { MobileTab } from '../types';
import { useMobileApp } from '../context/MobileAppContext';

interface TabItem {
  key: MobileTab;
  label: string;
  icon: React.FC<{ size?: number; className?: string; strokeWidth?: number }>;
}

const TABS: TabItem[] = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'causes', label: 'Causes', icon: HeartHandshake },
  { key: 'impact', label: 'Impact', icon: Sparkles },
  { key: 'stories', label: 'Stories', icon: BookOpen },
  { key: 'account', label: 'Account', icon: User },
];

export const MobileTabBar: React.FC = () => {
  const { activeTab, setActiveTab, currentScreen } = useMobileApp();

  // Hide tab bar only during initial full-screen onboarding experience
  if (currentScreen.type === 'onboarding') {
    return null;
  }

  return (
    <nav
      id="mobile-bottom-tab-bar"
      role="tablist"
      aria-label="Mobile main navigation"
      className="fixed bottom-0 left-0 right-0 z-40 w-full bg-[#FDFCFB]/96 backdrop-blur-lg border-t border-[#E8E3D8] shadow-[0_-4px_24px_rgba(20,35,27,0.08)] select-none transition-colors"
      style={{
        paddingBottom: 'max(8px, env(safe-area-inset-bottom, 8px))',
      }}
    >
      <div className="flex items-center justify-around max-w-md mx-auto px-1 pt-1.5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          const Icon = tab.icon;

          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={tab.label}
              id={`tab-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 min-h-[48px] py-0.5 px-1 flex flex-col items-center justify-center gap-0.5 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                isActive
                  ? 'text-brand-primary font-bold'
                  : 'text-[#64756A] hover:text-[#19271F]'
              }`}
            >
              {/* Active top indicator pill */}
              <div
                className={`w-5 h-0.5 rounded-full transition-all duration-200 mb-0.5 ${
                  isActive ? 'bg-brand-primary opacity-100 scale-100' : 'bg-transparent opacity-0 scale-50'
                }`}
              />

              {/* Icon Container with active highlight */}
              <div
                className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-brand-light text-brand-primary' : 'text-[#64756A]'
                }`}
              >
                <Icon size={19} strokeWidth={isActive ? 2.4 : 1.8} />
              </div>

              {/* Label */}
              <span
                className={`text-[10.5px] leading-tight tracking-tight transition-colors ${
                  isActive ? 'text-brand-primary font-bold' : 'text-[#64756A] font-medium'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
