import { useState, useEffect } from 'react';
import { Button, Drawer, Space, Row, Col } from 'antd';
import { Menu as MenuIcon, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education & Certs', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" style={{ width: '100%' }}>
        <Row align="middle" justify="space-between" style={{ width: '100%' }}>
          <Col>
            <a href="#home" className="navbar-logo" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Souly<span style={{ color: 'var(--accent)' }}>.dev</span>
            </a>
          </Col>

          {/* Desktop Navigation */}
          <Col className="desktop-nav">
            <Space size="large">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </Space>
          </Col>

          <Col>
            <Space size="middle" align="middle">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              
              <Button
                type="primary"
                shape="round"
                icon={<Download size={16} style={{ verticalAlign: 'middle' }} />}
                href="/ThasoulyCV.pdf"
                download="Thasouly CV.pdf"
                className="cv-desktop"
                style={{
                  backgroundColor: 'var(--accent)',
                  borderColor: 'var(--accent)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                CV
              </Button>

              <Button
                type="text"
                icon={isOpen ? <X size={24} /> : <MenuIcon size={24} />}
                onClick={() => setIsOpen(!isOpen)}
                className="mobile-menu-btn"
                aria-label="Toggle menu"
                style={{
                  color: 'var(--text-primary)',
                }}
              />
            </Space>
          </Col>
        </Row>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        title={
          <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
            Souly<span style={{ color: 'var(--accent)' }}>.dev</span>
          </a>
        }
        placement="top"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        style={{ height: 'auto' }}
        styles={{
          body: {
            padding: '1.5rem',
            background: 'var(--bg-secondary)',
          },
          header: {
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border)',
          }
        }}
        closeIcon={<X size={20} style={{ color: 'var(--text-primary)' }} />}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border)',
                display: 'block'
              }}
            >
              {link.name}
            </a>
          ))}
          <Button
            type="primary"
            block
            size="large"
            icon={<Download size={18} style={{ verticalAlign: 'middle' }} />}
            href="/ThasoulyCV.pdf"
            download="Thasouly CV.pdf"
            onClick={handleLinkClick}
            style={{
              backgroundColor: 'var(--accent)',
              borderColor: 'var(--accent)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1rem',
              borderRadius: '8px'
            }}
          >
            Download CV
          </Button>
        </nav>
      </Drawer>
    </header>
  );
}
