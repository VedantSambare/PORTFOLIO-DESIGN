import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../../data/blog';
import { formatDate } from '../../lib/utils';
import { ArrowLeft, ArrowRight, Clock, Share2, Copy, Check, Terminal } from 'lucide-react';

interface BlogPostViewProps {
  slug: string;
  navigate: (path: string) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ slug, navigate }) => {
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug) || BLOG_POSTS_DATA[0];
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const currentIndex = BLOG_POSTS_DATA.findIndex((p) => p.slug === slug);
  const nextPost = BLOG_POSTS_DATA[(currentIndex + 1) % BLOG_POSTS_DATA.length];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <article className="min-h-screen bg-[#09090B] text-[#EDEDED] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Navigation Back */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A1A1AA] hover:text-[#E25822] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Publications</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-6 border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA]">
            <span className="text-[#E25822] font-semibold uppercase">{post.category}</span>
            <span className="text-white/20">·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#F59E0B]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-[#E25822]/20 border border-[#E25822]/40 flex items-center justify-center font-mono font-bold text-xs text-[#E25822]">
              VS
            </div>
            <div className="text-xs font-mono">
              <span className="text-[#F4F4F6] block font-semibold">Vedant Sambare</span>
              <span className="text-[#71717A]">Data Scientist &amp; Full Stack Developer</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-10 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
          {/* Intro lead */}
          <p className="text-lg sm:text-xl text-[#F4F4F6] font-normal leading-relaxed">
            {post.content.intro}
          </p>

          {/* Sections */}
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4 pt-6 border-t border-white/[0.04]">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F6]">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {section.body}
              </p>

              {section.codeSnippet && (
                <div className="my-6 rounded-xl bg-[#121216] border border-white/[0.08] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] border-b border-white/[0.06] text-xs font-mono text-[#71717A]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#E25822]" />
                      <span>{section.codeSnippet.language}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(section.codeSnippet!.code)}
                      className="hover:text-white transition-colors flex items-center gap-1"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-[#EDEDED] leading-relaxed">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#18181F] to-[#121216] border border-white/[0.08] space-y-3">
            <h3 className="font-display font-bold text-lg text-[#F4F4F6]">
              Key Takeaway
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-[#71717A]">
          <span>TOPICS:</span>
          {post.tags.map((t, idx) => (
            <span key={t} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]">
              {t}
            </span>
          ))}
        </div>

        {/* Next Post Navigation */}
        <div className="border-t border-white/[0.08] pt-12">
          <div
            onClick={() => {
              navigate(`/blog/${nextPost.slug}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-8 rounded-2xl bg-[#121216] border border-white/[0.08] hover:border-[#E25822]/40 transition-all flex items-center justify-between gap-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                Next Publication
              </span>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F6] group-hover:text-[#E25822] transition-colors mt-1">
                {nextPost.title}
              </h4>
            </div>
            <div className="p-3 rounded-full bg-white/[0.04] group-hover:bg-[#E25822] text-[#A1A1AA] group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
