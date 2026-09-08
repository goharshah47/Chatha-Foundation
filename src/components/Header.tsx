import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Search,
  User,
  Heart,
  Droplets,
  Utensils,
  BookOpen,
  Home,
  Activity,
  AlertCircle
} from 'lucide-react';
import { CauseId, CauseSlug } from '../types';
import { MAIN_CAUSES_NAV_LIST } from '../data/causesData';
import { ThemeSelector } from './ThemeSelector';

interface HeaderProps {
  onOpenDonate: (causeId?: CauseId, customLabel?: string) => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigateCause?: (slug: CauseSlug) => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDonate,
  onOpenSearch,
  onOpenAccount,
  onNavigateCause,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<'causes' | 'our-work' | 'impact' | 'about' | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<'appeals' | 'religious' | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterNav = (menu: 'causes' | 'our-work' | 'impact' | 'about') => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeaveNav = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 180);
  };

  const handleMouseEnterSubmenu = (sub: 'appeals' | 'religious') => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveSubmenu(sub);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCFB]/98 backdrop-blur-md border-b border-[#E8E4DA] py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
          : 'bg-[#FDFCFB] py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO: CHATHA FOUNDATION */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) {
              onNavigateHome();
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          id="logo-link"
          aria-label="Chatha Foundation Home"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary transition-transform duration-300 group-hover:scale-125" />
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#14221A]">
            CHATHA <span className="font-light text-[#506055]">FOUNDATION</span>
          </span>
        </a>

        {/* MINIMAL & PREMIUM NAVIGATION WITH CLEAR HOVER UNDERLINES & DROPDOWNS */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
          aria-label="Main Navigation"
          onMouseLeave={handleMouseLeaveNav}
        >
          {/* 1. CAUSES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnterNav('causes')}
          >
            <button
              onClick={() => scrollToSection('causes')}
              className="group relative py-2 text-[14px] font-medium text-[#37463E] hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              id="nav-causes"
              aria-expanded={activeDropdown === 'causes'}
              aria-haspopup="true"
            >
              <span>Causes</span>
              {/* Clean thin underline animating smoothly from left to right */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary nav-theme-underline scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </button>

            {/* Causes Dropdown Menu */}
            {activeDropdown === 'causes' && (
              <div
                className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1.5 duration-200"
                onMouseEnter={() => handleMouseEnterNav('causes')}
              >
                {/* Clean, compact Main Causes list matching requirement */}
                <div className="w-[260px] rounded-2xl bg-[#FDFCFB] border border-[#EAE5DC] shadow-[0_16px_40px_rgba(20,35,27,0.12)] p-2 overflow-hidden">
                  <div className="px-3 pt-1.5 pb-2 text-[11px] font-bold tracking-[0.16em] text-[#718076] uppercase flex items-center justify-between border-b border-[#F0EBE2] mb-1">
                    <span>Main Causes</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  </div>

                  <div className="space-y-0.5">
                    {MAIN_CAUSES_NAV_LIST.map((cause) => (
                      <button
                        key={cause.slug}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (onNavigateCause) {
                            onNavigateCause(cause.slug);
                          }
                        }}
                        className="w-full px-3 py-2 text-left rounded-xl text-[13.5px] font-medium text-[#25342B] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors flex items-center justify-between group/item cursor-pointer"
                        id={`nav-cause-${cause.slug}`}
                      >
                        <div className="flex flex-col text-left">
                          <span className="font-semibold text-[13.5px] leading-tight">{cause.name}</span>
                          <span className="text-[11px] text-[#798A80] group-hover/item:text-brand-primary/80 transition-colors">
                            {cause.desc}
                          </span>
                        </div>
                        <ChevronRight size={13} className="text-[#98A89F] group-hover/item:translate-x-0.5 group-hover/item:text-brand-primary transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>

                  <div className="mt-1 pt-1.5 border-t border-[#ECE7DE]">
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        if (onNavigateHome) onNavigateHome();
                        scrollToSection('causes');
                      }}
                      className="w-full px-3 py-1.5 text-left text-xs font-semibold text-brand-primary hover:bg-[#F4F0E8] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>Explore all causes overview</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. OUR WORK DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnterNav('our-work')}
          >
            <button
              onClick={() => scrollToSection('story')}
              className="group relative py-2 text-[14px] font-medium text-[#37463E] hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              id="nav-our-work"
              aria-expanded={activeDropdown === 'our-work'}
              aria-haspopup="true"
            >
              <span>Our Work</span>
              {/* Clean thin underline */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary nav-theme-underline scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </button>

            {activeDropdown === 'our-work' && (
              <div
                className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1.5 duration-200"
                onMouseEnter={() => handleMouseEnterNav('our-work')}
              >
                <div className="w-[235px] rounded-xl bg-[#FDFCFB] border border-[#EAE5DC] shadow-[0_14px_36px_rgba(20,35,27,0.09)] py-1.5">
                  <button
                    onClick={() => scrollToSection('story')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Emergency Response
                  </button>
                  <button
                    onClick={() => scrollToSection('causes')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Sustainable Water Solutions
                  </button>
                  <button
                    onClick={() => scrollToSection('causes')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Food Security & Nutrition
                  </button>
                  <button
                    onClick={() => scrollToSection('causes')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Education & Child Protection
                  </button>
                  <button
                    onClick={() => scrollToSection('story')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Field Stories & Dispatches
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. IMPACT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnterNav('impact')}
          >
            <button
              onClick={() => scrollToSection('impact')}
              className="group relative py-2 text-[14px] font-medium text-[#37463E] hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              id="nav-impact"
              aria-expanded={activeDropdown === 'impact'}
              aria-haspopup="true"
            >
              <span>Impact</span>
              {/* Clean thin underline */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary nav-theme-underline scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </button>

            {activeDropdown === 'impact' && (
              <div
                className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1.5 duration-200"
                onMouseEnter={() => handleMouseEnterNav('impact')}
              >
                <div className="w-[230px] rounded-xl bg-[#FDFCFB] border border-[#EAE5DC] shadow-[0_14px_36px_rgba(20,35,27,0.09)] py-1.5">
                  <button
                    onClick={() => scrollToSection('impact')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    100% Transparency Guarantee
                  </button>
                  <button
                    onClick={() => scrollToSection('impact')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Global Impact Report
                  </button>
                  <button
                    onClick={() => scrollToSection('impact')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Where Your Money Goes
                  </button>
                  <button
                    onClick={() => scrollToSection('impact')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Financial Audits & Governance
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. ABOUT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnterNav('about')}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="group relative py-2 text-[14px] font-medium text-[#37463E] hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              id="nav-about"
              aria-expanded={activeDropdown === 'about'}
              aria-haspopup="true"
            >
              <span>About</span>
              {/* Clean thin underline */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary nav-theme-underline scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </button>

            {activeDropdown === 'about' && (
              <div
                className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1.5 duration-200"
                onMouseEnter={() => handleMouseEnterNav('about')}
              >
                <div className="w-[225px] rounded-xl bg-[#FDFCFB] border border-[#EAE5DC] shadow-[0_14px_36px_rgba(20,35,27,0.09)] py-1.5">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Who We Are & Mission
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Humanitarian Values
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Board of Trustees
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Charity Commission (1198242)
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full px-4 py-2 text-left text-[13.5px] font-medium text-[#2C3B32] hover:text-brand-primary hover:bg-[#F4F0E8] transition-colors"
                  >
                    Contact & Field Offices
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT SIDE: SEARCH, ACCOUNT, THEME SELECTOR, STICKY DONATE NOW */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-[#3B4A41] hover:text-brand-primary hover:bg-[#F3EFE8] transition-colors cursor-pointer"
            aria-label="Search appeals"
            title="Search causes and appeals"
          >
            <Search size={16} />
            <span className="hidden lg:inline text-[13px] font-medium">Search</span>
          </button>

          {/* Account / Donor Portal Button */}
          <button
            onClick={onOpenAccount}
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-[#3B4A41] hover:text-brand-primary hover:bg-[#F3EFE8] transition-colors cursor-pointer"
            aria-label="Donor Account"
            title="Donor portal & receipts"
          >
            <User size={16} />
            <span className="hidden lg:inline text-[13px] font-medium">Account</span>
          </button>

          {/* Minimal Live Color Theme Selector Popover */}
          <ThemeSelector />

          {/* ONE PRIMARY STICKY DONATE NOW BUTTON — Dynamic theme primary color, large, high contrast, sticky */}
          <button
            id="header-donate-btn"
            onClick={() => onOpenDonate('where-needed')}
            className="px-5 sm:px-6 py-2.5 rounded-xl bg-brand-primary text-white text-[13px] sm:text-[14px] font-semibold tracking-wide hover:bg-brand-hover active:scale-[0.98] transition-all shadow-brand-sm cursor-pointer whitespace-nowrap ml-1"
          >
            Donate Now →
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#37453E] hover:text-brand-primary focus:outline-none ml-1"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE EXPANDABLE MENU */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown"
          className="md:hidden bg-[#FDFCFB] border-b border-[#E8E5DC] px-5 py-5 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* Quick Actions in Mobile */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#ECE8DF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#F5F2EC] text-xs font-medium text-[#2E3C33]"
            >
              <Search size={14} />
              <span>Search Appeals</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccount();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#F5F2EC] text-xs font-medium text-[#2E3C33]"
            >
              <User size={14} />
              <span>Donor Portal</span>
            </button>
          </div>

          {/* Theme Selection in Mobile Menu */}
          <div className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-[#F5F2EC]">
            <span className="text-xs font-medium text-[#2E3C33]">Visual Theme</span>
            <ThemeSelector />
          </div>

          {/* Causes Accordion */}
          <div>
            <button
              onClick={() =>
                setMobileExpandedSection(
                  mobileExpandedSection === 'causes' ? null : 'causes'
                )
              }
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#18261E]"
            >
              <span>Causes</span>
              <ChevronRight
                size={16}
                className={`transition-transform duration-200 ${
                  mobileExpandedSection === 'causes' ? 'rotate-90 text-brand-primary' : 'text-[#84948A]'
                }`}
              />
            </button>
            {mobileExpandedSection === 'causes' && (
              <div className="pl-3 py-1 space-y-1.5 text-sm border-l-2 border-brand-primary/30 my-1">
                {MAIN_CAUSES_NAV_LIST.map((cause) => (
                  <button
                    key={cause.slug}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onNavigateCause) {
                        onNavigateCause(cause.slug);
                      }
                    }}
                    className="block w-full text-left py-1 text-[#334339] hover:text-brand-primary font-medium cursor-pointer"
                  >
                    <span>{cause.name}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateHome) onNavigateHome();
                    scrollToSection('causes');
                  }}
                  className="block w-full text-left py-1 text-xs text-brand-primary font-semibold pt-1 border-t border-[#EAE5DC]"
                >
                  View All Causes Overview →
                </button>
              </div>
            )}
          </div>

          {/* Our Work */}
          <div>
            <button
              onClick={() => scrollToSection('story')}
              className="block w-full text-left py-2 text-base font-semibold text-[#18261E]"
            >
              Our Work
            </button>
          </div>

          {/* Impact */}
          <div>
            <button
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left py-2 text-base font-semibold text-[#18261E]"
            >
              Impact & Transparency
            </button>
          </div>

          {/* About */}
          <div>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-base font-semibold text-[#18261E]"
            >
              About Chatha Foundation
            </button>
          </div>

          {/* Mobile Donate Now Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate('where-needed');
              }}
              className="w-full py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-sm font-semibold tracking-wide shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <span>Donate Now</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
