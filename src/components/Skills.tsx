import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Code,
  FileCode2,
  Server,
  Layout,
  Palette,
  Database,
  Layers,
  Sparkles,
  Box,
  Container,
  Cloud,
  Laptop,
  GitBranch,
  Globe,
  Search,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Technology icon mapping with distinct brand colors
const iconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  'C++': { icon: Cpu, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  Python: { icon: Terminal, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  Java: { icon: Server, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  JavaScript: { icon: Code, color: 'text-amber-300', bg: 'bg-amber-500/10 border-amber-500/20' },
  TypeScript: { icon: FileCode2, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  PHP: { icon: Server, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  HTML: { icon: Layout, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
  CSS: { icon: Palette, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  MySQL: { icon: Database, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  React: { icon: Layers, color: 'text-cyan-300', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  'Node.js': { icon: Server, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  PostgreSQL: { icon: Database, color: 'text-indigo-300', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  'Tailwind CSS': { icon: Sparkles, color: 'text-teal-300', bg: 'bg-teal-500/10 border-teal-500/20' },
  Laravel: { icon: Box, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  WordPress: { icon: Globe, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  Docker: { icon: Container, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  AWS: { icon: Cloud, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  Linux: { icon: Laptop, color: 'text-yellow-300', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  Git: { icon: GitBranch, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'languages' | 'frameworks' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allSkills = SKILL_CATEGORIES.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryTitle: category.title,
      categoryId: category.id,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" aria-label="Technical Skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>ENGINEERING STACK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            My Technical Toolkit
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Core technologies and engineering frameworks applied across academic and commercial projects.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Technologies ({allSkills.length})
            </button>
            <button
              onClick={() => setSelectedCategory('languages')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'languages'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Languages (9)
            </button>
            <button
              onClick={() => setSelectedCategory('frameworks')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'frameworks'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Frameworks & Dev (6)
            </button>
            <button
              onClick={() => setSelectedCategory('tools')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'tools'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Infrastructure & Tools (4)
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill) => {
            const iconConfig = iconMap[skill.name] || {
              icon: Code2,
              color: 'text-cyan-400',
              bg: 'bg-cyan-500/10 border-cyan-500/20',
            };
            const Icon = iconConfig.icon;

            return (
              <div
                key={skill.name}
                className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 group flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Tech Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 border ${iconConfig.bg}`}
                >
                  <Icon size={24} className={iconConfig.color} />
                </div>

                {/* Skill Name */}
                <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1">
                  {skill.name}
                </h3>

                {/* Tag/Domain */}
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-tight">
                  {skill.tag}
                </span>

                {/* Category Micro-Pill */}
                <span className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                  {skill.categoryId}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
