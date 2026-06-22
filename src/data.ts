import { Project, Experience, SkillCategory, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'WASIM REJA MONDAL',
  role: 'School Teacher',
  subheading: '"Words have the power to open worlds. Through the lens of literature, I inspire students to find their voice, construct critical thoughts, and write their own futures."',
  bio: 'I am a passionate educator of English language and literature with over 7 years of experience guiding young minds, developing creative reading curriculums, and organizing dynamic, expressive classroom environments. Dedicating my craft to literacy and communication skills.',
  email: 'wasimreja580@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: 'Faridpur, Jalangi, MSD, WB',
  resumeUrl: '#',
  phone: '7001679330 / 8145399108',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LitCircle Student Reading Club',
    description: 'An interactive, peer-led student reading circles program designed to boost analytical analysis of classical literature and poetry.',
    longDescription: 'LitCircle is a structured classroom program empowering high school seniors to lead deep analytical reading clubs. Empowered by custom prose handouts, collaborative review cycles, and student-run poetry circles, it transitions young learners from passive readers to active literary critics and critical debaters.',
    skills: ['Renaissance Prose', 'Classical Poetry', 'Literary Criticism', 'Collaborative Circles', 'Analytical Writing'],
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    features: [
      'Guided comprehension modules for Renaissance & Victorian classic literature',
      'Student-centered peer evaluation rubrics for custom creative essays',
      'Weekly dramatic readings of Shakespearean tragedy scenes',
      'Interactive vocab builders tracking communication development milestones'
    ]
  },
  {
    id: '2',
    title: 'Shakespeare Reimagined Drama Festival',
    description: 'Annual student-directed visual drama festival animating classical plays for modern secondary school audiences.',
    longDescription: 'Shakespeare Reimagined is a school-wide dramatic initiative. High school seniors coordinate, direct, and act out abridged adaptations of classical dramas. This builds exceptional student confidence, enhances active rhetoric, and renders Elizabethian prose highly accessible and engaging.',
    skills: ['Drama Production', 'Classical Plays', 'Rhetoric & Speech', 'Creative Direction', 'Set Design'],
    category: 'frontend',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    features: [
      'Interactive set design workshops built entirely around visual team collaboration',
      'Modern rhetorical training helping students parse complex language structures',
      'Inclusive roles for diverse language proficiency level groups',
      'Public recitals boosting student presence, stage awareness, and poise'
    ]
  },
  {
    id: '3',
    title: 'The Voice of Youth Journal',
    description: 'A monthly school journal celebrating student essays, critical articles, and original creative writings.',
    longDescription: 'The Voice of Youth is a digital and print literary journal. Curated by the senior class, it invites poetry, grammar essays, book reviews, and creative stories, establishing a tangible goal for students to perfect their drafting, revision, and analytical composition skills.',
    skills: ['Composition Coaching', 'Editorial Design', 'Grammar Proofing', 'Creative Writing', 'Publishing'],
    category: 'backend',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    features: [
      'Student peer-review editorial boards coaching grammar correctness',
      'Creative writing prompts spanning diverse global literary genres',
      'Structured feedback loops focusing on semantic clarity and tone layout',
      'Dynamic display exhibits celebrating monthly academic writing achievements'
    ]
  },
  {
    id: '4',
    title: 'Grammar & Composition Bootcamps',
    description: 'Focused workshops raising grammar clarity, syntactic patterns, and active communication skills.',
    longDescription: 'A series of dynamic learning modules designed to systematically break down English syntax, tenses, and sentence structures. Utilizing step-by-step prose analysis and active reading challenges, it quickly elevates reading fluency and structural composition confidence.',
    skills: ['English Grammar', 'Sentence Diagramming', 'Vocabulary Building', 'Phonetics', 'Tense Masteries'],
    category: 'mobile',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    features: [
      'Engaging, practical sentence diagramming and spelling workshops',
      'Interactive vocabulary challenges centering roots and prefixes',
      'Weekly persuasive letter formulation drills for commercial topics',
      'Direct corrective mentoring for high-frequency essay errors'
    ]
  },
  {
    id: '5',
    title: 'The Eloquent Speaker Society',
    description: 'A public speaking, logic, and formal debating society to groom tomorrow\'s communication leaders.',
    longDescription: 'The Eloquent Speaker Society provides students with a playground to refine formal argument curation, public rhetoric, and active listening. This club sharpens persuasive essay logic, structures research methodologies, and builds outstanding verbal confidence.',
    skills: ['Public Speaking', 'Debate Coaching', 'Critical Logic', 'Speech Pacing', 'Active Listening'],
    category: 'frontend',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    features: [
      'Structured Parliamentary and Oxford-style formal debate workshops',
      'Refining voice modulation, speech pacing, and body language',
      'Research frameworks parsing real-world social and ethical topics',
      'Inclusive debate tournaments celebrating diverse communicative styles'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Literature & Linguistics Mastery',
    skills: [
      { name: 'Classical & Modern Prose', level: 95, icon: 'Code' },
      { name: 'Creative Writing & Composition', level: 92, icon: 'Palette' },
      { name: 'Phonetics & English Grammar', level: 95, icon: 'ShieldCheck' },
      { name: 'Literary Theory & Criticism', level: 88, icon: 'Compass' },
      { name: 'Public Speaking & Rhetoric', level: 90, icon: 'Zap' }
    ]
  },
  {
    title: 'Pedagogical Excellence',
    skills: [
      { name: 'Curriculum & Lesson Planning', level: 95, icon: 'Settings' },
      { name: 'Student-Centered Learning', level: 90, icon: 'CheckSquare' },
      { name: 'Interactive Classrooms', level: 92, icon: 'Layers' },
      { name: 'Educational Tech Integration', level: 85, icon: 'Database' },
      { name: 'Formative & Summative Exams', level: 88, icon: 'Activity' }
    ]
  },
  {
    title: 'Mentorship & Leadership',
    skills: [
      { name: 'Directing Drama & Debate Clubs', level: 95, icon: 'Compass' },
      { name: 'One-on-One Student Mentoring', level: 92, icon: 'ShieldCheck' },
      { name: 'Parent-Teacher Communication', level: 90, icon: 'Terminal' },
      { name: 'Academic Counseling', level: 85, icon: 'Search' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Senior English Literature Teacher & Department Lead',
    company: 'HERITAGE ACADEMY, Domkal',
    period: '2022 - Present',
    description: [
      'Deliver highly engaging high-school English Language and Literature training, teaching modules covering early modern plays, prose structures, and contemporary poetry analysis.',
      'Constructed curriculum frameworks and digital-first class platforms, raising school-wide reading comprehension and test averages by 22%.',
      'Provide one-on-one reading and essay interventions, fostering robust textual analysis and rhetorical skills in over 150 senior-class students yearly.'
    ],
    type: 'job'
  },
  {
    id: '2',
    role: 'AI developer',
    company: 'BizGrowww',
    period: '2026 - Present',
    description: [
      'Spearheaded student-led reading circles promoting independent critical study of classical novels and diverse, expressive essay-review workflows.',
      'Organized annual school-wide debate competitions and literary arts festivals, boosting general communicative confidence by 30%.',
      'Drafted mock evaluations and weekly diagnostic feedback reports aligning strictly with board requirements.'
    ],
    type: 'job'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Father Thomas Mathew',
    role: 'Principal / Headmaster',
    company: 'Jalangi Model Secondary School',
    text: 'Wasim has an exceptional talent for making classical literature feel deeply relevant to today\'s youth. His positive classroom dynamics, dedication to reading mastery, and leadership in language pedagogy revolutionized our English curriculum.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Aisha Rahman',
    role: 'Former High School Student',
    company: 'Oxford University Aspirant',
    text: 'Under Wasim\'s guidance, I found my academic voice. He did not just teach English grammar—he turned literary analysis into a key for unlocking how we decode and write our own future stories.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];
