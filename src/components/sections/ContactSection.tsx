import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Send, Check } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../../lib/whatsapp';

export const ContactSection: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('Tugas Akhir / Skripsi');
  const [timeline, setTimeline] = useState<string>('1–2 Minggu');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const projectTypes = [
    'Tugas Akhir / Skripsi',
    'Tugas Kuliah / CRUD',
    'Landing Page / Portfolio',
    'Bug Fixing / Error',
    'Deployment / Hosting'
  ];

  const timelines = [
    'Urgent (< 3 Hari)',
    '1–2 Minggu',
    'Bulan Depan / Fleksibel'
  ];

  const buildMessage = () => {
    let msg = `Hi BMPRSTY, saya ingin konsultasi mengenai project web.\n\n`;
    msg += `• Kategori: ${projectType}\n`;
    msg += `• Target Deadline: ${timeline}\n`;
    if (notes.trim()) {
      msg += `• Detail Singkat: ${notes.trim()}\n`;
    }
    msg += `\nMohon info estimasi dan ketersediaan waktu pengerjaan. Terima kasih!`;
    return msg;
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl(buildMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/10 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#146BFF]">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              LET&apos;S TALK ABOUT YOUR PROJECT.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Have a question about what stack to use, whether a feature is feasible, or how quickly it can be built?
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 font-medium">WhatsApp:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white hover:text-[#146BFF] transition-colors"
                >
                  {WHATSAPP_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 font-medium">Developer:</span>
                <span className="text-white">BMPRSTY (Independent)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 font-medium">Location:</span>
                <span className="text-white">Indonesia (GMT+7)</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#080F1D] border border-white/10 text-xs text-neutral-300 space-y-2">
              <p className="font-semibold text-white">Student-friendly guidelines:</p>
              <ul className="space-y-1 text-neutral-400 list-disc list-inside">
                <li>Feel free to send screenshots of error consoles or assignment PDFs.</li>
                <li>No complicated consultation jargon.</li>
                <li>Zero obligation to proceed if the scope doesn&apos;t fit your budget.</li>
              </ul>
            </div>
          </div>

          {/* Right interactive consultation planner */}
          <div className="lg:col-span-7 bg-[#080F1D] border border-white/10 rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-[#146BFF]">
              <MessageSquare className="w-4 h-4" />
              <span>QUICK WHATSAPP MESSAGE BUILDER</span>
            </div>

            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  1. Project Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                        projectType === type
                          ? 'bg-[#146BFF] text-white shadow-sm'
                          : 'bg-[#050B14] text-neutral-300 hover:text-white border border-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  2. Target Deadline
                </label>
                <div className="flex flex-wrap gap-2">
                  {timelines.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setTimeline(time)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                        timeline === time
                          ? 'bg-[#146BFF] text-white shadow-sm'
                          : 'bg-[#050B14] text-neutral-300 hover:text-white border border-white/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes Input */}
              <div>
                <label htmlFor="notes-input" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  3. Details or Specific Requirements (Optional)
                </label>
                <textarea
                  id="notes-input"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Butuh web CRUD mahasiswa pakai database PostgreSQL, ada fitur export ke Excel atau PDF..."
                  className="w-full px-3.5 py-2.5 bg-[#050B14] border border-white/10 rounded-md text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#146BFF] transition-colors resize-none"
                />
              </div>

              {/* Preview Message Box */}
              <div className="p-3.5 rounded bg-[#050B14] border border-white/5">
                <div className="flex items-center justify-between mb-1.5 text-[11px] font-mono text-neutral-400">
                  <span>PREVIEW WHATSAPP MESSAGE:</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {copied ? 'Copied!' : 'Copy Text'}
                  </button>
                </div>
                <p className="text-xs font-mono text-neutral-300 whitespace-pre-line leading-relaxed">
                  {buildMessage()}
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#146BFF] hover:bg-[#0F5BE3] rounded-md transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>SEND TO WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <span className="text-xs text-neutral-400">
                  Opens directly in WhatsApp app or web.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
