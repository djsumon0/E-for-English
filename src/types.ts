export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  skills: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'ai';
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'job' | 'education' | 'milestone';
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
}
