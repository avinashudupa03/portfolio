import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useAnimations';

interface HeroProps {
  dark: boolean;
}

function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero({ dark }: HeroProps) {
  const typed = useTypewriter(personalInfo.taglines, 80, 2200);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        dark ? 'bg-dark-900' : 'bg-slate-50'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50'}`} />
        {dark && <ParticlesBg />}

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              dark ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm{' '}
              <span className="gradient-text">
                {personalInfo.shortName}
              </span>
              <br />
              <span className={`text-3xl sm:text-4xl lg:text-5xl ${dark ? 'text-slate-300' : 'text-gray-700'}`}>
                Udupa
              </span>
            </h1>

            <div className={`text-xl sm:text-2xl font-semibold mb-6 h-8 flex items-center justify-center lg:justify-start gap-2 ${dark ? 'text-slate-300' : 'text-gray-600'}`}>
              <span className="text-blue-500">&lt;</span>
              <span className="font-mono min-w-[200px]">{typed}</span>
              <span className="typewriter-cursor" />
              <span className="text-blue-500">/&gt;</span>
            </div>

            <p className={`text-base sm:text-lg leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0 ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
              {personalInfo.about.slice(0, 160)}...
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-colors ${dark ? 'text-slate-400 hover:text-blue-400 bg-white/5 hover:bg-white/10' : 'text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50'}`}>
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <span className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg ${dark ? 'text-slate-400 bg-white/5' : 'text-gray-500 bg-gray-100'}`}>
                <MapPin size={14} />
                {personalInfo.location}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download="M_Avinash_Udupa_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5">
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                  dark
                    ? 'border-blue-500/50 text-blue-400 hover:bg-blue-600/10 hover:border-blue-400'
                    : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                  dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                  dark ? 'bg-white/10 text-blue-400 hover:bg-blue-600/20' : 'bg-gray-100 text-blue-600 hover:bg-blue-50'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                  dark ? 'bg-white/10 text-green-400 hover:bg-green-600/20' : 'bg-gray-100 text-green-600 hover:bg-green-50'
                }`}
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Right: Profile Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 blur-xl opacity-20 animate-pulse-slow" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

                {/* Profile image container */}
                <div className={`absolute inset-6 rounded-full overflow-hidden border-4 ${dark ? 'border-dark-700' : 'border-white'} shadow-2xl`}>
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="M Avinash Udupa - Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>

                {/* Floating badges */}
                <div className={`absolute -top-2 -right-2 px-3 py-2 rounded-xl text-xs font-bold shadow-lg animate-float ${dark ? 'bg-dark-800 text-blue-400 border border-blue-500/30' : 'bg-white text-blue-600 border border-blue-100 shadow-blue-100'}`}>
                  CGPA 9.1 ⭐
                </div>
                <div className={`absolute -bottom-2 -left-2 px-3 py-2 rounded-xl text-xs font-bold shadow-lg animate-float ${dark ? 'bg-dark-800 text-cyan-400 border border-cyan-500/30' : 'bg-white text-cyan-600 border border-cyan-100'}`} style={{ animationDelay: '3s' }}>
                  React Dev 💻
                </div>
                <div className={`absolute top-1/2 -right-8 px-3 py-2 rounded-xl text-xs font-bold shadow-lg animate-float ${dark ? 'bg-dark-800 text-emerald-400 border border-emerald-500/30' : 'bg-white text-emerald-600 border border-emerald-100'}`} style={{ animationDelay: '1.5s' }}>
                  Intern 🚀
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className={`flex flex-col items-center gap-2 group transition-colors ${dark ? 'text-slate-500 hover:text-slate-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
            <ChevronDown size={20} className="animate-bounce-slow" />
          </button>
        </div>
      </div>
    </section>
  );
}
