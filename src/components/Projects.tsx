import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle,
  TrendingUp,
  Cpu,
  Brain,
  Gamepad2,
  Activity,
  Maximize2,
  X,
  Code2,
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

// Custom futuristic visual artwork component for projects without direct static image files
const ProjectVisualArtwork: React.FC<{ project: Project }> = ({ project }) => {
  if (project.image) {
    return (
      <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-2xl bg-slate-900 group-hover:shadow-glow-sm transition-all">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>
    );
  }

  // Multi-Modal AI Trading Platform Visual
  if (project.id === 'trading-ai-system') {
    return (
      <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-[#0c1222] to-[#0a1829] p-5 flex flex-col justify-between border border-cyan-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-emerald-400" />
            <span className="font-mono text-xs font-bold text-white tracking-wider">BTC / USDT ML ENGINE</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            BUY SIGNAL (CONFIDENCE 89%)
          </span>
        </div>

        {/* Financial Visual Chart Simulation */}
        <div className="my-auto w-full h-24 flex items-end justify-between gap-1 pt-4">
          {[42, 55, 48, 62, 58, 75, 71, 84, 79, 92, 88, 104, 98, 118, 112, 130].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
              <div
                className="w-full rounded-t bg-gradient-to-t from-cyan-600/60 to-cyan-400 transition-all duration-300 group-hover/bar:bg-cyan-300"
                style={{ height: `${(val / 140) * 80}px` }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-2">
          <span>Binance Stream: Active</span>
          <span>FastAPI Microservice: 18ms</span>
        </div>
      </div>
    );
  }

  // RaawaAI Visual
  if (project.id === 'raawa-ai') {
    return (
      <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-[#180d2b] to-[#120824] p-5 flex flex-col justify-between border border-purple-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain size={18} className="text-purple-400" />
            <span className="font-mono text-xs font-bold text-white tracking-wider">RAAWAAI SIMULATOR</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
            MULTI-AGENT DEMOGRAPHICS
          </span>
        </div>

        <div className="my-auto grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-center">
            <div className="text-lg font-mono font-bold text-purple-300">12.4%</div>
            <div className="text-[10px] text-slate-400 font-mono">Backlash Prob</div>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-center">
            <div className="text-lg font-mono font-bold text-cyan-300">+78%</div>
            <div className="text-[10px] text-slate-400 font-mono">Resonance Index</div>
          </div>
          <div className="p-2.5 rounded-xl bg-pink-950/40 border border-pink-500/20 text-center">
            <div className="text-lg font-mono font-bold text-pink-300">5k+</div>
            <div className="text-[10px] text-slate-400 font-mono">Simulated Personas</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-2">
          <span>Regional Heatmap: Realtime</span>
          <span>AWS DynamoDB Sync</span>
        </div>
      </div>
    );
  }

  // OREGO Hospital Visual
  return (
    <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-[#0d1d2b] to-[#071724] p-5 flex flex-col justify-between border border-teal-500/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={18} className="text-teal-400" />
          <span className="font-mono text-xs font-bold text-white tracking-wider">OREGO.LK CLINICAL HUB</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30">
          JWT SECURED
        </span>
      </div>

      <div className="my-auto space-y-2">
        <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/20 flex items-center justify-between">
          <span className="text-xs text-slate-300 font-mono">Bed Occupancy Rate</span>
          <span className="text-xs font-mono font-bold text-teal-300">84% [Managed]</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between">
          <span className="text-xs text-slate-300 font-mono">Appointments Today</span>
          <span className="text-xs font-mono font-bold text-cyan-300">128 Scheduled</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-2">
        <span>Flask + PostgreSQL</span>
        <span>Role-Based Dashboards</span>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'AI & Data', 'Robotics & Embedded', 'Full-Stack', 'Game Dev'];

  const filteredProjects =
    filterCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" aria-label="Featured Projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Things I've Built
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Engineering architectures spanning autonomous robotics, predictive AI systems, and scalable full-stack applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden flex flex-col group"
            >
              {/* Visual Preview Header */}
              <div className="p-4 sm:p-5 pb-0">
                <ProjectVisualArtwork project={project} />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Meta Category & Status Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 font-semibold">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.year && (
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.year}
                      </span>
                    )}
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                        project.status === 'Ongoing'
                          ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                          : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {project.subtitle && (
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                    {project.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <Maximize2 size={14} />
                    <span>View Specifications</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 italic">
                        Verified Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Specification Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-[#0f1118] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-white/5 transition-colors"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-4 pr-8">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                {activeModalProject.category} • {activeModalProject.status}
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Visual Direction / Architecture */}
            <div className="mb-6 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs">
              <span className="font-semibold text-cyan-600 dark:text-cyan-400 uppercase font-mono tracking-wider block mb-1">
                Visual & System Direction
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {activeModalProject.visualDirection}
              </p>
            </div>

            {/* Core Features */}
            {activeModalProject.features && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                  Core Architectural Capabilities
                </h4>
                <div className="space-y-2">
                  {activeModalProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle size={15} className="text-cyan-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="text-xs font-mono text-slate-400">
                {activeModalProject.year || activeModalProject.period || 'Academic & Applied'}
              </div>
              <div className="flex items-center gap-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub Profile</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
