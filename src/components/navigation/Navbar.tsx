import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  navigate: (route: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  navigate,
  isDarkMode,
  toggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/85 dark:bg-[#09090B]/90 backdrop-blur-md border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('/')}
          className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822] rounded-md"
        >
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#F4F4F6] transition-colors group-hover:text-[#E25822]">
            VS <span className="text-[#E25822]">.</span>
          </span>
        </button>

        {/* Zone 2: 4-6 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive =
              currentRoute === item.path ||
              (item.path !== '/' && currentRoute.startsWith(item.path));

            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs uppercase tracking-widest transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822] ${
                  isActive
                    ? 'text-[#F4F4F6] font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E25822]"
                    transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('/resume')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F4F6] border border-white/[0.1] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822]"
          >
            <FileText className="w-3.5 h-3.5 text-[#E25822]" />
            <span>Resume</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-[#A1A1AA] hover:text-[#F4F4F6] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822]"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-[#F59E0B]" />
            ) : (
              <Moon className="w-4 h-4 text-[#A1A1AA]" />
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-[#EDEDED] bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E25822]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[60px] bg-[#09090B]/98 border-b border-white/[0.08] backdrop-blur-xl px-6 py-8 shadow-2xl"
          >
            <nav className="flex flex-col gap-5">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  currentRoute === item.path ||
                  (item.path !== '/' && currentRoute.startsWith(item.path));
                return (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center justify-between text-left py-2 text-base tracking-wide border-b border-white/[0.04] ${
                      isActive ? 'text-[#E25822] font-semibold' : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </motion.button>
                );
              })}

              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick('/resume')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E25822] text-white font-medium text-sm hover:bg-[#D14A16] transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Printable Resume</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
