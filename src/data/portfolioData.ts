import { Project, Experience, Education, SkillCategory, LeadershipRole, Certification } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Janodi Chamodya',
  monogram: 'JC',
  logoPath: '/logo.png',
  university: 'University of Sri Jayewardenepura',
  company: 'Flexaro',
  email: 'bethmagejc678@gmail.com',
  linkedin: 'https://www.linkedin.com/in/janodi-chamodya',
  github: 'https://github.com/Chamodya678442',
  cvPath: '/Janodi-Chamodya-CV.pdf',
  location: 'Colombo, Sri Lanka',
  availability: 'Open to Opportunities & Collaborations',
  heroCyclingText: [
    'Software Engineer',
    'AI Enthusiast',
    'Robotics Explorer',
    'Creative Problem Solver',
  ],
  bio: `Computer Engineering undergraduate who passionate about web development, AI, robotics, and innovative technology solutions. Currently seeking internship opportunities to apply technical expertise, gain industry experience and contribute to impactful projects.`,
};

export const PROJECTS: Project[] = [
  {
    id: 'trading-ai-system',
    title: 'Multi-Modal AI-Driven Trading Decision Support System',
    subtitle: 'Cryptocurrency Intelligence & Risk Analysis',
    category: 'AI & Data',
    status: 'Ongoing',
    description:
      'Developing a web-based cryptocurrency trading platform that combines technical analysis, machine learning, backtesting, and explainable risk-aware validation to generate transparent BUY/SELL/HOLD recommendations.',
    features: [
      'Multi-modal technical indicator integration',
      'Explainable ML model predictions',
      'Real-time Binance API market streaming',
      'Historical backtesting engine with risk parameters',
    ],
    technologies: [
      'Python',
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Binance API',
    ],
    visualDirection: 'Dark financial dashboard, trading charts, analytics, and AI-powered decision support.',
    githubUrl: 'https://github.com/Chamodya678442',
    demoUrl: undefined,
  },
  {
    id: 'robotic-arm-5dof',
    title: '5-DOF Pick-and-Place',
    subtitle: 'Automated Kinematic Precision',
    category: 'Robotics & Embedded',
    status: 'Completed',
    year: '2026',
    description:
      'Developed an ESP32-based robotic arm that detects objects using an IR sensor, picks them up, and places them into six predefined slots using automated servo control.',
    features: [
      '5 Degrees of Freedom servo synchronization',
      'Infrared sensor object trigger detection',
      'Automated 6-slot sorting algorithm',
      'Wokwi simulation and hardware validation',
    ],
    technologies: ['ESP32', 'Arduino C++', 'IR Sensor', 'Servo Motors', 'Wokwi'],
    visualDirection: 'Robotics, mechanical engineering, servo systems, and embedded electronics.',
    image: '/images/Projects/Robotic Arm.png',
    githubUrl: 'https://github.com/Chamodya678442',
    demoUrl: undefined,
  },
  {
    id: 'raawa-ai',
    title: 'RaawaAI: AI-Powered Policy Resonance Simulator',
    subtitle: 'Demographic Persona Public Sentiment Simulation',
    category: 'AI & Data',
    status: 'Completed',
    description:
      'Developed a full-stack AI platform that simulates public reactions to policies, products, and campaigns using demographic personas.',
    features: [
      'Multi-agent demographic simulations',
      'Sentiment analysis & backlash-probability scoring',
      'Regional heatmaps & demographic analytics',
      'Synthetic social-media response generator',
      'LLM-assisted policy refinement engine',
      'Report generation & DynamoDB storage',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Vite',
      'OpenAI API',
      'Hugging Face',
      'AWS DynamoDB',
      'Recharts',
    ],
    visualDirection: 'AI dashboards, demographic analytics, interactive heatmaps, and simulation interfaces.',
    githubUrl: 'https://github.com/Chamodya678442',
    demoUrl: undefined,
  },
  {
    id: 'nom-nom-zen',
    title: 'Nom Nom Zen: 2D Platform Game',
    subtitle: 'Desktop Game Engine & Mechanics',
    category: 'Game Dev',
    status: 'Completed',
    description:
      'Developed a 2D platform game featuring food collection, obstacle avoidance, collision detection, and progressive levels. Designed game graphics and debugged gameplay logic to ensure smooth performance and an engaging user experience.',
    features: [
      'Custom physics and precise collision detection',
      'Multi-tier progressive difficulty levels',
      'Interactive item collection and score mechanics',
      'Custom game graphics and audio integration',
    ],
    technologies: ['C++', 'SFML', 'Object-Oriented Programming'],
    visualDirection: 'Game-inspired graphics, playful colors, and pixel-art elements.',
    image: '/images/Projects/Nom Nom Zen.png',
    githubUrl: 'https://github.com/Chamodya678442',
    demoUrl: undefined,
  },
  {
    id: 'orego-hospital-system',
    title: 'OREGO.lk Hospital Management System',
    subtitle: 'Full-Stack Clinical & Patient Administration',
    category: 'Full-Stack',
    status: 'Completed',
    period: '2025 – 2026',
    description:
      'Developed a full-stack hospital management system with role-based dashboards, JWT authentication, appointment booking, resource management, notifications, and patient discharge tracking using Flask, PostgreSQL, React, and TypeScript.',
    features: [
      'Role-based access control (Admin, Doctor, Staff, Patient)',
      'Secure JWT authentication & session management',
      'Real-time appointment scheduling and resource allocation',
      'Patient admission, medical tracking, and discharge reports',
    ],
    technologies: [
      'Python',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy',
      'JWT',
      'React',
      'TypeScript',
      'Material UI',
      'Axios',
    ],
    visualDirection: 'Modern healthcare management dashboard, patient records, and administrative interfaces.',
    image: '/images/Projects/orego.png',
    githubUrl: 'https://github.com/Chamodya678442',
    demoUrl: undefined,
  },
];

export const EXPERIENCE: Experience = {
  role: 'Software Engineer',
  company: 'Flexaro',
  type: 'Part-time',
  period: 'January 2026 – Present',
  startDate: '2026-01',
  endDate: 'Present',
  current: true,
  responsibilities: [
    'Contribute to the development and maintenance of web applications.',
    'Apply front-end development, debugging, and problem-solving skills to real-world projects.',
    'Collaborate on developing functional and user-friendly web solutions.',
  ],
  skills: ['React', 'TypeScript', 'Frontend Engineering', 'Web Development', 'Debugging', 'Team Collaboration'],
};

export const EDUCATION_LIST: Education[] = [
  {
    institution: 'University of Sri Jayewardenepura',
    degree: 'B.Sc. (Hons.) in Engineering – Computer Engineering',
    period: '2024 – Present',
    gpa: '3.29',
    minor: 'Data Management (2025 – Present)',
    details: [
      'Core focus on Computer Systems, Algorithms, Software Engineering, and Embedded Systems.',
      'Active leadership in technical societies including IEEE Student Branch and IET on Campus.',
    ],
  },
  {
    institution: 'IMBS Green Campus',
    degree: 'Diploma in Business Management',
    period: 'November 2025 – Present',
    details: [
      'Complementing technical engineering with business administration, strategic management, and organizational leadership.',
    ],
  },
  {
    institution: 'Taxila Central College',
    degree: 'G.C.E. Advanced Level – Physical Science Stream',
    period: '2020 – 2022',
    zScore: '1.86',
    results: [
      { subject: 'Chemistry', grade: 'A' },
      { subject: 'Combined Mathematics', grade: 'A' },
      { subject: 'Physics', grade: 'B' },
      { subject: 'English', grade: 'A' },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    id: 'languages',
    skills: [
      { name: 'C++', icon: 'Code2', highlight: true, tag: 'High Performance' },
      { name: 'Python', icon: 'Terminal', highlight: true, tag: 'AI & Backend' },
      { name: 'Java', icon: 'Cpu', tag: 'OOP & Systems' },
      { name: 'JavaScript', icon: 'Code', tag: 'Web & Scripts' },
      { name: 'TypeScript', icon: 'FileCode2', highlight: true, tag: 'Type-Safe Web' },
      { name: 'PHP', icon: 'Server', tag: 'Backend Web' },
      { name: 'HTML', icon: 'Layout', tag: 'Structure' },
      { name: 'CSS', icon: 'Palette', tag: 'Styling' },
      { name: 'MySQL', icon: 'Database', tag: 'Relational DB' },
    ],
  },
  {
    title: 'Frameworks & Development',
    id: 'frameworks',
    skills: [
      { name: 'React', icon: 'Layers', highlight: true, tag: 'Modern Frontend' },
      { name: 'Node.js', icon: 'Server', tag: 'Runtime Backend' },
      { name: 'PostgreSQL', icon: 'Database', highlight: true, tag: 'SQL Database' },
      { name: 'Tailwind CSS', icon: 'Sparkles', highlight: true, tag: 'Utility-first UI' },
      { name: 'Laravel', icon: 'Box', tag: 'PHP Framework' },
      { name: 'WordPress', icon: 'Globe', tag: 'Content Management' },
    ],
  },
  {
    title: 'Infrastructure & Tools',
    id: 'tools',
    skills: [
      { name: 'Docker', icon: 'Container', highlight: true, tag: 'Containerization' },
      { name: 'AWS', icon: 'Cloud', highlight: true, tag: 'Cloud Infrastructure' },
      { name: 'Linux', icon: 'Laptop', tag: 'OS & Scripting' },
      { name: 'Git', icon: 'GitBranch', highlight: true, tag: 'Version Control' },
    ],
  },
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    title: 'Project Head',
    organization: 'Nenasara Sisila CSR Project',
    period: 'February 2026 – April 2026',
    description: 'Led project planning, team coordination, and overall execution for community impact.',
    category: 'Leadership',
  },
  {
    title: 'Assistant Secretary',
    organization: 'IET on Campus USJ, Executive Board 26/27',
    period: 'November 2026 – Present',
    description: 'Support administrative coordination, communication, and student-focused technical activities.',
    category: 'Executive',
  },
  {
    title: 'Faculty Ambassador',
    organization: 'IEEE Student Branch',
    period: '2025 – Present',
    description: 'Promoted IEEE activities and supported student engagement across the engineering faculty.',
    category: 'Community',
  },
  {
    title: 'Logistics Standing Committee Member',
    organization: 'IEEE Computer Society Chapter',
    period: '2025 – Present',
    description: 'Assisted with event logistics and operational coordination for flagship technical events.',
    category: 'Community',
  },
  {
    title: 'Finance Committee Member',
    organization: 'Root of Change, Nexus Club',
    period: 'July 2025 – November 2025',
    description: 'Supported budgeting and financial management for youth-led sustainability initiatives.',
    category: 'Finance',
  },
  {
    title: 'Programming Committee Member',
    organization: 'Career Gateway 1.0',
    period: 'June 2026 – August 2026',
    description: 'Helped plan and coordinate the event program and built connections with industry partners and companies.',
    category: 'Community',
  },
  {
    title: 'Finance Committee Member',
    organization: 'Artemia 1.0 by IEEE Women in Engineering',
    period: 'September 2025 – November 2025',
    description: 'Assisted with budgeting, expense tracking, and financial coordination for women-in-tech symposium.',
    category: 'Finance',
  },
  {
    title: 'Delegates Handling Committee Member',
    organization: 'Algo Ace',
    period: 'May 2026 – September 2026',
    description: 'Assisted with delegate coordination, participant support, and competitive event-day operations.',
    category: 'Community',
  },
  {
    title: 'Official Flair Dancing Crew Member',
    organization: 'USJ Flair Dancing Crew 26/27',
    period: 'September 2026 – Present',
    description: 'Participate in flair dancing to refresh the mind and maintain a healthy, energetic balance between rigorous engineering academics and creative expression.',
    category: 'Creative',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Python Programming for Beginners',
    issuer: 'University of Moratuwa',
    category: 'Software & Programming',
    badgeText: 'Verified Course',
  },
  {
    title: 'Guiding Leadership & Outreach Program',
    issuer: 'Sysco LABS Sri Lanka',
    category: 'Industry Leadership',
    badgeText: 'Industry Certified',
  },
  {
    title: 'Web Development for Beginners',
    issuer: 'University of Moratuwa',
    category: 'Web Technologies',
    badgeText: 'Verified Course',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'LinkedIn',
    category: 'AI & Data Science',
    badgeText: 'Skill Assessment',
  },
];
