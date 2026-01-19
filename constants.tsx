
import React from 'react';
import { Project, SkillCategory } from './types';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  Gitlab,
  Globe,
  Cpu,
  Smartphone,
  Database,
  Cloud,
  Layout,
  BarChart2,
  Quote,
  Search,
  PenTool,
  Code2,
  Rocket
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Võ Duy Bình",
  avatar: "https://i.ibb.co/vzYp6YQ/avatar.png", 
  roles: [
    "Full Stack Developer",
    "AI & Automation Specialist",
    "Content Creator",
    "Digital Marketing Expert"
  ],
  location: "Ho Chi Minh City, Vietnam 🇻🇳",
  email: "binh.vd01500@sinhvien.hoasen.edu.vn",
  github: "DYBInh2k5",
  experience: "3+ years",
  summary: "Multi-talented Tech Professional focused on building tomorrow's technology today. I turn coffee into code ☕ → 💻 → 🚀",
  languages: ["Vietnamese", "English"]
};

export const SOCIAL_LINKS = [
  { label: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/DYBInh2k5', color: '#181717' },
  { label: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/b%C3%ACnh-v%C3%B5-duy-5a9891308/', color: '#0077B5' },
  { label: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/binhdzkosai18cm', color: '#1877F2' },
  { label: 'GitLab', icon: <Gitlab size={20} />, url: 'https://gitlab.com/DYBInh2k5', color: '#FC6D26' },
  { label: 'Email', icon: <Mail size={20} />, url: `mailto:${PERSONAL_INFO.email}`, color: '#D14836' }
];

export const ENGINEERING_PROCESS = [
  {
    step: "01",
    title: "Nghiên cứu & Phân tích",
    desc: "Tìm hiểu sâu về yêu cầu người dùng và khả năng ứng dụng AI để tạo ra giá trị đột phá.",
    icon: <Search size={24} />
  },
  {
    step: "02",
    title: "Thiết kế Kiến trúc",
    desc: "Xây dựng sơ đồ hệ thống Scalable, đảm bảo hiệu suất cao và bảo mật tối đa.",
    icon: <PenTool size={24} />
  },
  {
    step: "03",
    title: "Phát triển (Code)",
    desc: "Viết mã sạch (Clean Code), áp dụng các Design Patterns hiện đại và tích hợp AI thông minh.",
    icon: <Code2 size={24} />
  },
  {
    step: "04",
    title: "Tối ưu & Triển khai",
    desc: "Tinh chỉnh hiệu suất, CI/CD tự động và đưa sản phẩm lên Cloud với độ ổn định 99.9%.",
    icon: <Rocket size={24} />
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "TypeScript", "Tailwind CSS", "Material-UI", "Sass"]
  },
  {
    title: "Backend Development",
    icon: "Cpu",
    skills: ["Node.js", "Express", "Python", "Django", "FastAPI", "Java", "Spring Boot", "Go", "PHP", "Laravel"]
  },
  {
    title: "Mobile & AI",
    icon: "Smartphone",
    skills: ["React Native", "Flutter", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"]
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Nginx", "Terraform"]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"]
  },
  {
    title: "Marketing & Design",
    icon: "BarChart2",
    skills: ["Adobe Suite", "Canva", "Google Analytics", "Facebook Ads", "SEO", "SEM"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI Content Generator Pro",
    description: "Giải pháp AI tự động hóa việc sáng tạo nội dung đa nền tảng, giúp Content Creator tiết kiệm 80% thời gian.",
    features: ["Multi-platform generation", "Smart hashtag suggestions", "Performance analytics", "AI Copywriting"],
    tech: ["Python", "GPT-4", "FastAPI", "React", "MongoDB"],
    status: "Active",
    version: "2.0",
    githubUrl: "https://github.com/DYBInh2k5"
  },
  {
    title: "Social Growth Suite",
    description: "Hệ thống tự động hóa tăng trưởng mạng xã hội tích hợp Chatbot thông minh dựa trên hành vi người dùng.",
    features: ["Multi-account management", "Smart auto-reply chatbot", "Growth analytics", "Audience analysis"],
    tech: ["Node.js", "TypeScript", "Express", "Puppeteer", "Redis"],
    status: "Active",
    version: "1.5",
    githubUrl: "https://github.com/DYBInh2k5"
  },
  {
    title: "E-commerce Analytics Pro",
    description: "Nền tảng phân tích kinh doanh thời gian thực, dự báo doanh thu và tối ưu hóa ROI marketing bằng Big Data.",
    features: ["Sales tracking", "Behavior analysis", "Revenue forecasting", "Marketing ROI"],
    tech: ["Next.js 14", "PostgreSQL", "AWS", "Chart.js", "Tailwind"],
    status: "Beta",
    version: "0.9",
    githubUrl: "https://github.com/DYBInh2k5"
  }
];

export const TESTIMONIALS = [
  {
    name: "Nguyễn Văn A",
    role: "CEO at TechStart",
    content: "Bình delivered an AI solution that transformed our customer service efficiency. His technical depth and marketing insight are a rare combination.",
    avatar: "https://i.pravatar.cc/150?u=a"
  },
  {
    name: "Lê Thị B",
    role: "Marketing Director",
    content: "The Social Growth Suite created by Bình helped us reach 50k followers in record time. Professional, reliable, and highly skilled.",
    avatar: "https://i.pravatar.cc/150?u=b"
  }
];

export const CURRENT_FOCUS_PROJECTS = [
  {
    name: "Astra-Core Engine",
    status: "R&D",
    tagline: "Ultra-low latency AI decision engine for real-time applications.",
    progress: 45
  },
  {
    name: "GreenCloud Automator",
    status: "Architecture",
    tagline: "Carbon-aware cloud scaling system for distributed microservices.",
    progress: 20
  }
];
