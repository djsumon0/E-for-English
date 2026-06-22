import React from 'react';
import { Target, Shield, Heart, Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Industry Competent',
      desc: '7+ years of expertise guiding young students and preparing creative reading curriculums.',
    },
    {
      icon: <Target className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
      title: 'Performance Focus',
      desc: 'Obsessed with fast loads, efficient state-trees, and light resource usage.',
    },
    {
      icon: <Shield className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      title: 'Clean Architectures',
      desc: 'Writing structured, strictly typed, self-documenting code with clear boundaries.',
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">
              About Me
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
              Who I Am & What I Do
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0 max-w-xs leading-relaxed font-mono">
            // Driving efficiency and elegant design choices.
          </p>
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left bio */}
          <div className="lg:col-span-7">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-slate-100 mb-6 font-semibold">
              Designing the future, one elegant block of code at a time.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
              I collaborate directly with project architects, product managers, and visual design leads to structure robust fullstack portals. I excel at building highly functional dashboard UI systems, integrating serverless APIs, configuring modern styling frameworks, and designing custom AI functionalities with semantic capabilities.
            </p>

            {/* Micro stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-indigo-600 dark:text-indigo-400">
                  7+
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-1">
                  Years Exp
                </div>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-violet-600 dark:text-violet-400">
                  15+
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-1">
                  Shipped Apps
                </div>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-pink-600 dark:text-pink-400">
                  100%
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-1">
                  Responsive
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Grid (Bento columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 w-full">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                id={`about-highlight-${index}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/35 flex gap-4 text-left shadow-sm"
              >
                <div className="flex-shrink-0 p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/80 h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
