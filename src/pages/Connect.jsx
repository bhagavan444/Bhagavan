import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Connect.css';

// =========================================================================
// PRESERVED EMAILJS BACKEND LOGIC
// =========================================================================
const EMAILJS_SERVICE_ID = "service_8pg8cek";
const EMAILJS_NOTIFICATION_TEMPLATE_ID = "template_8v4b864";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_bdwrdmc";
const EMAILJS_PUBLIC_KEY = "GOTwySQukEpQEuRa5";

// Premium Animation Variants
const cinematicFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const cinematicFadeUpStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 } }
};

const nodeReveal = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not Provided',
      subject: formData.subject,
      message: formData.message,
      portfolio_link: window.location.origin,
      linkedin_link: "https://www.linkedin.com/in/gsssbhagavan/",
      github_link: "https://github.com/bhagavan444"
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NOTIFICATION_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleScrollToForm = () => {
    const formSection = document.getElementById('conversation-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="connect-container">

      {/* NOTIFICATION OVERLAYS (Preserved) */}
      <AnimatePresence>
        {status === 'success' && (
          <m.div 
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
            className="toast-notification success-toast"
          >
            <div className="toast-title">Message Sent Successfully.</div>
            <div className="toast-desc">Thank you for reaching out.<br/>I will respond as soon as possible.</div>
          </m.div>
        )}
        {status === 'error' && (
          <m.div 
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
            className="toast-notification error-toast"
          >
            <div className="toast-title">Something went wrong.</div>
            <div className="toast-desc">Please verify your connection or try again later.</div>
          </m.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="con-section con-hero full-width">
        <div className="atmospheric-hero-bg">
          <div className="particle-layer layer-1"></div>
          <div className="particle-layer layer-2"></div>
        </div>
        <m.div className="con-content-constrain center-align relative-z" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
          <m.h1 className="con-headline-massive" variants={cinematicFadeUp}>
            Let's Build The
          </m.h1>
          <m.h1 className="con-headline-massive" variants={cinematicFadeUp} style={{ color: '#86868b' }}>
            Future Together.
          </m.h1>
          <m.p className="con-subheadline" variants={cinematicFadeUp} style={{ marginTop: '40px', maxWidth: '900px' }}>
            The most meaningful products begin with a conversation.
          </m.p>
        </m.div>
      </section>

      {/* 2. WHO THIS IS FOR */}
      <section className="con-section full-width">
        <div className="con-content-constrain center-align">
          <m.h2 className="con-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginBottom: '60px' }}>
            For Builders.
          </m.h2>

          <m.div className="role-reveal-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="role-item" variants={cinematicFadeUp}>Recruiters</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Founders</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Engineers</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Researchers</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Students</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Innovators</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Creators</m.div>
            <m.div className="role-item" variants={cinematicFadeUp} style={{ color: '#1d1d1f' }}>Dreamers</m.div>
          </m.div>
        </div>
      </section>

      {/* 3. WHY CONNECT */}
      <section className="con-section con-alt-bg full-width">
        <div className="con-content-constrain center-align">
          <m.h2 className="con-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Every Great System<br/>Started As An Idea.
          </m.h2>
          
          <m.div className="editorial-story" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger} style={{ marginTop: '60px' }}>
            <m.p className="story-text" variants={cinematicFadeUp}>Before CareerOS was a platform, it was a question.</m.p>
            <m.p className="story-text" variants={cinematicFadeUp}>Before a product exists, a conversation happens.</m.p>
            <m.p className="story-text highlight" variants={cinematicFadeUp}>Before intelligence scales, collaboration begins.</m.p>
          </m.div>
        </div>
      </section>

      {/* 4. WHAT WE CAN BUILD (Ecosystem) */}
      <section className="con-section full-width">
        <div className="con-content-constrain center-align">
          <m.h2 className="con-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Possibilities.
          </m.h2>

          <m.div className="possibility-ecosystem" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="poss-node" variants={nodeReveal}>AI Products</m.div>
            <m.div className="poss-node" variants={nodeReveal}>Career Intelligence</m.div>
            <m.div className="poss-node" variants={nodeReveal}>Recruiter Systems</m.div>
            <m.div className="poss-node" variants={nodeReveal}>Developer Platforms</m.div>
            <m.div className="poss-node" variants={nodeReveal}>Intelligent Automation</m.div>
            <m.div className="poss-node" variants={nodeReveal}>Future Technologies</m.div>
          </m.div>
        </div>
      </section>

      {/* 5. THE NETWORK (Floating Glass Hub) */}
      <section className="con-section con-alt-bg full-width">
        <div className="con-content-constrain center-align">
          <m.h2 className="con-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Where Conversations Continue.
          </m.h2>

          <m.div className="glass-network-hub" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.a href="mailto:g.sivasatysaibhagavan@gmail.com" className="glass-node" variants={nodeReveal}>
              <span className="node-label">Email</span>
              <span className="node-arrow">↗</span>
            </m.a>
            <m.a href="https://www.linkedin.com/in/gsssbhagavan/" target="_blank" rel="noopener noreferrer" className="glass-node" variants={nodeReveal}>
              <span className="node-label">LinkedIn</span>
              <span className="node-arrow">↗</span>
            </m.a>
            <m.a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" className="glass-node" variants={nodeReveal}>
              <span className="node-label">GitHub</span>
              <span className="node-arrow">↗</span>
            </m.a>
            <m.a href="/Bhagavan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="glass-node" variants={nodeReveal}>
              <span className="node-label">Portfolio</span>
              <span className="node-arrow">↗</span>
            </m.a>
            <m.div className="glass-node static" variants={nodeReveal}>
              <span className="node-label">Location</span>
              <span className="node-value">AP, India</span>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* 6. START THE CONVERSATION (Centerpiece Form) */}
      <section id="conversation-form-section" className="con-section full-width" style={{ padding: '250px 0' }}>
        <div className="con-content-constrain center-align">
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.h2 className="con-headline-massive" variants={cinematicFadeUp} style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}>
              Start A Conversation.
            </m.h2>
            <m.p className="con-subheadline" variants={cinematicFadeUp} style={{ marginTop: '24px', marginBottom: '80px', color: '#1d1d1f' }}>
              Tell me what you're building. Tell me what you're exploring. Tell me what problem you're trying to solve.
            </m.p>
          </m.div>

          <m.div className="glass-form-panel" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            <form onSubmit={handleSubmit} className="premium-apple-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="apple-label">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="apple-input" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label className="apple-label">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="apple-input" placeholder="hello@example.com" />
                </div>
              </div>

              <div className="form-group full">
                <label className="apple-label">Organization (Optional)</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="apple-input" placeholder="Where do you work?" />
              </div>

              <div className="form-group full">
                <label className="apple-label">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="apple-input" placeholder="What is this regarding?" />
              </div>

              <div className="form-group full">
                <label className="apple-label">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className="apple-input textarea" placeholder="Share your thoughts..." />
              </div>

              <div className="form-action">
                <button type="submit" disabled={status === 'loading'} className="apple-submit-btn">
                  {status === 'loading' ? 'Sending...' : 'Begin Conversation'}
                </button>
              </div>
            </form>
          </m.div>
        </div>
      </section>

      {/* 7. CURRENTLY EXPLORING */}
      <section className="con-section con-alt-bg full-width">
        <div className="con-content-constrain center-align">
          <m.h2 className="con-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Currently Exploring.
          </m.h2>

          <m.div className="role-reveal-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.div className="role-item" variants={cinematicFadeUp}>Software Engineering</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>AI Engineering</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Career Intelligence</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Startup Collaboration</m.div>
            <m.div className="role-item" variants={cinematicFadeUp}>Research Projects</m.div>
            <m.div className="role-item" variants={cinematicFadeUp} style={{ color: '#1d1d1f' }}>Future Technologies</m.div>
          </m.div>
        </div>
      </section>

      {/* 8. THE MISSION */}
      <section className="con-section full-width manifesto-section">
        <div className="con-content-constrain">
          <m.h2 className="con-headline-large center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginBottom: '100px' }}>
            Technology Should<br/>Create Opportunity.
          </m.h2>
          
          <m.div className="manifesto-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger}>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Technology should empower people.</m.h2>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Opportunity should be accessible.</m.h2>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Intelligence should guide growth.</m.h2>
            <m.h2 className="manifesto-statement" variants={cinematicFadeUp}>Products should create impact.</m.h2>
          </m.div>
        </div>
      </section>

      {/* 9. CAREEROS CONNECTION */}
      <section className="con-section con-alt-bg full-width">
        <div className="con-content-constrain center-align">
          <m.h2 className="con-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            Every Conversation<br/>Connects Back To One Goal.
          </m.h2>
          <m.p className="con-subheadline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginTop: '20px', maxWidth: '800px' }}>
            Building systems that help people discover opportunity.
          </m.p>

          <m.div className="pathway-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUpStagger} style={{ marginTop: '80px' }}>
            <m.div className="path-node" variants={nodeReveal}>Conversation</m.div>
            <m.div className="path-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="path-node" variants={nodeReveal}>Collaboration</m.div>
            <m.div className="path-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="path-node" variants={nodeReveal}>Ideas</m.div>
            <m.div className="path-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="path-node" variants={nodeReveal}>Products</m.div>
            <m.div className="path-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="path-node highlight" variants={nodeReveal}>CareerOS</m.div>
            <m.div className="path-arrow" variants={cinematicFadeUp}>↓</m.div>
            <m.div className="path-node ultimate" variants={nodeReveal}>Human Potential</m.div>
          </m.div>
        </div>
      </section>

      {/* 10. FINAL INVITATION (Dark Cinematic) */}
      <section className="con-section con-dark-environment full-width" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div className="con-content-constrain center-align">
          <m.h1 className="con-headline-massive dark-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp}>
            The Future Is<br/>Built Together.
          </m.h1>
          <m.p className="con-subheadline dark-text-sec" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cinematicFadeUp} style={{ marginTop: '40px', maxWidth: '900px' }}>
            The next great idea may begin with a single message.
          </m.p>
          
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cinematicFadeUpStagger} style={{ marginTop: '100px' }}>
            <button onClick={handleScrollToForm} className="ultimate-cta-button">
              <span className="btn-text-main">Let's Talk</span>
              <span className="btn-text-hover">Let's Build What's Next</span>
            </button>
          </m.div>
        </div>
      </section>

    </div>
  );
}
