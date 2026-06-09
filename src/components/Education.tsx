import { GraduationCap, Award, Star } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface EducationProps {
  dark: boolean;
}

export default function Education({ dark }: EducationProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Academic Background
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${dark ? 'bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent' : 'bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent'}`} />

          {education.map((edu, idx) => (
            <div
              key={edu.degree}
              className={`relative pl-20 pb-12 reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-5 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm ${
                dark ? 'bg-dark-800 border-blue-500 text-blue-400' : 'bg-white border-blue-500 text-blue-600'
              } shadow-md shadow-blue-500/20`}>
                <GraduationCap size={14} />
              </div>

              <div className={`relative group p-6 rounded-2xl card-glow transition-all duration-300 ${
                dark
                  ? 'bg-white/5 border border-white/10 hover:bg-white/8'
                  : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'
              }`}>
                {/* Top row */}
                <div className="flex items-start gap-4 mb-5">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-20 h-20 object-contain rounded-xl bg-white p-2 shadow-lg"
                  />

                  <div>
                    <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                     {edu.degree}
                    </h3>

                    <p className={`text-base font-semibold mt-1 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className={`inline-block text-sm px-3 py-1.5 rounded-lg font-medium ${dark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {edu.period}
                    </span>
                </div>

                {/* Score */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-4 ${dark ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                  <Star size={14} className="fill-current" />
                  <span className="text-sm font-semibold">{edu.score}</span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg ${
                        dark ? 'bg-white/5 text-slate-400 border border-white/10' : 'bg-gray-50 text-gray-600 border border-gray-200'
                      }`}
                    >
                      <Award size={10} />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b from-blue-600 to-cyan-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
