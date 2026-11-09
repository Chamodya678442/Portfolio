import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { InteractiveCursorElement } from './components/InteractiveCursorElement';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { EducationSection } from './components/Education';
import { SkillsSection } from './components/Skills';
import { ProjectsSection } from './components/Projects';
import { LeadershipSection } from './components/Leadership';
import { CertificationsSection } from './components/Certifications';
import { AITwinSection } from './components/AITwin';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { RequestCvModal } from './components/RequestCvModal';

export const App: React.FC = () => {
  // Theme state: dark mode as default, persisted in localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('janodi_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Respect system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('janodi_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('janodi_theme', 'light');
    }
  }, [darkMode]);

  // Section observer to update active section in navbar
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'experience',
      'education',
      'skills',
      'projects',
      'leadership',
      'certifications',
      'ai-twin',
      'contact',
    ];

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Premium Interactive Spotlight Hover Effect Coordinator
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement | null)?.closest('.glass-card') as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#07080c] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Modern Header Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        onRequestCv={() => setIsCvModalOpen(true)}
      />

      {/* Signature Left-Side Cursor Reactive Experience */}
      <InteractiveCursorElement />

      {/* Main Portfolio Content Flow */}
      <main id="main-content">
        <Hero onRequestCv={() => setIsCvModalOpen(true)} />
        <About />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <LeadershipSection />
        <CertificationsSection />
        <AITwinSection />
        <ContactSection onRequestCv={() => setIsCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Request CV Modal */}
      <RequestCvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
};

export default App;
