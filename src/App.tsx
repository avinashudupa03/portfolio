import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    setMounted(true);
  }, [dark]);

  if (!mounted) return null;

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${
        dark
          ? 'bg-dark-900 text-slate-100'
          : 'bg-white text-gray-900'
      }`}>
        <Navbar dark={dark} toggleTheme={() => setDark(!dark)} />
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Education dark={dark} />
        <Experience dark={dark} />
        <Projects dark={dark} />
        <Certifications dark={dark} />
        <Achievements dark={dark} />
        <Contact dark={dark} />
        <Footer dark={dark} />
      </div>
    </div>
  );
}
