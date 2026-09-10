import React from 'react';
import { MobileAppProvider, useMobileApp } from './context/MobileAppContext';
import { MobileAppHeader } from './components/MobileAppHeader';
import { MobileTabBar } from './components/MobileTabBar';
import { MobileToast } from './components/MobileToast';
import { HomeScreen } from './screens/HomeScreen';
import { CausesScreen } from './screens/CausesScreen';
import { CauseDetailScreen } from './screens/CauseDetailScreen';
import { ImpactScreen } from './screens/ImpactScreen';
import { ProjectDetailScreen } from './screens/ProjectDetailScreen';
import { StoriesScreen } from './screens/StoriesScreen';
import { StoryDetailScreen } from './screens/StoryDetailScreen';
import { AccountScreen } from './screens/AccountScreen';
import { DonationHistoryScreen } from './screens/DonationHistoryScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { AuthScreen } from './screens/AuthScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { MobileDonationFlow } from './screens/MobileDonationFlow';

const MobileAppContent: React.FC = () => {
  const { currentScreen, activeTab, hasCompletedOnboarding } = useMobileApp();

  // 1. Initial Onboarding Flow (if first time launching)
  if (!hasCompletedOnboarding || currentScreen.type === 'onboarding') {
    return <OnboardingScreen />;
  }

  // Persistent Mobile App Layout with sticky/fixed bottom navigation
  return (
    <div
      id="chatha-mobile-app-root"
      className="min-h-screen relative flex flex-col bg-[#FBFBF9] text-[#1E2621]"
    >
      {/* Header (shown on primary tab root) */}
      {currentScreen.type === 'tab_root' && <MobileAppHeader />}

      {/* Main scrollable view with bottom clearance so content is never covered by the fixed navigation bar */}
      <main className="flex-1 pb-28">
        {currentScreen.type === 'tab_root' && (
          <>
            {activeTab === 'home' && <HomeScreen />}
            {activeTab === 'causes' && <CausesScreen />}
            {activeTab === 'impact' && <ImpactScreen />}
            {activeTab === 'stories' && <StoriesScreen />}
            {activeTab === 'account' && <AccountScreen />}
          </>
        )}

        {/* Deep Navigated Screens */}
        {currentScreen.type === 'cause_detail' && (
          <CauseDetailScreen causeSlug={currentScreen.params?.causeSlug} />
        )}
        {currentScreen.type === 'project_detail' && (
          <ProjectDetailScreen projectId={currentScreen.params?.projectId} />
        )}
        {currentScreen.type === 'story_detail' && (
          <StoryDetailScreen storyId={currentScreen.params?.storyId} />
        )}
        {currentScreen.type === 'donation_history' && <DonationHistoryScreen />}
        {currentScreen.type === 'notifications' && <NotificationsScreen />}
        {currentScreen.type === 'settings' && <SettingsScreen />}
        {currentScreen.type === 'auth' && (
          <AuthScreen initialMode={currentScreen.params?.authMode} />
        )}
      </main>

      {/* Always Fixed Bottom Navigation Bar */}
      <MobileTabBar />

      {/* Donation Drawer & Toasts */}
      <MobileDonationFlow />
      <MobileToast />
    </div>
  );
};

export const MobileApp: React.FC = () => {
  return (
    <MobileAppProvider>
      <MobileAppContent />
    </MobileAppProvider>
  );
};
