import React from 'react';
import { m } from 'framer-motion';

const capabilities = [
  {
    name: "Product Engineering",
    desc: "Designing and building digital products that transform ideas into intuitive, real-world experiences."
  },
  {
    name: "Artificial Intelligence",
    desc: "Developing intelligent systems powered by machine learning and large language models to deliver meaningful insights."
  },
  {
    name: "Full-Stack Development",
    desc: "Creating seamless experiences across modern frontends, scalable backends, APIs, and databases."
  },
  {
    name: "Career Intelligence",
    desc: "Building platforms that analyze skills, experience, and potential to help people make better career decisions."
  },
  {
    name: "Data & Analytics",
    desc: "Transforming complex data into actionable intelligence through analysis, visualization, and predictive systems."
  }
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
