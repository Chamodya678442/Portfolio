import React, { useState } from 'react';
import {
  Users,
  Award,
  Calendar,
  Sparkles,
  HeartHandshake,
  Compass,
  DollarSign,
  Music,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { LEADERSHIP_ROLES } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Leadership', 'Executive', 'Community', 'Finance', 'Creative'];

  const filteredRoles =
    activeCategory === 'All'
      ? LEADERSHIP_ROLES
      : LEADERSHIP_ROLES.filter((r) => r.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Leadership':
        return <Award size={16} className="text-amber-400" />;
      case 'Executive':
        return <Compass size={16} className="text-cyan-400" />;
      case 'Finance':
        return <DollarSign size={16} className="text-emerald-400" />;
      case 'Creative':
        return <Music size={16} className="text-pink-400" />;
      default:
        return <Users size={16} className="text-indigo-400" />;
    }
  };

  return (
    <section id="leadership" aria-label="Leadership & Volunteering" className="py-24 relative overflow-hidden bg-slate-900/10 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>ORGANIZATIONAL IMPACT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Leadership Beyond Technology
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Guiding initiatives, coordinating large-scale symposiums and fostering student empowerment across IEEE, IET and community outreach.
          </p>
        </div>

        {/* Featured CSR Highlight Card with Verified Image (Compact & Balanced Height) */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden mb-10 relative group hover:border-cyan-500/40 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Visual Photo (Controlled Height) */}
            <div className="md:col-span-5 relative h-48 sm:h-52 md:h-56 overflow-hidden bg-slate-900">
              <img
                src="/images/Projects/Nenasara Sisila.jpeg"
                alt="Nenasara Sisila CSR Project led by Janodi Chamodya"
                className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/70" />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] flex items-center gap-1.5">
                <HeartHandshake size={12} className="text-rose-400" />
                <span>Featured Community Project</span>
              </div>
            </div>

            {/* Content info */}
            <div className="md:col-span-7 p-4 sm:p-5 md:p-6">
              <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mb-1">
                <span>February 2026 – April 2026</span>
                <span>•</span>
                <span>Community CSR</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Project Head – Nenasara Sisila CSR Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
                Spearheaded project planning, stakeholder engagement, team logistics, and on-ground execution to deliver educational and resource support for underprivileged school communities.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  Project Leadership
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  Team Coordination
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  Resource Mobilization
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRoles.map((role, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    {getCategoryIcon(role.category)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{role.period}</span>
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                  {role.organization}
                </div>

                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  {role.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {role.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                  {role.category}
                </span>
                <span className="text-xs text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                  <span>Verified</span>
                  <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

