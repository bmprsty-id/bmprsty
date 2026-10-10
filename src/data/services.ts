import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website',
    number: '01',
    title: 'WEBSITE',
    tagline: 'Clean presentation & high-converting presence',
    description: 'Landing pages, portfolio websites, and information websites.',
    deliverables: [
      'Landing pages with high visual polish',
      'Personal & academic portfolio sites',
      'Organization & campus event pages',
      'Mobile-responsive layout & fast loading'
    ]
  },
  {
    id: 'web-system',
    number: '02',
    title: 'WEB SYSTEM',
    tagline: 'Functional data-driven applications',
    description: 'CRUD, dashboards, databases, and simple information systems.',
    deliverables: [
      'Full CRUD operations (Create, Read, Update, Delete)',
      'Admin dashboards with statistics & filtering',
      'Database integration (PostgreSQL, MySQL, SQLite)',
      'Role-based access & clean data tables'
    ]
  },
  {
    id: 'development',
    number: '03',
    title: 'DEVELOPMENT',
    tagline: 'Full-stack engineering & integrations',
    description: 'Frontend, backend, API, and database integration.',
    deliverables: [
      'Modern frontend with React & Tailwind CSS',
      'REST API development & third-party endpoints',
      'Authentication & session management',
      'Clean, well-commented source code handover'
    ]
  },
  {
    id: 'fix-and-improve',
    number: '04',
    title: 'FIX & IMPROVE',
    tagline: 'Fast turnaround debugging & layout fixes',
    description: 'Bug fixing, responsive issues, and existing project improvements.',
    deliverables: [
      'Fixing responsive layout breakages on mobile',
      'Debugging JavaScript / TypeScript runtime errors',
      'Database query & state management fixes',
      'Refactoring messy college coursework code'
    ]
  },
  {
    id: 'deployment',
    number: '05',
    title: 'DEPLOYMENT',
    tagline: 'Going live without deployment headaches',
    description: 'Hosting, domain, deployment, and basic setup.',
    deliverables: [
      'Vercel, Netlify, or VPS cloud setup',
      'Custom domain configuration & SSL security',
      'Environment variables & production build verification',
      'Quick walkthrough so you can present confidently'
    ]
  }
];
