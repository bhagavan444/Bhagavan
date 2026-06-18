import React from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function InnovationPreview() {
  const navigate = useNavigate();

 const items = [
  {
    title: "Hackathons",
    desc: "Turning ambitious ideas into real solutions through creativity, speed, and technical execution."
  },
  {
    title: "Workshops",
    desc: "Learning directly from industry practices and emerging technologies through immersive experiences."
  },
  {
    title: "Exploration",
    desc: "Investigating the future of artificial intelligence, intelligent systems, and digital innovation."
  },
  {
    title: "Growth",
    desc: "A commitment to continuous learning, experimentation, and expanding the boundaries of what is possible."
  }
];
  return (
    <div style={{ padding: '48px', height: '100%', background: '#fbfbfd', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '40px' }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '8px' }}>
            Innovation
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f', marginBottom: '16px' }}>
            Learning Through Building.
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#86868b', maxWidth: '600px', margin: '0 auto' }}>
            True engineering happens outside the classroom. It happens when you break things, fix them, and push the boundaries.
          </p>
        </m.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', width: '100%', marginBottom: '40px' }}>
          {items.map((item, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: '#fff', padding: '24px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '1rem', color: '#86868b', lineHeight: 1.4 }}>{item.desc}</p>
            </m.div>
          ))}
        </div>

        <m.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => { window.scrollTo(0,0); navigate('/innovation'); }}
          style={{ padding: '14px 32px', background: '#1d1d1f', color: '#fff', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          View Innovation Journey
        </m.button>

      </div>
    </div>
  );
}
