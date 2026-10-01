import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { formatTimeInPune } from '../../lib/utils';

interface FooterProps {
  navigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const [copied, setCopied] = useState(false);
  const [puneTime, setPuneTime] = useState<string>('');

  useEffect(() => {
    setPuneTime(formatTimeInPune());
    const timer = setInterval(() => {
      setPuneTime(formatTimeInPune());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vedantsambare1999@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09090B] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-[#A1A1AA]">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#E25822]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Main Brand & Vision Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F4F6] tracking-tight">
                VEDANT SAMBARE
              </h2>
              <p className="text-sm font-mono tracking-wider text-[#E25822] uppercase">
                Data Scientist & Full Stack Developer
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md leading-relaxed">
              Engineering high-accuracy predictive intelligence systems and immersive digital experiences at the intersection of data, algorithms, and creative technology.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-2">
              <div className="flex items-center gap-1.5 text-[#EDEDED]">
                <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5 text-[#EDEDED]">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="tabular-nums">{puneTime || 'IST Live'}</span>
              </div>
            </div>
          </div>

          {/* Direct CTA & Contact Box */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#EDEDED]">
              Direct Inquiries
            </h3>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Open for Machine Learning, Data Science roles, high-impact consulting, and full-stack engineering collaborations.
            </p>

            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="group flex items-center justify-between gap-3 w-full p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all text-xs font-mono text-[#F4F4F6]"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#E25822] shrink-0" />
                  <span className="truncate">vedantsambare1999@gmail.com</span>
                </div>
                <div className="shrink-0 p-1 rounded bg-white/[0.05] text-[#A1A1AA] group-hover:text-white transition-colors">
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>
              {copied && (
                <p className="text-[11px] font-mono text-emerald-400 mt-1.5 pl-1 animate-fade-in">
                  Email copied to clipboard!
                </p>
              )}
            </div>
          </div>

          {/* Quick Index */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#EDEDED]">
              Navigation Index
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Skills', path: '/skills' },
                { label: 'Experience', path: '/experience' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
                { label: 'Resume', path: '/resume' },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="hover:text-[#F4F4F6] transition-colors py-1 flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E25822]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vedantsambare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F4F4F6] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#E25822]" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/vedantsambare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F4F4F6] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#E25822]" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:vedantsambare1999@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#F4F4F6] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E25822]" />
              <span>Email</span>
            </a>
          </div>

          <p className="text-[#71717A] text-center sm:text-right">
            © {new Date().getFullYear()} Vedant Sambare · Crafted with Next.js, Three.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
