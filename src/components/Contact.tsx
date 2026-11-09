import React, { useState } from 'react';
import {
  Mail,
  Send,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  AlertCircle,
  MessageSquare,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons/BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onRequestCv?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestCv }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedDraft, setSubmittedDraft] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Create a pre-filled mailto URI to launch user's default email client reliably
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Janodi,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmittedDraft(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" aria-label="Contact Section" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative Glow */}
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Let's Build Something Meaningful
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Have an exciting opportunity, project idea, or collaboration in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact & Recruiter Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 relative group hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 p-1"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Email Address
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white hover:text-cyan-500 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Request Official CV Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 relative group hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <FileText size={20} />
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-semibold">
                  Official Resume
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Curriculum Vitae
              </div>
              <button
                type="button"
                onClick={onRequestCv}
                className="group/btn inline-flex items-center gap-1.5 font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-left"
              >
                <span>Request Official CV (PDF)</span>
                <ArrowUpRight size={16} className="text-cyan-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Social Channels: LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon size={22} className="text-blue-500 group-hover:scale-110 transition-transform" />
                  <ExternalLink size={14} className="text-slate-400" />
                </div>
                <div>
                  <div className="font-display font-semibold text-xs text-slate-900 dark:text-white">
                    LinkedIn
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    janodi-chamodya
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon size={22} className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <ExternalLink size={14} className="text-slate-400" />
                </div>
                <div>
                  <div className="font-display font-semibold text-xs text-slate-900 dark:text-white">
                    GitHub
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Chamodya678442
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
              <MessageSquare size={18} className="text-cyan-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Fill in your details to initiate an email conversation directly.
            </p>

            {submittedDraft && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs leading-relaxed flex items-start gap-2.5">
                <Check size={18} className="shrink-0 mt-0.5 text-emerald-500" />
                <div>
                  <div className="font-semibold mb-0.5">Email Draft Formatted!</div>
                  Your message has been transferred to your mail client. If it did not open automatically, you can send it directly to{' '}
                  <span className="font-mono font-bold underline">{PERSONAL_INFO.email}</span>.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-200/80 dark:border-white/10'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle size={10} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@organization.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border ${
                      errors.email ? 'border-rose-500' : 'border-slate-200/80 dark:border-white/10'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle size={10} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Opportunity / Project Collaboration"
                  className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border ${
                    errors.subject ? 'border-rose-500' : 'border-slate-200/80 dark:border-white/10'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
                />
                {errors.subject && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={10} />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your project, engineering team, or opportunity..."
                  className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border ${
                    errors.message ? 'border-rose-500' : 'border-slate-200/80 dark:border-white/10'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={10} />
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Send size={15} />
                <span>Format & Launch Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
