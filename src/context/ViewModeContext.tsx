import React, { createContext, useContext, useState, useEffect } from 'react';

export type ViewMode = 'desktop' | 'mobile';
export type MobileWidth = 320 | 375 | 390 | 414;

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  mobileWidth: MobileWidth;
  setMobileWidth: (width: MobileWidth) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

const VIEW_MODE_STORAGE_KEY = 'chatha_view_mode';
const MOBILE_WIDTH_STORAGE_KEY = 'chatha_mobile_width';

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(VIEW_MODE_STORAGE_KEY) as ViewMode;
      if (saved === 'desktop' || saved === 'mobile') {
        return saved;
      }
    }
    return 'desktop';
  });

  const [mobileWidth, setMobileWidthState] = useState<MobileWidth>(() => {
    if (typeof window !== 'undefined') {
      const saved = Number(localStorage.getItem(MOBILE_WIDTH_STORAGE_KEY)) as MobileWidth;
      if ([320, 375, 390, 414].includes(saved)) {
        return saved;
      }
    }
    return 390;
  });

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    try {
      localStorage.setItem(VIEW_MODE_STORAGE_KEY, mode);
    } catch {
      // ignore storage error
    }
  };

  const setMobileWidth = (width: MobileWidth) => {
    setMobileWidthState(width);
    try {
      localStorage.setItem(MOBILE_WIDTH_STORAGE_KEY, width.toString());
    } catch {
      // ignore storage error
    }
  };

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        setViewMode,
        mobileWidth,
        setMobileWidth,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = (): ViewModeContextType => {
  const context = useContext(ViewModeContext);
  if (!context) {
    return {
      viewMode: 'desktop',
      setViewMode: () => {},
      mobileWidth: 390,
      setMobileWidth: () => {},
    };
  }
  return context;
};
