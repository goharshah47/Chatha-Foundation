import React from 'react';
import { useMobileApp } from '../context/MobileAppContext';
import { CheckCircle2 } from 'lucide-react';

export const MobileToast: React.FC = () => {
  const { toastMessage } = useMobileApp();

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-14 inset-x-4 z-50 flex justify-center pointer-events-none animate-in fade-in slide-in-from-top-2"
    >
      <div className="px-4 py-2.5 rounded-full bg-[#18261E]/95 text-white backdrop-blur-md shadow-lg flex items-center gap-2 border border-white/15 max-w-xs text-xs font-semibold">
        <CheckCircle2 size={15} className="text-brand-light shrink-0" />
        <span className="truncate">{toastMessage}</span>
      </div>
    </div>
  );
};
