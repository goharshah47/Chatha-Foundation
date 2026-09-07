import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenDonate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#EBE7DF] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#FBFBF9] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          id="logo-link"
          aria-label="Chatha Foundation Home"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#0F3D2E] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-semibold text-xl tracking-tight text-[#16221B]">
            Chatha <span className="font-light text-[#526258]">Foundation</span>
          </span>
        </a>

        {/* Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
          <button
            onClick={() => scrollToSection('causes')}
            className="text-[14px] font-medium text-[#46534B] hover:text-[#0F3D2E] transition-colors cursor-pointer"
            id="nav-causes"
          >
            Causes
          </button>
          <button
            onClick={() => scrollToSection('story')}
            className="text-[14px] font-medium text-[#46534B] hover:text-[#0F3D2E] transition-colors cursor-pointer"
            id="nav-our-work"
          >
            Our Work
          </button>
          <button
            onClick={() => scrollToSection('impact')}
            className="text-[14px] font-medium text-[#46534B] hover:text-[#0F3D2E] transition-colors cursor-pointer"
            id="nav-impact"
          >
            Impact
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[14px] font-medium text-[#46534B] hover:text-[#0F3D2E] transition-colors cursor-pointer"
            id="nav-about"
          >
            About
          </button>
        </nav>

        {/* Single Primary CTA */}
        <div className="flex items-center gap-4">
          <button
            id="header-donate-btn"
            onClick={onOpenDonate}
            className="px-5 py-2.5 rounded-full bg-[#0F3D2E] text-[#FBFBF9] text-[13px] font-semibold tracking-wider hover:bg-[#0A2C21] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(15,61,46,0.18)] cursor-pointer whitespace-nowrap"
          >
            DONATE NOW
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#37453E] hover:text-[#0F3D2E] focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown"
          className="md:hidden bg-[#FBFBF9] border-b border-[#E8E5DC] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <button
            onClick={() => scrollToSection('causes')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C3831]"
          >
            Causes
          </button>
          <button
            onClick={() => scrollToSection('story')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C3831]"
          >
            Our Work
          </button>
          <button
            onClick={() => scrollToSection('impact')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C3831]"
          >
            Impact
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C3831]"
          >
            About
          </button>
        </div>
      )}
    </header>
  );
};
