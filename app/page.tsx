"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Wallet,
  Smartphone,
  Banknote,
} from 'lucide-react';

// --- Custom Hook for Scroll Detection (The "Framer" Engine) ---
const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible] as const;
};

// --- Animated Wrapper Component ---
interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'down' | 'scale';
  delay?: number;
  className?: string;
  duration?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = "",
  duration = 1000,
}) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const getTransform = (): string => {
    switch (direction) {
      case 'left':
        return '-translate-x-24';
      case 'right':
        return 'translate-x-24';
      case 'down':
        return '-translate-y-24';
      case 'scale':
        return 'scale-50';
      case 'up':
      default:
        return 'translate-y-24';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0) scale(1)' : getTransform(),
      }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // 🟢 YOUR COMMUNITY LINK
  const WHATSAPP_LINK = "https://chat.whatsapp.com/Cm5hXGbNn1yAoa4QnSPXQt?mode=wwt";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- Styled Components ---
  interface GlowingButtonProps {
    children: React.ReactNode;
    className?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }

  const GlowingButton: React.FC<GlowingButtonProps> = ({
    children,
    className = "",
    icon: Icon,
  }) => (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group overflow-hidden rounded-full px-6 md:px-8 py-3 md:py-4 transition-all duration-300 transform hover:scale-105 cursor-pointer inline-flex items-center justify-center text-sm md:text-base ${className}`}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 opacity-100 group-hover:rotate-180 transition-all duration-1000" />
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
      <span className="relative flex items-center font-bold text-white tracking-wide z-10">
        {children}
        {Icon && (
          <Icon className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </a>
  );

  interface FeatureCardProps {
    title: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    delay: number;
  }

  const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    desc,
    icon: Icon,
    color,
    delay,
  }) => (
    <Reveal direction="up" delay={delay} duration={800} className="h-full">
      <div className="relative group h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
        />
        <div className="relative h-full bg-[#131528] border border-white/10 hover:border-white/20 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Icon with glow */}
          <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 relative z-10">
            <div
              className={`absolute inset-0 rounded-xl opacity-20 bg-gradient-to-tr ${color} blur-md`}
            />
            <Icon className="w-6 md:w-7 h-6 md:h-7 text-white relative z-10" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 relative z-10">
            {title}
          </h3>
          <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed relative z-10">
            {desc}
          </p>

          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center text-xs md:text-sm font-bold text-cyan-400 hover:text-cyan-300 relative z-10 group-hover:underline"
          >
            Join Access List <ArrowUpRight className="w-3 md:w-4 h-3 md:h-4 ml-1" />
          </a>

          {/* Decorative background shape */}
          <div
            className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${color} opacity-10 blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700`}
          />
        </div>
      </div>
    </Reveal>
  );

  const navItems = [
    { label: 'Crypto Airdrops 💎', link: '#airdrops' },
    { label: 'Airtime Hacks ⚡', link: '#airtime' },
    { label: 'Money Making 💸', link: '#money' },
  ];

  return (
    <div className="min-h-screen bg-[#050714] text-slate-200 font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* --- Navbar (Slides Down) --- */}
      <div
        className={`fixed w-full z-50 transition-all duration-500 transform ${
          scrolled
            ? 'bg-[#050714]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg translate-y-0'
            : 'bg-transparent py-4 md:py-6 translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
            <div className="relative w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl font-black text-white text-sm md:text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all animate-pulse-slow">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-wider leading-none text-xs md:text-base">
                NATHAN'S
              </span>
              <span className="text-[10px] md:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 tracking-[0.2em]">
                WEB3
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xl:px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs xl:text-sm font-bold transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Phone className="w-3 xl:w-4 h-3 xl:h-4 text-green-400" />
              <span>Join WhatsApp 🚀</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 active:scale-95 transition-transform"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#020205] border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block p-4 rounded-xl bg-[#131528] border border-white/5 text-white font-medium active:scale-95 transition-all flex justify-between items-center hover:bg-[#1a1d35]"
              >
                {item.label}
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-center shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              Join Community Chat 🔥
            </a>
          </div>
        </div>
      </div>

      {/* --- Hero Section --- */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden min-h-screen md:min-h-[90vh] flex items-center">
        {/* Abstract Background Elements (Animated) */}
        <div className="absolute top-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          {/* Hero Text (Animated Entrance) */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left relative z-10">
            <Reveal direction="down" delay={200}>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/30 backdrop-blur-sm justify-center lg:justify-start">
                <span className="relative flex h-2 md:h-2.5 w-2 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 md:h-2.5 w-2 md:w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-300 text-xs font-bold tracking-wide uppercase">
                  New Updates Dropped 🚀
                </span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
                MASTER THE ART OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 animate-gradient bg-[length:200%_auto]">
                  DIGITAL WEALTH.
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={600}>
              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join the elite circle for verified{' '}
                <span className="text-white font-medium">crypto airdrops 💎</span>,
                strategic{' '}
                <span className="text-white font-medium">airtime looting ⚡</span>,
                and proven{' '}
                <span className="text-white font-medium">money-making blueprints 💰</span>.
              </p>
            </Reveal>

            <Reveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GlowingButton icon={MessageCircle}>
                  Join The Squad 🔥
                </GlowingButton>
                <div className="flex items-center justify-center lg:justify-start gap-2 px-4 md:px-6 py-3 md:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-6 md:w-8 h-6 md:h-8 rounded-full border-2 border-[#050714] bg-slate-800 overflow-hidden transform hover:-translate-y-1 transition-transform"
                      >
                        <img
                          src="/nathanavatar.jpg"
                          alt="User"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 text-left">
                    <span className="block text-white font-bold">1,500+</span>
                    Earners Active 💸
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* --- HERO AVATAR CARD (Enters from Right, then Floats) --- */}
          <Reveal
            direction="right"
            delay={1000}
            className="relative mx-auto lg:mx-0 w-full max-w-xs md:max-w-sm lg:max-w-md perspective-1000 z-20"
          >
            <div className="animate-float">
              {/* Card Glow Behind */}
              <div className="absolute top-10 inset-x-10 bottom-0 bg-gradient-to-b from-cyan-500 to-fuchsia-600 opacity-30 blur-[60px]" />

              {/* The Card Itself */}
              <div className="relative bg-[#0f1123] rounded-2xl md:rounded-[2.5rem] p-2 border border-white/10 shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02]">
                {/* Header Image Area */}
                <div className="relative h-24 md:h-32 bg-[#131528] rounded-t-2xl md:rounded-t-[2rem] overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1123]"></div>
                </div>

                {/* Avatar Container */}
                <div className="relative -mt-12 md:-mt-16 flex flex-col items-center text-center px-4 md:px-6 pb-6 md:pb-8">
                  {/* Avatar Circle with Orbital Rings */}
                  <div className="relative w-24 md:w-32 h-24 md:h-32 mb-3 md:mb-4">
                    {/* Spinning Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-500 border-r-cyan-500 animate-[spin_3s_linear_infinite]" />
                    <div className="absolute -inset-2 rounded-full border border-dashed border-white/20 animate-[spin_8s_linear_infinite_reverse]" />

                    {/* Image */}
                    <div className="w-full h-full rounded-full p-1.5 bg-[#0f1123] relative z-10">
                      <img
                        src="/nathanavatar.jpg"
                        alt="Nathan Admin"
                        className="w-full h-full rounded-full object-cover border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      />
                    </div>

                    {/* Verified Badge */}
                    <div
                      className="absolute bottom-1 right-1 z-20 bg-blue-500 text-white p-1 rounded-full border-4 border-[#0f1123] animate-bounce-small"
                      title="Verified Admin"
                    >
                      <ShieldCheck className="w-3 md:w-4 h-3 md:h-4" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-1 md:gap-2 flex-wrap justify-center">
                    NATHAN
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30">
                      ADMIN 👑
                    </span>
                  </h2>
                  <p className="text-xs md:text-sm text-fuchsia-400 font-medium tracking-widest uppercase mb-3 md:mb-4">
                    Digital Opportunist 🌐
                  </p>

                  {/* Hype Text */}
                  <div className="bg-white/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/5 mb-4 md:mb-6 w-full backdrop-blur-md hover:bg-white/10 transition-colors">
                    <p className="text-slate-300 text-xs md:text-sm italic leading-relaxed">
                      "I scout the internet 🕵️‍♂️ for value so you don't have to.
                      From huge crypto airdrops to airtime glitches and legit
                      income streams—if it pays, it's posted."
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 w-full mb-4 md:mb-6">
                    <div className="text-center p-2 rounded-xl bg-[#050714] border border-white/5 hover:border-green-500/30 transition-colors">
                      <div className="text-green-400 font-bold text-xs md:text-sm">✅ 99%</div>
                      <div className="text-[9px] md:text-[10px] text-slate-500 uppercase">
                        Legit
                      </div>
                    </div>
                    <div className="text-center p-2 rounded-xl bg-[#050714] border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <div className="text-cyan-400 font-bold text-xs md:text-sm">
                        📅 Daily
                      </div>
                      <div className="text-[9px] md:text-[10px] text-slate-500 uppercase">
                        Updates
                      </div>
                    </div>
                    <div className="text-center p-2 rounded-xl bg-[#050714] border border-white/5 hover:border-fuchsia-500/30 transition-colors">
                      <div className="text-fuchsia-400 font-bold text-xs md:text-sm">
                        🔓 Free
                      </div>
                      <div className="text-[9px] md:text-[10px] text-slate-500 uppercase">
                        Alpha
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    className="w-full py-2 md:py-3 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group text-sm md:text-base"
                  >
                    <MessageCircle className="w-3 md:w-4 h-3 md:h-4 group-hover:scale-110 transition-transform" />
                    Chat With Nathan 💬
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="py-16 md:py-20 bg-[#0b0d21] relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Reveal direction="up" delay={100}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Your Wealth Toolkit 🧰
              </h2>
              <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto px-4">
                We provide the exact coordinates to digital value. No fluff, just
                actionable updates delivered straight to your phone.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              title="Crypto & Airdrops 🪙"
              desc="Get early access to verified airdrop links and testnet opportunities. Position yourself for life-changing allocations before the masses arrive."
              icon={Wallet}
              color="from-cyan-400 to-blue-600"
              delay={200}
            />
            <FeatureCard
              title="Airtime Looting 📲"
              desc="We hunt down airtime glitches, massive data bonuses, and VTU loopholes. Maximize your digital rewards with our strategic looting updates."
              icon={Smartphone}
              color="from-fuchsia-500 to-purple-600"
              delay={400}
            />
            <FeatureCard
              title="Money Making 💼"
              desc="Discover legitimate online hustles and income blueprints. We share tested methods to generate real cash flow from the comfort of your home."
              icon={Banknote}
              color="from-emerald-400 to-green-600"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-white/5 bg-[#050714] py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="w-6 md:w-8 h-6 md:h-8 bg-gradient-to-tr from-cyan-500 to-fuchsia-600 rounded-lg flex items-center justify-center text-white font-bold text-xs md:text-sm">
              N
            </div>
            <span className="text-lg md:text-xl font-bold text-white">Nathan's Web3</span>
          </div>
          <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-8">
            © {new Date().getFullYear()} Nathan's Community. Empowering digital
            earners.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors transform hover:scale-110"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* --- Fixed Floating WhatsApp (Pops in last) --- */}
      <Reveal
        direction="scale"
        delay={2000}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
          <div className="relative bg-[#25D366] hover:bg-[#1ebc57] text-white w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 group-hover:-translate-y-1">
            <MessageCircle className="w-5 md:w-7 h-5 md:h-7 fill-current" />
          </div>
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none translate-x-2 group-hover:translate-x-0">
            Join Community 👋
          </span>
        </a>
      </Reveal>

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-x 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;