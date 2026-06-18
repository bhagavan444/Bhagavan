import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import '../styles/Skills.css';

// ─── CDN Source ───────────────────────────────────────────────────────────────
const getSimpleIcon = (slug) => `https://cdn.simpleicons.org/${slug}`;

// ─── Capability Editorial Marks ───────────────────────────────────────────────
// For every skill without an official logo, a curated typographic mark
// replaces the icon area. The mark IS the visual identity — not a fallback.
const CAPABILITY_MARKS = {
  'REST APIs':                    { mark: 'API',  sub: 'Protocol Layer' },
  'RAG Systems':                  { mark: 'RAG',  sub: 'Retrieval Augmented' },
  'XGBoost':                      { mark: 'XGB',  sub: 'Gradient Boosting' },
  'LightGBM':                     { mark: 'LGB',  sub: 'Gradient Boosting' },
  'LangGraph':                    { mark: 'LGR',  sub: 'Graph Orchestration' },
  'Vector Databases':             { mark: 'VDB',  sub: 'Semantic Search' },
  'Spring Data JPA':              { mark: 'JPA',  sub: 'Persistence Layer' },
  'Data Structures & Algorithms': { mark: 'DSA',  sub: 'CS Foundations' },
  'Object-Oriented Programming':  { mark: 'OOP',  sub: 'Design Paradigm' },
  'DBMS':                         { mark: 'DBMS', sub: 'Data Management' },
  'Operating Systems':            { mark: 'OS',   sub: 'Systems Layer' },
  'Computer Networks':            { mark: 'NET',  sub: 'Network Protocols' },
  'System Design':                { mark: 'SYS',  sub: 'Architecture' },
  'SDLC':                         { mark: 'SDLC', sub: 'Dev Lifecycle' },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// Each group has an editorial description written as a statement of capability,
// not a list of features. The text explains WHY these technologies matter.
const SKILL_GROUPS = [
  {
title: 'Programming Languages',
editorial:
'The building blocks of modern software. These technologies make it possible to create intelligent systems, engineer scalable platforms, process data, and deliver digital experiences that solve real-world problems.',
items: [
{ name: 'Python',     icon: getSimpleIcon('python') },
{ name: 'Java',       icon: getSimpleIcon('openjdk') },
{ name: 'JavaScript', icon: getSimpleIcon('javascript') },
{ name: 'TypeScript', icon: getSimpleIcon('typescript') },
{ name: 'SQL',        icon: getSimpleIcon('postgresql') },
],
},
 {
title: 'Frontend Engineering',
editorial:
'Where technology becomes experience. Modern frontend engineering combines performance, accessibility, and thoughtful design to create interfaces that feel intuitive, responsive, and effortless to use.',
items: [
{ name: 'React',        icon: getSimpleIcon('react') },
{ name: 'Next.js',      icon: getSimpleIcon('nextdotjs') },
{ name: 'HTML5',        icon: getSimpleIcon('html5') },
{ name: 'CSS3',         icon: getSimpleIcon('css3') },
{ name: 'Tailwind CSS', icon: getSimpleIcon('tailwindcss') },
],
}
,
  {
title: 'Backend Engineering',
editorial:
'Invisible to the user, essential to the experience. Backend systems provide the intelligence, reliability, and scalability required to transform ideas into products that work seamlessly at every interaction.',
items: [
{ name: 'Node.js',    icon: getSimpleIcon('nodedotjs') },
{ name: 'Express.js', icon: getSimpleIcon('express') },
{ name: 'Flask',      icon: getSimpleIcon('flask') },
{ name: 'FastAPI',    icon: getSimpleIcon('fastapi') },
{ name: 'REST APIs',  icon: null },
],
}
,
  {
title: 'Artificial Intelligence & Machine Learning',
editorial:
'Intelligence is most powerful when it creates clarity. These technologies enable the development of systems that analyze information, uncover insights, and transform complex data into meaningful action.',
items: [
{ name: 'NumPy',        icon: getSimpleIcon('numpy') },
{ name: 'Pandas',       icon: getSimpleIcon('pandas') },
{ name: 'Scikit-learn', icon: getSimpleIcon('scikitlearn') },
{ name: 'PyTorch',      icon: getSimpleIcon('pytorch') },
{ name: 'LangChain',    icon: getSimpleIcon('langchain') },
{ name: 'RAG Systems',  icon: null },
{ name: 'XGBoost',      icon: null },
{ name: 'LightGBM',     icon: null },
],
}
,{
title: 'LLM & AI Systems',
editorial:
'A new generation of intelligence. By combining large language models, retrieval systems, and AI orchestration frameworks, these technologies make it possible to build experiences that understand context, assist decision-making, and transform information into actionable insight.',
items: [
{ name: 'LangGraph',        icon: null },
{ name: 'LlamaIndex',       icon: getSimpleIcon('llamaindex') },
{ name: 'OpenAI API',       icon: getSimpleIcon('openai') },
{ name: 'Gemini API',       icon: getSimpleIcon('googlegemini') },
{ name: 'Anthropic API',    icon: getSimpleIcon('anthropic') },
{ name: 'Vector Databases', icon: null },
],
}
,
  {
title: 'Databases & Data Infrastructure',
editorial:
'Every intelligent product begins with data. From traditional databases to modern vector search systems, these technologies provide the foundation for storing knowledge, uncovering insights, and powering experiences that scale with confidence.',
items: [
{ name: 'MongoDB',    icon: getSimpleIcon('mongodb') },
{ name: 'PostgreSQL', icon: getSimpleIcon('postgresql') },
{ name: 'MySQL',      icon: getSimpleIcon('mysql') },
{ name: 'Redis',      icon: getSimpleIcon('redis') },
],
}
,
  {
title: 'Cloud & DevOps',
editorial:
'Great products must be reliable, maintainable, and ready to grow. These technologies support deployment, automation, collaboration, and cloud infrastructure—helping transform ideas into products that can evolve with confidence.',
items: [
{ name: 'Docker',         icon: getSimpleIcon('docker') },
{ name: 'AWS',            icon: getSimpleIcon('amazonaws') },
{ name: 'Git',            icon: getSimpleIcon('git') },
{ name: 'GitHub',         icon: getSimpleIcon('github') },
{ name: 'GitHub Actions', icon: getSimpleIcon('githubactions') },
{ name: 'Vercel',         icon: getSimpleIcon('vercel') },
{ name: 'Render',         icon: getSimpleIcon('render') },
],
}
,
  {
title: 'Java Ecosystem',
editorial:
'Built on principles of reliability and scalability, the Java ecosystem offers a deeper understanding of modern backend engineering. From application architecture to security and data management, it provides the foundation for building systems designed to grow and endure.',
items: [
{ name: 'Java',            icon: getSimpleIcon('openjdk') },
{ name: 'Spring Boot',     icon: getSimpleIcon('springboot') },

],
}
,
  {
title: 'Engineering Foundations',
editorial:
'Every great system is built on timeless principles. These fundamentals shape the way problems are approached, architectures are designed, and products are engineered—providing the foundation behind every intelligent application and platform.',
items: [
{ name: 'Data Structures & Algorithms', icon: null },
{ name: 'Object-Oriented Programming',  icon: null },
{ name: 'DBMS',                         icon: null },
{ name: 'Operating Systems',            icon: null },
{ name: 'Computer Networks',            icon: null },
{ name: 'System Design',                icon: null },
{ name: 'SDLC',                         icon: null },
],
},
];

// ─── Motion Variants ──────────────────────────────────────────────────────────
const APPLE_EASE = [0.16, 1, 0.3, 1];

// Section meta and headings
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: APPLE_EASE } },
};

// Stagger wrapper for entire section
const sectionStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Individual tile entry
const tileReveal = {
  hidden:  { opacity: 0, y: 14, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.45, ease: APPLE_EASE } },
};

// Stagger the tile grid independently
const tileGridStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

// ─── TechTile ─────────────────────────────────────────────────────────────────
// Used for technologies with an official Simple Icons SVG.
// The logo is small (28 px), monochrome by default, reveals brand color on hover.
// The technology NAME is the primary text — the logo is a quiet accent.
const TechTile = ({ item }) => (
  <m.div className="eco-tile" variants={tileReveal} role="listitem">
    <div className="eco-tile-icon-wrap">
      <img
        src={item.icon}
        alt={item.name}
        loading="lazy"
        className="eco-tile-logo"
      />
    </div>
    <span className="eco-tile-name">{item.name}</span>
  </m.div>
);

// ─── CapTile ──────────────────────────────────────────────────────────────────
// Used for engineering concepts and capabilities without official logos.
// The editorial mark (e.g. "DSA") IS the visual identity — not a fallback.
const CapTile = ({ item }) => {
  const cap = CAPABILITY_MARKS[item.name] ?? {
    mark: item.name.slice(0, 3).toUpperCase(),
    sub:  'Concept',
  };

  return (
    <m.div className="eco-tile eco-cap-tile" variants={tileReveal} role="listitem">
      <div className="eco-cap-mark-wrap">
        <span className="eco-cap-mark">{cap.mark}</span>
        <span className="eco-cap-sub">{cap.sub}</span>
      </div>
      <span className="eco-tile-name">{item.name}</span>
    </m.div>
  );
};

// ─── EcoSection ───────────────────────────────────────────────────────────────
// Each section is an editorial chapter.
// Desktop: two-column grid — left (sticky meta) | right (tile grid).
// Mobile: stacked vertical, meta above tiles.
const EcoSection = ({ group, index }) => (
  <m.section
    className="eco-section"
    aria-labelledby={`eco-section-${index}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={sectionStagger}
  >
    {/* Left column: section number, title, editorial description */}
    <div className="eco-section-meta">
      <m.span className="eco-section-num" variants={fadeUp} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </m.span>
      <m.h2
        id={`eco-section-${index}`}
        className="eco-section-title"
        variants={fadeUp}
      >
        {group.title}
      </m.h2>
      <m.p className="eco-section-editorial" variants={fadeUp}>
        {group.editorial}
      </m.p>
    </div>

    {/* Right column: technology + capability tiles */}
    <m.div
      className="eco-tile-grid"
      role="list"
      variants={tileGridStagger}
    >
      {group.items.map((item) =>
        item.icon
          ? <TechTile  key={item.name} item={item} />
          : <CapTile   key={item.name} item={item} />
      )}
    </m.div>
  </m.section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TechnologyEcosystem() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="eco-page">

      {/* ── HERO ── */}
      <section className="eco-hero" aria-label="Technology Ecosystem Hero">
        <m.span
          className="eco-hero-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: APPLE_EASE }}
        >
          Engineering Capabilities
        </m.span>

        <m.h1
          className="eco-hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: APPLE_EASE }}
        >
          Built Through Practice.
        </m.h1>

        <m.p
          className="eco-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22, ease: APPLE_EASE }}
        >
        Every skill, system, and capability was developed through continuous learning, experimentation, and real-world execution. Progress came not from theory alone, but from building, testing, failing, improving, and building again.
        </m.p>
      </section>

      {/* ── CHAPTERS ── */}
      {SKILL_GROUPS.map((group, index) => (
        <EcoSection key={group.title} group={group} index={index} />
      ))}

      {/* ── CLOSING ── */}
      <m.section
        className="eco-closing"
        aria-label="Closing statement"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionStagger}
      >
        <m.h2 className="eco-closing-headline" variants={fadeUp}>
          Technology Changes
        </m.h2>
        <m.h3 className="eco-closing-subheadline" variants={fadeUp}>
          The Fundamentals Remain.
        </m.h3>
        <m.p className="eco-closing-text" variants={fadeUp}>
          Technologies change. Great engineering principles do not. The pursuit of solving problems, designing systems, and creating meaningful products remains constant.
        </m.p>
      </m.section>

    </div>
  );
}
