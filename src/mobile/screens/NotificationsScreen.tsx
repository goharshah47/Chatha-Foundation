import React from 'react';
import { ArrowLeft, Bell, CheckCheck, Sparkles, Receipt, Building } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';

export const NotificationsScreen: React.FC = () => {
  const { popScreen, notifications, markNotificationRead, markAllNotificationsRead, pushScreen } =
    useMobileApp();

  const getIcon = (type: string) => {
    switch (type) {
      case 'donation':
        return <Receipt size={16} className="text-brand-primary" />;
      case 'project':
        return <Building size={16} className="text-brand-primary" />;
      case 'impact':
        return <Sparkles size={16} className="text-brand-primary" />;
      default:
        return <Bell size={16} className="text-brand-primary" />;
    }
  };

  return (
    <div id="mobile-notifications-screen" className="pb-8 space-y-4 bg-[#FBFBF9] min-h-screen">
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
        <span className="text-xs font-bold text-[#16241B]">Notifications</span>
        <button
          type="button"
          onClick={markAllNotificationsRead}
          className="text-xs font-semibold text-brand-primary hover:underline cursor-pointer flex items-center gap-1"
        >
          <CheckCheck size={14} />
          <span>Read All</span>
        </button>
      </div>

      <div className="px-4 space-y-3">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-[#16251C]">Field Alerts & Receipts</h2>
          <p className="text-xs text-[#627367]">
            Live dispatches, donor receipts, and project milestones.
          </p>
        </div>

        <div className="space-y-2.5">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`p-3.5 rounded-2xl border transition-colors flex items-start gap-3 cursor-pointer ${
                n.read
                  ? 'bg-[#FDFCFB] border-[#E6E1D6]'
                  : 'bg-brand-light/40 border-brand-border shadow-2xs'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#F0ECE3] flex items-center justify-center shrink-0 mt-0.5">
                {getIcon(n.type)}
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#18261E]">{n.title}</h4>
                  <span className="text-[10px] text-[#708075]">{n.date}</span>
                </div>
                <p className="text-xs text-[#4A5A50] leading-snug">{n.message}</p>
                {!n.read && (
                  <span className="inline-block text-[9.5px] font-bold text-brand-primary uppercase tracking-wider">
                    New Update
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
