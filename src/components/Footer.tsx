import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 py-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyrights */}
        <div className="text-left">
          <p className="text-sm font-semibold text-slate-900 dark:text-white font-display">
            {PERSONAL_INFO.name}
            <span className="text-indigo-600 dark:text-indigo-400">.dev</span>
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
            &copy; {new Date().getFullYear()} - All rights reserved. Crafted for Interview Showcase.
          </p>
        </div>

        {/* Small Navigation & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Socials */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="hidden sm:block h-4 w-[1px] bg-slate-200 dark:bg-slate-800"></div>

          {/* Scroll Up Control Button */}
          <motion.button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-sm"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll to main top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
