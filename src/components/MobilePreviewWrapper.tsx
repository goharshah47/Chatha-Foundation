import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useViewMode, MobileWidth } from '../context/ViewModeContext';
import { useTheme } from '../context/ThemeContext';
import { ViewSwitcher } from './ViewSwitcher';
import { ThemeSelector } from './ThemeSelector';
import { Smartphone } from 'lucide-react';

interface MobilePreviewWrapperProps {
  children: React.ReactNode;
}

const DEVICE_WIDTHS: { width: MobileWidth; label: string; deviceHint: string }[] = [
  { width: 320, label: '320px', deviceHint: 'iPhone SE (compact)' },
  { width: 375, label: '375px', deviceHint: 'iPhone mini / X' },
  { width: 390, label: '390px', deviceHint: 'iPhone 13/14/15/16 (standard)' },
  { width: 414, label: '414px', deviceHint: 'iPhone Plus / Max' },
];

export const MobilePreviewWrapper: React.FC<MobilePreviewWrapperProps> = ({ children }) => {
  const { viewMode, mobileWidth, setMobileWidth } = useViewMode();
  const { theme } = useTheme();

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [isWindowSmall, setIsWindowSmall] = useState(false);

  // Detect if the parent browser window is already a mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsWindowSmall(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Synchronize CSS styles, Google Fonts, and theme variables into iframe
  const syncStylesAndTheme = () => {
    if (!iframeRef.current) return;
    const doc = iframeRef.current.contentDocument;
    if (!doc || !doc.head || !doc.body) return;

    // Clear and re-populate head
    doc.head.innerHTML = '';

    // Copy styles and links from main document
    const headElements = document.head.querySelectorAll(
      'style, link[rel="stylesheet"], link[rel="preconnect"], link[href*="fonts.googleapis.com"]'
    );
    headElements.forEach((el) => {
      doc.head.appendChild(el.cloneNode(true));
    });

    // Add baseline mobile viewport styling inside iframe
    const mobileStyle = doc.createElement('style');
    mobileStyle.id = 'chatha-mobile-preview-style';
    mobileStyle.textContent = `
      html {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        scroll-behavior: smooth;
        background-color: #FBFBF9;
        color: #1E2621;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
      }
      body {
        margin: 0;
        padding: 0;
        background-color: #FBFBF9;
        color: #1E2621;
        min-height: 100%;
        overflow-x: hidden;
      }
      /* Clean subtle mobile scrollbar */
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-track {
        background: #FBFBF9;
      }
      ::-webkit-scrollbar-thumb {
        background: #D8D4CA;
        border-radius: 9999px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #B5B0A2;
      }
    `;
    doc.head.appendChild(mobileStyle);

    // Apply current theme to iframe documentElement
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'emerald';
    doc.documentElement.setAttribute('data-theme', currentTheme);

    // Mirror all CSS variables from parent documentElement
    const computed = window.getComputedStyle(document.documentElement);
    const cssVars = [
      '--color-brand-primary',
      '--color-brand-primary-hover',
      '--color-brand-accent',
      '--color-brand-accent-hover',
      '--color-brand-light',
      '--color-brand-border',
      '--color-brand-shadow',
    ];
    cssVars.forEach((v) => {
      const val = computed.getPropertyValue(v);
      if (val) {
        doc.documentElement.style.setProperty(v, val);
      }
    });
  };

  // Initialize iframe contentDocument and portal mount target
  useEffect(() => {
    if (viewMode !== 'mobile' || isWindowSmall) {
      setMountNode(null);
      return;
    }

    const iframe = iframeRef.current;
    if (!iframe) return;

    const setupIframe = () => {
      const doc = iframe.contentDocument;
      if (doc && doc.body) {
        syncStylesAndTheme();
        setMountNode(doc.body);
      }
    };

    // If already ready
    if (iframe.contentDocument?.readyState === 'complete') {
      setupIframe();
    }

    iframe.addEventListener('load', setupIframe);

    // Observer for any dynamically injected Vite CSS
    const observer = new MutationObserver(() => {
      syncStylesAndTheme();
    });
    observer.observe(document.head, { childList: true, subtree: true });

    return () => {
      iframe.removeEventListener('load', setupIframe);
      observer.disconnect();
    };
  }, [viewMode, isWindowSmall, mobileWidth]);

  // Sync theme changes in real-time
  useEffect(() => {
    if (viewMode === 'mobile' && iframeRef.current?.contentDocument) {
      syncStylesAndTheme();
    }
  }, [theme, viewMode]);

  // If in standard desktop mode or on a tiny mobile screen, render normal children directly
  if (viewMode === 'desktop' || isWindowSmall) {
    return <>{children}</>;
  }

  return (
    <div
      id="mobile-preview-environment"
      className="min-h-screen bg-[#ECE7DC] text-[#1E2621] flex flex-col items-center select-none"
    >
      {/* 1. TOP MINIMAL TOOLBAR (Minimal, elegant, not a dev dashboard) */}
      <header
        id="mobile-preview-toolbar"
        className="w-full bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#DCD6C8] px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xs sticky top-0 z-50 transition-colors"
      >
        {/* Left: Indicator */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center">
            <Smartphone size={15} strokeWidth={2.2} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold tracking-tight text-[#16241B]">
                Mobile Preview
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#ECE7DC] text-[#55655B]">
                {mobileWidth} × 844
              </span>
            </div>
            <p className="text-[11px] text-[#718175] hidden sm:block">
              Dedicated mobile layout · touch targets · mobile navigation
            </p>
          </div>
        </div>

        {/* Center: Device Size Options (320px | 375px | 390px | 414px) */}
        <div className="flex items-center gap-1">
          <div
            role="group"
            aria-label="Mobile viewport width"
            className="inline-flex items-center p-0.5 rounded-lg bg-[#EFECE6] border border-[#E1DDD3]"
          >
            {DEVICE_WIDTHS.map((item) => {
              const isActive = mobileWidth === item.width;
              return (
                <button
                  key={item.width}
                  type="button"
                  title={`${item.label} (${item.deviceHint})`}
                  onClick={() => setMobileWidth(item.width)}
                  className={`px-2.5 py-1 rounded-md text-[11.5px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-primary text-white font-semibold shadow-2xs'
                      : 'text-[#4A5950] hover:text-[#18261E] hover:bg-[#E6E2D8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Theme Selector + View Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block">
            <ThemeSelector />
          </div>
          <ViewSwitcher size="sm" />
        </div>
      </header>

      {/* 2. REALISTIC MOBILE VIEWPORT CONTAINER */}
      <main className="flex-1 w-full flex items-center justify-center py-6 px-4 overflow-y-auto">
        <div
          id="mobile-viewport-frame"
          style={{ width: `${mobileWidth}px`, height: '844px' }}
          className="relative max-h-[calc(100vh-90px)] rounded-[28px] overflow-hidden bg-[#FBFBF9] border border-[#D5CFC2] shadow-[0_20px_50px_rgba(20,35,27,0.14),0_0_0_1px_rgba(255,255,255,0.6)_inset] transition-all duration-300 flex flex-col shrink-0"
        >
          {/* Subtle phone speaker notch indicator (ultra minimal, elegant) */}
          <div className="w-full h-3.5 bg-[#FDFCFB] flex items-center justify-center shrink-0 border-b border-[#F2EFE8]">
            <div className="w-10 h-1 rounded-full bg-[#DCD8CD]" />
          </div>

          {/* Iframe with React Portal inside */}
          <iframe
            ref={iframeRef}
            id="mobile-preview-iframe"
            title="Chatha Foundation Mobile Website Preview"
            className="w-full flex-1 border-0 bg-[#FBFBF9]"
          />

          {/* Render children into iframe body via createPortal */}
          {mountNode && createPortal(children, mountNode)}
        </div>
      </main>
    </div>
  );
};
