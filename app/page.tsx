'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { SocialSidebar } from '@/components/SocialSidebar';
import { EmailSidebar } from '@/components/EmailSidebar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { TerminalModal } from '@/components/TerminalModal';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy text-slate bg-grid-pattern">
      {/* Top Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Fixed Left & Right Sidebars */}
      <SocialSidebar />
      <EmailSidebar />

      {/* Main Content Area */}
      <main className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-24 lg:px-36">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Developer CLI Terminal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
