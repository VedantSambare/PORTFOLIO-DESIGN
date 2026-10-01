import React from 'react';
import { Download, Printer, ArrowLeft, Mail, MapPin, Github, Linkedin, CheckCircle2, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/education';
import { EXPERIENCE_TIMELINE } from '../../data/experience';
import { PROJECTS_DATA } from '../../data/projects';
import { SKILL_CATEGORIES_DATA } from '../../data/skills';

interface ResumeViewProps {
  navigate: (path: string) => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ navigate }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#EDEDED] pt-28 pb-24 print:bg-white print:text-black print:pt-4 print:pb-4">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        {/* Navigation & Print Actions (Hidden in Print) */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A1A1AA] hover:text-[#E25822] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F4F6] font-mono text-xs uppercase tracking-wider border border-white/[0.1] transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Print Resume</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E25822] hover:bg-[#C94716] text-white font-mono text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E25822]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Semantic Resume Document Container */}
        <div className="print-page bg-[#121216] print:bg-white border border-white/[0.08] print:border-none rounded-2xl p-8 sm:p-12 space-y-10 shadow-2xl print:shadow-none text-[#EDEDED] print:text-black">
          {/* Header */}
          <header className="space-y-4 border-b border-white/[0.08] print:border-gray-300 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl print:text-3xl text-[#F4F4F6] print:text-black uppercase tracking-tight">
                  VEDANT SAMBARE
                </h1>
                <p className="text-sm font-mono text-[#E25822] print:text-black font-semibold mt-1">
                  Data Scientist &amp; Full Stack Developer
                </p>
              </div>

              <div className="space-y-1 text-xs font-mono text-[#A1A1AA] print:text-gray-700 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E25822] print:text-black shrink-0" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#E25822] print:text-black shrink-0" />
                  <span>vedantsambare1999@gmail.com</span>
                </div>
                <div className="flex items-center sm:justify-end gap-3 pt-1">
                  <span className="text-[#E25822] print:text-black">github.com/vedantsambare</span>
                  <span className="text-white/20 print:text-gray-400">·</span>
                  <span className="text-[#E25822] print:text-black">linkedin.com/in/vedantsambare</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1AA] print:text-gray-800 leading-relaxed pt-2">
              Graduating Computer Engineer specializing in end-to-end Machine Learning pipelines, exploratory data science, statistical analysis, and reactive full-stack web applications. Experienced in designing ensemble predictive architectures (Scikit-Learn, XGBoost, SHAP), relational database schema tuning (PostgreSQL, MySQL), and 60 FPS WebGL 3D user interfaces (Three.js, Next.js).
            </p>
          </header>

          {/* Education */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.06] print:border-gray-300 pb-2">
              <GraduationCap className="w-4 h-4 text-[#E25822] print:text-black" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F4F4F6] print:text-black">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-sm text-[#F4F4F6] print:text-black">
                      {edu.degree} in {edu.field}
                    </span>
                    <span className="font-mono text-[#A1A1AA] print:text-gray-600">
                      {edu.period} | {edu.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[#A1A1AA] print:text-gray-700 font-mono">
                    <span>{edu.institution}</span>
                    <span className="text-[#E25822] print:text-black font-semibold">{edu.grade}</span>
                  </div>
                  <p className="text-[#71717A] print:text-gray-600 pt-1">
                    <strong>Core Competencies:</strong> {edu.coursework.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Matrix */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.06] print:border-gray-300 pb-2">
              <Code2 className="w-4 h-4 text-[#E25822] print:text-black" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F4F4F6] print:text-black">
                Technical Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {SKILL_CATEGORIES_DATA.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <span className="text-[#E25822] print:text-black font-bold uppercase block">
                    {cat.title}:
                  </span>
                  <p className="text-[#A1A1AA] print:text-gray-700 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Engineering Projects */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.06] print:border-gray-300 pb-2">
              <Briefcase className="w-4 h-4 text-[#E25822] print:text-black" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F4F4F6] print:text-black">
                Featured Projects &amp; Systems
              </h2>
            </div>

            <div className="space-y-6">
              {PROJECTS_DATA.slice(0, 4).map((project, idx) => (
                <div key={idx} className="space-y-2 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-sm text-[#F4F4F6] print:text-black">
                      {project.title}
                    </span>
                    <span className="font-mono text-[#A1A1AA] print:text-gray-600">
                      {project.period}
                    </span>
                  </div>

                  <p className="font-mono text-[#E25822] print:text-gray-800 text-[11px]">
                    <strong>Stack:</strong> {project.technologies.join(', ')}
                  </p>

                  <p className="text-[#A1A1AA] print:text-gray-800 leading-relaxed">
                    {project.summary}
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-[#71717A] print:text-gray-700 pl-1">
                    {project.resultsAndImpact.map((res, rIdx) => (
                      <li key={rIdx}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Key Achievements & Honors */}
          <section className="space-y-4 border-t border-white/[0.06] print:border-gray-300 pt-6">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F59E0B] print:text-black" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F4F4F6] print:text-black">
                Honors &amp; Recognitions
              </h2>
            </div>

            <ul className="space-y-2 text-xs text-[#A1A1AA] print:text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-[#E25822] print:text-black">✓</span>
                <span>Graduated Diploma in Computer Engineering with First Class with Distinction (Top 5% Cohort).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E25822] print:text-black">✓</span>
                <span>Maintained superior 94%+ predictive accuracy across multiple machine learning benchmarks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E25822] print:text-black">✓</span>
                <span>Author of comprehensive technical guides on SHAP explainability &amp; WebGL optimization.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
