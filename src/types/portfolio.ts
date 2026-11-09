export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'AI & Data' | 'Robotics & Embedded' | 'Full-Stack' | 'Game Dev';
  status: 'Ongoing' | 'Completed';
  year?: string;
  period?: string;
  description: string;
  features?: string[];
  technologies: string[];
  visualDirection: string;
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  minor?: string;
  results?: { subject: string; grade: string }[];
  zScore?: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  id: 'languages' | 'frameworks' | 'tools';
  skills: {
    name: string;
    icon: string;
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface LeadershipRole {
  title: string;
  organization: string;
  period: string;
  description: string;
  category: 'Leadership' | 'Executive' | 'Community' | 'Finance' | 'Creative';
  icon?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  category: string;
  year?: string;
  badgeText?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestedQuestions?: string[];
}

