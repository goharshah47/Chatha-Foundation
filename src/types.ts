export type CauseId = 'water' | 'food' | 'orphans' | 'family' | 'ramadan' | 'where-needed' | 'qurban' | 'donor-projects';

export type CauseSlug =
  | 'ramadan'
  | 'water-aid'
  | 'food-aid'
  | 'orphan-aid'
  | 'qurban'
  | 'family-support'
  | 'donor-projects';

export interface CauseOpportunity {
  id: string;
  causeSlug: CauseSlug;
  title: string;
  subtitle?: string;
  shortDesc: string;
  need: string;
  impact: string;
  location: string;
  community: string;
  status: string;
  impactMetric: string;
  suggestedAmount?: number;
  imageUrl: string;
  fallbackUrls?: string[];
  imageAlt: string;
  isProject?: boolean;
  progressPercent?: number;
  peopleImpacted?: string;
}

export interface CauseEditorialSection {
  title: string;
  text: string;
  stat?: string;
  points?: string[];
  imageUrl: string;
  fallbackUrls?: string[];
  imageAlt: string;
}

export interface CausePageData {
  slug: CauseSlug;
  causeId: CauseId;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  heroImage: string;
  heroFallbackUrls?: string[];
  heroAlt: string;
  impactStatement: string;
  whyMatters: CauseEditorialSection;
  howWeHelp: CauseEditorialSection;
  yourSupport: {
    title: string;
    text: string;
    impactTiers: { amount: string; effect: string }[];
  };
  opportunitiesTitle: string;
  opportunitiesSubtitle: string;
  opportunities: CauseOpportunity[];
  finalCtaHeadline: string;
  finalCtaSubtext: string;
}

export interface CampaignSlide {
  id: string;
  number: string;
  causeId: CauseId;
  label: string;
  headline: string;
  supportingText: string;
  impactMessage: string;
  imageUrl: string;
  fallbackUrls?: string[];
  imageAlt: string;
  location: string;
}

export interface CauseItem {
  id: CauseId;
  name: string;
  shortDesc: string;
  imageUrl: string;
  fallbackUrls?: string[];
  imageAlt: string;
  exampleMetric: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  subtext: string;
}

export type DonationFrequency = 'one-time' | 'monthly';

export interface DonationSelection {
  frequency: DonationFrequency;
  amount: number;
  causeId: CauseId;
}
