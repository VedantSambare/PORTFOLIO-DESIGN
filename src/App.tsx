import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { CaseStudyView } from './components/projects/CaseStudyView';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { BlogSection } from './components/blog/BlogSection';
import { BlogPostView } from './components/blog/BlogPostView';
import { ContactSection } from './components/contact/ContactSection';
import { ResumeView } from './components/resume/ResumeView';
import { CustomCursor } from './components/ui/CustomCursor';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Initialize Route from window.location
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname || '/';
      setCurrentRoute(path);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Sync theme with HTML class
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (isDarkMode) {
      htmlEl.classList.add('dark');
      htmlEl.classList.remove('light-theme');
    } else {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light-theme');
    }
  }, [isDarkMode]);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Router Dispatcher
  const renderRouteContent = () => {
    if (currentRoute.startsWith('/projects/')) {
      const slug = currentRoute.replace('/projects/', '');
      return <CaseStudyView slug={slug} navigate={navigate} />;
    }

    if (currentRoute.startsWith('/blog/')) {
      const slug = currentRoute.replace('/blog/', '');
      return <BlogPostView slug={slug} navigate={navigate} />;
    }

    switch (currentRoute) {
      case '/about':
        return (
          <div className="pt-16">
            <AboutSection navigate={navigate} />
          </div>
        );
      case '/projects':
        return (
          <div className="pt-16">
            <ProjectsSection navigate={navigate} featuredOnly={false} />
          </div>
        );
      case '/skills':
        return (
          <div className="pt-16">
            <SkillsSection navigate={navigate} showAllInitially={true} />
          </div>
        );
      case '/experience':
        return (
          <div className="pt-16">
            <ExperienceSection />
          </div>
        );
      case '/blog':
        return (
          <div className="pt-16">
            <BlogSection navigate={navigate} />
          </div>
        );
      case '/contact':
        return (
          <div className="pt-16">
            <ContactSection />
          </div>
        );
      case '/resume':
        return <ResumeView navigate={navigate} />;
      case '/':
      default:
        return (
          <main>
            <Hero navigate={navigate} isDarkMode={isDarkMode} />
            <AboutSection navigate={navigate} />
            <SkillsSection navigate={navigate} />
            <ProjectsSection navigate={navigate} featuredOnly={true} />
            <ExperienceSection />
            <BlogSection navigate={navigate} />
            <ContactSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#E25822] selection:text-white">
      {/* Custom Fluid Cursor */}
      <CustomCursor />

      {/* Fixed 3-Zone Navigation */}
      <Navbar
        currentRoute={currentRoute}
        navigate={navigate}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <div className="flex-1">{renderRouteContent()}</div>

      {/* Editorial Footer (hidden only on dedicated resume view) */}
      {currentRoute !== '/resume' && <Footer navigate={navigate} />}
    </div>
  );
}
