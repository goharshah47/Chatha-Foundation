export type ThemeId = 'emerald' | 'forest' | 'terracotta' | 'ocean' | 'earth';

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  tagline: string;
  swatch: string;
  secondarySwatch: string;
  primary: string;
  primaryHover: string;
  accent: string;
  accentHover: string;
  lightBg: string;
  border: string;
  shadow: string;
}

export const CHARITY_THEMES: ThemeDefinition[] = [
  {
    id: 'emerald',
    name: 'Emerald',
    tagline: 'Trustworthy · Natural · Humanitarian',
    swatch: '#0F3D2E',
    secondarySwatch: '#34D399',
    primary: '#0F3D2E',
    primaryHover: '#0A2C21',
    accent: '#34D399',
    accentHover: '#4ADE80',
    lightBg: 'rgba(15, 61, 46, 0.08)',
    border: 'rgba(15, 61, 46, 0.2)',
    shadow: 'rgba(15, 61, 46, 0.35)'
  },
  {
    id: 'forest',
    name: 'Forest',
    tagline: 'Grounded · Sustainable · Calm',
    swatch: '#1B4332',
    secondarySwatch: '#52B788',
    primary: '#1B4332',
    primaryHover: '#122F23',
    accent: '#52B788',
    accentHover: '#74C69D',
    lightBg: 'rgba(27, 67, 50, 0.08)',
    border: 'rgba(27, 67, 50, 0.2)',
    shadow: 'rgba(27, 67, 50, 0.35)'
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    tagline: 'Human · Warm · Compassionate',
    swatch: '#A2492D',
    secondarySwatch: '#E07A5F',
    primary: '#A2492D',
    primaryHover: '#83351E',
    accent: '#E07A5F',
    accentHover: '#E88C74',
    lightBg: 'rgba(162, 73, 45, 0.08)',
    border: 'rgba(162, 73, 45, 0.2)',
    shadow: 'rgba(162, 73, 45, 0.35)'
  },
  {
    id: 'ocean',
    name: 'Ocean',
    tagline: 'Clean · Reliable · Hopeful',
    swatch: '#0E4B68',
    secondarySwatch: '#38A3A5',
    primary: '#0E4B68',
    primaryHover: '#09344A',
    accent: '#38A3A5',
    accentHover: '#57CC99',
    lightBg: 'rgba(14, 75, 104, 0.08)',
    border: 'rgba(14, 75, 104, 0.2)',
    shadow: 'rgba(14, 75, 104, 0.35)'
  },
  {
    id: 'earth',
    name: 'Earth',
    tagline: 'Authentic · Community · Warm',
    swatch: '#414833',
    secondarySwatch: '#8F9779',
    primary: '#414833',
    primaryHover: '#2D3323',
    accent: '#8F9779',
    accentHover: '#A3B18A',
    lightBg: 'rgba(65, 72, 51, 0.08)',
    border: 'rgba(65, 72, 51, 0.2)',
    shadow: 'rgba(65, 72, 51, 0.35)'
  }
];
