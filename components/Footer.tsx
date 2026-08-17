'use client';

import React from 'react';
import { Github, Linkedin, Mail, Phone, GitCommit } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate font-mono text-xs border-t border-navy-lightest">
      {/* Mobile Social Links */}
      <div className="flex md:hidden items-center justify-center gap-6 mb-6 text-slate">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${portfolioData.personal.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green transition-colors"
          aria-label="Phone"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      <div className="space-y-1.5 text-slate">
        <div className="pt-2 flex items-center justify-center gap-3 text-[10px] text-slate/60">
          <span className="flex items-center gap-1">
            <GitCommit className="w-3 h-3 text-green" /> Theme by Brittany Chiang
          </span>
        </div>
      </div>
    </footer>
  );
};
