import { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  Send,
} from 'lucide-react';
import { 
  ConfigProvider, 
  Progress, 
  Tooltip, 
  theme as antdTheme,
  Layout,
  Row,
  Col,
  Card,
  Timeline,
  Typography,
  Form,
  Input,
  Button,
  Space,
  Divider,
  Tag,
  FloatButton,
  message,
  Image
} from 'antd';

const { Title, Text, Paragraph } = Typography;

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
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h18v18H3V3zm11.525 10.978c-.08-.492-.346-.902-.857-1.074-.325-.116-.763-.232-1.1-.318-.46-.11-.635-.294-.635-.558 0-.306.27-.512.682-.512.443 0 .736.197.873.572l1.32-.822c-.29-.687-.962-1.127-1.92-1.127-1.282 0-2.19.782-2.19 1.942 0 1.258.826 1.738 1.83 2.008.572.15.93.284.93.635 0 .346-.37.558-.87.558-.57 0-.962-.284-1.11-.703l-1.353.79c.28.746 1.054 1.284 2.215 1.284 1.488 0 2.28-.797 2.28-2.023 0-1.23-.746-1.636-1.745-1.925l-.23-.066c-.463-.127-.63-.263-.63-.538 0-.256.242-.455.59-.455.372 0 .614.162.723.473l1.177-.704zm2.475 2.052v-6.03h1.442v4.836h1.996v1.194H17v-.002z" fill="#f7df1e"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.68 11.31L12.69 1.32c-.42-.42-1.12-.42-1.54 0L1.32 11.14c-.42.42-.42 1.12 0 1.54l9.99 9.99c.42.42 1.12.42 1.54 0l9.83-9.83c.42-.42.42-1.12 0-1.53z" fill="#F05032"/>
          <circle cx="12" cy="7.5" r="1.5" fill="white"/>
          <circle cx="12" cy="16.5" r="1.5" fill="white"/>
          <circle cx="8.5" cy="12" r="1.5" fill="white"/>
          <path d="M12 9v6M12 12c-1.5 0-2.5 0-3.5 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zM11.266 11.078h2.118c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.118c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zM11.266 8.358h2.118c.102 0 .186-.084.186-.186V6.057c0-.102-.084-.186-.186-.186h-2.118c-.102 0-.186.084-.186.186v2.115c0 .102.084.186.186.186zM8.577 11.078h2.117c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zM8.577 8.358h2.117c.102 0 .186-.084.186-.186V6.057c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.115c0 .102.084.186.186.186zM5.859 11.078h2.118c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186H5.859c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zM16.702 11.078h2.118c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.118c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zM22.84 9.828c-.28-.517-.893-.849-1.503-.849H19.53v2.118h2.09c.35 0 .678-.176.84-.469.314-.545.314-1.255.38-1.8zM2.001 13.064c-.066.574-.012 1.341.298 1.884.161.293.49.469.84.469h17.72c1.073 0 2.2-.849 2.502-1.849.278-.962.34-1.924.34-2.887v-.186H.901v2.118c.677.176 1.05.342 1.1.451z" fill="#2496ED" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"/>
          <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"/>
          <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"/>
          <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"/>
          <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"/>
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
  highlightsData,
  experienceData,
  educationData,
  certificatesData
} from './data/portfolioData';
import profileImg from './assets/tha_souly.jpg';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true);
    console.log('Contact form submitted with values:', values);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalDetails.socials.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject || 'Portfolio Contact Form',
          message: values.message
        })
      });

      if (response.ok) {
        message.success('Thank you! Your message has been sent successfully. I will get back to you soon.');
        form.resetFields();
      } else {
        message.error('Failed to send message. Please try again or email me directly.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      message.error('An error occurred. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: theme === 'dark' ? '#818cf8' : '#6366f1',
          borderRadius: 16,
          fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          colorBgContainer: theme === 'dark' ? 'rgba(19, 28, 49, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          colorBorder: theme === 'dark' ? '#1e293b' : '#e2e8f0',
        },
        components: {
          Card: {
            colorBgContainer: theme === 'dark' ? 'rgba(19, 28, 49, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          },
          Button: {
            borderRadius: 12,
            controlHeight: 40,
          }
        }
      }}
    >
      <Layout className="portfolio-app" style={{ minHeight: '100vh', background: 'transparent' }}>
        {/* Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main Content */}
        <Layout.Content style={{ marginTop: '70px', background: 'transparent' }}>
          
          {/* ==================== HOME / HERO ==================== */}
          <section id="home" className="section hero-section">
            <div className="container">
              <Row gutter={[48, 48]} align="middle" className="hero-grid">
                
                {/* Left Content */}
                <Col xs={24} lg={14} className="hero-content animate-fade-in-up">
                  <span className="hero-tagline-badge">✨ Available for new opportunities</span>
                  <Title level={1} className="hero-title" style={{ margin: '1rem 0' }}>
                    Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
                  </Title>
                  <Title level={2} style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1.5rem', marginTop: 0 }}>
                    {personalDetails.title}
                  </Title>
                  <Paragraph className="hero-description" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
                    {personalDetails.tagline}
                  </Paragraph>
                  
                  <Space size="middle" className="hero-actions" style={{ marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap' }}>
                    <Button 
                      type="primary" 
                      size="large" 
                      onClick={() => scrollToSection('projects')}
                      style={{ height: '48px', padding: '0 2rem', fontWeight: 600, backgroundColor: 'var(--accent)', borderColor: 'var(--accent)' }}
                    >
                      View My Work
                    </Button>
                    <Button 
                      size="large" 
                      onClick={() => scrollToSection('contact')}
                      style={{ height: '48px', padding: '0 2rem', fontWeight: 600 }}
                    >
                      Contact Me
                    </Button>
                  </Space>
                  
                  <Space size="middle" className="hero-socials">
                    <Button
                      shape="circle"
                      size="large"
                      icon={<GithubIcon size={20} />}
                      href={personalDetails.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    />
                    <Button
                      shape="circle"
                      size="large"
                      icon={<LinkedinIcon size={20} />}
                      href={personalDetails.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    />
                    <Button
                      shape="circle"
                      size="large"
                      icon={<Mail size={20} />}
                      href={`mailto:${personalDetails.socials.email}`}
                      className="social-icon"
                      aria-label="Email"
                    />
                  </Space>
                </Col>
                
                {/* Right Visual */}
                <Col xs={24} lg={10} className="hero-visual animate-float">
                  <div className="glow-blob glow-1"></div>
                  <div className="glow-blob glow-2"></div>
                  
                  <Card 
                    className="glass-panel" 
                    styles={{ body: { padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' } }}
                    style={{ borderRadius: '24px', position: 'relative', zIndex: 2, border: '1px solid var(--border-glass)' }}
                  >
                    <div className="profile-blob-container" style={{ marginBottom: '1rem' }}>
                      <img 
                        src={profileImg} 
                        alt={personalDetails.name} 
                        className="profile-blob-image"
                      />
                    </div>
                    <div style={{ textAlign: 'center', width: '100%' }}>
                      <Title level={3} style={{ fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>{personalDetails.name}</Title>
                      <Text style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>Web Developer & Data Analyst</Text>
                    </div>
                  </Card>
                </Col>
                
              </Row>
            </div>
          </section>

          {/* ==================== ABOUT ==================== */}
          <section id="about" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">Get to know me</span>
                <Title level={2} className="section-title">About Me</Title>
              </div>
              
              <Row gutter={[48, 32]} align="middle" className="about-grid">
                {/* Left Column: bio text */}
                <Col xs={24} lg={12} className="about-text">
                  {personalDetails.bio.map((paragraph, index) => (
                    <Paragraph key={index} className="about-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                      {paragraph}
                    </Paragraph>
                  ))}
                  <div style={{ marginTop: '2rem' }}>
                    <Title level={3} style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>My core philosophy:</Title>
                    <Paragraph style={{ fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                      "Data integrity drives correct insights, and clean frontend architecture empowers user productivity. I strive to design web systems that make complicated data processing look effortless."
                    </Paragraph>
                  </div>
                </Col>
                
                {/* Right Column: stats cards + macOS developer object terminal */}
                <Col xs={24} lg={12} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <Row gutter={[20, 20]} className="stats-grid">
                    {personalDetails.stats.map((stat, index) => (
                      <Col span={12} key={index}>
                        <Card className="glass-panel stat-card" styles={{ body: { padding: '1.5rem', textAlign: 'center' } }}>
                          <div className="stat-number" style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.25rem' }}>{stat.value}</div>
                          <Text className="stat-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>{stat.label}</Text>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  
                  {/* Personal Profile Info Card */}
                  <Card className="glass-panel" styles={{ body: { padding: '1.5rem' } }}>
                    <Title level={3} style={{ marginBottom: '1rem', fontSize: '1.15rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginTop: 0 }}>Personal Profile</Title>
                    <Row gutter={[16, 10]} style={{ fontSize: '0.85rem' }}>
                      <Col span={9} style={{ fontWeight: '700' }}><Text>Gender:</Text></Col>
                      <Col span={15}><Text type="secondary">{personalDetails.personalInfo.sex}</Text></Col>
                      
                      <Col span={9} style={{ fontWeight: '700' }}><Text>Birthdate:</Text></Col>
                      <Col span={15}><Text type="secondary">{personalDetails.personalInfo.dob}</Text></Col>
                      
                      <Col span={9} style={{ fontWeight: '700' }}><Text>Origin:</Text></Col>
                      <Col span={15}><Text type="secondary">{personalDetails.personalInfo.pob}</Text></Col>
                      
                      <Col span={9} style={{ fontWeight: '700' }}><Text>Nationality:</Text></Col>
                      <Col span={15}><Text type="secondary">{personalDetails.personalInfo.nationality}</Text></Col>
                      
                      <Col span={9} style={{ fontWeight: '700' }}><Text>Marital Status:</Text></Col>
                      <Col span={15}><Text type="secondary">{personalDetails.personalInfo.status}</Text></Col>
                      
                      <Col span={9} style={{ fontWeight: '700' }}><Text>Location:</Text></Col>
                      <Col span={15}><Text type="secondary" style={{ fontSize: '0.8rem' }}>{personalDetails.personalInfo.address}</Text></Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>

          {/* ==================== SKILLS ==================== */}
          <section id="skills" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">My Expertise</span>
                <Title level={2} className="section-title">Technical Skills</Title>
              </div>
              
              <Row gutter={[24, 24]} className="skills-grid">
                {skillsData.map((category, index) => (
                  <Col xs={24} md={12} lg={6} key={index}>
                    <Card className="glass-panel skills-category-card" styles={{ body: { padding: '1.75rem', height: '100%' } }} style={{ height: '100%' }}>
                      <Title level={3} className="category-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', marginTop: 0 }}>{category.category}</Title>
                      <div className="skills-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {category.skills.map((skill, sIndex) => (
                          <div key={sIndex} className="skill-item">
                            <div className="skill-info" style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
                              <Text strong>{skill.name}</Text>
                            </div>
                            <Progress
                              percent={skill.percentage}
                              status="active"
                              strokeColor={{
                                '0%': theme === 'dark' ? '#818cf8' : '#6366f1',
                                '100%': '#a855f7',
                              }}
                              railColor="var(--border)"
                              showInfo={true}
                              format={(percent) => (
                                <Text strong style={{ color: theme === 'dark' ? '#818cf8' : '#6366f1', fontSize: '0.8rem' }}>
                                  {percent}%
                                </Text>
                              )}
                            />
                          </div>
                        ))}
                      </div>

                      {category.technologies && category.technologies.length > 0 && (
                        <div className="category-tech-section" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                          <Title level={4} className="tech-section-title" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tools & Technologies</Title>
                          <Space size={[8, 8]} wrap>
                            {category.technologies.map((tech, tIdx) => (
                              <Tooltip key={tIdx} title={`Proficient in ${tech.name}`} placement="top">
                                <div className="tech-badge-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.65rem', border: '1px solid var(--border)', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                                  <div className="tech-badge-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {renderTechIcon(tech.icon)}
                                  </div>
                                  <Text style={{ fontSize: '0.75rem', fontWeight: 600 }}>{tech.name}</Text>
                                </div>
                              </Tooltip>
                            ))}
                          </Space>
                        </div>
                      )}
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* ==================== PROJECTS ==================== */}
          <section id="projects" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">Portfolio Showcases</span>
                <Title level={2} className="section-title">Recent Projects</Title>
              </div>
              
              <Row gutter={[32, 32]} className="projects-grid">
                {projectsData.map((project) => (
                  <Col xs={24} md={12} lg={8} key={project.id}>
                    <Card 
                      hoverable 
                      className="glass-panel project-card"
                      cover={
                        <div className="project-img-wrapper" style={{ height: '200px', overflow: 'hidden' }}>
                          <img 
                            src={`/${project.imageName.trim()}`} 
                            alt={project.title} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            className="project-img"
                          />
                        </div>
                      }
                      styles={{ body: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 } }}
                      style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                    >
                      <Title level={3} style={{ fontSize: '1.25rem', marginBottom: '0.5rem', marginTop: 0 }}>{project.title}</Title>
                      <Paragraph type="secondary" style={{ fontSize: '0.9rem', marginBottom: '1.25rem', flexGrow: 1 }}>
                        {project.description}
                      </Paragraph>
                      
                      <div className="project-tech-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        {project.techStack.map((tech, tIndex) => (
                          <Tag key={tIndex} color="blue" style={{ border: 'none', background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: 600 }}>
                            {tech}
                          </Tag>
                        ))}
                      </div>
                      
                      <Row gutter={12}>
                        <Col span={12}>
                          <Button 
                            block 
                            icon={<GithubIcon size={14} style={{ verticalAlign: 'middle' }} />}
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                          >
                            Code
                          </Button>
                        </Col>
                        <Col span={12}>
                          <Button 
                            block 
                            type="primary"
                            icon={<ExternalLink size={14} style={{ verticalAlign: 'middle' }} />}
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px', backgroundColor: 'var(--accent)', borderColor: 'var(--accent)' }}
                          >
                            Live Demo
                          </Button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* ==================== HIGHLIGHTS ==================== */}
          <section id="highlights" className="section">
            <div className="container">
              <div className="section-header" style={{ marginBottom: '3rem' }}>
                <span className="section-subtitle">Memorable Moments</span>
                <Title level={2} className="section-title">Activity Highlights</Title>
              </div>
              
              <Row gutter={[32, 32]} className="highlights-grid">
                {highlightsData.map((activity) => (
                  <Col xs={24} md={12} lg={8} key={activity.id}>
                    <Card 
                      hoverable 
                      className="glass-panel highlight-card"
                      cover={
                        <div className="highlight-img-wrapper" style={{ height: '240px', overflow: 'hidden', position: 'relative', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                          <Image
                            src={activity.image}
                            alt={activity.title}
                            width="100%"
                            height="100%"
                            style={{ objectFit: 'cover' }}
                            placeholder={
                              <div style={{ background: 'var(--bg-secondary)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Loading Activity Image...</span>
                              </div>
                            }
                          />
                        </div>
                      }
                      styles={{ body: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 } }}
                      style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                    >
                      <div style={{ marginBottom: '0.75rem' }}>
                        <Tag style={{ border: 'none', background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: 600, borderRadius: '6px', padding: '4px 10px' }}>
                          {activity.tag}
                        </Tag>
                      </div>
                      <Title level={3} style={{ fontSize: '1.25rem', marginBottom: '0.5rem', marginTop: 0 }}>
                        {activity.title}
                      </Title>
                      <Paragraph type="secondary" style={{ fontSize: '0.9rem', marginBottom: 0, flexGrow: 1, lineHeight: '1.6' }}>
                        {activity.description}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* ==================== EXPERIENCE ==================== */}
          <section id="experience" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">Career Path</span>
                <Title level={2} className="section-title">Work Experience</Title>
              </div>
              
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <Timeline 
                  mode="start"
                  items={experienceData.map((exp) => ({
                    title: (
                      <Text strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block', paddingRight: '1rem' }}>
                        {exp.period}
                      </Text>
                    ),
                    color: theme === 'dark' ? '#818cf8' : '#6366f1',
                    content: (
                      <Card className="glass-panel experience-card" styles={{ body: { padding: '1.5rem' } }} style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                          <Title level={3} style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{exp.role}</Title>
                          <Text style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>{exp.company}</Text>
                        </div>
                        <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          {exp.description.map((bullet, bIndex) => (
                            <li key={bIndex} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>{bullet}</li>
                          ))}
                        </ul>
                      </Card>
                    )
                  }))}
                />
              </div>
            </div>
          </section>

          {/* ==================== CERTIFICATES ==================== */}
          <section id="certificates" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">Qualifications</span>
                <Title level={2} className="section-title">Education & Certificates</Title>
              </div>
              
              {/* Education Sub-Section */}
              <div style={{ marginBottom: '4rem' }}>
                <Title level={3} style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.25rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '0.75rem', marginTop: 0 }}>
                  Academic Background
                </Title>
                <Row gutter={[24, 24]}>
                  {educationData.map((edu) => (
                    <Col xs={24} md={8} key={edu.id} style={{ display: 'flex' }}>
                      <Card className="glass-panel certificate-card" styles={{ body: { padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 } }} style={{ width: '100%', display: 'flex' }}>
                        <div style={{ flexGrow: 1 }}>
                          <Title level={4} style={{ fontSize: '1.15rem', marginBottom: '0.5rem', marginTop: 0 }}>{edu.degree}</Title>
                          <Text style={{ color: 'var(--accent)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>{edu.school}</Text>
                          <Paragraph type="secondary" style={{ fontSize: '0.9rem', margin: '0.5rem 0' }}>{edu.details}</Paragraph>
                        </div>
                        <Divider style={{ margin: '1rem 0' }} />
                        <Text type="secondary" style={{ fontSize: '0.8rem', fontWeight: 600 }}>{edu.period}</Text>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Certificates Sub-Section */}
              <div>
                <Title level={3} style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.25rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '0.75rem', marginTop: 0 }}>
                  Certificates & Credentials
                </Title>
                <Row gutter={[24, 24]}>
                  {certificatesData.map((cert) => (
                    <Col xs={24} sm={12} md={6} key={cert.id} style={{ display: 'flex' }}>
                      <Card className="glass-panel certificate-card" styles={{ body: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 } }} style={{ width: '100%', display: 'flex' }}>
                        <div style={{ flexGrow: 1 }}>
                          <Title level={4} style={{ fontSize: '1rem', marginBottom: '0.25rem', marginTop: 0 }}>{cert.title}</Title>
                          <Text type="secondary" style={{ fontSize: '0.85rem', display: 'block' }}>{cert.issuer}</Text>
                        </div>
                        <Divider style={{ margin: '1rem 0' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Text type="secondary" style={{ fontSize: '0.8rem' }}>{cert.date}</Text>
                          {cert.link && cert.link !== '#' && (
                            <Button 
                              type="link" 
                              size="small"
                              href={cert.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              icon={<ExternalLink size={12} />}
                              style={{ padding: 0, display: 'inline-flex', alignItems: 'center', gap: '2px', fontSize: '0.8rem' }}
                            >
                              Verify
                            </Button>
                          )}
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>

            </div>
          </section>

          {/* ==================== CONTACT ==================== */}
          <section id="contact" className="section" style={{ borderBottom: 'none' }}>
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">Reach out</span>
                <Title level={2} className="section-title">Contact Me</Title>
              </div>
              
              <Row gutter={[48, 48]} className="contact-grid">
                {/* Left Details */}
                <Col xs={24} lg={10} className="contact-info">
                  <div>
                    <Title level={3} className="contact-info-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: 0 }}>Let's discuss something great!</Title>
                    <Paragraph className="contact-info-desc" style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to shoot a message!
                    </Paragraph>
                  </div>
                  
                  <div className="contact-details" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="contact-detail-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="contact-icon-box" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={18} />
                      </div>
                      <div className="contact-detail-content">
                        <Title level={4} style={{ fontSize: '0.95rem', margin: 0 }}>Email Me</Title>
                        <a href={`mailto:${personalDetails.socials.email}`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                          {personalDetails.socials.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="contact-detail-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="contact-icon-box" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={18} />
                      </div>
                      <div className="contact-detail-content">
                        <Title level={4} style={{ fontSize: '0.95rem', margin: 0 }}>Location</Title>
                        <Text type="secondary" style={{ fontSize: '0.85rem' }}>{personalDetails.personalInfo.address}</Text>
                      </div>
                    </div>

                    <div className="contact-detail-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="contact-icon-box" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Briefcase size={18} />
                      </div>
                      <div className="contact-detail-content">
                        <Title level={4} style={{ fontSize: '0.95rem', margin: 0 }}>Work Type</Title>
                        <Text type="secondary" style={{ fontSize: '0.9rem' }}>Remote / Full-time / Freelance</Text>
                      </div>
                    </div>
                  </div>
                </Col>
                
                {/* Right Form Card */}
                <Col xs={24} lg={14}>
                  <Card className="glass-panel contact-form-card" styles={{ body: { padding: '2rem' } }}>
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={handleFormSubmit}
                      className="contact-form"
                    >
                      <Form.Item 
                        name="name" 
                        label={<Text strong>Name *</Text>} 
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input size="large" placeholder="John Doe" />
                      </Form.Item>
                      
                      <Form.Item 
                        name="email" 
                        label={<Text strong>Email *</Text>} 
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email address' }
                        ]}
                      >
                        <Input size="large" placeholder="john@example.com" />
                      </Form.Item>
                      
                      <Form.Item 
                        name="subject" 
                        label={<Text strong>Subject</Text>}
                      >
                        <Input size="large" placeholder="Project Inquiries" />
                      </Form.Item>
                      
                      <Form.Item 
                        name="message" 
                        label={<Text strong>Message *</Text>} 
                        rules={[{ required: true, message: 'Please enter your message' }]}
                      >
                        <Input.TextArea rows={4} placeholder="Tell me about your project..." />
                      </Form.Item>

                      <Form.Item style={{ marginBottom: 0 }}>
                        <Button 
                          type="primary" 
                          htmlType="submit" 
                          size="large"
                          loading={isSubmitting}
                          icon={<Send size={16} style={{ verticalAlign: 'middle' }} />}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: 600,
                            padding: '0 2rem',
                            height: '48px',
                            backgroundColor: 'var(--accent)',
                            borderColor: 'var(--accent)'
                          }}
                        >
                          Send Message
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>

        </Layout.Content>

        {/* ==================== FOOTER ==================== */}
        <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '3rem 0 2rem 0' }}>
          <div className="container footer-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div className="footer-logo" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Souly<span style={{ color: 'var(--accent)' }}>.dev</span>
            </div>
            
            <Space size="middle" wrap className="footer-links" style={{ justifyContent: 'center' }}>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#certificates" className="footer-link">Certificates</a>
              <a href="#contact" className="footer-link">Contact</a>
            </Space>
            
            <Space size="middle" className="footer-socials" style={{ marginTop: '0.5rem' }}>
              <Button
                shape="circle"
                icon={<GithubIcon size={18} />}
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              />
              <Button
                shape="circle"
                icon={<LinkedinIcon size={18} />}
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              />
              <Button
                shape="circle"
                icon={<Mail size={18} />}
                href={`mailto:${personalDetails.socials.email}`}
                className="social-icon"
                aria-label="Email"
              />
            </Space>
            
            <Divider style={{ margin: '1rem 0 0.5rem 0' }} />
            
            <div className="footer-bottom">
              <Text type="secondary">&copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</Text>
            </div>
          </div>
        </footer>

        {/* Back To Top Button via Ant Design FloatButton */}
        <FloatButton.BackTop 
          duration={600}
          style={{
            right: 30,
            bottom: 30,
          }}
        />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
