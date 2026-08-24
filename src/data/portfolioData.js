export const personalDetails = {
  name: "Tha Souly",
  title: "Web Developer & Data Analyst",
  tagline: "Computer Science Graduate & Web Developer Intern passionate about frontend development (React/AntD) and high-scale data analytics.",
  bio: [
    "I hold a Bachelor’s degree in Computer Science and am currently working as a Web Development and Data Analyst Intern. I am eager to learn, adaptable, and motivated to contribute positively to a professional team and organization.",
    "In my current role as a Web Developer & Data Analysis Intern at the Department of Primary Education, Ministry of Education, Youth and Sport, I have successfully managed and validated more than 2.2 million student records in the PLP System, ensuring data accuracy and consistency.",
    "In addition to data management, I have developed and maintained system modules using React.js and Ant Design, participated in system testing, and provided technical support to teachers and education officers. These experiences have strengthened my analytical thinking, problem-solving skills, and attention to detail.",
    "Although my experience is in the education sector, I am eager to apply my data management and analytical skills to new sectors such as real estate and the pawnshop business. I am a fast learner, highly adaptable, and confident that I can contribute effectively to your organization."
  ],
  stats: [
    { label: "Student Records Managed", value: "2.2M+" },
    { label: "Years in Tech & Analysis", value: "2+" },
    { label: "Core Technologies", value: "React/AntD" },
    { label: "Systems Supported", value: "Nationwide" }
  ],
  personalInfo: {
    sex: "Male",
    dob: "June 22, 2002",
    pob: "Dam Dek, Siem Reap, Cambodia",
    nationality: "Cambodian",
    status: "Single",
    address: "No 290A, St.138, Trapeangchhouk Village, Sangkat Toek Thla, Khan Sen Sok, Phnom Penh"
  },
  socials: {
    github: "https://github.com/soulyta",
    linkedin: "https://linkedin.com/in/soulyta",
    email: "soulyneed766@gmail.com",
    phone: "010463544",
    telegram: "https://t.me/soly_009"
  }
};

export const skillsData = [
  {
    category: "Web Development",
    skills: [
      { name: "Front-End Development", percentage: 70 },
      { name: "React.js & Ant Design", percentage: 40 },
      { name: "System Testing / QA", percentage: 60 }
    ],
    technologies: [
      { name: "React.js", icon: "react" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Ant Design", icon: "antd" }
    ]
  },
  {
    category: "Data Analytics & Management",
    skills: [
      { name: "Data Entry & Data Management", percentage: 75 },
      { name: "Data Analysis & Reporting", percentage: 70 },
      { name: "Microsoft Office", percentage: 80 }
    ],
    technologies: [
      { name: "MS Excel", icon: "excel" },
      { name: "MS Word", icon: "word" },
      { name: "MS PowerPoint", icon: "powerpoint" }
    ]
  },
  {
    category: "Productivity & Media",
    skills: [
      { name: "AI Tools for Productivity", percentage: 85 },
      { name: "Video & Audio Editing", percentage: 65 },
      { name: "Photography", percentage: 60 }
    ],
    technologies: [
      { name: "CapCut", icon: "capcut" }
    ]
  },
  {
    category: "Communication & Languages",
    skills: [
      { name: "Communication & Teamwork", percentage: 90 },
      { name: "Khmer (Native)", percentage: 98 },
      { name: "English (Professional)", percentage: 50 }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "PLP Student Data System",
    description: "Successfully processed, validated, and managed database records for over 2.2 million students nationwide, maintaining strict data quality control and preparing comprehensive statistical reports.",
    imageName: "plpuser.jpg",
    techStack: ["Data Validation", "Large Datasets", "Reports Prep", "Database"],
    githubLink: "https://github.com/soulyta-dev/plp-data-system",
    liveLink: "https://plp.moeys.gov.kh",
    featured: true
  },
  {
    id: 2,
    title: "Model School Standard System",
    description: "Developed and maintained the frontend code for the Infrastructure Module of the nationwide Model School Standard System, designing responsive user interfaces.",
    imageName: "Model school system.png ",
    techStack: ["React.js", "Ant Design", "Frontend Dev", "System Testing"],
    githubLink: "https://github.com/soulyta-dev/model-school-system",
    liveLink: "https://plp-mss.moeys.gov.kh/",
    featured: true
  },
  {
    id: 3,
    title: "Education Program Assessment",
    description: "Coordinated training databases and prepared evaluative reports supporting nationwide school operations, analyzing training feedback and system inconsistencies.",
    imageName: "plp.png",
    techStack: ["Data Analysis", "Workshops Coord", "Reporting", "Workflow Opt"],
    githubLink: "https://github.com/soulyta-dev/education-assessment",
    liveLink: "https://plp-mss.moeys.gov.kh/",
    featured: true
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Web Developer & Data Analyst Intern",
    company: "Primary Education Department, Ministry of Education, Youth and Sport (MoEYS)",
    period: "March 2025 - Present",
    description: [
      "Process large-scale student data in the PLP System, ensuring accuracy and completeness for over 2.2 million student records.",
      "Develop and maintain front-end code for the Model School Standard System (Infrastructure Module) using React.js and Ant Design.",
      "Analyze and organize training and assessment data, prepare summary reports, and assist in monitoring data quality and resolving inconsistencies.",
      "Perform system testing in the production environment before implementation to verify functionality.",
      "Support teachers and education officers with system usage, troubleshooting, and responding to inquiries.",
      "Collaborate with team members to improve workflow efficiency and system usability."
    ]
  },
  {
    id: 2,
    role: "Office of Data Entry",
    company: "2U Delivery Company",
    period: "July 2024 - November 2024",
    description: [
      "Ensured accurate and efficient data entry into the company’s software system, improving overall data integrity.",
      "Managed stock-in and stock-out processes, extracting daily stock-in and stock-out data.",
      "Set up products in the warehouse to be delivered to clients.",
      "Provided product-related information to shop staff, resolving issues promptly.",
      "Input product details into the system and calculated store cash registers for successful delivery confirmation.",
      "Calculated and verified driver collections for all cash-on-delivery (COD) customer products.",
      "Reconciled and checked all cash collections before final submission to the General Manager (GM)."
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor's Degree in Computer Science",
    school: "Royal University of Phnom Penh (RUPP)",
    period: "2020 - 2024",
    details: "Focus on software engineering, database management systems, and web application architectures."
  },
  {
    id: 2,
    degree: "Diploma in English",
    school: "Paññāsāstra University of Cambodia (PUC)",
    period: "2022 - 2026",
    details: "Strengthening professional communication, presentation, and technical writing skills in English."
  },
  {
    id: 3,
    degree: "High School Graduate",
    school: "Dam Dek High School",
    period: "2014 - 2020",
    details: "Solid foundations in Mathematics, Physics, and Science."
  }
];

export const certificatesData = [
  {
    id: 1,
    title: "Bachelor's Degree in Computer Science",
    issuer: "Royal University of Phnom Penh (RUPP)",
    date: "2024",
    link: "http://rupp.edu.kh"
  },
  {
    id: 2,
    title: "Diploma in English",
    issuer: "Paññāsāstra University of Cambodia (PUC)",
    date: "Expected 2026",
    link: "https://www.puc.edu.kh"
  },
  {
    id: 3,
    title: "Web Developer & Data Analyst Intern Certificate",
    issuer: "Department of Primary Education, MoEYS",
    date: "2024",
    link: "https://moeys.gov.kh"
  },
  {
    id: 4,
    title: "High School Graduate Certificate",
    issuer: "Dam Dek High School",
    date: "2020",
    link: "#"
  }
];
