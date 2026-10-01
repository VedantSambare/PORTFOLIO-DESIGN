import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { HeroScene } from '../three/HeroScene';

interface HeroProps {
  navigate: (path: string) => void;
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ navigate, isDarkMode }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* 3D WebGL Interactive Scene in Background */}
      <HeroScene isDarkMode={isDarkMode} />

      {/* Subtle vignette and gradient mask for text readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#09090B]/40 to-[#09090B] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="max-w-4xl space-y-8">
          {/* Kicker label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E25822] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#E25822] animate-ping" />
            <span>HI, I'M</span>
            <span className="text-white/20">/</span>
            <span className="text-[#A1A1AA]">PUNE, MAHARASHTRA, INDIA</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F4F4F6] uppercase leading-[0.95]"
            >
              VEDANT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F6] via-[#EDEDED] to-[#A1A1AA]">
                SAMBARE
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-lg font-mono text-[#E25822] uppercase tracking-wider"
            >
              <span>DATA SCIENTIST</span>
              <span className="text-white/30">&amp;</span>
              <span>FULL STACK DEVELOPER</span>
            </motion.div>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-[#A1A1AA] max-w-2xl font-light leading-relaxed text-balance"
          >
            I turn data, ideas and technology into intelligent digital experiences.
            Specializing in predictive machine learning models, statistical architectures, and high-performance WebGL web applications.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => {
                const el = document.getElementById('featured-projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('/projects');
              }}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E25822] hover:bg-[#C94716] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-[#E25822]/20 hover:shadow-[#E25822]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => navigate('/resume')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F4F6] font-medium text-sm border border-white/[0.1] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822]"
            >
              <FileText className="w-4 h-4 text-[#F59E0B]" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.04] text-[#EDEDED] font-medium text-sm border border-white/[0.08] hover:border-white/[0.2] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822]"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
            </button>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 pt-6 border-t border-white/[0.06] text-xs font-mono text-[#A1A1AA]"
          >
            <span className="text-[#71717A]">CONNECT:</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
