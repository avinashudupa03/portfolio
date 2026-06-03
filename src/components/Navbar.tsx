import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { navLinks } from '../data/portfolioData';
import { useScrollProgress, useActiveSection } from '../hooks/useAnimations';

interface NavbarProps {
  dark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ dark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(navLinks.map((l) => l.href.replace('#', '')));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? dark
              ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
              : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Code2 size={18} className="text-white" />
              </div>
              <span className={`font-bold text-lg tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
                Avinash<span className="text-blue-500"> Udupa</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'text-blue-500'
                        : dark
                        ? 'text-slate-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  dark
                    ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  dark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu lg:hidden ${mobileOpen ? 'open' : ''} ${dark ? 'bg-dark-900/98' : 'bg-white/98'} backdrop-blur-md border-t ${dark ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400'
                      : dark
                      ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
