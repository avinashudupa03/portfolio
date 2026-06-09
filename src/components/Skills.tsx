import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface SkillsProps {
  dark: boolean;
}

const categoryConfig = [
  { key: 'programming', label: 'Programming Languages', icon: '💻', color: 'from-blue-600 to-blue-400' },
  { key: 'webDev', label: 'Web Development', icon: '🌐', color: 'from-cyan-600 to-cyan-400' },
  { key: 'database', label: 'Database', icon: '🗄️', color: 'from-emerald-600 to-emerald-400' },
  { key: 'tools', label: 'Tools & Technologies', icon: '🛠️', color: 'from-orange-500 to-amber-400' },
];

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  dark: boolean;
  animate: boolean;
  delay: number;
}

function SkillBar({ name, level, color, dark, animate, delay }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-gray-700'}`}>{name}</span>
        <span className={`text-xs font-semibold ${dark ? 'text-slate-400' : 'text-gray-500'}`}>{level}%</span>
      </div>
      <div className={`h-2 rounded-full ${dark ? 'bg-white/10' : 'bg-gray-100'} overflow-hidden`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all ease-out`}
          style={{
            width: animate ? `${level}%` : '0%',
            transitionDuration: '1.4s',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

const allTechBadges = [
  { name: 'React', color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
  { name: 'JavaScript', color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30' },
  { name: 'Python', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { name: 'Java', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  { name: 'C++', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  { name: 'MySQL', color: 'bg-teal-500/15 text-teal-400 border-teal-500/30' },
  { name: 'HTML5', color: 'bg-red-500/15 text-red-400 border-red-500/30' },
  { name: 'CSS3', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { name: 'Git', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  { name: 'GitHub', color: 'bg-slate-500/15 text-slate-400 border-slate-500/30' },
  { name: 'Linux', color: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  { name: 'C', color: 'bg-slate-500/15 text-slate-400 border-slate-500/30' },
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
                <div className="space-y-4">
                  {categorySkills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      dark={dark}
                      animate={isVisible}
                      delay={catIdx * 100 + i * 120}
                    />
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
