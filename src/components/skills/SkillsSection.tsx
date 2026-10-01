import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES_DATA } from '../../data/skills';
import { SkillItem } from '../../types';
import { Sparkles, Terminal, Database, LineChart, Code2, Cpu, ArrowRight } from 'lucide-react';

interface SkillsSectionProps {
  navigate?: (path: string) => void;
  showAllInitially?: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ navigate, showAllInitially = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'programming', label: 'Programming' },
    { id: 'data-science', label: 'Data Science & AI' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'analytics', label: 'Analytics & BI' },
    { id: 'development', label: 'Full Stack & 3D' },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES_DATA
      : SKILL_CATEGORIES_DATA.filter((cat) => cat.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-4 h-4 text-[#E25822]" />;
      case 'data-science':
        return <Cpu className="w-4 h-4 text-[#E25822]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#F59E0B]" />;
      case 'analytics':
        return <LineChart className="w-4 h-4 text-[#D4AF37]" />;
      case 'development':
        return <Code2 className="w-4 h-4 text-[#E25822]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#E25822]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#09090B] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              Technical Rigor &amp; Domain Expertise
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              CATEGORIZED CAPABILITY MATRIX
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-sm">
            Categorized technical capabilities backed by production engineering and mathematical rigor.
          </p>
        </div>

        {/* Filter Bar (Functional buttons with active states) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-x-auto mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#E25822] text-white shadow-sm font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F6] hover:bg-white/[0.04]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Category Grid */}
        <div className="space-y-12">
          {filteredCategories.map((group) => (
            <div key={group.id} className="space-y-6">
              {/* Category Subheader */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  {getCategoryIcon(group.id)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#F4F4F6]">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills Card Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    onClick={() => setSelectedSkill(skill)}
                    className="group cursor-pointer p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#E25822]/40 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-semibold text-base text-[#F4F4F6] group-hover:text-[#E25822] transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-[#E25822] uppercase tracking-wider shrink-0">
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                        {skill.description}
                      </p>
                    </div>

                    {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                    <div className="pt-4 mt-2 border-t border-white/[0.04] flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#71717A]">
                      {skill.tags.map((tag, tagIdx) => (
                        <React.Fragment key={tag}>
                          <span className="text-[#A1A1AA]">{tag}</span>
                          {tagIdx < skill.tags.length - 1 && (
                            <span className="text-white/20" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Data Science Pipeline Blueprint */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121216] to-[#09090B] border border-white/[0.08] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              Architectural Standard
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F4F6]">
              End-to-End Machine Learning Pipeline Framework
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
              Every data science model built by Vedant Sambare follows a reproducible 5-stage lifecycle from raw data ingestion to explainability and edge serving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Data Ingestion & Cleaning',
                desc: 'KNN imputation, outlier normalization, schema validation, and robust scaling.',
              },
              {
                step: '02',
                title: 'Feature Engineering',
                desc: 'Mutual Information, VIF collinearity pruning, interaction synthesis, and target encoding.',
              },
              {
                step: '03',
                title: 'Ensemble Modeling',
                desc: 'XGBoost, Random Forest, Stratified 5-Fold CV, and Bayesian hyperparameter tuning.',
              },
              {
                step: '04',
                title: 'SHAP Explainability',
                desc: 'Local force plots, global summary distributions, and decision boundary diagnostics.',
              },
              {
                step: '05',
                title: 'Inference & Serving',
                desc: 'FastAPI microservices, Docker containers, ONNX quantization, and low-latency APIs.',
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-[#E25822]/30 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-[#E25822]">{p.step}</div>
                <div className="font-display font-semibold text-sm text-[#F4F4F6]">{p.title}</div>
                <div className="text-[11px] text-[#A1A1AA] leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#121216] border border-white/[0.1] shadow-2xl space-y-6 text-[#A1A1AA]"
              >
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#E25822] uppercase tracking-wider">
                      {selectedSkill.level}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#F4F4F6]">
                      {selectedSkill.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-sm text-[#EDEDED] leading-relaxed">
                  {selectedSkill.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                    Key Technologies &amp; Packages:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#F4F4F6]">
                    {selectedSkill.tags.map((t, idx) => (
                      <span key={t} className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedSkill(null);
                      if (navigate) navigate('/projects');
                    }}
                    className="w-full py-3 rounded-xl bg-[#E25822] text-white font-medium text-xs font-mono uppercase tracking-wider hover:bg-[#D14A16] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Projects Utilizing This Capability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
