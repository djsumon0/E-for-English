import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  GraduationCap, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Send, 
  Users, 
  BookOpen, 
  Award, 
  Sparkles, 
  ChevronRight,
  BookMarked,
  ShieldAlert,
  Info,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AdmissionPortalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: string | null;
}

export default function AdmissionPortal({ isOpen, onClose, initialClass }: AdmissionPortalProps) {
  const [selectedClass, setSelectedClass] = useState<string>('Class X');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    prevGrade: '',
    notes: '',
    agreeToRules: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appId, setAppId] = useState('');

  useEffect(() => {
    if (initialClass) {
      if (initialClass.includes('Class IX')) setSelectedClass('Class IX');
      else if (initialClass.includes('Class X')) setSelectedClass('Class X');
      else if (initialClass.includes('Class XI')) setSelectedClass('Class XI');
      else if (initialClass.includes('Class XII')) setSelectedClass('Class XII');
    }
  }, [initialClass, isOpen]);

  // Prevent scroll when portal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const classesConfig = {
    'Class IX': {
      title: 'Class IX',
      subtitle: 'Building flawless written syntax and conversational confidence.',
      duration: '10 Months Track',
      schedule: 'Tue, Thu 4:00 PM - 5:30 PM',
      seats: 'Filling Fast',
      seatsCount: 4,
      fee: '₹500 / month',
      curriculum: [
        'Advanced Grammar Matrices (Tense, Clause & Voice Mapping)',
        'The Art of Pronunciation & Phonetics Drills',
        'Story Writing Mechanics & Flow Development',
        'Comprehension Analysis of Selected Short Stories'
      ],
      highlights: 'Ideal for students strengthening fundamentals before high-stakes board years.'
    },
    'Class X': {
      title: 'Class X',
      subtitle: 'Targeted secondary literature analysis and analytical grammar.',
      duration: '10 Months Track',
      schedule: 'Mon, Wed 5:00 PM - 6:30 PM',
      seats: '6 Seats Left',
      seatsCount: 6,
      fee: '₹500 / month',
      curriculum: [
        'Board Curriculum Exhaustive Analysis (Prose & Poem Matrices)',
        'High-Score Answer Writing Formulas',
        'Academic Essay & Formal Letters Masterclass',
        'Weekly Mock Board Tests & Detailed Critique Checks'
      ],
      highlights: '100% board pattern alignment with proven grade-boosting tactics.'
    },
    'Class XI': {
      title: 'Class XI',
      subtitle: 'Exploring literature critique and complex linguistic models.',
      duration: '12 Months Track',
      schedule: 'Mon, Fri 7:00 AM - 8:30 AM',
      seats: '5 Seats Left',
      seatsCount: 5,
      fee: '₹500 / month',
      curriculum: [
        'Elizabethan & Victorian Epoch Poetical Interpretations',
        'Introductory Literary Theories & Advanced Vocabulary',
        'Creative Writing Portfolios & Research Projects',
        'Grammar Refinement structures for Competitive Arenas'
      ],
      highlights: 'Dives deep into literary history to nurture aspiring content writeups & scholars.'
    },
    'Class XII': {
      title: 'Class XII',
      subtitle: 'Conquering senior board challenges and expressive public speaking.',
      duration: '12 Months Track',
      schedule: 'Wed, Sat 7:00 AM - 8:30 AM',
      seats: '2 Seats Left',
      seatsCount: 2,
      fee: '₹500 / month',
      curriculum: [
        'Shakespeare’s Drama adaptation & critical commentary analyses',
        'Rhetorical Devices and Persuasive Public Writing',
        'Senior Mock Assemblies & Professional Interview Drills',
        'Comprehensive Past-Year Board Papers Mastery'
      ],
      highlights: 'Intensive mentorship targeting the ultimate grade of scholastic excellence.'
    }
  };

  const currentDetails = classesConfig[selectedClass as keyof typeof classesConfig];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'agreeToRules') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToRules) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setAppId(`ADM-${selectedClass.replace(' ', '')}-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      prevGrade: '',
      notes: '',
      agreeToRules: false
    });
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        id="admission-portal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md overflow-y-auto"
      >
        <div className="min-h-screen px-4 py-8 sm:py-12 md:px-8 max-w-6xl mx-auto flex flex-col">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <button 
                onClick={onClose}
                className="p-2.5 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Go Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">Admission Portal 2026-27</span>
                <h1 className="text-xl sm:text-2xl font-bold font-display text-white">English Literature & Rhetoric Circle</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs">
              <Sparkles className="w-4 h-4 animate-pulse text-indigo-400" />
              <span>Online Application Channel: Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
            {/* Left Column: Course Selector & Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Class Buttons Grid */}
              <div className="bg-slate-950/40 border border-slate-800/80 p-4 rounded-2xl">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3 font-mono">Select Grade Level</span>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(classesConfig).map((cls) => {
                    const isActive = selectedClass === cls;
                    return (
                      <button
                        key={cls}
                        onClick={() => setSelectedClass(cls)}
                        className={`py-3.5 px-4 rounded-xl font-bold text-sm transition-all text-center border cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          isActive 
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                            : 'bg-slate-900 border-slate-800/80 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <span className="text-base font-display">{cls}</span>
                        <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-950 text-slate-400'}`}>
                          {classesConfig[cls as keyof typeof classesConfig].seats}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Course Detail Card */}
              <motion.div 
                key={selectedClass}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-950/60 border border-indigo-500/15 p-6 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Monthly Tuition</span>
                    <span className="text-lg font-bold text-indigo-300 font-mono">{currentDetails.fee}</span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[10px] font-bold text-indigo-300 font-mono tracking-wide uppercase">
                    WBBSE & WBCHSE Board
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 font-display">{currentDetails.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{currentDetails.subtitle}</p>

                <div className="flex flex-wrap gap-3 mb-5 py-3 border-y border-slate-800/80 font-mono text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{currentDetails.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{currentDetails.schedule}</span>
                  </div>
                </div>

                {/* Scope list */}
                <div className="space-y-2.5 mb-5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Core Syllabus Focus</span>
                  {currentDetails.curriculum.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="p-0.5 rounded bg-indigo-600/10 text-indigo-400 mt-0.5 border border-indigo-500/10">
                        <BookMarked className="w-3 h-3" />
                      </div>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Important notice */}
                <div className="flex gap-2 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white mb-0.5">Limited Group Size Policy</span>
                    <span>No batch exceeds 15 scholars to guarantee custom feedback cycles and individualized correction.</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Admission Form OR Success Message */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="admission-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="bg-slate-950/40 border border-slate-800 p-6 sm:p-8 rounded-2xl relative"
                  >
                    <h2 className="text-xl font-bold font-display text-white mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-indigo-400" />
                      <span>Admission Intake Form</span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm mb-6">
                      Complete this rapid application to secure a demo class slot. We will reach back shortly to review credentials.
                    </p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Student full name *</label>
                          <input
                            type="text"
                            required
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs sm:text-sm transition-all focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Parent / Guardian name *</label>
                          <input
                            type="text"
                            required
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleInputChange}
                            placeholder="Richard Doe"
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs sm:text-sm transition-all focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Contact phone number *</label>
                          <input
                            type="tel"
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. 7001679330"
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs sm:text-sm transition-all focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Active Email ID</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs sm:text-sm transition-all focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Class Applied For</label>
                          <select
                            name="selectedClass"
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs sm:text-sm transition-all focus:outline-none"
                          >
                            <option value="Class IX">Class IX</option>
                            <option value="Class X">Class X</option>
                            <option value="Class XI">Class XI</option>
                            <option value="Class XII">Class XII</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Last English Academic Grade *</label>
                          <input
                            type="text"
                            required
                            name="prevGrade"
                            value={formData.prevGrade}
                            onChange={handleInputChange}
                            placeholder="e.g. 85%, Grade A, 8.5 CGPA"
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs sm:text-sm transition-all focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Scholastic Goals / Past challenges (Optional)</label>
                        <textarea
                          rows={3}
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="What specific skills or literature areas are you seeking to polish under Sir Wasim?"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs sm:text-sm transition-all focus:outline-none resize-none"
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <label className="flex items-start gap-2.5 text-xs text-slate-400 select-none cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            name="agreeToRules"
                            checked={formData.agreeToRules}
                            onChange={handleInputChange}
                            className="mt-0.5 rounded text-indigo-600 bg-slate-900 border-slate-800 focus:ring-offset-slate-950 focus:ring-indigo-500"
                          />
                          <span>
                            I confirm that the applicant is committed to attending live interactive sessions, undergoing regular mock evaluations, and maintaining scholastic integrity under Sir Wasim Reja Mondal.
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.agreeToRules}
                      className={`w-full mt-6 py-4 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                        formData.agreeToRules 
                          ? 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-600/10'
                          : 'bg-slate-900 border-slate-800 text-slate-500'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v1c-3.866 0-7 3.134-7 7h1z"></path>
                          </svg>
                          <span>Reviewing Application Criteria...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Online Application</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="admission-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-slate-950 p-6 sm:p-10 border border-emerald-500/20 rounded-2xl text-center space-y-6"
                  >
                    <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold font-display text-white">Application Received successfully!</h2>
                      <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                        Warm congratulations! Sir Wasim's academic circle has registered the intake form. 
                      </p>
                    </div>

                    {/* App Receipt Slip */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 font-mono text-xs text-slate-300">
                      <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                        <span>Intake Application Code</span>
                        <span className="font-bold text-white text-[13px]">{appId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Applicant</span>
                        <span className="text-white font-medium">{formData.studentName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Class Applied</span>
                        <span className="text-white font-medium">{selectedClass}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Class Timing</span>
                        <span className="text-indigo-400 font-medium">{currentDetails.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Intake Status</span>
                        <span className="text-emerald-400 font-medium">Demo Class Pending</span>
                      </div>
                    </div>

                    <div className="pb-2 text-xs text-slate-400 max-w-md mx-auto flex items-center justify-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-500" />
                      <span>Sir Wasim will call you directly at <b>{formData.phone}</b> in 24 hours.</span>
                    </div>

                    <div className="flex gap-3 justify-center pt-2">
                      <button
                        onClick={handleReset}
                        className="py-2.5 px-5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 hover:text-white font-semibold text-xs transition-all cursor-pointer"
                      >
                        Submit Another Form
                      </button>
                      <button
                        onClick={onClose}
                        className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs text-white transition-all cursor-pointer shadow-md shadow-indigo-600/10"
                      >
                        Return to Hub
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
