import React, { useEffect, useState } from 'react';
import { m, useInView } from 'framer-motion';

const AnimatedNumber = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(end, Math.floor(end * progress)));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function Impact() {
  const metrics = [
    { label: "Projects Built", value: 20, suffix: "+" },
    { label: "Internships Completed", value: 1, suffix: "" },
    { label: "Technologies Applied", value: 40, suffix: "+" },
    { label: "AI Systems Developed", value: 5, suffix: "+" },
    { label: "Deployments Shipped", value: 15, suffix: "+" }
  ];

  return (
    <div style={{ padding: '48px', height: '100%', background: '#000000', color: '#f5f5f7', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '48px' }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: '#a1a1a6', textTransform: 'uppercase', marginBottom: '8px' }}>
            Impact
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.03em' }}>
            Built Through Execution.
          </h2>
        </m.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {metrics.map((metric, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}
            >
              <div style={{ fontSize: '1.2rem', color: '#a1a1a6', fontWeight: 500 }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.04em', color: '#fff' }}>
                <AnimatedNumber end={metric.value} suffix={metric.suffix} />
              </div>
            </m.div>
          ))}
        </div>

      </div>
    </div>
  );
}
