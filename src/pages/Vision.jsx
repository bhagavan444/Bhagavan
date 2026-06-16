import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Vision.css';

// Premium Animation Variants
const cinematicFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const cinematicFadeUpStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.3 } }
};

const nodeReveal = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const lineDraw = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: '100%', opacity: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function Vision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vision-container">

      {/* 1. HERO SECTION */}
      <section className="vis-section vis-hero full-width">
        <div className="atmospheric-hero-bg">
          <div className="particle-layer layer-1"></div>
          <div className="particle-layer layer-2"></div>
        </div>
        <m.div className="vis-content-constrain center-align relative-z" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
          <m.h1 className="vis-headline-massive" variants={cinematicFadeUp}>
            The Next Operating System Won't Run Devices.
          </m.h1>
          <m.h1 className="vis-headline-massive" variants={cinematicFadeUp} style={{ marginTop: '20px', color: '#86868b' }}>
            It Will Understand People.
          </m.h1>
          <m.p className="vis-subheadline" variants={cinematicFadeUp} style={{ marginTop: '60px', maxWidth: '1000px' }}>
            For decades technology helped us process information. The next decade will be about understanding human potential.
          </m.p>
        </m.div>
      </section>

      {/* 2. THE HUMAN PROBLEM */}
      <section className="vis-section full-width">
        <div className="vis-content-constrain center-align">
          <m.div className="editorial-story" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="story-beat" variants={cinematicFadeUp} style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}>Potential Is Universal.</m.div>
            <m.div className="story-beat" variants={cinematicFadeUp} style={{ fontSize: 'clamp(50px, 8vw, 120px)', color: '#86868b' }}>Opportunity Is Not.</m.div>
          </m.div>
          
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger} style={{ maxWidth: '900px', marginTop: '100px' }}>
            <m.p className="vis-body-text" variants={cinematicFadeUp} style={{ marginBottom: '40px' }}>
              Millions of talented people never discover the opportunities they are capable of achieving.
            </m.p>
            <m.p className="vis-body-text" variants={cinematicFadeUp} style={{ marginBottom: '20px' }}>Not because they lack intelligence.</m.p>
            <m.p className="vis-body-text" variants={cinematicFadeUp} style={{ marginBottom: '20px' }}>Not because they lack ambition.</m.p>
            <m.p className="vis-body-text" variants={cinematicFadeUp} style={{ color: '#1d1d1f', fontWeight: 600 }}>Because they lack guidance.</m.p>
          </m.div>
        </div>
      </section>

      {/* 3. THE SHIFT */}
      <section className="vis-section vis-alt-bg full-width">
        <div className="vis-content-constrain center-align">
          <m.h2 className="vis-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            We Built Apps.<br/>Then Platforms.<br/>Now We Build Intelligence.
          </m.h2>

          <m.div className="progression-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="prog-node past" variants={nodeReveal}>Software</m.div>
            <m.div className="prog-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node past" variants={nodeReveal}>Platforms</m.div>
            <m.div className="prog-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node current" variants={nodeReveal}>Artificial Intelligence</m.div>
            <m.div className="prog-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node future" variants={nodeReveal}>Personal Intelligence</m.div>
            <m.div className="prog-arrow final" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node ultimate" variants={nodeReveal}>Human Potential Systems</m.div>
          </m.div>
        </div>
      </section>

      {/* 4. WHY THIS MATTERS */}
      <section className="vis-section full-width">
        <div className="vis-content-constrain center-align">
          <m.h2 className="vis-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Technology Understands Data.<br/>
            Technology Must Learn To Understand People.
          </m.h2>

          <m.div className="funnel-visualization" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <div className="funnel-inputs">
              <m.div className="f-input" variants={nodeReveal}>Skills</m.div>
              <m.div className="f-input" variants={nodeReveal}>Experience</m.div>
              <m.div className="f-input" variants={nodeReveal}>Strengths</m.div>
              <m.div className="f-input" variants={nodeReveal}>Weaknesses</m.div>
              <m.div className="f-input" variants={nodeReveal}>Potential</m.div>
              <m.div className="f-input" variants={nodeReveal}>Goals</m.div>
              <m.div className="f-input" variants={nodeReveal}>Learning Patterns</m.div>
              <m.div className="f-input" variants={nodeReveal}>Career Direction</m.div>
            </div>
            
            <div className="funnel-arrows">
              <m.div className="f-arrow" variants={cinematicFadeUp}>↘</m.div>
              <m.div className="f-arrow" variants={cinematicFadeUp}>↓</m.div>
              <m.div className="f-arrow" variants={cinematicFadeUp}>↙</m.div>
            </div>

            <m.div className="funnel-core" variants={nodeReveal}>
              One Intelligence System
            </m.div>
          </m.div>
        </div>
      </section>

      {/* 5. CAREEROS (CENTERPIECE) */}
      <section className="vis-section vis-dark-environment full-width" style={{ padding: '300px 0' }}>
        <div className="vis-content-constrain center-align relative-z">
          <m.div className="vis-eyebrow dark-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>The Centerpiece</m.div>
          <m.h1 className="vis-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ fontSize: 'clamp(80px, 15vw, 220px)' }}>
            CareerOS.
          </m.h1>
          <m.p className="vis-subheadline dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginTop: '20px', maxWidth: '900px' }}>
            The Intelligence Operating System.
          </m.p>

          <m.div className="vis-body-text dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger} style={{ marginTop: '80px', maxWidth: '800px' }}>
            <m.p variants={cinematicFadeUp} style={{ marginBottom: '16px' }}>Not a career platform.</m.p>
            <m.p variants={cinematicFadeUp} style={{ marginBottom: '16px' }}>Not a resume tool.</m.p>
            <m.p variants={cinematicFadeUp} style={{ marginBottom: '16px' }}>Not a job board.</m.p>
            <m.p variants={cinematicFadeUp} style={{ color: '#fff', fontWeight: 600 }}>A system designed to understand human potential.</m.p>
          </m.div>

          {/* Premium Ecosystem Visualization */}
          <m.div className="os-ecosystem-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="os-module" variants={nodeReveal}>Resume Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>GitHub Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>Recruiter Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>Interview Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>Career Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>Portfolio Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>AI Assistant</m.div>
            <m.div className="os-module" variants={nodeReveal}>Learning Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>Skill Gap Intelligence</m.div>
            <m.div className="os-module" variants={nodeReveal}>Opportunity Intelligence</m.div>
          </m.div>
        </div>
      </section>

      {/* 6. FROM RESUME TO REALITY */}
      <section className="vis-section full-width">
        <div className="vis-content-constrain center-align">
          <m.h2 className="vis-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            From Resume To Reality.
          </m.h2>

          <m.div className="progression-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger} style={{ marginTop: '80px' }}>
            <m.div className="prog-node past" variants={nodeReveal}>Student</m.div>
            <m.div className="prog-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node past" variants={nodeReveal}>Developer</m.div>
            <m.div className="prog-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node current" variants={nodeReveal}>Machine Learning Engineer</m.div>
            <m.div className="prog-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node current" variants={nodeReveal}>AI Builder</m.div>
            <m.div className="prog-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node future" variants={nodeReveal}>System Architect</m.div>
            <m.div className="prog-arrow final" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="prog-node ultimate" variants={nodeReveal}>CareerOS Founder</m.div>
          </m.div>
        </div>
      </section>

      {/* 7. THE FUTURE OF CAREER INTELLIGENCE */}
      <section className="vis-section vis-alt-bg full-width">
        <div className="vis-content-constrain center-align">
          <m.h2 className="vis-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Every Person Deserves A Personal Intelligence Layer.
          </m.h2>

          <m.p className="vis-body-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ maxWidth: '900px', marginTop: '40px' }}>
            Imagine a future where technology understands your skills, ambitions, strengths, weaknesses, and opportunities—before you even have to ask. A silent agent acting on your behalf to unlock doors you didn't know existed.
          </m.p>
        </div>
      </section>

      {/* 8. THE DECADE ROADMAP */}
      <section className="vis-section full-width">
        <div className="vis-content-constrain center-align">
          <m.h2 className="vis-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            The Decade Roadmap.
          </m.h2>

          <div className="decade-timeline">
            <m.div className="d-time-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={nodeReveal}>
              <div className="d-year">2026</div>
              <div className="d-milestone">CareerOS Foundation</div>
            </m.div>
            <m.div className="d-connector" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={lineDraw}></m.div>
            
            <m.div className="d-time-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={nodeReveal}>
              <div className="d-year">2027</div>
              <div className="d-milestone">Recruiter Intelligence</div>
            </m.div>
            <m.div className="d-connector" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={lineDraw}></m.div>

            <m.div className="d-time-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={nodeReveal}>
              <div className="d-year">2028</div>
              <div className="d-milestone">Portfolio Intelligence</div>
            </m.div>
            <m.div className="d-connector" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={lineDraw}></m.div>

            <m.div className="d-time-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={nodeReveal}>
              <div className="d-year">2029</div>
              <div className="d-milestone">Interview Arena</div>
            </m.div>
            <m.div className="d-connector" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={lineDraw}></m.div>

            <m.div className="d-time-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={nodeReveal}>
              <div className="d-year">2030</div>
              <div className="d-milestone">Multi-Agent CareerOS</div>
            </m.div>
            <m.div className="d-connector dashed" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={lineDraw}></m.div>

            <m.div className="d-time-node ultimate" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={nodeReveal}>
              <div className="d-year">2032+</div>
              <div className="d-milestone">Human Potential Intelligence</div>
            </m.div>
          </div>
        </div>
      </section>

      {/* 9. SUCCESS */}
      <section className="vis-section vis-alt-bg full-width">
        <div className="vis-content-constrain center-align">
          <m.h2 className="vis-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Success Is Not Measured By Users.
          </m.h2>
          <m.h2 className="vis-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ color: '#86868b' }}>
            It's Measured By Lives Changed.
          </m.h2>

          <m.div className="editorial-story" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="story-beat" variants={cinematicFadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Students discovering careers.</m.div>
            <m.div className="story-beat" variants={cinematicFadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Developers finding opportunities.</m.div>
            <m.div className="story-beat" variants={cinematicFadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Graduates understanding strengths.</m.div>
            <m.div className="story-beat" variants={cinematicFadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Recruiters discovering hidden talent.</m.div>
            <m.div className="story-beat" variants={cinematicFadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Founders finding direction.</m.div>
          </m.div>
        </div>
      </section>

      {/* 10. WHAT MUST NEVER CHANGE (Manifesto) */}
      <section className="vis-section full-width manifesto-section">
        <div className="vis-content-constrain">
          <m.h2 className="vis-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginBottom: '80px' }}>
            What Must Never Change
          </m.h2>
          
          <m.div className="manifesto-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Technology should create opportunity.</m.h2>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Intelligence should be accessible.</m.h2>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Learning should be continuous.</m.h2>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Products should empower people.</m.h2>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Engineering should solve meaningful problems.</m.h2>
          </m.div>
        </div>
      </section>

      {/* 11. LETTER TO THE FUTURE */}
      <section className="vis-section vis-alt-bg full-width">
        <div className="vis-content-constrain">
          <m.h2 className="vis-headline-large center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginBottom: '100px' }}>
            A Letter To The Future.
          </m.h2>

          <m.div className="museum-letter-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.p className="museum-letter-text" variants={cinematicFadeUp}>
              We are standing at the edge of a fundamental shift. For decades, we have been required to learn the language of machines. We learned syntax. We learned algorithms. We learned systems.
            </m.p>
            <m.p className="museum-letter-text" variants={cinematicFadeUp}>
              Now, we are building machines that are finally learning the language of us.
            </m.p>
            <m.p className="museum-letter-text" variants={cinematicFadeUp}>
              But intelligence without empathy is just computation. Our responsibility is not merely to build systems that are smart, but to build systems that care. Systems that look at a student, a builder, or a dreamer, and provide the exact guidance they need to realize their potential.
            </m.p>
            <m.p className="museum-letter-text" variants={cinematicFadeUp}>
              Curiosity drives us to build. Opportunity compels us to share. Impact is the only metric that will matter when the code stops running.
            </m.p>
            <m.div className="museum-letter-signoff" variants={cinematicFadeUp}>
              — Siva Satya Sai Bhagavan
            </m.div>
          </m.div>
        </div>
      </section>

      {/* 12. THE ULTIMATE VISION */}
      <section className="vis-section full-width cinematic-future-section">
        <div className="cinematic-gradient-bg"></div>
        <div className="vis-content-constrain center-align relative-z">
          <m.h1 className="vis-headline-massive" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ fontSize: 'clamp(60px, 10vw, 150px)' }}>
            Human Potential<br/>Intelligence.
          </m.h1>
          <m.p className="vis-subheadline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginTop: '40px', maxWidth: '1000px' }}>
            A future where technology understands people as naturally as it understands information.
          </m.p>
        </div>
      </section>

      {/* 13. FINAL SECTION */}
      <section className="vis-section vis-dark-environment full-width" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div className="vis-content-constrain center-align">
          <m.h1 className="vis-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            The Future Is<br/>Personal Intelligence.
          </m.h1>
          <m.p className="vis-subheadline dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginTop: '40px', maxWidth: '900px', fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.4 }}>
            Not software that processes information. Software that understands people.
          </m.p>
          
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cinematicFadeUpStagger} style={{ marginTop: '120px' }}>
            <Link to="/connect" className="minimal-cta-link dark-text">
              Build The Future <span>↗</span>
            </Link>
          </m.div>
        </div>
      </section>

    </div>
  );
}
