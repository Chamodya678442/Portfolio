import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Users,
  Compass,
  Cpu,
  Brain,
  MapPin,
  Mail,
  Award,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const stats = [
    {
      icon: GraduationCap,
      value: 'USJ',
      label: 'Computer Engineering',
      subtext: 'B.Sc. (Hons.) Undergraduate',
      color: 'from-blue-500/20 to-cyan-500/10',
      border: 'border-blue-500/30',
      iconColor: 'text-blue-400',
    },
    {
      icon: Briefcase,
      value: 'Flexaro',
      label: 'Software Engineer',
      subtext: 'Part-time Web App Development',
      color: 'from-cyan-500/20 to-teal-500/10',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Code2,
      value: '5+',
      label: 'Featured Projects',
      subtext: 'Robotics, AI Platforms & Web Systems',
      color: 'from-purple-500/20 to-indigo-500/10',
      border: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: Users,
      value: '9+',
      label: 'Leadership Roles',
      subtext: 'IEEE, IET, CSR & Creative Teams',
      color: 'from-amber-500/20 to-rose-500/10',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
  ];

  const focusAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Data',
      desc: 'Developing predictive models, multi-modal trading decision support systems, and demographic policy resonance simulators.',
    },
    {
      icon: Cpu,
      title: 'Robotics & Embedded Systems',
      desc: 'Building autonomous kinematic systems with ESP32, Arduino C++, IR sensors, and multi-DOF servo kinematics.',
    },
    {
      icon: Code2,
      title: 'Modern Full-Stack Engineering',
      desc: 'Crafting performant web architectures using React, TypeScript, Python (FastAPI/Flask), PostgreSQL, and Tailwind CSS.',
    },
    {
      icon: Compass,
      title: 'Creative Problem Solving',
      desc: 'Combining systematic engineering precision with creative flair, multidisciplinary leadership, and user empathy.',
    },
  ];

  return (
    <section id="about" aria-label="About Janodi Chamodya" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Beyond the Code
          </h2>
        </div>

        {/* Animated Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`glass-card p-6 rounded-2xl relative overflow-hidden group border ${stat.border}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-40 group-hover:opacity-70 transition-opacity`}
                />
                <div className="relative z-10 flex flex-col items-start">
                  <div className={`p-3 rounded-xl bg-slate-900/40 dark:bg-slate-900/80 mb-4 ${stat.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-Column Editorial Details: Personal Profile & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Information & University Profile Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-glow-sm">
                <img
                  src={PERSONAL_INFO.logoPath}
                  alt={`${PERSONAL_INFO.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  Engineering Undergraduate & Software Engineer
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm border-t border-slate-200 dark:border-white/10 pt-5">
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">University</div>
                  <div className="font-medium text-slate-800 dark:text-slate-200">
                    University of Sri Jayewardenepura
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    B.Sc. (Hons.) in Engineering – Computer Engineering
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase size={18} className="text-purple-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Current Industry Role</div>
                  <div className="font-medium text-slate-800 dark:text-slate-200">
                    Software Engineer at Flexaro (Part-time)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Location</div>
                  <div className="font-medium text-slate-800 dark:text-slate-200">
                    Colombo, Sri Lanka
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-sky-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Direct Contact</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Creative Balance Note */}
            <div className="mt-6 p-4 rounded-2xl bg-cyan-500/5 dark:bg-white/5 border border-cyan-500/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">Active Balance:</span> Member of the USJ Official Flair Dancing Crew (26/27), cultivating agility, rhythm, and creative energy alongside technical computing.
            </div>
          </div>

          {/* Right Column: Engineering Pillars & Interests */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span>Core Areas of Focus & Exploration</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 flex items-center justify-center mb-3">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
