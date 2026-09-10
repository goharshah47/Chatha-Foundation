import React, { useState } from 'react';
import { ArrowLeft, Lock, Mail, User, ShieldCheck, Heart } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';

interface AuthScreenProps {
  initialMode?: 'login' | 'signup' | 'forgot';
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ initialMode = 'login' }) => {
  const { popScreen, loginUser, showToast, resetToTab } = useMobileApp();
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'forgot') {
      showToast('Password reset link sent to your email');
      setMode('login');
      return;
    }

    const finalName = name.trim() || email.split('@')[0] || 'Chatha Supporter';
    loginUser(finalName, email);
    popScreen();
  };

  const handleContinueAsGuest = () => {
    showToast('Continuing as Guest Donor');
    resetToTab('home');
  };

  return (
    <div id="mobile-auth-screen" className="pb-8 space-y-4 bg-[#FBFBF9] min-h-screen">
      {/* Top Header */}
      <div className="sticky top-0 z-30 bg-[#FDFCFB]/96 backdrop-blur-md border-b border-[#ECE7DC] px-3 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={popScreen}
          className="flex items-center gap-1 text-[#2A3830] font-semibold text-xs py-1 px-2 rounded-lg hover:bg-[#F0ECE3] cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        <span className="text-xs font-bold text-[#16241B]">
          {mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
        </span>
        <div className="w-8" />
      </div>

      <div className="px-5 pt-2 max-w-sm mx-auto space-y-5">
        {/* Brand Banner */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center mx-auto shadow-2xs">
            <Heart size={22} fill="currentColor" />
          </div>
          <h2 className="text-lg font-bold text-[#14221A]">
            {mode === 'login'
              ? 'Welcome Back'
              : mode === 'signup'
              ? 'Join Our Donor Circle'
              : 'Recover Your Account'}
          </h2>
          <p className="text-xs text-[#607166]">
            {mode === 'login'
              ? 'Sign in to access your donation receipts and field impact tracking.'
              : mode === 'signup'
              ? 'Track your personal contributions, download tax receipts, and view field photos.'
              : 'Enter your email to receive recovery instructions.'}
          </p>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signup' && (
            <div>
              <label className="text-[11px] font-semibold text-[#55665C] block mb-1">
                Full Name
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3 top-3 text-[#7B8B80]" />
                <input
                  type="text"
                  placeholder="e.g. Tariq Khan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[11px] font-semibold text-[#55665C] block mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-3 text-[#7B8B80]" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-semibold text-[#55665C]">Password</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-[11px] font-medium text-brand-primary hover:underline cursor-pointer"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-3 text-[#7B8B80]" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full min-h-[46px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold transition-all shadow-md active:scale-98 cursor-pointer mt-2"
          >
            {mode === 'login'
              ? 'Sign In to Account'
              : mode === 'signup'
              ? 'Create My Account'
              : 'Send Reset Link'}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="text-center text-xs text-[#637468] pt-2">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="font-bold text-brand-primary hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="font-bold text-brand-primary hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </p>
          )}
        </div>

        {/* GUEST DONOR NOTICE (Crucial requirement: no forced registration) */}
        <div className="pt-4 border-t border-[#ECE7DC] space-y-2 text-center">
          <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E3DDD1] text-[11px] text-[#55665C] leading-snug">
            <span className="font-bold text-[#18261E] block mb-0.5">No Account Required</span>
            You can browse causes, explore stories, and donate anytime as a guest without creating an account.
          </div>

          <button
            type="button"
            onClick={handleContinueAsGuest}
            className="w-full py-2.5 text-xs font-bold text-[#4A5A50] hover:text-[#18261E] transition-colors cursor-pointer"
          >
            Continue as Guest Donor →
          </button>
        </div>
      </div>
    </div>
  );
};
