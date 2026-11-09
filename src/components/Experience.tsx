import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Building2, Terminal } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" aria-label="Professional Experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>CAREER PATH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Experience That Builds Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Real-world software engineering exposure delivering functional, robust web solutions.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 dark:border-cyan-500/40 py-2">
            {/* Timeline Pulsing Node */}
            <div className="absolute -left-[11px] top-4 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Experience Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
                    <Building2 size={14} />
                    <span>{EXPERIENCE.company}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span>{EXPERIENCE.type}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    {EXPERIENCE.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono font-medium self-start sm:self-auto border border-cyan-500/30">
                  <Calendar size={13} />
                  <span>{EXPERIENCE.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal size={13} className="text-cyan-400" />
                  <span>Key Responsibilities</span>
                </div>
                {EXPERIENCE.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-cyan-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>

              {/* Applied Skills Badges */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                {EXPERIENCE.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

