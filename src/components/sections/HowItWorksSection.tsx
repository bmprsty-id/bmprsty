import React from 'react';
import { MessageSquare, FileText, Code2, Rocket, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'TELL ME THE PROJECT',
      description: "Tell me what you need or what problem you're facing.",
      detail: "Send over your assignment prompt, feature wishlist, or existing codebase via WhatsApp.",
      icon: MessageSquare
    },
    {
      number: '02',
      title: 'DISCUSS & PLAN',
      description: 'Define the requirements, scope, and solution.',
      detail: 'We agree on the tech stack, timeline deadline, and fixed friendly cost before writing code.',
      icon: FileText
    },
    {
      number: '03',
      title: 'BUILD',
      description: 'The project is developed.',
      detail: 'Iterative implementation with regular progress updates so you always know the exact status.',
      icon: Code2
    },
    {
      number: '04',
      title: 'DELIVER',
      description: 'Testing, deployment, and handover.',
      detail: 'Full code handover, database setup, live hosting link, and clear walkthrough for presentation.',
      icon: Rocket
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-white/10 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#146BFF] mb-2">
            Process
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            HOW IT WORKS.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Straightforward 4-step workflow designed to take the stress out of tight assignment deadlines and technical hurdles.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 rounded-lg bg-[#080F1D] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[#146BFF]">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400" aria-hidden="true" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-medium mb-3 leading-relaxed">
                    {step.description}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <span className="text-[11px] font-mono text-neutral-400">
                    Step {step.number} of 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 p-6 rounded-lg bg-[#091528] border border-[#146BFF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white mb-1">
              Have an urgent submission or assignment due soon?
            </h4>
            <p className="text-xs text-neutral-300">
              Message me directly on WhatsApp with your task details and deadline.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hi BMPRSTY, saya ada tugas / project web yang butuh dikerjakan.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#146BFF] hover:bg-[#0F5BE3] rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            <span>Start Step 01 on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
