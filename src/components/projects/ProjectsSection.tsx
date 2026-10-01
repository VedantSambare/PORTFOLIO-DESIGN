import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectCaseStudy, ProjectCategory } from '../../types';
import { Project3DCanvas } from '../three/Project3DCanvas';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  navigate: (path: string) => void;
  featuredOnly?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  navigate,
  featuredOnly = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Data Science & AI', 'Full Stack', 'Creative 3D'];

  const displayedProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesFeatured = featuredOnly ? project.featured : true;
    return matchesCategory && matchesFeatured;
  });

  const getThemeColorForCategory = (cat: ProjectCategory) => {
    switch (cat) {
      case 'Data Science & AI':
        return '#E25822';
      case 'Full Stack':
        return '#F59E0B';
      case 'Creative 3D':
        return '#D4AF37';
      default:
        return '#E25822';
    }
  };

  return (
    <section id="featured-projects" className="py-24 sm:py-32 relative bg-[#09090B] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              Selected Works &amp; Architecture
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              FEATURED ENGINEERING SYSTEMS
            </h2>
          </div>

          {/* Interactive Filter Tabs (Functional buttons with active/inactive states) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-[#E25822] text-white shadow-sm font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F6] hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid / Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => {
            const themeColor = getThemeColorForCategory(project.category);

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                data-cursor="project"
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="group relative rounded-2xl bg-gradient-to-br from-[#141419] to-[#0D0D11] border border-white/[0.08] hover:border-[#E25822]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer p-6 sm:p-8"
              >
                {/* Ambient Radial Hover Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#E25822]/[0.06] rounded-full blur-3xl pointer-events-none group-hover:bg-[#E25822]/[0.12] transition-colors duration-500" />

                {/* Top Row: Category unboxed metadata & Year */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#A1A1AA] relative z-10 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E25822] font-semibold">{project.category}</span>
                    <span className="text-white/20">·</span>
                    <span>{project.period}</span>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#71717A]">
                    {project.role}
                  </span>
                </div>

                {/* Center 3D Interactive Spatial Preview */}
                <div className="my-6 relative z-10 h-52 sm:h-60 rounded-xl bg-black/40 border border-white/[0.04] overflow-hidden flex items-center justify-center group-hover:border-[#E25822]/30 transition-colors">
                  <Project3DCanvas category={project.category} themeColor={themeColor} />
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#71717A] bg-[#09090B]/80 px-2 py-1 rounded border border-white/[0.06] backdrop-blur-sm pointer-events-none">
                    3D Spatial Model
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4 relative z-10">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-2xl text-[#F4F4F6] group-hover:text-[#E25822] transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-[#E25822] -translate-x-2 group-hover:translate-x-0" />
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Quantitative Metric Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                      >
                        <div className="font-mono font-bold text-xs text-[#F4F4F6] tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-mono text-[#71717A] truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies (Clean unboxed with typographic separators) */}
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {tIdx < 3 && <span className="text-white/20">·</span>}
                        </React.Fragment>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[#71717A]">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* External Quick Actions */}
                    <div
                      className="flex items-center gap-3 relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All CTA if featuredOnly */}
        {featuredOnly && (
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                navigate('/projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F4F6] font-medium text-xs font-mono uppercase tracking-wider border border-white/[0.1] transition-all"
            >
              <span>Explore All {PROJECTS_DATA.length} Projects &amp; Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-[#E25822]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
