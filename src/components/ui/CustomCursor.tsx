import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'project' | 'hidden'>('default');
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const linkEl = target.closest('a, button, [role="button"], input, textarea, select');

      if (projectEl) {
        setCursorVariant('project');
        setCursorText('VIEW');
      } else if (linkEl) {
        setCursorVariant('link');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setCursorVariant('hidden');
    const handleMouseEnter = () => setCursorVariant('default');

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouch || cursorVariant === 'hidden') return null;

  const variants: Record<string, any> = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#E25822',
      border: 'none',
      transition: { type: 'spring', damping: 28, stiffness: 450, mass: 0.2 },
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(226, 88, 34, 0.15)',
      border: '1px solid rgba(226, 88, 34, 0.6)',
      backdropFilter: 'blur(2px)',
      transition: { type: 'spring', damping: 25, stiffness: 350, mass: 0.3 },
    },
    project: {
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      width: 76,
      height: 76,
      backgroundColor: '#E25822',
      border: 'none',
      transition: { type: 'spring', damping: 22, stiffness: 300, mass: 0.4 },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center text-[10px] font-bold text-white tracking-widest uppercase shadow-lg select-none"
      animate={cursorVariant}
      variants={variants}
      initial="default"
    >
      {cursorText && (
        <span className="font-mono tracking-wider">{cursorText}</span>
      )}
    </motion.div>
  );
};
