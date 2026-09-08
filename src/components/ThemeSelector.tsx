import React, { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeId } from '../data/themeData';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme, currentThemeDef, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectTheme = (themeId: ThemeId) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left" id="theme-selector-container">
      {/* Header Button: Subtle, minimal, premium */}
      <button
        type="button"
        id="theme-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Switch color theme"
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-[#3B4A41] hover:text-[#14231B] hover:bg-[#F3EFE8] transition-colors cursor-pointer focus:outline-none"
      >
        {/* Swatch indicator */}
        <span
          className="w-3 h-3 rounded-full border border-black/15 shadow-2xs transition-colors duration-300"
          style={{ backgroundColor: currentThemeDef.primary }}
          aria-hidden="true"
        />
        <span className="hidden sm:inline text-[13px] font-medium tracking-tight">Theme</span>
        <span className="text-[10px] text-[#7A8780] hidden md:inline">▾</span>
      </button>

      {/* Floating Popover */}
      {isOpen && (
        <div
          id="theme-popover"
          role="dialog"
          aria-label="Choose color theme"
          className="absolute right-0 mt-2 w-64 sm:w-72 rounded-2xl bg-[#FDFCFB] border border-[#EAE5DC] shadow-[0_12px_36px_rgba(20,35,27,0.12)] p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 pt-2 pb-2 border-b border-[#F0EBE1] flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#69786E]">
              Color Identity
            </span>
            <span className="text-[11px] text-[#8C988F]">Live preview</span>
          </div>

          <div className="py-1.5 space-y-1">
            {allThemes.map((item) => {
              const isSelected = item.id === theme;
              return (
                <button
                  key={item.id}
                  type="button"
                  id={`theme-option-${item.id}`}
                  onClick={() => handleSelectTheme(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#F2EFE8] text-[#14231B]'
                      : 'hover:bg-[#F7F5EF] text-[#344238]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Double swatch preview: primary + secondary accent */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <span
                        className="w-5 h-5 rounded-full shadow-2xs border border-black/10 transition-transform"
                        style={{ backgroundColor: item.primary }}
                      />
                      <span
                        className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-white"
                        style={{ backgroundColor: item.accent }}
                      />
                    </div>
                    <div className="truncate">
                      <div className="text-[13px] font-medium tracking-tight flex items-center gap-1.5">
                        <span>{item.name}</span>
                        {item.id === 'emerald' && (
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-[#7E8D82] bg-black/5 px-1.5 py-0.5 rounded-sm">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#718076] font-normal truncate">
                        {item.tagline}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check
                      size={15}
                      className="shrink-0 text-[#14231B] ml-2"
                      strokeWidth={2.5}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 pb-1 px-3 border-t border-[#F0EBE1] text-[10.5px] text-[#7E8C82] flex items-center justify-between">
            <span>Instant update · Saved automatically</span>
          </div>
        </div>
      )}
    </div>
  );
};
