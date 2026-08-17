'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Phone } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-32 max-w-2xl mx-auto text-center">
      {/* Monospace Subtitle */}
      <p className="font-mono text-green text-sm sm:text-base mb-4">
        06. What&apos;s Next?
      </p>

      {/* Big Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-lightest tracking-tight mb-6">
        Get In Touch
      </h2>

      {/* Description */}
      <p className="text-slate text-base sm:text-lg leading-relaxed mb-10">
        I am currently seeking full-time Data Engineering, Software Engineering, and Applied ML opportunities for 2026/2027. Whether you have an opportunity to discuss or just want to connect, feel free to reach out!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href={`mailto:${portfolioData.personal.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary py-4 px-8 text-sm font-mono text-base"
        >
          <Mail className="w-4 h-4" />
          <span>Say Hello</span>
        </a>

        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="btn-secondary py-4 px-6 text-sm font-mono flex items-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green" />
              <span className="text-green">Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-light" />
              <span>Copy Email Address</span>
            </>
          )}
        </button>
      </div>

      {/* Quick Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left font-mono text-xs text-slate">
        <div className="p-4 rounded bg-navy-light border border-navy-lightest">
          <div className="text-slate-light font-bold mb-1">EMAIL</div>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-lightest hover:text-green transition-colors break-all"
          >
            {portfolioData.personal.email}
          </a>
        </div>

        <div className="p-4 rounded bg-navy-light border border-navy-lightest">
          <div className="text-slate-light font-bold mb-1">PHONE</div>
          <a
            href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-lightest hover:text-green transition-colors"
          >
            {portfolioData.personal.phone}
          </a>
        </div>

        <div className="p-4 rounded bg-navy-light border border-navy-lightest">
          <div className="text-slate-light font-bold mb-1">LOCATION</div>
          <div className="text-slate-lightest">Urbana-Champaign, IL</div>
        </div>
      </div>
    </section>
  );
};
