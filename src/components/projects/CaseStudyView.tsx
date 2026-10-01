import React from 'react';
import { motion } from 'motion/react';
import { ProjectCaseStudy } from '../../types';
import { PROJECTS_DATA } from '../../data/projects';
import { Project3DCanvas } from '../three/Project3DCanvas';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, Activity, Cpu } from 'lucide-react';

interface CaseStudyViewProps {
  slug: string;
  navigate: (path: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ slug, navigate }) => {
  const project = PROJECTS_DATA.find((p) => p.slug === slug) || PROJECTS_DATA[0];

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <div className="min-h-screen bg-[#09090B] text-[#EDEDED] pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Back Button */}
        <div>
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A1A1AA] hover:text-[#E25822] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>
        </div>

        {/* Case Study Header */}
        <div className="space-y-6 border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A1A1AA]">
            <span className="text-[#E25822] font-semibold">{project.category}</span>
            <span className="text-white/20">/</span>
            <span>{project.period}</span>
            <span className="text-white/20">/</span>
            <span>Role: {project.role}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-[#F4F4F6] tracking-tight uppercase leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#A1A1AA] max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F4F6] font-mono text-xs uppercase tracking-wider border border-white/[0.1] transition-all"
              >
                <Github className="w-4 h-4 text-[#E25822]" />
                <span>View Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E25822] hover:bg-[#C94716] text-white font-mono text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E25822]/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}
          </div>
        </div>

        {/* 3D Spatial Hero Canvas */}
        <div className="h-72 sm:h-96 rounded-2xl bg-gradient-to-br from-[#141419] to-[#09090B] border border-white/[0.08] relative overflow-hidden flex items-center justify-center p-8">
          <Project3DCanvas category={project.category} themeColor="#E25822" />
          <div className="absolute top-4 left-4 text-xs font-mono text-[#E25822] uppercase tracking-wider">
            Interactive 3D Geometry Representation
          </div>
        </div>

        {/* Executive Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#F4F4F6] tabular-nums">
                {m.value}
              </div>
              <div className="text-xs font-mono text-[#A1A1AA]">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Problem & Objective Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-[#E25822]">
              <AlertTriangle className="w-4 h-4" />
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F4F4F6]">
                The Problem
              </h2>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-[#F59E0B]">
              <Lightbulb className="w-4 h-4" />
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F4F4F6]">
                The Objective
              </h2>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* Research & Exploratory Analysis */}
        <div className="space-y-4 border-t border-white/[0.06] pt-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
            Exploratory Analysis
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F4F6]">
            Research, Data Diagnostics &amp; Hypotheses
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            {project.researchAndAnalysis}
          </p>
        </div>

        {/* Solution Architecture & Pipeline Stages */}
        <div className="space-y-8 border-t border-white/[0.06] pt-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              System Architecture
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F4F6]">
              End-to-End Pipeline Engineering
            </h2>
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
              {project.solutionArchitecture.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.solutionArchitecture.pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3"
              >
                <h3 className="font-display font-semibold text-base text-[#F4F4F6]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-6 border-t border-white/[0.06] pt-12">
          <h2 className="font-display font-bold text-2xl text-[#F4F4F6]">
            Core Capabilities &amp; System Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#EDEDED]">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Challenges & Solutions */}
        <div className="space-y-6 border-t border-white/[0.06] pt-12">
          <h2 className="font-display font-bold text-2xl text-[#F4F4F6]">
            Technical Challenges &amp; Resolution
          </h2>
          <div className="space-y-4">
            {project.challengesAndSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121216] border border-white/[0.08] space-y-3"
              >
                <div className="flex items-center gap-2 text-[#E25822] text-xs font-mono uppercase tracking-wider">
                  <span>Challenge {idx + 1}</span>
                </div>
                <p className="text-sm text-[#F4F4F6] font-medium">
                  {item.challenge}
                </p>
                <div className="pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  <strong className="text-[#F59E0B] font-mono uppercase text-xs block mb-1">
                    Engineered Solution:
                  </strong>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Lessons Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.06] pt-12">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-[#F4F4F6]">
              Quantitative Results &amp; Impact
            </h2>
            <ul className="space-y-2">
              {project.resultsAndImpact.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#A1A1AA]">
                  <span className="text-[#E25822] font-mono">→</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-[#F4F4F6]">
              Lessons Learned &amp; Takeaways
            </h2>
            <ul className="space-y-2">
              {project.lessonsLearned.map((les, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#A1A1AA]">
                  <span className="text-[#F59E0B] font-mono">◆</span>
                  <span>{les}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Project Nav Card */}
        <div className="border-t border-white/[0.08] pt-16">
          <div
            onClick={() => {
              navigate(`/projects/${nextProject.slug}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-8 rounded-2xl bg-gradient-to-r from-[#141419] to-[#0D0D11] border border-white/[0.08] hover:border-[#E25822]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                Next Case Study
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F4F6] group-hover:text-[#E25822] transition-colors mt-1">
                {nextProject.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 line-clamp-1">
                {nextProject.tagline}
              </p>
            </div>

            <div className="p-4 rounded-full bg-white/[0.04] group-hover:bg-[#E25822] text-[#A1A1AA] group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
