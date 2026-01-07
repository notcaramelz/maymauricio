import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CompanyLogosSection } from './components/CompanyLogosSection';
import { ServicesSection } from './components/ServicesSection';

import  ProjectsSection  from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
// import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-purple-50">
      <Header />
      <main className="w-full">
        <HeroSection />
       
        <AboutSection />
        <CompanyLogosSection />
        <ServicesSection />
        
       
        <ExperienceSection />
         { <ProjectsSection />  }
        {/* <SkillsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
