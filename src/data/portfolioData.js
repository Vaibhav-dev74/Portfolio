/**
 * Centralized Portfolio Data for Vaibhav Pratap Mishra
 * Professional Identity: AI Engineer | Full-Stack Developer | Python Developer
 */

export const personalInfo = {
  name: "Vaibhav Pratap Mishra",
  title: "AI Engineer | Full-Stack Developer | Python Developer",
  headline: "Building Intelligent Applications with AI & Full-Stack Engineering",
  supportingText:
    "Computer Engineering graduate passionate about building AI-powered applications, intelligent automation systems, modern web experiences, and practical IoT solutions.",
  about:
    "I am a Computer Engineering graduate from Lokmanya Tilak College of Engineering, Mumbai University, interested in building practical software solutions at the intersection of artificial intelligence, full-stack development, and connected systems.\n\nI work with Python, SQL, modern web technologies, and AI development tools to transform ideas into functional applications. My projects include AI-powered resume analysis, intelligent home renovation planning, AI-based food analysis, and an app-driven robotic waste management system.\n\nThrough hands-on projects, internship experience, and technical competitions, I continue to strengthen my problem-solving, software development, and engineering skills. I am looking for opportunities where I can contribute to meaningful products, learn from experienced teams, and grow as an AI or software engineer.",
  email: "vaibhavmishra.dev@gmail.com",
  location: "Mumbai, India",
  github: "https://github.com/Vaibhav-dev74",
  linkedin: "https://linkedin.com/in/vaibhav-pratap-mishra-b417ab2b6/",
  livePortfolio: "https://portfolio-sepia-ten-20.vercel.app",
  resumeUrl: "/VaibhavPratapMishra.pdf",
  profileImage: "/images/Vaibhav.jpeg",
  openToOpportunities: true,
  opportunityLabel: "Open to Opportunities",
  rolesCycling: [
    "AI Engineer",
    "Full-Stack Developer",
    "Python Developer",
    "Agentic AI Enthusiast",
    "IoT & Robotics Developer",
  ],
};

export const skillsData = {
  programming: {
    category: "Programming",
    skills: ["Python", "SQL", "Java", "C", "C++ (Basic)"],
  },
  frontend: {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  backend: {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  databases: {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  aiMl: {
    category: "AI and Machine Learning",
    skills: [
      "Generative AI",
      "LLM application development",
      "Prompt engineering",
      "AI API integration",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI concepts",
      "Natural Language Processing",
      "Computer Vision",
      "OpenCV",
      "TensorFlow",
    ],
  },
  tools: {
    category: "Tools and Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Power BI",
      "Raspberry Pi",
      "Android Studio",
    ],
  },
};

export const projectsData = [
  {
    id: "intelli-resume-ai",
    title: "IntelliResume AI — AI Resume Intelligence & Job Matching Platform",
    shortTitle: "IntelliResume AI",
    category: "AI & Machine Learning",
    featured: true,
    badge: "Flagship AI Project",
    demo: "https://ai-resume-intelligence-job-matching.vercel.app/",
    github: "https://github.com/Vaibhav-dev74/AI-Resume-Intelligence-Job-Matching-System",
    description:
      "An AI-powered recruitment assistance platform designed to analyze resumes, extract relevant candidate information, and help users evaluate resume alignment with job requirements.",
    problemSolved:
      "Manual resume screening is time-consuming and often inconsistent. Job seekers and hiring teams struggle to objectively assess candidate alignment against specific role descriptions.",
    implementedFeatures: [
      "Automated resume parsing and candidate information extraction",
      "Semantic matching between candidate skills and job descriptions",
      "Category-based readiness scoring and skills gap identification",
      "Modern web user interface deployed natively on Vercel",
    ],
    tech: ["Python 3.11", "FastAPI", "NLP / GenAI", "React", "Vercel", "Tailwind CSS"],
    status: "Operational / Deployed",
  },
  {
    id: "ai-home-renovation",
    title: "AI Home Renovation Planner Agent",
    shortTitle: "AI Home Renovation Planner",
    category: "AI & Machine Learning",
    featured: true,
    badge: "Agentic AI",
    demo: null,
    github: "https://github.com/Vaibhav-dev74/Home_Renovation",
    description:
      "An AI-assisted home renovation planning system that helps users explore interior design ideas and renovation possibilities using room images and design inspiration.",
    problemSolved:
      "Home renovation planning often overwhelms homeowners due to fragmented interior ideas, unknown material costs, and lack of structured architectural reasoning.",
    implementedFeatures: [
      "Room image and design inspiration ingestion",
      "AI-assisted design suggestions and material breakdowns",
      "Multi-agent reasoning workflows covering design, planning, and contractor estimates",
      "Integration with Google Gemini and Google Agent Development Kit (ADK)",
    ],
    tech: ["Python", "FastAPI", "Google Gemini", "Google ADK", "Multi-Agent System"],
    status: "Active Development",
  },
  {
    id: "trashbot",
    title: "TrashBot — App-Driven Robotic Dustbin",
    shortTitle: "TrashBot (Robotics & IoT)",
    category: "IoT & Robotics",
    featured: true,
    badge: "National Award Winner",
    demo: null,
    github: "https://github.com/Vaibhav-dev74/Trashbot",
    description:
      "An intelligent waste management concept combining robotics, computer vision, connected monitoring, and reward-based engagement to support automated waste segregation.",
    problemSolved:
      "Improper public and institutional waste segregation causes high recycling contamination and manual hazards. TrashBot automates classification at the point of disposal.",
    implementedFeatures: [
      "Computer vision-based waste classification for dry/wet sorting",
      "Raspberry Pi-based hardware control unit and servo-controlled robotic arm",
      "Sensor-assisted waste handling with ultrasonic level detection",
      "Android mobile companion application (Kotlin/XML) for monitoring",
      "Planned Spring Boot backend and REST API integration architecture",
      "Reward-oriented user engagement concept to incentivize proper disposal",
    ],
    achievement:
      "First Consolation Prize (Rank 4) at Tantragyan 2026 National Level Project Competition at LTCE (65+ participating teams).",
    tech: ["Raspberry Pi", "OpenCV", "Python", "Android (Kotlin)", "Spring Boot", "Sensors"],
    status: "Award-Winning Prototype",
  },
  {
    id: "resto-ai",
    title: "RestoAI — AI-Powered Restaurant Application",
    shortTitle: "RestoAI",
    category: "Full-Stack Development",
    featured: false,
    badge: "Full-Stack AI",
    demo: "https://resto-ai-ten.vercel.app",
    github: "https://github.com/Vaibhav-dev74/RestoAI",
    description:
      "An AI-focused restaurant application combining modern web development with intelligent user experiences.",
    problemSolved:
      "Streamlines dining and restaurant management operations by uniting digital ordering, menu interaction, and operational analytics.",
    implementedFeatures: [
      "Interactive digital ordering and dynamic menu catalog",
      "Modern full-stack web application with responsive UI",
      "Integrated backend operations with Node.js and MongoDB",
      "AI-assisted dish recommendations and customer interface",
    ],
    tech: ["React 19", "Vite", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    status: "Operational / Deployed",
  },
  {
    id: "trendhive",
    title: "Trendhive — Modern Shopping Experience",
    shortTitle: "Trendhive",
    category: "Full-Stack Development",
    featured: false,
    badge: "E-Commerce",
    demo: "https://trendhive-rf2j.vercel.app",
    github: "https://github.com/Vaibhav-dev74/Trendhive",
    description:
      "A modern web-based shopping experience focused on a clean interface, responsive design, and user-friendly product discovery.",
    problemSolved:
      "Provides intuitive product exploration and catalog browsing with lightning-fast front-end interactions.",
    implementedFeatures: [
      "Responsive product catalog with modern card layouts",
      "Interactive product discovery and cart management",
      "Fast client-side rendering with Tailwind CSS and React",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite", "Vercel"],
    status: "Operational / Deployed",
  },
  {
    id: "food-scanner",
    title: "AI-Powered Food Scanner (NutriScan AI)",
    shortTitle: "Food Scanner",
    category: "AI & Machine Learning",
    featured: false,
    badge: "Computer Vision / Health",
    demo: "https://food-scanner-v2-seven.vercel.app",
    github: "https://github.com/Vaibhav-dev74/Food-scaner",
    description:
      "An AI-assisted food analysis application that combines Python-based application logic and nutrition-related data sources to help users explore food information.",
    problemSolved:
      "Consumers struggle to decode complex nutrition labels and evaluate healthiness of packaged foods on the spot.",
    implementedFeatures: [
      "Barcode scanning and nutrition database lookup",
      "Health scoring algorithm synthesizing nutritional values",
      "Integration with OpenFoodFacts and nutritional APIs",
      "AI-driven summary and ingredient analysis with Groq AI integration",
    ],
    tech: ["Python", "Flask", "Groq AI", "REST APIs", "Nutrition APIs", "JavaScript"],
    status: "Operational / Deployed",
  },
  {
    id: "nlp-mini-projects",
    title: "NLP Mini Projects",
    shortTitle: "NLP Mini Projects",
    category: "AI & Machine Learning",
    featured: false,
    badge: "NLP Tools",
    demo: null,
    github: "https://github.com/Vaibhav-dev74/NLP-Mini-projects",
    description:
      "A collection of small Python-based natural language processing and text interaction projects.",
    problemSolved:
      "Demonstrates core natural language processing principles like classification, text normalization, and dictionary mappings without heavy frameworks.",
    implementedFeatures: [
      "Rule-based dialogue classifier analyzing conversational intents",
      "Bi-directional emoji-to-text and text-to-emoji converter",
      "Tkinter desktop graphical user interface",
      "Text preprocessing, keyword matching, and punctuation parsing",
    ],
    tech: ["Python", "NLP", "Tkinter GUI", "Text Preprocessing"],
    status: "Open Source",
  },
  {
    id: "smart-glass",
    title: "Smart Glass for Visually Impaired",
    shortTitle: "Assistive Smart Glass",
    category: "IoT & Robotics",
    featured: false,
    badge: "Assistive Tech",
    demo: null,
    github: "https://github.com/Vaibhav-dev74/smart-glass",
    description:
      "An assistive wearable system equipped with ESP32-CAM and object detection to help visually impaired users navigate daily environments safely.",
    problemSolved:
      "Provides real-time auditory perception of nearby obstacles and common objects for visually impaired individuals.",
    implementedFeatures: [
      "ESP32-CAM video stream acquisition",
      "YOLO object detection algorithm integration",
      "Real-time Bluetooth audio feedback for detected obstacles",
      "Android navigation support integration",
    ],
    tech: ["ESP32-CAM", "YOLO", "Python", "Bluetooth Audio", "Android"],
    status: "Hardware Prototype",
  },
  {
    id: "department-website",
    title: "LTCE Computer Department Website",
    shortTitle: "Department Website",
    category: "Full-Stack Development",
    featured: false,
    badge: "Web Portal",
    demo: "https://ltcecomputerdepartment.netlify.app/",
    github: "https://github.com/Vaibhav-dev74/Department-Website",
    description:
      "A responsive departmental web portal built for Lokmanya Tilak College of Engineering to showcase academic curricula, faculty profiles, and departmental notices.",
    problemSolved:
      "Centralizes departmental announcements, faculty information, and academic resources for students.",
    implementedFeatures: [
      "Fully responsive multi-page layout for desktop and mobile",
      "Faculty profiles and curriculum directories",
      "Notice board for students and academic announcements",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    status: "Live Web Portal",
  },
];

export const experienceData = [
  {
    role: "Python Developer Intern",
    company: "CodeSprint Technologies",
    period: "June 2024 – August 2024",
    type: "Internship",
    description:
      "Worked on Python scripting, automation, and data analysis tasks, gaining practical exposure to programming workflows and problem-solving.",
    highlights: [
      "Developed Python scripts to automate repetitive workflows and data transformations",
      "Created modular backend data-processing utilities handling structured data formats",
      "Collaborated with developers using Git version control and code review practices",
    ],
  },
  {
    role: "IBM SkillsBuild Summer Internship",
    company: "IBM SkillsBuild / CSRBOX",
    period: "24 June 2024 – 5 August 2024",
    type: "Structured Internship Program",
    description:
      "Completed a structured industry internship focused on Data Analytics and IoT application fundamentals.",
    highlights: [
      "Strengthened data analytics fundamentals, data visualization, and exploratory analysis",
      "Contributed to the IoT TrashBot project with sensor integration and telemetry automation logic",
      "Awarded IBM SkillsBuild certificate of completion upon successful project evaluation",
    ],
  },
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
  institution: "Lokmanya Tilak College of Engineering (LTCE)",
  university: "University of Mumbai",
  period: "2022 – 2026",
  status: "Recently completed",
  focusAreas: [
    "Artificial Intelligence & Machine Learning",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Internet of Things (IoT) & Embedded Systems",
    "Full-Stack Web Engineering",
  ],
};

export const achievementsData = [
  {
    title: "Tantragyan 2026 — National Level Project Competition",
    project: "TrashBot — App-Driven Robotic Dustbin",
    result: "First Consolation Prize",
    rank: "Rank 4 (Among 65+ Teams)",
    institution: "Lokmanya Tilak College of Engineering",
    mentor: "Prof. Sonal Bankar",
    teamMembers: [
      "Abhishek Revankar",
      "Manish Kushvaha",
      "Md Aman Ahmad",
      "Utkarsh Tiwari",
      "Vaibhav Pratap Mishra",
    ],
    description:
      "Recognized for innovation in automated waste management combining computer vision, robotics, and mobile application control.",
  },
];

export const certificationsData = [
  {
    title: "Full Stack Developer",
    issuer: "Bharat Intern",
    category: "Internship",
    date: "June 2024",
    credentialId: "BHART-INT-0624",
    verifyLink: null,
    file: "/certificates/bhart intern_pages-to-jpg-0001.jpg",
    type: "image",
    description: "Industry internship certification focusing on practical full-stack web development.",
  },
  {
    title: "Data Analytics Summer Internship",
    issuer: "IBM SkillsBuild / CSRBOX",
    category: "Internship",
    date: "July 2024",
    credentialId: "IBM-DA-2024-07-VAIBHAV",
    verifyLink: "https://www.credly.com/",
    file: "/certificates/Ibm_page-0001.jpg",
    type: "image",
    description: "Completed comprehensive data analytics and IoT program with project assessment.",
  },
  {
    title: "Python Programming",
    issuer: "CodeSprint Technologies / Edunet Foundation",
    category: "Course",
    date: "August 2024",
    credentialId: "CSP-PY-2024",
    verifyLink: null,
    file: "/certificates/113-Vaibhav.jpg",
    type: "image",
    description: "Certification covering Python scripting, automation, and algorithmic problem-solving.",
  },
  {
    title: "Artificial Intelligence & SAP Conversational AI Chatbot",
    issuer: "Edunet Foundation",
    category: "Course",
    date: "2024",
    credentialId: "EDUNET-AI-SAP-2024",
    verifyLink: null,
    file: "/certificates/Vaibhav Pratap Mishra_AC.pdf",
    type: "pdf",
    description: "Certified in conversational AI architecture, chatbot workflows, and NLP fundamentals.",
  },
  {
    title: "Data Fundamentals Badge",
    issuer: "IBM",
    category: "Badge",
    date: "July 2024",
    credentialId: "IBM-DF-2024",
    verifyLink: "https://www.credly.com/",
    file: "/certificates/DataFundamentals_Badge20240725-7-69m1z8_page-0001.jpg",
    type: "image",
    description: "IBM verified badge validating solid foundation in data concepts and analytics.",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Professional Training Program",
    category: "Course",
    date: "March 2024",
    credentialId: "FSWD-2024-VAIBHAV",
    verifyLink: null,
    file: "/certificates/3753_Vaibhav Pratap Mishra _Full Stack Web-Development.jpg",
    type: "image",
    description: "Full stack training covering React, Node.js, REST APIs, and modern styling.",
  },
];

export const faqAssistantData = [
  {
    id: "ai-projects",
    query: "Tell me about your AI projects",
    summary:
      "Vaibhav has built multiple AI projects: 1) IntelliResume AI (resume intelligence & semantic job matching on Vercel), 2) AI Home Renovation Planner (agentic design suggestions using Google Gemini & ADK), 3) AI Food Scanner (barcode nutrition intelligence & health scoring with Groq AI), and 4) NLP Mini Projects (rule-based dialogue classifier).",
  },
  {
    id: "python-projects",
    query: "Which projects use Python?",
    summary:
      "Python is one of Vaibhav's primary languages. Projects using Python include: IntelliResume AI (FastAPI backend), AI Home Renovation Planner (FastAPI + Google ADK), AI Food Scanner (Flask application), TrashBot robotics control (OpenCV & Raspberry Pi), and NLP Mini Projects (Tkinter & text processing).",
  },
  {
    id: "trashbot",
    query: "Explain TrashBot",
    summary:
      "TrashBot is an app-driven robotic dustbin combining Raspberry Pi, computer vision (OpenCV) for waste classification, a servo-controlled robotic arm, and an Android companion app. It won First Consolation Prize (Rank 4 out of 65+ teams) at Tantragyan 2026 National Level Project Competition.",
  },
  {
    id: "technologies",
    query: "What technologies have you used?",
    summary:
      "Languages: Python, SQL, Java, C, C++. Frontend: React 19, JavaScript, HTML5/CSS3, Tailwind CSS. Backend: FastAPI, Node.js, Express, Flask, REST APIs. AI/ML: GenAI, RAG, Prompt Engineering, OpenCV, TensorFlow. Databases: MySQL, MongoDB, PostgreSQL. Tools: Git, GitHub, VS Code, Vercel, Raspberry Pi, Android Studio.",
  },
  {
    id: "contact",
    query: "How can I contact Vaibhav?",
    summary:
      "You can contact Vaibhav directly via email at vaibhavmishra.dev@gmail.com, connect on LinkedIn at https://linkedin.com/in/vaibhav-pratap-mishra-b417ab2b6/, or explore his repositories on GitHub at https://github.com/Vaibhav-dev74.",
  },
  {
    id: "experience",
    query: "What is your work experience?",
    summary:
      "Vaibhav worked as a Python Developer Intern at CodeSprint Technologies (June–August 2024), focusing on Python automation and data analysis. He also completed the IBM SkillsBuild Summer Internship with CSRBOX (June–August 2024), where he contributed to the IoT TrashBot project.",
  },
];

