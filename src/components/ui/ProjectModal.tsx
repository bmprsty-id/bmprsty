import React, { useEffect } from 'react';
import { X, ArrowUpRight, Check, Code2 } from 'lucide-react';
import { ProjectItem } from '../../types';
import { getProjectWhatsAppUrl } from '../../lib/whatsapp';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#080F1D] border border-white/15 rounded-lg shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#146BFF]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Preview with resilient fallback */}
        <div className="relative aspect-video w-full bg-[#050B14] overflow-hidden border-b border-white/10">
          <img
            src={project.previewImage}
            alt={`${project.name} preview`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Resilient fallback container if image fails
              const target = e.currentTarget;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080F1D] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Metadata (Zero-pill discipline: unboxed text with · separator) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-[#146BFF] font-semibold">{project.badge}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          <div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#146BFF]" />
              <span>Technology Used</span>
            </h4>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium rounded bg-[#050B14] border border-white/10 text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Key Capabilities
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-[#146BFF] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note on suitability */}
          {project.targetAudienceNote && (
            <div className="p-4 rounded bg-[#050B14] border border-white/10 text-xs text-neutral-300">
              <span className="font-semibold text-white">Student Context: </span>
              {project.targetAudienceNote}
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Need a similar system for your assignment or thesis?
            </span>
            <a
              href={getProjectWhatsAppUrl(project.name, project.category)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#146BFF] hover:bg-[#0F5BE3] rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>DISCUSS THIS BUILD ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
