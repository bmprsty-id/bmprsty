import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#050B14]/90 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="text-xl font-bold tracking-tight text-white hover:text-[#146BFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#146BFF]"
          >
            BMPRSTY
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="hover:text-white transition-colors focus:outline-none focus-visible:text-white"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="hover:text-white transition-colors focus:outline-none focus-visible:text-white"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="hover:text-white transition-colors focus:outline-none focus-visible:text-white"
            >
              Projects
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, 'how-it-works')}
              className="hover:text-white transition-colors focus:outline-none focus-visible:text-white"
            >
              How It Works
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hover:text-white transition-colors focus:outline-none focus-visible:text-white"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#146BFF] hover:bg-[#0F5BE3] active:bg-[#0c4ec5] rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#146BFF] rounded-md"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050B14] border-b border-white/10 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-300 pt-2 pb-4">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="hover:text-white py-1 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="hover:text-white py-1 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="hover:text-white py-1 transition-colors"
            >
              Projects
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, 'how-it-works')}
              className="hover:text-white py-1 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hover:text-white py-1 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 border-t border-white/10">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#146BFF] hover:bg-[#0F5BE3] rounded-md transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
