import React from 'react';
import { EDUCATION_DATA } from '../../data/education';
import { GraduationCap, Award, BookOpen, Layers } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
            Academic Foundation
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F4F4F6] tracking-tight">
            FORMAL EDUCATION &amp; RESEARCH
          </h3>
        </div>
        <span className="text-xs font-mono text-[#71717A]">
          COMPUTER ENGINEERING DISCIPLINE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((edu, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#121216] to-[#0D0D11] border border-white/[0.08] hover:border-[#E25822]/40 transition-all duration-300 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-start justify-between gap-2 border-b border-white/[0.06] pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#E25822] uppercase tracking-wider block">
                    {edu.period} · {edu.location}
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F6]">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-mono text-[#A1A1AA]">
                    {edu.field} — {edu.institution}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.04] text-[#E25822]">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Honors Badge */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <Award className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span className="text-xs font-mono text-[#EDEDED]">
                  {edu.grade}
                </span>
              </div>

              {/* Coursework Modules */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#71717A]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Key Coursework &amp; Competencies:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
                  {edu.coursework.map((course, cIdx) => (
                    <React.Fragment key={course}>
                      <span>{course}</span>
                      {cIdx < edu.coursework.length - 1 && (
                        <span className="text-white/20">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Capstone Project Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#E25822] uppercase tracking-wider">
                <Layers className="w-3 h-3" />
                <span>Capstone Project:</span>
              </div>
              <h5 className="font-display font-semibold text-sm text-[#F4F4F6]">
                {edu.capstoneProject.title}
              </h5>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {edu.capstoneProject.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
