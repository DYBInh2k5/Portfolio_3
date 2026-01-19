
export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  status: 'Active' | 'Beta';
  version: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}
