import { Briefcase, Calendar, CheckCircle2, Zap } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface ExperienceProps {
  dark: boolean;
}

export default function Experience({ dark }: ExperienceProps) {
  const { ref, isVisible } = useScrollReveal();
  const exp = experience[0];

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-900' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Work History
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto reveal-scale ${isVisible ? 'visible' : ''}`}>
          <div className={`relative rounded-3xl overflow-hidden p-8 sm:p-10 ${
            dark
              ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
              : 'bg-white shadow-xl border border-gray-100'
          }`}>
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

            <div className="relative">
              {/* Header */}
              <div className="flex flex-wrap items-start gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                  dark ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'
                }`}>
                  <Briefcase size={28} className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${dark ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                      {exp.type}
                    </span>
                  </div>
                  <p className={`text-lg font-semibold ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {exp.company}
                  </p>
                  <div className={`flex items-center gap-2 mt-2 text-sm ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-500 font-medium">Currently Active</span>
                  </div>
                </div>
              </div>

              <p className={`text-base leading-relaxed mb-8 ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                {exp.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-4 ${dark ? 'text-slate-300' : 'text-gray-700'}`}>
                    <Zap size={14} className="text-blue-500" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className={`flex items-start gap-2.5 text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Skills */}
                <div className="space-y-6">
                  <div>
                    <h4 className={`text-sm font-bold uppercase tracking-wide mb-3 ${dark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                            dark ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold uppercase tracking-wide mb-3 ${dark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                            dark ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
