"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

const TESTIMONIALS = [
  {
    name: "Britt Douglas",
    role: "CEO, Worldwide Vintage Autos",
    stars: 5,
    quote: "Brand Iron's work has resulted in growth in the client's email list and an increase in their generated consignment leads. The team leads a seamless workflow by leading regular meetings and providing reliable, timely support. The client appreciates having their extensive knowledge at their disposal.",
  },
  {
    name: "Sarah T.",
    role: "VP Marketing, TechScale Inc.",
    stars: 5,
    quote: "Working with Brand Iron transformed how we think about revenue generation. They didn't just run campaigns — they built us a complete system that connects every part of our go-to-market motion. Pipeline is up 3X in six months.",
  },
  {
    name: "James Hartwell",
    role: "Founder, Hartwell Capital Group",
    stars: 5,
    quote: "The AI automation work Brand Iron did for us saved our team 20+ hours a week. More importantly, it gave us visibility into our pipeline that we never had before. I can't imagine operating without the systems they built.",
  },
];

function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  return (
    <section style={{ background: "#FFFFFF", padding: "100px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "rgba(203,119,45,0.15)" }} />
      <div style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1, background: "rgba(203,119,45,0.15)" }} />
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 8 }}>
          What Our Clients Say
        </p>
        <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", marginBottom: 40 }}>
          {t.role}
        </p>
        <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 12 }}>
          {t.name}
        </h3>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 36 }}>
          {Array.from({ length: t.stars }).map((_, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" stroke="#cb772d" strokeWidth="1.5" strokeLinejoin="round" fill="#cb772d"/>
            </svg>
          ))}
        </div>
        <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.85, color: "#444746", fontWeight: 600, maxWidth: 760, margin: "0 auto 52px" }}>
          &ldquo;{t.quote}&rdquo;
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
          <button
            onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid #d0d5dd", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s, background 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#cb772d"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(203,119,45,0.06)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d0d5dd"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#444746" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? "#cb772d" : "#d0d5dd", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }} />
            ))}
          </div>
          <button
            onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid #d0d5dd", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s, background 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#cb772d"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(203,119,45,0.06)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d0d5dd"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#444746" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const billions = useCountUp(5, 1800, started);
  const companies = useCountUp(200, 2000, started);
  const decks = useCountUp(500, 2200, started);

  return (
    <div ref={ref} style={{
      display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: 56,
    }}>
      {[
        { value: `$${billions}B+`, label: "Capital Raised" },
        { value: `${companies}+`, label: "Brands Built" },
        { value: `${decks}+`, label: "Pitch Decks" },
        { value: "15+", label: "Years Experience" },
      ].map(({ value, label }, i) => (
        <div key={label} style={{
          padding: "20px 40px",
          borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
          textAlign: "center",
        }}>
          <div style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 28, fontWeight: 700, color: "#cb772d", lineHeight: 1 }}>{value}</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: 6 }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

function ServiceCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      description: "Build a brand that commands attention, earns trust, and creates lasting market position.",
      deliverables: ["Brand Positioning", "Visual Identity", "Messaging Framework", "Brand Guidelines"],
      href: "/services/brand-strategy",
    },
    {
      number: "02",
      title: "AI Visibility & Discoverability",
      description: "Get your brand found by AI tools, search engines, and the platforms your buyers use to research.",
      deliverables: ["AI Search Optimization", "LLM Brand Presence", "Semantic SEO", "Content Architecture"],
      href: "/services/ai-visibility",
    },
    {
      number: "03",
      title: "Go-To-Market Strategy",
      description: "Launch smarter. Enter markets with a clear plan that connects brand, demand, and sales.",
      deliverables: ["Market Analysis", "GTM Playbook", "Launch Sequencing", "Sales Enablement"],
      href: "/services/gtm",
    },
    {
      number: "04",
      title: "Capital Raise Support",
      description: "From pitch deck to investor strategy — we help you tell the story that moves capital.",
      deliverables: ["Pitch Deck Creation", "Investor Narrative", "Data Room Prep", "Outreach Strategy"],
      href: "/services/capital-raise",
    },
    {
      number: "05",
      title: "Revenue Engineering",
      description: "Build a revenue system where marketing, sales, and CRM work as one connected machine.",
      deliverables: ["CRM Architecture", "Pipeline Design", "Sales Process", "Revenue Dashboards"],
      href: "/services/revenue-engineering",
    },
    {
      number: "06",
      title: "Outbound Growth",
      description: "Reach the right buyers at the right time with AI-powered outbound built for modern sales.",
      deliverables: ["Outbound Sequences", "Lead Lists", "AI Personalization", "Meeting Booking"],
      href: "/services/outbound-growth",
    },
    {
      number: "07",
      title: "Website Development",
      description: "A website engineered to convert — fast, beautiful, and built to generate pipeline.",
      deliverables: ["Design & Development", "Conversion Optimization", "Performance", "Analytics Setup"],
      href: "/services/website-development",
    },
  ];

  return (
    <div>
      {/* Tab row */}
      <div style={{ display: "flex", gap: 0, overflowX: "auto", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 48 }}>
        {services.map((s, i) => (
          <button
            key={s.number}
            onClick={() => setActiveIdx(i)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "16px 24px",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: activeIdx === i ? "#cb772d" : "rgba(255,255,255,0.5)",
              borderBottom: activeIdx === i ? "2px solid #cb772d" : "2px solid transparent",
              whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
          >
            {s.number} {s.title}
          </button>
        ))}
      </div>

      {/* Active card */}
      {(() => {
        const s = services[activeIdx];
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
                Service {s.number}
              </p>
              <h3 style={{
                fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
                fontWeight: 700, fontSize: "clamp(32px, 3.5vw, 52px)",
                textTransform: "uppercase", letterSpacing: "0.04em",
                color: "transparent", WebkitTextStroke: "2px #FFFFFF",
                lineHeight: 1.0, marginBottom: 24,
              }}>{s.title}</h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 40 }}>
                {s.description}
              </p>
              <Link href={s.href} className="hero-btn-primary" style={{ fontSize: 13, padding: "12px 28px" }}>
                Learn More →
              </Link>
            </div>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>
                What&apos;s Included
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {s.deliverables.map((d, i) => (
                  <div key={d} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(203,119,45,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, color: "#cb772d" }}>0{i + 1}</span>
                    </div>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

function PitchDeckPopup({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 30); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(10,18,35,0.75)",
      backdropFilter: "blur(6px)",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.35s ease",
    }}
      onClick={e => { if (e.target === e.currentTarget) { setVisible(false); setTimeout(onClose, 350); } }}
    >
      <div style={{
        position: "relative",
        width: "min(680px, 92vw)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(203,119,45,0.25)",
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
        transition: "transform 0.4s cubic-bezier(0.34,1.26,0.64,1), opacity 0.35s ease",
        opacity: visible ? 1 : 0,
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/hero-saddle.jpg')", backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,18,40,0.82)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />
        <button
          onClick={() => { setVisible(false); setTimeout(onClose, 350); }}
          style={{ position: "absolute", top: 16, right: 16, zIndex: 10, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s ease" }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(203,119,45,0.35)")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <div style={{ position: "relative", zIndex: 2, padding: "60px 48px 52px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 20 }}>
            Limited Offer
          </p>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 52px)", textTransform: "uppercase", letterSpacing: "0.03em", color: "transparent", WebkitTextStroke: "2px #FFFFFF", lineHeight: 1.05, marginBottom: 18 }}>
            Free Pitch Deck Audit
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 28 }}>
            ✦ Limited to first 3 qualified companies per week ✦
          </p>
          <div style={{ width: 48, height: 2, background: "#cb772d", borderRadius: 2, margin: "0 auto 28px" }} />
          <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(15px, 2vw, 20px)", textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", lineHeight: 1.4, marginBottom: 36 }}>
            Already have a pitch deck?<br />Let us review it for you!
          </p>
          <Link href="/contact" onClick={() => { setVisible(false); setTimeout(onClose, 350); }} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#cb772d", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", borderRadius: 8, textDecoration: "none", transition: "background 0.2s ease, transform 0.15s ease", boxShadow: "0 8px 28px rgba(203,119,45,0.4)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#a5621e"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#cb772d"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            Let&apos;s Go! →
          </Link>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 20 }}>
            No commitment. 100% free. We&apos;ll get back to you within 1 business day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);
  const buyerView = useInView(0.1);
  const problemView = useInView(0.1);
  const diffView = useInView(0.1);
  const frameworkView = useInView(0.1);
  const servicesView = useInView(0.1);
  const processView = useInView(0.1);
  const resultsView = useInView(0.1);
  const insightsView = useInView(0.1);
  const partnerView = useInView(0.1);
  const ctaView = useInView(0.1);
  const popupShown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (popupShown.current) return;
      if (window.scrollY > window.innerHeight * 1.6) {
        popupShown.current = true;
        setShowPopup(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const problemCards = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="10" r="6" stroke="#cb772d" strokeWidth="2"/>
          <path d="M4 28c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 16l4-4M24 12h4v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Brands That Can't Be Found",
      body: "If AI tools, search engines, and social platforms don't recognize your brand, buyers can't find you — no matter how good your product is.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="#cb772d" strokeWidth="2"/>
          <path d="M13 12.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-2 2.5-3 4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="22.5" r="1.2" fill="#cb772d"/>
        </svg>
      ),
      title: "Trust Gaps That Kill Deals",
      body: "If your brand looks inconsistent, outdated, or unclear — buyers move on before you even know they were looking.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <rect x="3" y="8" width="11" height="8" rx="2" stroke="#cb772d" strokeWidth="2"/>
          <rect x="18" y="16" width="11" height="8" rx="2" stroke="#cb772d" strokeWidth="2"/>
          <path d="M14 12h4M16 12v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Disconnected Marketing & Sales",
      body: "If your marketing and sales aren't aligned on the same system, you're losing deals in the handoff — every single time.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <path d="M4 10l7 8 6-4 11 12" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 26h4v-4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "No System For Revenue Growth",
      body: "Without a connected growth system, you're always chasing the next lead — never building something that compounds.",
    },
  ];

  return (
    <>
      {showPopup && <PitchDeckPopup onClose={() => setShowPopup(false)} />}
    <main style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── S1: HERO ──────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}>
          <source src="/images/hero_gif.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,18,40,0.55)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px", width: "100%" }}>
          <p className="hero-body-anim" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 24 }}>
            Revenue-Focused Marketing
          </p>
          <h1 className="hero-h1-anim" style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
            fontWeight: 700, fontSize: "clamp(44px, 6vw, 80px)",
            textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.0,
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 860, marginBottom: 28,
          }}>
            Forging Brands.<br />Driving Revenue.
          </h1>
          <p className="hero-body-anim" style={{ fontSize: 19, lineHeight: 1.8, color: "rgba(255,255,255,0.9)", maxWidth: 620, marginBottom: 40 }}>
            We are Brand Iron — a revenue-focused marketing firm that combines human craft with AI-powered systems to build brands that get found, get trusted, and generate consistent revenue.
          </p>
          <div className="hero-btns-anim" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 0 }}>
            <Link href="/contact" className="hero-btn-primary">
              Book a Discovery Call
            </Link>
            <Link href="/services" className="hero-btn-outline">
              See How We Work
            </Link>
          </div>

          {/* Trust bar */}
          <TrustBar />
        </div>
      </section>

      {/* ── S2: BUYING JOURNEY ────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px 120px", borderBottom: "1px solid #F0ECE8" }}>
        <div ref={buyerView.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* 2-col intro: image left, copy right */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center", marginBottom: 96 }}>
            <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/section2-home.png"
                alt="Brand Iron — Building Brands That Drive Revenue"
                style={{ width: "100%", maxWidth: 480, height: "auto", borderRadius: 16, objectFit: "contain" }}
              />
            </div>
            <div>
              <p className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
                The New Buyer Reality
              </p>
              <h2 className={`section-heading reveal${buyerView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24, textAlign: "left" }}>
                The Modern Buyer Journey Has Changed.
              </h2>
              <p className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 32 }}>
                67% of the buyer journey is complete before they ever talk to sales. Your brand needs to show up, build trust, and create conviction — before they ever reach out.
              </p>
              <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ background: "#F9F8F6", borderLeft: "4px solid #cb772d", borderRadius: 8, padding: "20px 24px" }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.75, color: "#333", fontStyle: "italic", margin: 0 }}>
                  &ldquo;Most brands fail because they&apos;re invisible where buyers look first. We fix that — across AI, search, and every channel that matters.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Journey timeline */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 44, left: "10%", right: "10%", height: 2, background: "linear-gradient(to right, #0F1B2D, #cb772d)", zIndex: 0 }} />
            <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
              {[
                { step: "01", label: "Discover", note: "They search AI tools, Google, and social" },
                { step: "02", label: "Evaluate", note: "They compare your brand vs. alternatives" },
                { step: "03", label: "Trust", note: "They look for proof, authority, and credibility" },
                { step: "04", label: "Engage", note: "They reach out — or they don't" },
                { step: "05", label: "Choose", note: "They buy from the brand they trust most" },
              ].map(({ step, label, note }, i) => (
                <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  <div style={{
                    width: 88, height: 88, borderRadius: "50%",
                    background: i < 4 ? "#0F1B2D" : "#cb772d",
                    border: `3px solid ${i < 4 ? "#0F1B2D" : "#cb772d"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  }}>
                    <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontWeight: 400, fontSize: 24, color: i < 4 ? "#cb772d" : "#FFFFFF" }}>{step}</span>
                  </div>
                  <h4 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 15, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: i === 4 ? "#cb772d" : "#0F1B2D", marginBottom: 8, textAlign: "center" }}>{label}</h4>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.6, color: "#777", textAlign: "center", maxWidth: 160 }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: WHY MODERN GROWTH BREAKS DOWN ─────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 140px",
        backgroundImage: "url('/images/techy sagebrush.png')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.55)" }} />
        <CircuitOverlay />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
          <p className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
            The Core Problem
          </p>
          <h2 ref={problemView.ref} className={`section-heading reveal${problemView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24 }}>
            Why Modern Growth Breaks Down
          </h2>
          <p className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.75, color: "#444", maxWidth: 680, margin: "0 auto 64px" }}>
            You&apos;re running campaigns. You&apos;re using AI tools. You&apos;re creating content. But growth has stalled. The problem isn&apos;t your effort — it&apos;s that nothing is connected.
          </p>

          {/* 4 accordion cards */}
          <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
            {problemCards.map(({ icon, title, body }, i) => {
              const isHovered = hoveredCard === i;
              const isShrunk = hoveredCard !== null && !isHovered;
              return (
                <div
                  key={title}
                  className={`reveal${problemView.inView ? ' visible' : ''}`}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    flex: isHovered ? "2 1 0" : isShrunk ? "0.6 1 0" : "1 1 0",
                    background: isHovered ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.93)",
                    borderRadius: 10, borderLeft: "4px solid #cb772d",
                    padding: "48px 28px 52px",
                    boxShadow: isHovered ? "0 8px 48px rgba(203,119,45,0.22), 0 2px 20px rgba(0,0,0,0.10)" : "0 2px 20px rgba(0,0,0,0.07)",
                    overflow: "hidden",
                    transition: "flex 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, background 0.3s ease",
                    cursor: "default",
                  }}
                >
                  <div style={{ marginBottom: 26, display: "flex", justifyContent: isHovered ? "center" : "flex-start", transform: isHovered ? "scale(1.12)" : "scale(1)", transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)" }}>{icon}</div>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 22, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: isHovered ? "#cb772d" : "#0F1B2D", marginBottom: 18, lineHeight: 1.3, textAlign: isHovered ? "center" : "left", transition: "color 0.25s ease" }}>{title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: isHovered ? "#333" : "#555", textAlign: isHovered ? "center" : "left", transition: "color 0.25s ease" }}>{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── S4: BRAND IRON DIFFERENCE ─────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 40px 120px", backgroundImage: "url('/images/horse mane circuit lines_1.png')", backgroundSize: "cover", backgroundPosition: "center top" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,18,40,0.92)" }} />
        <div ref={diffView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
              Our Approach
            </p>
            <h2 className={`section-heading reveal${diffView.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 20 }}>
              The Brand Iron Difference
            </h2>
            <p className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: "#cb772d" }}>
              Human Crafted. AI Powered. Revenue Driven.
            </p>
          </div>

          {/* 4 philosophy cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {[
              {
                number: "01",
                title: "We Build Brands That Get Found",
                body: "Visibility isn't optional anymore. We engineer your brand to appear where buyers search — in AI tools, search engines, and the platforms that drive decisions.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                    <circle cx="16" cy="16" r="10" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M24 24l7 7" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M13 13l6 6M19 13l-6 6" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                number: "02",
                title: "We Create Trust Before The First Conversation",
                body: "Trust is built in the silent moments — when a buyer is researching you before they ever reach out. We make sure every touchpoint builds conviction.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                    <path d="M18 4l3.6 7.6 8.4 1.1-6.1 5.9 1.5 8.3L18 23l-7.4 3.9 1.5-8.3-6.1-5.9 8.4-1.1z" stroke="#cb772d" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                number: "03",
                title: "We Connect Marketing & Sales Into One System",
                body: "The handoff between marketing and sales is where revenue dies. We build systems where both teams work from the same data, the same tools, and the same goals.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                    <circle cx="10" cy="18" r="5" stroke="#cb772d" strokeWidth="2"/>
                    <circle cx="26" cy="18" r="5" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M15 18h6" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                number: "04",
                title: "We Engineer Revenue Systems That Scale",
                body: "We don't just run campaigns — we build the infrastructure that makes growth predictable. CRM, automation, AI, and analytics working as one connected machine.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                    <rect x="4" y="22" width="7" height="10" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="18" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <rect x="24" y="6" width="7" height="26" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M6 18l10-8 10-6" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map(({ number, title, body, icon }) => (
              <div key={number} className={`reveal${diffView.inView ? ' visible' : ''}`} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "40px 40px",
                display: "flex", gap: 24, alignItems: "flex-start",
                transition: "background 0.25s, border-color 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(203,119,45,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(203,119,45,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ width: 60, height: 60, borderRadius: 12, background: "rgba(203,119,45,0.1)", border: "1px solid rgba(203,119,45,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 10 }}>
                    {number}
                  </p>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 12, lineHeight: 1.35 }}>{title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.65)" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: GROWTH FRAMEWORK ──────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px 120px" }}>
        <div ref={frameworkView.ref} style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
            How It All Connects
          </p>
          <h2 className={`section-heading reveal${frameworkView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20 }}>
            Our Integrated Growth Framework
          </h2>
          <p className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.75, color: "#555", maxWidth: 640, margin: "0 auto 72px" }}>
            Every service we deliver is part of one connected system. Brand fuels visibility. Visibility drives trust. Trust creates pipeline. Pipeline generates revenue.
          </p>

          {/* Framework flow */}
          <div className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
            {[
              { label: "Brand", sub: "Identity & Strategy", color: "#0F1B2D" },
              { label: "Visibility", sub: "AI & Search", color: "#1c3652" },
              { label: "Trust", sub: "Authority & Proof", color: "#2d4f72" },
              { label: "Pipeline", sub: "Demand & Outbound", color: "#a5621e" },
              { label: "Revenue", sub: "Measurable Growth", color: "#cb772d" },
            ].map(({ label, sub, color }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  background: color,
                  borderRadius: 12, padding: "28px 24px",
                  textAlign: "center", minWidth: 140,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}>
                  <div style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 20, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: "#FFFFFF", marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", letterSpacing: "0.06em" }}>{sub}</div>
                </div>
                {i < 4 && (
                  <div style={{ padding: "0 8px" }}>
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                      <path d="M2 10h24M20 4l8 6-8 6" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontStyle: "italic", color: "#888", marginTop: 40 }}>
            Every Brand Iron engagement is built on this framework — with every service connected to driving measurable revenue.
          </p>
        </div>
      </section>

      {/* ── S6: CORE SERVICES CAROUSEL ────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 120px",
        backgroundImage: "url('/images/bg-horse.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,16,36,0.88)" }} />
        <CircuitOverlay />
        <div ref={servicesView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p className={`reveal${servicesView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
              What We Do
            </p>
            <h2 className={`section-heading reveal${servicesView.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 20 }}>
              Seven Services. One System.
            </h2>
            <p className={`reveal${servicesView.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "0 auto" }}>
              Everything we do is designed to connect — so every investment you make builds on the last.
            </p>
          </div>
          <div className={`reveal${servicesView.inView ? ' visible' : ''}`}>
            <ServiceCarousel />
          </div>
        </div>
      </section>

      {/* ── S7: HOW WE WORK ──────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 120px",
        backgroundImage: "url('/images/bg-haybales.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 40%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,238,222,0.75)" }} />
        <CircuitOverlay />
        <div ref={processView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p className={`reveal${processView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
              Our Process
            </p>
            <h2 className={`section-heading reveal${processView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20 }}>
              How We Work
            </h2>
            <p className={`reveal${processView.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.75, color: "#555", maxWidth: 560, margin: "0 auto" }}>
              From strategy to execution — a clear process designed to get you results fast, and build something that lasts.
            </p>
          </div>

          {/* 4 connected process cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }}>
            {/* Connector line */}
            <div style={{ position: "absolute", top: 60, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(to right, #0F1B2D, #cb772d)", zIndex: 0 }} />
            {[
              {
                step: "01",
                title: "Discover",
                body: "We dive deep into your business — your goals, gaps, market, and growth potential. No templates. No assumptions.",
              },
              {
                step: "02",
                title: "Forge",
                body: "We craft your strategy — brand positioning, messaging, go-to-market plan, and the roadmap to get there.",
              },
              {
                step: "03",
                title: "Build",
                body: "We build the system — CRM infrastructure, AI workflows, content engines, and campaigns — all connected.",
              },
              {
                step: "04",
                title: "Scale",
                body: "We activate, optimize, and scale — measuring what matters, doubling down on what works.",
              },
            ].map(({ step, title, body }, i) => {
              const isHovered = hoveredProcess === i;
              return (
                <div
                  key={step}
                  className={`reveal${processView.inView ? ' visible' : ''}`}
                  onMouseEnter={() => setHoveredProcess(i)}
                  onMouseLeave={() => setHoveredProcess(null)}
                  style={{
                    position: "relative", zIndex: 1,
                    background: isHovered ? "#0F1B2D" : "rgba(255,255,255,0.95)",
                    borderRadius: 12, padding: "40px 28px 36px",
                    textAlign: "center",
                    boxShadow: isHovered ? "0 12px 48px rgba(15,27,45,0.3)" : "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "background 0.3s, box-shadow 0.3s, transform 0.3s",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                    cursor: "default",
                    transitionDelay: `${i * 0.05}s`,
                  }}
                >
                  <div style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: isHovered ? "#cb772d" : "#0F1B2D",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                    transition: "background 0.3s",
                  }}>
                    <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 28, fontWeight: 400, color: isHovered ? "#FFFFFF" : "#cb772d" }}>{step}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: isHovered ? "#cb772d" : "#0F1B2D", marginBottom: 16, transition: "color 0.3s" }}>{title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.7, color: isHovered ? "rgba(255,255,255,0.75)" : "#555", transition: "color 0.3s" }}>{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── S8: RESULTS THAT MATTER ───────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 40px 120px", backgroundImage: "url('/images/bg-barn.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,15,32,0.90)" }} />
        <div ref={resultsView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
              What You Get
            </p>
            <h2 className={`section-heading reveal${resultsView.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 20 }}>
              Results That Matter
            </h2>
            <p className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: 580, margin: "0 auto" }}>
              We don&apos;t measure success in clicks and impressions. We measure it in pipeline, revenue, and growth you can point to.
            </p>
          </div>

          {/* Big stats row */}
          <div className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(255,255,255,0.04)", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
            {[
              { num: "3X", label: "Pipeline Growth", note: "Average increase across engagements" },
              { num: "60%", label: "Less Wasted Effort", note: "Through AI automation and systems" },
              { num: "100%", label: "Revenue Visibility", note: "Know exactly what's working" },
            ].map(({ num, label, note }, i) => (
              <div key={num} style={{ padding: "52px 40px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div className={`reveal scale-in${resultsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 72, fontWeight: 400, color: "#cb772d", lineHeight: 1, marginBottom: 8 }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: 8 }}>{label}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{note}</div>
              </div>
            ))}
          </div>

          {/* 6 outcome cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "A Brand That Commands Attention", body: "Positioned to stand out in a crowded market — and remembered long after the first impression." },
              { title: "Visibility Where Buyers Search", body: "Found by AI tools, search engines, and the platforms your buyers use to make decisions." },
              { title: "A Pipeline That Doesn't Rely On Luck", body: "Predictable, consistent lead flow backed by data, automation, and proven systems." },
              { title: "Marketing & Sales Working As One", body: "No more handoff failures. Your entire revenue motion runs from one connected system." },
              { title: "AI Working Behind The Scenes", body: "Automation that handles the repetitive work so your team can focus on relationships and revenue." },
              { title: "Clear ROI On Everything You Invest", body: "Dashboards that show exactly what's driving revenue — and what to do more of." },
            ].map(({ title, body }) => (
              <div key={title} className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10, padding: "32px 28px",
                transition: "background 0.25s, border-color 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(203,119,45,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(203,119,45,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#cb772d", marginBottom: 20 }} />
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 12, lineHeight: 1.35 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>{body}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", fontStyle: "italic", marginTop: 32 }}>
            * Representative outcomes based on client implementations. Results vary by business model and execution.
          </p>
        </div>
      </section>

      {/* ── S9: TESTIMONIALS ──────────────────────────────── */}
      <TestimonialsSection />

      {/* ── S10: INSIGHTS & PERSPECTIVES ─────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 120px",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,238,225,0.78)" }} />
        <CircuitOverlay />
        <div ref={insightsView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <p className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
                Insights & Perspectives
              </p>
              <h2 className={`section-heading reveal${insightsView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24, textAlign: "left" }}>
                Fresh Thinking From The Frontier
              </h2>
              <p className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 40 }}>
                We share what we&apos;re seeing, testing, and learning — from AI visibility and brand strategy to capital raise tactics and revenue system design. Practical insights from the work we do every day.
              </p>
              <div className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/blog" className="hero-btn-primary" style={{ fontSize: 13, padding: "12px 28px" }}>
                  Read The Blog →
                </Link>
                <Link href="/resources" className="hero-btn-outline" style={{ fontSize: 13, padding: "12px 28px" }}>
                  Browse Resources
                </Link>
              </div>
            </div>
            <div className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { tag: "AI Visibility", title: "Why Your Brand Isn't Showing Up in AI Search — And How To Fix It" },
                { tag: "Brand Strategy", title: "The Difference Between a Brand and a Logo (And Why It Costs You Revenue)" },
                { tag: "Revenue Engineering", title: "How To Build a Revenue System That Actually Scales" },
              ].map(({ tag, title }) => (
                <Link key={title} href="/blog" style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "rgba(255,255,255,0.88)",
                    borderRadius: 10, padding: "24px 28px",
                    borderLeft: "3px solid #cb772d",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; }}
                  >
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#cb772d" }}>{tag}</span>
                    <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.04em", color: "#0F1B2D", marginTop: 8, lineHeight: 1.35 }}>{title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S11: STRATEGIC GROWTH PARTNER ────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 40px 120px", backgroundImage: "url('/images/bg-wood.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(248,242,232,0.90)" }} />
        <div ref={partnerView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
              More Than An Agency
            </p>
            <h2 className={`section-heading reveal${partnerView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24 }}>
              Your Strategic Growth Partner
            </h2>
            <p className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto" }}>
              Growth isn&apos;t a campaign. It&apos;s a journey. We work alongside you — not as a vendor, but as a strategic partner committed to building something that lasts.
            </p>
          </div>

          {/* 4 partnership values */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28, marginBottom: 64 }}>
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="12" stroke="#cb772d" strokeWidth="2"/>
                    <circle cx="18" cy="18" r="5" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M18 6V2M18 34v-4M6 18H2M34 18h-4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="18" r="2" fill="#cb772d"/>
                  </svg>
                ),
                title: "Strategy First",
                body: "We start with your business goals, not a service menu. Every recommendation is built around what actually moves the needle for you.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M8 20c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 10V6M12 28h12M18 28v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="20" r="3" fill="#cb772d"/>
                  </svg>
                ),
                title: "Embedded Partner",
                body: "We act as an extension of your team — not a vendor you manage. You get direct access to senior strategists, not account managers.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M6 30l8-12 6 4 10-14" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 8l4-4M28 4h4v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Execution That Delivers",
                body: "Strategy without execution is just a document. We build, run, and optimize — you see real results, not slide decks.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="4" y="22" width="7" height="10" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="18" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <rect x="24" y="6" width="7" height="26" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M6 18l10-7 10-6" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Built To Scale",
                body: "Everything we build is designed to grow with you. Not just for today — but for the next stage of your business.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{
                background: "rgba(255,255,255,0.88)", borderRadius: 12, padding: "40px 28px",
                textAlign: "center",
                transition: "background 0.25s, transform 0.25s, box-shadow 0.25s",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.98)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.88)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 17, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F1B2D", marginBottom: 14 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "#666" }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Our Promise box */}
          <div className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{
            background: "#0F1B2D", borderRadius: 16, padding: "56px 64px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
          }}>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
                Our Promise
              </p>
              <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", marginBottom: 20, lineHeight: 1.2 }}>
                We Don&apos;t Win Unless You Win.
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
                Our business grows when yours does. That&apos;s not a tagline — it&apos;s how we&apos;ve structured every engagement since day one. We measure our success by your pipeline, your revenue, and your growth.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "No long-term lock-in contracts",
                "Direct access to senior strategists",
                "Transparent reporting on everything",
                "Results-oriented from day one",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(203,119,45,0.15)", border: "1px solid rgba(203,119,45,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3L10 3" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S12: FINAL CTA ────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "140px 40px 140px",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.88)" }} />
        <CircuitOverlay />
        <div ref={ctaView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>

          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ flex: 1, height: 1, background: "rgba(203,119,45,0.3)" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#cb772d" }} />
            <div style={{ flex: 1, height: 1, background: "rgba(203,119,45,0.3)" }} />
          </div>

          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 20 }}>
            Ready To Grow?
          </p>
          <h2 className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
            fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)",
            textTransform: "uppercase", letterSpacing: "0.02em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            lineHeight: 1.0, marginBottom: 28,
          }}>
            Get Found.<br />Get Trusted.<br />Generate Revenue.
          </h2>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 580, margin: "0 auto 48px" }}>
            Book a discovery call and we&apos;ll map out exactly what it would take to build your brand into a revenue engine.
          </p>

          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <Link href="/contact" className="hero-btn-primary" style={{ fontSize: 15, padding: "16px 40px" }}>
              Book a Discovery Call
            </Link>
            <Link href="/services" className="hero-btn-outline" style={{ fontSize: 15, padding: "16px 40px" }}>
              Explore Our Services
            </Link>
          </div>

          {/* Social proof trust strip */}
          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {["$5B+ Capital Raised", "200+ Brands Built", "15+ Years Experience"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#cb772d" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em" }}>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
    </>
  );
}
