import React from 'react';
import { m } from 'framer-motion';

export default function CurrentlyBuilding() {
  const items = [
    { title: "CareerOS", desc: "Flagship ecosystem scaling to production." },
    { title: "AI Career Intelligence", desc: "Developing specialized agents for deep semantic analysis of professional history." },
    { title: "Multi-Agent Systems", desc: "Architecting collaborative LLM networks to automate complex recruitment workflows." },
    { title: "Next Gen Resume Intelligence", desc: "Building the next iteration of ATS-bypassing resume generation." }
  ];

  return (
    <div style={{ padding: '48px', height: '100%', background: '#fbfbfd', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '40px' }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '8px' }}>
            Roadmap
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f' }}>
            Currently Building.
          </h2>
        </m.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {items.map((item, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', padding: '24px 32px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
            >
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#0066cc', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '4px', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#86868b' }}>
                  {item.desc}
                </p>
              </div>
            </m.div>
          ))}
        </div>

      </div>
    </div>
  );
}
