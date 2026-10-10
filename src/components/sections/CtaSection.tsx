import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../../lib/whatsapp';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#03060C] border-t border-white/10 relative overflow-hidden">
      {/* Background glow behind CTA */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#146BFF]/15 blur-[120px] rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#091528] border border-[#146BFF]/30 text-xs font-mono text-[#146BFF] mb-6">
          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>DIRECT DEVELOPER INQUIRY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 text-balance">
          HAVE A WEB PROJECT IN MIND?
        </h2>

        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed text-pretty">
          Tell me what you&apos;re trying to build. No long proposals or corporate back-and-forth — just direct talk with the developer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("Hi BMPRSTY, saya ingin konsultasi mengenai project web.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#146BFF] hover:bg-[#0F5BE3] active:bg-[#0c4ec5] rounded-md transition-all shadow-xl shadow-[#146BFF]/25 hover:shadow-[#146BFF]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>CHAT VIA WHATSAPP</span>
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 text-xs text-neutral-400 font-mono">
          <span>WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
          <span className="mx-2">·</span>
          <span>Fast replies during working hours</span>
        </div>
      </div>
    </section>
  );
};
