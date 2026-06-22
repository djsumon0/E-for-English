import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Download, CheckCircle, Sparkles, ChevronDown, Calendar, Clock, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenAdmission?: (cls: string | null) => void;
}

export default function Hero({ onOpenAdmission }: HeroProps) {
  const [isBatchOpen, setIsBatchOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<string | null>('Class X English Language & Drama');

  const batches = [
    { id: 'b2', name: 'Class XII Literature & Classical Drama', schedule: 'Wed, Sat 7:00 AM', seats: '2 seats left' },
    { id: 'b1', name: 'Class XI Literature & Poetry', schedule: 'Mon, Fri 7:00 AM', seats: '5 seats left' },
    { id: 'b5', name: 'Class X English Language & Drama', schedule: 'Mon, Wed 5:00 PM', seats: '6 seats left' },
    { id: 'b6', name: 'Class IX Grammar & Composition Bootcamp', schedule: 'Tue, Thu 4:00 PM', seats: 'Filling fast' },
    { id: 'b4', name: 'Eloquent Debater Public Rhetoric', schedule: 'Saturdays 11:00 AM', seats: 'Open' },
  ];

  const handleSelectBatch = (name: string, schedule: string) => {
    setSelectedBatch(name);
    setIsBatchOpen(false);

    // Dispatch custom event to auto populate the contact form
    const event = new CustomEvent('prefill-batch', {
      detail: {
        subject: `Inquiry for Batch: ${name}`,
        batchName: name,
        schedule: schedule
      }
    });
    window.dispatchEvent(event);

    // One-click redirect to Admission Page for this specific class!
    if (onOpenAdmission) {
      onOpenAdmission(name);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left column: Typography Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            id="hero-label-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide mb-6 uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for interview & projects</span>
          </motion.div>

          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-slate-900 dark:text-white leading-tight mb-6"
          >
            Hi, I am{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          <motion.h2
            id="hero-role-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display font-bold text-xl sm:text-2xl text-slate-700 dark:text-slate-200 mb-6"
          >
            {PERSONAL_INFO.role}
          </motion.h2>

          <motion.p
            id="hero-bio-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl mb-8"
          >
            {PERSONAL_INFO.subheading}
          </motion.p>

          {/* Social Icons & Call to Actions */}
          <motion.div
            id="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10 w-full"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all shadow-md hover:shadow-indigo-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Choose Your Batch Dropdown component with 1-click Admission access */}
            <div className="relative flex items-center">
              <button
                id="resume-download-btn"
                onClick={() => onOpenAdmission?.(selectedBatch)}
                className="pl-6 pr-4 py-3 rounded-l-xl font-semibold border-y border-l hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm font-sans"
                title="Click to apply instantly!"
              >
                <div className="absolute -top-2.5 -right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-[9px] text-emerald-600 dark:text-emerald-400 font-bold z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Admission Open</span>
                </div>
                <Calendar className="w-4 h-4 text-indigo-500" />
                <span className="text-xs sm:text-sm font-semibold truncate max-w-[220px] sm:max-w-none">
                  Click here for Admission
                </span>
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsBatchOpen(!isBatchOpen);
                }}
                className="px-3 py-3 border rounded-r-xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-300 transition-all cursor-pointer shadow-sm self-stretch flex items-center justify-center"
                aria-label="Toggle batch list"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isBatchOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isBatchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden z-20 text-left"
                  >
                    <div className="p-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Available Sessions</span>
                    </div>
                    <div className="p-1 max-h-[280px] overflow-y-auto">
                      {batches.map((batch) => (
                        <button
                          key={batch.id}
                          onClick={() => handleSelectBatch(batch.name, batch.schedule)}
                          className={`w-full p-3 rounded-xl flex flex-col gap-1 transition-all text-left cursor-pointer hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 group ${
                            selectedBatch === batch.name
                              ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100/60 dark:border-indigo-900/40 text-indigo-600 dark:text-indigo-400'
                              : 'text-slate-700 dark:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-xs leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{batch.name}</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/30 shrink-0">
                              {batch.seats}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                            <Clock className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                            <span>{batch.schedule}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            id="hero-socials-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5 text-slate-500 dark:text-slate-400"
          >
            <a
              id="github-social-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub Profiler"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              id="linkedin-social-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              id="email-social-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email Address Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-sm font-mono tracking-tight">{PERSONAL_INFO.location}</span>
          </motion.div>
        </div>

        {/* Right column: Code Component Visual Block */}
        <motion.div
          id="hero-widget-column"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xl shadow-slate-100 dark:shadow-none font-mono text-xs text-left">
            {/* Header tab */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
              </div>
              <span className="text-slate-400 text-[10px]">EducatorClassroom.ts</span>
              <div className="w-12"></div>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto bg-slate-950 text-slate-300 select-none">
              <div className="mb-1"><span className="text-pink-400">import</span> &#123; <span className="text-indigo-300">Educator</span>, <span className="text-indigo-300">LitCircle</span> &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">'./education'</span>;</div>
              <div className="mb-3"></div>
              <div className="mb-1"><span className="text-pink-400">const</span> <span className="text-yellow-300">Wasim</span> = &#11109; &#123;</div>
              <div className="mb-1 pl-4">name: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,</div>
              <div className="mb-1 pl-4">role: <span className="text-emerald-300">"{PERSONAL_INFO.role}"</span>,</div>
              <div className="mb-1 pl-4">expertise: [</div>
              <div className="mb-1 pl-8"><span className="text-emerald-300">'Classical Literature'</span>, <span className="text-emerald-300">'Rhetoric'</span>,</div>
              <div className="mb-1 pl-8"><span className="text-emerald-300">'Linguistics'</span>, <span className="text-emerald-300">'Debating'</span>,</div>
              <div className="mb-1 pl-8"><span className="text-emerald-300">'Creative Composition'</span></div>
              <div className="mb-1 pl-4">],</div>
              <div className="mb-1 pl-4">isPassionate: <span className="text-amber-400">true</span>,</div>
              <div className="mb-1 pl-4">hoursMentored: <span className="text-amber-400">6500+</span>,</div>
              <div className="mb-1 pl-4">inspireMinds: (<span className="text-indigo-400">students</span>) =&gt; &#123;</div>
              <div className="mb-1 pl-8"><span className="text-pink-400">return</span> unlockCreativeCriticism(students);</div>
              <div className="mb-1 pl-4">&#125;</div>
              <div className="mb-2">&#125;;</div>
              <div className="mb-1"></div>
              <div><span className="text-slate-500">// Empowering the next generation</span></div>
              <div><span className="text-pink-400">export default</span> Wasim;</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
