import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS_DATA } from '../../data/blog';
import { BlogPost } from '../../types';
import { formatDate } from '../../lib/utils';
import { Search, BookOpen, ArrowUpRight, Clock, Tag } from 'lucide-react';

interface BlogSectionProps {
  navigate: (path: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Data Science', 'Creative Dev', 'Database Systems'];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS_DATA.find((p) => p.featured) || BLOG_POSTS_DATA[0];

  return (
    <section id="blog" className="py-24 sm:py-32 relative bg-[#09090B] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E25822]">
              Technical Writing &amp; Publications
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              INSIGHTS &amp; ARCHITECTURAL ESSAYS
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays &amp; topics..."
              className="w-full pl-9 pr-4 py-2 bg-white/[0.03] border border-white/[0.08] focus:border-[#E25822] rounded-xl text-xs font-mono text-[#F4F4F6] placeholder-[#71717A] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-x-auto w-fit mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-[#E25822] text-white shadow-sm font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F6] hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Spotlight */}
        {!searchQuery && selectedCategory === 'All' && (
          <div
            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
            className="group cursor-pointer mb-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#18181F] via-[#121216] to-[#09090B] border border-white/[0.08] hover:border-[#E25822]/50 transition-all duration-300 space-y-6"
          >
            <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
              <span className="text-[#E25822] font-semibold uppercase tracking-wider">
                Featured Editorial
              </span>
              <span className="text-white/20">·</span>
              <span>{formatDate(featuredPost.publishedAt)}</span>
              <span className="text-white/20">·</span>
              <span>{featuredPost.readTime}</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F4F4F6] group-hover:text-[#E25822] transition-colors leading-tight">
              {featuredPost.title}
            </h3>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-3xl leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                {featuredPost.tags.map((t, idx) => (
                  <React.Fragment key={t}>
                    <span>{t}</span>
                    {idx < featuredPost.tags.length - 1 && <span className="text-white/20">·</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E25822] group-hover:translate-x-1 transition-transform">
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="group cursor-pointer p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#E25822]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#A1A1AA]">
                  <span className="text-[#E25822]">{post.category}</span>
                  <div className="flex items-center gap-1 text-[#71717A]">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-[#F4F4F6] group-hover:text-[#E25822] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="text-[#E25822] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="font-mono text-sm text-[#A1A1AA]">
              No articles found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-mono text-[#E25822] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
