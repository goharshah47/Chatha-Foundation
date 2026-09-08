import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeId, ThemeDefinition, CHARITY_THEMES } from '../data/themeData';

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (themeId: ThemeId) => void;
  currentThemeDef: ThemeDefinition;
  allThemes: ThemeDefinition[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'chatha_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeId;
      if (saved && CHARITY_THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return 'emerald';
  });

  const currentThemeDef = CHARITY_THEMES.find((t) => t.id === theme) || CHARITY_THEMES[0];

  const applyThemeToDOM = (themeId: ThemeId) => {
    const def = CHARITY_THEMES.find((t) => t.id === themeId) || CHARITY_THEMES[0];
    const root = document.documentElement;
    root.setAttribute('data-theme', themeId);
    root.style.setProperty('--color-brand-primary', def.primary);
    root.style.setProperty('--color-brand-primary-hover', def.primaryHover);
    root.style.setProperty('--color-brand-accent', def.accent);
    root.style.setProperty('--color-brand-accent-hover', def.accentHover);
    root.style.setProperty('--color-brand-light', def.lightBg);
    root.style.setProperty('--color-brand-border', def.border);
    root.style.setProperty('--color-brand-shadow', def.shadow);
  };

  useEffect(() => {
    applyThemeToDOM(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const setTheme = (themeId: ThemeId) => {
    setThemeState(themeId);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        currentThemeDef,
        allThemes: CHARITY_THEMES
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const defaultThemeDef = CHARITY_THEMES[0];

const defaultContextValue: ThemeContextType = {
  theme: 'emerald',
  setTheme: () => {},
  currentThemeDef: defaultThemeDef,
  allThemes: CHARITY_THEMES,
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context || defaultContextValue;
};
