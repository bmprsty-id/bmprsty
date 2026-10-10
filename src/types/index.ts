export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export type ProjectBadge = 'DEMO' | 'CONCEPT' | 'PERSONAL PROJECT';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  badge: ProjectBadge;
  shortDescription: string;
  fullDescription: string;
  technology: string[];
  previewImage: string;
  highlights: string[];
  targetAudienceNote?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}
