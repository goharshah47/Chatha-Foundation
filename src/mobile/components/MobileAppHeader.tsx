import React from 'react';
import { Bell, User as UserIcon } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';

interface MobileAppHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const MobileAppHeader: React.FC<MobileAppHeaderProps> = ({
  title,
  showBack = false,
  onBack,
  rightAction,
}) => {
  const { pushScreen, unreadNotificationsCount, user, resetToTab } = useMobileApp();

  return (
    <header
      id="mobile-app-header"
      className="sticky top-0 z-30 w-full bg-[#FDFCFB]/96 backdrop-blur-md border-b border-[#ECE7DC] px-4 py-2.5 flex items-center justify-between transition-colors"
    >
      {showBack ? (
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#2A3830] hover:bg-[#F0ECE3] active:scale-95 transition-all cursor-pointer -ml-1"
            aria-label="Back"
          >
            <span className="text-xl leading-none">‹</span>
          </button>
          <h1 className="text-[15px] font-semibold tracking-tight text-[#16241B] truncate">
            {title}
          </h1>
        </div>
      ) : (
        /* Brand Identity */
        <button
          type="button"
          onClick={() => resetToTab('home')}
          className="flex items-center gap-2 text-left cursor-pointer group"
          aria-label="Go to mobile home"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary transition-transform duration-200 group-active:scale-125" />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold tracking-tight text-[#14221A] leading-tight">
              CHATHA <span className="font-light text-[#506055]">FOUNDATION</span>
            </span>
            <span className="text-[9px] font-medium tracking-wider text-brand-primary uppercase">
              Humanity · Dignity · Hope
            </span>
          </div>
        </button>
      )}

      {/* Right Action Area */}
      <div className="flex items-center gap-1">
        {rightAction ? (
          rightAction
        ) : (
          <>
            {/* Notifications Button */}
            <button
              type="button"
              onClick={() => pushScreen({ type: 'notifications' })}
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#35453C] hover:bg-[#F2EFE8] active:scale-95 transition-all cursor-pointer"
              aria-label="Notifications"
            >
              <Bell size={18} strokeWidth={2} />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-primary ring-2 ring-[#FDFCFB]" />
              )}
            </button>

            {/* Profile / Account Quick Button */}
            <button
              type="button"
              onClick={() => pushScreen({ type: 'settings' })}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#35453C] hover:bg-[#F2EFE8] active:scale-95 transition-all cursor-pointer overflow-hidden border border-[#E3DFD5]"
              aria-label="Account Settings"
            >
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserIcon size={16} strokeWidth={2} className="text-[#4F6056]" />
              )}
            </button>
          </>
        )}
      </div>
    </header>
  );
};
