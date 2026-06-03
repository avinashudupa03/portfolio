import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useAnimations';

interface ContactProps {
  dark: boolean;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact({ dark }: ContactProps) {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const inputClass = (field: keyof FormData) => `
    w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 form-input
    ${dark
      ? `bg-white/5 border ${errors[field] ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:border-blue-500/60 focus:bg-white/8`
      : `bg-gray-50 border ${errors[field] ? 'border-red-300' : 'border-gray-200'} text-gray-900 placeholder-gray-400 focus:bg-white`
    }
  `;

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 ${dark ? 'bg-dark-900' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Let's Talk
          </span>
          <h2 className={`text-4xl font-bold mt-2 section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
            Have a project in mind or just want to connect? I'd love to hear from you. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className={`lg:col-span-2 reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={20} />,
                  label: 'Email',
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                  color: 'from-blue-600 to-blue-400',
                },
                {
                  icon: <Phone size={20} />,
                  label: 'Phone',
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                  color: 'from-emerald-600 to-emerald-400',
                },
                {
                  icon: <MapPin size={20} />,
                  label: 'Location',
                  value: personalInfo.location,
                  href: null,
                  color: 'from-cyan-600 to-cyan-400',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${
                    dark ? 'bg-white/5 border border-white/10 hover:bg-white/8' : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${dark ? 'text-slate-500' : 'text-gray-400'}`}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className={`text-sm font-medium hover:text-blue-500 transition-colors ${dark ? 'text-slate-300' : 'text-gray-700'}`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-gray-700'}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className={`text-sm font-semibold mb-4 ${dark ? 'text-slate-400' : 'text-gray-500'}`}>Connect on social</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium flex-1 justify-center transition-all duration-200 hover:-translate-y-0.5 ${
                    dark ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium flex-1 justify-center bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-blue-600/30"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-3 reveal-right ${isVisible ? 'visible' : ''}`}>
            <div className={`p-8 rounded-2xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-white shadow-xl border border-gray-100'}`}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-emerald-500" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
                  <p className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass('name')}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass('email')}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Collaboration"
                      className={inputClass('subject')}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or just say hello..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
