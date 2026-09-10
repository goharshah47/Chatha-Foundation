import React, { useState } from 'react';
import { ArrowLeft, Check, Moon, Bell, Shield, Lock, Palette, User, FileText, CheckCircle2 } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { useTheme } from '../../context/ThemeContext';
import { ThemeId, CHARITY_THEMES } from '../../data/themeData';

export const SettingsScreen: React.FC = () => {
  const { popScreen, showToast, user, setUser } = useMobileApp();
  const { theme, setTheme } = useTheme();

  // Notification Preferences State
  const [donationAlerts, setDonationAlerts] = useState(true);
  const [impactAlerts, setImpactAlerts] = useState(true);
  const [monthlyReceipts, setMonthlyReceipts] = useState(true);

  // Edit Profile State
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, name, email }));
    setIsEditingProfile(false);
    showToast('Profile updated successfully');
  };

  const handleThemeSelect = (selectedTheme: ThemeId) => {
    setTheme(selectedTheme);
    showToast(`Theme updated to ${CHARITY_THEMES.find((t) => t.id === selectedTheme)?.name}`);
  };

  return (
    <div id="mobile-settings-screen" className="pb-8 space-y-5 bg-[#FBFBF9] min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#FDFCFB]/96 backdrop-blur-md border-b border-[#ECE7DC] px-3 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={popScreen}
          className="flex items-center gap-1 text-[#2A3830] font-semibold text-xs py-1 px-2 rounded-lg hover:bg-[#F0ECE3] cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        <span className="text-xs font-bold text-[#16241B]">Settings</span>
        <div className="w-8" />
      </div>

      <div className="px-4 space-y-4">
        {/* 1. APPEARANCE & THEME SYSTEM (Emerald, Forest, Terracotta, Ocean, Earth) */}
        <section className="space-y-2">
          <div className="flex items-center gap-1.5 px-1">
            <Palette size={15} className="text-brand-primary" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18261E]">
              Brand Palette / Theme
            </h3>
          </div>

          <div className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] p-3.5 space-y-2.5 shadow-2xs">
            <p className="text-xs text-[#55665C]">
              Select your preferred Chatha Foundation signature visual theme:
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {CHARITY_THEMES.map((t) => {
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleThemeSelect(t.id)}
                    className={`p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand-light/70 border-brand-primary font-bold shadow-2xs'
                        : 'bg-[#FAF8F3] border-[#E6E0D5] hover:border-brand-primary/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full shadow-xs border border-white/60 flex items-center justify-center text-white"
                        style={{ backgroundColor: t.primary }}
                      >
                        {isActive && <Check size={12} strokeWidth={3} />}
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-[#18261E] block leading-tight">{t.name}</span>
                        <span className="text-[10px] text-[#637468] block">{t.tagline}</span>
                      </div>
                    </div>
                    {isActive && (
                      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. ACCOUNT INFORMATION */}
        <section className="space-y-2">
          <div className="flex items-center gap-1.5 px-1">
            <User size={15} className="text-brand-primary" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18261E]">
              Donor Profile
            </h3>
          </div>

          <div className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] p-3.5 space-y-3 shadow-2xs">
            {isEditingProfile ? (
              <form onSubmit={handleSaveProfile} className="space-y-3">
                <div>
                  <label className="text-[11px] font-semibold text-[#55665C] block mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-[#55665C] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary"
                    required
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="submit"
                    className="flex-1 min-h-[38px] rounded-xl bg-brand-primary text-white text-xs font-semibold cursor-pointer"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="min-h-[38px] px-3.5 rounded-xl bg-[#EFECE6] text-[#4A5A50] text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#18261E]">{user.name}</h4>
                  <p className="text-xs text-[#637468]">{user.email}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(true)}
                  className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-xs font-semibold text-[#25352C] hover:bg-[#E5E1D7] cursor-pointer"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 3. NOTIFICATION PREFERENCES */}
        <section className="space-y-2">
          <div className="flex items-center gap-1.5 px-1">
            <Bell size={15} className="text-brand-primary" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18261E]">
              Notifications
            </h3>
          </div>

          <div className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] p-3.5 divide-y divide-[#F2EFE8] shadow-2xs">
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">Donation Receipts</h4>
                <p className="text-[10.5px] text-[#637468]">Instant alerts with tax receipt download</p>
              </div>
              <input
                type="checkbox"
                checked={donationAlerts}
                onChange={(e) => setDonationAlerts(e.target.checked)}
                className="w-4 h-4 accent-brand-primary rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">Impact & Field Dispatches</h4>
                <p className="text-[10.5px] text-[#637468]">Photos and updates from projects you support</p>
              </div>
              <input
                type="checkbox"
                checked={impactAlerts}
                onChange={(e) => setImpactAlerts(e.target.checked)}
                className="w-4 h-4 accent-brand-primary rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="text-xs font-bold text-[#18261E]">Monthly Summary</h4>
                <p className="text-[10.5px] text-[#637468]">A consolidated report of overall impact</p>
              </div>
              <input
                type="checkbox"
                checked={monthlyReceipts}
                onChange={(e) => setMonthlyReceipts(e.target.checked)}
                className="w-4 h-4 accent-brand-primary rounded cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* 4. PRIVACY & SECURITY */}
        <section className="space-y-2">
          <div className="flex items-center gap-1.5 px-1">
            <Shield size={15} className="text-brand-primary" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18261E]">
              Trust & Transparency
            </h3>
          </div>

          <div className="rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] p-3.5 space-y-2 shadow-2xs text-xs text-[#55665C]">
            <p className="leading-relaxed">
              Chatha Foundation adheres strictly to international charity compliance standards and operates a 100% verified Zakat distribution policy.
            </p>
            <div className="pt-1 flex items-center gap-3 text-brand-primary font-semibold">
              <button
                type="button"
                onClick={() => showToast('Privacy Policy: All donor data is encrypted.')}
                className="hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => showToast('Terms of Service: Certified humanitarian NGO.')}
                className="hover:underline cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
