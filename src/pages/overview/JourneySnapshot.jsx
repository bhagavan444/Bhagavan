import React from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function JourneySnapshot() {
  const navigate = useNavigate();

  const journeyItems = [
    "Education", "Internships", "Hackathons", "Workshops", "Certifications", "Achievements"
  ];

  return (
    <div style={{ padding: '48px', height: '100%', background: '#ffffff', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '8px' }}>
            Experience
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f', marginBottom: '16px' }}>
            The Journey So Far.
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#86868b', marginBottom: '40px' }}>
            A continuous progression of academic excellence, professional experience, and technical milestones.
          </p>
        </m.div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
          {journeyItems.map((item, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '12px 24px', border: '1px solid #d2d2d7', borderRadius: '30px', fontSize: '1rem', fontWeight: 500, color: '#1d1d1f' }}
            >
              {item}
            </m.div>
          ))}
        </div>

        <m.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => { window.scrollTo(0,0); navigate('/experience'); }}
          style={{ padding: '14px 32px', background: '#1d1d1f', color: '#fff', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'transform 0.2s', alignSelf: 'center' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Explore Full Experience
        </m.button>

      </div>
    </div>
  );
}
