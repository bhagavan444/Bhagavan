import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Vision.css';

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
const ENGINEERING_PRINCIPLES = [
  "Technology should feel human.",
  "Complexity should feel simple.",
  "Intelligence should be useful.",
  "Products should create impact.",
  "Potential should have no limits."
];

const THE_ROAD_AHEAD = [
  "Learn",
  "Build",
  "Improve",
  "Innovate",
  "Lead",
  "Create Impact"
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Vision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vision-page">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="vis-hero" aria-label="Vision Hero">
  <m.h1
    className="vis-hero-headline"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1, ease: EASE }}
  >
    Engineering Human Potential.
  </m.h1>

  <m.p
    className="vis-hero-sub"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
  >
    Building intelligent systems that help people understand themselves,
    navigate complexity, and realize more of what they are capable of
    becoming.
  </m.p>
</section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — THE OBSERVATION
      ══════════════════════════════════════════════════════ */}
      <section className="vis-observation">
  <div className="vis-constrain">
    <Reveal className="vis-editorial-stack">
      <m.h2 className="vis-editorial-large" variants={fadeUp}>
        We have more information than ever before.
      </m.h2>

      <m.h2
        className="vis-editorial-large vis-text-muted"
        variants={fadeUp}
      >
        Understanding remains the real challenge.
      </m.h2>
    </Reveal>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — THE OPPORTUNITY
      ══════════════════════════════════════════════════════ */}
      <section className="vis-opportunity">
        <div className="vis-constrain vis-constrain--reading">
          <Reveal>
            <m.span className="vis-eyebrow" variants={fadeUp}>The Opportunity</m.span>
            <m.h2 className="vis-section-headline" variants={fadeUp}>
              Intelligence as Guidance.
            </m.h2>
            <m.p className="vis-body" variants={fadeUp}>
              Artificial intelligence represents more than a technological shift. It creates the possibility of software that can understand context, recognize patterns, and transform information into meaningful insight. The focus moves beyond storing knowledge toward helping people make better use of it.
            </m.p>
            <m.p className="vis-body" variants={fadeUp}>
             Applied thoughtfully, intelligence can help people learn faster, navigate complexity, identify opportunities, and make more informed decisions. Not by replacing human judgment, but by providing the clarity, context, and guidance needed to exercise it with greater confidence.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — WHY I BUILD
      ══════════════════════════════════════════════════════ */}
      <section className="vis-why">
        <div className="vis-constrain vis-constrain--reading">
          <Reveal>
            <m.span className="vis-eyebrow" variants={fadeUp}>The Journey</m.span>
            <Reveal>
  <m.span className="vis-eyebrow" variants={fadeUp}>
  
  </m.span>

<m.h2 className="vis-section-headline" variants={fadeUp}>
Why I Build.
</m.h2>

<m.p className="vis-body" variants={fadeUp}>
Every project began with a simple observation: people often face important
decisions without the clarity they need to move forward confidently.
Whether the challenge involves learning, careers, or personal growth, the
gap is rarely information—it is understanding.
</m.p>

<m.p className="vis-body" variants={fadeUp}>
Building software became a way to bridge that gap. Through artificial
intelligence, intelligent systems, and product engineering, the goal has
remained consistent: transform complexity into clarity and create tools
that help people learn, make better decisions, and unlock new
opportunities. CareerOS emerged from this vision, but the mission extends
far beyond any single product.
</m.p> </Reveal>

          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CAREEROS
      ══════════════════════════════════════════════════════ */}
      <section className="vis-careeros">
        <div className="vis-constrain center-align">
          <Reveal>
            <m.h2 className="vis-careeros-headline" variants={fadeUp}>
CareerOS.
</m.h2>

<m.p className="vis-careeros-sub" variants={fadeUp}>
An Intelligence Platform For Human Growth.
</m.p> </Reveal>

</div>

<div className="vis-constrain vis-constrain--reading">
  <Reveal>
    <m.p className="vis-body" variants={fadeUp}>
      CareerOS began with a simple question: what if technology could do more
      than store information? What if it could help people better understand
      their strengths, opportunities, and future possibilities?
    </m.p>
<m.p className="vis-body" variants={fadeUp}>
  Built at the intersection of artificial intelligence, software
  engineering, and career development, CareerOS is an ongoing effort to
  transform complex career data into meaningful insight. It represents a
  vision for technology that helps people learn, grow, make better
  decisions, and unlock their full potential.
</m.p>


  </Reveal>
</div>

          
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — ENGINEERING PRINCIPLES
      ══════════════════════════════════════════════════════ */}
      <section className="vis-principles vis-dark">
        <div className="vis-constrain">
          <Reveal>
            <m.span className="vis-eyebrow vis-eyebrow--dark" variants={fadeUp}>Engineering Principles</m.span>
          </Reveal>
          <Reveal className="vis-principle-list">
            {ENGINEERING_PRINCIPLES.map((principle, index) => (
              <m.h3 key={index} className="vis-principle-item" variants={fadeUp}>
                {principle}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — THE ROAD AHEAD
      ══════════════════════════════════════════════════════ */}
      <section className="vis-road">
        <div className="vis-constrain center-align">
          <Reveal>
            <m.span className="vis-eyebrow" variants={fadeUp}>The Road Ahead</m.span>
          </Reveal>
          
          <Reveal className="vis-road-sequence">
            {THE_ROAD_AHEAD.map((step, index) => (
              <React.Fragment key={step}>
                <m.div className="vis-road-step" variants={fadeUp}>
                  {step}
                </m.div>
                {index < THE_ROAD_AHEAD.length - 1 && (
                  <m.div className="vis-road-arrow" variants={fadeUp}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — CLOSING STATEMENT
      ══════════════════════════════════════════════════════ */}
      <section className="vis-closing vis-dark">
        <div className="vis-constrain center-align">
          <Reveal>
            <m.h2 className="vis-closing-headline" variants={fadeUp}>
              The Future Is Human-Centered Intelligence.
            </m.h2>
            <m.p className="vis-closing-sub" variants={fadeUp}>
              The most important technology of the next decade will not be the most powerful. It will be the technology that helps people become more capable versions of themselves.
            </m.p>
            <m.div variants={fadeUp} style={{ marginTop: '80px' }}>
              <Link to="/connect" className="vis-cta-link">
                Connect <span>↗</span>
              </Link>
            </m.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
