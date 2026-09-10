import { CauseId, CauseSlug } from '../types';

export type MobileTab = 'home' | 'causes' | 'impact' | 'stories' | 'account';

export type MobileScreenType =
  | 'tab_root'
  | 'cause_detail'
  | 'project_detail'
  | 'story_detail'
  | 'donation_history'
  | 'donation_detail'
  | 'notifications'
  | 'settings'
  | 'auth'
  | 'onboarding';

export interface MobileScreenState {
  type: MobileScreenType;
  params?: {
    causeSlug?: CauseSlug;
    causeId?: CauseId;
    projectId?: string;
    storyId?: string;
    donationId?: string;
    authMode?: 'login' | 'signup' | 'forgot';
    returnScreen?: MobileScreenType;
  };
}

export interface MobileStory {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  location: string;
  date: string;
  readTime: string;
  causeSlug: CauseSlug;
  causeName: string;
  imageUrl: string;
  fallbackUrls?: string[];
  summary: string;
  paragraphs: string[];
  quote: string;
  quoteAuthor: string;
  impactMetrics: { label: string; value: string }[];
}

export interface MobileProject {
  id: string;
  title: string;
  location: string;
  causeSlug: CauseSlug;
  causeName: string;
  targetAmount: number;
  raisedAmount: number;
  beneficiariesCount: number;
  status: 'In Progress' | 'Funded' | 'Completed';
  startDate: string;
  completionDate?: string;
  imageUrl: string;
  fallbackUrls?: string[];
  description: string;
  milestones: { title: string; date: string; completed: boolean }[];
  fieldOfficerNote: string;
  fieldOfficerName: string;
  updates: { date: string; title: string; text: string }[];
}

export interface MobileDonationRecord {
  id: string;
  reference: string;
  amount: number;
  currency: string;
  causeSlug: CauseSlug;
  causeName: string;
  type: 'one-time' | 'monthly';
  date: string;
  status: 'Completed' | 'Processing';
  paymentMethod: string;
  impactNote: string;
  taxDeductible: boolean;
}

export interface MobileNotification {
  id: string;
  title: string;
  message: string;
  date: string;
  type: 'donation' | 'project' | 'impact' | 'general';
  read: boolean;
  actionUrl?: string;
}

export interface MobileUser {
  name: string;
  email: string;
  phone?: string;
  isGuest: boolean;
  avatarUrl?: string;
  memberSince?: string;
}
