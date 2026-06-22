import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdmissionPortal from './components/AdmissionPortal';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [admissionClass, setAdmissionClass] = useState<string | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenAdmission = (cls: string | null) => {
    setAdmissionClass(cls);
    setIsAdmissionOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <Header theme={theme} toggleTheme={toggleTheme} onOpenAdmission={() => handleOpenAdmission(null)} />
      <main>
        <Hero onOpenAdmission={handleOpenAdmission} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

      <AdmissionPortal 
        isOpen={isAdmissionOpen} 
        onClose={() => setIsAdmissionOpen(false)} 
        initialClass={admissionClass} 
      />
    </div>
  );
}
