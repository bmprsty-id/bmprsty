import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'nova-coffee',
    name: 'NOVA COFFEE',
    category: 'Coffee Shop Website',
    badge: 'DEMO',
    shortDescription: 'Modern specialty bean showcase with tactile typography, interactive menu filtering, and mobile-first order routing.',
    fullDescription: 'A demonstration website for a contemporary artisan coffee brand. Built with a focus on editorial layout, smooth micro-interactions, responsive typography, and direct WhatsApp ordering flow.',
    technology: ['Next.js', 'React', 'Tailwind CSS', 'Responsive UI'],
    previewImage: '/src/assets/images/nova_coffee_preview_1790608973802.jpg',
    highlights: [
      'Interactive catalog with filterable drink & bean categories',
      'Direct order dispatch via formatted WhatsApp messages',
      'Ultra-fast loading speed with zero layout shift'
    ],
    targetAudienceNote: 'Ideal blueprint for campus cafes, student business showcases, and modern retail concepts.'
  },
  {
    id: 'acad-portal',
    name: 'PORTAL AKADEMIK (SISFO)',
    category: 'Academic CRUD & Dashboard',
    badge: 'CONCEPT',
    shortDescription: 'Student information system featuring student data management, course enrollments, grade calculations, and tabular exports.',
    fullDescription: 'A full-stack information system prototype designed for university coursework requirements. Provides role-based permissions, search, pagination, bulk operations, and relational database schema integration.',
    technology: ['TypeScript', 'Express API', 'PostgreSQL', 'Tailwind UI'],
    previewImage: '/src/assets/images/academic_crud_preview_1790608986611.jpg',
    highlights: [
      'Clean CRUD table with search, sorting, and pagination',
      'Relational tables for Courses, Lecturers, and Students',
      'Grade calculation logic and summary dashboard metrics'
    ],
    targetAudienceNote: 'Built as an exact match for Final Year Projects (Tugas Akhir / Skripsi) and campus informatics assignments.'
  },
  {
    id: 'campus-events',
    name: 'CAMPUS TIX & WORKSHOP',
    category: 'Event Registration System',
    badge: 'DEMO',
    shortDescription: 'Student organization event ticketing platform with seat quotas, QR pass preview, and real-time registration verification.',
    fullDescription: 'A practical event portal created for university student clubs (BEM / Himpunan). Features automated quota tracking, attendee check-in lists, and instant confirmation dispatch.',
    technology: ['React', 'REST API', 'Tailwind CSS', 'Vite'],
    previewImage: '/src/assets/images/campus_event_preview_1790608998705.jpg',
    highlights: [
      'Participant registration form with input validation',
      'Live attendee counter & quota management',
      'Mobile-optimized participant ticket pass'
    ],
    targetAudienceNote: 'Frequently built for student councils, campus seminars, workshops, and student festivals.'
  },
  {
    id: 'portfolio-creator',
    name: 'MINIMAL DEV PORTFOLIO',
    category: 'Personal Portfolio',
    badge: 'PERSONAL PROJECT',
    shortDescription: 'High-contrast portfolio template for developers and student designers with clean typography and zero visual bloat.',
    fullDescription: 'A focused, distraction-free developer portfolio designed to present code samples, live project demos, and direct contact options to recruiters and freelance clients.',
    technology: ['TypeScript', 'Tailwind CSS', 'Semantic HTML', 'SEO Ready'],
    previewImage: '/src/assets/images/portfolio_creator_preview_1790609016606.jpg',
    highlights: [
      '100/100 Google Lighthouse performance score',
      'Semantic structure with OpenGraph & Schema.org metadata',
      'Integrated CV download and direct chat links'
    ],
    targetAudienceNote: 'Tailored for students applying for internships, junior developer roles, and freelance gigs.'
  }
];
