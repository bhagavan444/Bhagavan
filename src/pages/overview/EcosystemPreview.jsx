import React from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function EcosystemPreview() {
  const navigate = useNavigate();

  const blocks = [
    { name: "Frontend", color: "#0066cc" },
    { name: "Backend", color: "#bf4800" },
    { name: "AI Models", color: "#6b00b3" },
    { name: "Data", color: "#008800" },
    { name: "Cloud", color: "#000" },
    { name: "Foundations", color: "#555" }
  ];

  return (
    <div style={{ padding: '48px', height: '100%', background: '#000000', color: '#f5f5f7', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '40px' }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: '#a1a1a6', textTransform: 'uppercase', marginBottom: '8px' }}>
            Ecosystem
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#fff', marginBottom: '16px' }}>
            The Technologies Behind The Work.
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#a1a1a6' }}>
            A massive ecosystem of frameworks, databases, and AI models precisely integrated into single, seamless architectures.
          </p>
        </m.div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
          {blocks.map((block, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '12px 24px', background: '#1d1d1f', borderRadius: '20px', fontSize: '1rem', fontWeight: 600, color: '#fff', borderTop: `2px solid ${block.color}` }}
            >
              {block.name}
            </m.div>
          ))}
        </div>

        <m.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => { window.scrollTo(0,0); navigate('/ecosystem'); }}
          style={{ padding: '14px 32px', background: '#fff', color: '#000', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'transform 0.2s', alignSelf: 'center' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Explore Full Ecosystem
        </m.button>

      </div>
    </div>
  );
}
