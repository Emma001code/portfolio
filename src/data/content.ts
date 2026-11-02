export const site = {
  name: 'Emmanuel Ngwoke',
  fullName: 'Emmanuel Chibuikem Ngwoke',
  shortName: 'Emmanuel',
  initials: 'ECN',
  avatar: '/gallery/cowboy-style.jpeg',
  role: 'Full-Stack · Health-Tech · Distributed Systems',
  tagline:
    'Building scalable web and mobile platforms with a focus on health-tech and systems that work in the real world.',
  location: 'Kigali, Rwanda · Nigerian',
  availability: 'Open to opportunities · 2026',
  email: 'chibuikeemmanuel879@gmail.com',
  phone: '+234 7044375968',
  phoneAlt: '+250 798696270',
  linkedin: 'https://www.linkedin.com/in/emmanuelngwoke/',
  github: 'https://github.com/Emma001code',
  orcid: 'https://orcid.org/0009-0002-6375-5913',
  cvPath: '/Emmanuel_Ngwoke_CV.pdf',
}

export const navLinks = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const

export const sectionIds = navLinks.map((l) => l.id)

export const about = {
  eyebrow: 'About',
  title: 'Technology with purpose, built for impact',
  paragraphs: [
    'I am a Mastercard Foundation Scholar at the African Leadership University, specializing in full-stack development with hands-on experience shipping scalable web and mobile platforms. I care most about health-tech and distributed systems — products that are not only innovative, but usable where they matter.',
    'From AI-assisted health tools to agricultural decision support and student collaboration platforms, I build end-to-end: authentication, data models, APIs, and interfaces people can rely on. My research interests span clinical decision support, medical data analytics, and scalable software architecture.',
  ],
  highlights: [
    { label: 'Flagship', value: 'UzimaAI — AI-driven health management' },
    { label: 'Research', value: 'AI test-panel optimisation for clinical support' },
    { label: 'Scholar', value: 'Mastercard Foundation full-ride · ALU' },
    { label: 'Focus', value: 'Health-tech · Distributed systems · DevOps' },
  ],
  image: {
    src: '/gallery/about-section-image.jpeg',
    alt: 'Emmanuel Ngwoke',
  },
  stats: [
    { value: '2+', label: 'Projects shipped' },
    { value: '30+', label: 'GitHub Projects' },
    { value: '5+', label: 'Certifications' },
    { value: '2+', label: 'Years building' },
  ],
  languages: [
    { name: 'igbo', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Basic' },
  ],
  techStack: [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Dart'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Flutter', 'Node & Express', 'Flask'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
    },
    {
      category: 'Tools & Cloud',
      items: ['GitHub', 'Vercel', 'Render', 'Azure', 'Docker'],
    },
  ],
}

export const gallery = [
  { src: '/gallery/airport-duty.jpeg', alt: 'Emmanuel — Airport campus duty' },
  { src: '/gallery/cowboy-style.jpeg', alt: 'Emmanuel — Cowboy style' },
  { src: '/gallery/kcc-program.jpeg', alt: 'Emmanuel — KCC program' },
  { src: '/gallery/at-kcc.jpeg', alt: 'Emmanuel — At KCC' },
  { src: '/gallery/tech-trip.jpeg', alt: 'Emmanuel — Tech trip' },
  { src: '/gallery/flight-view.jpeg', alt: 'Emmanuel — Flight view' },
  { src: '/gallery/plane-window-view.jpeg', alt: 'Emmanuel — Plane window view' },
  { src: '/gallery/little-emmanuel.jpeg', alt: 'Emmanuel — Little Emmanuel' },
  { src: '/gallery/proudly-igbo.jpeg', alt: 'Emmanuel — Proudly Igbo' },
  { src: '/gallery/ready-for-church.jpeg', alt: 'Emmanuel — Ready for church' },
  { src: '/gallery/work-hr.jpeg', alt: 'Emmanuel — Work hard, play hard' },
  { src: '/gallery/Work-time.jpeg', alt: 'Emmanuel — Work time' },
  { src: '/gallery/i-love-style.jpeg', alt: 'Emmanuel — Style' },
  { src: '/gallery/leaders-congress.jpeg', alt: 'Emmanuel — Leaders congress' },
]

export type ProjectStatus = 'Live' | 'Completed' | 'In Development' | 'Prototype'

export type Project = {
  id: string
  title: string
  subtitle: string
  status: ProjectStatus
  description: string
  tech: string[]
  image: string
  github?: string
  /** Live site / app demo URL */
  demo?: string
  /** Demo video URL (YouTube, Loom, Drive, etc.) */
  video?: string
  featured?: boolean
  badge?: string
  highlights?: string[]
  metrics?: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    id: 'retain',
    title: 'Retain',
    subtitle: 'Personal Expense & Budget Tracker',
    status: 'Live',
    featured: true,
    image: '/gallery/Retain.png',
    description:
      'Full-stack expense and budget manager for spending in FRw. Record expenses, set a monthly ceiling, and see whether you are within, approaching, or over budget — with search, filters, pagination, and an admin insights dashboard.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
    ],
    github: 'https://github.com/Emma001code/Retain_Expense-Tracker.git',
    demo: 'https://retain-y8d3.onrender.com',
    highlights: [
      'JWT auth with protected routes; signup creates users, admin is seeded',
      'CRUD expenses with Redux-powered search, filter, sort, and pagination',
      'Monthly budget status (within / approaching / over) plus admin insights',
    ],
  },
  {
    id: 'uzimaai',
    title: 'UzimaAI',
    subtitle: 'AI-Driven Health Management Platform',
    status: 'Completed',
    featured: true,
    image: '/gallery/UzimaAI.png',
    description:
      'Healthcare platform with AI-assisted health information support and patient-focused digital tools — medicine search, emergency contacts, first-aid resources, and JWT-secured authentication.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'JWT'],
    github: 'https://github.com/Emma001code/UzimaAI.git',
    highlights: [
      'AI-assisted health information and medicine search',
      'JWT-secured authentication for patient-focused tools',
      'Emergency contacts and first-aid resource modules',
    ],
  },
  {
    id: 'cropwise',
    title: 'Cropwise',
    subtitle: 'AI Agricultural Decision Support Platform',
    status: 'Live',
    featured: true,
    image: '/gallery/Cropwise.png',
    description:
      'Full-stack agricultural platform with AI chatbot advisory, role-based auth, marketplace for farmers and experts, and weather insights via external APIs.',
    tech: ['Python', 'JavaScript', 'Firebase', 'OpenRouter', 'DeepSeek', 'HTML5', 'CSS3'],
    github: 'https://github.com/Emma001code/Cropwise.git',
    video: 'https://youtu.be/anb9l0YTszY?si=oLaNBBPovC9UygaE',
    highlights: [
      'AI chatbot advisory for farmers and experts',
      'Role-based auth and marketplace flows',
      'Weather insights via external APIs',
    ],
  },
  {
    id: 'readmore-api',
    title: 'ReadMore API',
    subtitle: 'Bookstore REST API · Express.js',
    status: 'Completed',
    featured: true,
    image: '/gallery/BookstoreEXpressJsAPI.png',
    description:
      'Bookstore REST API built with Express.js, MongoDB, and Mongoose. Modeled linked Author and Book entities with full CRUD, population, and a linking endpoint. Enforced business rules in controllers/validators.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/EmmanuelNgwoke',
    video: 'https://drive.google.com/file/d/1ZHe2M0pDAV8faJdW3VXRB3bMU8G0oaAf/view?usp=drive_link',
    highlights: [
      'Author and Book entities with population and linking endpoint',
      'Full CRUD with controller/validator business rules',
      'Express.js + MongoDB + Mongoose stack',
    ],
  },
  {
    id: 'kigali-locate',
    title: 'Kigali Locate',
    subtitle: 'City Services and Places Directory',
    status: 'Live',
    featured: true,
    image: '/gallery/Kigali-locate.png',
    description:
      'Location-based mobile app helping users discover services, businesses, and points of interest across Kigali with maps, geolocation, and structured state management.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'Provider'],
    github: 'https://github.com/Emma001code/Kigali-Locate.git',
    video: 'https://drive.google.com/file/d/1bkr26T2NzOoBy0WAAhMOG2nz8eG2cWHB/view?usp=sharing',
    highlights: [
      'Maps and geolocation for Kigali services discovery',
      'Structured state management with Provider',
      'Firebase-backed data for places and businesses',
    ],
  },
  {
    id: 'civicevents',
    title: 'CivicEvents',
    subtitle: 'Civic Engagement and Event Management',
    status: 'Live',
    image: '/gallery/Civicevent.png',
    description:
      'Responsive web app for discovering and registering for community events, with role-based access, admin tools, and REST APIs backed by PostgreSQL.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'jQuery', 'JWT', 'PostgreSQL'],
    github: 'https://github.com/Emma001code/Event-Platform.git',
    video: 'https://drive.google.com/file/d/1CfVeEKIo_Yvw5EnvklaqEOwpw1AJur5M/view?usp=sharing',
    highlights: [
      'Event discovery and registration for communities',
      'Role-based access with admin tools',
      'REST APIs backed by PostgreSQL',
    ],
  },
  {
    id: 'storycast',
    title: 'StoryCast',
    subtitle: 'Accessible Audio & Video Storytelling',
    status: 'Completed',
    image: '/gallery/StoryCast.png',
    description:
      'Accessibility-first storytelling microsite with video/audio players, transcripts, WebVTT captions, and WCAG 2.1 AA practices across a modular Sass architecture.',
    tech: ['HTML5', 'Sass', 'WebVTT', 'CSS Grid', 'WCAG'],
    github: 'https://github.com/Emma001code/SASS-Story-Media-Website-',
    video: 'https://www.awesomescreenshot.com/video/54298502?key=a1665bc45ce2d1cd48d9f2f8e7efe15f',
    badge: 'WCAG 2.1 AA',
    highlights: [
      'Video/audio players with transcripts and WebVTT captions',
      'WCAG 2.1 AA accessibility practices',
      'Modular Sass architecture',
    ],
  },
  {
    id: 'student-academic',
    title: 'Student Academic Platform',
    subtitle: 'Schedule, Assignments & Attendance',
    status: 'Completed',
    image: '/gallery/studenttracker.png',
    description:
      'Cross-platform student app for managing assignments, class schedules, and attendance with deadline tracking and automated attendance percentage calculation.',
    tech: ['Flutter', 'Dart', 'SharedPreferences', 'Material Design'],
    github: 'https://github.com/EmmanuelNgwoke',
    highlights: [
      'Assignments, schedules, and attendance in one app',
      'Deadline tracking for student workflows',
      'Automated attendance percentage calculation',
    ],
  },
]

export type ExperienceCategory = 'Employment' | 'Leadership' | 'Community'

export const experienceCategories: ExperienceCategory[] = [
  'Employment',
  'Leadership',
  'Community',
]

export type ExperienceItem = {
  id: string
  category: ExperienceCategory
  badge: string
  title: string
  org: string
  period: string
  location: string
  status: 'Active' | 'Completed'
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'Healthvendor',
    category: 'Employment',
    badge: 'Internship',
    title: 'Backend Developer',
    org: 'Healthvendor — Health Tech Venture Startup',
    period: 'September 2025 – February 2026',
    location: 'Kigali, Rwanda',
    status: 'Completed',
    bullets: [
      'Contributed to backend development for web applications using Node.js and Express.js over 6 months.',
      'Participated in feature implementation, team discussions, and daily debugging.',
      'Worked with databases and authentication systems supporting core application functionality.',
      'Collaborated via Git and GitHub throughout the development process.',
    ],
  },
  {
    id: 'mentor',
    category: 'Leadership',
    badge: 'Mentorship',
    title: 'Mentor & Community Volunteer',
    org: 'Tech Bootcamp — Frontend Web Development',
    period: 'August 2024 – November 2024',
    location: 'Kigali, Rwanda',
    status: 'Completed',
    bullets: [
      'Mentored 10+ peers and youths in HTML, CSS, and JavaScript, enabling 3 completed beginner projects.',
      'Led workshops on technology solutions for health, climate, and unemployment in underserved communities.',
    ],
  },
  {
    id: 'course-rep',
    category: 'Leadership',
    badge: 'Student Leadership',
    title: 'Course Representative',
    org: 'African Leadership University',
    period: '2024 – Present',
    location: 'Kigali, Rwanda',
    status: 'Active',
    bullets: [
      'Advocated for academic and professional interests of students across different courses.',
    ],
  },
  {
    id: 'autism-outreach',
    category: 'Community',
    badge: 'Volunteer',
    title: 'Support Autistic Children',
    org: 'HVP Gatagara — Autistic School Outreach',
    period: 'September 2024',
    location: 'Kigali, Rwanda',
    status: 'Completed',
    bullets: [
      'Supported 100+ autistic children through distribution of educational and learning materials.',
      'Engaged with educators and caregivers to promote inclusive learning.',
    ],
  },
  {
    id: 'mcf-community',
    category: 'Community',
    badge: 'Community Action',
    title: 'Community Action Project',
    org: 'Mastercard Foundation Scholars Initiative',
    period: 'June 2025',
    location: 'Enugu, Nigeria',
    status: 'Completed',
    bullets: [
      'Executed SDG 3-aligned health projects at a local orphanage for 30+ beneficiaries.',
      'Sponsored vocational skills training in tailoring and carpentry for 2 youth.',
    ],
  },
]

export const education = {
  eyebrow: 'Education',
  title: 'Academic Background',
  subtitle:
    'From high school in Enugu to a BSc in Kigali — built on curiosity, scholarship, and purpose.',
  featured: {
    titleLines: ['BSc', 'Software Engineering'],
    school: 'African Leadership University (ALU-Africa)',
    location: 'Kigali, Rwanda',
    period: 'May 2024 – April 2027',
    metricLabel: 'CGPA',
    metric: '4.63/5.0',
    badge: 'Mastercard Foundation Scholar',
    topCourses: [
      'Introduction to Linux and IT Tools',
      'Introduction to Python Programming & Databases',
      'Advanced Frontend Development',
      'Introduction to Software Engineering',
      'Mobile Application Development',
      'Web Infrastructure',
      'Advanced Backend Development',
      'Advanced Python Programming',
      'Introduction To React Development',
      'Advanced Devops',
    ],
  },
  entries: [
    {
      id: 'wassce',
      name: 'City Comprehensive High School Enugu',
      detail:
        'West African Secondary School Certificate Examination (WASSCE) · Enugu, Nigeria',
      note: 'Attempted 9 subjects · 4 As, 3 Bs, 2 Cs',
      period: '2017 – 2023',
      type: 'Secondary',
      tags: ['4 As', '3 Bs', '2 Cs'],
    },
  ],
}

export const research = {
  eyebrow: 'Research',
  title: 'Publications',
  subtitle:
    'Health-tech systems research and applied AI from clinical decision support to Industry 4.0 automation.',
  thesis: {
    status: 'Ongoing',
    statusTone: 'progress' as const,
    badges: ['Health-Tech · Ongoing Project', 'Research · In Progress'],
    title:
      'AI-Driven Test Panel Optimisation Platform for Clinical Decision Support and Diagnostic Efficiency',
    authors: 'Emmanuel Chibuikem Ngwoke',
    venue: 'Ongoing Project & Research · African Leadership University',
    abstract:
      'Ongoing project and research exploring a clinical decision support platform that analyses lab test ordering patterns and outcomes to recommend cost-effective test panels. The work develops ML and analytics models to identify redundant testing, optimise diagnostic workflows, and reduce unnecessary investigations — connecting directly to real-world health-tech delivery.',
    tags: [
      'clinical decision support',
      'health-tech',
      'diagnostic efficiency',
      'machine learning',
      'test panel optimisation',
      'medical data analytics',
    ],
    details: [
      { label: 'Status', value: 'Ongoing project & research' },
      { label: 'Period', value: '2026 – Present' },
      { label: 'Institution', value: 'ALU-Africa, Kigali' },
      { label: 'Focus', value: 'Health-tech · CDS' },
    ],
    highlights: [
      { value: 'CDS', label: 'Decision Support' },
      { value: 'ML', label: 'Analytics Models' },
      { value: 'Labs', label: 'Test Utilisation' },
      { value: 'Cost', label: 'Panel Efficiency' },
    ],
    links: [
      { label: 'ORCID Profile', href: 'https://orcid.org/0009-0002-6375-5913' },
    ],
  },
  publication: {
    status: 'Published',
    statusTone: 'published' as const,
    badges: ['Journal Article · JET', 'Published · May 2026'],
    title:
      'Robotics and Automation in Industry 4.0: Trends, Workforce Implications, and Economic Perspectives',
    authors:
      'Efe Okparabenyo, Elizabeth Ehi Ogar, Emmanuel Chibuikem Ngwoke, Noel Bizamporo, Olaitan Ebenezer Oluwadare, Uchechi Precious Dike, Jacob Miracle Godswill',
    venue: 'Journal of Economics and Trade 11 (1): 477–495',
    abstract:
      'Industry 4.0 introduces cyber-physical systems, IoT, AI, and advanced robotics into production — enabling real-time interaction between machines, data, and human operators. This paper examines how robotics and automation reshape productivity, labour markets, and global competitiveness, including AI-powered robotics, collaborative robots, reskilling, and job polarisation. Insights on intelligent automation and human–AI systems inform adjacent applied domains — including health-tech platforms and clinical decision support where reliable automation and workforce readiness matter.',
    tags: [
      'Industry 4.0',
      'robotics',
      'automation',
      'artificial intelligence',
      'workforce',
      'IoT',
      'health-tech systems',
    ],
    details: [
      { label: 'DOI', value: '10.56557/jet/2026/v11i110590' },
      { label: 'Published', value: 'May 15, 2026' },
      { label: 'Pages', value: '477–495' },
      { label: 'ISSN', value: '2456-8821' },
    ],
    highlights: [
      { value: 'AI', label: 'Intelligent Systems' },
      { value: 'IoT', label: 'Cyber-Physical' },
      { value: 'Work', label: 'Reskilling Focus' },
      { value: 'JET', label: 'Peer Reviewed' },
    ],
    links: [
      {
        label: 'View Publication (DOI)',
        href: 'https://doi.org/10.56557/jet/2026/v11i110590',
      },
      {
        label: 'Journal Article Page',
        href: 'https://ikprress.org/index.php/JET/article/view/10590',
      },
      { label: 'ORCID Profile', href: 'https://orcid.org/0009-0002-6375-5913' },
    ],
  },
}

/** Flat alias for the published paper (DOI-linked). */
export const publication = {
  title: research.publication.title,
  authors: research.publication.authors,
  venue: research.publication.venue,
  doi: 'https://doi.org/10.56557/jet/2026/v11i110590',
}

export type AwardItem = {
  id: string
  title: string
  org: string
  period: string
  description: string
  kind: 'award' | 'certification'
  href?: string
  badge?: string
}

export const awards: AwardItem[] = [
  {
    id: 'mcf',
    title: 'Mastercard Foundation Full-Ride Scholarship',
    org: 'Mastercard Foundation / ALU',
    period: '2024–2027',
    description:
      'Full-ride, all-expenses-paid scholarship to pursue Software Engineering at ALU Kigali, with over $20,000 yearly expenditure.',
    kind: 'award',
    href: 'https://drive.google.com/drive/folders/1QvaVYBH-VDlLu4QaA7cuVI4xgPpwpcxl?usp=sharing',
  },
  {
    id: 'high-school',
    title: 'High School Directors Scholarship Award',
    org: 'City Comprehensive High School Enugu',
    period: '2017–2023',
    description:
      'Honored for exceptional academic achievement and sustained excellence, ranking among the school’s top-performing students.',
    kind: 'award',
    href: 'https://drive.google.com/file/d/1Rxdli-PhfmBXqPip1jOYuOSxflrfEpeP/view?usp=sharing',
  },
  {
    id: 'azure',
    title: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
    org: 'Microsoft',
    period: '2025',
    description: 'Azure developer certification covering cloud solutions, APIs, and Azure services.',
    kind: 'certification',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/EmmanuelChibuikemNgwoke-2102/4366AF94719ACEE0?sharingId=2F17A50AE14DA62E',
    badge: 'Verified',
  },
  {
    id: 'alx-va',
    title: 'Virtual Assistant Graduate',
    org: 'ALX · Kigali, Rwanda',
    period: '2025',
    description: 'Professional virtual assistant training and graduation credential.',
    kind: 'certification',
    href: 'https://drive.google.com/file/d/15e_mYxPEWWIIO-O3WxE5ffPrXcr_xica/view?usp=sharing',
  },
  {
    id: 'mobile-udemy',
    title: 'Mobile Application Development',
    org: 'Dr Angela Yu — Udemy',
    period: 'Certified',
    description: 'Cross-platform mobile development coursework.',
    kind: 'certification',
  },
  {
    id: 'fullstack-udemy',
    title: 'Full Stack Development',
    org: 'Dr Angela Yu — Udemy',
    period: 'Certified',
    description: 'End-to-end web development coursework.',
    kind: 'certification',
  },
  {
    id: 'backend-python',
    title: 'Backend REST API with Python',
    org: 'Mark Winterbottom — Udemy',
    period: 'Certified',
    description: 'REST API design and Python backend development.',
    kind: 'certification',
  },
]

export const contact = {
  eyebrow: 'Contact',
  title: "Let's Connect",
  body: "I'm currently based in Kigali, Rwanda, studying Software Engineering at the African Leadership University as a Mastercard Foundation Scholar. I am particularly interested in opportunities at the intersection of health-tech, full-stack engineering, and applied AI — whether research, internships, or high-impact technical roles. Open to collaborations and opportunities.",
  formIntro:
    "If it's a collaboration, research opportunity, or just wanna say hello I'd love to hear from you.",
  formspreeEndpoint: 'https://formspree.io/f/myzklyyy',
}
