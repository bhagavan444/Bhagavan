import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import '../styles/Credentials.css';

// Import All 26 Certificate Assets
import gfgFsCert from '../assets/cert-gfg-fs.png';
import gfgJavaCert from '../assets/cert-gfg-java.png';
import gfgPythonCert from '../assets/cert-gfg-python.png';
import geminiStudentCert from '../assets/cert-gemini-student.png';
import geminiFacultyCert from '../assets/cert-gemini-faculty.png';
import geminiStudentUniCert from '../assets/cert-gemini-student-uni.png';
import infosysAzureCert from '../assets/cert-infosys-azure.png';
import infosysDsCert from '../assets/cert-infosys-ds.png';
import ibmAiCert from '../assets/cert-ibm-ai.png';
import gcpGenAiCert from '../assets/cert-gcp-genai.png';
import gcpIntroGenAiCert from '../assets/cert-gcp-intro-genai.png';
import infosysMlopsCert from '../assets/cert-infosys-mlops.png';
import infosysServiceNowCert from '../assets/cert-infosys-servicenow.png';
import infosysJsCert from '../assets/cert-infosys-js.png';
import infosysJavaCert from '../assets/cert-infosys-java.png';
import infosysDjangoCert from '../assets/cert-infosys-django.png';
import infosysMasterPythonCert from '../assets/cert-infosys-master-python.png';
import infosysDevopsCert from '../assets/cert-infosys-devops.png';
import ibmLlmCert from '../assets/cert-ibm-llm.png';
import ibmPromptingCert from '../assets/cert-ibm-prompting.png';
import infosysPythonDsCert from '../assets/cert-infosys-python-ds.png';
import infosysMlPythonCert from '../assets/cert-infosys-ml-python.png';
import infosysIntroDsCert from '../assets/cert-infosys-intro-ds.png';
import ucscCCert from '../assets/cert-ucsc-c-everyone.png';
import infosysAgileCert from '../assets/cert-infosys-agile.png';
import awsCloudCert from '../assets/cert-aws-cloud.png';

// Import Special Training Program
import trainingCert from '../assets/training.png';

const ALL_CERTS = [
  gfgFsCert, gfgJavaCert, gfgPythonCert, geminiStudentCert, geminiFacultyCert,
  geminiStudentUniCert, infosysAzureCert, infosysDsCert, ibmAiCert, gcpGenAiCert,
  gcpIntroGenAiCert, infosysMlopsCert, infosysServiceNowCert, infosysJsCert,
  infosysJavaCert, infosysDjangoCert, infosysMasterPythonCert, infosysDevopsCert,
  ibmLlmCert, ibmPromptingCert, infosysPythonDsCert, infosysMlPythonCert,
  infosysIntroDsCert, ucscCCert, infosysAgileCert, awsCloudCert
];

// Premium Animation Variants
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

export default function Credentials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="credentials-container">

      {/* 1. HERO SECTION */}
      <section className="cred-section cred-hero full-width">
        <m.div className="cred-content-constrain center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
          <m.h1 className="cred-headline-massive" variants={premiumFadeUp}>
            Mastery.
          </m.h1>
          <m.h1 className="cred-headline-massive" variants={premiumFadeUp} style={{ color: '#86868b' }}>
            Built Continuously.
          </m.h1>
          <m.p className="cred-subheadline" variants={premiumFadeUp} style={{ marginTop: '40px', maxWidth: '900px' }}>
            Every certification represents a skill acquired, a capability developed, and a step toward building intelligent systems.
          </m.p>
        </m.div>
      </section>

      {/* 2. FLAGSHIP SECTION - RAMACHANDRA SPECIAL TRAINING */}
      <section className="cred-section full-width origin-story-section">
        <div className="cred-content-constrain">
          <m.div className="origin-eyebrow center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>Professional Foundation</m.div>
          <m.h2 className="cred-headline-large center-align origin-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Where Learning Became Capability.
          </m.h2>

          <m.div className="two-column-presentation" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            
            {/* Left: Floating Glass Frame */}
            <m.div className="presentation-left" variants={artifactReveal}>
              <div className="certificate-glass-frame subtle-glow">
                <img loading="lazy" src={trainingCert} alt="Ramachandra Special Training Program" className="parallax-image premium-border" />
              </div>
            </m.div>

            {/* Right: Capability Blocks & Narrative */}
            <m.div className="presentation-right" variants={premiumFadeUpStagger}>
              
              <m.div className="achievement-badge right-badge" variants={premiumFadeUp}>
                <span className="badge-text">Featured Credential</span>
              </m.div>

              <m.p className="cred-body-text origin-body" variants={premiumFadeUp}>
                The Special Training Program conducted by Ramachandra College of Engineering marked a pivotal step in transforming academic knowledge into professional readiness. Through structured training in Python Programming, Data Structures & Algorithms, Coding Practice, Aptitude Development, Resume Engineering, and Mock Interviews, this program established the foundation for solving real-world engineering challenges and building intelligent systems.
              </m.p>
              
              <m.div className="capability-blocks-grid" variants={premiumFadeUpStagger}>
                <m.div className="capability-block" variants={premiumFadeUp}>Python Programming</m.div>
                <m.div className="capability-block" variants={premiumFadeUp}>Data Structures & Algorithms</m.div>
                <m.div className="capability-block" variants={premiumFadeUp}>Coding Practice</m.div>
                <m.div className="capability-block" variants={premiumFadeUp}>Aptitude Development</m.div>
                <m.div className="capability-block" variants={premiumFadeUp}>Resume Engineering</m.div>
                <m.div className="capability-block" variants={premiumFadeUp}>Mock Interviews</m.div>
              </m.div>

              <m.div className="metrics-row" variants={premiumFadeUpStagger}>
                <m.div className="metric-item" variants={premiumFadeUp}>₹26,000 Training Investment</m.div>
                <m.div className="metric-item" variants={premiumFadeUp}>6 Core Professional Skills</m.div>
                <m.div className="metric-item" variants={premiumFadeUp}>Awarded June 2025</m.div>
                <m.div className="metric-item" variants={premiumFadeUp}>Professional Placement Training</m.div>
              </m.div>

            </m.div>
          </m.div>

          <m.div className="origin-quote-container center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            <blockquote className="origin-quote">
              Great systems are built on strong foundations.<br/>Great careers are built the same way.
            </blockquote>
          </m.div>
        </div>
      </section>

      {/* 3. ACADEMIC FOUNDATION */}
      <section className="cred-section cred-alt-bg full-width">
        <div className="cred-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="cred-headline-large" variants={premiumFadeUp}>Artificial Intelligence<br/>& Data Science.</m.h2>
          </m.div>

          <m.div className="premium-museum-frame" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={artifactReveal}>
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>B.Tech in AI & Data Science</h3>
              <p style={{ fontSize: '1.4rem', color: '#86868b', fontWeight: 500 }}>Ramachandra College of Engineering</p>
              <div style={{ marginTop: '40px', width: '60px', height: '4px', background: '#1d1d1f', margin: '40px auto 0' }}></div>
              <p style={{ fontSize: '1.2rem', color: '#1d1d1f', marginTop: '32px', maxWidth: '600px', margin: '32px auto 0' }}>
                The academic bedrock. A comprehensive engineering foundation focusing on artificial intelligence architectures, data structures, and advanced machine learning algorithms.
              </p>
            </div>
            <div className="artifact-caption">Flagship Credential — The Academic Foundation</div>
          </m.div>
        </div>
      </section>

      {/* 4. THE AI JOURNEY */}
      <section className="cred-section full-width">
        <div className="cred-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="cred-headline-large" variants={premiumFadeUp}>Learning Intelligence.</m.h2>
            <m.p className="cred-body-text" variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
              Understanding generative models, prompt engineering, and the architecture behind modern AI systems through deep-dives into Google and IBM's ecosystems.
            </m.p>
          </m.div>

          <m.div className="floating-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={premiumFadeUpStagger}>
            {[geminiStudentCert, ibmAiCert, ibmLlmCert, gcpGenAiCert].map((cert, i) => (
              <m.div key={i} className="floating-artifact" variants={artifactReveal}>
                <img loading="lazy" src={cert} alt="AI Journey Certification" />
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* 5. CLOUD & INFRASTRUCTURE */}
      <section className="cred-section cred-alt-bg full-width">
        <div className="cred-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="cred-headline-large" variants={premiumFadeUp}>Building At Scale.</m.h2>
            <m.p className="cred-body-text" variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
              Intelligence must be deployed to be useful. Mastering cloud architectures and MLOps ensures that models transcend local environments and scale globally.
            </m.p>
          </m.div>

          <m.div className="floating-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={premiumFadeUpStagger}>
            {[awsCloudCert, infosysAzureCert, infosysMlopsCert].map((cert, i) => (
              <m.div key={i} className="floating-artifact" variants={artifactReveal}>
                <img loading="lazy" src={cert} alt="Cloud Infrastructure Certification" />
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* 6. SOFTWARE ENGINEERING */}
      <section className="cred-section full-width">
        <div className="cred-content-constrain">
          <m.div className="center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.h2 className="cred-headline-large" variants={premiumFadeUp}>Engineering Foundations.</m.h2>
            <m.p className="cred-body-text" variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
              The grammar of building. Fluency in Python, Java, JavaScript, and backend frameworks allows ideas to be translated into robust, secure ecosystems.
            </m.p>
          </m.div>

          <m.div className="floating-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={premiumFadeUpStagger}>
            {[gfgPythonCert, infosysJavaCert, infosysDjangoCert, gfgFsCert].map((cert, i) => (
              <m.div key={i} className="floating-artifact" variants={artifactReveal}>
                <img loading="lazy" src={cert} alt="Engineering Foundation Certification" />
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* 7. CAPABILITY ARCHITECTURE */}
      <section className="cred-section cred-alt-bg">
        <div className="cred-content-constrain center-align">
          <m.h2 className="cred-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            What These Credentials Created.
          </m.h2>

          <m.div className="capabilities-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
            <m.div className="capability-item" variants={premiumFadeUp}>Artificial Intelligence</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Machine Learning</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Cloud Computing</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Full Stack Engineering</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Backend Systems</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Software Architecture</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Problem Solving</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Interview Readiness</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Technical Communication</m.div>
            <m.div className="capability-item" variants={premiumFadeUp}>Career Preparation</m.div>
          </m.div>
        </div>
      </section>

      {/* 8. LEARNING TIMELINE */}
      <section className="cred-section full-width">
        <div className="cred-content-constrain">
          <m.h2 className="cred-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Years Of Continuous Learning.
          </m.h2>

          <div className="learning-timeline">
            <m.div className="timeline-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.div className="timeline-year" variants={premiumFadeUp}>2022</m.div>
              <m.div className="timeline-certs" variants={premiumFadeUpStagger}>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={ucscCCert} alt="2022 Cert" /></m.div>
              </m.div>
            </m.div>

            <m.div className="timeline-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.div className="timeline-year" variants={premiumFadeUp}>2024</m.div>
              <m.div className="timeline-certs" variants={premiumFadeUpStagger}>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={awsCloudCert} alt="2024 Cert" /></m.div>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={infosysAgileCert} alt="2024 Cert" /></m.div>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={infosysDevopsCert} alt="2024 Cert" /></m.div>
              </m.div>
            </m.div>

            <m.div className="timeline-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.div className="timeline-year" variants={premiumFadeUp}>2025</m.div>
              <m.div className="timeline-certs" variants={premiumFadeUpStagger}>
                
                {/* 2025 FLAGSHIP TIMELINE ENTRY */}
                <m.div className="timeline-cert featured-timeline-cert" variants={artifactReveal}>
                  <img loading="lazy" src={trainingCert} alt="Special Training Program 2025" />
                  <div className="timeline-cert-info">
                    <h4>Special Training Program</h4>
                    <p className="institution">Ramachandra College of Engineering</p>
                    <p className="desc">Python Programming, DSA, Coding Practice, Aptitude Training, Resume Building, and Mock Interview Preparation.</p>
                  </div>
                </m.div>

                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={ibmAiCert} alt="2025 Cert" /></m.div>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={infosysMlopsCert} alt="2025 Cert" /></m.div>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={infosysAzureCert} alt="2025 Cert" /></m.div>
              </m.div>
            </m.div>

            <m.div className="timeline-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUpStagger}>
              <m.div className="timeline-year" variants={premiumFadeUp}>2026</m.div>
              <m.div className="timeline-certs" variants={premiumFadeUpStagger}>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={geminiStudentCert} alt="2026 Cert" /></m.div>
                <m.div className="timeline-cert" variants={artifactReveal}><img loading="lazy" src={geminiFacultyCert} alt="2026 Cert" /></m.div>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      {/* 9. VERIFIED EXPERTISE WALL (All Certs Masonry) */}
      <section className="cred-section cred-alt-bg full-width">
        <div className="cred-content-constrain center-align">
          <m.h2 className="cred-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Proof Of Commitment.
          </m.h2>
          <m.p className="cred-body-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
            A museum-quality collection of verified expertise. Every certificate image retained as irrefutable proof of capability growth.
          </m.p>
        </div>

        <div className="museum-wall-container">
          
          {/* PINNED FEATURED CREDENTIAL */}
          <m.div 
            className="masonry-brick featured-brick" 
            variants={artifactReveal}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "200px" }}
          >
            <div className="featured-label">Featured Credential</div>
            <img src={trainingCert} alt="Ramachandra Special Training Program" loading="lazy" />
          </m.div>

          {ALL_CERTS.map((cert, index) => (
            <m.div 
              key={index} 
              className="masonry-brick" 
              variants={artifactReveal}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "200px" }}
            >
              <img src={cert} alt={`Verified Credential ${index + 1}`} loading="lazy" />
            </m.div>
          ))}
        </div>
      </section>

      {/* 10. BEYOND CERTIFICATIONS */}
      <section className="cred-section">
        <div className="cred-content-constrain center-align">
          <m.h2 className="cred-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Credentials Are Only The Beginning.
          </m.h2>
          <m.p className="cred-body-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ maxWidth: '800px', margin: '32px auto 0' }}>
            Learning matters. But building matters more. Impact matters most. These credentials were not acquired to decorate a portfolio; they were acquired to build robust, scalable, intelligent systems.
          </m.p>
        </div>
      </section>

      {/* 11. FINAL STATEMENT */}
      <section className="cred-section final-statement-section cred-dark-environment full-width">
        <div className="cred-content-constrain center-align">
          <m.h1 className="cred-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp}>
            Always Learning.
          </m.h1>
          <m.p className="cred-subheadline dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumFadeUp} style={{ marginTop: '40px', maxWidth: '800px' }}>
            The most valuable credential is the ability to continuously learn, adapt, and build.
          </m.p>
        </div>
      </section>

    </div>
  );
}
