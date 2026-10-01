import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_TIMELINE } from '../../data/experience';
import { EducationSection } from '../education/EducationSection';
import { GraduationCap, Briefcase, Cpu, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getIconForType = (type: string) => {
    switch (type) {
      case 'ai-ml':
        return <Cpu className="w-4 h-4 text-[#E25822]" />;
      case 'engineering':
        return <Briefcase className="w-4 h-4 text-[#F59E0B]" />;
      case 'education':
      default:
        return <GraduationCap className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#09090B] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              Milestone Progression
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              JOURNEY &amp; CHRONOLOGY
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-sm">
            From foundational C++ systems to modern predictive machine learning and high-performance WebGL architectures.
          </p>
        </div>

        {/* Cinematic Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/[0.1] space-y-16 max-w-4xl">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#121216] border-2 border-[#E25822] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E25822]" />
              </div>

              {/* Milestone Content Box */}
              <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E25822]/30 transition-all duration-300">
                {/* Year Badge & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-xl sm:text-2xl text-[#E25822] tabular-nums">
                      {item.year}
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F4F4F6]">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
                    {getIconForType(item.type)}
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-[#F4F4F6]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#E25822]">
                    {item.institutionOrRole}
                  </p>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="pt-3 border-t border-white/[0.04] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] block">
                    Key Outcomes &amp; Milestones:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#EDEDED]">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E25822] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section Embedding */}
        <div className="mt-28">
          <EducationSection />
        </div>
      </div>
    </section>
  );
};
