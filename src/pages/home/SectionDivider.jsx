import React from "react";
import { m } from "framer-motion";

export default function SectionDivider({ variant = 'default' }) {
  if (variant === 'cinematic') {
    return (
      <div style={{ position: 'relative', height: '120px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <m.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [.16, 1, .3, 1] }}
          style={{ width: '60%', maxWidth: '400px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.4), rgba(255,255,255,0.2), transparent)', transformOrigin: 'center' }}
        />
        <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', boxShadow: '0 0 15px rgba(255,255,255,0.2)' }} />
      </div>
    );
  }
  if (variant === 'glow') {
    return (
      <div style={{ position: 'relative', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(74,222,128,0.15) 30%, rgba(59,130,246,0.15) 50%, rgba(168,85,247,0.15) 70%, transparent 95%)' }} />
      </div>
    );
  }
  return (
    <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 4rem' }} />
  );
}
