import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Resume.css';

// Premium Animation Variants
const premiumFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } }
};

const premiumFadeUpStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 } }
};

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfUrl = "/Siva_Bhagavan_Resume.pdf";
  const resumeImage = "/bhagavanresume_page-0001.jpg";

  return (
    <div className="resume-container">

      {/* 1. HERO SECTION */}
      <section className="res-section res-hero full-width">
        <m.div className="res-content-constrain center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
          <m.h1 className="res-headline-massive" variants={premiumFadeUp}>
            The Builder.
          </m.h1>
          <m.p className="res-subheadline" variants={premiumFadeUp} style={{ marginTop: '40px', maxWidth: '900px' }}>
            A complete overview of engineering experience, intelligent systems, and continuous learning.
          </m.p>
        </m.div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="res-section res-alt-bg">
        <div className="res-content-constrain center-align">
          <m.h2 className="res-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Designed Through<br/>Experience.
          </m.h2>

          <m.div className="res-typographic-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="res-type-item" variants={premiumFadeUp}>Software Engineering</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>Artificial Intelligence</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>Full Stack Development</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>Career Intelligence</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>Product Development</m.div>
          </m.div>
        </div>
      </section>

      {/* 3. LIVE RESUME CENTERPIECE */}
      <section className="res-section">
        <div className="res-content-constrain center-align">
          <m.h2 className="res-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Experience.<br/>In Detail.
          </m.h2>

          <m.div className="resume-artifact-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            <img loading="lazy" 
              src={resumeImage} 
              alt="Siva Bhagavan Resume Document" 
              className="resume-artifact"
            />
          </m.div>
        </div>
      </section>

      {/* 4. DOWNLOAD EXPERIENCE */}
      <section className="res-section res-alt-bg">
        <div className="res-content-constrain center-align">
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="res-headline-large" variants={premiumFadeUp}>
              Take It With You.
            </m.h2>
            <m.div variants={premiumFadeUp}>
              <a href={pdfUrl} download="Siva_Bhagavan_Resume.pdf" className="download-pill">
                Download Resume <span>↓</span>
              </a>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* 5. HIGHLIGHTS */}
      <section className="res-section">
        <div className="res-content-constrain center-align">
          <m.div className="res-typographic-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="res-type-item" variants={premiumFadeUp}>4+ Internships</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>5+ AI Web Systems</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>AI Research</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>Full Stack Platforms</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>CareerOS</m.div>
            <m.div className="res-type-item" variants={premiumFadeUp}>ResumeAI</m.div>
          </m.div>
        </div>
      </section>

      {/* 6. ENGINEERING JOURNEY */}
      <section className="res-section res-alt-bg">
        <div className="res-content-constrain center-align">
          <m.div className="journey-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="journey-node active" variants={premiumFadeUp}>Education</m.div>
            <m.div className="journey-node active" variants={premiumFadeUp}>Experience</m.div>
            <m.div className="journey-node active" variants={premiumFadeUp}>Projects</m.div>
            <m.div className="journey-node active" variants={premiumFadeUp}>Innovation</m.div>
            <m.div className="journey-node active" variants={premiumFadeUp}>Skills</m.div>
          </m.div>
        </div>
      </section>

      {/* 7. WHAT THE RESUME REPRESENTS */}
      <section className="res-section">
        <div className="res-content-constrain center-align">
          <m.h2 className="res-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            More Than<br/>A Document.
          </m.h2>
          
          <m.p className="res-body-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ maxWidth: '800px', marginTop: '60px' }}>
            The resume is not a list of experiences. It is a record of learning, experimentation, building, and growth. It is proof of execution.
          </m.p>
        </div>
      </section>

      {/* 8. FINAL STATEMENT */}
      <section className="res-section final-statement-section res-dark-environment full-width">
        <div className="res-content-constrain center-align">
          <m.h1 className="res-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Still Building.
          </m.h1>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger} style={{ marginTop: '60px', textAlign: 'center' }}>
            <m.div className="res-subheadline dark-text-sec" variants={premiumFadeUp}>Every project.</m.div>
            <m.div className="res-subheadline dark-text-sec" variants={premiumFadeUp}>Every internship.</m.div>
            <m.div className="res-subheadline dark-text-sec" variants={premiumFadeUp}>Every challenge.</m.div>
            <m.p className="res-body-text dark-text-sec" variants={premiumFadeUp} style={{ maxWidth: '800px', marginTop: '40px' }}>
              A step toward building intelligent systems that create opportunity.
            </m.p>
          </m.div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="res-section res-dark-environment full-width" style={{ padding: '0 24px 250px' }}>
        <div className="res-content-constrain center-align">
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="res-headline-large dark-text" variants={premiumFadeUp} style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
              Explore The Work.
            </m.h2>
            <m.div className="explore-grid" variants={premiumFadeUpStagger}>
              <m.div variants={premiumFadeUp}><Link to="/work" className="explore-pill">Projects</Link></m.div>
              <m.div variants={premiumFadeUp}><Link to="/experience" className="explore-pill">Experience</Link></m.div>
              <m.div variants={premiumFadeUp}><Link to="/technology" className="explore-pill">Capabilities</Link></m.div>
              <m.div variants={premiumFadeUp}><Link to="/connect" className="explore-pill">Contact</Link></m.div>
            </m.div>
          </m.div>
        </div>
      </section>

    </div>
  );
}
