import { Github, ExternalLink, Tag } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface ProjectsProps {
  dark: boolean;
}

export default function Projects({ dark }: ProjectsProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            My Work
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
            A selection of projects built to solve real-world problems and sharpen technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`group reveal-scale ${isVisible ? 'visible' : ''} rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1 ${
                dark
                  ? 'bg-white/5 border border-white/10 hover:bg-white/8'
                  : 'bg-white shadow-sm border border-gray-100 hover:shadow-xl'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-dark-800' : 'from-white'} via-transparent to-transparent opacity-60`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                {/* Overlay buttons on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-900/90 text-white rounded-xl text-sm font-medium hover:bg-dark-800 transition-colors backdrop-blur-sm"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-xl text-sm font-medium transition-opacity hover:opacity-90 shadow-lg`}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className={`text-xs px-2.5 py-1 rounded-lg ${
                        dark ? 'bg-white/5 text-slate-400 border border-white/10' : 'bg-gray-50 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex items-center gap-1.5 flex-wrap mb-5">
                  <Tag size={12} className={dark ? 'text-slate-500' : 'text-gray-400'} />
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg bg-gradient-to-r ${project.color} bg-clip-text text-transparent border ${
                        dark ? 'border-white/10' : 'border-gray-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                      dark ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Github size={15} /> View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r ${project.color} text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md`}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
