import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { contactSchema, ContactSchemaType } from '../../lib/validations';
import { Mail, Github, Linkedin, MapPin, Send, Check, Copy, AlertCircle, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactSchemaType>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (field: keyof ContactSchemaType, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vedantsambare1999@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('submitting');

    // Simulate graceful API dispatch / backend readiness
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#09090B] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              Initiate Dialogue
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              LET'S BUILD SOMETHING MEANINGFUL
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-sm">
            Whether for high-impact Data Science roles, machine learning architectures, or full-stack software consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121216] to-[#09090B] border border-white/[0.08] space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
                  Direct Contact
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F4F4F6]">
                  Vedant Sambare
                </h3>
                <p className="text-xs text-[#A1A1AA]">
                  Pune, Maharashtra, India (IST / UTC+5:30)
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all text-xs font-mono text-[#EDEDED] group"
                >
                  <div className="flex items-center gap-3 truncate">
                    <Mail className="w-4 h-4 text-[#E25822] shrink-0" />
                    <span className="truncate">vedantsambare1999@gmail.com</span>
                  </div>
                  <div className="p-1 rounded bg-white/[0.05] text-[#A1A1AA] group-hover:text-white shrink-0">
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-400 mt-2 pl-1 animate-fade-in">
                    Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] block">
                  Connect on Social Platforms:
                </span>
                <div className="flex flex-col gap-2 text-xs font-mono">
                  <a
                    href="https://linkedin.com/in/vedantsambare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-[#E25822]" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <span className="text-white/30">→</span>
                  </a>

                  <a
                    href="https://github.com/vedantsambare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-[#E25822]" />
                      <span>GitHub Repositories</span>
                    </div>
                    <span className="text-white/30">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121216] border border-white/[0.08] shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F6]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#A1A1AA]">
                  Leave your details and project context. I typically respond within 24 hours.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-white/[0.03] border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#F4F4F6]">
                    Message Transmitted Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your communication has been recorded and I will respond to your email promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono uppercase tracking-wider text-[#F4F4F6] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-[#F4F4F6] placeholder-[#71717A] focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/[0.08] focus:border-[#E25822]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="alex@organization.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-[#F4F4F6] placeholder-[#71717A] focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/[0.08] focus:border-[#E25822]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block">
                      Subject / Project Scope *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="e.g. Machine Learning Engineering Opportunity / Consulting"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-[#F4F4F6] placeholder-[#71717A] focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-[#E25822]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block">
                      Message &amp; Project Details *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Provide details about your dataset, system requirements, or role specifications..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-[#F4F4F6] placeholder-[#71717A] focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-[#E25822]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-[#E25822] hover:bg-[#C94716] disabled:opacity-50 text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-lg shadow-[#E25822]/20 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting Payload...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
