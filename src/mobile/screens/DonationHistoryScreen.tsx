import React, { useState } from 'react';
import { ArrowLeft, Receipt, CheckCircle, ChevronRight, Heart } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { DonationDetailModal } from './DonationDetailModal';
import { MobileDonationRecord } from '../types';

export const DonationHistoryScreen: React.FC = () => {
  const { popScreen, donations, openDonationFlow } = useMobileApp();
  const [selectedDonation, setSelectedDonation] = useState<MobileDonationRecord | null>(null);

  return (
    <div id="mobile-donation-history-screen" className="pb-8 space-y-4 bg-[#FBFBF9] min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#FDFCFB]/96 backdrop-blur-md border-b border-[#ECE7DC] px-3 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={popScreen}
          className="flex items-center gap-1 text-[#2A3830] font-semibold text-xs py-1 px-2 rounded-lg hover:bg-[#F0ECE3] cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Account</span>
        </button>
        <span className="text-xs font-bold text-[#16241B]">Donation History</span>
        <div className="w-8" />
      </div>

      <div className="px-4 space-y-3">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-[#16251C]">Your Generosity Log</h2>
          <p className="text-xs text-[#627367]">
            Official tax-deductible receipts and field status for all contributions.
          </p>
        </div>

        {donations.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] space-y-3">
            <div className="w-12 h-12 rounded-full bg-brand-light text-brand-primary flex items-center justify-center mx-auto">
              <Heart size={20} />
            </div>
            <h3 className="text-sm font-bold text-[#18261E]">No Donations Yet</h3>
            <p className="text-xs text-[#637468]">
              Your first gift will be recorded here with an instant digital receipt.
            </p>
            <button
              type="button"
              onClick={() => openDonationFlow()}
              className="min-h-[40px] px-4 rounded-xl bg-brand-primary text-white text-xs font-semibold cursor-pointer"
            >
              Make a Donation
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {donations.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedDonation(item)}
                className="w-full text-left p-3.5 rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] shadow-2xs hover:border-brand-primary/40 transition-colors flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                    <Receipt size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-[#18261E]">{item.causeName}</h4>
                      <span className="text-[10px] font-semibold text-brand-primary bg-brand-light px-1.5 py-0.2 rounded">
                        {item.type === 'monthly' ? 'Monthly' : 'One-Time'}
                      </span>
                    </div>
                    <span className="text-[10.5px] text-[#637468] block mt-0.5">
                      {item.date} · Ref: {item.reference}
                    </span>
                  </div>
                </div>

                <div className="text-right flex items-center gap-1.5">
                  <div>
                    <span className="text-xs font-extrabold text-[#18261E] block">
                      {item.currency} {item.amount.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-semibold text-brand-primary flex items-center justify-end gap-0.5">
                      <CheckCircle size={10} /> {item.status}
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-[#98A79E]" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedDonation && (
        <DonationDetailModal
          donation={selectedDonation}
          onClose={() => setSelectedDonation(null)}
        />
      )}
    </div>
  );
};
