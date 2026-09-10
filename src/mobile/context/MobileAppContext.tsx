import React, { createContext, useContext, useState } from 'react';
import { CauseSlug } from '../../types';
import {
  MobileTab,
  MobileScreenState,
  MobileUser,
  MobileDonationRecord,
  MobileNotification,
} from '../types';
import { INITIAL_NOTIFICATIONS, INITIAL_DONATION_HISTORY } from '../data/mobileMockData';

interface MobileAppContextType {
  activeTab: MobileTab;
  setActiveTab: (tab: MobileTab) => void;
  currentScreen: MobileScreenState;
  screenStack: MobileScreenState[];
  pushScreen: (screen: MobileScreenState) => void;
  popScreen: () => void;
  resetToTab: (tab: MobileTab) => void;

  user: MobileUser;
  setUser: React.Dispatch<React.SetStateAction<MobileUser>>;
  loginUser: (name: string, email: string) => void;
  logoutUser: () => void;

  donationModalOpen: boolean;
  donationDraft: {
    causeSlug: CauseSlug;
    amount: number;
    type: 'one-time' | 'monthly';
    currency: string;
  };
  openDonationFlow: (
    causeSlug?: CauseSlug,
    suggestedAmount?: number,
    donationType?: 'one-time' | 'monthly'
  ) => void;
  closeDonationFlow: () => void;
  setDonationDraft: React.Dispatch<
    React.SetStateAction<{
      causeSlug: CauseSlug;
      amount: number;
      type: 'one-time' | 'monthly';
      currency: string;
    }>
  >;
  donations: MobileDonationRecord[];
  addDonation: (
    donation: Omit<MobileDonationRecord, 'id' | 'reference' | 'date' | 'status'>
  ) => MobileDonationRecord;

  notifications: MobileNotification[];
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  unreadNotificationsCount: number;

  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  replayOnboarding: () => void;

  toastMessage: string | null;
  showToast: (msg: string) => void;

  currency: 'Rs.' | '£';
  setCurrency: (c: 'Rs.' | '£') => void;
}

const MobileAppContext = createContext<MobileAppContextType | undefined>(undefined);

export const MobileAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTabState] = useState<MobileTab>('home');
  const [screenStack, setScreenStack] = useState<MobileScreenState[]>([
    { type: 'tab_root' },
  ]);

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('chatha_mobile_onboarded') === 'true';
    }
    return false;
  });

  const [currency, setCurrency] = useState<'Rs.' | '£'>('Rs.');

  const [user, setUser] = useState<MobileUser>({
    name: 'Friend of Chatha',
    email: 'guest@chatha.org',
    isGuest: true,
    memberSince: 'March 2026',
  });

  const [donations, setDonations] = useState<MobileDonationRecord[]>(INITIAL_DONATION_HISTORY);
  const [notifications, setNotifications] = useState<MobileNotification[]>(INITIAL_NOTIFICATIONS);

  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationDraft, setDonationDraft] = useState<{
    causeSlug: CauseSlug;
    amount: number;
    type: 'one-time' | 'monthly';
    currency: string;
  }>({
    causeSlug: 'water',
    amount: 2500,
    type: 'one-time',
    currency: 'Rs.',
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  const currentScreen = screenStack[screenStack.length - 1] || { type: 'tab_root' };

  const setActiveTab = (tab: MobileTab) => {
    setActiveTabState(tab);
    setScreenStack([{ type: 'tab_root' }]);
  };

  const pushScreen = (screen: MobileScreenState) => {
    setScreenStack((prev) => [...prev, screen]);
  };

  const popScreen = () => {
    setScreenStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const resetToTab = (tab: MobileTab) => {
    setActiveTabState(tab);
    setScreenStack([{ type: 'tab_root' }]);
  };

  const loginUser = (name: string, email: string) => {
    setUser({
      name,
      email,
      isGuest: false,
      memberSince: 'March 2026',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    });
    showToast(`Welcome back, ${name}!`);
  };

  const logoutUser = () => {
    setUser({
      name: 'Friend of Chatha',
      email: 'guest@chatha.org',
      isGuest: true,
      memberSince: 'March 2026',
    });
    showToast('Signed out of account');
  };

  const openDonationFlow = (
    causeSlug?: CauseSlug,
    suggestedAmount?: number,
    donationType?: 'one-time' | 'monthly'
  ) => {
    setDonationDraft({
      causeSlug: causeSlug || 'water',
      amount: suggestedAmount || (currency === 'Rs.' ? 2500 : 50),
      type: donationType || 'one-time',
      currency: currency,
    });
    setDonationModalOpen(true);
  };

  const closeDonationFlow = () => {
    setDonationModalOpen(false);
  };

  const addDonation = (
    donation: Omit<MobileDonationRecord, 'id' | 'reference' | 'date' | 'status'>
  ) => {
    const randomRef = 'CF-' + Math.floor(10000 + Math.random() * 90000);
    const newRecord: MobileDonationRecord = {
      ...donation,
      id: 'don-' + Date.now(),
      reference: randomRef,
      date: 'Today, Just now',
      status: 'Completed',
    };
    setDonations((prev) => [newRecord, ...prev]);

    // Add confirmation notification
    const newNotification: MobileNotification = {
      id: 'notif-' + Date.now(),
      title: 'Donation Received with Gratitude',
      message: `Your ${donation.currency} ${donation.amount.toLocaleString()} donation for ${donation.causeName} is confirmed. Ref: ${randomRef}.`,
      date: 'Just now',
      type: 'donation',
      read: false,
    };
    setNotifications((prev) => [newNotification, ...prev]);

    return newRecord;
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('All notifications marked as read');
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    try {
      localStorage.setItem('chatha_mobile_onboarded', 'true');
    } catch {
      // ignore
    }
  };

  const replayOnboarding = () => {
    pushScreen({ type: 'onboarding' });
  };

  return (
    <MobileAppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        currentScreen,
        screenStack,
        pushScreen,
        popScreen,
        resetToTab,
        user,
        setUser,
        loginUser,
        logoutUser,
        donationModalOpen,
        donationDraft,
        openDonationFlow,
        closeDonationFlow,
        setDonationDraft,
        donations,
        addDonation,
        notifications,
        markNotificationRead,
        markAllNotificationsRead,
        unreadNotificationsCount,
        hasCompletedOnboarding,
        completeOnboarding,
        replayOnboarding,
        toastMessage,
        showToast,
        currency,
        setCurrency,
      }}
    >
      {children}
    </MobileAppContext.Provider>
  );
};

export const useMobileApp = (): MobileAppContextType => {
  const context = useContext(MobileAppContext);
  if (!context) {
    throw new Error('useMobileApp must be used within a MobileAppProvider');
  }
  return context;
};
