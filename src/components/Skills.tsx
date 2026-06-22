import React from 'react';
import {
  Code, ShieldCheck, Palette, Layers, BarChart2, Zap,
  Database, Cpu, GitPullRequest, Activity, Terminal,
  Compass, Search, GitBranch, CheckSquare, Settings
} from 'lucide-react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';

// Map textual icon names to Lucide JSX elements safely
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-4 h-4 text-indigo-500" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
  Palette: <Palette className="w-4 h-4 text-pink-500" />,
  Layers: <Layers className="w-4 h-4 text-indigo-500" />,
  BarChart2: <BarChart2 className="w-4 h-4 text-violet-500" />,
  Zap: <Zap className="w-4 h-4 text-amber-500" />,
  Database: <Database className="w-4 h-4 text-blue-500" />,
  Cpu: <Cpu className="w-4 h-4 text-neutral-500" />,
  GitPullRequest: <GitPullRequest className="w-4 h-4 text-violet-500" />,
  Activity: <Activity className="w-4 h-4 text-rose-500" />,
  Terminal: <Terminal className="w-4 h-4 text-teal-400" />,
  Compass: <Compass className="w-4 h-4 text-sky-400" />,
  Search: <Search className="w-4 h-4 text-orange-400" />,
  GitBranch: <GitBranch className="w-4 h-4 text-violet-400" />,
  CheckSquare: <CheckSquare className="w-4 h-4 text-green-500" />,
  Settings: <Settings className="w-4 h-4 text-slate-500" />
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">
              Skills Checklist
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
              Core Technical Competencies
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0 font-mono">
            // Verified capabilities and stack depth.
          </p>
        </div>

        {/* Skill Category Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              id={`skill-category-card-${catIdx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  {category.title}
                </h3>
                
                {/* Individual Skill List */}
                <div className="flex flex-col gap-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="flex flex-col w-full">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="p-1.5 bg-slate-50 dark:bg-slate-950 rounded-lg">
                            {iconMap[skill.icon] || <Code className="w-4 h-4" />}
                          </span>
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Interactive Slider Bar */}
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: skillIdx * 0.05 + 0.1 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-600 dark:from-indigo-400 dark:to-violet-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
