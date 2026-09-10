import React from 'react';
import { X, CheckCircle, Download, Share2, ShieldCheck, Heart } from 'lucide-react';
import { MobileDonationRecord } from '../types';
import { useMobileApp } from '../context/MobileAppContext';

interface DonationDetailModalProps {
  donation: MobileDonationRecord;
  onClose: () => void;
}

export const DonationDetailModal: React.FC<DonationDetailModalProps> = ({ donation, onClose }) => {
  const { showToast } = useMobileApp();

  const handleDownload = () => {
    showToast(`Receipt ${donation.reference} downloaded (PDF)`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Donation to Chatha Foundation`,
        text: `I supported ${donation.causeName} with Chatha Foundation. Ref: ${donation.reference}.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      showToast('Receipt link copied');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in"
    >
      <div className="w-full max-w-sm bg-[#FDFCFB] rounded-t-[28px] sm:rounded-2xl border border-[#E6E1D6] shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 bg-[#F5F2EA] border-b border-[#E8E2D5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-brand-primary" />
            <h3 className="text-sm font-bold text-[#16251C]">Official Donation Receipt</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#55665C] hover:bg-[#EBE6DC] cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Receipt Body */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* Amount Badge */}
          <div className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#E3DDD1] text-center space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#637468]">
              Donation Amount
            </span>
            <div className="text-2xl font-black text-brand-primary">
              {donation.currency} {donation.amount.toLocaleString()}
            </div>
            <span className="text-xs font-semibold text-[#18261E] block">
              {donation.causeName} Fund ({donation.type === 'monthly' ? 'Monthly Partner' : 'One-Time'})
            </span>
          </div>

          {/* Details Table */}
          <div className="space-y-2 text-xs divide-y divide-[#F2EFE8]">
            <div className="flex justify-between py-1.5">
              <span className="text-[#65766B]">Receipt Reference</span>
              <span className="font-mono font-bold text-[#18261E]">{donation.reference}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#65766B]">Date & Time</span>
              <span className="font-medium text-[#18261E]">{donation.date}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#65766B]">Payment Method</span>
              <span className="font-medium text-[#18261E]">{donation.paymentMethod}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#65766B]">Status</span>
              <span className="font-bold text-brand-primary flex items-center gap-1">
                <CheckCircle size={12} /> {donation.status}
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#65766B]">Tax Deductible</span>
              <span className="font-medium text-[#18261E]">Yes (Approved Charity)</span>
            </div>
          </div>

          {/* Verified Impact Note */}
          <div className="p-3 rounded-xl bg-brand-light/60 border border-brand-border space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-primary">
              <ShieldCheck size={14} />
              <span>Direct Beneficiary Allocation</span>
            </div>
            <p className="text-[11.5px] text-[#24372C] leading-relaxed">
              {donation.impactNote}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-[#FDFCFB] border-t border-[#ECE7DC] flex items-center gap-2">
          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 min-h-[42px] rounded-xl bg-[#F0ECE3] hover:bg-[#E8E3D8] text-[#18261E] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="min-h-[42px] px-3.5 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Share2 size={14} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
