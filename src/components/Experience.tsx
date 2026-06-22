import React from 'react';
import { Calendar, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <span className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">
              My Journey
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
              Experience & Academic Timeline
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0 font-mono">
            // Full-time appointments and academic achievements.
          </p>
        </div>

        {/* Timeline Line & Grid Block */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 sm:pl-10 ml-3 sm:ml-4 flex flex-col gap-12 text-left">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              layout
              id={`timeline-item-${exp.id}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={exp.id}
              className="relative"
            >
              {/* Timing Node Blob */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 z-10 shadow-sm">
                {exp.type === 'education' ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Performance dates badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono font-medium h-fit w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Achievements description points */}
                <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2">
                      <span className="text-indigo-500 dark:text-indigo-400 font-semibold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
