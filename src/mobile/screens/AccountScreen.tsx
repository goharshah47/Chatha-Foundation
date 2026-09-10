import React, { useState } from 'react';
import { User, Heart, Bell, Settings, HelpCircle, LogIn, LogOut, ChevronRight, Sparkles, Shield, Receipt, BookOpen } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { DonationDetailModal } from './DonationDetailModal';
import { MobileDonationRecord } from '../types';

export const AccountScreen: React.FC = () => {
  const { user, logoutUser, pushScreen, donations, unreadNotificationsCount, replayOnboarding, currency } = useMobileApp();
  const [selectedDonation, setSelectedDonation] = useState<MobileDonationRecord | null>(null);

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div id="mobile-account-screen" className="pb-8 space-y-4">
      {/* 1. PROFILE HEADER CARD */}
      <div className="px-4 pt-3">
        <div className="rounded-[22px] bg-[#FDFCFB] border border-[#E6E1D6] p-4 shadow-2xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary/40 bg-brand-light flex items-center justify-center shrink-0">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <User size={26} className="text-brand-primary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-bold text-[#16251C] truncate">{user.name}</h2>
                {user.isGuest ? (
                  <span className="text-[10px] font-semibold bg-[#ECE7DC] text-[#55665C] px-1.5 py-0.5 rounded">
                    Guest Donor
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold bg-brand-light text-brand-primary px-1.5 py-0.5 rounded">
                    Verified Supporter
                  </span>
                )}
              </div>
              <p className="text-xs text-[#6B7C71] truncate">{user.email}</p>
              <span className="text-[10.5px] text-[#8C9B91] mt-0.5 block">
                Partnering since {user.memberSince}
              </span>
            </div>
          </div>

          {/* Donor Stats Badge Row */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#F2EFE8] text-center">
            <div className="p-2 rounded-xl bg-[#F8F6F1]">
              <span className="text-xs font-extrabold text-brand-primary block">
                {currency} {totalDonated.toLocaleString()}
              </span>
              <span className="text-[9.5px] text-[#637468]">Total Given</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F8F6F1]">
              <span className="text-xs font-extrabold text-[#18261E] block">
                {donations.length}
              </span>
              <span className="text-[9.5px] text-[#637468]">Gifts Made</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F8F6F1]">
              <span className="text-xs font-extrabold text-brand-primary block">100%</span>
              <span className="text-[9.5px] text-[#637468]">Audited</span>
            </div>
          </div>

          {/* Guest CTA to Sign In or Sign Up */}
          {user.isGuest && (
            <div className="p-2.5 rounded-xl bg-brand-light/60 border border-brand-border flex items-center justify-between">
              <div className="text-[11px] text-[#1D3226]">
                <strong className="block">Save your donor history</strong>
                <span>Create a free account to track your impact.</span>
              </div>
              <button
                type="button"
                onClick={() =>
                  pushScreen({
                    type: 'auth',
                    params: { authMode: 'signup' },
                  })
                }
                className="px-3 py-1.5 rounded-lg bg-brand-primary text-white text-xs font-bold shrink-0 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. MENU LIST ITEMS */}
      <div className="px-4 space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#68796E] px-1 block">
          Activity & Records
        </span>

        <div className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] overflow-hidden divide-y divide-[#F2EFE8]">
          {/* Donation History */}
          <button
            type="button"
            onClick={() => pushScreen({ type: 'donation_history' })}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#F9F7F2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center">
                <Receipt size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">Donation History & Receipts</h4>
                <p className="text-[10.5px] text-[#637468]">
                  {donations.length} recorded contributions
                </p>
              </div>
            </div>
            <ChevronRight size={16} className="text-[#99A89E]" />
          </button>

          {/* Notifications */}
          <button
            type="button"
            onClick={() => pushScreen({ type: 'notifications' })}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#F9F7F2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EFECE6] text-[#33443A] flex items-center justify-center relative">
                <Bell size={16} />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-primary" />
                )}
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">Notifications & Updates</h4>
                <p className="text-[10.5px] text-[#637468]">
                  Field photos, receipts, project alerts
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {unreadNotificationsCount > 0 && (
                <span className="text-[10px] font-bold bg-brand-primary text-white px-1.5 py-0.5 rounded-full">
                  {unreadNotificationsCount} new
                </span>
              )}
              <ChevronRight size={16} className="text-[#99A89E]" />
            </div>
          </button>
        </div>
      </div>

      {/* 3. PREFERENCES & SETTINGS */}
      <div className="px-4 space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#68796E] px-1 block">
          Preferences & About
        </span>

        <div className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] overflow-hidden divide-y divide-[#F2EFE8]">
          {/* Settings */}
          <button
            type="button"
            onClick={() => pushScreen({ type: 'settings' })}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#F9F7F2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EFECE6] text-[#33443A] flex items-center justify-center">
                <Settings size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">App Settings & Themes</h4>
                <p className="text-[10.5px] text-[#637468]">
                  Colors, notifications, account details
                </p>
              </div>
            </div>
            <ChevronRight size={16} className="text-[#99A89E]" />
          </button>

          {/* Replay Onboarding */}
          <button
            type="button"
            onClick={replayOnboarding}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#F9F7F2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EFECE6] text-[#33443A] flex items-center justify-center">
                <BookOpen size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">App Tour & Mission</h4>
                <p className="text-[10.5px] text-[#637468]">View the 3-step onboarding introduction</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-[#99A89E]" />
          </button>
        </div>
      </div>

      {/* 4. AUTHENTICATION ACTION */}
      <div className="px-4 pt-2">
        {user.isGuest ? (
          <button
            type="button"
            onClick={() =>
              pushScreen({
                type: 'auth',
                params: { authMode: 'login' },
              })
            }
            className="w-full min-h-[44px] rounded-xl bg-[#F0ECE3] hover:bg-[#E8E3D8] text-[#18261E] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#DDD7CA]"
          >
            <LogIn size={15} />
            <span>Sign In to Existing Account</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={logoutUser}
            className="w-full min-h-[44px] rounded-xl bg-[#FBF3F3] hover:bg-[#F5E6E6] text-[#A62626] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#EACDCD]"
          >
            <LogOut size={15} />
            <span>Sign Out ({user.name})</span>
          </button>
        )}
      </div>

      {/* Detail Modal if open */}
      {selectedDonation && (
        <DonationDetailModal
          donation={selectedDonation}
          onClose={() => setSelectedDonation(null)}
        />
      )}
    </div>
  );
};
