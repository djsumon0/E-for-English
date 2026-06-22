import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, CheckSquare, Sparkles, Folder } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

const categoryDisplayMap: Record<string, string> = {
  ai: 'Literary Club',
  frontend: 'Drama & Rhetoric',
  backend: 'Student Journal',
  mobile: 'Grammar Bootcamp',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'mobile' | 'ai'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: typeof activeCategory }[] = [
    { label: 'All Initiatives', value: 'all' },
    { label: 'Literary Clubs', value: 'ai' },
    { label: 'Drama & Public Speaking', value: 'frontend' },
    { label: 'Student Journals', value: 'backend' },
    { label: 'Grammar Bootcamps', value: 'mobile' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((app) => app.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">
              My Portfolio
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
              Featured Literary Programs & Student Initiatives
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0 font-mono">
            // Shaping modern classrooms. Click to explore details.
          </p>
        </div>

        {/* Tab Filters */}
        <div id="project-categories-tabs" className="flex flex-wrap gap-2.5 mb-12 border-b border-slate-100 dark:border-slate-800/80 pb-6">
          {categories.map((cat) => (
            <button
              id={`cat-filter-btn-${cat.value}`}
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <motion.div
          id="project-cards-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/20 hover:bg-white dark:hover:bg-slate-900 overflow-hidden text-left flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200/50 dark:border-slate-800/50">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {project.category === 'ai' && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-indigo-600/90 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wide uppercase flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured Club</span>
                      </div>
                    )}
                  </div>

                  {/* Descriptions */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                      <Folder className="w-3.5 h-3.5" />
                      <span>{categoryDisplayMap[project.category] || project.category}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags block */}
                <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                  {project.skills.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-medium rounded-lg font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 text-[10px] font-medium rounded-lg font-mono">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detailed Modal Box */}
        <AnimatePresence>
          {selectedProject && (
            <div id="project-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
              ></motion.div>

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 z-10 text-left flex flex-col"
              >
                {/* Header Close triggers */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    id="modal-close-trigger-btn"
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md transition-all cursor-pointer"
                    aria-label="Close modal dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Hero visual banner */}
                <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="px-2.5 py-1 text-[10px] font-bold text-white bg-indigo-600/90 tracking-wider uppercase rounded-md shadow-sm">
                      {categoryDisplayMap[selectedProject.category] || selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Modal main detailed body */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
                    {selectedProject.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  {/* Core checklist highlights */}
                  <div className="mb-6">
                    <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200 tracking-wide uppercase mb-3">
                      Key Highlights & Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex gap-2 text-slate-600 dark:text-slate-300 text-xs">
                          <CheckSquare className="w-4 h-4 text-emerald-500 fill-emerald-500/10 flex-shrink-0" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack items list */}
                  <div className="mb-8">
                    <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200 tracking-wide uppercase mb-3">
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-lg font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External links footer CTA */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 max-w-[180px] py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source</span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 max-w-[180px] py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Interactive Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
