
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Code, Github, ExternalLink, Terminal, Brain, MessageSquare, 
  Send, Sparkles, Coffee, User, LayoutGrid, Github as GithubIcon, Mail,
  BarChart2, ArrowLeft, GraduationCap, Target, Award, Briefcase, Zap,
  ChevronRight, Globe, Layers, Cpu, Smartphone, Database, Cloud, BarChart2 as Marketing,
  History, Heart, Star, ShieldCheck, Rocket, Activity, CheckCircle2, Quote,
  Star as StarIcon, MousePointer2, Terminal as TerminalIcon
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, SKILL_CATEGORIES, PROJECTS, TESTIMONIALS, CURRENT_FOCUS_PROJECTS, ENGINEERING_PROCESS } from './constants';
import { chatWithBinhAI } from './geminiService';

type View = 'main' | 'about' | 'skills' | 'projects' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('main');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: `Chào bạn! Tôi là trợ lý AI của Bình. Bạn muốn biết thêm gì về các dự án AI hay kỹ năng Full Stack của cậu ấy?` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);
    const aiResponse = await chatWithBinhAI(userMessage);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  const navigate = (view: View) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- SUB-COMPONENTS ---

  const SkillsDetail = () => (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={() => navigate('main')} className="mb-8 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-bold">
        <ArrowLeft size={20} /> Quay về Home
      </button>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-slate-900">Hệ sinh thái <span className="gradient-text">Công nghệ</span></h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Tổng hợp các kỹ năng và công cụ tôi sử dụng để xây dựng sản phẩm chất lượng cao.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, i) => (
          <div key={i} className="group p-8 rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-50 rounded-2xl text-red-600 group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-slate-900">{cat.title}</h3>
            </div>
            
            <div className="space-y-6 flex-grow">
              {cat.skills.map((skill, j) => (
                <div key={j} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>{skill}</span>
                    <span className="text-red-600">{95 - (i * 5 + j * 2)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-600 rounded-full" 
                      style={{ width: `${95 - (i * 5 + j * 2)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectsDetail = () => (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={() => navigate('main')} className="mb-8 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-bold">
        <ArrowLeft size={20} /> Quay về Home
      </button>

      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-slate-900">Dự án <span className="gradient-text">Tiêu biểu</span></h1>
        <p className="text-slate-600">Những sản phẩm được xây dựng với mục tiêu giải quyết các vấn đề thực tế.</p>
      </div>

      <div className="space-y-32">
        {PROJECTS.map((project, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-[40px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative aspect-video rounded-[40px] bg-slate-100 border border-slate-200 overflow-hidden shadow-lg">
                   <img src={`https://picsum.photos/seed/${project.title}/1200/800`} alt={project.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">
                  {project.status} v{project.version}
                </span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900">{project.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{project.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Zap size={14} className="text-orange-500" /> Tính năng chính
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 size={14} className="text-red-600" />
                        <span className="text-sm text-slate-600 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={project.githubUrl} className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-2xl font-black uppercase text-xs hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                    <GithubIcon size={18} /> View Code
                  </a>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black uppercase text-xs hover:bg-slate-50 transition-all shadow-sm">
                    <ExternalLink size={18} /> Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ContactDetail = () => (
    <div className="pt-32 pb-20 px-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={() => navigate('main')} className="mb-8 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-bold">
        <ArrowLeft size={20} /> Quay về Home
      </button>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-slate-900">Kết nối <span className="gradient-text">Ngay.</span></h1>
          <p className="text-slate-600 text-lg mb-12 leading-relaxed">
            Tôi luôn sẵn sàng cho các dự án mới, sự hợp tác hoặc chỉ đơn giản là một cuộc trò chuyện về công nghệ AI.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 rounded-[32px] bg-white border border-slate-200 group hover:border-red-400 transition-all shadow-sm hover:shadow-md">
              <div className="p-4 bg-red-50 rounded-2xl text-red-600 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-slate-900 hover:text-red-600 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {SOCIAL_LINKS.filter(l => l.label !== 'Email').map(link => (
                <a key={link.label} href={link.url} className="p-6 bg-white border border-slate-200 rounded-3xl hover:border-red-400 flex flex-col items-center gap-3 transition-all text-center shadow-sm hover:shadow-md group">
                  <div className="text-slate-400 group-hover:text-red-600 transition-colors">{link.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl">
          <h3 className="text-xl font-black uppercase tracking-widest mb-8 text-slate-900">Gửi tin nhắn</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Họ & Tên</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-red-500 transition-colors text-slate-900" placeholder="Nguyễn Văn A" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-red-500 transition-colors text-slate-900" placeholder="email@gmail.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Nội dung</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm h-32 focus:outline-none focus:border-red-500 transition-colors resize-none text-slate-900" placeholder="Hãy mô tả yêu cầu của bạn..."></textarea>
            </div>
            <button className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 active:scale-95">
              <Send size={18} /> Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const MainView = () => (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-4 relative overflow-hidden">
        {/* Son Goku Small Detail */}
        <div className="absolute top-40 right-[10%] w-24 md:w-32 animate-goku z-20 pointer-events-auto hidden lg:block">
           <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZkbHl1ZTF2eW56cTF4Z244ZzN4Z244ZzN4Z244ZzN4Z244ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WvS5BPyOORmYnE9L-U/giphy.gif" 
            alt="Flying Goku" 
            className="w-full h-auto goku-aura cursor-pointer"
            title="Kamehameha!"
           />
        </div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-100/40 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-100/40 blur-[120px] rounded-full -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-red-600 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="animate-spin-slow text-orange-500" />
            <span>Building Digital Excellence 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none text-slate-900">
            I Engineer <br />
            <span className="gradient-text">
              {PERSONAL_INFO.roles[activeRoleIndex]}
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            Biến ý tưởng thành hiện thực bằng sức mạnh của <span className="text-slate-900 border-b-2 border-red-500">AI</span>, <span className="text-slate-900 border-b-2 border-slate-300">Code</span> và <span className="text-slate-900 border-b-2 border-orange-500">Marketing</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('projects')} 
              className="group w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-red-600/30 flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest text-sm"
            >
              Xem Dự Án <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 rounded-2xl transition-all hover:-translate-y-1 shadow-sm" title={link.label}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 relative inline-block">
             <div className="absolute inset-0 bg-red-200/50 blur-2xl rounded-full scale-150 animate-pulse"></div>
             <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={PERSONAL_INFO.avatar} alt={PERSONAL_INFO.name} className="w-full h-full object-cover scale-110" />
             </div>
             <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-3 rounded-2xl shadow-xl">
                <TerminalIcon size={24} />
             </div>
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-slate-900">Quy trình <span className="text-red-600">Làm việc</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Cách tôi chuyển đổi các vấn đề phức tạp thành giải pháp tinh gọn.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {ENGINEERING_PROCESS.map((p, i) => (
              <div key={i} className="relative group h-full">
                <div className="p-8 rounded-[32px] bg-white border border-slate-200 hover:border-red-300 transition-all h-full flex flex-col shadow-sm hover:shadow-lg">
                  <span className="text-5xl font-black text-slate-100 mb-6 group-hover:text-red-50 transition-colors font-fira">{p.step}</span>
                  <div className="mb-6 p-4 bg-red-50 w-fit rounded-2xl text-red-600 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-slate-900">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Large Quote */}
      <section className="py-40 px-4 text-center relative overflow-hidden bg-white">
         <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
            <h2 className="text-4xl md:text-7xl font-black italic leading-tight text-slate-900">
              "Code is like humor. When you have to explain it, <span className="text-red-600">it's bad.</span>"
            </h2>
            <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-sm md:text-lg">— Cory House</p>
         </div>
      </section>
    </div>
  );

  const AboutDetail = () => (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
      <button onClick={() => navigate('main')} className="mb-12 flex items-center gap-2 text-red-600 hover:text-red-700 transition-all hover:-translate-x-1 font-bold">
        <ArrowLeft size={20} /> Quay về Home
      </button>
      
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-red-500 via-orange-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                <img src={PERSONAL_INFO.avatar} alt={PERSONAL_INFO.name} className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl backdrop-blur-sm">
              <div className="space-y-2">
                <h1 className="text-3xl font-black text-slate-900 leading-tight uppercase tracking-widest">{PERSONAL_INFO.name}</h1>
                <p className="text-red-600 font-fira text-sm font-bold tracking-widest uppercase">Full Stack AI Architect</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Globe size={16} className="text-red-600" /> <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Mail size={16} className="text-red-600" /> <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Briefcase size={16} className="text-red-600" /> <span>{PERSONAL_INFO.experience} Experience</span>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                {SOCIAL_LINKS.map(link => (
                  <a key={link.label} href={link.url} className="flex-1 p-3 bg-slate-50 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all flex justify-center border border-slate-100">
                    {React.cloneElement(link.icon as React.ReactElement<any>, { size: 20 })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-20">
          <section className="space-y-6">
            <div className="inline-block px-3 py-1 bg-red-50 border border-red-100 rounded-full text-red-600 text-xs font-black uppercase tracking-widest">Hành trình cá nhân</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Đam mê bởi <span className="gradient-text">AI.</span></h2>
            <p className="text-slate-600 leading-relaxed text-xl font-medium">
              Tôi là Võ Duy Bình, một nhà phát triển công nghệ sống tại điểm giao thoa giữa thiết kế sáng tạo và kỹ thuật hiệu năng cao. Với {PERSONAL_INFO.experience}, tôi đã dành trọn thời gian để làm chủ nghệ thuật Full Stack trong khi tiên phong ứng dụng AI vào tự động hóa.
            </p>
          </section>

          <section className="grid sm:grid-cols-3 gap-6">
            {[
              { label: 'Dự án đã xong', value: '50+', icon: <Zap className="text-orange-500" /> },
              { label: 'Công cụ làm chủ', value: '25+', icon: <Star className="text-red-600" /> },
              { label: 'Sự hài lòng', value: '100%', icon: <Heart className="text-rose-500" /> },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white border border-slate-200 text-center group hover:bg-slate-50 transition-all shadow-sm">
                <div className="mx-auto w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1 uppercase tracking-widest font-fira">{stat.value}</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </section>

          <section className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-widest flex items-center gap-3 text-slate-900">
              <History className="text-red-600" /> Cột mốc sự nghiệp
            </h3>
            <div className="space-y-12 border-l border-slate-200 ml-4 pl-10 relative">
              <div className="absolute top-0 bottom-0 left-[-1px] w-0.5 bg-gradient-to-b from-red-600 via-orange-500 to-transparent"></div>
              {[
                {
                  date: '2023 - Hiện tại',
                  role: 'Full Stack AI Architect',
                  desc: 'Dẫn dắt các sáng kiến chuyển đổi số bằng cách tích hợp LLM vào quy trình làm việc của doanh nghiệp. Thiết kế hạ tầng Cloud trên AWS.',
                  icon: <Brain className="text-red-600" />
                },
                {
                  date: '2021 - 2023',
                  role: 'Automation Engineering Lead',
                  desc: 'Phát triển bộ công cụ tự động hóa mạng xã hội xử lý hàng triệu yêu cầu mỗi ngày, tăng hiệu quả vận hành 300%.',
                  icon: <Terminal size={20} className="text-emerald-600" />
                }
              ].map((milestone, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[54px] top-0 w-8 h-8 rounded-xl bg-white border-2 border-red-600 flex items-center justify-center shadow-lg">
                    {milestone.icon}
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-fira font-black text-red-600 uppercase tracking-widest">{milestone.date}</span>
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{milestone.role}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 bg-grid">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <button onClick={() => navigate('main')} className="flex items-center gap-4 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-red-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <img src={PERSONAL_INFO.avatar} alt="VDB" className="w-full h-full object-cover" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase fira-code hidden sm:block text-slate-900">Võ Duy Bình</span>
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              {(['Home', 'About', 'Skills', 'Projects', 'Contact'] as const).map(item => (
                <button 
                  key={item} 
                  onClick={() => navigate(item.toLowerCase() === 'home' ? 'main' : item.toLowerCase() as View)} 
                  className={`text-xs font-black uppercase tracking-widest transition-colors ${
                    (item.toLowerCase() === 'home' && currentView === 'main') || currentView === item.toLowerCase() 
                    ? 'text-red-600' 
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-4 pb-10 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-xl">
             {(['Home', 'About', 'Skills', 'Projects', 'Contact'] as const).map(item => (
              <button key={item} onClick={() => navigate(item.toLowerCase() === 'home' ? 'main' : item.toLowerCase() as View)} className="text-xl font-black uppercase p-2 text-left text-slate-500 tracking-widest hover:text-red-600">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="relative">
        {currentView === 'main' && <MainView />}
        {currentView === 'about' && <AboutDetail />}
        {currentView === 'skills' && <SkillsDetail />}
        {currentView === 'projects' && <ProjectsDetail />}
        {currentView === 'contact' && <ContactDetail />}
      </main>

      <div className="fixed bottom-8 right-8 z-[60]">
        {!chatOpen ? (
          <button 
            onClick={() => setChatOpen(true)}
            className="w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-red-600/40 transition-all hover:scale-110 active:scale-95 group relative"
          >
            <MessageSquare size={28} />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white animate-pulse"></span>
          </button>
        ) : (
          <div className="w-[350px] sm:w-[450px] h-[600px] bg-white border border-slate-200 rounded-[32px] shadow-3xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
            <div className="p-6 bg-red-600 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <Brain size={24} />
                <span className="font-black uppercase tracking-widest text-sm">Bình's AI Core</span>
              </div>
              <button onClick={() => setChatOpen(false)}><X size={24} /></button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-red-600 text-white rounded-tr-none shadow-md' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="p-6 border-t border-slate-100 bg-white flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hỏi bất cứ điều gì về Bình..."
                className="flex-grow bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors text-slate-900"
              />
              <button type="submit" disabled={loading} className="p-3 bg-red-600 rounded-xl text-white disabled:opacity-50 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                <Send size={20} />
              </button>
            </form>
          </div>
        )}
      </div>

      <footer className="py-20 border-t border-slate-100 text-center text-slate-400 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="w-20 h-20 rounded-3xl overflow-hidden border border-white shadow-2xl relative group">
            <img src={PERSONAL_INFO.avatar} alt="VDB" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
          </div>
          <div className="space-y-4">
            <h4 className="text-slate-900 font-black text-xl uppercase tracking-tighter">Võ Duy Bình</h4>
            <div className="flex justify-center gap-6">
              {SOCIAL_LINKS.map(link => (
                <a key={link.label} href={link.url} className="text-slate-400 hover:text-red-600 transition-colors p-2 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all">{link.icon}</a>
              ))}
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 w-full text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            © 2026 Pushing the boundaries of Digital Innovation.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
