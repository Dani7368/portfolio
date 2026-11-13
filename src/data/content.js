// Single source of portfolio content.
// Every professional fact here comes from the approved CV
// (Daniela_Lawi_Full_Stack_CV_Final.docx — the filename uses an older spelling;
// the correct name is Daniella Lawi). Do not add claims that are not in the CV.

export const person = {
  name: 'Daniella Lawi',
  firstName: 'Daniella',
  lastName: 'Lawi',
  title: 'Full-Stack Developer',
  location: 'Haifa Area, Israel',
  phoneDisplay: '054-9071570',
  phoneHref: 'tel:+972549071570',
  email: 'daniellalawi1@gmail.com',
  github: 'https://github.com/Dani7368',
  githubHandle: 'github.com/Dani7368',
  linkedin: 'https://www.linkedin.com/in/daniella-lawi-732351308',
  linkedinHandle: 'in/daniella-lawi',
  portfolio: 'https://dani7368.github.io/portfolio/',
  // Set to a path under /public (e.g. 'Daniella-Lawi-CV.pdf') once an approved PDF exists.
  // While null, no resume button is rendered.
  resumePdf: null,
}

export const hero = {
  support:
    'Software Developer experienced in React, C#/.NET, REST APIs, production issue resolution, and end-to-end automation.',
}

export const about = {
  paragraphs: [
    "I'm a Full-Stack Developer with a B.Sc. in Computer Science, specializing in Artificial Intelligence and Data Science.",
    'At Nayax Energy, I work on user interfaces, backend maintenance, production issue resolution, and end-to-end test automation.',
  ],
}

export const experience = [
  {
    role: 'Software Developer',
    company: 'Nayax Energy',
    period: 'December 2025 – Present',
    current: true,
    groups: [
      {
        title: 'Frontend Development',
        text: 'Developed and enhanced user interfaces for mobile applications, payment systems, and React applications, including new screens and functionality.',
      },
      {
        title: 'Backend Development',
        text: 'Investigated and resolved bugs in C#/.NET code and improved existing application logic.',
      },
      {
        title: 'Test Automation',
        text: 'Developed end-to-end automated tests using REST APIs and simulators to validate workflows across systems.',
      },
      {
        title: 'Monitoring & Data Visualization',
        text: 'Built Grafana dashboards combining Elasticsearch and database data to support monitoring and production issue investigation.',
      },
    ],
  },
  {
    role: 'Quality Assurance & Production',
    company: 'Itamar Medical',
    period: 'December 2019 – October 2022',
    current: false,
    groups: [
      {
        title: 'Quality Assurance & Hardware Production',
        text: 'Performed quality assurance testing of medical devices and supported hardware production, including board programming and soldering.',
      },
    ],
  },
]

// Projects are an array so future projects can be appended with the same shape.
// SafeNet details below were verified against the repository source
// (app.py, detector.py, Skeleton, OCR_Test, Dockerfile). The three CV bullets
// are kept verbatim; the architecture only shows components present in the code.
export const projects = [
  {
    id: 'safenet',
    name: 'SafeNet',
    subtitle: 'AI-Powered Content Detection System',
    kind: 'Academic Project · B.Sc. Computer Science',
    repo: 'https://github.com/Dani7368/SafeNet-AI-Phishing-Detection',
    problem:
      'Phishing often arrives as text inside an image or on screen: a message, a pop-up, a screenshot. Text filters never see it. SafeNet reads that content first, then decides whether it looks like a phishing attempt.',
    overview:
      'Images are passed through OCR, and the extracted text is scored by a detection stage. Results stream to a live web dashboard where detections can be reviewed and exported.',
    cv: [
      'Developed a content detection system using Python, OCR, and NLP models',
      'Designed a processing pipeline combining machine learning and rule-based logic',
      'Integrated Splunk for event monitoring and analysis',
    ],
    tech: ['Python', 'Tesseract OCR', 'NLP', 'BERT (PyTorch · Transformers)', 'Flask', 'Socket.IO', 'Splunk', 'Docker'],
    architecture: [
      {
        id: 'input',
        label: 'Capture',
        detail: 'Screen capture (prototype) or image upload (web app)',
        tech: 'PyAutoGUI · Pillow',
      },
      {
        id: 'ocr',
        label: 'OCR',
        detail: 'Extracts text from the image',
        tech: 'Tesseract · pytesseract',
      },
      {
        id: 'ml',
        label: 'ML classifier',
        detail: 'BERT sequence classifier labels text as phishing or safe',
        tech: 'PyTorch · Transformers',
      },
      {
        id: 'rules',
        label: 'Rule engine',
        detail: '11 weighted patterns score urgency, credential requests, suspicious links',
        tech: 'Python · regex',
      },
      {
        id: 'score',
        label: 'Risk score',
        detail: 'Score 0–10 mapped to Safe, Medium or High risk',
        tech: 'Python',
      },
      {
        id: 'dash',
        label: 'Live dashboard',
        detail: 'REST endpoints plus real-time events; detections exportable as CSV',
        tech: 'Flask · Socket.IO',
      },
    ],
    challenges: [
      {
        title: 'Text that only exists as pixels',
        text: 'Detection runs on OCR output, so the rule engine scores combinations of weighted signals instead of one exact phrase.',
      },
      {
        title: 'Machine learning plus rules',
        text: 'The prototype uses a BERT classifier; the web app uses an 11-pattern weighted rule engine capped to a 0–10 score.',
      },
      {
        title: 'Desktop script to web service',
        text: 'Screen capture was replaced by image upload, and Docker bundles the Tesseract binary with the app.',
      },
      {
        title: 'Real-time feedback',
        text: 'Scan results are pushed to the dashboard over Socket.IO without a page refresh.',
      },
    ],
  },
]

// `dev` = devicon class (logo); `glyph` = generic line icon for skills without an official logo.
export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'C#', dev: 'devicon-csharp-plain' },
      { name: 'JavaScript', dev: 'devicon-javascript-plain' },
      { name: 'TypeScript', dev: 'devicon-typescript-plain' },
      { name: 'Python', dev: 'devicon-python-plain' },
      { name: 'SQL', glyph: 'database' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', dev: 'devicon-react-original' },
      { name: 'Next.js', dev: 'devicon-nextjs-plain' },
      { name: 'HTML', dev: 'devicon-html5-plain' },
      { name: 'CSS', dev: 'devicon-css3-plain' },
      { name: 'Tailwind CSS', dev: 'devicon-tailwindcss-plain' },
    ],
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: '.NET', dev: 'devicon-dotnetcore-plain' },
      { name: 'REST APIs', glyph: 'api' },
      { name: 'MySQL', dev: 'devicon-mysql-plain' },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', dev: 'devicon-git-plain' },
      { name: 'GitLab CI/CD', dev: 'devicon-gitlab-plain' },
      { name: 'Docker', dev: 'devicon-docker-plain' },
      { name: 'Swagger', dev: 'devicon-swagger-plain' },
    ],
  },
  {
    category: 'AI Development Tools',
    items: [
      { name: 'Claude Code', glyph: 'terminal' },
      { name: 'Cursor', glyph: 'pen' },
      { name: 'Base44', glyph: 'layers' },
    ],
  },
  {
    category: 'Monitoring & Observability',
    items: [
      { name: 'Grafana', dev: 'devicon-grafana-plain' },
      { name: 'Kibana', dev: 'devicon-kibana-plain' },
      { name: 'Elasticsearch', dev: 'devicon-elasticsearch-plain' },
    ],
  },
]

export const education = {
  degree: 'B.Sc. in Computer Science & Information',
  school: 'Ruppin Academic Center',
  period: '2022–2025',
  specialization: 'Specialization in Artificial Intelligence and Data Science',
}

export const service = {
  role: 'Patrol Officer',
  org: 'Israel Police, Jerusalem District',
  period: '2017–2019',
}

export const languages = [
  { name: 'Hebrew', level: 'Native' },
  { name: 'English', level: 'Professional Working Proficiency' },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
