import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import '../styles/Innovation.css';

// ─── Core Artifacts ───────────────────────────────────────────────────────────
import vegacodeImg from '../assets/cert-vegacode.png';
import githubImg from '../assets/profile-github.png';
import leetcodeImg from '../assets/profile-leetcode.png';
import linkedInProfileImg from '../assets/link.png';
import trainingCert from '../assets/training.png';

// ─── Workshop Artifacts ───────────────────────────────────────────────────────
import aimlWorkshopImg from '../assets/cert-aiml-workshop.jpg';
import mobileWorkshopImg from '../assets/cert-mobile-workshop.jpg';
import webWorkshopImg from '../assets/cert-web-workshop.jpg';
import pythonWorkshopImg from '../assets/cert-ds-workshop.jpg';
import powerWorkshopImg from '../assets/cert-power-workshop.jpg';

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const imgReveal = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────
function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      {children}
    </m.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const MINDSET_STEPS = ["Question.", "Experiment.", "Build.", "Learn.", "Repeat."];

const LABS = [
  {
    img: aimlWorkshopImg,
    title: "AI & Machine Learning"
  },
  {
    img: webWorkshopImg,
    title: "Modern Web Systems"
  },
  {
    img: mobileWorkshopImg,
    title: "Mobile Innovation"
  },
  {
    img: pythonWorkshopImg,
    title: "Software Foundations"
  },
  {
    img: powerWorkshopImg,
    title: "Workflow Automation"
  }
];

const FOUNDATION = [
  "Engineering Fundamentals",
  "Problem Solving",
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Product Development",
  "Career Growth"
];

const EXPERIENCES = [
  "AI Systems",
  "Product Engineering",
  "Platform Development",
  "Career Intelligence",
  "System Thinking",
  "Continuous Growth"
];

const PRINCIPLES = [
  "Technology should empower growth.",
  "Intelligence should be accessible.",
  "Complexity should feel simple.",
  "Products should create impact.",
  "Learning should never stop."
];

const EXPLORATION = [
  "Human Potential",
  "Career Intelligence",
  "AI Agents",
  "Talent Intelligence",
  "Portfolio Intelligence",
  "Future of Work"
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InnovationJourney() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inn-page">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="inn-hero" aria-label="Innovation Hero">
        <m.h1 
          className="inn-hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
         Every Innovation Starts With A Question.
        </m.h1>
        <m.p 
          className="inn-hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
         Every great product begins with a question that demands an answer.
        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — THE MINDSET
      ══════════════════════════════════════════════════════ */}
      <section className="inn-mindset">
        <div className="inn-constrain center-align">
          <Reveal>
            <m.span className="inn-eyebrow" variants={fadeUp}>The Mindset</m.span>
            <m.h2 className="inn-section-headline" variants={fadeUp}>
              Everything Begins With Curiosity.
            </m.h2>
          </Reveal>
          
          <Reveal className="inn-mindset-sequence">
            {MINDSET_STEPS.map((step) => (
              <m.div key={step} className="inn-mindset-step" variants={fadeUp}>
                {step}
              </m.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — VEGACODE HACKATHON
      ══════════════════════════════════════════════════════ */}
      <section className="inn-hackathon inn-alt">
        <div className="inn-constrain">
          <Reveal className="center-align">
            <m.span className="inn-eyebrow" variants={fadeUp}>Vegacode 2K25 Hackathon</m.span>
            <m.h2 className="inn-section-headline" variants={fadeUp}>
              24 Hours To Build.
            </m.h2>
          </Reveal>

          <m.div 
            className="inn-museum-frame"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-80px" }} 
            variants={imgReveal}
          >
            <img src={vegacodeImg} alt="Vegacode Hackathon Certificate" loading="lazy" />
          </m.div>

          <Reveal className="inn-constrain--reading">
  <m.p className="inn-body" variants={fadeUp}>
    Innovation often happens under pressure. Limited time, limited resources, and complex problems create an environment where creativity, execution, and disciplined thinking must work together to turn ideas into reality.
  </m.p>
</Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — BUILDING IN PUBLIC
      ══════════════════════════════════════════════════════ */}
      <section className="inn-public">
        <div className="inn-constrain">
          <Reveal className="center-align">
            <m.span className="inn-eyebrow" variants={fadeUp}>Building In Public</m.span>
            <m.h2 className="inn-section-headline" variants={fadeUp}>
              Great Ideas Grow When Shared.
            </m.h2>
          </Reveal>

          <Reveal className="inn-public-grid">
            <m.div className="inn-public-card" variants={fadeUp}>
              <div className="inn-public-img-wrap">
                <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer">
                  <img src={githubImg} alt="GitHub Profile" loading="lazy" />
                </a>
              </div>
              <h3 className="inn-public-title">GitHub as engineering history.</h3>
            </m.div>

            <m.div className="inn-public-card" variants={fadeUp}>
              <div className="inn-public-img-wrap">
                <a href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedInProfileImg} alt="LinkedIn Profile" loading="lazy" />
                </a>
              </div>
              <h3 className="inn-public-title">LinkedIn as professional growth.</h3>
            </m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — ALGORITHMIC THINKING
      ══════════════════════════════════════════════════════ */}
      <section className="inn-algorithms inn-alt">
        <div className="inn-constrain">
          <Reveal className="center-align">
            <m.span className="inn-eyebrow" variants={fadeUp}>Algorithmic Thinking</m.span>
            <m.h2 className="inn-section-headline" variants={fadeUp}>
              The Discipline Of Thinking.
            </m.h2>
          </Reveal>

          <m.div 
            className="inn-museum-frame inn-museum-frame--narrow"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-80px" }} 
            variants={imgReveal}
          >
            <a href="https://leetcode.com/u/bhagavan444/" target="_blank" rel="noopener noreferrer">
              <img src={leetcodeImg} alt="LeetCode Profile" loading="lazy" />
            </a>
          </m.div>

          <Reveal className="inn-constrain--reading">
  <m.p className="inn-body" variants={fadeUp}>
    More than a measure of consistency, it is a practice in thinking. Every challenge strengthens problem-solving ability, sharpens analytical reasoning, and reinforces the discipline required to build intelligent systems and meaningful products.
  </m.p>
</Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — LEARNING LABS
      ══════════════════════════════════════════════════════ */}
      <section className="inn-labs">
        <div className="inn-constrain">
          <Reveal className="center-align">
            <m.span className="inn-eyebrow" variants={fadeUp}>Learning Labs</m.span>
            <m.h2 className="inn-section-headline" variants={fadeUp}>
              Every Innovation Starts With Learning.
            </m.h2>
          </Reveal>

          <Reveal className="inn-lab-list">
            {LABS.map((lab, i) => (
              <m.div key={i} className="inn-lab-card" variants={fadeUp}>
                <div className="inn-lab-img">
                  <img src={lab.img} alt={lab.title} loading="lazy" />
                </div>
                <h3 className="inn-lab-title">{lab.title}</h3>
              </m.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — PROFESSIONAL FOUNDATION
      ══════════════════════════════════════════════════════ */}
      <section className="inn-foundation inn-dark">
        <div className="inn-constrain">
          <Reveal className="center-align">
            <m.span className="inn-eyebrow inn-eyebrow--dark" variants={fadeUp}>Professional Foundation</m.span>
            <m.h2 className="inn-section-headline inn-text-light" variants={fadeUp}>
             Where Learning Became Capability.
            </m.h2>
          </Reveal>

          <m.div 
            className="inn-museum-frame inn-museum-frame--dark"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-80px" }} 
            variants={imgReveal}
          >
            <img src={trainingCert} alt="Ramachandra Special Training Program" loading="lazy" />
          </m.div>

          <Reveal className="inn-foundation-list center-align">
            {FOUNDATION.map((item) => (
              <m.span key={item} className="inn-foundation-item" variants={fadeUp}>{item}</m.span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — WHAT THESE EXPERIENCES CREATED
      ══════════════════════════════════════════════════════ */}
      <section className="inn-experiences">
        <div className="inn-constrain">
          <Reveal>
            <m.h2 className="inn-section-headline" variants={fadeUp}>
             What Experience Made Possible.
            </m.h2>
          </Reveal>
          
          <Reveal className="inn-large-list">
            {EXPERIENCES.map((exp) => (
              <m.h3 key={exp} className="inn-large-item" variants={fadeUp}>
                {exp}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — ENGINEERING PRINCIPLES
      ══════════════════════════════════════════════════════ */}
      <section className="inn-principles inn-dark">
        <div className="inn-constrain">
          <Reveal>
            <m.span className="inn-eyebrow inn-eyebrow--dark" variants={fadeUp}>Engineering Principles</m.span>
            <m.h2 className="inn-section-headline inn-text-light" variants={fadeUp}>
             Built On First Principles.
            </m.h2>
          </Reveal>
          
          <Reveal className="inn-large-list">
            {PRINCIPLES.map((principle) => (
              <m.h3 key={principle} className="inn-large-item" variants={fadeUp}>
                {principle}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — CURRENT EXPLORATION
      ══════════════════════════════════════════════════════ */}
      <section className="inn-explore">
        <div className="inn-constrain">
          <Reveal>
            <m.span className="inn-eyebrow" variants={fadeUp}>Current Exploration</m.span>
            <m.h2 className="inn-section-headline" variants={fadeUp}>
              Currently Exploring.
            </m.h2>
          </Reveal>
          
          <Reveal className="inn-explore-grid">
            {EXPLORATION.map((topic) => (
              <m.div key={topic} className="inn-explore-item" variants={fadeUp}>
                {topic}
              </m.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 11 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="inn-closing inn-dark" aria-label="Closing statement">
        <div className="inn-constrain center-align">
          <Reveal>
            <m.h2 className="inn-closing-headline" variants={fadeUp}>
              Every Product Is A Prototype For The Next Idea.
            </m.h2>
            <m.p className="inn-closing-sub" variants={fadeUp}>
              Growth happens through experimentation. Innovation is not a destination. It is a continuous process of learning, building, and improving.
            </m.p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
