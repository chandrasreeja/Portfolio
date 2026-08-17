'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft, ExternalLink } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-light leading-relaxed">
          <p className="text-green font-bold mb-1">
            {portfolioData.personal.name} — Developer CLI Terminal (v2.1.0)
          </p>
          <p className="text-xs text-slate">
            Type <span className="text-green font-semibold">&apos;help&apos;</span> to see available commands or <span className="text-green font-semibold">&apos;cat resume&apos;</span> to open resume in Google Drive.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-slate-lightest font-semibold mb-2">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-light">
              <div><span className="text-green font-mono">about</span> — Bio summary &amp; background</div>
              <div><span className="text-green font-mono">education</span> — UIUC &amp; SRM IST details</div>
              <div><span className="text-green font-mono">experience</span> — ADM &amp; Barclays roles</div>
              <div><span className="text-green font-mono">projects</span> — PACT, Texus, Wildfire &amp; more</div>
              <div><span className="text-green font-mono">skills</span> — Tech stack &amp; tools</div>
              <div><span className="text-green font-mono">cat resume</span> — Open Google Drive Resume</div>
              <div><span className="text-green font-mono">contact</span> — Email, phone &amp; socials</div>
              <div><span className="text-green font-mono">sudo hire-me</span> — Candidate availability</div>
              <div><span className="text-green font-mono">clear</span> — Clear terminal window</div>
              <div><span className="text-green font-mono">exit</span> — Close CLI terminal</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-light">
            <p className="font-semibold text-green">{portfolioData.personal.name} — {portfolioData.personal.tagline}</p>
            <p>
              I&apos;m a Data Engineer and Master&apos;s Student at the University of Illinois Urbana-Champaign. Currently a Data Engineering Intern at ADM, preparing large-scale datasets for downstream analytical workflows.
            </p>
            <p>
              Previously at Barclays, building ETL pipelines, automating manual workflows, and developing credit risk analytics. Beyond work, I conduct research on large-scale public health &amp; nutrition datasets under Dr. Naiman Khan at UIUC.
            </p>
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="space-y-3 text-xs sm:text-sm">
            {portfolioData.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-green/60 pl-3">
                <div className="text-slate-lightest font-semibold">{edu.degree}</div>
                <div className="text-green">{edu.institution} ({edu.period}) • {edu.gpa}</div>
                <div className="text-slate text-xs">Coursework: {edu.coursework.join(', ')}</div>
                {edu.research && (
                  <div className="text-cyan-300 text-xs mt-1">
                    Research: {edu.research.title} ({edu.research.mentor})
                  </div>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="space-y-3 text-xs sm:text-sm">
            {portfolioData.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-green/60 pl-3">
                <div className="text-slate-lightest font-semibold flex items-center gap-1.5">
                  <span>{exp.role} @</span>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:underline inline-flex items-center gap-1"
                  >
                    <span>{exp.company}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-slate text-xs">{exp.period} • {exp.location}</div>
                <div className="text-slate-light text-xs mt-0.5">{exp.points[0]}</div>
                <div className="text-green text-[11px] font-mono mt-0.5">[{exp.technologies.join(', ')}]</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-green font-semibold">Featured &amp; Key Projects:</p>
            {portfolioData.featuredProjects.map((p) => (
              <div key={p.id} className="pl-3 border-l border-navy-lightest space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-slate-lightest font-medium">{p.title}</span>
                  <span className="text-[10px] text-green font-mono">({p.category})</span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green inline-flex items-center gap-0.5 text-[11px]"
                    >
                      [GitHub]
                    </a>
                  )}
                </div>
                <p className="text-slate text-xs">{p.description}</p>
                <div className="text-slate-light text-[11px] font-mono">Tech: {p.technologies.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs sm:text-sm">
            {portfolioData.skills.map((s, idx) => (
              <div key={idx}>
                <span className="text-green font-semibold">{s.category}:</span>{' '}
                <span className="text-slate-light">{s.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat resume':
      case 'resume':
        response = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-green font-semibold">Opening Resume in Google Drive...</p>
            <p className="text-slate text-xs">
              Direct Link:{' '}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green underline hover:text-white inline-flex items-center gap-1 font-mono font-medium"
              >
                <span>{portfolioData.personal.resumeUrl}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>
        );
        if (typeof window !== 'undefined') {
          window.open(portfolioData.personal.resumeUrl, '_blank', 'noopener,noreferrer');
        }
        break;

      case 'contact':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-light">
            <div>
              <span className="text-green font-mono">Email:</span>{' '}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-lightest hover:text-green underline"
              >
                {portfolioData.personal.email}
              </a>
            </div>
            <div>
              <span className="text-green font-mono">Phone:</span>{' '}
              <a
                href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-lightest hover:text-green underline"
              >
                {portfolioData.personal.phone}
              </a>
            </div>
            <div>
              <span className="text-green font-mono">LinkedIn:</span>{' '}
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-lightest hover:text-green underline inline-flex items-center gap-1"
              >
                <span>{portfolioData.personal.linkedin}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div>
              <span className="text-green font-mono">GitHub:</span>{' '}
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-lightest hover:text-green underline inline-flex items-center gap-1"
              >
                <span>{portfolioData.personal.github}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        );
        break;

      case 'sudo hire-me':
      case 'hire-me':
      case 'hire':
        response = (
          <div className="p-3 bg-green-tint border border-green/40 rounded text-xs sm:text-sm space-y-1 text-green">
            <p className="font-bold">✨ Access Granted! ✨</p>
            <p className="text-slate-light">
              Candidate status: Available for Full-Time Data Engineering &amp; ML roles in 2026/2027.
            </p>
            <p className="text-slate-light">
              Direct line:{' '}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-green inline-flex items-center gap-1"
              >
                <span>{portfolioData.personal.email}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
            <p className="text-slate-light pt-1">
              Resume:{' '}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-cyan-300 inline-flex items-center gap-1"
              >
                <span>Google Drive Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case '':
        response = null;
        break;

      default:
        response = (
          <div className="text-xs sm:text-sm text-red-400">
            command not found: <span className="font-mono">{cmdStr}</span>. Type <span className="text-green font-semibold">&apos;help&apos;</span> for commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-navy border border-green/40 rounded-lg shadow-2xl overflow-hidden font-mono flex flex-col h-[520px] max-h-[90vh]">
        {/* Terminal Header */}
        <div className="bg-navy-light px-4 py-3 border-b border-navy-lightest flex items-center justify-between text-xs text-slate select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green/80" />
            <span className="ml-2 text-slate-lightest font-medium flex items-center gap-1.5 text-xs">
              <TerminalIcon className="w-3.5 h-3.5 text-green" /> sreeja@portfolio: ~ (zsh)
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate hover:text-white p-1"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm font-mono scrollbar-thin"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              {item.command && (
                <div className="flex items-center gap-2 text-slate">
                  <span className="text-green">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-slate-lightest">{item.command}</span>
                </div>
              )}
              {item.output && <div>{item.output}</div>}
            </div>
          ))}

          {/* Prompt Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-green">➜</span>
            <span className="text-cyan-400">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-slate-lightest text-xs sm:text-sm font-mono placeholder:text-slate/40"
              placeholder="type 'help', 'cat resume', or 'skills'..."
              autoFocus
            />
            <button type="submit" className="text-slate hover:text-green">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer */}
        <div className="bg-navy-dark px-4 py-2 border-t border-navy-lightest text-[11px] text-slate flex items-center justify-between">
          <span>Press ESC or type &apos;exit&apos; to close</span>
          <span className="text-green">UIUC CS &bull; Ready</span>
        </div>
      </div>
    </div>
  );
};
