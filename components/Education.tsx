'use client';

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Award, Sparkles, MapPin } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const educations = portfolioData.education;

  return (
    <section id="education" className="py-24 max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="section-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">02.</span>
        <span>What I Study</span>
      </h2>

      {/* Tabs Layout */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* Left Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-navy-lightest shrink-0 scrollbar-none">
          {educations.map((edu, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={edu.id}
                onClick={() => setActiveTab(index)}
                className={`py-3 px-5 text-left font-mono text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:mb-0 md:-ml-[2px] ${isActive
                  ? 'text-green border-green bg-navy-light/40 font-medium'
                  : 'text-slate border-transparent hover:text-green hover:bg-navy-light/20'
                  }`}
              >
                {edu.id === 'uiuc' ? 'UIUC (Master\'s)' : 'SRM IST (B.Tech)'}
              </button>
            );
          })}
        </div>

        {/* Right Tab Content */}
        <div className="flex-1 min-h-[340px] p-2 sm:p-4 animate-fade-in">
          {educations[activeTab] && (
            <div className="space-y-6">
              {/* Institution and Degree */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-lightest flex flex-wrap items-center gap-2">
                  <span>{educations[activeTab].degree}</span>
                  <span className="text-green font-normal">@ {educations[activeTab].institution}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 font-mono text-xs sm:text-sm text-slate">
                  <span>{educations[activeTab].period}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-green font-medium bg-green-tint px-2.5 py-0.5 rounded border border-green/20">
                    <Award className="w-3.5 h-3.5" />
                    {educations[activeTab].gpa}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-slate-light">
                    <MapPin className="w-3.5 h-3.5" />
                    {educations[activeTab].location}
                  </span>
                </div>
              </div>

              {/* Coursework Tags */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-lightest font-medium mb-3">
                  <BookOpen className="w-4 h-4 text-green" />
                  <span>Key Graduate Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {educations[activeTab].coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1 rounded bg-navy-light border border-navy-lightest text-slate-light"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Research Breakdown (UIUC) */}
              {educations[activeTab].research && (
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-sm font-semibold text-green flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{educations[activeTab].research.title}</span>
                    <span className="text-xs text-slate font-normal">({educations[activeTab].research.mentor})</span>
                  </div>

                  <ul className="space-y-2.5 text-sm sm:text-base text-slate">
                    {educations[activeTab].research.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green text-sm mt-1 shrink-0">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Leadership & Activities (SRM IST) */}
              {educations[activeTab].leadership && (
                <div className="space-y-4 pt-2">
                  {educations[activeTab].leadership.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="font-mono text-sm font-semibold text-green flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{item.role}</span>
                        <span className="text-xs text-slate font-normal">— {item.event}</span>
                      </div>
                      <ul className="space-y-2 text-sm sm:text-base text-slate">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="text-green text-sm mt-1 shrink-0">▹</span>
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
