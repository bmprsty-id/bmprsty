import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

interface HeroSectionProps {
  onViewProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewProjects }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient light */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#146BFF]/10 blur-[130px] rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-wider uppercase text-[#146BFF]">
            <span className="w-2 h-2 rounded-full bg-[#146BFF] animate-pulse" aria-hidden="true" />
            <span>BMPRSTY — Web Developer & Digital Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 text-balance">
            NEED HELP<br />
            WITH YOUR<br />
            <span className="text-[#146BFF]">WEB PROJECT?</span>
          </h1>

          {/* Supporting copy */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-10 max-w-2xl text-pretty">
            Website, web applications, frontend, backend, debugging, and deployment — built from scratch.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#146BFF] hover:bg-[#0F5BE3] active:bg-[#0c4ec5] rounded-md transition-colors shadow-lg shadow-[#146BFF]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>CHAT ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onViewProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#146BFF]"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Quiet Trust Points: strictly unboxed text with typographic separators */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-neutral-400">
            <span className="inline-flex items-center gap-1.5 text-neutral-300">
              <Zap className="w-3.5 h-3.5 text-[#146BFF]" aria-hidden="true" />
              <span>Independent Developer</span>
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#146BFF]" aria-hidden="true" />
              <span>Direct WhatsApp Communication</span>
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#146BFF]" aria-hidden="true" />
              <span>Student & Coursework Friendly</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
