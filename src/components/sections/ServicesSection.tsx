import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { getServiceWhatsAppUrl } from '../../lib/whatsapp';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/10 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#146BFF] mb-2">
            Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            WHAT I CAN HELP YOU BUILD.
          </h2>
          <p className="text-base text-neutral-300">
            Whether you need a full university assignment completed, a CRUD dashboard for your final project, or quick bug fixes before your deadline.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isMarquee = index === 1; // Highlight WEB SYSTEM as common student need
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between p-7 rounded-lg border transition-all duration-200 ${
                  isMarquee
                    ? 'bg-[#091528] border-[#146BFF]/40 shadow-lg shadow-[#146BFF]/10'
                    : 'bg-[#080F1D] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Clean Editorial Numbering (no mechanical slashes) */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-semibold text-[#146BFF]">
                      {service.number}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <ul className="space-y-2 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#146BFF] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Service WhatsApp Action */}
                <div className="pt-5 border-t border-white/10">
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#146BFF] hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    <span>Discuss {service.title} on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
