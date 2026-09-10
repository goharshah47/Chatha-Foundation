import React, { useState } from 'react';
import {
  X,
  ArrowLeft,
  ArrowRight,
  Heart,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Building,
  Lock,
  Download,
  Share2,
  Sparkles,
} from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { CauseSlug } from '../../types';
import { CAUSES_LIST } from '../../data/charityData';
import { MobileDonationRecord } from '../types';

export const MobileDonationFlow: React.FC = () => {
  const {
    donationModalOpen,
    closeDonationFlow,
    donationDraft,
    setDonationDraft,
    addDonation,
    showToast,
    resetToTab,
    currency,
  } = useMobileApp();

  // Step 1: Type & Amount, Step 2: Cause, Step 3: Payment, Step 4: Confirmation
  const [step, setStep] = useState<number>(1);

  // Form states
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>(donationDraft.type);
  const [amount, setAmount] = useState<number>(donationDraft.amount);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<CauseSlug>(donationDraft.causeSlug);

  // Payment details
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'easypaisa' | 'jazzcash' | 'bank'>(
    'card'
  );
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4012');
  const [donorName, setDonorName] = useState('Generous Donor');
  const [donorEmail, setDonorEmail] = useState('donor@example.com');
  const [isProcessing, setIsProcessing] = useState(false);

  // Confirmed Record
  const [completedRecord, setCompletedRecord] = useState<MobileDonationRecord | null>(null);

  if (!donationModalOpen) return null;

  const pkrPresets = [1000, 2500, 5000, 10000];
  const gbpPresets = [25, 50, 100, 250];
  const presets = currency === 'Rs.' ? pkrPresets : gbpPresets;

  const currentCauseObj =
    CAUSES_LIST.find((c) => c.id === selectedCause) || CAUSES_LIST[0];

  const handleNextFromAmount = () => {
    const finalAmount = isCustom ? Number(customInput) || 1000 : amount;
    setDonationDraft((prev) => ({
      ...prev,
      amount: finalAmount,
      type: donationType,
      causeSlug: selectedCause,
    }));
    setStep(2);
  };

  const handleNextFromCause = () => {
    setStep(3);
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const finalAmount = isCustom ? Number(customInput) || 1000 : amount;
      const record = addDonation({
        amount: finalAmount,
        currency,
        causeSlug: selectedCause,
        causeName: currentCauseObj.name,
        type: donationType,
        paymentMethod:
          paymentMethod === 'card'
            ? 'Debit/Credit Card'
            : paymentMethod === 'easypaisa'
            ? 'EasyPaisa Mobile Wallet'
            : paymentMethod === 'jazzcash'
            ? 'JazzCash Mobile Wallet'
            : 'Direct Bank Wire',
        impactNote: `Allocated directly toward ${currentCauseObj.name} emergency relief`,
        taxDeductible: true,
      });
      setCompletedRecord(record);
      setStep(4);
      showToast('Donation processed successfully. Thank you!');
    }, 1200);
  };

  const handleClose = () => {
    setStep(1);
    setCompletedRecord(null);
    closeDonationFlow();
  };

  const handleViewImpact = () => {
    handleClose();
    resetToTab('impact');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      id="mobile-donation-modal"
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in"
    >
      <div className="w-full max-w-sm bg-[#FDFCFB] rounded-t-[30px] sm:rounded-2xl border border-[#E6E1D6] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col transition-all">
        {/* MODAL APP BAR */}
        <div className="p-3.5 bg-[#F5F2EA] border-b border-[#E8E2D5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {step > 1 && step < 4 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#28382E] hover:bg-[#EBE6DC] cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            <h3 className="text-xs font-bold text-[#16251C]">
              {step === 1 && 'Step 1 of 3 · Amount & Type'}
              {step === 2 && 'Step 2 of 3 · Select Cause'}
              {step === 3 && 'Step 3 of 3 · Secure Payment'}
              {step === 4 && 'Donation Confirmed'}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#55665C] hover:bg-[#EBE6DC] cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {/* ================= STEP 1: TYPE & AMOUNT ================= */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in">
              {/* Type Segment */}
              <div className="grid grid-cols-2 p-1 rounded-xl bg-[#EFECE6] border border-[#E1DDD3]">
                <button
                  type="button"
                  onClick={() => setDonationType('one-time')}
                  className={`py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    donationType === 'one-time'
                      ? 'bg-brand-primary text-white shadow-2xs'
                      : 'text-[#4A5A50]'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setDonationType('monthly')}
                  className={`py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    donationType === 'monthly'
                      ? 'bg-brand-primary text-white shadow-2xs'
                      : 'text-[#4A5A50]'
                  }`}
                >
                  Monthly Sustainer
                </button>
              </div>

              {/* Amount Selection Grid */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#637468]">
                  Select Donation Amount
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((amt) => {
                    const isSelected = !isCustom && amount === amt;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setAmount(amt);
                          setIsCustom(false);
                        }}
                        className={`min-h-[50px] rounded-xl flex flex-col items-center justify-center p-2 border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-brand-light border-brand-primary text-brand-primary font-bold shadow-xs'
                            : 'bg-[#F9F7F2] border-[#E3DDD1] text-[#25352C] hover:border-brand-primary/40'
                        }`}
                      >
                        <span className="text-sm font-black">
                          {currency} {amt.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-[#6E7E73]">
                          {donationType === 'monthly' ? '/ month' : 'single gift'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Button / Input */}
                <div className="pt-1">
                  {isCustom ? (
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#F6F3EC] border-2 border-brand-primary">
                      <span className="text-sm font-bold text-brand-primary">{currency}</span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        className="w-full bg-transparent text-sm font-bold text-[#18261E] focus:outline-none"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsCustom(true)}
                      className="w-full min-h-[44px] rounded-xl bg-[#F9F7F2] border border-[#E3DDD1] text-xs font-semibold text-[#35453C] hover:border-brand-primary/40 cursor-pointer"
                    >
                      Enter Custom Amount
                    </button>
                  )}
                </div>
              </div>

              {/* Impact Explanation */}
              <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E3DDD1] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-primary">
                  <Sparkles size={13} />
                  <span>Immediate Life-Saving Value</span>
                </div>
                <p className="text-[11px] text-[#55665C] leading-relaxed">
                  Your gift of {currency}{' '}
                  {(isCustom ? Number(customInput) || 0 : amount).toLocaleString()} directly
                  funds nutritious family food parcels, clean borehole water, or orphan schooling.
                </p>
              </div>

              {/* Continue Button */}
              <button
                type="button"
                onClick={handleNextFromAmount}
                className="w-full min-h-[48px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer"
              >
                <span>Continue to Cause Selection</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}

          {/* ================= STEP 2: CAUSE SELECTION ================= */}
          {step === 2 && (
            <div className="space-y-3 animate-in fade-in">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#18261E]">Select Recipient Cause</h4>
                <p className="text-[11px] text-[#66776D]">
                  Choose which area of humanitarian relief receives your donation.
                </p>
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {CAUSES_LIST.map((cause) => {
                  const isSelected = selectedCause === cause.id;
                  return (
                    <button
                      key={cause.id}
                      type="button"
                      onClick={() => setSelectedCause(cause.id as CauseSlug)}
                      className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-brand-light border-brand-primary shadow-xs'
                          : 'bg-[#FDFCFB] border-[#E6E1D6] hover:border-brand-primary/40'
                      }`}
                    >
                      <div>
                        <h5 className="text-xs font-bold text-[#18261E]">{cause.name}</h5>
                        <span className="text-[10px] text-brand-primary font-medium block mt-0.5">
                          {cause.exampleMetric}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'bg-brand-primary border-brand-primary text-white'
                            : 'border-[#CCC5B8]'
                        }`}
                      >
                        {isSelected && <CheckCircle size={13} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNextFromCause}
                className="w-full min-h-[48px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer"
              >
                <span>Continue to Payment</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}

          {/* ================= STEP 3: PAYMENT ================= */}
          {step === 3 && (
            <form onSubmit={handleProcessPayment} className="space-y-3.5 animate-in fade-in">
              {/* Payment Method Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#637468]">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'card', label: 'Debit/Credit Card', icon: CreditCard },
                    { id: 'easypaisa', label: 'EasyPaisa', icon: Smartphone },
                    { id: 'jazzcash', label: 'JazzCash', icon: Smartphone },
                    { id: 'bank', label: 'Bank Transfer', icon: Building },
                  ].map((m) => {
                    const isSelected = paymentMethod === m.id;
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() =>
                          setPaymentMethod(m.id as 'card' | 'easypaisa' | 'jazzcash' | 'bank')
                        }
                        className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-brand-light border-brand-primary text-brand-primary font-bold shadow-2xs'
                            : 'bg-[#F9F7F2] border-[#E3DDD1] text-[#35453C]'
                        }`}
                      >
                        <Icon size={15} />
                        <span className="text-[11px] truncate">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Minimal Clean Fields */}
              <div className="space-y-2">
                <div>
                  <label className="text-[11px] font-semibold text-[#55665C] block mb-1">
                    Donor Full Name
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#55665C] block mb-1">
                    Receipt Email
                  </label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary"
                    required
                  />
                </div>

                {paymentMethod === 'card' && (
                  <div>
                    <label className="text-[11px] font-semibold text-[#55665C] block mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <CreditCard size={15} className="absolute left-3 top-3 text-[#77887E]" />
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F6F3EC] border border-[#DDD7CA] text-xs font-semibold text-[#18261E] focus:outline-none focus:border-brand-primary font-mono"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#637468]">
                <Lock size={12} className="text-brand-primary" />
                <span>256-Bit SSL Encrypted · 100% Secure Transaction</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full min-h-[48px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing Secure Donation...</span>
                ) : (
                  <>
                    <Heart size={14} fill="currentColor" />
                    <span>
                      Confirm {currency} {amount.toLocaleString()} Gift
                    </span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* ================= STEP 4: CONFIRMATION ================= */}
          {step === 4 && completedRecord && (
            <div className="space-y-4 text-center animate-in zoom-in-95">
              {/* Success Icon */}
              <div className="w-14 h-14 rounded-full bg-brand-light text-brand-primary flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle size={30} strokeWidth={2.5} />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#14221A]">Donation Successful</h3>
                <p className="text-xs text-[#55665C]">
                  May you be abundantly rewarded. Your donation has been received with gratitude.
                </p>
              </div>

              {/* Digital Receipt Card */}
              <div className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#E3DDD1] text-left space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-[#EAE5DA]">
                  <span className="text-[11px] text-[#65766B]">Receipt Reference</span>
                  <span className="font-mono font-bold text-xs text-[#18261E]">
                    {completedRecord.reference}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#65766B]">Cause Fund</span>
                  <span className="font-bold text-xs text-[#18261E]">
                    {completedRecord.causeName}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#65766B]">Amount & Type</span>
                  <span className="font-bold text-xs text-brand-primary">
                    {completedRecord.currency} {completedRecord.amount.toLocaleString()} (
                    {completedRecord.type === 'monthly' ? 'Monthly' : 'One-time'})
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#EAE5DA] text-[10.5px] text-[#708075]">
                  <span>Status: Verified & Audited</span>
                  <span>100% Direct Allocation</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleViewImpact}
                  className="w-full min-h-[46px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  <Sparkles size={14} />
                  <span>View Project Impact</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full min-h-[42px] rounded-xl bg-[#EFECE6] text-[#25352C] text-xs font-semibold hover:bg-[#E5E1D7] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
