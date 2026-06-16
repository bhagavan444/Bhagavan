import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = memo(function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const columns = [
    {
      title: "Navigation",
      links: [
        { name: "Overview", path: "/" },
        { name: "Work", path: "/work" },
        { name: "Experience", path: "/experience" },
        { name: "Capabilities", path: "/technology" },
        { name: "Credentials", path: "/credentials" },
        { name: "Innovation", path: "/innovation" },
        { name: "Vision", path: "/vision" }
      ]
    },
    {
      title: "Projects",
      links: [
        { name: "CareerOS Intelligence", path: "/work" },
        { name: "ResumeAI Tooling", path: "/work" },
        { name: "Heart Intelligence", path: "/work" },
        { name: "Smart Leave Automation", path: "/work" },
        { name: "Truth Engine Validation", path: "/work" }
      ]
    },
    {
      title: "Platforms",
      links: [
        { name: "Frontend Architecture", path: "/technology" },
        { name: "Backend Architecture", path: "/technology" },
        { name: "AI & Data Models", path: "/technology" },
        { name: "Cloud Deployment", path: "/technology" }
      ]
    },
    {
      title: "Profiles",
      links: [
        { name: "GitHub Repository", url: "https://github.com/bhagavan444", external: true },
        { name: "LinkedIn Network", url: "https://www.linkedin.com/in/gsssbhagavan/", external: true },
        { name: "Connect Page", path: "/connect" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "g.sivasatysaibhagavan@gmail.com", url: "mailto:g.sivasatysaibhagavan@gmail.com", external: true },
        { name: "+91 7569205626", url: "tel:+917569205626", external: true },
        { name: "Gudivada, Andhra Pradesh", path: "/connect" }
      ]
    }
  ];

  return (
    <footer style={{ 
      backgroundColor: '#f5f5f7', 
      color: '#1d1d1f', 
      paddingTop: '80px', 
      paddingBottom: '40px', 
      borderTop: '1px solid #d2d2d7', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', 
      fontSize: '12px',
      WebkitFontSmoothing: 'antialiased'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 4vw' }}>
        
        {/* PREMIUM TOP STATEMENT */}
        <div style={{ borderBottom: '1px solid #d2d2d7', paddingBottom: '60px', marginBottom: '40px', textAlign: 'left' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#1d1d1f', margin: '0 0 32px 0' }}>
            Engineering the future of personal intelligence.
          </h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => window.open('/resume.pdf', '_blank')} style={{ padding: '16px 32px', background: '#1d1d1f', color: '#fff', borderRadius: '100px', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', border: 'none', cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Download Official Resume
            </button>
            <button onClick={() => handleNavigation('/connect')} style={{ padding: '16px 32px', background: 'rgba(0,0,0,0.05)', color: '#1d1d1f', borderRadius: '100px', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', border: 'none', cursor: 'pointer', transition: 'background 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}>
              Initiate Contact
            </button>
          </div>
        </div>

        {/* APPLE-STYLE COLUMNS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', paddingBottom: '40px' }}>
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '-0.01em', color: '#1d1d1f', margin: '0 0 16px 0' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((link, i) => (
                  <li key={i}>
                    {link.external ? (
                      <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#515154', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s', letterSpacing: '-0.01em' }} onMouseOver={(e) => e.target.style.color = '#1d1d1f'} onMouseOut={(e) => e.target.style.color = '#515154'}>
                        {link.name}
                      </a>
                    ) : (
                      <span onClick={() => handleNavigation(link.path)} style={{ color: '#515154', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s', letterSpacing: '-0.01em' }} onMouseOver={(e) => e.target.style.color = '#1d1d1f'} onMouseOut={(e) => e.target.style.color = '#515154'}>
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div style={{ borderTop: '1px solid #d2d2d7', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ color: '#86868b', letterSpacing: '-0.01em' }}>
              <span style={{ fontWeight: 600, color: '#1d1d1f' }}>Bhagavan</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', color: '#86868b', flexWrap: 'wrap', letterSpacing: '-0.01em' }}>
              <span>Systems Engineer</span>
              <span style={{ borderLeft: '1px solid #d2d2d7', paddingLeft: '20px' }}>Artificial Intelligence</span>
              <span style={{ borderLeft: '1px solid #d2d2d7', paddingLeft: '20px' }}>Full Stack Architecture</span>
            </div>
          </div>
          <div style={{ color: '#86868b', paddingTop: '8px', letterSpacing: '-0.01em' }}>
            Copyright © {new Date().getFullYear()} Bhagavan. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;
