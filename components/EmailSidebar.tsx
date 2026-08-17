'use client';

import React from 'react';
import portfolioData from '@/data/portfolio.json';

export const EmailSidebar: React.FC = () => {
  return (
    <aside
      className="hidden md:flex fixed right-6 lg:right-10 bottom-0 z-40 flex-col items-center gap-6 text-slate"
      aria-label="Email Sidebar"
    >
      <a
        href={`mailto:${portfolioData.personal.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs tracking-widest text-slate hover:text-green hover:-translate-y-1 transition-all duration-200 py-2 [writing-mode:vertical-rl]"
        style={{ letterSpacing: '0.15em' }}
      >
        {portfolioData.personal.email}
      </a>
      <div className="w-[1px] h-24 bg-slate/40" />
    </aside>
  );
};
