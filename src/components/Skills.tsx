import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface SkillsProps {
  dark: boolean;
}

const categoryConfig = [
  { key: 'webDev', label: 'Frontend Development', icon: '🌐', color: 'from-cyan-600 to-cyan-400' },
  { key: 'programming', label: 'Programming Languages', icon: '💻', color: 'from-blue-600 to-blue-400' },
  { key: 'database', label: 'Database Management', icon: '🗄️', color: 'from-emerald-600 to-emerald-400' },
  { key: 'tools', label: 'Tools & Technologies', icon: '🛠️', color: 'from-orange-500 to-amber-400' },
];

const allTechBadges = [
  { name: 'React', color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
  { name: 'JavaScript', color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30' },
  { name: 'Python', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { name: 'Java', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  { name: 'MySQL', color: 'bg-teal-500/15 text-teal-400 border-teal-500/30' },
  { name: 'HTML5', color: 'bg-red-500/15 text-red-400 border-red-500/30' },
  { name: 'CSS3', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { name: 'Git', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  { name: 'GitHub', color: 'bg-slate-500/15 text-slate-400 border-slate-500/30' },
];

export default function Skills({ dark }: SkillsProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-900' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            What I Know
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
            A comprehensive toolkit built through academic study, personal projects, and hands-on internship experience.
          </p>
        </div>

        {/* Tech badge cloud */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          {allTechBadges.map((badge, i) => (
            <span
              key={badge.name}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default reveal-scale ${isVisible ? 'visible' : ''} ${
                dark ? badge.color : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {badge.name}
            </span>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {categoryConfig.map((cat, catIdx) => {
            const categorySkills = skills[cat.key as keyof typeof skills] as { name: string; level: number }[];
            return (
              <div
                key={cat.key}
                className={`reveal-scale ${isVisible ? 'visible' : ''} p-6 rounded-2xl card-glow transition-all duration-300 ${
                  dark ? 'bg-white/5 border border-white/10 hover:bg-white/8' : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'
                }`}
                style={{ transitionDelay: `${catIdx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-md`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-bold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        dark
                          ? 'bg-white/10 text-slate-300 border border-white/10'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
