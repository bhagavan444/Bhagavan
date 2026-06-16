import React, { useEffect } from "react";
import { m } from "framer-motion";
import { Brain, Database, Network, Cpu, Server, Code, Terminal, Layers } from "lucide-react";
import "../styles/Experience.css";

// Certificates / Artifacts
import studyOwlCert from "../assets/cert-studyowl.png";
import blackbucksCert from "../assets/cert-blackbucks.png";
import smartBridgeCert from "../assets/cert-smartbridge.png";
import helsonCert from "../assets/cert-helson.png";

// Premium Animation Variants
const cinematicFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const cinematicFadeUpStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.3 } }
};

const artifactReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const networkLineDraw = {
  hidden: { height: 0 },
  visible: { height: "100%", transition: { duration: 2, ease: [0.16, 1, 0.3, 1] } }
};

export default function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience-container">
      
      {/* 1. HERO SECTION */}
      <section className="exp-section exp-hero full-width">
        <div className="intelligence-network-bg"></div>
        <m.div className="exp-content-constrain center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
          <m.h1 className="exp-headline-massive" variants={cinematicFadeUp}>
            Experience Shapes Intelligence.
          </m.h1>
          <m.h2 className="exp-subheadline" variants={cinematicFadeUp} style={{ marginTop: '40px', maxWidth: '900px' }}>
            Every system built. Every challenge solved. Every lesson learned.
          </m.h2>
        </m.div>
      </section>

      {/* 2. THE FIRST REAL PROBLEMS */}
      <section className="exp-section exp-editorial">
        <div className="exp-content-constrain center-align">
          <m.h2 className="exp-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Before Products, There Were Problems.
          </m.h2>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger} style={{ marginTop: '40px', maxWidth: '800px' }}>
            <m.p className="exp-body-text" variants={cinematicFadeUp} style={{ marginBottom: '24px' }}>
              The journey didn't start with intelligent architectures. It started with broken code. Failed deployments. Queries that timed out. 
            </m.p>
            <m.p className="exp-body-text" variants={cinematicFadeUp}>
              Real engineering isn't learned from tutorials; it's learned at 2 AM trying to understand why a server crashed. Every mistake forced a deeper understanding of systems. Every debugging session was a masterclass in resilience. Experience wasn't about adding lines to a resume—it was about surviving the complexity.
            </m.p>
          </m.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          3. THE EXPERIENCE JOURNEY (FOUR CHAPTERS)
      --------------------------------------------------------- */}

      {/* CHAPTER ONE: Blackbucks */}
      <section className="chapter-block full-width">
        <div className="exp-content-constrain">
          <m.div className="chapter-header" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="chapter-eyebrow" variants={cinematicFadeUp}>Chapter One • Machine Learning</m.div>
            <m.h2 className="exp-headline-large" variants={cinematicFadeUp}>Understanding Data.</m.h2>
          </m.div>

          <m.div className="chapter-visual-epic" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>
             <div className="abstract-ml-pipeline">
                <div className="ml-node label-top">Raw Data</div>
                <div className="ml-connector"></div>
                <div className="ml-node active"><Brain size={48} /></div>
                <div className="ml-connector"></div>
                <div className="ml-node label-bottom">Intelligence</div>
             </div>
          </m.div>

          <m.div className="chapter-editorial" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cinematicFadeUp}>
            <p className="exp-body-text">
              At Blackbucks, data was noise until it was engineered. Learning to preprocess, extract features, and build predictive models revealed that machine learning is less about algorithms and more about deeply understanding the information architecture beneath them.
            </p>
          </m.div>
        </div>
      </section>

      {/* CHAPTER TWO: StudyOwl */}
      <section className="chapter-block alt-bg full-width">
        <div className="exp-content-constrain">
          <m.div className="chapter-header" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="chapter-eyebrow" variants={cinematicFadeUp}>Chapter Two • Full Stack Engineering</m.div>
            <m.h2 className="exp-headline-large" variants={cinematicFadeUp}>Building Systems.</m.h2>
          </m.div>

          <m.div className="chapter-visual-epic" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>
             <div className="abstract-fs-architecture">
                <div className="fs-layer frontend">Frontend Interface</div>
                <div className="fs-flow"><Network size={24} /></div>
                <div className="fs-layer backend">Backend Logic & APIs</div>
                <div className="fs-flow"><Network size={24} /></div>
                <div className="fs-layer database">Database Architecture</div>
             </div>
          </m.div>

          <m.div className="chapter-editorial" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cinematicFadeUp}>
            <p className="exp-body-text">
              Models mean nothing if users can't interact with them. StudyOwl was the transition from scripts to scalable infrastructure. Designing secure APIs, managing state, and deploying resilient backends transformed concepts into functional platforms.
            </p>
          </m.div>
        </div>
      </section>

      {/* CHAPTER THREE: SmartBridge */}
      <section className="chapter-block full-width">
        <div className="exp-content-constrain">
          <m.div className="chapter-header" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="chapter-eyebrow" variants={cinematicFadeUp}>Chapter Three • AI Product Development</m.div>
            <m.h2 className="exp-headline-large" variants={cinematicFadeUp}>Turning Models Into Products.</m.h2>
          </m.div>

          <m.div className="chapter-visual-epic" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>
             <div className="abstract-ai-product">
                <div className="product-stage">Model<br/><Cpu size={32} /></div>
                <div className="product-arrow">→</div>
                <div className="product-stage highlight">Interface<br/><Layers size={32} /></div>
                <div className="product-arrow">→</div>
                <div className="product-stage">Deployment<br/><Server size={32} /></div>
             </div>
          </m.div>

          <m.div className="chapter-editorial" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cinematicFadeUp}>
            <p className="exp-body-text">
              The gap between a Jupyter Notebook and a deployed application is massive. SmartBridge demanded that AI become accessible. It required bridging the technical depth of neural networks with the usability of modern frontends.
            </p>
          </m.div>
        </div>
      </section>

      {/* CHAPTER FOUR: Helson */}
      <section className="chapter-block exp-dark-environment full-width">
        <div className="exp-content-constrain">
          <m.div className="chapter-header" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="chapter-eyebrow dark-sec" variants={cinematicFadeUp}>Chapter Four • Enterprise Automation</m.div>
            <m.h2 className="exp-headline-large dark-text" variants={cinematicFadeUp}>Engineering Intelligence.</m.h2>
          </m.div>

          <m.div className="chapter-visual-epic dark-epic" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>
             <div className="abstract-enterprise">
                <div className="decision-engine">Decision Engine</div>
                <div className="enterprise-lines">
                  <div className="e-line"></div>
                  <div className="e-line center"></div>
                  <div className="e-line"></div>
                </div>
                <div className="enterprise-nodes">
                  <div className="e-node">Data</div>
                  <div className="e-node">Logic</div>
                  <div className="e-node">Action</div>
                </div>
             </div>
          </m.div>

          <m.div className="chapter-editorial" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cinematicFadeUp}>
            <p className="exp-body-text dark-text-sec">
              Helson was where code stopped executing commands and started making decisions. Building automation architectures for enterprise environments meant writing software that could think, adapt, and operate at scale.
            </p>
          </m.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          4. WHAT EXPERIENCE CREATED
      --------------------------------------------------------- */}
      <section className="exp-section alt-bg">
        <div className="exp-content-constrain center-align">
          <m.h2 className="exp-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Capability Architecture.
          </m.h2>

          <m.div className="floating-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="capability-bubble" variants={artifactReveal}>AI Engineering</m.div>
            <m.div className="capability-bubble primary" variants={artifactReveal}>Full Stack Engineering</m.div>
            <m.div className="capability-bubble" variants={artifactReveal}>Product Thinking</m.div>
            <m.div className="capability-bubble" variants={artifactReveal}>Cloud Systems</m.div>
            <m.div className="capability-bubble secondary" variants={artifactReveal}>Machine Learning</m.div>
            <m.div className="capability-bubble" variants={artifactReveal}>Problem Solving</m.div>
            <m.div className="capability-bubble" variants={artifactReveal}>Leadership</m.div>
            <m.div className="capability-bubble" variants={artifactReveal}>System Design</m.div>
          </m.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          5. EXPERIENCE TIMELINE
      --------------------------------------------------------- */}
      <section className="exp-section">
        <div className="exp-content-constrain">
          
          <div className="apple-timeline">
            <m.div className="timeline-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
              <div className="step-year">2023</div>
              <div className="step-title">Learning Foundations</div>
            </m.div>

            <m.div className="timeline-connector" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={networkLineDraw}></m.div>

            <m.div className="timeline-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
              <div className="step-year">2024</div>
              <div className="step-title">Software Engineering</div>
            </m.div>

            <m.div className="timeline-connector" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={networkLineDraw}></m.div>

            <m.div className="timeline-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
              <div className="step-year">2025</div>
              <div className="step-title">Artificial Intelligence</div>
            </m.div>

            <m.div className="timeline-connector" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={networkLineDraw}></m.div>

            <m.div className="timeline-step highlight" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
              <div className="step-year">2026</div>
              <div className="step-title">CareerOS</div>
            </m.div>

            <m.div className="timeline-connector dashed" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={networkLineDraw}></m.div>

            <m.div className="timeline-step future" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
              <div className="step-year">Future</div>
              <div className="step-title">Intelligence Operating Systems</div>
            </m.div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------
          6. VERIFIED EXPERIENCE (Museum Gallery)
      --------------------------------------------------------- */}
      <section className="exp-section alt-bg full-width">
        <div className="exp-content-constrain center-align">
          <m.h2 className="exp-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Artifacts of Execution.
          </m.h2>
          <m.p className="exp-body-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginBottom: '80px', maxWidth: '700px' }}>
            Not just certificates. Physical manifestations of systems built, algorithms deployed, and products shipped.
          </m.p>

          <div className="museum-gallery">
            {[
              { img: blackbucksCert, title: "Blackbucks ML" },
              { img: studyOwlCert, title: "StudyOwl Engineering" },
              { img: smartBridgeCert, title: "SmartBridge AI" },
              { img: helsonCert, title: "Helson Automation" }
            ].map((artifact, i) => (
              <m.div key={i} className="museum-artifact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={artifactReveal}>
                <div className="glass-reflection"></div>
                <img loading="lazy" src={artifact.img} alt={artifact.title} />
                <div className="artifact-label">{artifact.title}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          7. WHAT I LEARNED
      --------------------------------------------------------- */}
      <section className="exp-section exp-dark-environment full-width" style={{ minHeight: '80vh', justifyContent: 'center' }}>
        <div className="exp-content-constrain">
          <m.h2 className="exp-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}>
            Technology Should Create Opportunity.
          </m.h2>
          
          <m.div className="principles-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.h3 variants={cinematicFadeUp}>Build for people.</m.h3>
            <m.h3 variants={cinematicFadeUp}>Solve meaningful problems.</m.h3>
            <m.h3 variants={cinematicFadeUp}>Learn continuously.</m.h3>
            <m.h3 variants={cinematicFadeUp}>Think in systems.</m.h3>
            <m.h3 variants={cinematicFadeUp}>Ship real products.</m.h3>
          </m.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          8. FROM EXPERIENCE TO VISION
      --------------------------------------------------------- */}
      <section className="exp-section">
        <div className="exp-content-constrain center-align">
          <m.h2 className="exp-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Every Experience Led To CareerOS.
          </m.h2>

          <div className="vision-path-container">
            <m.div className="vision-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>Machine Learning</m.div>
            <div className="vision-arrow">↓</div>
            <m.div className="vision-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>Software Engineering</m.div>
            <div className="vision-arrow">↓</div>
            <m.div className="vision-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>AI Systems</m.div>
            <div className="vision-arrow">↓</div>
            <m.div className="vision-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>Career Intelligence</m.div>
            <div className="vision-arrow final">↓</div>
            <m.div className="vision-node flagship" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>CareerOS</m.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          9. IMPACT
      --------------------------------------------------------- */}
      <section className="exp-section alt-bg full-width">
        <div className="exp-content-constrain">
          <m.div className="premium-stats-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="stat-card" variants={cinematicFadeUp}>
              <div className="stat-number">10+</div>
              <div className="stat-text">Projects</div>
            </m.div>
            <m.div className="stat-card" variants={cinematicFadeUp}>
              <div className="stat-number">4+</div>
              <div className="stat-text">Internships & Training</div>
            </m.div>
            <m.div className="stat-card" variants={cinematicFadeUp}>
              <div className="stat-number">25+</div>
              <div className="stat-text">Certifications</div>
            </m.div>
            <m.div className="stat-card" variants={cinematicFadeUp}>
              <div className="stat-number">AI</div>
              <div className="stat-text">Systems Built</div>
            </m.div>
            <m.div className="stat-card" variants={cinematicFadeUp}>
              <div className="stat-number">FS</div>
              <div className="stat-text">Full Stack Platforms</div>
            </m.div>
            <m.div className="stat-card" variants={cinematicFadeUp}>
              <div className="stat-number">1st</div>
              <div className="stat-text">Hackathon Experience</div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          10. THE FUTURE
      --------------------------------------------------------- */}
      <section className="exp-section">
        <div className="exp-content-constrain center-align">
          <m.div className="chapter-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>Product Roadmap</m.div>
          <m.h2 className="exp-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            The Best Work Hasn't Been Built Yet.
          </m.h2>

          <m.div className="future-roadmap-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="roadmap-item" variants={cinematicFadeUp}>
              <h4>Recruiter Intelligence</h4>
              <p>AI agent matching candidates precisely to roles.</p>
            </m.div>
            <m.div className="roadmap-item" variants={cinematicFadeUp}>
              <h4>Interview Arena</h4>
              <p>Real-time conversational mock interviews with LLMs.</p>
            </m.div>
            <m.div className="roadmap-item" variants={cinematicFadeUp}>
              <h4>Portfolio Intelligence</h4>
              <p>Dynamic resumes tailored dynamically to job descriptions.</p>
            </m.div>
            <m.div className="roadmap-item" variants={cinematicFadeUp}>
              <h4>Career Copilot</h4>
              <p>Always-on AI guiding continuous professional growth.</p>
            </m.div>
            <m.div className="roadmap-item flagship" variants={cinematicFadeUp}>
              <h4>Multi-Agent CareerOS</h4>
              <p>An ecosystem of agents running entire career lifecycles.</p>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          11. FINAL STATEMENT
      --------------------------------------------------------- */}
      <section className="exp-section exp-dark-environment full-width" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div className="exp-content-constrain center-align">
          <m.h1 className="exp-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Still Day One.
          </m.h1>
          <m.p className="exp-body-text dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginTop: '40px', maxWidth: '900px', fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.4 }}>
            The goal was never to gain experience. The goal was to use experience to build systems that create opportunity for millions.
          </m.p>
        </div>
      </section>

    </div>
  );
}
