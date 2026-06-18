import React, { useEffect } from "react";
import { m } from "framer-motion";
import "../styles/Experience.css";

// ─── Certificate Artifacts ────────────────────────────────────────────────────
import studyOwlCert   from "../assets/cert-studyowl.png";
import blackbucksCert from "../assets/cert-blackbucks.png";
import smartBridgeCert from "../assets/cert-smartbridge.png";
import helsonCert     from "../assets/cert-helson.png";

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const certReveal = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
// Wraps children in a stagger container that animates on scroll.
function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={stagger}
    >
      {children}
    </m.div>
  );
}

// ─── Chapter ──────────────────────────────────────────────────────────────────
// Each internship is rendered as a self-contained editorial chapter.
// dark=true → inverted section (used for Helson).
function Chapter({ eyebrow, headline, company, role, duration, editorial, cert, certAlt, dark }) {
  const cls = ["exp-chapter", dark && "exp-chapter--dark"].filter(Boolean).join(" ");
  return (
    <section className={cls}>
      <div className="exp-constrain">

        {/* Section label + title + meta */}
        <Reveal>
          <m.span className="exp-eyebrow" variants={fadeUp}>{eyebrow}</m.span>
          <m.h2  className="exp-chapter-headline" variants={fadeUp}>{headline}</m.h2>
          <m.div className="exp-chapter-meta" variants={fadeUp}>
            <span>{company}</span>
            <span className="exp-meta-sep" aria-hidden="true">·</span>
            <span>{role}</span>
            <span className="exp-meta-sep" aria-hidden="true">·</span>
            <span>{duration}</span>
          </m.div>
        </Reveal>

        {/* Editorial paragraph */}
        <m.p
          className="exp-chapter-editorial"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          {editorial}
        </m.p>

        {/* Certificate — displayed as a clean photograph, no card styling */}
        <m.div
          className="exp-cert-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={certReveal}
        >
          <img
            src={cert}
            alt={certAlt}
            loading="lazy"
            className="exp-cert-img"
          />
        </m.div>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Experience() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="exp-page">

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="exp-hero" aria-label="Journey hero">
        <m.h1
          className="exp-hero-headline"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
         Experience Shapes Perspective.

        </m.h1>
        <m.p
          className="exp-hero-sub"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: EASE }}
        >
         Every internship, project, and engineering challenge became an opportunity to learn how intelligent systems are designed, how products are built, and how technology creates meaningful impact in the real world.

        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — INTRODUCTION
      ══════════════════════════════════════════════════════ */}
      <section className="exp-intro" aria-labelledby="intro-headline">
        <div className="exp-constrain exp-constrain--reading">
          <m.h2
            id="intro-headline"
            className="exp-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            The First Real Problems.
          </m.h2>
          <section className="exp-intro" aria-labelledby="intro-headline">
  <div className="exp-constrain exp-constrain--reading">
    <m.h2
      id="intro-headline"
      className="exp-section-headline"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      Building Through Challenges.
    </m.h2>

<Reveal>
  <m.p className="exp-body" variants={fadeUp}>
    The journey began with real problems. Systems that failed unexpectedly,
    integrations that refused to cooperate, and ideas that proved far more
    difficult to build than they appeared on paper. Every challenge exposed
    a new layer of complexity and revealed how modern software truly works.
  </m.p>

  <m.p className="exp-body" variants={fadeUp}>
    Through debugging, iteration, and continuous experimentation came a
    deeper understanding of engineering. Not just how to write code, but
    how to design reliable systems, solve ambiguous problems, and transform
    complexity into clarity.
  </m.p>

  <m.p className="exp-body" variants={fadeUp}>
    That foundation was strengthened through internships in software
    development, artificial intelligence, machine learning, and enterprise
    technology. Different environments. Different challenges. One shared
    objective: build meaningful solutions and learn through execution.
  </m.p>
</Reveal>

  </div>
</section>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — BLACKBUCKS
      ══════════════════════════════════════════════════════ */}
     <Chapter
eyebrow="Machine Learning Internship"
headline="Learning From Data."
company="Blackbucks"
role="Machine Learning Intern"
duration="2023"
editorial="At Blackbucks, the focus extended beyond building models. The real challenge was understanding data itself—how information is collected, prepared, analyzed, and transformed into meaningful insights. Working with machine learning workflows revealed that successful AI systems depend not only on algorithms, but on the quality of the data, the rigor of the process, and the ability to extract signal from complexity. This experience established the analytical foundation that would later influence every intelligent system and product built thereafter."
cert={blackbucksCert}
certAlt="Blackbucks Machine Learning Internship Certificate"
/>


      {/* ══════════════════════════════════════════════════════
          SECTION 4 — STUDYOWL
      ══════════════════════════════════════════════════════ */}
      <Chapter
eyebrow="Software Development Internship"
headline="Building Products."
company="StudyOwl"
role="Software Development Intern"
duration="2024"
editorial="At StudyOwl, software engineering became more than writing code. The experience introduced the full lifecycle of building digital products—from designing application logic and integrating databases to creating seamless interactions between users and systems. Working across both frontend and backend technologies revealed how architecture, usability, and reliability must work together to create meaningful experiences. It was the moment technical knowledge evolved into product thinking, shaping the approach behind every platform built since."
cert={studyOwlCert}
certAlt="StudyOwl Software Development Internship Certificate"
/>


      {/* ══════════════════════════════════════════════════════
          SECTION 5 — SMARTBRIDGE
      ══════════════════════════════════════════════════════ */}
      <Chapter
eyebrow="Software Engineering Internship"
headline="Applying Intelligence."
company="SmartBridge"
role="Software Engineering Intern"
duration="2024"
editorial="At SmartBridge, the focus shifted from building systems to creating solutions. Working with artificial intelligence, automation workflows, and software applications revealed that technology creates value only when it solves real problems for real people. The experience combined engineering, AI, and product thinking—demonstrating how intelligent systems can be integrated into practical workflows that improve efficiency, decision-making, and user experience. It was here that the connection between intelligence and impact became clear."
cert={smartBridgeCert}
certAlt="SmartBridge Software Engineering Internship Certificate"
/>


      {/* ══════════════════════════════════════════════════════
          SECTION 6 — HELSON (dark environment)
      ══════════════════════════════════════════════════════ */}
      <Chapter
dark
eyebrow="Enterprise Automation"
headline="Designing Intelligent Workflows."
company="Helson"
role="Enterprise Automation Intern"
duration="2024"
editorial="At Helson, the focus shifted toward process automation and operational efficiency. Working with enterprise workflows revealed how technology can eliminate repetitive tasks, streamline decision-making, and improve the way organizations operate at scale. The experience emphasized system thinking—understanding how individual processes connect, how information flows across an organization, and how automation can transform complexity into reliability. It reinforced the idea that great systems are not defined by the technology behind them, but by the outcomes they create."
cert={helsonCert}
certAlt="Helson Enterprise Automation Internship Certificate"
/>


      {/* ══════════════════════════════════════════════════════
          SECTION 7 — CAPABILITIES
      ══════════════════════════════════════════════════════ */}
      <section className="exp-capabilities" aria-labelledby="cap-headline">
        <div className="exp-constrain">
          <m.h2
            id="cap-headline"
            className="exp-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
           Expertise Earned Through Building.
          </m.h2>
          <Reveal className="exp-cap-list">
  {[
    "AI Systems",
    "Product Engineering",
    "Platform Development",
    "Career Intelligence",
    "Data Intelligence",
    "System Architecture",
    "Human-Centered Design",
  ].map((cap) => (
    <m.p key={cap} className="exp-cap-item" variants={fadeUp}>
      {cap}
    </m.p>
  ))}
</Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — VERIFIED EXPERIENCE (gallery)
      ══════════════════════════════════════════════════════ */}
      <section className="exp-gallery-section" aria-labelledby="gallery-headline">
        <div className="exp-constrain exp-constrain--wide">
          <m.h2
            id="gallery-headline"
            className="exp-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Verified Experience.
          </m.h2>
          <div className="exp-gallery">
            {[
              { img: blackbucksCert,  company: "Blackbucks",  role: "Machine Learning",    year: "2023" },
              { img: studyOwlCert,    company: "StudyOwl",    role: "Software Development", year: "2024" },
              { img: smartBridgeCert, company: "SmartBridge", role: "Software Engineering", year: "2024" },
              { img: helsonCert,      company: "Helson",      role: "Enterprise Automation", year: "2024" },
            ].map(({ img, company, role, year }, i) => (
              <m.div
                key={i}
                className="exp-gallery-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={certReveal}
              >
                <div className="exp-gallery-img-wrap">
                  <img src={img} alt={`${company} internship certificate`} loading="lazy" />
                </div>
                <div className="exp-gallery-label">
                  <span className="exp-gallery-company">{company}</span>
                  <span className="exp-gallery-role">{role}</span>
                  <span className="exp-gallery-year">{year}</span>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — ENGINEERING PHILOSOPHY
      ══════════════════════════════════════════════════════ */}
      <section className="exp-philosophy" aria-labelledby="philosophy-headline">
        <div className="exp-constrain">
          <m.h2
            id="philosophy-headline"
            className="exp-philosophy-eyebrow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Technology Should Create Opportunity.
          </m.h2>
          <Reveal className="exp-principles">
            {[
              "Build for people.",
              "Solve meaningful problems.",
              "Think in systems.",
              "Learn continuously.",
              "Ship real products.",
            ].map((p) => (
              <m.p key={p} className="exp-principle" variants={fadeUp}>
                {p}
              </m.p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="exp-closing" aria-label="Closing statement">
        <div className="exp-constrain exp-closing-inner">
          <m.h1
            className="exp-closing-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Still Day One.
          </m.h1>
          <m.p
            className="exp-closing-sub"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            The objective was never experience itself.
            <br />
            The objective was learning how to build systems
            that create opportunity at scale.
          </m.p>
        </div>
      </section>

    </div>
  );
}
