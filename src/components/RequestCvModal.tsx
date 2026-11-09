import React, { useState } from 'react';
import { X, Send, FileText, Check, AlertCircle, Sparkles, Building, User, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RequestCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestCvModal: React.FC<RequestCvModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work or contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Please provide your company or institution.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose a formatted CV request email
    const subject = encodeURIComponent(`[CV Request] Official Resume Inquiry - ${formData.name} (${formData.organization})`);
    const body = encodeURIComponent(
      `Hello Janodi,\n\nI would like to request your official Curriculum Vitae (CV) for review.\n\nRequester Information:\n• Full Name: ${formData.name}\n• Contact Email: ${formData.email}\n• Company / Organization: ${formData.organization}\n• Purpose / Role Details: ${formData.purpose || 'General Career Inquiry'}\n\nLooking forward to reviewing your CV.\n\nBest regards,\n${formData.name}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', organization: '', purpose: '' });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#0f1118] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-white/5 transition-colors"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-glow-sm">
            <FileText size={22} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              <Sparkles size={12} />
              <span>Verified Credentials</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Request Official CV
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          To maintain confidentiality and provide recruiters with the most up-to-date document, please submit your inquiry below to request Janodi Chamodya's complete CV.
        </p>

        {submitted ? (
          <div className="space-y-4 py-2">
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
              <Check size={20} className="shrink-0 mt-0.5 text-emerald-500" />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">
                  CV Request Draft Prepared!
                </div>
                Your pre-composed request has been directed to your email client. If it did not launch automatically, you can email Janodi directly at{' '}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono font-bold underline text-cyan-600 dark:text-cyan-400"
                >
                  {PERSONAL_INFO.email}
                </a>.
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                Your Full Name *
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border ${
                    errors.name ? 'border-rose-500' : 'border-slate-200/80 dark:border-white/10'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
                />
              </div>
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
                Your Work / Contact Email *
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border ${
                    errors.email ? 'border-rose-500' : 'border-slate-200/80 dark:border-white/10'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
                />
              </div>
              {errors.email && (
                <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1">
                  <AlertCircle size={10} />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Company / Organization */}
            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                Company / Organization *
              </label>
              <div className="relative">
                <Building size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Acme Technologies"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border ${
                    errors.organization ? 'border-rose-500' : 'border-slate-200/80 dark:border-white/10'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
                />
              </div>
              {errors.organization && (
                <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1">
                  <AlertCircle size={10} />
                  {errors.organization}
                </span>
              )}
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                Purpose / Hiring Opportunity (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Full-Stack / Software Engineering Position"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <Send size={15} />
                <span>Submit CV Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

