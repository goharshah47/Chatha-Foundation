import React, { useState } from 'react';
import { X, User, ShieldCheck, FileText, Heart, Mail, ArrowRight } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, onOpenDonate }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#FDFCFB] border border-[#E8E4DA] shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Donor Account & Receipts Portal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EFEBE3]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-light border border-brand-primary/20 flex items-center justify-center">
              <User size={18} className="text-brand-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#18261E]">Donor Portal</h3>
              <p className="text-xs text-[#63746A]">Manage gifts, download tax receipts & Gift Aid</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#65756C] hover:text-[#18261E] hover:bg-[#EFECE5] transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-light text-brand-primary mx-auto flex items-center justify-center">
                <Mail size={22} />
              </div>
              <h4 className="text-base font-semibold text-[#18261E]">Secure Sign-In Link Sent</h4>
              <p className="text-xs text-[#5D6E63] max-w-sm mx-auto leading-relaxed">
                We have emailed a one-click login link to <span className="font-semibold text-[#18261E]">{email}</span>. Click the link to view your verified donation receipts, active sponsorships, and tax certificates.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-brand-primary font-medium underline hover:text-brand-hover"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="donor-email" className="block text-xs font-semibold text-[#303E35] mb-1.5 uppercase tracking-wider">
                    Donor Email Address
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#88978E]" />
                    <input
                      id="donor-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="donor@example.org"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5CFBF] bg-[#FAF9F5] text-sm text-[#18261E] placeholder-[#95A49B] focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-primary text-white text-sm font-semibold hover:bg-brand-hover transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Access Donor Portal</span>
                  <ArrowRight size={15} />
                </button>
              </form>

              {/* Quick Donor Services */}
              <div className="pt-2 border-t border-[#ECE7DE] space-y-2.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#738479]">
                  Donor Services & Support
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#F6F4EE] border border-[#E8E3D8] space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-[#18261E]">
                      <FileText size={13} className="text-brand-primary" />
                      <span>Tax & Gift Aid</span>
                    </div>
                    <p className="text-[11px] text-[#617267] leading-snug">
                      Instant annual giving summaries for tax returns.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F6F4EE] border border-[#E8E3D8] space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-[#18261E]">
                      <ShieldCheck size={13} className="text-brand-primary" />
                      <span>100% Policy</span>
                    </div>
                    <p className="text-[11px] text-[#617267] leading-snug">
                      Track every pound directly to field projects.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F8F6F1] border-t border-[#ECE7DE] text-[11px] text-[#78887E] flex items-center justify-between">
          <span>Need immediate assistance?</span>
          <a href="mailto:info@chathafoundation.org" className="text-brand-primary font-medium hover:underline">
            info@chathafoundation.org
          </a>
        </div>
      </div>
    </div>
  );
};
