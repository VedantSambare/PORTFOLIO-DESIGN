import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Brain, Code2, Database, Cpu, Compass, Sparkles, ChevronDown } from 'lucide-react';

interface AboutSectionProps {
  navigate: (path: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'philosophy' | 'stack'>('bio');
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { value: '2+', label: 'Years Rigorous ML & DS' },
    { value: '10+', label: 'Engineered Systems' },
    { value: '100%', label: 'Commitment to Precision' },
    { value: '94%+', label: 'Top Model Accuracy' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#09090B] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              About Vedant Sambare
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] mt-2 tracking-tight">
              ENGINEERING AT THE NEXUS OF DATA &amp; DESIGN
            </h2>
          </div>
          <div className="text-xs font-mono text-[#A1A1AA]">
            <span>LOCATION: PUNE, INDIA</span>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Profile / Abstract Geometry */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#18181F] to-[#121216] border border-white/[0.08] overflow-hidden flex flex-col justify-between p-8 group">
              {/* Subtle background ambient mesh */}
              <div className="absolute inset-0 bg-radial-gradient from-[#E25822]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Decorative Geometric Wireframe in Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-[#E25822]/30 animate-spin-slow pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#F59E0B]/20 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#E25822] tracking-wider uppercase">
                  Profile Dossier
                </span>
                <span className="text-xs font-mono text-[#71717A] tabular-nums">
                  VS-2026
                </span>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl text-[#F4F4F6]">
                    Vedant Sambare
                  </h3>
                  <p className="text-xs font-mono text-[#A1A1AA]">
                    Computer Engineering · Pune, India
                  </p>
                </div>

                <p className="text-xs text-[#A1A1AA] leading-relaxed border-t border-white/[0.08] pt-3">
                  "Driven by algorithmic curiosity. I believe data is not just numbers in a table—it is the raw material for intelligent intuition."
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono text-emerald-400">
                    Open for high-impact roles &amp; engineering contracts
                  </span>
                </div>
              </div>
            </div>

            {/* Quantitative Rigor Stats Bento */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E25822]/30 transition-colors"
                >
                  <div className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F6] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-[#A1A1AA] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Bio, Tabs, and Deep Narrative */}
          <div className="lg:col-span-7 space-y-8">
            {/* Interactive Tab Switcher (Functional buttons with click handlers) */}
            <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl w-fit">
              <button
                onClick={() => setActiveTab('bio')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'bio'
                    ? 'bg-[#E25822] text-white shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                }`}
              >
                Biography
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-[#E25822] text-white shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                }`}
              >
                Engineering Philosophy
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'stack'
                    ? 'bg-[#E25822] text-white shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                }`}
              >
                Focus Areas
              </button>
            </div>

            {/* Dynamic Content Pane */}
            <div className="min-h-[260px]">
              {activeTab === 'bio' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5 text-sm sm:text-base text-[#A1A1AA] leading-relaxed"
                >
                  <p>
                    I am a Computer Engineer and Data Scientist based in Pune, India, graduating in 2026. My work bridges the gap between deep mathematical machine learning algorithms and immersive, responsive full-stack software architectures.
                  </p>
                  <p>
                    From building complex predictive pipelines using <span className="text-[#EDEDED] font-medium">Scikit-learn, Pandas, XGBoost, and SHAP</span> to crafting 60 FPS 3D spatial interfaces with <span className="text-[#EDEDED] font-medium">Three.js, Next.js, and TypeScript</span>, I focus on systems that are both analytically powerful and aesthetically captivating.
                  </p>
                  <p>
                    My background began with a Diploma in Computer Engineering (completed with First Class Distinction), giving me strong foundational roots in memory structures, C++, Java, and relational database internals.
                  </p>
                </motion.div>
              )}

              {activeTab === 'philosophy' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed"
                >
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <h4 className="font-display font-semibold text-sm text-[#F4F4F6]">
                      01. Interpretability Over Black Boxes
                    </h4>
                    <p className="text-xs text-[#A1A1AA]">
                      A machine learning model is only as valuable as the decisions it empowers. I prioritize transparent feature importance, residual analysis, and SHAP explainability.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <h4 className="font-display font-semibold text-sm text-[#F4F4F6]">
                      02. Zero-Slop Architecture
                    </h4>
                    <p className="text-xs text-[#A1A1AA]">
                      Whether designing a database schema in PostgreSQL or rendering WebGL shaders in Three.js, I enforce strict type-safety, memory cleanup routines, and clean modular code.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <h4 className="font-display font-semibold text-sm text-[#F4F4F6]">
                      03. Tactile User Empathy
                    </h4>
                    <p className="text-xs text-[#A1A1AA]">
                      Complex algorithms deserve intuitive interfaces. Every millisecond of latency saved is respect paid to the user's attention.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'stack' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-2 text-[#E25822]">
                      <Brain className="w-4 h-4" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F4F6]">
                        Predictive AI &amp; ML
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      Ensemble models, XGBoost, Scikit-learn, EDA, feature engineering, classification, and statistical regression.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-2 text-[#F59E0B]">
                      <Code2 className="w-4 h-4" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F4F6]">
                        Full Stack Web
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      Next.js, React 19, TypeScript, Node.js, Express, REST APIs, Tailwind CSS, and state machines.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <Database className="w-4 h-4" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F4F6]">
                        Database Systems
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      PostgreSQL, MySQL, SQL plan execution optimization (EXPLAIN ANALYZE), schema modeling, and indexing.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-2 text-[#E25822]">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F4F6]">
                        Creative 3D / WebGL
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      Three.js, GLSL shaders, camera choreography, PBR materials, and hardware-accelerated microinteractions.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Expandable "More About Me" Accordion */}
            <div className="border-t border-white/[0.08] pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full py-3 text-left font-mono text-xs uppercase tracking-widest text-[#F4F4F6] hover:text-[#E25822] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822] rounded"
              >
                <span>{isExpanded ? 'Hide Detailed Background' : 'More About Me — Journey & Vision'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-[#E25822]' : 'text-[#71717A]'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-4 pt-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed"
                  >
                    <p>
                      My technical curiosity took root in 2019 during my Diploma in Computer Engineering. Learning low-level memory mechanics in C++ and building multi-threaded database applications in Java established my appreciation for how software operates beneath high-level abstractions.
                    </p>
                    <p>
                      Transitioning into my B.Tech degree in Pune, I pivoted heavily toward Data Science and Machine Learning. The mathematical synergy of linear algebra, probability, and exploratory data mining captured my imagination. I realized that the greatest challenge in modern computing is not merely collecting data, but extracting signal from noise to make proactive, intelligent interventions.
                    </p>
                    <p>
                      Outside of coding and statistical modeling, I actively explore creative direction, UI/UX interaction design, and technical writing.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => navigate('/experience')}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E25822] hover:underline"
                      >
                        <span>View Experience Timeline</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => navigate('/skills')}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F6]"
                      >
                        <span>Explore Skill Matrix</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
