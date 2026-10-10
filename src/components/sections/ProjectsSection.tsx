import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectItem } from '../../types';
import { ProjectModal } from '../ui/ProjectModal';
import { getProjectWhatsAppUrl } from '../../lib/whatsapp';

export interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <div className="group flex flex-col justify-between bg-[#080F1D] border border-white/10 hover:border-white/25 rounded-lg overflow-hidden transition-all duration-200">
      <div>
        {/* Visual Preview */}
        <div 
          className="relative aspect-video w-full bg-[#050B14] overflow-hidden cursor-pointer"
          onClick={() => onSelectProject(project)}
        >
          <img
            src={project.previewImage}
            alt={`${project.name} preview`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
            <span className="text-[#146BFF] font-semibold tracking-wide">
              {project.badge}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          <h3 
            onClick={() => onSelectProject(project)}
            className="text-xl font-bold text-white mb-2 cursor-pointer group-hover:text-[#146BFF] transition-colors"
          >
            {project.name}
          </h3>

          <p className="text-sm text-neutral-300 mb-4 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Small, subtle badges with neutral background and white text */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {project.technology.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-neutral-800 border border-neutral-700/70 text-white shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 text-xs font-semibold">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-white hover:text-[#146BFF] transition-colors focus:outline-none focus-visible:underline"
        >
          <span>VIEW PROJECT</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>

        <a
          href={getProjectWhatsAppUrl(project.name, project.category)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#146BFF] hover:text-white transition-colors"
        >
          <span>WhatsApp Inquiry</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (activeFilter === 'demo') return p.badge === 'DEMO';
        if (activeFilter === 'concept') return p.badge === 'CONCEPT';
        if (activeFilter === 'personal') return p.badge === 'PERSONAL PROJECT';
        return true;
      });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/10 bg-[#040913]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#146BFF] mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
              RECENT BUILDS.
            </h2>
            <p className="text-sm text-neutral-300 max-w-xl">
              Real code, transparently labeled. Explore demo prototypes, personal builds, and functional web systems built from scratch.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#091222] border border-white/10 rounded-md self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                activeFilter === 'all'
                  ? 'bg-[#146BFF] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Builds ({PROJECTS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('demo')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                activeFilter === 'demo'
                  ? 'bg-[#146BFF] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Demos
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('concept')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                activeFilter === 'concept'
                  ? 'bg-[#146BFF] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Concepts
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('personal')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                activeFilter === 'personal'
                  ? 'bg-[#146BFF] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Personal
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
