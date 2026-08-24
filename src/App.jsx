import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  Award, 
  Send,
  ArrowUp
} from 'lucide-react';
import { ConfigProvider, Progress, Tooltip, theme as antdTheme } from 'antd';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const renderTechIcon = (iconName) => {
  switch (iconName) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61dafb" strokeWidth="1"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61dafb" strokeWidth="1"/>
          <circle r="2" fill="#61dafb"/>
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e34f26" d="M71 460L39 0h434l-32 460-185 52z"/>
          <path fill="#f06529" d="M256 472l149-41 27-386H256z"/>
          <path fill="#ebebeb" d="M256 176h-83v35h83v110l-83-22-5-60h-35l10 115 113 31zM256 94h-86v35h86z"/>
          <path fill="#fff" d="M256 176v35h83l-8 87-75 21v35l113-31 16-182zM256 94v35h86l8-35z"/>
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1572b6" d="M71 460L39 0h434l-32 460-185 52z"/>
          <path fill="#33a9dc" d="M256 472l149-41 27-386H256z"/>
          <path fill="#ebebeb" d="M256 208h-83v35h83v110l-83-22-5-60h-35l10 115 113 31zM256 126h-86v35h86z"/>
          <path fill="#fff" d="M256 208v35h83l-8 87-75 21v35l113-31 16-182zM256 126v35h86l8-35z"/>
        </svg>
      );
    case 'antd':
      return (
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M981.7 186.6c-8.8-38.4-47.3-62.8-86-54.6L592 197c-5.4 1.1-10.2 4.4-13.4 9.1L436.9 417.8l-156.4-96.1c-13.5-8.3-31.1-7-43.2 3.1L58.2 474.3c-23.7 19.6-27.2 54.4-7.8 78.2l207.2 253c7 8.5 17.6 13.5 28.7 13.5H912c61.9 0 112-50.1 112-112v-448c0-30.6-12.4-59.2-34.3-80.4c-2-1.9-4.2-3.9-6.3-5.8c-23.8-21.7-56-34-89.7-34l-8.6-.2zM826 690H320l-160-200 134-110 326 200V276l190-40c.8-.2 1.6-.2 2.4-.2c6.6 0 12 5.4 12 12v430c0 6.6-5.4 12-12 12z" fill="#1890ff"/>
        </svg>
      );
    case 'excel':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#EAF6EC" />
          <path d="M4 6C4 4.89543 4.89543 4 6 4H14L20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="#107C41" />
          <path d="M14 4V10H20" fill="#0A5C30" />
          <path d="M7.5 8.5L9.5 11.5L11.5 8.5H13L10.5 12L13 15.5H11.5L9.5 12.5L7.5 15.5H6L8.5 12L6 8.5H7.5Z" fill="white" />
        </svg>
      );
    case 'word':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#EBF3FC" />
          <path d="M4 6C4 4.89543 4.89543 4 6 4H14L20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="#185ABD" />
          <path d="M14 4V10H20" fill="#104A9E" />
          <path d="M7 8.5L9.2 15H10.8L13 8.5H11.5L10 13.5L8.5 8.5H7Z" fill="white" />
        </svg>
      );
    case 'powerpoint':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#FDF1EC" />
          <path d="M4 6C4 4.89543 4.89543 4 6 4H14L20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="#C43E1C" />
          <path d="M14 4V10H20" fill="#9E3014" />
          <path d="M7 8.5H10.5C11.88 8.5 13 9.62 13 11C13 12.38 11.88 13.5 10.5 13.5H8.5V15.5H7V8.5ZM8.5 10V12H10.5C11.05 12 11.5 11.55 11.5 11C11.5 10.45 11.05 10 10.5 10H8.5Z" fill="white" />
        </svg>
      );
    case 'capcut':
      return (
        <svg viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z" />
        </svg>
      );
    default:
      return null;
  }
};

import Navbar from './components/Navbar';
import {
  personalDetails,
  skillsData,
  projectsData,
  experienceData,
  educationData,
  certificatesData
} from './data/portfolioData';
import profileImg from './assets/tha_souly.jpg';
import './App.css';

function App() {
  // Theme state initialization
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    // Fallback to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show "Back to top" button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle theme handler
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  // Sync theme with document class and local storage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll listener for "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please provide a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main>
        
        {/* ==================== HOME / HERO ==================== */}
        <section id="home" className="section hero-section">
          <div className="container">
            <div className="hero-grid">
              
              {/* Left Content */}
              <div className="hero-content animate-fade-in-up">
                <span className="hero-tagline-badge">✨ Available for new opportunities</span>
                <h1 className="hero-title">
                  Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
                </h1>
                <h2 className="hero-subtitle" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {personalDetails.title}
                </h2>
                <p className="hero-description">
                  {personalDetails.tagline}
                </p>
                
                <div className="hero-actions">
                  <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                    View My Work
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                    Contact Me
                  </button>
                </div>
                
                <div className="hero-socials">
                  <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    <GithubIcon size={20} />
                  </a>
                  <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href={`mailto:${personalDetails.socials.email}`} className="social-icon" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="hero-visual animate-float">
                <div className="glow-blob glow-1"></div>
                <div className="glow-blob glow-2"></div>
                
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '24px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="profile-blob-container">
                    <img 
                      src={profileImg} 
                      alt={personalDetails.name} 
                      className="profile-blob-image"
                    />
                  </div>
                  <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{personalDetails.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>React.js & Data Analyst</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Get to know me</span>
              <h2 className="section-title">About Me</h2>
            </div>
            
            <div className="about-grid">
              <div className="about-text">
                {personalDetails.bio.map((paragraph, index) => (
                  <p key={index} className="about-bio">
                    {paragraph}
                  </p>
                ))}
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>My core philosophy:</h3>
                  <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                    "Data integrity drives correct insights, and clean frontend architecture empowers user productivity. I strive to design web systems that make complicated data processing look effortless."
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="stats-grid">
                  {personalDetails.stats.map((stat, index) => (
                    <div key={index} className="glass-panel stat-card" style={{ padding: '1rem' }}>
                      <div className="stat-number" style={{ fontSize: '2rem' }}>{stat.value}</div>
                      <div className="stat-label" style={{ fontSize: '0.8rem' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Personal Profile Info Card */}
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'left' }}>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.15rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Personal Profile</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '0.65rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Gender:</span>
                    <span>{personalDetails.personalInfo.sex}</span>
                    
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Birthdate:</span>
                    <span>{personalDetails.personalInfo.dob}</span>
                    
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Origin:</span>
                    <span>{personalDetails.personalInfo.pob}</span>
                    
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Nationality:</span>
                    <span>{personalDetails.personalInfo.nationality}</span>
                    
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Marital Status:</span>
                    <span>{personalDetails.personalInfo.status}</span>
                    
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Location:</span>
                    <span style={{ fontSize: '0.8rem' }}>{personalDetails.personalInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SKILLS ==================== */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">My Expertise</span>
              <h2 className="section-title">Technical Skills</h2>
            </div>
            
            <ConfigProvider
              theme={{
                algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                token: {
                  colorPrimary: theme === 'dark' ? '#818cf8' : '#6366f1',
                  borderRadius: 12,
                  fontFamily: 'var(--font-body)',
                },
              }}
            >
              <div className="skills-grid">
                {skillsData.map((category, index) => (
                  <div key={index} className="glass-panel skills-category-card">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="skills-list">
                      {category.skills.map((skill, sIndex) => (
                        <div key={sIndex} className="skill-item" style={{ marginBottom: '0.25rem' }}>
                          <div className="skill-info" style={{ marginBottom: '0.25rem' }}>
                            <span className="skill-name" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{skill.name}</span>
                          </div>
                          <Progress
                            percent={skill.percentage}
                            status="active"
                            strokeColor={{
                              '0%': theme === 'dark' ? '#818cf8' : '#6366f1',
                              '100%': '#a855f7',
                            }}
                            trailColor="var(--border)"
                            showInfo={true}
                            format={(percent) => (
                              <span style={{ color: theme === 'dark' ? '#818cf8' : '#6366f1', fontWeight: 600 }}>
                                {percent}%
                              </span>
                            )}
                          />
                        </div>
                      ))}
                    </div>

                    {category.technologies && category.technologies.length > 0 && (
                      <div className="category-tech-section">
                        <h4 className="tech-section-title">Tools & Technologies</h4>
                        <div className="tech-badges-grid">
                          {category.technologies.map((tech, tIdx) => (
                            <Tooltip key={tIdx} title={`Proficient in ${tech.name}`} placement="top">
                              <div className="tech-badge-card">
                                <div className="tech-badge-icon">
                                  {renderTechIcon(tech.icon)}
                                </div>
                                <span className="tech-badge-name">{tech.name}</span>
                              </div>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ConfigProvider>
          </div>
        </section>

        {/* ==================== PROJECTS ==================== */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Portfolio Showcases</span>
              <h2 className="section-title">Recent Projects</h2>
            </div>
            
            <div className="projects-grid">
              {projectsData.map((project) => (
                <article key={project.id} className="glass-panel project-card">
                  <div className="project-img-wrapper">
                    <img 
                      src={`/${project.imageName}`} 
                      alt={project.title} 
                      className="project-img"
                    />
                  </div>
                  
                  <div className="project-card-content">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">{project.description}</p>
                    
                    <div className="project-tech-list">
                      {project.techStack.map((tech, tIndex) => (
                        <span key={tIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-actions">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-btn"
                      >
                        <GithubIcon size={16} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-btn"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== EXPERIENCE ==================== */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Career Path</span>
              <h2 className="section-title">Work Experience</h2>
            </div>
            
            <div className="experience-container">
              {experienceData.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  
                  <div className="timeline-period-col">
                    <span>{exp.period}</span>
                  </div>
                  
                  <div className="timeline-card-col">
                    <div className="glass-panel experience-card">
                      <div className="experience-card-header">
                        <h3 className="experience-role">{exp.role}</h3>
                        <span className="experience-company">{exp.company}</span>
                      </div>
                      <ul className="experience-bullets">
                        {exp.description.map((bullet, bIndex) => (
                          <li key={bIndex}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CERTIFICATES ==================== */}
        <section id="certificates" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Qualifications</span>
              <h2 className="section-title">Education & Certificates</h2>
            </div>
            
            {/* Education Sub-Section */}
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '0.75rem', textAlign: 'left' }}>Academic Background</h3>
              <div className="certificates-grid">
                {educationData.map((edu) => (
                  <div key={edu.id} className="glass-panel certificate-card" style={{ padding: '1.75rem' }}>
                    <div className="cert-top">
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                      <span className="cert-issuer" style={{ color: 'var(--accent)' }}>{edu.school}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' }}>{edu.details}</p>
                    <div className="cert-bottom" style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <span className="cert-date">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates Sub-Section */}
            <div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '0.75rem', textAlign: 'left' }}>Certificates & Credentials</h3>
              <div className="certificates-grid">
                {certificatesData.map((cert) => (
                  <div key={cert.id} className="glass-panel certificate-card" style={{ padding: '1.5rem' }}>
                    <div className="cert-top">
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{cert.title}</h4>
                      <span className="cert-issuer" style={{ fontSize: '0.9rem' }}>{cert.issuer}</span>
                    </div>
                    <div className="cert-bottom" style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                      <span className="cert-date">{cert.date}</span>
                      {cert.link && cert.link !== '#' && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cert-link"
                        >
                          <span>Verify</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section id="contact" className="section" style={{ borderBottom: 'none' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Reach out</span>
              <h2 className="section-title">Contact Me</h2>
            </div>
            
            <div className="contact-grid">
              {/* Left Details */}
              <div className="contact-info">
                <div>
                  <h3 className="contact-info-title">Let's discuss something great!</h3>
                  <p className="contact-info-desc">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to shoot a message!
                  </p>
                </div>
                
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <Mail size={20} />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Email Me</h4>
                      <a href={`mailto:${personalDetails.socials.email}`}>
                        {personalDetails.socials.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Location</h4>
                      <p style={{ fontSize: '0.9rem' }}>{personalDetails.personalInfo.address}</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <Briefcase size={20} />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Work Type</h4>
                      <p>Remote / Full-time / Freelance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Form Card */}
              <div className="glass-panel contact-form-card">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="form-input" 
                      placeholder="Project Inquiries"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-textarea" 
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {formStatus.message && (
                    <div className={`form-status ${formStatus.type}`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="form-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ==================== FOOTER ==================== */}
      <footer>
        <div className="container footer-container">
          <div className="footer-logo">
            Souly<span>.dev</span>
          </div>
          
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#certificates" className="footer-link">Certificates</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          
          <div className="footer-socials">
            <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${personalDetails.socials.email}`} className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back To Top Button */}
      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 99,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = 'var(--accent)';
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
