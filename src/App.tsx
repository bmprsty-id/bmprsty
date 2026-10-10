/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { ContactSection } from './components/sections/ContactSection';
import { CtaSection } from './components/sections/CtaSection';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export default function App() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-white selection:bg-[#146BFF] selection:text-white flex flex-col font-sans">
      {/* Sticky top navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECTION 01 — HERO */}
        <HeroSection onViewProjects={scrollToProjects} />

        {/* SECTION 02 — SERVICES */}
        <ServicesSection />

        {/* SECTION 03 — PROJECTS */}
        <ProjectsSection />

        {/* SECTION 04 — HOW IT WORKS */}
        <HowItWorksSection />

        {/* SECTION 05 — CONTACT & CONSULTATION */}
        <ContactSection />

        {/* SECTION 06 — CTA */}
        <CtaSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Non-intrusive floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
}
