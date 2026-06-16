/* ═══════════════════════════════════════════════════════════════════════════
   SHARED COMPONENTS — AI-OS Cinematic Architecture
   Reusable components used across all portfolio pages.
   ═══════════════════════════════════════════════════════════════════════════ */

import React, { useState, useEffect, useRef } from "react";
import { C, E, MS, ICONS } from "../styles/tokens";

/* ═══════════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════════ */

/** Intersection Observer hook — triggers once when element enters viewport */
export function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/** Mobile breakpoint hook */
export function useMob() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return m;
}

/* ═══════════════════════════════════════════════════════════
   MAGNETIC CURSOR — unified premium cursor with dot + ring
   ═══════════════════════════════════════════════════════════ */
export function MagneticCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    /* Skip on touch devices — no cursor needed */
    if (typeof window === "undefined" || window.matchMedia("(hover:none),(pointer:coarse)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let rSize = 36, targetRSize = 36;
    let magEl = null;
    let magOX = 0, magOY = 0, targetMagOX = 0, targetMagOY = 0;
    let rafId = null;
    let visible = false;
    let lastMagScan = 0; /* Throttle magnetic element scanning */
    let cachedMagEls = [];
    const lerp = (a, b, t) => a + (b - a) * t;

    const scanMagneticElements = () => {
      const now = performance.now();
      if (now - lastMagScan > 500) { /* Rescan every 500ms instead of every frame */
        cachedMagEls = Array.from(document.querySelectorAll("[data-magnetic]"));
        lastMagScan = now;
      }
    };

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity  = "1";
        ring.style.opacity = "1";
      }
      scanMagneticElements();
      let found = null;
      for (let i = 0; i < cachedMagEls.length; i++) {
        const el = cachedMagEls[i];
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dist = Math.hypot(mx - cx, my - cy);
        if (dist < Math.max(r.width, r.height) * 0.65) { found = el; break; }
      }
      if (found) {
        magEl = found;
        const r = found.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        targetMagOX = (mx - cx) * 0.38;
        targetMagOY = (my - cy) * 0.38;
        targetRSize = 58;
      } else {
        if (magEl) { magEl.style.transform = ""; magEl.style.transition = `transform 400ms ${E}`; }
        magEl = null; targetMagOX = 0; targetMagOY = 0; targetRSize = 36;
      }
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0"; ring.style.opacity = "0";
      if (magEl) { magEl.style.transform = ""; magEl = null; }
    };

    const onDown = () => {
      targetRSize = 22;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%) scale(0.5)`;
    };
    const onUp = () => {
      targetRSize = magEl ? 58 : 36;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%) scale(1)`;
    };

    const onOverInteractive = (e) => {
      if (e.target.closest("a,button,[data-magnetic],input,textarea,select")) {
        ring.style.borderColor = "rgba(255,255,255,0.9)";
        ring.style.background  = "rgba(255,255,255,0.06)";
      } else {
        ring.style.borderColor = "rgba(255,255,255,0.45)";
        ring.style.background  = "transparent";
      }
    };

    /* ── GPU-ACCELERATED TICK — uses translate3d instead of left/top ── */
    const tick = () => {
      /* Dot: instant follow via GPU transform (no layout trigger) */
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%)`;

      /* Ring: smoothly interpolate position */
      rx = lerp(rx, mx, 0.13); ry = lerp(ry, my, 0.13);
      rSize = lerp(rSize, targetRSize, 0.14);
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      ring.style.width = rSize + "px"; ring.style.height = rSize + "px";

      if (magEl) {
        magOX = lerp(magOX, targetMagOX, 0.14);
        magOY = lerp(magOY, targetMagOY, 0.14);
        magEl.style.transform = `translate3d(${magOX}px, ${magOY}px, 0)`;
        magEl.style.transition = "none";
      } else {
        magOX = lerp(magOX, 0, 0.12);
        magOY = lerp(magOY, 0, 0.12);
      }
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove",  onMove,            { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseover",  onOverInteractive, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseover",  onOverInteractive);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="mc-dot" ref={dotRef} style={{
        position: "fixed", top: 0, left: 0,
        width: "8px", height: "8px", borderRadius: "50%",
        background: "#FFFFFF",
        pointerEvents: "none", zIndex: 99999,
        opacity: 0,
        willChange: "transform",
        transform: "translate3d(-200px, -200px, 0)",
        transition: "opacity 200ms ease",
        mixBlendMode: "difference",
      }}/>
      <div id="mc-ring" ref={ringRef} style={{
        position: "fixed", top: 0, left: 0,
        width: "36px", height: "36px", borderRadius: "50%",
        border: "1.5px solid rgba(255,255,255,0.45)",
        background: "transparent",
        pointerEvents: "none", zIndex: 99998,
        opacity: 0,
        willChange: "transform, width, height",
        transform: "translate3d(-200px, -200px, 0)",
        transition: "border-color 180ms ease, background 180ms ease, opacity 200ms ease",
        mixBlendMode: "difference",
      }}/>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════════════════ */
export function ScrollBar() {
  const [pct, setPct] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    const fn = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
        raf.current = null;
      });
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => { window.removeEventListener("scroll", fn); if (raf.current) cancelAnimationFrame(raf.current); };
  }, []);
  return (
    <div id="scroll-prog">
      <div id="scroll-prog-bar" style={{ width: `${pct}%` }}/>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COUNTER — animated number with suffix parsing
   ═══════════════════════════════════════════════════════════ */
export function Counter({ value, suffix = "", triggered }) {
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!triggered || done.current) return;
    done.current = true;
    const raw = parseInt(String(value).replace(/[^0-9]/g, "")) || 0;
    const dur = 1200, t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      setN(Math.floor(raw * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick); else setN(raw);
    };
    requestAnimationFrame(tick);
  }, [triggered, value]);

  const fmt = (x) => {
    const s = String(value);
    if (suffix) return `${x}${suffix}`;
    if (s.includes("K"))  return `${Math.floor(x / 1000)}K+`;
    if (s.includes("%"))  return `${x}%`;
    if (s.endsWith("+"))  return `${x}+`;
    if (s.includes("–"))  return s;
    return `${x}`;
  };

  return <>{fmt(n)}</>;
}

/* ═══════════════════════════════════════════════════════════
   MONO LABEL — uppercase monospace label
   ═══════════════════════════════════════════════════════════ */
export function ML({ children, color = "rgba(255,255,255,0.55)", style = {} }) {
  return (
    <span style={{
      display: "block",
      fontFamily: "'DM Mono', monospace",
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
      ...style,
    }}>{children}</span>
  );
}

/* ═══════════════════════════════════════════════════════════
   TERMINAL CURSOR — blinking cursor
   ═══════════════════════════════════════════════════════════ */
export function TermCursor() {
  return (
    <span style={{
      display: "inline-block", width: "8px", height: "1.1em",
      background: "#FFFFFF", marginLeft: "3px", verticalAlign: "middle",
      animation: "_blink 1.1s step-end infinite", borderRadius: "1px",
    }}/>
  );
}

/* ═══════════════════════════════════════════════════════════
   DEVICON IMAGE — colored tech icon
   ═══════════════════════════════════════════════════════════ */
export function DI({ name, size = 18, extraStyle = {} }) {
  const src = ICONS[name];
  if (!src) return null;
  return (
    <img src={src} alt={name} className="di" width={size} height={size} loading="lazy"
      style={{ display: "block", flexShrink: 0, borderRadius: "3px", ...extraStyle }} />
  );
}

/* ═══════════════════════════════════════════════════════════
   TECH TAG — hoverable skill pill with icon
   ═══════════════════════════════════════════════════════════ */
export function Tag({ name, visible = true, delay = 0 }) {
  const [h, setH] = useState(false);
  return (
    <span
      data-magnetic
      className="liquid-glass"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        padding: "6px 12px 6px 8px", borderRadius: "6px",
        border: `1px solid ${h ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.07)"}`,
        fontFamily: "'DM Mono', monospace", fontSize: "12px",
        color: h ? "#FFFFFF" : "rgba(255,255,255,0.45)",
        userSelect: "none",
        transition: `border-color ${MS.fast} ${E}, color ${MS.fast} ${E}`,
        opacity: visible ? 1 : 0,
        animation: visible ? `_tagPop ${MS.slow} ${E} ${delay}s both` : "none",
      }}
    >
      <DI name={name} size={15} extraStyle={{ opacity: h ? 1 : 0.70, transition: `opacity ${MS.fast} ${E}` }} />
      {name}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   MARQUEE — infinite scroll ticker with icons
   ═══════════════════════════════════════════════════════════ */
export function Marquee({ items = [], speed = 36 }) {
  const doubled = [...items, ...items];
  return (
    <div style={{
      overflow: "hidden",
      borderTop: `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
      padding: "10px 0",
      background: C.surface,
      position: "relative",
    }}>
      {["left", "right"].map(s => (
        <div key={s} style={{
          position: "absolute", [s]: 0, top: 0, bottom: 0, width: "80px",
          background: `linear-gradient(to ${s === "left" ? "right" : "left"}, ${C.bg}, transparent)`,
          zIndex: 2, pointerEvents: "none",
        }}/>
      ))}
      <div className="mqinner" style={{
        display: "flex", alignItems: "center", gap: "36px", width: "max-content",
        animation: `_marquee ${speed}s linear infinite`, willChange: "transform",
      }}>
        {doubled.map((name, i) => (
          <div key={`${name}-${i}`} style={{
            display: "flex", alignItems: "center", gap: "8px", opacity: 0.50, flexShrink: 0,
          }}>
            {ICONS[name] && (
              <img src={ICONS[name]} alt={name} className="di" width={17} height={17} loading="lazy"
                style={{ display: "block", borderRadius: "2px" }} />
            )}
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", fontWeight: 500,
              color: "rgba(255,255,255,0.50)", letterSpacing: "0.04em", whiteSpace: "nowrap",
            }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SIDE NAV — minimal dot navigation
   ═══════════════════════════════════════════════════════════ */
export function SideNav({ sections, active }) {
  return (
    <nav className="snav" style={{
      position: "fixed", left: "1.25rem", top: "50%", transform: "translateY(-50%)",
      zIndex: 100, display: "flex", flexDirection: "column", gap: "14px",
    }}>
      {sections.map((s, i) => (
        <button key={s.id || i}
          className="snav-btn"
          data-magnetic
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
          aria-label={`Jump to ${s.label}`}
          style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: "none", border: "none", cursor: "none", padding: 0, outline: "none",
          }}
        >
          <div className="snav-line" style={{
            height: "1.5px",
            width: active === i ? "22px" : "10px",
            background: active === i ? "#FFFFFF" : "rgba(255,255,255,0.18)",
            borderRadius: "1px", transition: `all ${MS.slow} ${E}`,
          }}/>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: "9px", fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            opacity: active === i ? 1 : 0, transition: `opacity ${MS.slow} ${E}`,
          }}>{s.number || String(i + 1).padStart(2, "0")}</span>
        </button>
      ))}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION HEADER — eyebrow + title + optional subtitle
   ═══════════════════════════════════════════════════════════ */
export function SectionHeader({ eyebrow, title, sub, visible, delay = 0, cursor = false }) {
  return (
    <div style={{
      marginBottom: "2.5rem",
      opacity: visible ? 1 : 0,
      animation: visible ? `_rtl ${MS.reveal} ${E} ${delay}s both` : "none",
    }}>
      <ML color="rgba(255,255,255,0.45)" style={{ marginBottom: "10px" }}>{eyebrow}</ML>
      <h2 style={{
        fontFamily: "'Source Serif 4', 'Inter', serif",
        fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
        fontWeight: 700,
        fontStyle: "italic",
        color: "#FFFFFF",
        letterSpacing: "-0.025em",
        marginBottom: sub ? "8px" : 0,
        display: "flex",
        alignItems: "center",
      }}>
        {title}{cursor && <TermCursor/>}
      </h2>
      {sub && <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", lineHeight: 1.65, maxWidth: "500px" }}>{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAGNETIC BUTTON — follows cursor with magnetic pull
   ═══════════════════════════════════════════════════════════ */
export function MagBtn({ children, href, onClick, extraStyle = {} }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [h, setH]     = useState(false);
  const ref = useRef(null);
  const mob = useMob();
  const Tag = href ? "a" : "button";
  return (
    <Tag
      ref={ref}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      data-magnetic
      onMouseMove={(e) => {
        if (mob || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({ x: (e.clientX - r.left - r.width / 2) * 0.20, y: (e.clientY - r.top - r.height / 2) * 0.20 });
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => { setH(false); setPos({ x: 0, y: 0 }); }}
      style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        padding: "10px 18px", minHeight: "44px",
        background: h ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
        border: `1px solid ${h ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.12)"}`,
        borderRadius: "8px", fontSize: "13px", fontWeight: 600,
        color: "#FFFFFF", textDecoration: "none",
        fontFamily: "'DM Mono', monospace",
        transition: `background ${MS.base} ${E}, border-color ${MS.base} ${E}`,
        transform: mob ? "none" : `translate(${pos.x}px, ${pos.y}px)`,
        cursor: "none",
        ...extraStyle,
      }}
    >{children}</Tag>
  );
}

/* ═══════════════════════════════════════════════════════════
   CINEMATIC BACKGROUND — video + orbs + particles + overlays
   ═══════════════════════════════════════════════════════════ */
export function CinematicBackground({ videoOpacity = 0.45, showAurora = false }) {
  return (
    <>
      {/* Video Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#020503' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 25% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%, transparent 30%, rgba(0,0,0,0.3) 80%)' }} />
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(74,222,128,.03) 0%,transparent 70%)', filter: 'blur(60px)', animation: 'bloom 12s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(74,222,128,.025) 0%,transparent 70%)', animation: 'orb1 16s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,.02) 0%,transparent 70%)', animation: 'orb0 12s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top,rgba(0,0,0,.7),transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '20%', background: 'linear-gradient(to bottom,rgba(0,0,0,.4),transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '30%', left: 0, right: 0, height: '40%', background: 'linear-gradient(90deg,rgba(255,255,255,.01),transparent,rgba(255,255,255,.005))', animation: 'haze 14s ease-in-out infinite', pointerEvents: 'none' }} />
        {showAurora && (
          <>
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '60%', background: 'linear-gradient(135deg,rgba(74,222,128,.04),rgba(139,92,246,.03),rgba(59,130,246,.04),rgba(236,72,153,.03))', backgroundSize: '400% 400%', animation: '_aurora 20s ease infinite', filter: 'blur(80px)', pointerEvents: 'none', opacity: .5 }} />
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '80%', height: '50%', background: 'linear-gradient(225deg,rgba(168,85,247,.04),rgba(34,211,238,.03),rgba(74,222,128,.04))', backgroundSize: '300% 300%', animation: '_aurora 25s ease infinite reverse', filter: 'blur(100px)', pointerEvents: 'none', opacity: .4 }} />
          </>
        )}
      </div>

      {/* Floating Particles — green */}
      {[
        { top: '15%', left: '8%',  anim: 'float0', delay: '0s',   size: 3, opacity: .2 },
        { top: '65%', left: '5%',  anim: 'float1', delay: '2s',   size: 2, opacity: .15 },
        { top: '40%', right: '8%', anim: 'float2', delay: '1s',   size: 4, opacity: .18 },
        { top: '75%', right: '15%',anim: 'float3', delay: '3s',   size: 2, opacity: .12 },
        { top: '50%', left: '50%', anim: 'float0', delay: '1.5s', size: 3, opacity: .15 },
        { top: '25%', right: '25%',anim: 'float1', delay: '2.5s', size: 2, opacity: .1 },
      ].map((p, i) => (
        <div key={i} style={{ position: 'fixed', top: p.top, left: p.left, right: p.right, width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%', background: '#4ade80', opacity: p.opacity * 0.7, filter: 'blur(1px)', animation: `${p.anim} ${7 + i}s ease-in-out infinite`, animationDelay: p.delay, zIndex: 1, pointerEvents: 'none' }} />
      ))}
      {/* Floating Particles — white */}
      {[
        { top: '22%', left: '12%', anim: 'float3', delay: '0.5s', size: 2, opacity: .1 },
        { top: '82%', left: '20%', anim: 'float0', delay: '1.8s', size: 3, opacity: .15 },
        { top: '35%', right: '18%',anim: 'float1', delay: '0.8s', size: 2, opacity: .1 },
      ].map((p, i) => (
        <div key={`w-${i}`} style={{ position: 'fixed', top: p.top, left: p.left, right: p.right, width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%', background: '#fff', opacity: p.opacity, animation: `${p.anim} ${6 + i}s ease-in-out infinite`, animationDelay: p.delay, zIndex: 1, pointerEvents: 'none' }} />
      ))}

      {/* Grain + Vignette */}
      <div className="grain-overlay" />
      <div className="vignette" />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE LAYOUT — wraps every page with consistent env
   ═══════════════════════════════════════════════════════════ */
export function PageLayout({ children, showAurora = false }) {
  return (
    <>
      <MagneticCursor />
      <ScrollBar />
      <CinematicBackground showAurora={showAurora} />
      <div style={{ position: "relative", zIndex: 10, minHeight: "100vh" }}>
        {children}
      </div>
    </>
  );
}
