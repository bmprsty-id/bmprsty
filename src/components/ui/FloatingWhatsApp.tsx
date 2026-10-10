import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button only after scrolling past hero (~300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !isVisible) return null;

  return (
    <aside 
      aria-label="WhatsApp quick contact"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <a
        href={getWhatsAppUrl("Hi BMPRSTY, saya ingin konsultasi mengenai project web.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#146BFF] hover:bg-[#0F5BE3] active:bg-[#0c4ec5] text-white text-xs font-semibold rounded-full shadow-lg shadow-[#146BFF]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        title="Chat with BMPRSTY on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
      </a>

      {/* Dismiss button to satisfy non-intrusive requirement */}
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="p-1.5 text-neutral-400 hover:text-white bg-[#080F1D]/80 hover:bg-[#080F1D] border border-white/10 rounded-full transition-colors focus:outline-none"
        aria-label="Dismiss floating chat button"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
