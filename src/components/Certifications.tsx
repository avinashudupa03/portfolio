import { Award, Shield, Smartphone } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface CertificationsProps {
  dark: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  '🐧': <Shield size={28} />,
  '🗄️': <Award size={28} />,
  '📱': <Smartphone size={28} />,
};

export default function Certifications({ dark }: CertificationsProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-900' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Credentials
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
            Professional certifications demonstrating commitment to continuous learning and skill development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className={`group reveal-scale ${isVisible ? 'visible' : ''} relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2 card-glow ${
                dark
                  ? 'glass border border-white/10'
                  : 'glass-light border border-white/60 shadow-lg'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">
                    {iconMap[cert.icon] ?? <Award size={28} />}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>
                <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                  {cert.issuer}
                </p>

                <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        dark ? 'bg-white/10 text-slate-300' : 'bg-white text-gray-700 border border-gray-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verified badge */}
                <div className={`mt-5 flex items-center gap-2 text-xs font-medium ${dark ? 'text-slate-500' : 'text-gray-400'}`}>
                  <div className="w-4 h-4 rounded-full bg-emerald-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  Certified & Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
