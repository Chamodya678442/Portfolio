import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Sparkles, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" aria-label="Academic Education" className="py-24 relative overflow-hidden bg-slate-900/10 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>FOUNDATIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Academic Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Rigorous engineering fundamentals coupled with data management and business leadership.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-purple-500">
          {EDUCATION_LIST.map((item, index) => (
            <div key={index} className="relative pl-12 sm:pl-16 group">
              {/* Timeline Pin Indicator */}
              <div className="absolute left-1.5 sm:left-4.5 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-glow-sm group-hover:scale-110 group-hover:border-white transition-all">
                <GraduationCap size={12} className="text-cyan-400" />
              </div>

              {/* Education Content Card */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide uppercase">
                      {item.institution}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 self-start shrink-0">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Badges / Metrics (GPA / Minor / Z-score) */}
                {(item.gpa || item.minor || item.zScore) && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {item.minor && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-medium">
                        <BookOpen size={13} />
                        <span>Minor: {item.minor}</span>
                      </div>
                    )}
                    {item.zScore && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono font-semibold">
                        <Award size={13} />
                        <span>Z-Score: {item.zScore}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Exam Subject Results (for A/L) */}
                {item.results && item.results.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                      Examination Results
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {item.results.map((res, i) => (
                        <div
                          key={i}
                          className="px-3 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/5 flex items-center justify-between"
                        >
                          <span className="text-xs text-slate-600 dark:text-slate-300 truncate mr-2">
                            {res.subject}
                          </span>
                          <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                            {res.grade}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Highlights */}
                {item.details && item.details.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

