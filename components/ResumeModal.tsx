'use client';

import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="w-full max-w-4xl bg-navy-light border border-navy-lightest rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto">
        {/* Header Bar */}
        <div className="bg-navy px-6 py-4 border-b border-navy-lightest flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-slate-lightest">
              Resume Preview
            </span>
            <span className="text-xs font-mono bg-green-tint text-green px-2.5 py-0.5 rounded border border-green/30">
              Chandra Sreeja Chinigepalli
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Chandra_Sreeja_Resume.pdf"
              className="btn-primary py-1.5 px-4 text-xs font-mono"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="p-2 text-slate hover:text-green rounded border border-navy-lightest transition-colors"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate hover:text-white rounded border border-navy-lightest transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-navy text-slate leading-relaxed font-sans text-sm sm:text-base">
          {/* Header Info */}
          <div className="text-center border-b border-navy-lightest pb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-lightest mb-2">
              {portfolioData.personal.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-mono text-slate-light">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-green" /> {portfolioData.personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-green" /> {portfolioData.personal.email}
              </span>
              <span>•</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:underline flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/chandrasreeja
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-green" /> United States
              </span>
            </div>
          </div>

          {/* 01. Professional Summary */}
          <div>
            <h2 className="text-lg font-bold text-slate-lightest font-mono border-b border-navy-lightest pb-2 mb-3 flex items-center gap-2">
              <span className="text-green">01.</span> Professional Summary
            </h2>
            <p className="text-slate leading-relaxed text-sm sm:text-base">
              Master’s student at the University of Illinois Urbana-Champaign with 2+ years of experience in data engineering, analytics, &amp; process automation at Barclays. Skilled in developing scalable data solutions and automating manual workflows to improve efficiency and reliability. Experienced in website design &amp; development, with a strong interest in applying technical &amp; analytical skills to research-driven projects &amp; real-world problem solving.
            </p>
          </div>

          {/* 02. Education */}
          <div>
            <h2 className="text-lg font-bold text-slate-lightest font-mono border-b border-navy-lightest pb-2 mb-3 flex items-center gap-2">
              <span className="text-green">02.</span> Education
            </h2>
            <div className="space-y-6">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-base sm:text-lg font-bold text-slate-lightest">
                      {edu.institution}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-green">{edu.period}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-slate-light text-sm">
                    <span>{edu.degree}</span>
                    <span className="font-mono font-semibold text-green">{edu.gpa}</span>
                  </div>

                  <div className="text-slate text-xs sm:text-sm">
                    <span className="text-slate-lightest font-medium">Coursework: </span>
                    {edu.coursework.join(', ')}
                  </div>

                  {edu.research && (
                    <div className="pt-2">
                      <div className="font-medium text-green text-sm mb-1">
                        {edu.research.title} ({edu.research.mentor})
                      </div>
                      <ul className="space-y-1 text-slate text-xs sm:text-sm pl-3">
                        {edu.research.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-green mt-1">▹</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.leadership && (
                    <div className="pt-2">
                      {edu.leadership.map((lead, lIdx) => (
                        <div key={lIdx} className="mb-2">
                          <div className="font-medium text-green text-sm">
                            {lead.role} — {lead.event}
                          </div>
                          <ul className="space-y-1 text-slate text-xs sm:text-sm pl-3">
                            {lead.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-green mt-1">▹</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 03. Work Experience */}
          <div>
            <h2 className="text-lg font-bold text-slate-lightest font-mono border-b border-navy-lightest pb-2 mb-3 flex items-center gap-2">
              <span className="text-green">03.</span> Work Experience
            </h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-base sm:text-lg font-bold text-slate-lightest">
                      {exp.role} <span className="text-green font-normal">@ {exp.company}</span>
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-slate-light">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 text-slate text-xs sm:text-sm pl-3">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-green mt-1">▹</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 04. Featured Projects */}
          <div>
            <h2 className="text-lg font-bold text-slate-lightest font-mono border-b border-navy-lightest pb-2 mb-3 flex items-center gap-2">
              <span className="text-green">04.</span> Key Projects
            </h2>
            <div className="space-y-4">
              {portfolioData.featuredProjects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="font-bold text-slate-lightest text-sm sm:text-base">
                    {proj.title} <span className="text-xs font-normal text-slate">({proj.category})</span>
                  </div>
                  <p className="text-slate text-xs sm:text-sm">{proj.description}</p>
                  <div className="text-xs font-mono text-green">
                    Tech: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 05. Technical Skills */}
          <div>
            <h2 className="text-lg font-bold text-slate-lightest font-mono border-b border-navy-lightest pb-2 mb-3 flex items-center gap-2">
              <span className="text-green">05.</span> Technical Skills Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {portfolioData.skills.map((s, idx) => (
                <div key={idx} className="p-3 rounded bg-navy-light border border-navy-lightest">
                  <span className="font-bold text-slate-lightest block mb-1">{s.category}:</span>
                  <span className="text-slate-light font-mono text-xs">{s.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
