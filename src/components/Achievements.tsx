import { Trophy, Code2, Award, Star, Monitor } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface AchievementsProps {
  dark: boolean;
}

const iconComponents: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={22} />,
  Code2: <Code2 size={22} />,
  Award: <Award size={22} />,
  Star: <Star size={22} />,
  Monitor: <Monitor size={22} />,
};

export default function Achievements({ dark }: AchievementsProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="achievements"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Recognition
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <div
              key={item.title}
              className={`group reveal-scale ${isVisible ? 'visible' : ''} flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 card-glow ${
                dark
                  ? 'bg-white/5 border border-white/10 hover:bg-white/8'
                  : 'bg-white shadow-sm border border-gray-100 hover:shadow-lg'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {iconComponents[item.icon] ?? <Trophy size={22} />}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className={`font-bold text-lg leading-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <span className={`text-xs px-2.5 py-1 rounded-lg font-medium flex-shrink-0 ${
                    item.category === 'Sports'
                      ? dark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
                      : item.category === 'Technical'
                      ? dark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-700'
                      : dark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
