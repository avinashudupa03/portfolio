import { Github, Linkedin, Mail, Phone, Heart, Code2, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

interface FooterProps {
  dark: boolean;
}

export default function Footer({ dark }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${dark ? 'bg-dark-900 border-t border-white/5' : 'bg-white border-t border-gray-100'}`}>
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
                <Code2 size={18} className="text-white" />
              </div>
              <div>
                <div className={`font-bold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {personalInfo.name}
                </div>
                <div className={`text-xs ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                  Full Stack Developer
                </div>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${dark ? 'text-slate-500' : 'text-gray-500'}`}>
              BCA Student and Full Stack Web Development Intern passionate about building modern, impactful web applications.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <Github size={16} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <Linkedin size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
                { icon: <Phone size={16} />, href: `tel:${personalInfo.phone}`, label: 'Phone' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                    dark ? 'bg-white/10 text-slate-400 hover:bg-blue-600/20 hover:text-blue-400' : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-bold mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`text-sm transition-colors hover:text-blue-500 ${dark ? 'text-slate-400' : 'text-gray-600'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-bold mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>Contact Info</h3>
            <div className="space-y-3">
              <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-2.5 text-sm transition-colors hover:text-blue-500 ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                <Mail size={14} className="flex-shrink-0" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className={`flex items-center gap-2.5 text-sm transition-colors hover:text-blue-500 ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                <Phone size={14} className="flex-shrink-0" />
                {personalInfo.phone}
              </a>
              <div className={`flex items-center gap-2.5 text-sm ${dark ? 'text-slate-500' : 'text-gray-500'}`}>
                <span>📍</span>
                {personalInfo.location}
              </div>
            </div>

            <div className={`mt-6 p-4 rounded-xl text-sm ${dark ? 'bg-blue-600/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-700'}`}>
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-2 animate-pulse" />
              Currently open to internship and job opportunities
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t ${dark ? 'border-white/5' : 'border-gray-100'}`}>
          <p className={`text-sm flex items-center gap-1.5 ${dark ? 'text-slate-500' : 'text-gray-400'}`}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={12} className="text-red-400 fill-current" />
            using React & Tailwind CSS
          </p>
          <p className={`text-xs ${dark ? 'text-slate-600' : 'text-gray-300'}`}>
            All rights reserved
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fab w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
