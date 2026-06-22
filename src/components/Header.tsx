import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenAdmission: () => void;
}

export default function Header({ theme, toggleTheme, onOpenAdmission }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          id="logo-link"
          href="#"
          className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <span>
            {PERSONAL_INFO.name.split(' ')[0]}
            <span className="text-indigo-600 dark:text-indigo-400">.edu</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors text-sm hover:underline"
            >
              {item.name}
            </a>
          ))}
          
          <button
            onClick={onOpenAdmission}
            className="flex items-center gap-1.5 font-semibold text-xs py-2 px-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 rounded-xl transition-all cursor-pointer relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Admissions Portal</span>
          </button>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700"></div>

          {/* Theme Toggle Button */}
          <motion.button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-slate-700" />
            ) : (
              <Sun className="w-5 h-5 text-amber-400" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={onOpenAdmission}
            className="flex items-center gap-1 font-semibold text-[10px] py-1.5 px-2.5 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 rounded-lg shrink-0"
          >
            <GraduationCap className="w-3 h-3" />
            <span>Apply Now</span>
          </button>

          {/* Theme Toggle for Mobile */}
          <button
            id="mobile-theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-lg text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAdmission();
                }}
                className="w-full mt-2 py-3 px-4 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition-all text-center flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Open Instant Admission Portal</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
