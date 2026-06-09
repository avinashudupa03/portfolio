import { MapPin, Mail, Phone, Github, Linkedin, Target, Cpu, Code2, Layers } from 'lucide-react';
import { personalInfo, hobbies, languages } from '../data/portfolioData';
import { useScrollReveal, useCounter } from '../hooks/useAnimations';

interface AboutProps {
  dark: boolean;
}

const hobbyIcons: Record<string, React.ReactNode> = {
  Target: <Target size={18} />,
  Cpu: <Cpu size={18} />,
  Code2: <Code2 size={18} />,
  Layers: <Layers size={18} />,
};

const stats = [
  { label: 'CGPA', value: 91, suffix: '/10', display: '9.1' },
  { label: 'Projects', value: 4, suffix: '+' },
  { label: 'CS Score', value: 99, suffix: '%' },
  { label: 'PU Score', value: 95, suffix: '%' },
];

function StatCard({ stat, dark, isVisible }: { stat: typeof stats[0]; dark: boolean; isVisible: boolean }) {
  const raw = useCounter(stat.value, 1800, isVisible);
  const display = stat.display ?? (stat.suffix === '/10' ? (raw / 10).toFixed(1) : raw.toString());

  return (
    <div className={`text-center p-4 rounded-2xl ${dark ? 'bg-white/5' : 'bg-white shadow-sm border border-gray-100'}`}>
      <div className="text-3xl font-bold gradient-text">
        {isVisible ? display : '0'}{stat.suffix !== '/10' ? stat.suffix : ''}
      </div>
      <div className={`text-sm mt-1 ${dark ? 'text-slate-400' : 'text-gray-500'}`}>{stat.label}</div>
    </div>
  );
}

export default function About({ dark }: AboutProps) {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Get To Know Me
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="relative max-w-md mx-auto">
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 opacity-10 blur-xl`} />
              <div className={`relative rounded-3xl overflow-hidden border-2 ${dark ? 'border-white/10' : 'border-gray-100'} shadow-2xl`}>
                <img
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Developer workspace"
                  className="w-full h-80 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-dark-800/60' : 'from-white/60'} to-transparent`} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className={`glass ${dark ? '' : 'glass-light'} rounded-2xl p-4`}>
                    <div className={`font-bold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>{personalInfo.name}</div>
                    <div className={`text-sm ${dark ? 'text-blue-400' : 'text-blue-600'}`}>{personalInfo.role}</div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} dark={dark} isVisible={isVisible} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className={`reveal-right ${isVisible ? 'visible' : ''}`}>
            <h3 className={`text-2xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
              Motivated Developer & Passionate Learner
            </h3>
            <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
              {personalInfo.about}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={16} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={16} />, label: 'Location', value: personalInfo.location, href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${dark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className={`text-xs ${dark ? 'text-slate-500' : 'text-gray-400'}`}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={`block text-sm font-medium hover:text-blue-500 transition-colors ${dark ? 'text-slate-300' : 'text-gray-700'}`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-gray-700'}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mb-8">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${dark ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <Github size={16} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-blue-600/30">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            {/* Hobbies & Languages */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-gray-500'}`}>Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((h) => (
                    <span key={h.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${dark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-gray-50 text-gray-700 border border-gray-200'}`}>
                      {hobbyIcons[h.icon]}
                      {h.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-gray-500'}`}>Languages</h4>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-3">
                      <span className={`text-sm w-20 ${dark ? 'text-slate-300' : 'text-gray-700'}`}>{lang.name}</span>
                      <div className={`flex-1 h-1.5 rounded-full ${dark ? 'bg-white/10' : 'bg-gray-200'}`}>
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-1000"
                          style={{ width: isVisible ? `${lang.percent}%` : '0%' }}
                        />
                      </div>
                      <span className={`text-xs w-20 ${dark ? 'text-slate-500' : 'text-gray-400'}`}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
