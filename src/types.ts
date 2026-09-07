export type CauseId = 'water' | 'food' | 'orphans' | 'family' | 'ramadan' | 'where-needed';

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
