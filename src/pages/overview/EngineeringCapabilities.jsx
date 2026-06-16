import React from 'react';
import { m } from 'framer-motion';

const capabilities = [
  { name: "Software Engineering", desc: "Building scalable, robust architectures that power modern web and enterprise applications." },
  { name: "Artificial Intelligence", desc: "Integrating advanced LLMs and multi-agent systems to solve complex cognitive tasks." },
  { name: "Backend Architecture", desc: "Designing secure REST APIs, real-time SSE streaming, and microservices." },
  { name: "Full Stack Development", desc: "Crafting seamless user experiences from dynamic React frontends to robust databases." },
  { name: "Data Systems", desc: "Architecting efficient database schemas across MongoDB, MySQL, and vector stores." }
];

export default function EngineeringCapabilities() {
  return (
    <div style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', background: '#fbfbfd' }}>
      <div style={{ flex: 1 }}>
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '40px' }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '8px' }}>
            Core Skills
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f' }}>
            Engineering Across The Stack.
          </h2>
        </m.div>

        {/* Visualized as interconnected capabilities, massive clean typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {capabilities.slice(0, 4).map((cap, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '16px' }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#1d1d1f', marginBottom: '8px' }}>
                {cap.name}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#86868b', lineHeight: 1.4 }}>
                {cap.desc}
              </p>
            </m.div>
          ))}
        </div>

      </div>
    </div>
  );
}
