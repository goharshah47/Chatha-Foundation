import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Heart, ShieldCheck, Check } from 'lucide-react';
import { CauseId, DonationFrequency } from '../types';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCause?: CauseId;
}

const PRESET_AMOUNTS = [25, 50, 100];

const CAUSES_OPTIONS: { id: CauseId; label: string }[] = [
  { id: 'water', label: 'Water' },
  { id: 'food', label: 'Food' },
  { id: 'orphans', label: 'Orphans' },
  { id: 'family', label: 'Family Support' },
  { id: 'ramadan', label: 'Ramadan' },
  { id: 'where-needed', label: 'Where Needed Most' },
];

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialCause = 'where-needed',
}) => {
  const [frequency, setFrequency] = useState<DonationFrequency>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [customAmountInput, setCustomAmountInput] = useState<string>('75');
  const [selectedCause, setSelectedCause] = useState<CauseId>(initialCause);
  const [step, setStep] = useState<'select' | 'details' | 'success'>('select');

  // Form details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [giftAid, setGiftAid] = useState(true);
  const [receiptNumber, setReceiptNumber] = useState('');

  // Sync initial cause when opened
  useEffect(() => {
    if (initialCause) {
      setSelectedCause(initialCause);
    }
  }, [initialCause]);

  // Reset when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep('select');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const activeAmount = isCustom
    ? Math.max(1, Number(customAmountInput) || 25)
    : selectedAmount;

  const getImpactDescription = (amount: number, cause: CauseId) => {
    if (cause === 'water') {
      if (amount < 30) return 'Provides safe drinking water filters for a family for 3 months.';
      if (amount <= 75) return 'Provides clean, tested drinking water for a household of six for an entire year.';
      return 'Contributes directly to deep solar aquifer boreholes providing clean water to whole villages.';
    }
    if (cause === 'food') {
      if (amount < 30) return 'Provides a nutritious emergency food basket sustaining a family for two weeks.';
      if (amount <= 75) return 'Supplies staple foods, flour, lentils, oil, and baby milk for a full month.';
      return 'Delivers bulk nutritional relief and agricultural seeds to remote drought-affected communities.';
    }
    if (cause === 'orphans') {
      if (amount < 35) return 'Supplies school uniforms, stationery, and learning materials to an orphaned child.';
      if (amount <= 75) return 'Funds one full month of comprehensive orphan sponsorship (schooling, healthcare, meals).';
      return 'Covers seasonal healthcare, tuition, and shelter security for multiple orphaned children.';
    }
    if (cause === 'ramadan') {
      if (amount < 35) return 'Provides warm, wholesome Iftar meals to fasting families living in acute hardship.';
      if (amount <= 75) return 'Supplies a full Ramadan food pack with dates, grains, and oil for the entire month.';
      return 'Provides community Iftar distributions and Eid gifts to children in refugee settlements.';
    }
    // Default / Where needed most
    if (amount <= 25) return 'Delivers immediate life-saving food, clean water, or emergency medical aid.';
    if (amount <= 75) return 'Equips rapid humanitarian teams to deploy emergency shelter and clean water.';
    return 'Enables large-scale field response where human lives face immediate peril.';
  };

  const handlePresetClick = (amt: number) => {
    setSelectedAmount(amt);
    setIsCustom(false);
  };

  const handleCustomClick = () => {
    setIsCustom(true);
  };

  const handleCompleteDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorEmail.trim()) return;
    const ref = `AR-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(ref);
    setStep('success');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121B15]/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FBFBF9] rounded-[24px] shadow-2xl border border-[#E8E4DA] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="donation-modal-container"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-[#ECE8E0]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                Humanitarian Giving
              </span>
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-[#14231B] mt-0.5">
              Make a difference
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#647268] hover:text-[#14231B] hover:bg-[#EFECE4] transition-colors cursor-pointer"
            aria-label="Close donation dialog"
            id="close-donate-modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* STEP 1: Amount & Cause Selection */}
          {step === 'select' && (
            <div className="space-y-6">
              
              {/* Frequency Toggle: One-time | Monthly */}
              <div className="flex p-1 rounded-full bg-[#F0EDE5] border border-[#E3DFD5]">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    frequency === 'one-time'
                      ? 'bg-[#FBFBF9] text-[#14231B] shadow-xs'
                      : 'text-[#637267] hover:text-[#14231B]'
                  }`}
                  id="freq-one-time"
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-[#FBFBF9] text-[#14231B] shadow-xs'
                      : 'text-[#637267] hover:text-[#14231B]'
                  }`}
                  id="freq-monthly"
                >
                  Monthly
                </button>
              </div>

              {/* Amount Selection: £25 | £50 | £100 | Other */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-[#47554D] uppercase">
                  Select Amount
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {PRESET_AMOUNTS.map((amt) => {
                    const isSelected = !isCustom && selectedAmount === amt;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handlePresetClick(amt)}
                        className={`py-3 rounded-xl text-sm font-semibold tracking-wide border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-brand-primary text-[#FBFBF9] border-brand-primary shadow-xs'
                            : 'bg-[#F7F5EF] text-[#2C3931] border-[#E3DFD5] hover:border-[#C9C4B7]'
                        }`}
                        id={`amt-${amt}`}
                      >
                        £{amt}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={handleCustomClick}
                    className={`py-3 rounded-xl text-sm font-semibold tracking-wide border transition-all cursor-pointer ${
                      isCustom
                        ? 'bg-brand-primary text-[#FBFBF9] border-brand-primary shadow-xs'
                        : 'bg-[#F7F5EF] text-[#2C3931] border-[#E3DFD5] hover:border-[#C9C4B7]'
                    }`}
                    id="amt-other-btn"
                  >
                    Other
                  </button>
                </div>

                {/* Custom Amount Input if 'Other' selected */}
                {isCustom && (
                  <div className="pt-2 animate-in fade-in duration-150">
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-[#556358] font-medium text-base">£</span>
                      <input
                        type="number"
                        min="1"
                        max="50000"
                        value={customAmountInput}
                        onChange={(e) => setCustomAmountInput(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#F7F5EF] border border-[#DDD9CF] text-[#14231B] text-sm font-medium focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                        autoFocus
                        id="custom-amount-input"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Tangible Humanitarian Impact Note */}
              <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E5E0D5] text-xs text-[#3C4A41] leading-relaxed flex items-start gap-2.5">
                <Heart size={15} className="text-brand-primary shrink-0 mt-0.5" />
                <span>{getImpactDescription(activeAmount, selectedCause)}</span>
              </div>

              {/* Cause Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-[#47554D] uppercase">
                  Choose a Cause
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CAUSES_OPTIONS.map((c) => {
                    const isSelected = selectedCause === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedCause(c.id)}
                        className={`p-2.5 text-left rounded-xl text-xs font-medium border transition-all cursor-pointer truncate ${
                          isSelected
                            ? 'bg-brand-light border-brand-primary text-brand-primary font-semibold'
                            : 'bg-[#FBFBF9] border-[#E3DFD5] text-[#47554D] hover:border-[#C4BEAF]'
                        }`}
                        id={`choose-cause-${c.id}`}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="w-full py-3.5 rounded-full bg-brand-primary text-[#FBFBF9] text-sm font-semibold tracking-wide hover:bg-brand-hover active:scale-[0.99] transition-all shadow-brand-sm cursor-pointer flex items-center justify-center gap-2 group"
                  id="donate-continue-btn"
                >
                  <span>Donate £{activeAmount} {frequency === 'monthly' ? '/ month' : 'now'}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#718076]">
                <ShieldCheck size={13} className="text-brand-primary" />
                <span>100% donation guarantee · 256-bit encrypted giving</span>
              </div>
            </div>
          )}

          {/* STEP 2: Donor Details */}
          {step === 'details' && (
            <form onSubmit={handleCompleteDonation} className="space-y-5">
              <div className="text-xs text-[#526258] pb-1">
                Completing your <span className="font-semibold text-[#14231B]">£{activeAmount}</span> {frequency} gift for{' '}
                <span className="font-semibold text-[#14231B]">
                  {CAUSES_OPTIONS.find((c) => c.id === selectedCause)?.label}
                </span>.
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#3C4A41]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F7F5EF] border border-[#DDD9CF] text-[#14231B] text-sm focus:outline-none focus:border-brand-primary"
                  id="donor-name-input"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#3C4A41]">
                  Email Address (for tax receipt & impact report)
                </label>
                <input
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F7F5EF] border border-[#DDD9CF] text-[#14231B] text-sm focus:outline-none focus:border-brand-primary"
                  id="donor-email-input"
                />
              </div>

              {/* Gift Aid check */}
              <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#E5E0D5] flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gift-aid-checkbox"
                  checked={giftAid}
                  onChange={(e) => setGiftAid(e.target.checked)}
                  className="mt-0.5 rounded border-[#C4BEAF] text-brand-primary focus:ring-brand-primary cursor-pointer"
                />
                <label htmlFor="gift-aid-checkbox" className="text-xs text-[#3C4A41] cursor-pointer">
                  <span className="font-medium text-[#14231B]">Add 25% Gift Aid at no cost to you.</span> I am a UK taxpayer and would like Chatha Foundation to reclaim tax on all my donations.
                </label>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="px-4 py-3 rounded-full border border-[#D5D0C5] text-xs font-semibold text-[#48564D] hover:bg-[#EFECE4] transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-full bg-brand-primary text-[#FBFBF9] text-sm font-semibold tracking-wide hover:bg-brand-hover transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  id="submit-donation-btn"
                >
                  <span>Complete Gift of £{activeAmount}</span>
                  <Check size={16} />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Thank You / Confirmation */}
          {step === 'success' && (
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-200">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-light flex items-center justify-center text-brand-primary">
                <Check size={28} />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-medium tracking-tight text-[#14231B]">
                  Thank you for your generosity
                </h3>
                <p className="text-sm text-[#556358] max-w-sm mx-auto leading-relaxed">
                  Your gift of <span className="font-semibold text-[#14231B]">£{activeAmount}</span> for{' '}
                  <span className="font-semibold text-[#14231B]">
                    {CAUSES_OPTIONS.find((c) => c.id === selectedCause)?.label}
                  </span>{' '}
                  is already being routed to deliver immediate relief.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E5E0D5] text-xs text-[#48564E] max-w-xs mx-auto text-left space-y-1">
                <div>
                  <span className="text-[#728076]">Reference: </span>
                  <span className="font-mono font-medium text-[#14231B]">{receiptNumber}</span>
                </div>
                <div>
                  <span className="text-[#728076]">Donor: </span>
                  <span className="font-medium text-[#14231B]">{donorName}</span>
                </div>
                <div>
                  <span className="text-[#728076]">Tax Receipt: </span>
                  <span className="font-medium text-[#14231B]">Sent to {donorEmail}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-brand-primary text-[#FBFBF9] text-xs font-semibold tracking-wider hover:bg-brand-hover transition-all cursor-pointer"
                  id="finish-donate-modal"
                >
                  RETURN TO WEBSITE
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
