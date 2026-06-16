"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/bhagavanresume.pdf";
import {
  Download, Github, Linkedin, Mail, ArrowRight,
  ArrowUpRight, Cpu, Brain, Plus, Menu, X,
  Shield, Zap, Layers, Search, GitBranch, BarChart2,
  Award, Phone, MapPin, ChevronLeft, ChevronRight, Database, Server
} from "lucide-react";
import Footer from "../components/Footer";

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   GLOBAL CSS â€” CINEMATIC SYSTEM
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Source+Serif+4:ital,wght@0,300;0,400;1,300;1,400&display=swap');
@import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{
  font-family:'Inter',-apple-system,sans-serif;
  background:#000000;color:#fff;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
  cursor:none;
}
::selection{background:rgba(255,255,255,0.15);}
::-webkit-scrollbar{width:1px;}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);}

/* â”€â”€ CURSOR â”€â”€ */
#c-dot{
  position:fixed;width:5px;height:5px;border-radius:50%;
  background:#fff;pointer-events:none;z-index:99999;
  transform:translate(-50%,-50%);
  mix-blend-mode:difference;
  transition:width .15s,height .15s;
}
#c-ring{
  position:fixed;width:28px;height:28px;border-radius:50%;
  border:1px solid rgba(255,255,255,0.3);pointer-events:none;z-index:99998;
  transform:translate(-50%,-50%);
  transition:width .3s cubic-bezier(.16,1,.3,1),height .3s cubic-bezier(.16,1,.3,1),border-color .2s,border-radius .25s;
}
body.c-hover #c-ring{width:46px;height:46px;border-color:rgba(255,255,255,0.55);background:rgba(255,255,255,0.03);}
body.c-click #c-dot{width:3px;height:3px;}
body.c-click #c-ring{width:20px;height:20px;}
@media(hover:none),(pointer:coarse){#c-dot,#c-ring{display:none;}body{cursor:auto;}}

/* â”€â”€ KEYFRAMES â”€â”€ */
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes float0{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-14px) translateX(4px)}}
@keyframes float1{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-9px) translateX(-6px)}}
@keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
@keyframes float3{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-12px) translateX(8px)}}
@keyframes orb0{0%,100%{transform:translate(0,0) scale(1);opacity:.18}50%{transform:translate(30px,-20px) scale(1.08);opacity:.28}}
@keyframes orb1{0%,100%{transform:translate(0,0) scale(1);opacity:.12}50%{transform:translate(-25px,18px) scale(1.05);opacity:.22}}
@keyframes orb2{0%,100%{transform:translate(0,0) scale(1);opacity:.08}50%{transform:translate(15px,25px) scale(1.1);opacity:.18}}
@keyframes grain{0%,100%{transform:translate(0,0)}10%{transform:translate(-2%,-3%)}20%{transform:translate(3%,1%)}30%{transform:translate(-1%,3%)}40%{transform:translate(2%,-2%)}50%{transform:translate(-3%,2%)}60%{transform:translate(1%,-1%)}70%{transform:translate(-2%,3%)}80%{transform:translate(3%,-2%)}90%{transform:translate(-1%,1%)}}
@keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
@keyframes pulse{0%,100%{opacity:.7}50%{opacity:.2}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes bloom{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}
@keyframes haze{0%,100%{opacity:.3;transform:translateY(0) scaleX(1)}50%{opacity:.5;transform:translateY(-8px) scaleX(1.04)}}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes cursorBlink{0%,100%{border-color:#fff}50%{border-color:transparent}}
@keyframes slideIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}

/* â”€â”€ LIQUID GLASS â”€â”€ */
.liquid-glass{
  position:relative;
  background:rgba(255,255,255,0.01);
  mix-blend-mode:normal;
  backdrop-filter:blur(4px) saturate(140%);
  -webkit-backdrop-filter:blur(4px) saturate(140%);
  overflow:hidden;
}
.liquid-glass::before{
  content:'';
  position:absolute;inset:0;
  border-radius:inherit;
  background:
    linear-gradient(135deg,rgba(255,255,255,0.07) 0%,transparent 40%,transparent 60%,rgba(255,255,255,0.04) 100%),
    linear-gradient(to bottom,rgba(255,255,255,0.05) 0%,transparent 50%);
  pointer-events:none;z-index:1;
}
.liquid-glass::after{
  content:'';
  position:absolute;inset:0;
  border-radius:inherit;
  box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),inset 0 -1px 0 rgba(255,255,255,0.03),inset 1px 0 0 rgba(255,255,255,0.06),inset -1px 0 0 rgba(255,255,255,0.03);
  pointer-events:none;z-index:2;
}

.liquid-glass-strong{
  position:relative;
  background:rgba(255,255,255,0.04);
  backdrop-filter:blur(50px) saturate(160%) brightness(1.05);
  -webkit-backdrop-filter:blur(50px) saturate(160%) brightness(1.05);
  overflow:hidden;
  box-shadow:0 8px 40px rgba(0,0,0,0.6),0 2px 8px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.12),inset 0 0 40px rgba(255,255,255,0.02);
}
.liquid-glass-strong::before{
  content:'';
  position:absolute;inset:0;
  border-radius:inherit;
  background:
    linear-gradient(135deg,rgba(255,255,255,0.1) 0%,transparent 35%,transparent 65%,rgba(255,255,255,0.06) 100%),
    linear-gradient(to bottom,rgba(255,255,255,0.08) 0%,transparent 45%);
  pointer-events:none;z-index:1;
}
.liquid-glass-strong::after{
  content:'';
  position:absolute;inset:0;
  border-radius:inherit;
  box-shadow:inset 0 1px 0 rgba(255,255,255,0.18),inset 0 -1px 0 rgba(255,255,255,0.04),inset 1px 0 0 rgba(255,255,255,0.09),inset -1px 0 0 rgba(255,255,255,0.04);
  pointer-events:none;z-index:2;
}

/* ── CINEMATIC CARDS ── */
.cinematic-card {
  background: rgba(255,255,255,0.015);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.4rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 20px rgba(255,255,255,0.01);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
}
.cinematic-card:hover {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(24px) saturate(160%);
  border-color: rgba(255,255,255,0.12);
  transform: translateY(-4px) !important;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 0 20px rgba(255,255,255,0.02);
}
.cinematic-card-glass {
  background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
}
.cinematic-card-deep {
  background: rgba(255,255,255,0.01);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.03);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* â”€â”€ NOISE GRAIN â”€â”€ */
.grain-overlay{
  position:fixed;inset:0;pointer-events:none;z-index:3;
  opacity:.032;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat:repeat;background-size:180px;
  animation:grain 0.4s steps(1) infinite;
}

/* â”€â”€ VIGNETTE â”€â”€ */
.vignette{
  position:fixed;inset:0;pointer-events:none;z-index:2;
  background:radial-gradient(ellipse 90% 90% at 50% 50%,transparent 40%,rgba(0,0,0,0.55) 100%);
}

/* â”€â”€ PILLS â”€â”€ */
.pill{
  display:inline-flex;align-items:center;gap:.45rem;
  padding:.32rem .85rem;border-radius:100px;
  font-size:.72rem;font-weight:400;letter-spacing:.02em;
  color:rgba(255,255,255,.55);
  border:1px solid rgba(255,255,255,.12);
  transition:all .25s cubic-bezier(.16,1,.3,1);
  cursor:default;
}
.pill:hover{color:#fff;border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.05);transform:translateY(-2px);}

/* â”€â”€ NAV PILL â”€â”€ */
.nav-pill{
  padding:.28rem .75rem;border-radius:100px;
  font-size:.78rem;font-weight:400;color:rgba(255,255,255,.45);
  text-decoration:none;
  transition:all .22s cubic-bezier(.16,1,.3,1);
}
.nav-pill:hover{color:#fff;background:rgba(255,255,255,.07);}

/* â”€â”€ SERIF ITALIC â”€â”€ */
.serif-i{font-family:'Source Serif 4',Georgia,serif;font-style:italic;font-weight:300;}

/* â”€â”€ ANIMATIONS â”€â”€ */
.a-fadeUp{animation:fadeUp .7s cubic-bezier(.16,1,.3,1) both;}
.a-fadeIn{animation:fadeIn .6s ease both;}
.d1{animation-delay:.1s}.d2{animation-delay:.2s}.d3{animation-delay:.3s}
.d4{animation-delay:.4s}.d5{animation-delay:.5s}.d6{animation-delay:.6s}.d7{animation-delay:.7s}

/* â”€â”€ SCROLL BAR â”€â”€ */
.sbar{position:fixed;top:0;left:0;right:0;height:1px;z-index:9999;}
.sbar-fill{height:100%;background:#fff;opacity:.4;transition:width .08s linear;}
`;

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MAGNETIC CURSOR
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function MagneticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover:none),(pointer:coarse)').matches) return;
    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.11);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.11);
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) { dotRef.current.style.left = e.clientX + 'px'; dotRef.current.style.top = e.clientY + 'px'; }
    };
    const onDown = () => document.body.classList.add('c-click');
    const onUp = () => document.body.classList.remove('c-click');
    const magneticEls = document.querySelectorAll('a,button');
    const handlers = [];
    magneticEls.forEach(el => {
      const enter = () => document.body.classList.add('c-hover');
      const leave = () => { document.body.classList.remove('c-hover'); el.style.transform = ''; };
      const move = e => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.22}px,${dy * 0.22}px)`;
      };
      el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); el.addEventListener('mousemove', move);
      handlers.push({ el, enter, leave, move });
    });
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown); window.addEventListener('mouseup', onUp);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown); window.removeEventListener('mouseup', onUp);
      handlers.forEach(({ el, enter, leave, move }) => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); el.removeEventListener('mousemove', move); el.style.transform = ''; });
    };
  }, []);

  return (<><div id="c-dot" ref={dotRef} /><div id="c-ring" ref={ringRef} /></>);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SCROLL BAR
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function SBar() {
  const [p, sp] = useState(0);
  useEffect(() => {
    const fn = () => { const m = document.documentElement.scrollHeight - window.innerHeight; sp((window.scrollY / m) * 100); };
    window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div className="sbar"><div className="sbar-fill" style={{ width: `${p}%` }} /></div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TYPEWRITER
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Typewriter({ roles }) {
  const [idx, si] = useState(0); const [txt, st] = useState(''); const [del, sd] = useState(false); const [ch, sc] = useState(0);
  useEffect(() => {
    const cur = roles[idx]; let t;
    if (!del) { if (ch < cur.length) { t = setTimeout(() => { st(cur.slice(0, ch + 1)); sc(c => c + 1); }, 58); } else t = setTimeout(() => sd(true), 2400); }
    else { if (ch > 0) { t = setTimeout(() => { st(cur.slice(0, ch - 1)); sc(c => c - 1); }, 28); } else { sd(false); si(i => (i + 1) % roles.length); } }
    return () => clearTimeout(t);
  }, [ch, del, idx, roles]);
  return <span>{txt}<span style={{ borderRight: '1.5px solid #fff', marginLeft: '1px', animation: 'cursorBlink .9s step-end infinite' }} /></span>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PROFILE DATA
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const PROFILE = {
  name: 'Siva Satya Sai Bhagavan Gopalajosyula',
  email: 'g.sivasatyasaibhagavan@gmail.com',
  phone: '+91 7569205626',
  github: 'https://github.com/bhagavan444',
  linkedin: 'https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/',
  objective: 'AI and Data Science undergraduate with practical experience in full-stack development and machine learning. Built multiple projects including AI chatbot systems, resume analyzers, and ML models. Completed internships in MERN, AI/ML, and Data Science.',
  internships: {
    mern: { title: 'MERN Stack Intern', company: 'StudyOwl Education Pvt Ltd', period: 'Mayâ€“July 2025', detail: ['Worked on React frontend and Node.js backend integration.', 'Built reusable components and REST APIs.'] },
    aiml: { title: 'AI/ML Intern â€“ Smart Sorting', company: 'SmartBridge (Remote)', period: 'Mayâ€“June 2025', detail: ['Built CNN-based image classification model using TensorFlow and Keras.', 'Deployed trained model using Flask for real-time predictions.'] },
    ml: { title: 'ML & Data Science Intern', company: 'Blackbucks (Remote)', period: 'Mayâ€“June 2024', detail: ['Performed data preprocessing and feature engineering.', 'Improved model accuracy through data cleaning and Scikit-learn pipelines.'] },
  },
  projects: {
    ats: { title: 'ATS-Based Resume Builder Platform', year: '2025', stack: 'MERN Stack Â· MongoDB Â· OAuth 2.0', overview: 'Full-stack resume builder optimized for ATS compatibility.', architecture: 'React frontend â†’ Express REST API â†’ MongoDB document store. Stateless JWT auth layer. Google and GitHub OAuth via Passport.js.', security: 'OAuth 2.0 with Google and GitHub â€” no plaintext password storage. JWT tokens for session management.', tradeoffs: 'Chose MongoDB over SQL because resume data schema is inherently variable per candidate.', challenges: 'Building a keyword-matching algorithm that reliably scores resumes against job descriptions.' },
    chatbot: { title: 'AI Chatbot Web Application', year: '2025', stack: 'React.js Â· Flask Â· Gemini API Â· OpenAI API', overview: 'Full-stack AI chatbot with React frontend and Flask backend. Supports multi-turn conversations.', architecture: 'React UI â†’ Flask REST backend â†’ Gemini/OpenAI APIs. 100% server-side API key handling.', security: 'Zero client-side key exposure. All API credentials handled server-side via Flask environment variables.', tradeoffs: 'Used async polling over WebSockets â€” single-user sessions had no concurrent stream requirement.', challenges: 'Maintaining multi-turn conversation context per session and implementing graceful fallback between two AI providers.' },
    career: { title: 'Career Path Recommendation System', year: '2024', stack: 'Python Â· Scikit-learn Â· Machine Learning', overview: 'ML-based system for career suggestions that includes ATS scoring and quiz-based evaluation.', architecture: 'Data preprocessing â†’ feature encoding â†’ supervised classification â†’ ranked recommendation output.', tradeoffs: 'Used Scikit-learn over deep learning â€” dataset size did not justify neural network complexity.', challenges: 'Encoding categorical career features in a way that preserved semantic relationships.' },
    fakenews: { title: 'Fake News Detection System', year: '2023', stack: 'Python Â· NLP Â· TF-IDF Â· Logistic Regression', overview: 'NLP-based classifier to detect misinformation in news articles using TF-IDF feature extraction.', architecture: 'Text corpus â†’ TF-IDF vectorization â†’ Logistic Regression classifier â†’ prediction output.', tradeoffs: 'TF-IDF over deep NLP â€” interpretable, accurate, and required no GPU infrastructure.', challenges: 'Handling news article variability and reducing false positive rates.' },
  },
  skills: { languages: ['Python', 'Java', 'C', 'JavaScript'], frontend: ['React.js', 'HTML', 'CSS'], backend: ['Node.js', 'Express.js', 'Flask', 'REST API Design'], databases: ['MongoDB', 'MySQL'], ml: ['TensorFlow', 'Keras', 'Scikit-learn', 'NLP', 'TF-IDF'], tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'OAuth 2.0', 'JWT'] },
  certifications: ['Google Generative AI Certification', 'IBM AI & LLM Certification', 'Full Stack Development Certifications', 'ML & Deep Learning Certifications'],
  differentiators: ['3 internships across MERN, AI/ML, and Data Science domains.', 'Deployed CNN inference pipelines and full-stack apps â€” not just notebooks.', 'Security-first thinking: OAuth 2.0, server-side API keys, JWT.', 'Conscious trade-off reasoning: MongoDB vs SQL, Flask vs FastAPI, TF-IDF vs deep NLP.', 'Ready to contribute from day one â€” zero ramp-up on core MERN + Python stack.'],
};

const INTENTS = [
  { keys: ['walk me through', 'tell me about', 'who is', 'about bhagavan', 'summary', 'overview', 'profile', 'introduce', 'introduction'], fn: () => ({ title: 'Profile Summary', sections: [{ label: 'Role', text: 'AI & Full Stack Product Engineer' }, { label: 'Education', text: 'B.Tech AIDS Â· Ramachandra College of Engineering Â· 2026 Â· 75% CGPA' }, { label: 'Objective', text: PROFILE.objective }, { label: 'Availability', text: 'Open to Full-Time Â· 2026 Graduate Â· Available Remotely' }] }) },
  { keys: ['strongest', 'best project', 'main project', 'flagship', 'most impressive', 'hardest', 'proudest'], fn: () => ({ title: 'Strongest Project â€” ATS Resume Builder', sections: [{ label: 'Overview', text: PROFILE.projects.ats.overview }, { label: 'Architecture', text: PROFILE.projects.ats.architecture }, { label: 'Security Layer', text: PROFILE.projects.ats.security }, { label: 'Key Trade-off', text: PROFILE.projects.ats.tradeoffs }, { label: 'Stack', text: PROFILE.projects.ats.stack }] }) },
  { keys: ['ats', 'resume builder', 'keyword matching', 'pdf parsing', 'passport', 'oauth ats'], fn: () => ({ title: 'ATS Resume Builder Platform', sections: [{ label: 'Overview', text: PROFILE.projects.ats.overview }, { label: 'Architecture', text: PROFILE.projects.ats.architecture }, { label: 'Security', text: PROFILE.projects.ats.security }, { label: 'Trade-off', text: PROFILE.projects.ats.tradeoffs }, { label: 'Stack', text: PROFILE.projects.ats.stack }] }) },
  { keys: ['chatbot', 'ai chatbot', 'gemini', 'openai', 'flask api', 'multi-turn', 'server side key'], fn: () => ({ title: 'AI Chatbot Web Application', sections: [{ label: 'Overview', text: PROFILE.projects.chatbot.overview }, { label: 'Architecture', text: PROFILE.projects.chatbot.architecture }, { label: 'Security', text: PROFILE.projects.chatbot.security }, { label: 'Trade-off', text: PROFILE.projects.chatbot.tradeoffs }, { label: 'Stack', text: PROFILE.projects.chatbot.stack }] }) },
  { keys: ['fake news', 'nlp', 'tf-idf', 'tfidf', 'text classification', 'misinformation', 'logistic regression'], fn: () => ({ title: 'Fake News Detection System', sections: [{ label: 'Overview', text: PROFILE.projects.fakenews.overview }, { label: 'Architecture', text: PROFILE.projects.fakenews.architecture }, { label: 'Trade-off', text: PROFILE.projects.fakenews.tradeoffs }, { label: 'Stack', text: PROFILE.projects.fakenews.stack }] }) },
  { keys: ['career', 'recommendation', 'recommender', 'career path'], fn: () => ({ title: 'Career Path Recommendation System', sections: [{ label: 'Overview', text: PROFILE.projects.career.overview }, { label: 'Architecture', text: PROFILE.projects.career.architecture }, { label: 'Stack', text: PROFILE.projects.career.stack }] }) },
  { keys: ['project', 'projects', 'all projects', 'what projects', 'list projects', 'how many projects'], fn: () => ({ title: 'All Projects (4 Built)', sections: [{ label: PROFILE.projects.ats.title, text: PROFILE.projects.ats.stack + ' Â· ' + PROFILE.projects.ats.year }, { label: PROFILE.projects.chatbot.title, text: PROFILE.projects.chatbot.stack + ' Â· ' + PROFILE.projects.chatbot.year }, { label: PROFILE.projects.career.title, text: PROFILE.projects.career.stack + ' Â· ' + PROFILE.projects.career.year }, { label: PROFILE.projects.fakenews.title, text: PROFILE.projects.fakenews.stack + ' Â· ' + PROFILE.projects.fakenews.year }] }) },
  { keys: ['internship', 'internships', 'experience', 'work experience', 'studyowl', 'smartbridge', 'blackbucks'], fn: () => ({ title: 'Internship Experience (3 Roles)', sections: [{ label: PROFILE.internships.mern.title + ' Â· ' + PROFILE.internships.mern.period, text: PROFILE.internships.mern.company + ' â€” ' + PROFILE.internships.mern.detail.join(' ') }, { label: PROFILE.internships.aiml.title + ' Â· ' + PROFILE.internships.aiml.period, text: PROFILE.internships.aiml.company + ' â€” ' + PROFILE.internships.aiml.detail.join(' ') }, { label: PROFILE.internships.ml.title + ' Â· ' + PROFILE.internships.ml.period, text: PROFILE.internships.ml.company + ' â€” ' + PROFILE.internships.ml.detail.join(' ') }] }) },
  { keys: ['mern', 'react', 'node', 'nodejs', 'express', 'full stack', 'fullstack'], fn: () => ({ title: 'MERN Stack Capability', sections: [{ label: 'Frontend', text: 'React.js â€” component architecture, hooks, state management, REST API integration.' }, { label: 'Backend', text: 'Node.js + Express.js â€” RESTful API design, middleware, async/await, error handling.' }, { label: 'Database', text: 'MongoDB â€” document modeling, Mongoose ODM, schema design.' }] }) },
  { keys: ['skill', 'skills', 'tech stack', 'technologies', 'what can you do'], fn: () => ({ title: 'Technical Skills', sections: [{ label: 'Languages', text: PROFILE.skills.languages.join(' Â· ') }, { label: 'Frontend', text: PROFILE.skills.frontend.join(' Â· ') }, { label: 'Backend & APIs', text: PROFILE.skills.backend.join(' Â· ') }, { label: 'Databases', text: PROFILE.skills.databases.join(' Â· ') }, { label: 'AI / ML', text: PROFILE.skills.ml.join(' Â· ') }, { label: 'Tools', text: PROFILE.skills.tools.join(' Â· ') }] }) },
  { keys: ['machine learning', 'ml', 'cnn', 'tensorflow', 'deep learning', 'keras', 'neural network', 'scikit'], fn: () => ({ title: 'AI & Machine Learning Capability', sections: [{ label: 'Core Stack', text: 'TensorFlow Â· Keras Â· Scikit-learn Â· Python' }, { label: 'CNN Work', text: 'Built and trained CNN image classifiers at SmartBridge internship. Models deployed via Flask for real-time inference.' }, { label: 'NLP Work', text: 'TF-IDF based text classification for fake news detection.' }, { label: 'Deployment', text: 'All ML models deployed as Flask REST API endpoints â€” production-style.' }] }) },
  { keys: ['security', 'oauth', 'auth', 'authentication', 'jwt', 'token'], fn: () => ({ title: 'Security Architecture', sections: [{ label: 'OAuth 2.0', text: 'Google + GitHub OAuth via Passport.js. No plaintext passwords stored.' }, { label: 'API Key Security', text: 'All third-party API keys stored server-side in Flask environment variables. Zero client-side exposure.' }, { label: 'Session Management', text: 'JWT tokens for stateless session handling.' }] }) },
  { keys: ['tradeoff', 'trade-off', 'decision', 'why mongodb', 'engineering decision'], fn: () => ({ title: 'Engineering Trade-offs', sections: [{ label: 'MongoDB over SQL', text: PROFILE.projects.ats.tradeoffs }, { label: 'TF-IDF over Deep NLP', text: PROFILE.projects.fakenews.tradeoffs }, { label: 'Async Polling over WebSockets', text: PROFILE.projects.chatbot.tradeoffs }] }) },
  { keys: ['strength', 'strengths', 'strong at', 'good at', 'core strength'], fn: () => ({ title: 'Core Strengths', sections: PROFILE.differentiators.map((d, i) => ({ label: `0${i + 1}`, text: d })) }) },
  { keys: ['role', 'roles', 'looking for', 'job', 'position', 'hire', 'available', 'availability', 'open to'], fn: () => ({ title: 'Roles & Availability', sections: [{ label: 'Status', text: 'Open to Full-Time Â· 2026 Graduate Â· Available Remotely' }, { label: 'Target Roles', text: 'Junior Software Engineer Â· Junior AI/ML Engineer Â· Full-Stack Developer (MERN) Â· Python Developer' }, { label: 'Contact', text: PROFILE.email + ' Â· ' + PROFILE.phone }], action: { label: 'Send Email', href: 'mailto:' + PROFILE.email } }) },
  { keys: ['certification', 'certificates', 'google', 'ibm', 'certified'], fn: () => ({ title: 'Certifications', sections: PROFILE.certifications.map((c, i) => ({ label: `0${i + 1}`, text: c })) }) },
  { keys: ['education', 'degree', 'college', 'cgpa', 'btech', 'ramachandra'], fn: () => ({ title: 'Academic Background', sections: [{ label: 'B.Tech', text: 'Artificial Intelligence & Data Science Â· Ramachandra College of Engineering, Eluru Â· 2022â€“2026 Â· 75% CGPA' }, { label: 'Intermediate', text: 'MPC Â· Srividhya Junior College Â· 2020â€“2022 Â· 78%' }, { label: 'Secondary', text: 'Class X Â· Montessori English Medium High School Â· 2019â€“2020 Â· 95%' }] }) },
  { keys: ['github', 'repository', 'code', 'source', 'repo'], fn: () => ({ title: 'GitHub Profile', sections: [{ label: 'Profile', text: 'github.com/bhagavan444' }, { label: 'Projects', text: 'ATS Resume Builder Â· AI Chatbot Â· Fake News Detector Â· Career Recommender' }], action: { label: 'Open GitHub', href: PROFILE.github } }) },
  { keys: ['contact', 'email', 'phone', 'reach', 'get in touch', 'connect', 'linkedin'], fn: () => ({ title: 'Contact Information', sections: [{ label: 'Email', text: PROFILE.email }, { label: 'Phone', text: PROFILE.phone }, { label: 'Location', text: 'Andhra Pradesh Â· Open to Remote' }], action: { label: 'Send Email', href: 'mailto:' + PROFILE.email } }) },
  { keys: ['resume', 'cv', 'download', 'pdf'], fn: () => ({ title: 'Resume / CV', sections: [{ label: 'Format', text: 'Single-page professional resume optimized for ATS systems.' }, { label: 'Highlights', text: '3 internships Â· 4 projects Â· CNN Â· NLP Â· MERN Â· Flask Â· OAuth Â· 75% CGPA' }], action: { label: 'Download Resume', href: null, isResume: true } }) },
];

const FALLBACK = { title: 'Out of Scope', sections: [{ label: 'Note', text: "I'm designed to answer questions about Bhagavan's technical profile, projects, internships, and skills. Try asking about projects, skills, internships, or contact info." }] };

function detectIntent(input) {
  const lower = input.toLowerCase().trim();
  for (const intent of INTENTS) { if (intent.keys.some(k => lower.includes(k))) return intent.fn(); }
  return FALLBACK;
}

const SUGGESTIONS = ['Walk me through your resume.', 'What is your strongest project?', 'Tell me about your internships.', 'What are your AI/ML capabilities?', 'What roles are you looking for?', 'What makes you different?', 'Show me your tech stack.', 'How can I contact you?'];
const QUICK_CATEGORIES = [
  { label: 'ðŸ¢ Recruiters', qs: ['Walk me through your resume.', 'What roles are you looking for?', 'What makes you different?', 'Tell me about your internships.'] },
  { label: 'âš™ï¸ Technical', qs: ['What is your strongest project?', 'Explain your backend architecture.', 'Show me your trade-off decisions.', 'What are your AI/ML capabilities?'] },
  { label: 'ðŸŽ“ Skills', qs: ['What certifications do you have?', 'Show me your tech stack.', 'Tell me about your education.', 'What security patterns do you use?'] },
];

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   RESUME ASSISTANT
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function ResumeAssistant({ resumePdf }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check(); window.addEventListener('resize', check); return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open, isMobile]);

  const submit = useCallback((q) => {
    const text = (q || query).trim(); if (!text) return;
    const res = detectIntent(text);
    setHistory(h => [...h, { q: text, res }]);
    setQuery('');
    setTimeout(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, 80);
  }, [query]);

  useEffect(() => { if (open && inputRef.current) setTimeout(() => inputRef.current?.focus(), 100); }, [open]);

  const panelStyle = isMobile
    ? { position: 'fixed', inset: 0, zIndex: 9100, borderRadius: 0, maxHeight: '100%' }
    : { position: 'fixed', bottom: '5.5rem', right: '1.75rem', width: 'min(420px,calc(100vw - 2rem))', zIndex: 9100, borderRadius: '18px', maxHeight: 'min(620px,80vh)', animation: 'slideIn .28s cubic-bezier(.16,1,.3,1) both' };

  return (
    <>
      <div style={{ position: 'fixed', bottom: '1.6rem', right: '1.6rem', zIndex: 9200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '.45rem' }}>
        {!open && (
          <div className="liquid-glass" style={{ borderRadius: '8px', padding: '.28rem .7rem', fontSize: '.64rem', fontFamily: 'Poppins,sans-serif', color: 'rgba(255,255,255,.4)', letterSpacing: '.08em', border: '1px solid rgba(255,255,255,.1)', animation: 'fadeUp .4s ease both', pointerEvents: 'none' }}>
            Ask about my profile
          </div>
        )}
        <button onClick={() => setOpen(o => !o)}
          style={{ width: '50px', height: '50px', borderRadius: '14px', background: open ? 'rgba(255,255,255,.06)' : '#fff', border: `1px solid ${open ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .25s cubic-bezier(.16,1,.3,1)', backdropFilter: 'blur(20px)', boxShadow: open ? 'none' : '0 8px 32px rgba(0,0,0,.5)' }}>
          {open
            ? <X size={16} color="rgba(255,255,255,.7)" strokeWidth={2} />
            : <Cpu size={18} color="#000" strokeWidth={1.8} />
          }
        </button>
      </div>

      {open && (
        <div style={{ ...panelStyle, background: 'rgba(0,0,0,.95)', border: '1px solid rgba(255,255,255,.08)', backdropFilter: 'blur(40px)', boxShadow: '0 10px 40px rgba(0,0,0,.6)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: isMobile ? '.9rem 1rem' : '.9rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,.05)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Cpu size={13} color="rgba(255,255,255,.6)" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: '.82rem', fontWeight: 600, color: '#fff', letterSpacing: '-.01em', lineHeight: 1.2 }}>Profile AI</div>
                <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.25)', fontFamily: 'monospace', letterSpacing: '.06em', marginTop: '.1rem' }}>KNOWLEDGE-BASE Â· ZERO HALLUCINATION</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff', display: 'inline-block', animation: 'pulse 2s ease infinite', opacity: .6 }} />
              <span style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.35)', fontFamily: 'monospace', letterSpacing: '.05em' }}>Online</span>
              {history.length > 0 && (
                <button onClick={() => setHistory([])} style={{ padding: '.26rem .5rem', borderRadius: '5px', cursor: 'pointer', border: '1px solid rgba(255,255,255,.08)', background: 'transparent', fontSize: '.6rem', color: 'rgba(255,255,255,.3)', fontFamily: 'Poppins,sans-serif', transition: 'all .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'rgba(255,255,255,.7)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,.3)'; }}>
                  Clear
                </button>
              )}
              {isMobile && <button onClick={() => setOpen(false)} style={{ width: '28px', height: '28px', borderRadius: '7px', cursor: 'pointer', border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={13} color="rgba(255,255,255,.6)" strokeWidth={2} /></button>}
            </div>
          </div>

          <div ref={bodyRef} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 0, WebkitOverflowScrolling: 'touch' }}>
            {history.length === 0 && (
              <div style={{ padding: isMobile ? '1rem' : '1rem 1.2rem' }}>
                <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.75, marginBottom: '1rem', padding: '.8rem .95rem', background: 'rgba(255,255,255,.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,.07)' }}>
                  Ask anything about <strong style={{ color: '#fff' }}>Bhagavan's</strong> technical profile â€” projects, internships, skills, or trade-offs.
                </div>
                <div style={{ display: 'flex', gap: '.35rem', marginBottom: '.75rem', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '2px' }}>
                  {QUICK_CATEGORIES.map((cat, ci) => (
                    <button key={ci} onClick={() => setActiveTab(ci)} style={{ padding: '.36rem .72rem', borderRadius: '20px', cursor: 'pointer', border: `1px solid ${activeTab === ci ? 'rgba(255,255,255,.3)' : 'rgba(255,255,255,.08)'}`, background: activeTab === ci ? 'rgba(255,255,255,.08)' : 'transparent', fontSize: '.68rem', color: activeTab === ci ? '#fff' : 'rgba(255,255,255,.35)', fontFamily: 'Poppins,sans-serif', fontWeight: activeTab === ci ? 600 : 400, whiteSpace: 'nowrap', flexShrink: 0, transition: 'all .18s' }}>
                      {cat.label}
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                  {QUICK_CATEGORIES[activeTab].qs.map((q, qi) => (
                    <button key={qi} onClick={() => submit(q)} style={{ padding: '.62rem .82rem', borderRadius: '9px', cursor: 'pointer', border: '1px solid rgba(255,255,255,.07)', background: 'rgba(255,255,255,.02)', fontSize: '.76rem', color: 'rgba(255,255,255,.45)', textAlign: 'left', lineHeight: 1.45, transition: 'all .16s', fontFamily: 'Poppins,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'; e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'; e.currentTarget.style.background = 'rgba(255,255,255,.02)'; e.currentTarget.style.color = 'rgba(255,255,255,.45)'; }}>
                      <span>{q}</span>
                      <ArrowRight size={12} strokeWidth={2} style={{ flexShrink: 0, opacity: .3 }} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {history.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', padding: isMobile ? '.85rem' : '1rem 1.2rem', gap: '1.1rem' }}>
                {history.map((entry, hi) => (
                  <div key={hi} style={{ display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{ background: '#fff', color: '#000', padding: '.52rem .88rem', borderRadius: '12px 12px 3px 12px', fontSize: '.76rem', maxWidth: '82%', lineHeight: 1.55, fontFamily: 'Poppins,sans-serif' }}>{entry.q}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '3px 12px 12px 12px', fontSize: '.74rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, overflow: 'hidden' }}>
                      <div style={{ padding: '.55rem .88rem', background: 'rgba(255,255,255,.03)', borderBottom: '1px solid rgba(255,255,255,.07)', fontSize: '.7rem', fontWeight: 700, color: '#fff', letterSpacing: '-.01em', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                        <div style={{ width: '3px', height: '13px', borderRadius: '2px', background: '#fff', opacity: .7, flexShrink: 0 }} />{entry.res.title}
                      </div>
                      <div style={{ padding: '.7rem .88rem', display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
                        {entry.res.sections.map((s, i) => (
                          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '.12rem' }}>
                            <div style={{ fontSize: '.56rem', fontFamily: 'monospace', letterSpacing: '.1em', color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
                            <div style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>{s.text}</div>
                          </div>
                        ))}
                      </div>
                      {entry.res.action && (
                        <div style={{ padding: '0 .88rem .82rem' }}>
                          {entry.res.action.isResume
                            ? <a href={resumePdf} download style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.48rem .95rem', borderRadius: '8px', background: '#fff', color: '#000', textDecoration: 'none', fontSize: '.72rem', fontWeight: 600, fontFamily: 'Poppins,sans-serif' }}><Download size={12} strokeWidth={2} /> {entry.res.action.label}</a>
                            : <a href={entry.res.action.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.46rem .92rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.45)', textDecoration: 'none', fontSize: '.72rem', fontFamily: 'Poppins,sans-serif', transition: 'all .18s' }}
                              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)'; e.currentTarget.style.color = '#fff'; }}
                              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; e.currentTarget.style.color = 'rgba(255,255,255,.45)'; }}>
                              <ArrowUpRight size={12} strokeWidth={2} /> {entry.res.action.label}
                            </a>
                          }
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div style={{ paddingTop: '.2rem' }}>
                  <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.18)', fontFamily: 'monospace', letterSpacing: '.08em', marginBottom: '.45rem' }}>QUICK FOLLOW-UPS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem' }}>
                    {SUGGESTIONS.slice(0, 6).map((s, i) => (
                      <button key={i} onClick={() => submit(s)} style={{ padding: '.3rem .62rem', borderRadius: '20px', cursor: 'pointer', border: '1px solid rgba(255,255,255,.08)', background: 'transparent', fontSize: '.64rem', color: 'rgba(255,255,255,.28)', transition: 'all .15s', fontFamily: 'Poppins,sans-serif' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.04)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.color = 'rgba(255,255,255,.28)'; e.currentTarget.style.background = 'transparent'; }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div style={{ padding: isMobile ? '.75rem' : '.65rem 1rem', borderTop: '1px solid rgba(255,255,255,.07)', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center' }}>
              <input ref={inputRef} value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && submit()}
                placeholder="Ask about projects, skills, internshipsâ€¦"
                style={{ flex: 1, padding: isMobile ? '.68rem .88rem' : '.58rem .8rem', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.04)', fontSize: isMobile ? '.88rem' : '.78rem', color: '#fff', outline: 'none', fontFamily: 'Poppins,sans-serif', transition: 'border-color .18s' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,.3)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'} />
              <button onClick={() => submit()} style={{ width: isMobile ? '42px' : '36px', height: isMobile ? '42px' : '36px', borderRadius: '10px', background: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.88)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <ArrowRight size={14} color="#000" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HOME PAGE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
/* ═══════════════════════════════════════
   SECTION LABEL
═══════════════════════════════════════ */
function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1.5rem' }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════
   NAV BUTTON
═══════════════════════════════════════ */
function NavBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,.5)', transition: 'all .22s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.08)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; e.currentTarget.style.background = 'rgba(255,255,255,.03)'; }}
    >
      {children}
    </button>
  );
}

/* ═══════════════════════════════════════
   GHOST BUTTON
═══════════════════════════════════════ */
function GhostBtn({ onClick, href, children }) {
  const style = { display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.58rem 1.3rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,.1)', background: 'transparent', color: 'rgba(255,255,255,.5)', fontSize: '.82rem', fontFamily: 'Inter,sans-serif', fontWeight: 400, cursor: 'pointer', textDecoration: 'none', transition: 'all .25s cubic-bezier(.16,1,.3,1)' };
  const handlers = {
    onMouseEnter: e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.transform = 'translateY(-2px)'; },
    onMouseLeave: e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }
  };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={style} {...handlers}>{children}</a>;
  return <button onClick={onClick} style={style} {...handlers}>{children}</button>;
}

/* ═══════════════════════════════════════
   CTA BUTTON
═══════════════════════════════════════ */
function CTAButton({ onClick, href, children }) {
  const style = { display: 'inline-flex', alignItems: 'center', gap: '.45rem', padding: '.72rem 1.6rem', borderRadius: '100px', background: '#fff', color: '#000', fontSize: '.85rem', fontWeight: 500, fontFamily: 'Inter,sans-serif', cursor: 'pointer', border: 'none', textDecoration: 'none', transition: 'all .25s cubic-bezier(.16,1,.3,1)' };
  const handlers = {
    onMouseEnter: e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,.15)'; },
    onMouseLeave: e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }
  };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={style} {...handlers}>{children}</a>;
  return <button onClick={onClick} style={style} {...handlers}>{children}</button>;
}

/* ═══════════════════════════════════════
   TECH MARQUEE
═══════════════════════════════════════ */
function TechMarquee() {
  const items = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'TensorFlow', 'Keras', 'JWT', 'OAuth 2.0', 'Docker', 'AWS', 'PostgreSQL', 'Redis', 'Next.js', 'TypeScript'];
  const row = items.map((t, i) => (
    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '0 2rem', fontSize: '.72rem', color: 'rgba(255,255,255,.18)', fontFamily: 'monospace', letterSpacing: '.06em', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,.15)', flexShrink: 0 }} />
      {t}
    </span>
  ));
  return (
    <div style={{ position: 'relative', zIndex: 10, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)', padding: '.9rem 0' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite' }}>
        {row}{row}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   GLASS SKILL CARD
═══════════════════════════════════════ */
function GlassSkillCard({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [.16, 1, .3, 1] }}
      className="liquid-glass"
      style={{
        padding: '2.5rem 2rem',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,.08)',
        transition: 'all .4s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(255,255,255,.02)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(74,222,128,0.4)';
        e.currentTarget.style.background = 'rgba(255,255,255,.05)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(74,222,128,0.05)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
        e.currentTarget.style.background = 'rgba(255,255,255,.02)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ position: 'absolute', top: 0, right: 0, padding: '1.5rem', opacity: 0.05, transform: 'scale(1.8) translate(10%, -10%)', pointerEvents: 'none', transition: 'all 0.5s' }}>
        {group.icon && <group.icon size={80} strokeWidth={1} />}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
        {group.icon && <group.icon size={18} color="rgba(74,222,128,0.8)" strokeWidth={2} />}
        <div style={{ fontSize: '.65rem', fontFamily: 'monospace', letterSpacing: '.12em', color: '#fff', textTransform: 'uppercase', fontWeight: 600 }}>{group.l}</div>
      </div>
      <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 300, position: 'relative', zIndex: 2 }}>{group.desc}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', position: 'relative', zIndex: 2 }}>
        {group.sk.map((s, j) => (
          <div key={j} style={{
            display: 'flex', alignItems: 'center', gap: '.4rem', padding: '.4rem .8rem', borderRadius: '8px',
            border: '1px solid rgba(255,255,255,.06)', background: 'rgba(0,0,0,.3)',
            fontSize: '.72rem', color: 'rgba(255,255,255,.55)', fontWeight: 400,
            transition: 'all .25s'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(74,222,128,0.1)';
              e.currentTarget.style.borderColor = 'rgba(74,222,128,0.3)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,.3)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)';
              e.currentTarget.style.color = 'rgba(255,255,255,.55)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
            {s.i && <i className={s.i} style={{ fontSize: '14px', opacity: .8 }} />}
            {s.n}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   PROJECT CARD
═══════════════════════════════════════ */
function ProjectCard({ project: p, navigate, isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [.16, 1, .3, 1] }}
      className="liquid-glass"
      style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,.08)', overflow: 'hidden', transition: 'all .4s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)';
        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(56,189,248,0.05)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ padding: isMobile ? '1.5rem' : '2rem', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.8rem', fontWeight: 300, color: 'rgba(255,255,255,.12)', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', lineHeight: 1 }}>{p.n}</span>
          <span style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.3)', fontFamily: 'monospace', letterSpacing: '.08em', textTransform: 'uppercase' }}>{p.tag}</span>
        </div>
        <div style={{ fontSize: '1rem', fontWeight: 500, color: '#fff' }}>{p.title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
          {p.stack.map((t, j) => (
            <span key={j} style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.35)', padding: '.18rem .55rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,.1)', fontFamily: 'monospace', letterSpacing: '.02em' }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 220px' }}>
        <div style={{ padding: isMobile ? '1.5rem' : '2rem', borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,.06)', borderBottom: isMobile ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: isMobile ? '1.5rem' : 0 }}>
            {[{ label: 'Problem', text: p.problem }, { label: 'Approach', text: p.approach }, { label: 'Outcome', text: p.result }].map((s, j) => (
              <div key={j} style={{ paddingLeft: (!isMobile && j > 0) ? '1.25rem' : 0, borderLeft: (!isMobile && j > 0) ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                <span style={{ fontSize: '.6rem', letterSpacing: '.12em', color: 'rgba(255,255,255,.2)', display: 'block', marginBottom: '.6rem', fontFamily: 'monospace', textTransform: 'uppercase' }}>{s.label}</span>
                <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.78, fontWeight: 300 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: isMobile ? '1.5rem' : '2rem', display: 'flex', flexDirection: isMobile ? 'row' : 'column', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: isMobile ? '1.5rem' : 0, flexWrap: 'wrap' }}>
            {p.stats.map((s, j) => (
              <div key={j} style={{ paddingBottom: (!isMobile && j < p.stats.length - 1) ? '1rem' : 0, marginBottom: (!isMobile && j < p.stats.length - 1) ? '1rem' : 0, borderBottom: (!isMobile && j < p.stats.length - 1) ? '1px solid rgba(255,255,255,.06)' : 'none', paddingRight: (isMobile && j < p.stats.length - 1) ? '1.5rem' : 0, borderRight: (isMobile && j < p.stats.length - 1) ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                <div style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 300, lineHeight: 1, marginBottom: '.22rem', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic' }}>{s.v}</div>
                <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.3)', fontWeight: 300 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: '.45rem', marginTop: isMobile ? 0 : '1.4rem' }}>
            <CTAButton href={p.github}>GitHub <ArrowUpRight size={12} strokeWidth={1.8} /></CTAButton>
            <GhostBtn onClick={() => navigate('/projects')}>Case Study</GhostBtn>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [tIdx, sti] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => { const handleResize = () => setIsMobile(window.innerWidth < 768); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);

  useEffect(() => { const t = setInterval(() => sti(p => (p + 1) % testimonials.length), 6000); return () => clearInterval(t); }, []);

  const testimonials = [
    { q: "Bhagavan took responsibility for backend architecture during our 24-hour hackathon. He structured the MongoDB schema and REST API cleanly under tight time constraints, ensuring the deployment was stable before the final submission.", nm: 'M Dhana Pujitha', r: 'Team Lead \u00b7 24-Hour National Hackathon, Ramachandra College \u00d7 Brainovision' },
    { q: "During his AI/ML internship, Bhagavan adapted quickly to TensorFlow-based CNN workflows and implemented model evaluation pipelines with a Flask integration layer. He works independently and approaches problems methodically.", nm: 'Internship Mentor', r: 'SmartBridge (Remote) \u00b7 AI/ML Internship \u2014 Smart Sorting Project' },
    { q: "He consistently extended project scope where necessary, particularly in implementing secure OAuth flows and structured PDF parsing for the ATS Resume Builder. Shows initiative and ownership beyond assigned tasks.", nm: 'Project Guide', r: 'Faculty Advisor \u00b7 B.Tech Artificial Intelligence & Data Science' },
  ];

  return (
    <>
      <style>{CSS}</style>
      <MagneticCursor />
      <SBar />

      {/* â”€â”€ NOISE GRAIN â”€â”€ */}
      <div className="grain-overlay" />

      {/* â”€â”€ VIGNETTE â”€â”€ */}
      <div className="vignette" />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          VIDEO BACKGROUND
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#000000' }}>
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'brightness(0.7) contrast(1.1)' }}
        />
        {/* Localized vignette: stronger left side for typography readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 25% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,1) 100%)' }} />
        {/* Secondary center-top fade for cinematic depth */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%, transparent 30%, rgba(0,0,0,0.3) 80%)' }} />
        {/* Soft green environmental reflections */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(74,222,128,.02) 0%,transparent 70%)', filter: 'blur(60px)', animation: 'bloom 15s ease-in-out infinite', pointerEvents: 'none' }} />
        {/* Deep architectural shadow overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 40%, rgba(0,0,0,0.8) 100%)', pointerEvents: 'none' }} />
        {/* Atmospheric haze & depth fog */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top,rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, transparent 100%)', pointerEvents: 'none' }} />
      </div>

      {/* â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
          CINEMATIC HERO â€” IMMERSIVE AI OS
      â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */}
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* ── HERO GRID: TEXT LEFT + IMAGE CARD RIGHT ── */}
        <div style={{ position: 'relative', zIndex: 20, width: '100%', maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '7rem 1.5rem 4rem' : '6rem 2rem 5rem', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 340px', gap: isMobile ? '2.5rem' : '5rem', alignItems: 'center' }}>

          {/* ── LEFT COLUMN: TYPOGRAPHY ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16, 1, .3, 1], delay: .2 }} style={{ marginBottom: '1.5rem' }}>
              <span className="pill" style={{ fontSize: '.68rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                Open to Full-Time · 2026 Graduate
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16, 1, .3, 1], delay: .35 }} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,.8)' }} />
              <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.12em', textTransform: 'uppercase', fontFamily: 'monospace' }}>Systems Intelligence</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [.16, 1, .3, 1], delay: .45 }} style={{ fontSize: isMobile ? 'clamp(2.2rem,7vw,3rem)' : 'clamp(3.5rem,4.5vw,5rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-.04em', color: '#fff', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Architecting <br />
              <span className="serif-i" style={{ color: 'rgba(255,255,255,.9)', display: 'inline-block', transform: 'translateX(2px)' }}>intelligence.</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16, 1, .3, 1], delay: .7 }} style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.6)', marginBottom: '1.2rem', fontWeight: 300 }}>
              <Typewriter roles={['Full Stack Architect', 'Applied AI Engineer', 'Backend Specialist']} />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16, 1, .3, 1], delay: .85 }} style={{ fontSize: '.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,.5)', maxWidth: '480px', marginBottom: '2rem', fontWeight: 300, letterSpacing: '-0.01em' }}>
              Bridging the gap between predictive AI algorithms and highly scalable enterprise architectures. Backed by 3 internships spanning AI/ML, Data Science, and Full Stack development. Proven track record of architecting 4+ production-ready systems featuring OAuth 2.0, JWT security, and low-latency inference pipelines.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16, 1, .3, 1], delay: .95 }} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 300, fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', lineHeight: 1 }}>75%</div>
                <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.4)', fontFamily: 'monospace', textTransform: 'uppercase', marginTop: '.4rem', letterSpacing: '.05em' }}>B.Tech CGPA</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div>
                <div style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 300, fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', lineHeight: 1 }}>3</div>
                <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.4)', fontFamily: 'monospace', textTransform: 'uppercase', marginTop: '.4rem', letterSpacing: '.05em' }}>Internships</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div>
                <div style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 300, fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', lineHeight: 1 }}>2</div>
                <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.4)', fontFamily: 'monospace', textTransform: 'uppercase', marginTop: '.4rem', letterSpacing: '.05em' }}>Global Certs</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16, 1, .3, 1], delay: 1 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
              <CTAButton onClick={() => navigate('/projects')}>Explore Projects <ArrowRight size={14} strokeWidth={1.8} /></CTAButton>
              <a href={resumePdf} download className="liquid-glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem', padding: '.72rem 1.6rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,.08)', color: 'rgba(255,255,255,.7)', fontSize: '.85rem', textDecoration: 'none', transition: 'all .25s cubic-bezier(.16,1,.3,1)', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; }}>
                <Download size={13} strokeWidth={1.8} /> Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16, 1, .3, 1], delay: 1.15 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {[{ icon: Github, href: PROFILE.github, label: 'GitHub' }, { icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' }, { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' }].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.4rem', color: 'rgba(255,255,255,.35)', fontSize: '.72rem', textDecoration: 'none', transition: 'color .22s', fontFamily: 'Poppins,sans-serif' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.35)'}>
                  <Icon size={13} strokeWidth={1.6} /> {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: PROFILE IMAGE CARD + AI MODULES ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: isMobile ? 'center' : 'flex-end' }}>

            {/* Circular Profile Image with Dynamic 2D Rings */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4, ease: [.16, 1, .3, 1], delay: 0.3 }}
              style={{
                position: 'relative',
                width: isMobile ? '240px' : '320px',
                height: isMobile ? '240px' : '320px',
                marginBottom: '1rem',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Dynamic 2D Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '-15px', borderRadius: '50%', border: '1px dashed rgba(74,222,128,0.2)', borderLeftColor: 'rgba(74,222,128,0.8)', borderRightColor: 'rgba(74,222,128,0.8)', pointerEvents: 'none' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '-30px', borderRadius: '50%', border: '1px solid rgba(74,222,128,0.1)', borderTopColor: 'rgba(74,222,128,0.5)', borderBottomColor: 'rgba(74,222,128,0.5)', pointerEvents: 'none' }}
              />

              {/* Profile Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,255,255,0.05)',
                background: '#000000'
              }}>
                <img src={profileImg} alt="Bhagavan" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: '75% 25%',
                  transform: 'scale(1.3)', transformOrigin: '65% 30%',
                  filter: 'contrast(1.05) brightness(0.95)'
                }} />
                {/* Internal vignette for depth */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 100%)', pointerEvents: 'none' }} />
                {/* Rim light effect */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.15)', pointerEvents: 'none' }} />
              </div>
            </motion.div>

            {/* Badges below profile ring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9, ease: [.16, 1, .3, 1] }}
              style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-end', marginTop: '0.5rem', maxWidth: '340px' }}
            >
              <span className="pill" style={{ background: 'rgba(74,222,128,0.04)', border: '1px solid rgba(74,222,128,0.2)', color: 'rgba(74,222,128,0.9)', padding: '.35rem .8rem', backdropFilter: 'blur(10px)' }}>
                <Cpu size={12} /> Enterprise MERN Architect
              </span>
              <span className="pill" style={{ background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.2)', color: 'rgba(56,189,248,0.9)', padding: '.35rem .8rem', backdropFilter: 'blur(10px)' }}>
                <Brain size={12} /> Google GenAI Certified
              </span>
              <span className="pill" style={{ background: 'rgba(250,204,21,0.04)', border: '1px solid rgba(250,204,21,0.2)', color: 'rgba(250,204,21,0.9)', padding: '.35rem .8rem', backdropFilter: 'blur(10px)' }}>
                <Award size={12} /> National Hackathon Finalist
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom quote — desktop only */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.16, 1, .3, 1], delay: 1.8 }} style={{ position: 'absolute', bottom: '2.5rem', left: '4rem', zIndex: 15, display: isMobile ? 'none' : 'block' }}>
          <div style={{ fontSize: '.5rem', color: 'rgba(255,255,255,.22)', letterSpacing: '.18em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '.5rem' }}>Design Philosophy</div>
          <blockquote style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', fontStyle: 'italic', lineHeight: 1.65, fontFamily: "\"Source Serif 4\",Georgia,serif", fontWeight: 300, maxWidth: '340px' }}>"Build infrastructure that disappears into the experience."</blockquote>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }} style={{ position: 'absolute', bottom: '2.5rem', right: '4rem', display: isMobile ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem', zIndex: 15 }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,.3), transparent)', animation: 'float2 3s ease-in-out infinite' }} />
          <span style={{ fontSize: '.55rem', color: 'rgba(255,255,255,.3)', fontFamily: 'monospace', letterSpacing: '.12em', textTransform: 'uppercase' }}>Scroll</span>
        </motion.div>
      </div>





      {/* ──────────────────────────────────────────────────────────────────────────────
          SECTIONS BELOW THE FOLD
      ────────────────────────────────────────────────────────────────────────────── */}
      <TechMarquee />
      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* ── RECRUITER SNAPSHOT ── */}
        <section id="snapshot" style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>Recruiter Snapshot</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '2rem' }}>
            {[
              { t: 'AI Systems Engineer', d: 'Bridging high-performance React/Node architectures with Python-based Machine Learning pipelines. Delivering scalable inference layers.' },
              { t: 'Zero Ramp-up Time', d: 'Production-proven in enterprise MERN, Flask microservices, and OAuth workflows. Ready to architect, ship, and scale from day one.' },
              { t: 'Product-Minded', d: 'Obsessed with clean UX and strict API boundaries. Prioritizing JWT security, NoSQL optimizations, and latency reduction over hype.' }
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="liquid-glass"
                style={{ padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5), inset 0 -3px 20px rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', bottom: 0, left: 0, height: '3px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)', opacity: 0, transition: 'opacity 0.3s' }} className="hover-glow-line" />
                <div style={{ fontSize: '2.2rem', color: '#fff', fontWeight: 300, marginBottom: '1rem', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic' }}>{s.t}</div>
                <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, fontWeight: 300 }}>{s.d}</p>
                <style>{`.liquid-glass:hover .hover-glow-line { opacity: 1 !important; }`}</style>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>The Genesis</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '800px', marginBottom: '2rem' }}>
            Bridging intelligence & execution as an<br />
            <span className="serif-i" style={{ fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>AI Systems Engineer</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="liquid-glass"
            style={{ maxWidth: '1000px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.3fr 0.9fr', gap: isMobile ? '2rem' : '3rem', padding: isMobile ? '2rem' : '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden' }}
          >
            {/* Aurora blur */}
            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'conic-gradient(from 180deg at 50% 50%, rgba(74,222,128,0.05) 0deg, rgba(56,189,248,0.05) 180deg, transparent 360deg)', animation: 'spin 15s linear infinite', opacity: 0.5, pointerEvents: 'none' }} />
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(255,255,255,.6)', fontWeight: 300 }}>
                My engineering journey began with a fundamental question: <em style={{ color: '#fff' }}>How do we make software reason?</em> As an <strong style={{ color: '#fff', fontWeight: 500 }}>AI & Data Science (AIDS)</strong> undergraduate, I've dedicated years to understanding neural architectures, predictive modeling, and scalable data pipelines. From training convolutional networks to fine-tuning LLM interactions, my focus is building intelligent systems that solve real-world complexities.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(255,255,255,.55)', fontWeight: 300 }}>
                However, algorithms sitting in notebooks deliver zero business value. To bridge this gap, I evolved into a <strong style={{ color: '#fff', fontWeight: 500 }}>Full Stack Product Engineer</strong>. By coupling my analytical ML foundation with robust <strong style={{ color: '#fff', fontWeight: 500 }}>Python/Flask</strong> microservices and enterprise-grade <strong style={{ color: '#fff', fontWeight: 500 }}>MERN</strong> architectures, I architect end-to-end solutions. I don't just train models—I productionize them, integrating secure APIs, fluid React interfaces, and optimized database schemas to deliver cinematic SaaS experiences.
              </p>
            </div>

            {/* Right Side: Timeline & Taglines */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.8rem', borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)', paddingLeft: isMobile ? '0' : '2.5rem', paddingTop: isMobile ? '1.5rem' : '0', borderTop: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
               <div>
                 <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.12em', fontFamily: 'monospace', marginBottom: '1.2rem' }}>Key Milestones</div>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                    <div style={{ borderLeft: '1px solid rgba(74,222,128,0.3)', paddingLeft: '1.2rem', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-4.5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.6)' }} />
                      <div style={{ fontSize: '.7rem', color: 'rgba(74,222,128,0.9)', fontFamily: 'monospace', marginBottom: '.3rem', letterSpacing: '.05em' }}>2026 (EXPECTED)</div>
                      <div style={{ fontSize: '.9rem', color: '#fff', fontWeight: 500 }}>B.Tech AI & Data Science</div>
                      <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.4)', marginTop: '.2rem', fontWeight: 300 }}>Ramachandra College · 75% CGPA</div>
                    </div>
                    
                    <div style={{ borderLeft: '1px solid rgba(56,189,248,0.3)', paddingLeft: '1.2rem', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-4.5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px rgba(56,189,248,0.6)' }} />
                      <div style={{ fontSize: '.7rem', color: 'rgba(56,189,248,0.9)', fontFamily: 'monospace', marginBottom: '.3rem', letterSpacing: '.05em' }}>2025</div>
                      <div style={{ fontSize: '.9rem', color: '#fff', fontWeight: 500 }}>MERN & AI Internships</div>
                      <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.4)', marginTop: '.2rem', fontWeight: 300 }}>StudyOwl · SmartBridge</div>
                    </div>
                    
                    <div style={{ borderLeft: '1px solid rgba(250,204,21,0.3)', paddingLeft: '1.2rem', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-4.5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: '#facc15', boxShadow: '0 0 8px rgba(250,204,21,0.6)' }} />
                      <div style={{ fontSize: '.7rem', color: 'rgba(250,204,21,0.9)', fontFamily: 'monospace', marginBottom: '.3rem', letterSpacing: '.05em' }}>2024</div>
                      <div style={{ fontSize: '.9rem', color: '#fff', fontWeight: 500 }}>ML & Data Science Intern</div>
                      <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.4)', marginTop: '.2rem', fontWeight: 300 }}>Blackbucks</div>
                    </div>
                 </div>
               </div>

               <div>
                 <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.12em', fontFamily: 'monospace', marginBottom: '1rem' }}>Core Disciplines</div>
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
                   <span className="pill" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.68rem', padding: '0.3rem 0.8rem', border: '1px solid rgba(255,255,255,0.08)' }}>Systems Design</span>
                   <span className="pill" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.68rem', padding: '0.3rem 0.8rem', border: '1px solid rgba(255,255,255,0.08)' }}>Deep Learning</span>
                   <span className="pill" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.68rem', padding: '0.3rem 0.8rem', border: '1px solid rgba(255,255,255,0.08)' }}>API Security</span>
                   <span className="pill" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.68rem', padding: '0.3rem 0.8rem', border: '1px solid rgba(255,255,255,0.08)' }}>Cloud Deployment</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* ── SKILLS / PRODUCTION DEPLOYMENT STACK ── */}
        <section id="skills" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>Production Deployment Stack</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '600px', marginBottom: '3rem' }}>
            An arsenal built for<br />
            <span className="serif-i" style={{ fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>scale & resilience</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '1.5rem' }}>
            {[
              {
                l: 'AI & Machine Learning', icon: Brain, desc: 'Architecting neural networks and deploying autonomous agent logic into scalable API endpoints.', sk: [
                  { n: 'TensorFlow', i: 'devicon-tensorflow-original' },
                  { n: 'PyTorch', i: 'devicon-pytorch-original' },
                  { n: 'Keras', i: 'devicon-keras-plain' },
                  { n: 'OpenCV', i: 'devicon-opencv-plain' },
                  { n: 'Pandas', i: 'devicon-pandas-plain' },
                  { n: 'Scikit-learn', i: 'devicon-scikitlearn-plain' }
                ]
              },
              {
                l: 'Frontend Ecosystem', icon: Layers, desc: 'Crafting cinematic, state-managed user interfaces with minimal render cycles and maximum performance.', sk: [
                  { n: 'React.js', i: 'devicon-react-original' },
                  { n: 'Next.js', i: 'devicon-nextjs-plain' },
                  { n: 'TypeScript', i: 'devicon-typescript-plain' },
                  { n: 'Tailwind CSS', i: 'devicon-tailwindcss-original' },
                  { n: 'Framer Motion', i: 'devicon-framermotion-original' },
                  { n: 'Vite', i: 'devicon-vitejs-plain' }
                ]
              },
              {
                l: 'Backend Microservices', icon: Cpu, desc: 'Writing strongly-typed, concurrent, and highly available server-side logic and robust APIs.', sk: [
                  { n: 'Node.js', i: 'devicon-nodejs-plain' },
                  { n: 'Express.js', i: 'devicon-express-original' },
                  { n: 'Python', i: 'devicon-python-plain' },
                  { n: 'Flask', i: 'devicon-flask-original' },
                  { n: 'FastAPI', i: 'devicon-fastapi-plain' },
                  { n: 'Java', i: 'devicon-java-plain' }
                ]
              },
              {
                l: 'Data & Architecture', icon: Database, desc: 'Designing optimized schemas for high-throughput reads, real-time sync, and ACID transactions.', sk: [
                  { n: 'MongoDB', i: 'devicon-mongodb-plain' },
                  { n: 'PostgreSQL', i: 'devicon-postgresql-plain' },
                  { n: 'MySQL', i: 'devicon-mysql-plain' },
                  { n: 'Redis', i: 'devicon-redis-plain' },
                  { n: 'Prisma', i: 'devicon-typescript-plain' },
                  { n: 'GraphQL', i: 'devicon-graphql-plain' }
                ]
              },
              {
                l: 'Security & Cloud DevOps', icon: Shield, desc: 'Implementing zero-trust auth flows, containerized deployments, and seamless CI/CD pipelines.', sk: [
                  { n: 'Docker', i: 'devicon-docker-plain' },
                  { n: 'AWS', i: 'devicon-amazonwebservices-original' },
                  { n: 'Linux', i: 'devicon-linux-plain' },
                  { n: 'Git', i: 'devicon-git-plain' },
                  { n: 'OAuth 2.0', i: null },
                  { n: 'JWT', i: null }
                ]
              },
              {
                l: 'Tools & Utilities', icon: Zap, desc: 'Leveraging top-tier tooling for rapid iteration, debugging, and maintaining code hygiene.', sk: [
                  { n: 'Postman', i: 'devicon-postman-plain' },
                  { n: 'GitHub Actions', i: 'devicon-github-original' },
                  { n: 'Webpack', i: 'devicon-webpack-plain' },
                  { n: 'Vercel', i: 'devicon-vercel-original' },
                  { n: 'Figma', i: 'devicon-figma-plain' },
                  { n: 'VS Code', i: 'devicon-vscode-plain' }
                ]
              },
            ].map((g, i) => (
              <GlassSkillCard key={i} group={g} index={i} />
            ))}
          </div>
        </section>

        {/* ── ENGINEERING PHILOSOPHY & SYSTEM ARCHITECTURE ── */}
        <section style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>Engineering Philosophy & Architecture</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '700px', marginBottom: '3rem' }}>
            Designing for<br />
            <span className="serif-i" style={{ fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>scale, security & autonomy</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: Zap, title: 'Engineering Philosophy', desc: 'Infrastructure should disappear into the experience. I believe in writing modular, highly cohesive microservices that prioritize predictable behavior and maintainability over over-engineered abstractions.' },
              { icon: Layers, title: 'Scalability & Database Optimization', desc: 'I design database schemas anticipating exponential growth. By implementing indexing in MongoDB and normalizing relational data, I build persistence layers capable of handling horizontal scaling with minimal query latency.' },
              { icon: Shield, title: 'Zero-Compromise Security (OAuth/JWT)', desc: 'Security is a Day-0 requirement. I enforce stateless JWT session management, secure HttpOnly cookies, and strict CORS. My architectures natively abstract password liabilities through enterprise OAuth 2.0 flows.' },
              { icon: GitBranch, title: 'AI Workflow Pipelines', desc: 'I isolate heavy ML inference into standalone Python/Flask microservices, preventing thread-blocking in Node.js event loops. This decoupled architecture allows for dynamic autoscaling of the AI layer independent of the core API.' },
              { icon: Search, title: 'Problem Solving Approach', desc: 'I utilize an API-first methodology. Before writing business logic, I define strict request/response contracts and error boundaries. This reduces technical debt and guarantees seamless frontend-backend synchronization.' },
              { icon: Cpu, title: 'Production Deployment Strategy', desc: 'Code is only as good as its deployment. I rely on containerized environments (Docker), robust CI/CD pipelines, and environment-variable isolation to ensure that local success perfectly translates to production stability.' }
            ].map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass"
                style={{ padding: '3rem 2.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden', transition: 'all .4s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.5), inset 0 20px 40px rgba(255,255,255,0.03)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div style={{ position: 'absolute', top: 0, left: '10%', width: '80%', height: '2px', background: 'radial-gradient(ellipse, rgba(255,255,255,0.6), transparent)', opacity: 0, transition: 'opacity 0.4s' }} className="top-glow-line" />
                <p.icon size={26} color="rgba(74,222,128,0.8)" strokeWidth={1.8} style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 12px rgba(74,222,128,0.4))' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 500, color: '#fff', marginBottom: '1rem' }}>{p.title}</h3>
                <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</p>
                <style>{`.liquid-glass:hover .top-glow-line { opacity: 1 !important; }`}</style>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS / CASE STUDIES ── */}
        <section id="projects" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <SectionLabel>Architecture Case Studies</SectionLabel>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12 }}>
                Engineering<br />
                <span className="serif-i" style={{ fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>real-world solutions</span>
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '.6rem' }}>
              <GhostBtn onClick={() => navigate('/projects')}>All Projects <ArrowRight size={13} strokeWidth={1.8} /></GhostBtn>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                n: '01', tag: 'AI Systems · Full-Stack · Security',
                title: 'Secure Multi-Model AI Chatbot Infrastructure',
                stack: ['React.js', 'Flask', 'Gemini API', 'OpenAI API', 'JWT'],
                problem: 'Client-side AI wrappers expose expensive API keys and lack session persistence, rendering them unusable for secure enterprise deployment.',
                approach: 'Architected a decoupled system: a React SPA communicating via stateless JWTs with a Python/Flask microservice. The backend securely manages API keys, parses prompt structures, and handles dual-provider fallbacks (OpenAI & Gemini). Implemented server-side conversation memory.',
                result: 'Achieved sub-second inference latency with 100% hidden credentials. Established a highly maintainable pipeline ready for autonomous agent integration.',
                stats: [{ v: '<1s', l: 'Inference Latency' }, { v: '100%', l: 'Key Isolation' }, { v: '2', l: 'LLM Providers' }],
                github: PROFILE.github,
                diagram: [
                  { label: 'React UI', icon: 'devicon-react-original' },
                  { label: 'Flask Microservice', icon: 'devicon-flask-original', hl: true },
                  { label: 'JWT Auth', icon: null },
                  { label: 'OpenAI / Gemini', icon: 'devicon-python-plain' }
                ]
              },
              {
                n: '02', tag: 'Enterprise MERN · System Design',
                title: 'ATS-Optimized Resume Builder Platform',
                stack: ['Node.js', 'Express', 'MongoDB', 'React.js', 'OAuth 2.0'],
                problem: 'Traditional PDF parsers fail at semantic keyword matching, while manual user data entry introduces friction. Schema rigidity prevented agile updates.',
                approach: 'Designed a MERN stack application utilizing MongoDB’s flexible document model to handle highly variable resume structures. Built an Express.js REST API with Google/GitHub OAuth 2.0 for frictionless onboarding. Integrated a backend ATS-scoring algorithm.',
                result: 'Delivered a production-ready SaaS capable of secure session handling and dynamic PDF generation. Streamlined the job application preparation process significantly.',
                stats: [{ v: 'OAuth', l: 'Auth Pipeline' }, { v: 'NoSQL', l: 'Dynamic Schema' }, { v: 'ATS', l: 'Scoring Engine' }],
                github: PROFILE.github,
                diagram: [
                  { label: 'React SPA', icon: 'devicon-react-original' },
                  { label: 'Express API', icon: 'devicon-express-original' },
                  { label: 'OAuth 2.0', icon: 'devicon-google-plain', hl: true },
                  { label: 'MongoDB', icon: 'devicon-mongodb-plain' }
                ]
              },
              {
                n: '03', tag: 'Machine Learning · NLP · APIs',
                title: 'Fake News Inference Engine',
                stack: ['Python', 'Flask', 'Scikit-Learn', 'TF-IDF', 'React.js'],
                problem: 'Deploying heavy NLP transformers for text classification leads to high GPU costs and unmanageable inference latencies in production.',
                approach: 'Engineered a highly optimized TF-IDF vectorization pipeline coupled with a Logistic Regression classifier. Packaged the trained model into a Flask REST API, allowing asynchronous text payloads for real-time misinformation scoring.',
                result: 'Achieved 90%+ classification accuracy with zero GPU dependency. Reduced inference time to <200ms, proving that intelligent trade-offs outperform brute-force deep learning.',
                stats: [{ v: '90%+', l: 'Accuracy' }, { v: '<200ms', l: 'Inference Time' }, { v: '0', l: 'GPU Dependency' }],
                github: PROFILE.github,
                diagram: [
                  { label: 'Client Request', icon: null },
                  { label: 'Flask Endpoint', icon: 'devicon-flask-original' },
                  { label: 'TF-IDF Vectorizer', icon: 'devicon-python-plain', hl: true },
                  { label: 'Logistic Regression', icon: null }
                ]
              },
              {
                n: '04', tag: 'Data Science · Predictive Analytics',
                title: 'Career Path Recommendation System',
                stack: ['Python', 'Pandas', 'Scikit-Learn', 'Machine Learning'],
                problem: 'Generic career counseling lacks data-driven objectivity and fails to account for multidimensional skill intersections.',
                approach: 'Built a predictive classification system mapping individual user metrics (skills, quiz scores, ATS performance) to optimal career trajectories. Designed robust feature engineering pipelines using Pandas.',
                result: 'Delivered an interpretable decision engine capable of instantly ranking top career paths, demonstrating end-to-end data science maturity from raw datasets to predictive APIs.',
                stats: [{ v: '100%', l: 'Data Driven' }, { v: 'O(1)', l: 'Prediction Time' }, { v: 'Multi', l: 'Feature Matrix' }],
                github: PROFILE.github,
                diagram: [
                  { label: 'Raw Data', icon: 'devicon-pandas-plain' },
                  { label: 'Feature Engineering', icon: null, hl: true },
                  { label: 'Model Pipeline', icon: 'devicon-scikitlearn-plain' },
                  { label: 'Ranked Output', icon: null }
                ]
              }
            ].map((p, pi) => (
              <ProjectCard key={pi} project={p} navigate={navigate} isMobile={isMobile} />
            ))}

            {/* Open Source / Github Activity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="liquid-glass"
              style={{ padding: '2rem', border: '1px solid rgba(255,255,255,.08)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem', transition: 'all .4s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255,255,255,0.05), inset 0 0 20px rgba(255,255,255,0.02)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 500, color: '#fff', marginBottom: '.6rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}><Github size={20} /> Open Source & GitHub Engineering</div>
                <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.6, maxWidth: '600px', fontWeight: 300 }}>
                  Beyond flagship applications, I consistently push code involving CNN models for plant disease classification, NLP-based Fake News Detectors, and career recommendation algorithms. My repositories reflect clean commit histories, structured documentation, and modular logic.
                </div>
              </div>
              <CTAButton href={PROFILE.github}>View GitHub Profile <ArrowUpRight size={14} strokeWidth={2} /></CTAButton>
            </motion.div>
          </div>
        </section>

        {/* ── TECHNICAL TRADE-OFFS ── */}
        <section style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>Technical Trade-offs</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '640px', marginBottom: '3rem' }}>
            Decisions driven by<br />
            <span className="serif-i" style={{ fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>architecture, not hype</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
            {[
              { d: 'Flask over Node.js for ML Inference', r: 'Node.js is asynchronous and excellent for I/O, but blocks the event loop on heavy CPU tasks like matrix multiplication. I offload AI inference to Python/Flask microservices, utilizing native C-bindings in NumPy/TensorFlow to maintain sub-second response times without crashing the main API.' },
              { d: 'MongoDB over PostgreSQL for Resumes', r: 'Resume fields (projects, dynamic arrays of skills, nested objects) represent highly unstructured data. Forcing this into SQL requires heavy joins and rigid migrations. MongoDB’s document model allowed 10x faster iteration speeds for the ATS builder.' },
              { d: 'JWT over Stateful Sessions', r: 'To ensure horizontal scalability, I chose stateless JSON Web Tokens. Storing sessions in memory restricts the backend to a single instance or forces Redis caching. JWTs allowed me to easily deploy stateless microservices capable of scaling independently.' },
              { d: 'TF-IDF + Logistic Regression vs. Transformers', r: 'For the Fake News Detection project, deploying a 7B parameter LLM would require heavy GPU instances. I utilized TF-IDF with Logistic Regression—achieving 90%+ accuracy on the test set while running instantly on a standard CPU container.' },
            ].map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass"
                style={{ padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden', transition: 'all .4s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.4)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4), inset 5px 0 30px rgba(239,68,68,0.05)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '4px', background: 'linear-gradient(to bottom, rgba(239,68,68,0.8), transparent)', opacity: 0, transition: 'opacity 0.4s' }} className="side-glow-line" />
                <div style={{ display: 'flex', gap: '.7rem', marginBottom: '.9rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(239,68,68,0.8)', flexShrink: 0, marginTop: '8px', boxShadow: '0 0 10px rgba(239,68,68,0.5)' }} />
                  <div style={{ fontSize: '.9rem', fontWeight: 500, color: '#fff', lineHeight: 1.4, position: 'relative', zIndex: 2 }}>{t.d}</div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.8, paddingLeft: '.85rem', fontWeight: 300, position: 'relative', zIndex: 2 }}>{t.r}</p>
                <style>{`.liquid-glass:hover .side-glow-line { opacity: 1 !important; }`}</style>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CINEMATIC TIMELINE (CREDENTIALS) ── */}
        <section style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>Engineering Evolution</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '540px', marginBottom: '4rem' }}>
            A trajectory of<br />
            <span className="serif-i" style={{ fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>constant acceleration</span>
          </h2>

          <div style={{ position: 'relative', paddingLeft: isMobile ? '1.5rem' : '3rem', maxWidth: '800px' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: isMobile ? '0' : '1.5rem', width: '1px', background: 'linear-gradient(to bottom, rgba(74,222,128,0.5), rgba(255,255,255,0.05))' }} />

            {[
              { y: '2025', type: 'INTERNSHIP', t: 'MERN Stack Engineering Intern', i: 'StudyOwl Education Pvt Ltd', desc: 'Engineered backend architectures and RESTful APIs using Node.js/Express, accelerating data delivery to React frontends.' },
              { y: '2025', type: 'INTERNSHIP', t: 'AI/ML Computer Vision Engineer', i: 'SmartBridge', desc: 'Developed Smart Sorting Solutions applying CNNs and real-time image processing pipelines.' },
              { y: '2024', type: 'INTERNSHIP', t: 'Machine Learning Intern', i: 'Blackbucks', desc: 'Implemented predictive models and optimized data cleaning workflows on large datasets.' },
              { y: '2025', type: 'CERTIFICATION', t: 'Google & IBM Generative AI', i: 'Professional Certifications', desc: 'Mastered Large Language Models, Prompt Engineering, and AI application lifecycles.' },
              { y: '2025', type: 'HACKATHON', t: '24-Hour National Finalist', i: 'Brainovision', desc: 'Architected an end-to-end prototype under extreme time constraints, proving rapid delivery capabilities.' },
            ].map((a, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ position: 'relative', marginBottom: '1.5rem', padding: '1.5rem', borderRadius: '16px', transition: 'all .4s ease', border: '1px solid transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,.02)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                  e.currentTarget.style.backdropFilter = 'blur(10px)';
                  e.currentTarget.querySelector('.timeline-dot').style.transform = 'scale(1.5)';
                  e.currentTarget.querySelector('.timeline-dot').style.background = 'rgba(74,222,128,0.8)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.backdropFilter = 'none';
                  e.currentTarget.querySelector('.timeline-dot').style.transform = 'scale(1)';
                  e.currentTarget.querySelector('.timeline-dot').style.background = '#020503';
                }}
              >
                <div className="timeline-dot" style={{ position: 'absolute', left: isMobile ? '-1.78rem' : '-3.28rem', top: '2rem', width: '9px', height: '9px', borderRadius: '50%', background: '#020503', border: '1px solid rgba(74,222,128,0.8)', boxShadow: '0 0 10px rgba(74,222,128,0.4)', transition: 'all 0.3s ease' }} />
                <div style={{ display: 'inline-block', fontSize: '.65rem', color: 'rgba(74,222,128,0.8)', fontFamily: 'monospace', letterSpacing: '.1em', marginBottom: '.6rem', padding: '.2rem .6rem', background: 'rgba(74,222,128,0.05)', borderRadius: '4px', border: '1px solid rgba(74,222,128,0.1)' }}>{a.y} · {a.type}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 500, color: '#fff', marginBottom: '.3rem' }}>{a.t}</div>
                <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.6)', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', marginBottom: '.8rem' }}>{a.i}</div>
                <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, maxWidth: '600px', fontWeight: 300 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── IMPACT METRICS ── */}
        <section style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { val: '3', label: 'Engineering Internships' },
              { val: '10+', label: 'Tech Stack Mastery' },
              { val: '5+', label: 'Production-Grade Projects' },
              { val: '100%', label: 'Commitment to Scale' },
            ].map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="liquid-glass"
                style={{ padding: '3.5rem 2rem', textAlign: 'center', borderRadius: '20px', border: '1px solid rgba(255,255,255,.08)', transition: 'all .4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), inset 0 0 30px rgba(255,255,255,0.05)';
                  e.currentTarget.querySelector('.metric-val').style.textShadow = '0 0 20px rgba(255,255,255,0.8)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('.metric-val').style.textShadow = 'none';
                }}
              >
                <div className="metric-val" style={{ fontSize: '3.5rem', fontWeight: 300, color: '#fff', marginBottom: '.5rem', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', transition: 'text-shadow 0.4s ease' }}>{m.val}</div>
                <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.5)', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '.1em' }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CURRENTLY BUILDING (THE HORIZON) ── */}
        <section style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>Currently Building</SectionLabel>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '600px' }}>
              Exploring the edges of<br />
              <span className="serif-i" style={{ fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>modern infrastructure</span>
            </h2>
            <p style={{ maxWidth: '400px', fontSize: '.9rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.8, fontWeight: 300 }}>
              The best engineers never stop learning. I am actively researching scalable deployment patterns and next-gen AI workflows.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { tag: 'Agentic Workflows', title: 'LangChain & Multi-Agent AI', desc: 'Moving beyond single-prompt LLMs to deterministic workflows where AI agents can query databases, execute code, and self-correct.' },
              { tag: 'Distributed Systems', title: 'Docker & Redis', desc: 'Containerizing MERN and Flask services for isolated deployments, and implementing Redis to cache heavy database queries and reduce latency.' },
              { tag: 'Performance', title: 'Next.js 14 & Server Components', desc: 'Transitioning from React SPAs to SSR/SSG architectures to maximize SEO, lower initial load times, and improve Core Web Vitals.' }
            ].map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass"
                style={{ padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5), inset 0 0 40px rgba(168,85,247,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.8), transparent)', opacity: 0, transition: 'opacity 0.4s' }} className="horizon-glow" />
                <span style={{ display: 'inline-block', padding: '.2rem .6rem', borderRadius: '4px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', fontSize: '.6rem', color: 'rgba(255,255,255,.6)', fontFamily: 'monospace', letterSpacing: '.05em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>{exp.tag}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: '#fff', marginBottom: '.8rem' }}>{exp.title}</h3>
                <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.8, fontWeight: 300 }}>{exp.desc}</p>
                <style>{`.liquid-glass:hover .horizon-glow { opacity: 1 !important; }`}</style>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <SectionLabel>Peer Feedback</SectionLabel>
            <div style={{ position: 'relative', minHeight: '200px', marginBottom: '2.5rem' }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ position: i === tIdx ? 'relative' : 'absolute', top: 0, left: 0, right: 0, opacity: i === tIdx ? 1 : 0, transform: i === tIdx ? 'none' : 'translateY(10px)', visibility: i === tIdx ? 'visible' : 'hidden', transition: 'opacity .45s ease,transform .45s ease' }}>
                  <blockquote style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: 'rgba(255,255,255,.75)', lineHeight: 1.72, letterSpacing: '.01em', marginBottom: '1.8rem', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', fontWeight: 300 }}>
                    "{t.q}"
                  </blockquote>
                  <div style={{ fontSize: '.88rem', fontWeight: 500, color: '#fff', marginBottom: '.2rem' }}>{t.nm}</div>
                  <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.25)', fontFamily: 'monospace', letterSpacing: '.04em' }}>{t.r}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.9rem' }}>
              <NavBtn onClick={() => sti(p => (p - 1 + testimonials.length) % testimonials.length)}><ChevronLeft size={14} strokeWidth={1.8} /></NavBtn>
              <div style={{ display: 'flex', gap: '.4rem' }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => sti(i)} style={{ width: i === tIdx ? '18px' : '6px', height: '6px', borderRadius: '3px', border: 'none', cursor: 'pointer', background: i === tIdx ? '#fff' : 'rgba(255,255,255,.15)', transition: 'all .25s' }} />
                ))}
              </div>
              <NavBtn onClick={() => sti(p => (p + 1) % testimonials.length)}><ChevronRight size={14} strokeWidth={1.8} /></NavBtn>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', borderTop: '1px solid rgba(255,255,255,.06)', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="liquid-glass-strong" style={{ borderRadius: '28px', padding: isMobile ? '3rem 1.5rem' : '5rem 4rem', border: '1px solid rgba(255,255,255,.1)', position: 'relative', overflow: 'hidden' }}>
            {/* Bg orb */}
            <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '50%', height: '100%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 70%)', pointerEvents: 'none', animation: 'orb0 12s ease-in-out infinite' }} />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
              <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1.5rem' }}>Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(2.4rem,4.5vw,3.8rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '-.04em', marginBottom: '1.4rem' }}>
                Ready to architect<br />
                <span className="serif-i" style={{ fontSize: 'clamp(2.5rem,4.6vw,3.9rem)' }}>from day one.</span>
              </h2>
              <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.82, marginBottom: '2.5rem', maxWidth: '440px', fontWeight: 300 }}>
                Seeking full-time software engineering roles. Equipped with production-level MERN, Python APIs, AI integration, and cloud deployment expertise. Let's discuss system architecture.
              </p>
              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <CTAButton href={`mailto:${PROFILE.email}`}>
                  Contact Me <ArrowRight size={14} strokeWidth={1.8} />
                </CTAButton>
                <GhostBtn onClick={() => navigate('/projects')}>View Projects</GhostBtn>
              </div>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1.75rem', borderTop: '1px solid rgba(255,255,255,.07)' }}>
                {[{ icon: Mail, href: `mailto:${PROFILE.email}`, l: PROFILE.email }, { icon: Phone, href: `tel:${PROFILE.phone}`, l: PROFILE.phone }].map((c, i) => (
                  <a key={i} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: 'rgba(255,255,255,.25)', textDecoration: 'none', fontSize: '.82rem', transition: 'color .18s', fontWeight: 300 }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,.7)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.25)'}>
                    <c.icon size={12} strokeWidth={1.8} style={{ color: 'rgba(255,255,255,.35)' }} />{c.l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BIG CINEMATIC GLASSY FOOTER ── */}
        <TechMarquee />
        <Footer />
      </div>
    </>
  );
}
