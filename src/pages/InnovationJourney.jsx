import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import '../styles/Innovation.css';

// Premium Artifacts
import vegacodeImg from '../assets/cert-vegacode.png';
import githubImg from '../assets/profile-github.png';
import leetcodeImg from '../assets/profile-leetcode.png';
import linkedInProfileImg from '../assets/link.png';
import trainingCert from '../assets/training.png';

// Workshop Artifacts
import aimlWorkshopImg from '../assets/cert-aiml-workshop.jpg';
import mobileWorkshopImg from '../assets/cert-mobile-workshop.jpg';
import webWorkshopImg from '../assets/cert-web-workshop.jpg';
import pythonWorkshopImg from '../assets/cert-ds-workshop.jpg';
import powerWorkshopImg from '../assets/cert-power-workshop.jpg';

// Animation Variants
const premiumFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const premiumFadeUpStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.3 } }
};

const artifactReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const lineDraw = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: '100%', opacity: 1, transition: { duration: 2, ease: [0.16, 1, 0.3, 1] } }
};

export default function InnovationJourney() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="innovation-container">
      
      {/* 1. HERO SECTION */}
      <section className="inn-section inn-hero full-width">
        <div className="atmospheric-hero-bg">
          <div className="particle-layer layer-1"></div>
          <div className="particle-layer layer-2"></div>
        </div>
        <m.div className="inn-content-constrain center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
          <m.h1 className="inn-headline-massive" variants={premiumFadeUp}>
            Innovation Begins<br />With A Question.
          </m.h1>
          <m.p className="inn-subheadline" variants={premiumFadeUp} style={{ marginTop: '40px', maxWidth: '900px' }}>
            Every breakthrough starts with curiosity. Every product starts with experimentation. Every system starts with a single idea.
          </m.p>
        </m.div>
      </section>

      {/* 2. THE CURIOSITY ENGINE */}
      <section className="inn-section">
        <div className="inn-content-constrain center-align">
          <m.h2 className="inn-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Curiosity Creates Everything.
          </m.h2>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger} style={{ marginTop: '40px', maxWidth: '800px' }}>
            <m.p className="inn-body-text" variants={premiumFadeUp} style={{ marginBottom: '32px' }}>
              Asking better questions leads to building better systems. Why is this process slow? Why does this interface cause friction? What happens if we rebuild this architecture from scratch?
            </m.p>
            <m.p className="inn-body-text" variants={premiumFadeUp}>
              Innovation is not a sudden spark; it is the deliberate practice of challenging assumptions and engineering solutions.
            </m.p>
          </m.div>
        </div>
      </section>

      {/* 3. THE PRODUCT CHALLENGE (Vegacode 2K25) */}
      <section className="inn-section inn-alt-bg full-width">
        <div className="inn-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="inn-eyebrow" variants={premiumFadeUp}>Vegacode 2K25 Hackathon</m.div>
            <m.h2 className="inn-headline-large" variants={premiumFadeUp}>24 Hours. One Idea.<br/>One Product.</m.h2>
            <m.p className="inn-body-text" variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
              A real-world engineering challenge. It wasn’t about competition; it was a test of decision making under constraints. Architecting, developing, and deploying a functional second-hand electronics marketplace in exactly 24 hours.
            </m.p>
          </m.div>

          <m.div className="museum-artifact-presentation" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={artifactReveal}>
            <div className="premium-floating-frame">
              <div className="glass-reflection"></div>
              <img loading="lazy" src={vegacodeImg} alt="Vegacode Hackathon Proof" />
            </div>
            <div className="artifact-caption">Proof Of Execution — Product Development Under Constraint</div>
          </m.div>
        </div>
      </section>

      {/* 4. BUILDING IN PUBLIC (GitHub & LinkedIn) */}
      <section className="inn-section full-width">
        <div className="inn-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="inn-headline-large" variants={premiumFadeUp}>Ideas Become Real<br/>When They're Shared.</m.h2>
          </m.div>

          <m.div className="dual-platform-showcase" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            
            {/* Left: GitHub */}
            <m.div className="platform-column" variants={artifactReveal}>
              <div className="platform-device macbook-frame">
                <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer">
                  <img loading="lazy" src={githubImg} alt="GitHub Engineering Journal" />
                </a>
              </div>
              <div className="platform-info">
                <h3>Engineering Journal.</h3>
                <p>A living history of system architecture evolution, public experimentation, and open-source contributions.</p>
              </div>
            </m.div>

            {/* Right: LinkedIn */}
            <m.div className="platform-column" variants={artifactReveal}>
              <div className="platform-device ipad-pro-frame glassmorphism-frame">
                <div className="glass-glare"></div>
                <a href="https://www.linkedin.com/in/gsssbhagavan/" target="_blank" rel="noopener noreferrer">
                  <img loading="lazy" src={linkedInProfileImg} alt="LinkedIn Professional Presence" />
                </a>
              </div>
              <div className="platform-info">
                <h3>Professional Presence.</h3>
                <p>Ideas grow through engineering. Impact grows through connection. Building a network around intelligent systems.</p>
              </div>
            </m.div>

          </m.div>
        </div>
      </section>

      {/* 5. TRAINING THE MIND (LeetCode) */}
      <section className="inn-section inn-alt-bg full-width">
        <div className="inn-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="inn-eyebrow" variants={premiumFadeUp}>LeetCode</m.div>
            <m.h2 className="inn-headline-large" variants={premiumFadeUp}>Learning Through Challenges.</m.h2>
            <m.p className="inn-body-text" variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
              Algorithmic problem solving is mental training. It is the rigorous discipline of analytical thinking, reasoning, and system decomposition required to build robust software.
            </m.p>
          </m.div>

          <m.div className="museum-artifact-presentation" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={artifactReveal}>
            <div className="premium-floating-frame leetcode-frame">
              <a href="https://leetcode.com/u/bhagavan444/" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={leetcodeImg} alt="LeetCode Consistency Proof" />
              </a>
            </div>
            <div className="artifact-caption">Proof Of Discipline — Algorithmic Reasoning</div>
          </m.div>
        </div>
      </section>

      {/* 6. LEARNING LABS */}
      <section className="inn-section full-width">
        <div className="inn-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="inn-headline-large" variants={premiumFadeUp}>Every Skill Started<br/>As An Experiment.</m.h2>
            <m.p className="inn-body-text" variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '80px' }}>
              Learning Labs: Intense bursts of capability building spanning artificial intelligence to full-stack engineering.
            </m.p>
          </m.div>

          <m.div className="learning-labs-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={premiumFadeUpStagger}>
            
            <m.div className="horizontal-learning-lab" variants={artifactReveal}>
              <div className="lab-visual"><img loading="lazy" src={aimlWorkshopImg} alt="AI Workshop" /></div>
              <div className="lab-details">
                <h3>Artificial Intelligence</h3>
                <p>Neural networks, predictive modeling, and intelligent systems foundation.</p>
              </div>
            </m.div>

            <m.div className="horizontal-learning-lab" variants={artifactReveal}>
              <div className="lab-visual"><img loading="lazy" src={webWorkshopImg} alt="Full Stack Workshop" /></div>
              <div className="lab-details">
                <h3>Full Stack Engineering</h3>
                <p>End-to-end web architecture, APIs, and responsive interface design.</p>
              </div>
            </m.div>

            <m.div className="horizontal-learning-lab" variants={artifactReveal}>
              <div className="lab-visual"><img loading="lazy" src={mobileWorkshopImg} alt="Mobile Workshop" /></div>
              <div className="lab-details">
                <h3>Mobile Development</h3>
                <p>Cross-platform fluid applications bridging logic and touch interactions.</p>
              </div>
            </m.div>

            <m.div className="horizontal-learning-lab" variants={artifactReveal}>
              <div className="lab-visual"><img loading="lazy" src={pythonWorkshopImg} alt="Python Workshop" /></div>
              <div className="lab-details">
                <h3>Python Foundations</h3>
                <p>Data structures, logic algorithms, and functional processing scripts.</p>
              </div>
            </m.div>

            <m.div className="horizontal-learning-lab" variants={artifactReveal}>
              <div className="lab-visual"><img loading="lazy" src={powerWorkshopImg} alt="Power Automate Workshop" /></div>
              <div className="lab-details">
                <h3>Power Automate</h3>
                <p>Enterprise workflow automation and frictionless business logic integration.</p>
              </div>
            </m.div>

          </m.div>
        </div>
      </section>

      {/* 7. PROFESSIONAL FOUNDATION (Ramachandra Special Training) */}
      <section className="inn-section inn-dark-environment full-width" style={{ padding: '240px 0' }}>
        <div className="inn-content-constrain center-align">
          <m.div className="inn-eyebrow dark-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>Ramachandra College Special Training Program</m.div>
          <m.h2 className="inn-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ fontSize: 'clamp(50px, 8vw, 100px)' }}>
            Where Capability Became Confidence.
          </m.h2>
          <m.p className="inn-body-text dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ maxWidth: '800px', marginTop: '24px' }}>
            The definitive bridge between academic learning and professional readiness.
          </m.p>

          <m.div className="prestigious-artifact-showcase" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={artifactReveal}>
            <div className="spotlight-effect"></div>
            <div className="prestigious-frame">
              <img loading="lazy" src={trainingCert} alt="Ramachandra Special Training Program" />
            </div>
          </m.div>

          <m.div className="foundation-stats-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="f-stat" variants={premiumFadeUp}>
              <div className="f-stat-value">6 Core</div>
              <div className="f-stat-label">Professional Skills</div>
            </m.div>
            <m.div className="f-stat" variants={premiumFadeUp}>
              <div className="f-stat-value">June 2025</div>
              <div className="f-stat-label">Awarded</div>
            </m.div>
            <m.div className="f-stat" variants={premiumFadeUp}>
              <div className="f-stat-value">Placement</div>
              <div className="f-stat-label">Preparation Mastered</div>
            </m.div>
          </m.div>

          <m.div className="foundation-tags" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.span variants={premiumFadeUp}>Python Programming</m.span>
            <m.span variants={premiumFadeUp}>Data Structures & Algorithms</m.span>
            <m.span variants={premiumFadeUp}>Coding Practice</m.span>
            <m.span variants={premiumFadeUp}>Aptitude Training</m.span>
            <m.span variants={premiumFadeUp}>Resume Engineering</m.span>
            <m.span variants={premiumFadeUp}>Mock Interviews</m.span>
          </m.div>

        </div>
      </section>

      {/* 8. THE INNOVATION ENGINE (Ecosystem Visualization) */}
      <section className="inn-section alt-bg full-width">
        <div className="inn-content-constrain center-align">
          <m.h2 className="inn-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            The Innovation Engine.
          </m.h2>
          
          <m.div className="ecosystem-visualization" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            
            <m.div className="eco-node" variants={premiumFadeUp}>Workshops</m.div>
            <m.div className="eco-path" variants={lineDraw}></m.div>
            
            <m.div className="eco-node" variants={premiumFadeUp}>Training Programs</m.div>
            <m.div className="eco-path" variants={lineDraw}></m.div>

            <div className="eco-row">
              <m.div className="eco-node small" variants={premiumFadeUp}>Hackathons</m.div>
              <m.div className="eco-node small" variants={premiumFadeUp}>GitHub</m.div>
              <m.div className="eco-node small" variants={premiumFadeUp}>Problem Solving</m.div>
            </div>
            <m.div className="eco-path" variants={lineDraw}></m.div>

            <m.div className="eco-node" variants={premiumFadeUp}>Projects</m.div>
            <m.div className="eco-path" variants={lineDraw}></m.div>

            <m.div className="eco-node flagship" variants={artifactReveal}>CareerOS</m.div>

          </m.div>
        </div>
      </section>

      {/* 9. INNOVATION PRINCIPLES (Manifesto) */}
      <section className="inn-section full-width manifesto-section">
        <div className="inn-content-constrain">
          <m.div className="manifesto-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="manifesto-statement" variants={premiumFadeUp}>Technology should create opportunity.</m.h2>
            <m.h2 className="manifesto-statement" variants={premiumFadeUp}>Learning should never stop.</m.h2>
            <m.h2 className="manifesto-statement" variants={premiumFadeUp}>Curiosity should become action.</m.h2>
            <m.h2 className="manifesto-statement" variants={premiumFadeUp}>Ideas should become products.</m.h2>
            <m.h2 className="manifesto-statement" variants={premiumFadeUp}>Systems should solve meaningful problems.</m.h2>
          </m.div>
        </div>
      </section>

      {/* 10. FUTURE EXPERIMENTS */}
      <section className="inn-section inn-alt-bg full-width">
        <div className="inn-content-constrain center-align">
          <m.h2 className="inn-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            What's Next.
          </m.h2>
          
          <m.div className="future-roadmap" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="future-item" variants={premiumFadeUp}>Agentic AI</m.div>
            <m.div className="future-item" variants={premiumFadeUp}>CareerOS Evolution</m.div>
            <m.div className="future-item" variants={premiumFadeUp}>Recruiter Intelligence</m.div>
            <m.div className="future-item" variants={premiumFadeUp}>Portfolio Intelligence</m.div>
            <m.div className="future-item" variants={premiumFadeUp}>AI Career Copilot</m.div>
            <m.div className="future-item" variants={premiumFadeUp}>Multi-Agent Systems</m.div>
          </m.div>
        </div>
      </section>

      {/* 11. THE FUTURE OF INNOVATION */}
      <section className="inn-section full-width cinematic-future-section">
        <div className="cinematic-gradient-bg"></div>
        <div className="inn-content-constrain center-align relative-z">
          <m.h1 className="inn-headline-massive" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}>
            Every Product Is A Prototype<br/>For Something Bigger.
          </m.h1>
        </div>
      </section>

      {/* 12. FINAL SECTION */}
      <section className="inn-section inn-dark-environment full-width" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div className="inn-content-constrain center-align">
          <m.h1 className="inn-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Innovation Is<br/>Never Finished.
          </m.h1>
          <m.p className="inn-subheadline dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ marginTop: '40px', maxWidth: '900px', fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.4 }}>
            The most important breakthroughs are not single moments. They are the result of continuous learning, experimentation, and execution over time.
          </m.p>
        </div>
      </section>

    </div>
  );
}
