import React from 'react';
import { Award, ShieldCheck, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" aria-label="Certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>CONTINUOUS LEARNING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Learning Never Stops
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Industry and university credentials strengthening software development, AI fundamentals, and leadership acumen.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Guilloche / Crest Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              <div>
                {/* Header Icon & Issuer Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 dark:text-cyan-300 flex items-center justify-center border border-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
                    <Award size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                    {cert.category}
                  </span>
                </div>

                {/* Issuer */}
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-1.5">
                  {cert.issuer}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
              </div>

              {/* Verified Certificate Footer */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck size={15} />
                  <span>{cert.badgeText || 'Verified Course'}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 italic">
                  Academic Record
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

