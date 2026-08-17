'use client';

import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const SocialSidebar: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.personal.github,
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: portfolioData.personal.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: `mailto:${portfolioData.personal.email}`,
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: 'Phone',
      url: `tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`,
      icon: <Phone className="w-5 h-5" />,
    },
  ];

  return (
    <aside
      className="hidden md:flex fixed left-6 lg:left-10 bottom-0 z-40 flex-col items-center gap-6 text-slate"
      aria-label="Social Links Sidebar"
    >
      <div className="flex flex-col items-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-200 p-1"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="w-[1px] h-24 bg-slate/40" />
    </aside>
  );
};
