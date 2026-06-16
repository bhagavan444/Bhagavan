import React, { useEffect } from "react";
import { m } from "framer-motion";
import "../styles/Work.css";

// Images
import careerOSImg from "../assets/careeros-new.jpg";
import resumeImg from "../assets/resume.jpg";
import chatImg from "../assets/aurabot-new.png";
import heartImg from "../assets/heart-new.png";
import leaveImg from "../assets/leave.jpg";
import fakeImg from "../assets/fake.jpg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const fadeUpStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-container">
      
      {/* SECTION 1 — HERO */}
      <section className="work-section hero-section full-width">
        <m.div className="hero-content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
          <m.h1 className="hero-headline" variants={fadeUp}>Building Intelligence<br/>For Human Potential.</m.h1>
          <m.p className="hero-subheadline" variants={fadeUp}>A collection of AI systems, intelligent products, and full-stack platforms designed to understand skills, automate decisions, and create opportunity.</m.p>
        </m.div>
        
        <m.div className="hero-cinematic-visual" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
           <div className="ambient-glow"></div>
           <div className="hero-center-device">
             {/* Ecosystem abstract representation */}
           </div>
        </m.div>
      </section>

      {/* SECTION 2 — THE VISION */}
      <section className="work-section vision-section full-width">
        <div className="content-constrain center-align">
          <m.h2 className="vision-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The future is not more software.<br/>
            The future is software that<br/>
            <span className="highlight-text">understands people.</span>
          </m.h2>
        </div>
      </section>

      {/* SECTION 3 — CAREEROS (Flagship) */}
      <section className="work-section full-width careeros-section">
        <div className="content-constrain center-align">
          <m.h2 className="product-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            CareerOS.
          </m.h2>
          <m.p className="product-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The Intelligence Ecosystem.
          </m.p>
          <m.p className="product-description" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            A unified platform engineered to synthesize thousands of data points—from code commits to interview cadence—illuminating career pathways that were previously invisible.
          </m.p>
        </div>

        <m.div className="large-product-visualization" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleIn}>
          <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
            <img loading="lazy" src={careerOSImg} alt="CareerOS Ecosystem" className="product-image" />
          </a>
        </m.div>

        <div className="content-constrain">
          <m.div className="ecosystem-modules" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            {[
              { title: "Resume Intelligence", desc: "Dynamic parsing and real-time optimization." },
              { title: "GitHub Intelligence", desc: "Deep code analysis and skill extraction." },
              { title: "Recruiter Intelligence", desc: "Automated screening and match scoring." },
              { title: "Interview Intelligence", desc: "Simulated environments with adaptive feedback." },
              { title: "Career Intelligence", desc: "Trajectory mapping and role prediction." },
              { title: "AI Assistant", desc: "Context-aware conversational guidance." },
              { title: "Portfolio Intelligence", desc: "Project impact quantification." },
              { title: "Skill Gap Intelligence", desc: "Real-time market alignment." },
              { title: "Learning Intelligence", desc: "Personalized upskilling roadmaps." }
            ].map((mod, idx) => (
              <m.div key={idx} className="ecosystem-module" variants={fadeUp}>
                <h4>{mod.title}</h4>
                <p>{mod.desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* SECTION 4 — HOW CAREEROS THINKS */}
      <section className="work-section how-it-thinks-section full-width">
        <div className="content-constrain">
          <m.h3 className="section-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The Architecture of Understanding
          </m.h3>
          
          <div className="horizontal-story-scroll">
            <m.div className="story-track" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              <m.div className="story-step" variants={fadeUp}>
                <span className="step-num">Step 1</span>
                <h3>Understand</h3>
                <p>Ingesting fragmented human context into structured data.</p>
              </m.div>
              <m.div className="story-step" variants={fadeUp}>
                <span className="step-num">Step 2</span>
                <h3>Analyze</h3>
                <p>Cross-referencing skills against global market demands.</p>
              </m.div>
              <m.div className="story-step" variants={fadeUp}>
                <span className="step-num">Step 3</span>
                <h3>Predict</h3>
                <p>Modeling future trajectories with machine learning.</p>
              </m.div>
              <m.div className="story-step" variants={fadeUp}>
                <span className="step-num">Step 4</span>
                <h3>Guide</h3>
                <p>Deploying conversational AI for contextual mentorship.</p>
              </m.div>
              <m.div className="story-step" variants={fadeUp}>
                <span className="step-num">Step 5</span>
                <h3>Accelerate</h3>
                <p>Bridging the gap between potential and opportunity.</p>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRODUCTS BUILT ALONG THE JOURNEY */}
      <section className="work-section supporting-products-section full-width">
        <div className="content-constrain center-align">
          <m.h2 className="section-title product-journey-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Products built along the journey.
          </m.h2>
        </div>

        {/* ResumeAI */}
        <div className="product-block">
          <div className="content-constrain center-align">
            <m.div className="product-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h3 className="secondary-product-title">ResumeAI</h3>
              <p className="secondary-product-desc">A foundation for intelligent career documents.</p>
            </m.div>
            <m.div className="product-visual" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleIn}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img loading="lazy" src={resumeImg} alt="ResumeAI" />
              </a>
            </m.div>
          </div>
        </div>

        {/* Aura Intelligence */}
        <div className="product-block alt-bg">
          <div className="content-constrain center-align">
            <m.div className="product-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h3 className="secondary-product-title">AuraBot</h3>
              <p className="secondary-product-desc">Conversational intelligence for modern workflows.</p>
            </m.div>
            <m.div className="product-visual no-bg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleIn}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img loading="lazy" src={chatImg} alt="AuraBot" />
              </a>
            </m.div>
          </div>
        </div>

        {/* Health Prediction */}
        <div className="product-block dark-environment">
          <div className="content-constrain center-align">
            <m.div className="product-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h3 className="secondary-product-title dark">Health Prediction</h3>
              <p className="secondary-product-desc dark">Machine learning for preventative healthcare.</p>
            </m.div>
            <m.div className="product-visual" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleIn}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img loading="lazy" src={heartImg} alt="Health Prediction" />
              </a>
            </m.div>
          </div>
        </div>

        {/* Smart Leave */}
        <div className="product-block">
          <div className="content-constrain center-align">
            <m.div className="product-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h3 className="secondary-product-title">Smart Leave</h3>
              <p className="secondary-product-desc">Automation for modern organizations.</p>
            </m.div>
            <m.div className="product-visual" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleIn}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img loading="lazy" src={leaveImg} alt="Smart Leave" />
              </a>
            </m.div>
          </div>
        </div>

        {/* Truth Engine */}
        <div className="product-block alt-bg">
          <div className="content-constrain center-align">
            <m.div className="product-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h3 className="secondary-product-title">Truth Engine</h3>
              <p className="secondary-product-desc">Information verification at scale.</p>
            </m.div>
            <m.div className="product-visual" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleIn}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img loading="lazy" src={fakeImg} alt="Truth Engine" />
              </a>
            </m.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ENGINEERING EXCELLENCE */}
      <section className="work-section engineering-section dark-environment full-width">
        <div className="content-constrain center-align">
          <m.h2 className="section-title dark" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Engineering Excellence.
          </m.h2>
          
          <m.div className="glass-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            {["MERN Stack", "React", "FastAPI", "TensorFlow", "Machine Learning", "Gemini AI", "MongoDB", "Cloud Deployment"].map((tech, idx) => (
              <m.div key={idx} className="glass-panel" variants={fadeUp}>
                <span>{tech}</span>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* SECTION 7 — NUMBERS */}
      <section className="work-section impact-section full-width">
        <div className="content-constrain">
          <m.div className="impact-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.div className="impact-stat" variants={fadeUp}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </m.div>
            <m.div className="impact-stat" variants={fadeUp}>
              <div className="stat-number">4+</div>
              <div className="stat-label">AI Systems</div>
            </m.div>
            <m.div className="impact-stat" variants={fadeUp}>
              <div className="stat-number">3+</div>
              <div className="stat-label">Internships</div>
            </m.div>
            <m.div className="impact-stat" variants={fadeUp}>
              <div className="stat-number">100k+</div>
              <div className="stat-label">Lines of Code</div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* SECTION 8 — INNOVATION TIMELINE */}
      <section className="work-section timeline-section full-width">
        <div className="content-constrain">
          <m.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The Journey.
          </m.h2>

          <div className="vertical-timeline">
            <m.div className="timeline-nodes" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              <m.div className="timeline-node" variants={fadeUp}>
                <h4>Workshop Training</h4>
              </m.div>
              <m.div className="timeline-node" variants={fadeUp}>
                <h4>Hackathons</h4>
              </m.div>
              <m.div className="timeline-node" variants={fadeUp}>
                <h4>Internships</h4>
              </m.div>
              <m.div className="timeline-node" variants={fadeUp}>
                <h4>AI Projects</h4>
              </m.div>
              <m.div className="timeline-node highlight" variants={fadeUp}>
                <h4>CareerOS</h4>
              </m.div>
              <m.div className="timeline-node future" variants={fadeUp}>
                <h4>Future Roadmap</h4>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHAT'S NEXT */}
      <section className="work-section future-section dark-environment full-width">
        <div className="content-constrain">
          <m.h2 className="section-title dark" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Coming Soon.
          </m.h2>

          <m.div className="future-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.div className="future-item" variants={fadeUp}>
              <h4>Recruiter Intelligence</h4>
            </m.div>
            <m.div className="future-item" variants={fadeUp}>
              <h4>Interview Arena</h4>
            </m.div>
            <m.div className="future-item" variants={fadeUp}>
              <h4>Portfolio Intelligence</h4>
            </m.div>
            <m.div className="future-item" variants={fadeUp}>
              <h4>Career Copilot</h4>
            </m.div>
            <m.div className="future-item" variants={fadeUp}>
              <h4>Multi-Agent Intelligence</h4>
            </m.div>
            <m.div className="future-item" variants={fadeUp}>
              <h4>AI Hiring Platform</h4>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* SECTION 10 — FINAL STATEMENT */}
      <section className="work-section final-statement-section dark-environment full-width">
        <m.div className="cinematic-bg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
        
        <div className="content-constrain center-align final-content">
          <m.h2 className="editorial-headline dark" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The Future Is Personal Intelligence.
          </m.h2>
          <m.p className="editorial-body dark" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Technology should not simply process information.<br/>
            It should understand potential.
          </m.p>
        </div>
      </section>

    </div>
  );
}
