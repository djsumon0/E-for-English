import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  React.useEffect(() => {
    const handlePreFill = (e: any) => {
      if (e.detail && e.detail.subject) {
        setFormData({
          name: '',
          email: '',
          subject: e.detail.subject,
          message: `Dear Sir Wasim,\n\nI would love to apply and enroll in the "${e.detail.batchName}" session scheduled on ${e.detail.schedule}. Kindly share the next steps and fee structure with me.\n\nWarm regards,`,
        });
        const elem = document.getElementById('contact');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('prefill-batch', handlePreFill);
    return () => window.removeEventListener('prefill-batch', handlePreFill);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please populate name, email, and description fields.');
      return;
    }

    setFormState('loading');

    // Mock API dispatch timeout
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <span className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">
              Get In Touch
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
              Let's Discuss Opportunities
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0 font-mono">
            // Open for full-time, contract, or architecture queries.
          </p>
        </div>

        {/* Content Block Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left panel: Info Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-6">
                Connect Directly
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-sm sm:text-base">
                Whether you have an upcoming full-time headcount, want to schedule a technical chat, or require clean guidance on an ongoing SaaS project, I’d love to connect. Use the form or dispatch a note directly!
              </p>

              {/* Coordinates List */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-slate-700/50 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-slate-800 flex items-center justify-center text-violet-600 dark:text-violet-400 border border-violet-100/50 dark:border-slate-700/50 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone contact</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-50 dark:bg-slate-800 flex items-center justify-center text-pink-600 dark:text-pink-400 border border-pink-100/50 dark:border-slate-700/50 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">HQ Location</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div className="mt-12 p-4 rounded-xl bg-indigo-50/50 dark:bg-slate-950/40 border border-indigo-100/50 dark:border-indigo-950/60 text-xs text-indigo-700 dark:text-indigo-300 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>Rest assured, all submissions on this portfolio prototype are fully responsive and track submission states live.</span>
            </div>
          </div>

          {/* Right panel: Active Form Canvas */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/15 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {formState !== 'success' ? (
                  <motion.form
                    id="contact-form-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 text-left"
                  >
                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/60 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col">
                        <label htmlFor="name-input" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          id="name-input"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g., Sarah Peterson"
                          className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30 font-medium"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email-input" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email-input"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g., sarah@vanguard.com"
                          className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30 font-medium"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="subject-input" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        id="subject-input"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry for Senior Full Stack Role"
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30 font-medium"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="message-input" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Message Description *
                      </label>
                      <textarea
                        id="message-input"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hello Alex, we'd love to chat about a specific technical opportunity on our product team..."
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30 font-medium resize-none"
                      />
                    </div>

                    {/* Dispatch triggers */}
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={formState === 'loading'}
                      className="mt-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-500/10 cursor-pointer disabled:bg-indigo-400/80 disabled:cursor-not-allowed"
                    >
                      {formState === 'loading' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v1c-3.866 0-7 3.134-7 7h1z"></path>
                          </svg>
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          <span>Dispatch Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Elegant Success State overlay card
                  <motion.div
                    id="contact-success-state-container"
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center p-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                      Thank you for connecting! Your submission has been captured. I am prompt about review channels and will get back to you within 24 hours.
                    </p>
                    <button
                      id="reset-form-success-btn"
                      onClick={() => setFormState('idle')}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
