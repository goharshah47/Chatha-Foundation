import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { useViewMode } from '../context/ViewModeContext';

interface ViewSwitcherProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  className = '',
  size = 'md',
}) => {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div
      role="radiogroup"
      aria-label="Display view mode"
      id="view-switcher-control"
      className={`inline-flex items-center p-0.5 rounded-lg bg-[#EFECE6] border border-[#E1DDD3] shadow-2xs ${className}`}
    >
      {/* Desktop Option */}
      <button
        type="button"
        role="radio"
        id="view-switcher-desktop"
        aria-checked={viewMode === 'desktop'}
        aria-label="Switch to desktop view"
        title="Desktop full-width view"
        onClick={() => setViewMode('desktop')}
        className={`flex items-center gap-1.5 rounded-md transition-all duration-200 cursor-pointer ${
          size === 'sm' ? 'px-2 py-1 text-xs' : 'px-2.5 py-1.5 text-[12.5px]'
        } ${
          viewMode === 'desktop'
            ? 'bg-brand-primary text-white font-medium shadow-2xs'
            : 'text-[#4A5950] hover:text-[#18261E] hover:bg-[#E6E2D8]'
        }`}
      >
        <Monitor size={size === 'sm' ? 12 : 14} strokeWidth={2.2} className="shrink-0" />
        <span className="tracking-tight">Desktop</span>
      </button>

      {/* Mobile Option */}
      <button
        type="button"
        role="radio"
        id="view-switcher-mobile"
        aria-checked={viewMode === 'mobile'}
        aria-label="Switch to mobile preview mode"
        title="Mobile preview mode"
        onClick={() => setViewMode('mobile')}
        className={`flex items-center gap-1.5 rounded-md transition-all duration-200 cursor-pointer ${
          size === 'sm' ? 'px-2 py-1 text-xs' : 'px-2.5 py-1.5 text-[12.5px]'
        } ${
          viewMode === 'mobile'
            ? 'bg-brand-primary text-white font-medium shadow-2xs'
            : 'text-[#4A5950] hover:text-[#18261E] hover:bg-[#E6E2D8]'
        }`}
      >
        <Smartphone size={size === 'sm' ? 12 : 14} strokeWidth={2.2} className="shrink-0" />
        <span className="tracking-tight">Mobile</span>
      </button>
    </div>
  );
};
