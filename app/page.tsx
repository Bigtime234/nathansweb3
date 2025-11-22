"use client"

import React, { useState, useEffect } from 'react';
import { Gift, Smartphone, Phone, Coins, Zap, Users, Bell, TrendingUp, Star, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


export default function NathansWeb3Landing() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const whatsappLink = "https://chat.whatsapp.com/Cm5hXGbNn1yAoa4QnSPXQt?mode=wwt";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    { icon: <Coins className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Crypto Airdrops", description: "Get daily updates on legit paying crypto airdrops. Free tokens delivered straight to your wallet!", color: "from-yellow-400 to-orange-500" },
    { icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Data Loots", description: "Never miss out on free data! Get instant alerts on all data giveaways and bonuses.", color: "from-blue-400 to-cyan-500" },
    { icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Airtime Loots", description: "Free airtime updates daily! Stay connected without spending your money.", color: "from-green-400 to-emerald-500" },
    { icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Money Opportunities", description: "Anything that brings money, we share! From surveys to cashback, we've got you covered.", color: "from-purple-400 to-pink-500" },
    { icon: <Bell className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Instant Notifications", description: "Be the first to know! Get real-time alerts so you never miss any opportunity.", color: "from-red-400 to-rose-500" },
    { icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Daily Updates", description: "Fresh opportunities every single day. Pin our community and stay ahead of the game!", color: "from-indigo-400 to-purple-500" }
  ];

  const stats = [
    { value: "100%", label: "Free Updates", icon: "🎁" },
    { value: "Daily", label: "New Opportunities", icon: "🔥" },
    { value: "15K+", label: "Community Members", icon: "👥" },
    { value: "24/7", label: "Active Updates", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-brrom-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="absolute inset-0 bg-linear-to-tl from-pink-900/10 via-transparent to-green-900/10" />
        <div className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-30 bg-linear-to-r from-cyan-500 to-blue-500" style={{ top: '10%', left: '10%', animation: 'float 20s ease-in-out infinite' }} />
        <div className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-30 bg-linear-to-r from-purple-500 to-pink-500" style={{ bottom: '10%', right: '10%', animation: 'float 25s ease-in-out infinite reverse' }} />
        <div className="absolute w-64 h-64 rounded-full filter blur-3xl opacity-20 bg-linear-to-r from-green-500 to-emerald-500" style={{ top: '50%', left: '50%', animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        {[...Array(5)].map((_, i) => (
          <div key={`star-${i}`} className="absolute h-0.5 w-32 bg-linear-to-r from-transparent via-cyan-400 to-transparent" style={{ top: `${15 + i * 20}%`, left: '-200px', animation: `shoot ${2.5 + i * 0.5}s linear ${i * 3}s infinite`, transform: 'rotate(-45deg)' }} />
        ))}
        {[...Array(150)].map((_, i) => (
          <div key={`dot-${i}`} className="absolute rounded-full" style={{ width: Math.random() * 3 + 1 + 'px', height: Math.random() * 3 + 1 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', background: `rgba(${Math.random() > 0.5 ? '6, 182, 212' : '168, 85, 247'}, ${Math.random() * 0.5 + 0.5})`, animation: `twinkle ${Math.random() * 4 + 2}s infinite ${Math.random() * 2}s`, boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(6, 182, 212, 0.5)` }} />
        ))}
        {[...Array(30)].map((_, i) => (
          <div key={`particle-${i}`} className="absolute rounded-full bg-linear-to-r from-cyan-400 to-purple-500" style={{ width: Math.random() * 4 + 2 + 'px', height: Math.random() * 4 + 2 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite ${Math.random() * 5}s`, opacity: 0.3 }} />
        ))}
      </div>

      <style>{`
        @keyframes shoot { 0% { left: -200px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes float { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(30px, -30px) rotate(120deg); } 66% { transform: translate(-20px, 20px) rotate(240deg); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.2); } 50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.5), 0 0 90px rgba(6, 182, 212, 0.3); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center backdrop-blur-xl bg-linear-to-r from-white/5 via-white/10 to-white/5 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 shadow-xl shadow-cyan-500/10">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <filter id="navGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <path d="M 50 5 L 90 27.5 L 90 72.5 L 50 95 L 10 72.5 L 10 27.5 Z" fill="rgba(0,0,0,0.5)" stroke="url(#navLogoGrad)" strokeWidth="3" filter="url(#navGlow)" />
                  <text x="50" y="62" textAnchor="middle" fontSize="40" fill="url(#navLogoGrad)" fontWeight="bold">$</text>
                </svg>
              </div>
              <div className="text-lg sm:text-2xl font-bold tracking-wider">
                <span className="bg-linear-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">NATHAN'S</span>
                <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">WEB3</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['Home', 'Updates', 'Loots', 'Community'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-all duration-300 text-sm lg:text-base relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-linear-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all text-sm sm:text-base font-semibold flex items-center gap-2 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 duration-300">
              <FaWhatsapp className="w-4 h-4" />
              <span className="hidden sm:inline">Join Now</span>
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-3 backdrop-blur-xl bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-xs sm:text-sm tracking-widest uppercase font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">FREE LEGIT PAYING UPDATES DAILY</span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
          
          <div className="mb-8 sm:mb-12 flex justify-center" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30" style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute inset-4 rounded-full border border-purple-400/30" style={{ animation: 'spin 15s linear infinite reverse' }} />
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl relative z-10">
                <defs>
                  <linearGradient id="heroLogoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" /><stop offset="50%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="heroLogoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a3e635" /><stop offset="50%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <filter id="heroGlow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <radialGradient id="centerGlow">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#centerGlow)" />
                <path d="M 100 15 L 175 57.5 L 175 142.5 L 100 185 L 25 142.5 L 25 57.5 Z" fill="none" stroke="url(#heroLogoGrad1)" strokeWidth="5" filter="url(#heroGlow)" opacity="0.9" />
                <path d="M 100 30 L 160 65 L 160 135 L 100 170 L 40 135 L 40 65 Z" fill="rgba(0, 0, 0, 0.7)" stroke="url(#heroLogoGrad1)" strokeWidth="3" opacity="0.8" />
                <path d="M 100 45 L 145 72.5 L 145 127.5 L 100 155 L 55 127.5 L 55 72.5 Z" fill="rgba(0, 0, 0, 0.5)" stroke="url(#heroLogoGrad2)" strokeWidth="2" />
                <g stroke="url(#heroLogoGrad2)" strokeWidth="2" opacity="0.7">
                  <path d="M 100 50 L 100 40 M 100 40 L 110 35" />
                  <path d="M 130 70 L 145 65 M 145 65 L 150 55" />
                  <path d="M 70 70 L 55 65 M 55 65 L 50 55" />
                  <circle cx="100" cy="40" r="3" fill="#22d3ee" />
                  <circle cx="145" cy="65" r="3" fill="#22d3ee" />
                  <circle cx="55" cy="65" r="3" fill="#22d3ee" />
                </g>
                <text x="70" y="95" fontSize="28" fill="url(#heroLogoGrad2)" fontWeight="bold" filter="url(#heroGlow)">₿</text>
                <text x="118" y="95" fontSize="28" fill="url(#heroLogoGrad2)" fontWeight="bold" filter="url(#heroGlow)">$</text>
                <g filter="url(#heroGlow)">
                  <path d="M 92 108 L 100 95 L 108 108" fill="none" stroke="url(#heroLogoGrad2)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 100 95 L 100 120" stroke="url(#heroLogoGrad2)" strokeWidth="3" strokeLinecap="round" />
                </g>
                <g opacity="0.8">
                  {[25, 35, 30, 37].map((h, i) => (
                    <rect key={i} x={60 + i * 22} y={155 - h} width="15" height={h} fill="url(#heroLogoGrad1)" rx="2">
                      <animate attributeName="height" values={`${h};${h + 7};${h}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                      <animate attributeName="y" values={`${155 - h};${155 - h - 7};${155 - h}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                    </rect>
                  ))}
                </g>
                <text x="130" y="145" fontSize="20" fill="#22d3ee" fontWeight="bold" opacity="0.9">$</text>
                <text x="148" y="138" fontSize="16" fill="#a3e635" fontWeight="bold" opacity="0.8">$</text>
                {[[50, 85], [150, 115], [100, 52]].map((pos, i) => (
                  <circle key={i} cx={pos[0]} cy={pos[1]} r="3" fill={['#06b6d4', '#ec4899', '#a3e635'][i]}>
                    <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                  </circle>
                ))}
              </svg>
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="absolute w-2 h-2 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 shadow-lg" style={{ top: `${50 + Math.cos(i * Math.PI / 6) * 45}%`, left: `${50 + Math.sin(i * Math.PI / 6) * 45}%`, animation: `twinkle ${2 + i * 0.2}s infinite ${i * 0.3}s`, boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }} />
                ))}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            <span className="bg-linear-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-2xl">NATHAN'S</span>
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease infinite' }}>WEB3 UPDATES</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 font-bold px-4">
            <span className="bg-linear-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">Na Who Get Money Go Enjoy! 🤑</span>
          </p>
          
          <p className="text-base sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Free updates on <span className="text-cyan-400 font-semibold">crypto airdrops</span>, <span className="text-purple-400 font-semibold">data loots</span>, <span className="text-green-400 font-semibold">airtime loots</span>, and <span className="text-pink-400 font-semibold">anything that brings money</span>! Join our community and never miss out again! 💸
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-12 sm:mb-16">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative group bg-linear-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl overflow-hidden" style={{ animation: 'pulse-glow 2s infinite' }}>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              <FaWhatsapp className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Join WhatsApp Community FREE</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div key={index} className="group relative backdrop-blur-2xl bg-linear-to-br from-white/10 via-white/5 to-transparent p-6 sm:p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <div className="text-4xl mb-3 relative z-10">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 relative z-10">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-300 relative z-10">{stat.label}</div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-400/30 mb-6">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-xs sm:text-sm tracking-widest uppercase font-bold text-cyan-400">What You'll Get Daily</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              <span className="bg-linear-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">Free Legit Paying</span>
              <br />
              <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Updates! 🔥</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">Everything you need to make money online - absolutely FREE! No payment, no subscription, just pure value delivered daily! 💸</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative backdrop-blur-2xl bg-linear-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-10 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden">
                <div className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>{feature.icon}</div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="loots" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-purple-500/10 px-6 py-3 rounded-full border border-purple-400/30 mb-6">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-xs sm:text-sm tracking-widest uppercase font-bold text-purple-400">Why Join Nathan's Web3</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-linear-to-r from-white to-cyan-200 bg-clip-text text-transparent">Stay Ahead,</span>
                <br />
                <span className="bg-linear-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Get Money! 💰</span>
              </h2>
              
              <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">Nathan's Web3 Updates brings you the freshest opportunities to make money online - completely FREE! From crypto airdrops to data loots, we've got you covered.</p>
              
              <div className="space-y-4 mb-8">
                {[
                  { text: "Crypto airdrops worth thousands", icon: "🪙", color: "from-yellow-400 to-orange-500" },
                  { text: "Free data giveaways daily", icon: "📱", color: "from-blue-400 to-cyan-500" },
                  { text: "Airtime loots & bonuses", icon: "☎️", color: "from-green-400 to-emerald-500" },
                  { text: "Money-making opportunities 24/7", icon: "💵", color: "from-purple-400 to-pink-500" },
                  { text: "No scam, only legit paying updates", icon: "✔️", color: "from-cyan-400 to-blue-500" },
                  { text: "Active community of 15,000+ members", icon: "👥", color: "from-pink-400 to-rose-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>{item.icon}</div>
                    <span className="text-sm sm:text-lg text-gray-300 group-hover:text-white transition-colors">✅ {item.text}</span>
                  </div>
                ))}
              </div>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-linear-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 px-8 py-4 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-2xl shadow-green-500/50">
                <FaWhatsapp className="w-6 h-6" />
                Join Free Community Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/30 to-purple-600/30 rounded-3xl filter blur-3xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative backdrop-blur-2xl bg-linear-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-12 rounded-3xl border border-white/20 group-hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <svg viewBox="0 0 300 400" className="w-full relative z-10">
                    <defs>
                      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                      <filter id="phoneGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                    </defs>
                    <rect x="50" y="30" width="200" height="340" rx="25" fill="url(#phoneGrad)" opacity="0.2" filter="url(#phoneGlow)" />
                    <rect x="55" y="35" width="190" height="330" rx="20" fill="#0a0a0a" stroke="url(#phoneGrad)" strokeWidth="2" />
                    <rect x="65" y="50" width="170" height="300" rx="15" fill="url(#phoneGrad)" opacity="0.1" />
                    <circle cx="150" cy="140" r="45" fill="#22c55e" opacity="0.9" filter="url(#phoneGlow)">
                      <animate attributeName="r" values="45;48;45" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="150" y="165" textAnchor="middle" fontSize="55" fill="white" fontWeight="bold">💰</text>
                    <g opacity="0.9">
                      <circle cx="100" cy="220" r="28" fill="#06b6d4" filter="url(#phoneGlow)">
                        <animate attributeName="cy" values="220;215;220" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="100" y="235" textAnchor="middle" fontSize="35" fill="white">🎁</text>
                      <circle cx="200" cy="220" r="28" fill="#8b5cf6" filter="url(#phoneGlow)">
                        <animate attributeName="cy" values="220;225;220" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <text x="200" y="235" textAnchor="middle" fontSize="35" fill="white">📱</text>
                      <circle cx="150" cy="270" r="25" fill="#ec4899" filter="url(#phoneGlow)">
                        <animate attributeName="cy" values="270;265;270" dur="2.7s" repeatCount="indefinite" />
                      </circle>
                      <text x="150" y="283" textAnchor="middle" fontSize="30" fill="white">☎️</text>
                    </g>
                    <circle cx="150" cy="310" r="15" fill="#e0e7ff" />
                    <rect x="142" y="325" width="16" height="35" fill="#e0e7ff" rx="3" />
                    <path d="M 130 335 L 120 365" stroke="#e0e7ff" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 170 335 L 180 365" stroke="#e0e7ff" strokeWidth="8" strokeLinecap="round" />
                    <g fill="#fbbf24" opacity="0.8">
                      {[[80, 100], [220, 180], [190, 110]].map((pos, i) => (
                        <circle key={i} cx={pos[0]} cy={pos[1]} r={i === 2 ? "2" : "3"}>
                          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                        </circle>
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-green-500/10 px-6 py-3 rounded-full border border-green-400/30 mb-6">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-xs sm:text-sm tracking-widest uppercase font-bold text-green-400">Join 15,000+ Smart People</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 px-4">
            <span className="bg-linear-to-r from-white to-green-200 bg-clip-text text-transparent">Ready To</span>
            <br />
            <span className="bg-linear-to-r from-yellow-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">Get Money? 🤑</span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-300 mb-12 leading-relaxed px-4">Don't miss out on free money opportunities! Join Nathan's Web3 Updates community on WhatsApp and start receiving daily updates NOW! 🔥</p>
          
          <div className="relative group backdrop-blur-2xl bg-linear-to-br from-green-500/20 via-emerald-500/20 to-green-600/20 p-8 sm:p-12 rounded-3xl border-2 border-green-400/30 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-green-500/30 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #22c55e 0px, #22c55e 10px, transparent 10px, transparent 20px)', animation: 'gradient-shift 20s linear infinite' }} />
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-green-400/50 animate-pulse" />
            <div className="relative z-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/50" style={{ animation: 'pulse-glow 2s infinite' }}>
                <FaWhatsapp className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-linear-to-r from-white via-green-200 to-white bg-clip-text text-transparent">JOIN OUR WHATSAPP COMMUNITY!</span>
              </h3>
              <div className="backdrop-blur-xl bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 mb-8 max-w-md mx-auto">
                <div className="space-y-3 text-left">
                  {[
                    { text: "Crypto airdrops", icon: "🪙" },
                    { text: "Data loots", icon: "📱" },
                    { text: "Airtime loots", icon: "☎️" },
                    { text: "Money opportunities", icon: "💵" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base sm:text-lg group">
                      <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                      <span className="text-gray-200">✅ {item.text}</span>
                    </div>
                  ))}
                  <div className="pt-3 mt-3 border-t border-white/10">
                    <p className="text-center text-yellow-400 font-bold text-lg sm:text-xl">🔥 Na who get money go enjoy! 🤑</p>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base mb-8 font-semibold flex items-center justify-center gap-2">
                <span className="text-cyan-400">📌 Pin our community & stay updated!</span>
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-linear-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold transition-all transform hover:scale-110 shadow-2xl shadow-green-500/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
                <span className="relative z-10">JOIN NOW - IT'S 100% FREE! 🚀</span>
              </a>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-green-400/30 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-emerald-400/30 to-transparent rounded-tl-full" />
          </div>
        </div>
      </section>

      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <path d="M 50 5 L 90 27.5 L 90 72.5 L 50 95 L 10 72.5 L 10 27.5 Z" fill="rgba(0,0,0,0.5)" stroke="url(#footerLogoGrad)" strokeWidth="3" />
                    <text x="50" y="62" textAnchor="middle" fontSize="40" fill="url(#footerLogoGrad)" fontWeight="bold">$</text>
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl font-bold">
                  <span className="text-white">NATHAN'S</span>
                  <span className="text-cyan-400">WEB3</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400">Your daily source for free money opportunities! 💰</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base text-cyan-400">Quick Links</h4>
              <div className="space-y-2">
                {['home', 'updates', 'loots'].map((link) => (
                  <a key={link} href={`#${link}`} className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors capitalize">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base text-purple-400">Community</h4>
              <div className="space-y-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-purple-400 transition-colors">WhatsApp</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-purple-400 transition-colors">Telegram</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-purple-400 transition-colors">Twitter</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base text-pink-400">Info</h4>
              <div className="space-y-2">
                {['About Us', 'Privacy', 'Contact'].map((item) => (
                  <a key={item} href="#" className="block text-sm text-gray-400 hover:text-pink-400 transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 pt-8 border-t border-white/10 space-y-2">
            <p className="flex items-center justify-center gap-2 text-base font-semibold">
              <span className="text-green-400">🔥 100% FREE Updates</span>
              <span className="text-gray-500">|</span>
              <span className="text-cyan-400">No Payment Required</span>
            </p>
            <p>&copy; 2025 Nathan's Web3 Updates. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          <div className="absolute inset-0 rounded-full bg-green-500" style={{ animation: 'pulse-glow 2s infinite' }} />
          <div className="relative bg-linear-to-br from-green-500 to-green-600 p-4 sm:p-5 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300">
            <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-linear-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-semibold shadow-xl hidden sm:block">
            Join Free Updates! 🔥
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-green-600" />
          </span>
        </div>
      </a>
    </div>
  );
}