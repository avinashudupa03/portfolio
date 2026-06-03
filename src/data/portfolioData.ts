// Portfolio data for M Avinash Udupa

export const personalInfo = {
  name: 'M Avinash Udupa',
  shortName: 'Avinash',
  role: 'BCA Student | Full Stack Web Development Intern',
  taglines: [
    'Full Stack Web Developer',
    'React Enthusiast',
    'Problem Solver',
    'BCA Student',
    'Open Source Contributor',
  ],
  about: `I am a motivated BCA student with a strong foundation in programming, databases, and computer applications. I am passionate about learning modern technologies and solving real-world problems through software development. Currently interning as a Full Stack Web Development Intern at Zephyr Technologies & Solutions, I continuously work on improving my technical skills and building impactful projects that make a difference.`,
  phone: '+91 9591473247',
  email: 'avinashudupa03@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: 'Karnataka, India',
  cgpa: '9.1',
  resumeUrl: '#',
};

export const skills = {
  programming: [
    { name: 'C', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'Python', level: 72 },
  ],
  webDev: [
    { name: 'HTML', level: 92 },
    { name: 'CSS', level: 88 },
    { name: 'JavaScript', level: 82 },
    { name: 'React', level: 78 },
  ],
  database: [
    { name: 'MySQL', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 75 },
    { name: 'GitHub', level: 78 },
    { name: 'Linux', level: 60 },
  ],
};

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Nitte University',
    period: 'Currently Pursuing',
    score: 'CGPA: 9.1',
    icon: '🎓',
    highlights: ['Strong academic performance', 'Computer Applications focus', 'Programming & Databases'],
  },
  {
    degree: 'Commerce (CEBA)',
    institution: 'Janatha Independent PU College, Hemmady',
    period: 'Completed',
    score: '95% — Scored 99 in Computer Science',
    icon: '📚',
    highlights: ['95% aggregate score', '99/100 in Computer Science', 'CEBA specialization'],
  },
];

export const experience = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'Zephyr Technologies & Solutions Pvt. Ltd.',
    period: 'May 2026 – Present',
    type: 'Internship',
    description: 'Working on full stack web development projects, contributing to real-world applications and learning modern development practices in a professional environment.',
    responsibilities: [
      'Developing responsive web applications using React and modern JavaScript',
      'Collaborating with senior developers on production-level projects',
      'Implementing RESTful APIs and database integrations',
      'Participating in code reviews and agile development processes',
      'Building and testing UI components for client-facing applications',
    ],
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'MySQL', 'Git', 'GitHub'],
    skills: ['Full Stack Development', 'Team Collaboration', 'Agile Methodology', 'Code Review'],
  },
];

export const projects = [
  {
    title: 'Cricket Management System',
    description: 'A comprehensive cricket management platform featuring player profiles, match scheduling, live score tracking, and detailed statistics dashboard with analytics.',
    image: 'https://images.pexels.com/photos/163398/sport-cricket-green-ground-163398.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'JavaScript', 'MySQL', 'CSS'],
    features: ['Player Management', 'Match Scheduling', 'Score Tracking', 'Statistics Dashboard'],
    github: '#',
    live: '#',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Student Management System',
    description: 'Full-featured student management system for educational institutions to manage student records, attendance tracking, examination results, and detailed reports.',
    image: 'https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Java', 'MySQL', 'HTML', 'CSS'],
    features: ['Student Records', 'Attendance Tracking', 'Exam Results', 'Detailed Reports'],
    github: '#',
    live: '#',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    title: 'Expense Tracker',
    description: 'Smart personal finance tracker with expense categorization, monthly summaries, budget planning, and visual charts to help manage personal finances effectively.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    features: ['Add Expenses', 'Monthly Summary', 'Category Tracking', 'Budget Planning'],
    github: '#',
    live: '#',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive personal portfolio website with dark/light mode, smooth animations, interactive sections, and professional design suitable for job applications.',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    features: ['Responsive Design', 'Dark Mode', 'Modern UI', 'Smooth Animations'],
    github: '#',
    live: '#',
    color: 'from-blue-600 to-violet-600',
  },
];

export const certifications = [
  {
    title: 'Linux Fundamentals',
    issuer: 'DevTown',
    description: 'Comprehensive certification covering Linux command line, file systems, permissions, shell scripting, and system administration fundamentals.',
    icon: '🐧',
    color: 'from-orange-500 to-red-500',
    skills: ['Linux CLI', 'Shell Scripting', 'File Systems', 'System Admin'],
  },
  {
    title: 'SQL Basics',
    issuer: 'DevTown',
    description: 'Certification in SQL fundamentals including database design, queries, joins, aggregations, stored procedures, and database management.',
    icon: '🗄️',
    color: 'from-blue-500 to-cyan-500',
    skills: ['SQL Queries', 'Database Design', 'Joins & Aggregations', 'MySQL'],
  },
  {
    title: 'Android Development',
    issuer: 'Certification Program',
    description: 'Android application development certification covering Java-based development, Android SDK, UI design, and mobile app deployment.',
    icon: '📱',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Android SDK', 'Java', 'UI Design', 'App Deployment'],
  },
];

export const achievements = [
  {
    title: 'Cantech IT Quiz',
    description: 'Participated in the prestigious IT Quiz competition at Cantech, demonstrating strong technical knowledge and problem-solving abilities.',
    icon: 'Trophy',
    category: 'Academic',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    title: 'Yenixa Web Dev Competition',
    description: 'Participated in the Web Development competition at Yenixa, showcasing frontend development skills and creative design capabilities.',
    icon: 'Code2',
    category: 'Technical',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Runner-up Cricket Tournament',
    description: 'Achieved Runner-up position in the Inter College Cricket Tournament for two consecutive years, demonstrating consistent athletic excellence.',
    icon: 'Award',
    category: 'Sports',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    title: 'Nitte University Cricket Team',
    description: 'Proud member of the Nitte University Cricket Team, representing the university at inter-university cricket events and competitions.',
    icon: 'Star',
    category: 'Sports',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
];

export const hobbies = [
  { name: 'Cricket', icon: 'Target' },
  { name: 'Learning New Tech', icon: 'Cpu' },
  { name: 'Coding Challenges', icon: 'Code2' },
  { name: 'Project Building', icon: 'Layers' },
];

export const languages = [
  { name: 'English', level: 'Professional', percent: 85 },
  { name: 'Kannada', level: 'Native', percent: 100 },
  { name: 'Hindi', level: 'Conversational', percent: 70 },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
