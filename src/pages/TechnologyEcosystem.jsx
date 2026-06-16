import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import '../styles/Skills.css';

// Centralized Devicon CDN Loader
const getDevIcon = (iconPath) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconPath}`;

// Preserved Ecosystem Data for Floating Artifacts
const DEVICONS = {
  python: getDevIcon("python/python-original.svg"),
  javascript: getDevIcon("javascript/javascript-original.svg"),
  java: getDevIcon("java/java-original.svg"),
  sql: getDevIcon("azuresqldatabase/azuresqldatabase-original.svg"),
  html5: getDevIcon("html5/html5-original.svg"),
  css3: getDevIcon("css3/css3-original.svg"),
  react: getDevIcon("react/react-original.svg"),
  vite: getDevIcon("vitejs/vitejs-original.svg"),
  tailwind: getDevIcon("tailwindcss/tailwindcss-original.svg"),
  framer: getDevIcon("framer/framer-original.svg"),
  router: getDevIcon("reactrouter/reactrouter-original.svg"),
  nodejs: getDevIcon("nodejs/nodejs-original.svg"),
  express: getDevIcon("express/express-original.svg"),
  fastapi: getDevIcon("fastapi/fastapi-original.svg"),
  flask: getDevIcon("flask/flask-original.svg"),
  gemini: getDevIcon("google/google-original.svg"),
  tensorflow: getDevIcon("tensorflow/tensorflow-original.svg"),
  keras: getDevIcon("keras/keras-original.svg"),
  scikitlearn: getDevIcon("scikitlearn/scikitlearn-original.svg"),
  numpy: getDevIcon("numpy/numpy-original.svg"),
  pandas: getDevIcon("pandas/pandas-original.svg"),
  opencv: getDevIcon("opencv/opencv-original.svg"),
  mongodb: getDevIcon("mongodb/mongodb-original.svg"),
  mysql: getDevIcon("mysql/mysql-original.svg"),
  postgresql: getDevIcon("postgresql/postgresql-original.svg"),
  vercel: getDevIcon("vercel/vercel-original.svg"),
  githubactions: getDevIcon("githubactions/githubactions-original.svg"),
  git: getDevIcon("git/git-original.svg"),
  github: getDevIcon("github/github-original.svg"),
  vscode: getDevIcon("vscode/vscode-original.svg"),
  postman: getDevIcon("postman/postman-original.svg"),
  jupyter: getDevIcon("jupyter/jupyter-original.svg"),
  npm: getDevIcon("npm/npm-original-wordmark.svg")
};

// Premium Animation Variants
const premiumFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const premiumFadeUpStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 } }
};

// Helper Component for Devicon Floating Artifacts
const PremiumIcon = ({ name, icon, isDark = false }) => (
  <m.div className={`floating-devicon ${isDark ? 'dark-mode' : ''}`} variants={premiumFadeUp}>
    {icon ? (
      <img loading="lazy" src={icon} alt={name} className="devicon-img" />
    ) : (
      <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
        <div style={{ width: '10px', height: '10px', background: isDark ? '#a1a1a6' : '#86868b', borderRadius: '50%', margin: '0 auto' }}></div>
      </div>
    )}
    <span className={`devicon-label ${isDark ? 'dark-text' : ''}`}>{name}</span>
  </m.div>
);

const NarrativePill = ({ name, icon }) => (
  <div className="narrative-tech-pill">
    {icon && <img loading="lazy" src={icon} alt={name} />}
    <span>{name}</span>
  </div>
);

export default function TechnologyEcosystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="skills-container">

      {/* 1. HERO SECTION */}
      <section className="skill-section skill-hero full-width">
        <m.div className="skill-content-constrain center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
          <m.h1 className="skill-headline-massive" variants={premiumFadeUp}>
            Capabilities.
          </m.h1>
          <m.h1 className="skill-headline-massive" variants={premiumFadeUp} style={{ color: '#86868b' }}>
            Engineered.
          </m.h1>
          <m.p className="skill-subheadline" variants={premiumFadeUp} style={{ marginTop: '40px', maxWidth: '900px' }}>
            Years of learning transformed into systems, products, and intelligence.
          </m.p>
        </m.div>
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="skill-section skill-alt-bg">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Technology Evolves.<br/>Capability Endures.
          </m.h2>
          <m.p className="skill-body-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ maxWidth: '800px', marginTop: '32px' }}>
            Languages come and go. Frameworks are replaced. But the ability to architect systems, solve complex logic, and build functional intelligence remains permanent. This is not a list of technologies I know; this is a blueprint of the capabilities I have engineered.
          </m.p>
        </div>
      </section>

      {/* 3. WHAT I CREATE */}
      <section className="skill-section">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Products. Systems. Intelligence.
          </m.h2>

          <m.div className="editorial-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="editorial-item" variants={premiumFadeUp}>AI Systems</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Career Intelligence Platforms</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Full Stack Products</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Automation Engines</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Data-Driven Applications</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Decision Support Systems</m.div>
          </m.div>
        </div>
      </section>

      {/* 4. CAREEROS FLAGSHIP */}
      <section className="skill-section skill-alt-bg full-width">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            CareerOS
          </m.h2>
          <m.p className="skill-subheadline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ maxWidth: '800px' }}>
            A Living Intelligence System
          </m.p>
          <m.p className="skill-body-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ maxWidth: '800px', marginTop: '32px' }}>
            Every capability converges here. Not as an architecture diagram of scattered tools, but as an integrated platform of intelligence modules continuously analyzing, predicting, and optimizing career trajectories.
          </m.p>

          <m.div className="floating-devicon-ecosystem" style={{ marginTop: '60px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <PremiumIcon name="Resume Intelligence" />
            <PremiumIcon name="GitHub Intelligence" />
            <PremiumIcon name="Recruiter Intelligence" />
            <PremiumIcon name="Interview Intelligence" />
            <PremiumIcon name="Career Intelligence" />
            <PremiumIcon name="AI Assistant" />
          </m.div>
        </div>
      </section>

      {/* 5. FROM IDEA TO IMPACT (Narrative Flow Architecture) */}
      <section className="skill-section full-width">
        <div className="skill-content-constrain">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            From Idea To Impact.
          </m.h2>

          <div className="narrative-flow-container">
            <m.div className="narrative-stage" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.h3 variants={premiumFadeUp}>Idea</m.h3>
              <m.div className="narrative-tech-cluster" variants={premiumFadeUpStagger}>
                <NarrativePill name="System Design" />
                <NarrativePill name="Full Stack Arch" />
              </m.div>
            </m.div>

            <m.div className="narrative-stage" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.h3 variants={premiumFadeUp}>Design</m.h3>
              <m.div className="narrative-tech-cluster" variants={premiumFadeUpStagger}>
                <NarrativePill name="Dashboard Design" />
                <NarrativePill name="API Design" />
              </m.div>
            </m.div>

            <m.div className="narrative-stage" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.h3 variants={premiumFadeUp}>Engineering</m.h3>
              <m.div className="narrative-tech-cluster" variants={premiumFadeUpStagger}>
                <NarrativePill name="HTML5" icon={DEVICONS.html5} />
                <NarrativePill name="CSS3" icon={DEVICONS.css3} />
                <NarrativePill name="Java" icon={DEVICONS.java} />
                <NarrativePill name="Zustand" />
                <NarrativePill name="Recharts" />
              </m.div>
            </m.div>

            <m.div className="narrative-stage" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.h3 variants={premiumFadeUp}>Intelligence</m.h3>
              <m.div className="narrative-tech-cluster" variants={premiumFadeUpStagger}>
                <NarrativePill name="NumPy" icon={DEVICONS.numpy} />
                <NarrativePill name="Pandas" icon={DEVICONS.pandas} />
                <NarrativePill name="OpenCV" icon={DEVICONS.opencv} />
              </m.div>
            </m.div>

            <m.div className="narrative-stage" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.h3 variants={premiumFadeUp}>Impact</m.h3>
              <m.div className="narrative-tech-cluster" variants={premiumFadeUpStagger}>
                <NarrativePill name="Analytics Systems" />
                <NarrativePill name="Vercel" icon={DEVICONS.vercel} />
                <NarrativePill name="Render" />
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      {/* 6. FRONTEND ENGINEERING */}
      <section className="skill-section skill-alt-bg full-width">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Designing Experiences.
          </m.h2>
          
          <m.div className="floating-devicon-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <PremiumIcon name="React 19" icon={DEVICONS.react} />
            <PremiumIcon name="Vite" icon={DEVICONS.vite} />
            <PremiumIcon name="JavaScript" icon={DEVICONS.javascript} />
            <PremiumIcon name="Tailwind CSS" icon={DEVICONS.tailwind} />
            <PremiumIcon name="Framer Motion" icon={DEVICONS.framer} />
            <PremiumIcon name="React Router" icon={DEVICONS.router} />
          </m.div>
        </div>
      </section>

      {/* 7. BACKEND ENGINEERING */}
      <section className="skill-section full-width">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Building Systems.
          </m.h2>

          <m.div className="floating-devicon-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <PremiumIcon name="Node.js" icon={DEVICONS.nodejs} />
            <PremiumIcon name="Express.js" icon={DEVICONS.express} />
            <PremiumIcon name="FastAPI" icon={DEVICONS.fastapi} />
            <PremiumIcon name="Flask" icon={DEVICONS.flask} />
            <PremiumIcon name="JWT Auth" />
            <PremiumIcon name="REST APIs" />
            <PremiumIcon name="SSE Streaming" />
          </m.div>
        </div>
      </section>

      {/* 8. ARTIFICIAL INTELLIGENCE (Dark Immersive) */}
      <section className="skill-section skill-dark-environment full-width">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Engineering Intelligence.
          </m.h2>

          <m.div className="floating-devicon-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <PremiumIcon name="Google Gemini" icon={DEVICONS.gemini} isDark />
            <PremiumIcon name="TensorFlow" icon={DEVICONS.tensorflow} isDark />
            <PremiumIcon name="Keras" icon={DEVICONS.keras} isDark />
            <PremiumIcon name="Scikit-Learn" icon={DEVICONS.scikitlearn} isDark />
            <PremiumIcon name="Machine Learning" isDark />
            <PremiumIcon name="Deep Learning" isDark />
            <PremiumIcon name="Prompt Engineering" isDark />
            <PremiumIcon name="AI Agents" isDark />
          </m.div>
        </div>
      </section>

      {/* 9. DATA & INFRASTRUCTURE */}
      <section className="skill-section skill-alt-bg full-width">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Powering Intelligence.
          </m.h2>

          <m.div className="floating-devicon-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <PremiumIcon name="MongoDB" icon={DEVICONS.mongodb} />
            <PremiumIcon name="PostgreSQL" icon={DEVICONS.postgresql} />
            <PremiumIcon name="MySQL" icon={DEVICONS.mysql} />
            <PremiumIcon name="pgvector" />
            <PremiumIcon name="SQL" icon={DEVICONS.sql} />
            <PremiumIcon name="CI/CD" />
            <PremiumIcon name="GitHub Actions" icon={DEVICONS.githubactions} />
          </m.div>
        </div>
      </section>

      {/* 10. DEVELOPER ARSENAL */}
      <section className="skill-section full-width">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Tools Behind The Systems.
          </m.h2>

          <m.div className="floating-devicon-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <PremiumIcon name="Git" icon={DEVICONS.git} />
            <PremiumIcon name="GitHub" icon={DEVICONS.github} />
            <PremiumIcon name="VS Code" icon={DEVICONS.vscode} />
            <PremiumIcon name="Postman" icon={DEVICONS.postman} />
            <PremiumIcon name="Jupyter" icon={DEVICONS.jupyter} />
            <PremiumIcon name="npm" icon={DEVICONS.npm} />
          </m.div>
        </div>
      </section>

      {/* 11. WHAT THESE SKILLS ENABLE */}
      <section className="skill-section skill-alt-bg">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            What These Skills Create.
          </m.h2>

          <m.div className="editorial-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="editorial-item" variants={premiumFadeUp}>CareerOS</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>ResumeAI</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Recruiter Intelligence</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>AI Agents</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Analytics Platforms</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Automation Systems</m.div>
            <m.div className="editorial-item" variants={premiumFadeUp}>Full Stack Products</m.div>
          </m.div>
        </div>
      </section>

      {/* 12. FUTURE STACK */}
      <section className="skill-section skill-dark-environment">
        <div className="skill-content-constrain center-align">
          <m.h2 className="skill-headline-large dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            What's Next.
          </m.h2>

          <m.div className="editorial-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="editorial-item dark-border" variants={premiumFadeUp}>Multi-Agent Systems</m.div>
            <m.div className="editorial-item dark-border" variants={premiumFadeUp}>Advanced RAG</m.div>
            <m.div className="editorial-item dark-border" variants={premiumFadeUp}>Vector Databases</m.div>
            <m.div className="editorial-item dark-border" variants={premiumFadeUp}>AI Copilots</m.div>
            <m.div className="editorial-item dark-border" variants={premiumFadeUp}>Distributed Intelligence</m.div>
          </m.div>
        </div>
      </section>

      {/* 13. FINAL STATEMENT */}
      <section className="skill-section final-statement-section skill-dark-environment full-width">
        <div className="skill-content-constrain center-align">
          <m.h1 className="skill-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Technology Is<br/>The Medium.
          </m.h1>
          <m.h1 className="skill-headline-massive dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ marginTop: '20px' }}>
            Capability Is<br/>The Outcome.
          </m.h1>
          <m.p className="skill-subheadline dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ marginTop: '60px', maxWidth: '800px' }}>
            The goal is not mastering tools. The goal is building systems that create value.
          </m.p>
        </div>
      </section>

    </div>
  );
}
