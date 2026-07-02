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
  const brands = useCountUp(50, 1800, started);
  const investors = useCountUp(150, 2000, started);

  return (
    <div ref={ref} style={{ marginTop: 64, textAlign: "center" }}>
      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
        Trusted by founders, executives, and growth-focused organizations to strengthen brands, improve discoverability, and build scalable revenue systems.
      </p>
      <div style={{ display: "flex", justifyContent: "center", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {[
          { value: `${brands}+`, label: "Brands Supported" },
          { value: `${investors}K+`, label: "Investor Network" },
          { value: "AI-First", label: "Growth Strategies" },
          { value: "Brand Strategy • GTM", label: "Revenue Engineering" },
        ].map(({ value, label }, i) => (
          <div key={label} style={{
            padding: "20px 40px",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
            textAlign: "center",
            flex: "0 0 auto",
          }}>
            <div style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 700, color: "#cb772d", lineHeight: 1 }}>{value}</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      subtitle: "Build a Brand Buyers Remember and Competitors Can't Replicate",
      description: "Strong brands don't happen by accident. They are built through research, positioning, and deliberate strategic decisions. We help organizations uncover what makes them different, clarify how they communicate value, and create a brand that earns trust before the first conversation.",
      deliverables: ["Market Research", "Competitor Analysis", "Brand Positioning", "Messaging Framework", "Brand Development"],
      href: "/services/brand-strategy",
    },
    {
      number: "02",
      title: "AI Visibility & Discoverability",
      subtitle: "Be Found Where Modern Buyers Search",
      description: "Today's buyers don't rely on a single search engine. They ask AI assistants, compare providers, explore industry content, and validate decisions across multiple digital channels. We help organizations strengthen their presence across search, AI platforms, and emerging discovery channels so they're visible when buying decisions begin.",
      deliverables: ["AI Visibility Diagnostic", "SEO & AI Foundation", "AI Authority Growth System", "AI Market Dominance Engine"],
      href: "/services/ai-visibility",
    },
    {
      number: "03",
      title: "Go-to-Market Strategy",
      subtitle: "Turn Strategy into Commercial Momentum",
      description: "A successful go-to-market strategy aligns your market opportunity, messaging, channels, sales efforts, and customer journey. We work alongside leadership teams to develop practical GTM strategies that reduce uncertainty, accelerate execution, and create repeatable growth.",
      deliverables: ["GTM Foundation", "Growth Engine", "Revenue Accelerator"],
      href: "/services/gtm",
    },
    {
      number: "04",
      title: "Revenue Engineering",
      subtitle: "Build the Systems Behind Sustainable Growth",
      description: "Revenue isn't created by one campaign or one department. It results from connected systems that align marketing, sales, technology, automation, and analytics around measurable business outcomes. We help organizations simplify complexity, improve operational efficiency, and build scalable revenue infrastructure.",
      deliverables: ["Marketing Automation", "CRM Optimization", "Revenue Operations", "Funnel Optimization", "Reporting & Attribution"],
      href: "/services/revenue-engineering",
    },
    {
      number: "05",
      title: "Outbound Growth",
      subtitle: "Create Conversations That Convert Into Opportunities",
      description: "Even the strongest brand needs a proactive pipeline. We design outbound programs that combine research, personalization, and sales enablement to connect your team with the right prospects at the right time. Our approach focuses on quality conversations, not high-volume outreach.",
      deliverables: ["LinkedIn Outreach", "Email Outreach", "SDR Programs", "Appointment Setting", "Sales Enablement"],
      href: "/services/outbound-growth",
    },
    {
      number: "06",
      title: "Website Development",
      subtitle: "Build Digital Experiences That Support Growth",
      description: "Your website is often the first place buyers validate their decision. We create websites that combine strategic messaging, user experience, AI visibility, and conversion optimization to turn visitors into qualified opportunities. Beautiful design is only the beginning. Every website is built to perform.",
      deliverables: ["Website Strategy", "UX/UI Planning", "Website Design & Development", "Landing Pages", "Conversion Optimization"],
      href: "/services/website-development",
    },
    {
      number: "07",
      title: "Capital Raise Support",
      subtitle: "Help Investors Believe in Your Vision",
      description: "Raising capital requires more than a polished presentation. It requires a compelling narrative supported by credible market positioning, financial storytelling, and strategic outreach. We help founders prepare for meaningful conversations with investors by creating fundraising assets that communicate confidence and opportunity.",
      deliverables: ["Capital Raise Decks", "Investor Database (150K+)", "Investor Outreach Campaigns", "Investor GTM Support"],
      href: "/services/capital-raise",
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
                fontWeight: 700, fontSize: "clamp(28px, 3vw, 44px)",
                textTransform: "uppercase", letterSpacing: "0.04em",
                color: "transparent", WebkitTextStroke: "2px #FFFFFF",
                lineHeight: 1.0, marginBottom: 16,
              }}>{s.subtitle}</h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 40 }}>
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
      title: "Your buyers can't clearly differentiate you.",
      body: "Without a strong market position and compelling messaging, your business blends into the competition. Prospects understand what you do but not why they should choose you.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="#cb772d" strokeWidth="2"/>
          <path d="M13 12.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-2 2.5-3 4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="22.5" r="1.2" fill="#cb772d"/>
        </svg>
      ),
      title: "You're difficult to discover where buying decisions begin.",
      body: "Modern buyers search beyond Google. If your business isn't visible across AI platforms, search engines, industry publications, and trusted communities, you're losing opportunities before prospects ever reach your website.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <rect x="3" y="8" width="11" height="8" rx="2" stroke="#cb772d" strokeWidth="2"/>
          <rect x="18" y="16" width="11" height="8" rx="2" stroke="#cb772d" strokeWidth="2"/>
          <path d="M14 12h4M16 12v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Marketing generates activity, but not enough pipeline.",
      body: "Campaigns are launched, content is published, and metrics are reported, but disconnected execution often creates motion without meaningful commercial momentum.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <path d="M4 10l7 8 6-4 11 12" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 26h4v-4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Sales and marketing aren't working from the same playbook.",
      body: "Different messaging, inconsistent lead quality, and disconnected data make it harder for teams to convert opportunities into revenue and scale predictably.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="4" stroke="#cb772d" strokeWidth="2"/>
          <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Technology creates complexity instead of clarity.",
      body: "CRM platforms, marketing automation, analytics, and reporting tools should simplify growth, not create more manual work and fragmented insights.",
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

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "140px 40px 80px", width: "100%" }}>

          {/* 2-col hero layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "flex-start" }}>

            {/* Left — headline + primary body + CTAs + TrustBar */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
                fontWeight: 700, fontSize: "clamp(44px, 5.5vw, 80px)",
                textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.0,
                color: "transparent", WebkitTextStroke: "2px #FFFFFF",
                marginBottom: 28,
              }}>
                Forging Brands.<br />Driving Revenue.
              </h1>
              <p className="hero-body-anim" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.88)", maxWidth: 560, marginBottom: 14 }}>
                Modern buyers don&apos;t discover, evaluate, and choose companies the way they used to.
              </p>
              <p className="hero-body-anim" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", maxWidth: 560, marginBottom: 36 }}>
                Brand Iron helps organizations become <strong style={{ color: "#FFFFFF" }}>discoverable, trusted, and chosen</strong> by combining brand strategy, AI visibility, go-to-market execution, and revenue engineering into one connected growth system.
              </p>
              <div className="hero-btns-anim" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 0 }}>
                <Link href="/contact" className="hero-btn-primary">
                  Book a Strategy Session
                </Link>
                <Link href="/services" className="hero-btn-outline">
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right — supporting copy glass card */}
            <div className="hero-body-anim" style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "36px 32px",
              marginTop: 8,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.72)", marginBottom: 20 }}>
                Too many organizations treat branding, marketing, sales, and technology as separate initiatives. The result is fragmented execution, inconsistent messaging, and growth that&apos;s difficult to predict.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(203,119,45,0.6))" }} />
                <p style={{
                  fontFamily: "'Burford Rustic Black', sans-serif",
                  fontSize: 16, fontWeight: 400,
                  textTransform: "uppercase", letterSpacing: "0.12em",
                  color: "#cb772d", margin: 0, whiteSpace: "nowrap",
                  textShadow: "0 0 24px rgba(203,119,45,0.55)",
                }}>
                  We Take a Different Approach.
                </p>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(203,119,45,0.6))" }} />
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                Brand Iron aligns strategy, visibility, demand generation, automation, and revenue operations into a unified system that helps businesses compete more effectively, adapt to changing buyer behavior, and build sustainable growth.
              </p>
            </div>

          </div>

          {/* Trust bar — full width, centered below 2-col grid */}
          <TrustBar />
        </div>
      </section>

      {/* ── S2: BUYING JOURNEY ────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px 120px", borderBottom: "1px solid #F0ECE8" }}>
        <div ref={buyerView.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* 2-col intro: B icon left, copy right */}
          <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", gap: 80, alignItems: "center", marginBottom: 80 }}>

            {/* Left — B icon with decorative treatment */}
            <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* Decorative navy background circle */}
              <div style={{
                position: "absolute",
                width: 360, height: 360, borderRadius: "50%",
                background: "radial-gradient(circle at 40% 40%, #1c3254, #0F1B2D)",
                boxShadow: "0 24px 80px rgba(15,27,45,0.18)",
              }} />
              {/* Copper ring accent */}
              <div style={{
                position: "absolute",
                width: 380, height: 380, borderRadius: "50%",
                border: "1px solid rgba(203,119,45,0.25)",
              }} />
              <div style={{
                position: "absolute",
                width: 408, height: 408, borderRadius: "50%",
                border: "1px dashed rgba(203,119,45,0.1)",
              }} />
              <img
                src="/section2-home.png"
                alt="Brand Iron — Building Brands That Drive Revenue"
                style={{ position: "relative", zIndex: 1, width: 300, height: "auto", objectFit: "contain", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.18))" }}
              />
            </div>

            {/* Right — headline + copy */}
            <div>
              <p className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
                The Modern Buying Journey
              </p>
              <h2 className={`section-heading reveal${buyerView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24, textAlign: "left" }}>
                The Buying Journey Has Changed. Has Your Business?
              </h2>
              <p className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#444", marginBottom: 16, fontWeight: 500 }}>
                The way people discover, evaluate, and choose businesses has fundamentally changed.
              </p>
              <p className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.85, color: "#666", marginBottom: 16 }}>
                Today&apos;s buyers don&apos;t wait for a sales call or fill out a contact form as their first step. They research independently, compare options, ask AI-powered tools for recommendations, read reviews, explore LinkedIn, visit company websites, and seek validation from trusted communities, all before they&apos;re ready to engage.
              </p>
              <p className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.85, color: "#666", marginBottom: 24 }}>
                By the time someone reaches out, they&apos;ve often already narrowed their shortlist.
              </p>
              {/* Impact callout */}
              <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ position: "relative", background: "#0F1B2D", borderRadius: 10, padding: "20px 24px 20px 28px", overflow: "hidden" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "#cb772d", borderRadius: "4px 0 0 4px" }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.9)", margin: 0, fontWeight: 500 }}>
                  If your organization isn&apos;t visible, credible, and consistent throughout that journey, you&apos;re likely being overlooked before the conversation even begins.
                </p>
              </div>
            </div>
          </div>

          {/* Closing brand statement */}
          <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ position: "relative", background: "#0F1B2D", borderRadius: 12, padding: "40px 48px", marginBottom: 80, overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.3 }}>
              Modern growth isn&apos;t built on isolated marketing tactics.
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>
              It&apos;s built by aligning every stage of the buying journey from first discovery to long-term customer relationships.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>
              That&apos;s why Brand Iron brings together brand strategy, AI visibility, go-to-market execution, revenue engineering, outbound growth, and digital experiences into one connected growth system.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", margin: 0 }}>
              Because organizations that are <strong style={{ color: "#cb772d" }}>found first, trusted fastest, and aligned internally</strong> don&apos;t just compete, they become the brands buyers choose.
            </p>
          </div>

          {/* Journey stage intro */}
          <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 16 }}>
              {["Discover", "Evaluate", "Trust", "Engage", "Choose"].map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 13, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: i === 4 ? "#cb772d" : "#0F1B2D" }}>{s}</span>
                  {i < 4 && <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><path d="M2 5h13M11 1.5l4.5 3.5-4.5 3.5" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: "#777", maxWidth: 640, margin: "0 auto", fontStyle: "italic" }}>
              Each stage represents a critical moment where your brand can either build confidence or lose the opportunity to a competitor.
            </p>
          </div>

          {/* Journey cards — 5 column cards */}
          <div className={`reveal${buyerView.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {[
              {
                step: "01", label: "Discover",
                lead: "Buyers begin by searching for answers, not vendors.",
                detail: "Whether they're using search engines, AI assistants, industry publications, social platforms, or peer communities, your business needs to be present where discovery starts.",
                closing: "If buyers can't find you, your growth never begins.",
              },
              {
                step: "02", label: "Evaluate",
                lead: "Once discovered, buyers compare their options.",
                detail: "They assess your expertise, messaging, services, reputation, website, and how clearly you communicate the value you bring.",
                closing: "Every interaction either reinforces confidence or creates doubt.",
              },
              {
                step: "03", label: "Trust",
                lead: "Trust is earned long before the first meeting.",
                detail: "Thought leadership, customer success stories, reviews, strategic content, and a consistent brand presence all shape buying decisions.",
                closing: "Organizations that invest in authority become the ones buyers remember, and recommend.",
              },
              {
                step: "04", label: "Engage",
                lead: "When buyers are ready to take the next step, the experience should feel effortless.",
                detail: "Clear messaging, intuitive websites, effective outreach, and connected customer journeys help transform interest into meaningful conversations.",
                closing: "",
              },
              {
                step: "05", label: "Choose",
                lead: "Winning new business isn't about being the loudest voice in the market.",
                detail: "It's about becoming the most discoverable, credible, and trusted choice when buyers are ready to decide.",
                closing: "",
                highlight: true,
              },
            ].map(({ step, label, lead, detail, closing, highlight }, i) => (
              <div key={step} style={{
                position: "relative",
                background: highlight ? "#0F1B2D" : "#F9F8F6",
                borderRadius: 12,
                borderTop: `3px solid ${highlight ? "#cb772d" : i === 0 ? "#cb772d" : "rgba(15,27,45,0.2)"}`,
                padding: "28px 20px 32px",
                display: "flex", flexDirection: "column",
                transition: "transform 0.25s, box-shadow 0.25s",
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = highlight ? "0 16px 40px rgba(203,119,45,0.25)" : "0 12px 36px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                {/* Step chip */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: highlight ? "#cb772d" : "#0F1B2D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 13, color: highlight ? "#fff" : "#cb772d" }}>{step}</span>
                  </div>
                  <h4 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: highlight ? "#cb772d" : "#0F1B2D", margin: 0 }}>{label}</h4>
                </div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.7, color: highlight ? "rgba(255,255,255,0.9)" : "#444", fontWeight: 600, marginBottom: 10 }}>{lead}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, lineHeight: 1.7, color: highlight ? "rgba(255,255,255,0.65)" : "#777", marginBottom: closing ? 10 : 0, flexGrow: 1 }}>{detail}</p>
                {closing && <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, lineHeight: 1.65, color: "#cb772d", fontWeight: 600, marginBottom: 0, marginTop: "auto", paddingTop: 10, borderTop: `1px solid ${highlight ? "rgba(255,255,255,0.1)" : "rgba(203,119,45,0.2)"}` }}>{closing}</p>}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── S3: WHY MODERN GROWTH BREAKS DOWN ─────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 120px",
        backgroundImage: "url('/images/techy sagebrush.png')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.55)" }} />
        <CircuitOverlay />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
          <h2 ref={problemView.ref} className={`section-heading reveal${problemView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24 }}>
            Why Great Companies Still Struggle to Grow
          </h2>
          <p className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#444", maxWidth: 680, margin: "0 auto 12px" }}>
            Many organizations don&apos;t have a product problem. They don&apos;t have a talent problem. They don&apos;t even have a marketing problem.
          </p>
          <p className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#444", maxWidth: 680, margin: "0 auto 12px" }}>
            They have an <strong>alignment problem</strong>.
          </p>
          <p className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 12px" }}>
            Brand strategy, marketing, sales, technology, and operations often evolve independently, each with its own goals, tools, and priorities. While every team works hard, the customer experiences a disconnected journey.
          </p>
          <p className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 64px" }}>
            The result is slower growth, missed opportunities, and increasing costs to acquire and retain customers.
          </p>

          {/* 5 problem cards */}
          <div style={{ display: "flex", gap: 20, alignItems: "stretch" }}>
            {problemCards.map(({ icon, title, body }, i) => (
              <div
                key={title}
                className={`reveal${problemView.inView ? ' visible' : ''}`}
                style={{
                  flex: "1 1 0",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: 12,
                  borderTop: "3px solid #cb772d",
                  padding: "40px 24px 44px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  cursor: "default",
                  transitionDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(203,119,45,0.22), 0 4px 20px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ marginBottom: 24, display: "flex", justifyContent: "flex-start" }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.07em", color: "#0F1B2D", marginBottom: 14, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>

          {/* The Cost of Disconnected Growth */}
          <div className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ position: "relative", marginTop: 64, background: "#0F1B2D", borderRadius: 16, padding: "48px 56px", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: 12, lineHeight: 1.3 }}>
              The Cost of Disconnected Growth
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
              When strategy, execution, and technology aren&apos;t aligned, organizations often experience:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 40px" }}>
              {[
                "Inconsistent brand positioning across channels",
                "Lower visibility in search and AI-driven discovery",
                "Reduced buyer confidence and trust",
                "Higher customer acquisition costs",
                "Inefficient marketing and sales efforts",
                "Missed revenue opportunities",
                "Limited visibility into what's actually driving growth",
              ].map(item => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#cb772d", flexShrink: 0, marginTop: 8 }} />
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginTop: 24, fontStyle: "italic" }}>
              These aren&apos;t isolated problems — they&apos;re symptoms of disconnected systems.
            </p>
          </div>

          {/* Closing brand statement */}
          <div className={`reveal${problemView.inView ? ' visible' : ''}`} style={{ marginTop: 48, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 16, lineHeight: 1.3 }}>
              Growth shouldn&apos;t depend on disconnected tactics. It should be built on connected strategy.
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 760, margin: "0 auto 12px" }}>
              The organizations that consistently outperform their competitors don&apos;t simply market more — they align every part of their business around how modern buyers discover, evaluate, and choose. That&apos;s where Brand Iron comes in.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 760, margin: "0 auto" }}>
              We help organizations replace fragmented initiatives with a unified growth system that connects brand strategy, AI visibility, go-to-market execution, revenue engineering, outbound growth, and digital experiences into one measurable strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: BRAND IRON DIFFERENCE ─────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 40px 120px", backgroundImage: "url('/images/horse mane circuit lines_1.png')", backgroundSize: "cover", backgroundPosition: "center top" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,18,40,0.92)" }} />
        <div ref={diffView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className={`section-heading reveal${diffView.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 20 }}>
              Human Crafted. AI Powered. Revenue Driven.
            </h2>
            <p className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 680, margin: "0 auto 16px" }}>
              Technology is transforming how businesses grow, but technology alone has never been a strategy.
            </p>
            <p className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 680, margin: "0 auto 16px" }}>
              AI can accelerate research, uncover insights, automate repetitive tasks, and improve execution. But it can&apos;t replace strategic thinking, market experience, creative judgment, or the human understanding required to build brands that buyers genuinely trust.
            </p>
            <p className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 680, margin: "0 auto" }}>
              At Brand Iron, we believe the strongest growth comes from combining <strong style={{ color: "#FFFFFF" }}>human expertise with AI-assisted intelligence</strong>. Because sustainable growth isn&apos;t automated. It&apos;s engineered.
            </p>
          </div>

          {/* Philosophy cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {[
              {
                number: "01",
                title: "Human Intelligence First",
                body: "Technology amplifies expertise, it doesn't replace it. We use AI to move faster and uncover opportunities. We rely on experienced strategists to ask better questions, make smarter decisions, and build growth systems that create lasting business value.",
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
                title: "Strategy Before Tactics",
                body: "Execution only creates value when it's guided by clear strategic direction. We don't believe in chasing trends or relying on one-size-fits-all playbooks. Every engagement begins with understanding your business, not forcing it into a predefined process.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                    <path d="M18 4l3.6 7.6 8.4 1.1-6.1 5.9 1.5 8.3L18 23l-7.4 3.9 1.5-8.3-6.1-5.9 8.4-1.1z" stroke="#cb772d" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Connected Systems",
                body: "Brand, marketing, sales, technology, and operations perform better when they work together, not in isolation. When every part of your business works together, growth becomes more predictable, more efficient, and easier to scale.",
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
                title: "Outcomes Over Activity",
                body: "Success isn't measured by how much marketing you produce. It's measured by stronger positioning, better opportunities, and sustainable revenue growth.",
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

          {/* What Makes Brand Iron Different */}
          <div className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ position: "relative", marginTop: 56, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "48px 56px", marginBottom: 28, overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, transparent, rgba(203,119,45,0.6), transparent)" }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>What Makes Brand Iron Different</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>
              We don&apos;t deliver disconnected marketing services. We engineer connected growth systems.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
              Instead of treating branding, marketing, sales, technology, and operations as separate initiatives, we bring them together into one unified strategy — so every investment contributes to measurable business outcomes.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 40px", marginBottom: 12 }}>
              {[
                "That means your messaging supports your positioning.",
                "Your visibility supports your demand generation.",
                "Your website supports your sales process.",
                "Your technology supports your team.",
                "And your data supports better decisions.",
              ].map(item => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#cb772d", flexShrink: 0, marginTop: 8 }} />
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
              When every part of your business works together, growth becomes more predictable, more efficient, and easier to scale.
            </p>
          </div>

          {/* Our Philosophy */}
          <div className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "48px 56px", marginBottom: 28 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Our Philosophy</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>
              Great brands aren&apos;t built through isolated tactics.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
              They&apos;re forged through deliberate strategy. Built on trust. Strengthened by visibility. Accelerated through execution. Measured by business outcomes.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
              We don&apos;t believe in chasing trends or relying on one-size-fits-all playbooks.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
              Every organization faces unique market dynamics, customer expectations, competitive pressures, and growth objectives. That&apos;s why every engagement begins with understanding your business — not forcing your business into a predefined process.
            </p>
          </div>

          {/* Our Commitment */}
          <div className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ position: "relative", background: "rgba(203,119,45,0.08)", border: "1px solid rgba(203,119,45,0.2)", borderRadius: 16, padding: "48px 56px", marginBottom: 28, overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Our Commitment</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 8 }}>
              Every recommendation we make is guided by one question:
            </p>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#cb772d", marginBottom: 16, lineHeight: 1.3 }}>
              Will this create measurable value for the business?
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
              If the answer is no, we don&apos;t recommend it.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
              We&apos;re not interested in adding complexity, selling unnecessary services, or maximizing activity for the sake of appearances.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>
              Our focus is simple: Build strategies that move businesses forward.
            </p>
          </div>

          {/* S4 closing statement */}
          <div className={`reveal${diffView.inView ? ' visible' : ''}`} style={{ textAlign: "center", padding: "0 40px" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 680, margin: "0 auto 8px" }}>
              Modern growth requires more than marketing.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 680, margin: "0 auto" }}>
              It requires a partner who understands how brand strategy, discoverability, demand generation, technology, and revenue operations work together to create competitive advantage. That&apos;s the role Brand Iron was built to play.
            </p>
          </div>
        </div>
      </section>

      {/* ── S5: GROWTH FRAMEWORK ──────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px 120px" }}>
        <div ref={frameworkView.ref} style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${frameworkView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20 }}>
            A Connected Framework for Modern Growth
          </h2>
          <p className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 16px" }}>
            Growth doesn&apos;t happen through a single initiative. It happens when every part of your business works together, from how buyers discover your brand to how your team converts opportunities and measures success.
          </p>
          <p className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto 72px" }}>
            The Brand Iron Growth Framework connects strategy, visibility, execution, technology, and revenue into one integrated system designed to help organizations become discoverable, trusted, and chosen.
          </p>

          {/* 3 core pillars */}
          <div className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 32 }}>
            {[
              {
                label: "Brand Strategy", sub: "Build the foundation.", color: "#0F1B2D",
                body: "Every successful growth initiative begins with clarity. We help organizations define their market position, differentiate from competitors, and build messaging that resonates with the audiences they want to reach.",
              },
              {
                label: "AI Visibility & Discoverability", sub: "Be found where buyers are looking.", color: "#1c3652",
                body: "Modern buyers search differently. We help organizations increase their visibility across search engines, AI-powered platforms, industry publications, and digital channels where buying decisions begin.",
              },
              {
                label: "Go-to-Market Strategy", sub: "Turn strategy into execution.", color: "#2d4f72",
                body: "A great strategy only creates value when it's executed effectively. We develop go-to-market plans that align positioning, messaging, channels, campaigns, and sales efforts to generate predictable commercial momentum.",
              },
            ].map(({ label, sub, color, body }) => (
              <div key={label} style={{ background: color, borderRadius: 12, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 17, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: 8 }}>{label}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "#cb772d", fontStyle: "italic", fontWeight: 600, marginBottom: 16, letterSpacing: "0.06em" }}>{sub}</div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Supporting systems */}
          <p className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16, textAlign: "center" }}>
            Supporting Growth Systems
          </p>
          <div className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
            {[
              { label: "Revenue Engineering", desc: "Align marketing, sales, CRM, automation, analytics, and reporting into one measurable revenue system that improves efficiency and supports long-term growth.", color: "#a5621e" },
              { label: "Outbound Growth", desc: "Accelerate pipeline development through strategic prospecting, LinkedIn outreach, email campaigns, SDR programs, appointment setting, and sales enablement.", color: "#b06928" },
              { label: "Website Development", desc: "Build digital experiences that don't just look impressive — they're designed for discoverability, conversion, accessibility, and measurable business performance.", color: "#ba7030" },
              { label: "Capital Raise Support", desc: "Help founders and leadership teams prepare for investment through compelling pitch decks, fundraising strategy, investor outreach, and market-ready storytelling.", color: "#cb772d" },
            ].map(({ label, desc, color }) => (
              <div key={label} style={{ background: color, borderRadius: 10, padding: "24px 20px" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 14, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: 10 }}>{label}</div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, lineHeight: 1.65, color: "rgba(255,255,255,0.82)", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 48 }}>
            {["Discoverable", "Trusted", "Chosen", "Revenue"].map((word, i) => (
              <div key={word} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: "#cb772d" }}>{word}</span>
                {i < 3 && <span style={{ color: "#cb772d", fontSize: 20 }}>•</span>}
              </div>
            ))}
          </div>

          {/* Closing brand statement */}
          <div className={`reveal${frameworkView.inView ? ' visible' : ''}`} style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 12 }}>
              Every engagement is different. Some organizations need stronger positioning. Others need better visibility, smarter revenue systems, or scalable outbound programs.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 12 }}>
              Whatever the challenge, our framework adapts to your business — not the other way around.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 24 }}>
              Because sustainable growth isn&apos;t built through disconnected services. It&apos;s built through connected systems working toward a common outcome.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#888", fontStyle: "italic" }}>
              While every engagement is tailored to your goals, our approach follows a proven methodology that transforms strategy into measurable business outcomes.
            </p>
          </div>
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
            <h2 className={`section-heading reveal${servicesView.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 20 }}>
              Solutions That Move Businesses Forward
            </h2>
            <p className={`reveal${servicesView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 680, margin: "0 auto 16px" }}>
              Every organization faces different growth challenges. Some need a stronger market position. Others need to improve discoverability, generate more qualified demand, optimize revenue operations, or prepare for investment.
            </p>
            <p className={`reveal${servicesView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: 680, margin: "0 auto" }}>
              Rather than offering disconnected services, Brand Iron delivers integrated solutions that work together to help organizations compete more effectively and grow with confidence.
            </p>
          </div>
          <div className={`reveal${servicesView.inView ? ' visible' : ''}`}>
            <ServiceCarousel />
          </div>

          {/* S6 Closing brand statement */}
          <div className={`reveal${servicesView.inView ? ' visible' : ''}`} style={{ marginTop: 64, textAlign: "center", maxWidth: 800, margin: "64px auto 0" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
              Every solution is designed to stand on its own — but the greatest impact comes when they&apos;re connected through a unified strategy.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
              Whether you&apos;re refining your brand, expanding your market presence, improving revenue operations, or preparing for investment, Brand Iron helps ensure every initiative contributes to measurable business outcomes.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>
              While every engagement is tailored to your goals, our approach follows a proven methodology that transforms strategy into execution — and execution into measurable growth.
            </p>
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
            <h2 className={`section-heading reveal${processView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20 }}>
              From Strategy to Measurable Growth
            </h2>
            <p className={`reveal${processView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 640, margin: "0 auto 12px" }}>
              Growth isn&apos;t achieved through isolated projects or one-time campaigns. It&apos;s built through a disciplined process that aligns strategy, execution, technology, and continuous optimization.
            </p>
            <p className={`reveal${processView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 640, margin: "0 auto" }}>
              Every Brand Iron engagement follows a proven framework designed to reduce uncertainty, create alignment, and help organizations build sustainable competitive advantage.
            </p>
          </div>

          {/* 4 connected process cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }}>
            {/* Connector line */}
            <div style={{ position: "absolute", top: 60, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(to right, #0F1B2D, #cb772d)", zIndex: 0 }} />
            {[
              {
                step: "01", title: "Discover", subtitle: "Understand Before You Execute",
                body: "Every successful initiative starts with clarity. Before making recommendations, we take the time to understand your business, market, customers, competitors, current performance, and growth objectives. This discovery phase helps uncover opportunities, identify gaps, and establish a strategic foundation for everything that follows.",
                includes: ["Market Research", "Competitive Analysis", "Brand Assessment", "AI Visibility Assessment", "Revenue Opportunity Analysis", "Customer & Buyer Research", "Growth Workshops"],
              },
              {
                step: "02", title: "Forge", subtitle: "Create the Strategy That Moves Your Business Forward",
                body: "Insights alone don't create growth. Using what we've learned, we develop a strategy tailored to your organization — defining your market position, messaging, customer journey, go-to-market approach, and growth priorities. Every recommendation is aligned with measurable business outcomes rather than isolated marketing activities.",
                includes: ["Brand Positioning", "Messaging Framework", "GTM Strategy", "Revenue Roadmap", "Website Strategy", "Content Strategy", "AI Visibility Strategy"],
              },
              {
                step: "03", title: "Build", subtitle: "Transform Strategy Into Execution",
                body: "Once the strategy is defined, we build the systems that bring it to life. This is where planning becomes implementation — from improving discoverability and launching campaigns to optimizing websites, automating workflows, and enabling sales teams. Every initiative is connected to the broader growth strategy to ensure consistency across the customer journey.",
                includes: ["Website Development", "AI Visibility Implementation", "SEO & Content", "Marketing Automation", "CRM Optimization", "Outbound Programs", "Revenue Operations", "Campaign Execution"],
              },
              {
                step: "04", title: "Scale", subtitle: "Measure. Optimize. Improve. Repeat.",
                body: "Growth isn't static. Markets evolve. Technology changes. Buyer expectations shift. We continuously measure performance, analyze results, identify new opportunities, and refine strategies to help your organization stay competitive and maintain momentum. The goal isn't simply to generate results today — it's to build systems that continue delivering value tomorrow.",
                includes: ["Performance Reporting", "Revenue Attribution", "Conversion Optimization", "AI Visibility Monitoring", "Strategic Reviews", "Continuous Optimization", "Growth Planning"],
              },
            ].map(({ step, title, subtitle, body, includes }, i) => {
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
                  <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: isHovered ? "#cb772d" : "#0F1B2D", marginBottom: 8, transition: "color 0.3s" }}>{title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, color: "#cb772d", letterSpacing: "0.06em", marginBottom: 16 }}>{subtitle}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: isHovered ? "rgba(255,255,255,0.75)" : "#555", transition: "color 0.3s", marginBottom: 20, textAlign: "left" }}>{body}</p>
                  <div style={{ borderTop: `1px solid ${isHovered ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`, paddingTop: 16 }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: isHovered ? "rgba(255,255,255,0.4)" : "#aaa", marginBottom: 10, textAlign: "left" }}>What this may include</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, textAlign: "left" }}>
                      {includes.map(inc => (
                        <div key={inc} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#cb772d", flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: isHovered ? "rgba(255,255,255,0.6)" : "#666" }}>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* One Continuous Growth System */}
          <div className={`reveal${processView.inView ? ' visible' : ''}`} style={{ marginTop: 64, background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "48px 56px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F1B2D", marginBottom: 16 }}>
              One Continuous Growth System
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 640, margin: "0 auto 24px" }}>
              Our process isn&apos;t a series of disconnected phases. Each stage informs the next, creating a continuous cycle of learning, execution, and improvement.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 28 }}>
              {["Discover", "Forge", "Build", "Scale", "Discover Again"].map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 14, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em", color: i === 4 ? "#cb772d" : "#0F1B2D" }}>{s}</span>
                  {i < 4 && <svg width="20" height="12" viewBox="0 0 20 12" fill="none"><path d="M2 6h13M11 2l5 4-5 4" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                "Every insight strengthens the next strategy.",
                "Every optimization improves future performance.",
                "Every success creates new opportunities for growth.",
              ].map(line => (
                <p key={line} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: "#555", fontStyle: "italic", margin: 0 }}>{line}</p>
              ))}
            </div>
          </div>

          {/* S7 closing */}
          <div className={`reveal${processView.inView ? ' visible' : ''}`} style={{ marginTop: 48, textAlign: "center", maxWidth: 760, margin: "48px auto 0" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 12 }}>
              Growth isn&apos;t a one-time project — it&apos;s an ongoing discipline.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 12 }}>
              By combining strategic thinking, AI-assisted insights, and continuous optimization, Brand Iron helps organizations adapt to changing markets, strengthen their competitive position, and build systems designed for long-term success.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555" }}>
              Because sustainable growth isn&apos;t built through isolated campaigns. It&apos;s forged through continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* ── S8: RESULTS THAT MATTER ───────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 40px 120px", backgroundImage: "url('/images/bg-barn.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,15,32,0.90)" }} />
        <div ref={resultsView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <h2 className={`section-heading reveal${resultsView.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 20 }}>
              Measure What Matters
            </h2>
            <p className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 640, margin: "0 auto 12px" }}>
              Growth isn&apos;t measured by how many campaigns you launch, how much content you publish, or how many reports you generate.
            </p>
            <p className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.60)", maxWidth: 640, margin: "0 auto 12px" }}>
              It&apos;s measured by stronger market positioning, better customer conversations, improved operational efficiency, and sustainable revenue growth.
            </p>
            <p className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.60)", maxWidth: 640, margin: "0 auto 12px" }}>
              Every recommendation we make is designed to contribute to meaningful business outcomes — not simply increase marketing activity.
            </p>
            <p className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.60)", maxWidth: 640, margin: "0 auto" }}>
              Because at the end of the day, executives don&apos;t invest in marketing. They invest in business performance.
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
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.62)" }}>{note}</div>
              </div>
            ))}
          </div>

          {/* 6 outcome cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Greater Discoverability", body: "Become easier to find across search engines, AI-powered platforms, industry publications, and digital channels where modern buyers begin their research. When buyers can find you earlier, you create more opportunities to earn their business." },
              { title: "Stronger Brand Authority", body: "Build trust through strategic positioning, consistent messaging, thought leadership, and a digital presence that reinforces credibility at every stage of the buying journey. Organizations that establish authority become the ones buyers remember, and recommend." },
              { title: "Higher-Quality Demand", body: "Shift from generating more activity to creating better opportunities. By aligning messaging, targeting, and customer journeys, we help organizations attract prospects who are a stronger fit for their business." },
              { title: "Better Conversion Performance", body: "Optimize every stage of the customer journey, from first impression to sales conversation, to reduce friction and improve the effectiveness of your marketing and sales efforts. Small improvements across the journey often create significant business impact." },
              { title: "Connected Revenue Operations", body: "Bring together marketing, sales, CRM, automation, reporting, and analytics into one connected system that improves visibility, supports better decision-making, and creates operational efficiency. When teams work from the same data, growth becomes easier to manage and scale." },
              { title: "Sustainable Business Growth", body: "Our goal isn't short-term spikes in performance. It's helping organizations build repeatable systems that continue generating value as markets evolve and businesses grow. Because sustainable growth is built through consistency, not quick fixes." },
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
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.72)" }}>{body}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", fontStyle: "italic", marginTop: 32, marginBottom: 56 }}>
            * Representative outcomes based on client implementations. Results vary by business model and execution.
          </p>

          {/* Success Is About More Than Metrics */}
          <div className={`reveal${resultsView.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: 48 }}>
            <div>
              <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.3 }}>
                Success Is About More Than Metrics
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
                Some results can be measured in dashboards. Others are reflected in how your business operates.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
                You may see:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Stronger positioning in competitive markets",
                  "Increased visibility across search and AI platforms",
                  "More qualified sales conversations",
                  "Better alignment between marketing and sales",
                  "Improved customer confidence and trust",
                  "Faster decision-making through connected data",
                  "More efficient processes powered by automation",
                  "Greater confidence in your long-term growth strategy",
                ].map(item => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#cb772d", flexShrink: 0, marginTop: 7 }} />
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", fontStyle: "italic", marginTop: 16 }}>
                These are the outcomes that strengthen organizations — not just marketing departments.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 20, lineHeight: 1.3 }}>
                Performance Is Built Through Alignment
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
                The strongest businesses don&apos;t succeed because one campaign performs well.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
                They succeed because strategy, messaging, visibility, technology, sales, and operations all work together toward a common objective.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
                That&apos;s what Brand Iron helps build.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>
                A connected growth system designed to create measurable business value over time.
              </p>
            </div>
          </div>
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
              <h2 className={`section-heading reveal${insightsView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24, textAlign: "left" }}>
                Insights That Help You Stay Ahead
              </h2>
              <p className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 12 }}>
                Markets evolve. Buyer behavior changes. Technology advances. The strategies that worked yesterday won&apos;t necessarily drive growth tomorrow.
              </p>
              <p className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 12 }}>
                Our Insights &amp; Perspectives explore the trends, frameworks, and practical strategies shaping modern business growth, from AI visibility and brand positioning to revenue operations and go-to-market execution.
              </p>
              <p className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 32 }}>
                Whether you&apos;re refining your strategy or preparing for your next stage of growth, our goal is to provide ideas you can apply, not just content to consume.
              </p>
              <div className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ background: "#F0EBE4", borderRadius: 12, padding: "28px 28px", marginBottom: 24 }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#cb772d", marginBottom: 12 }}>Why We Share What We Learn</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 8 }}>
                  Knowledge is most valuable when it&apos;s shared. We believe better-informed leaders make better business decisions.
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#555" }}>
                  That&apos;s why we continuously publish insights drawn from real-world experience, market research, emerging technologies, and the challenges organizations face as buyer behavior continues to evolve. Our goal isn&apos;t simply to keep up with change — it&apos;s to help our clients stay ahead of it.
                </p>
              </div>
              <p className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: "#666", marginBottom: 20 }}>
                Browse articles, guides, and practical resources designed to help you navigate today&apos;s evolving growth landscape.
              </p>
              <div className={`reveal${insightsView.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/blog" className="hero-btn-primary" style={{ fontSize: 13, padding: "12px 28px" }}>
                  View All Insights →
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
            <h2 className={`section-heading reveal${partnerView.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24 }}>
              Growth Is a Journey. You Shouldn&apos;t Have to Navigate It Alone.
            </h2>
            <p className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 12px" }}>
              Business growth isn&apos;t linear. Markets shift. Buyer behavior evolves. Technology advances. New competitors emerge. What worked a year ago may no longer be enough to stay ahead.
            </p>
            <p className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto" }}>
              That&apos;s why organizations need more than a collection of vendors delivering disconnected services. They need a strategic partner who understands how every part of the business contributes to long-term success, and how to bring those pieces together into one cohesive growth strategy.
            </p>
          </div>

          {/* We Build Alongside Your Team */}
          <div className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{ background: "#0F1B2D", borderRadius: 16, padding: "48px 56px", marginBottom: 64 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>We Build Alongside Your Team</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>
              Whether you&apos;re launching a new offering, repositioning your brand, improving visibility, scaling demand generation, strengthening revenue operations, or preparing for investment, we work as an extension of your leadership team.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
              Our role isn&apos;t simply to execute deliverables. It&apos;s to help you make better strategic decisions, prioritize the right opportunities, and build systems that continue creating value long after individual projects are complete.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
              Because the strongest partnerships are built on shared goals — not transactions.
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
                title: "Strategic Thinking Before Execution",
                body: "Every recommendation begins with understanding your business, your market, and your objectives, not selling a predefined solution.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M8 20c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 10V6M12 28h12M18 28v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="20" r="3" fill="#cb772d"/>
                  </svg>
                ),
                title: "Practical Guidance",
                body: "We believe strategy should be actionable. Our work is designed to help your team move forward with confidence through clear priorities, practical execution, and measurable outcomes.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M6 30l8-12 6 4 10-14" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 8l4-4M28 4h4v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Connected Expertise",
                body: "Brand strategy, AI visibility, go-to-market planning, revenue engineering, website development, outbound growth, and capital raise support aren't isolated disciplines. They're connected components of modern business growth. We help ensure they work together.",
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
                title: "Long-Term Perspective",
                body: "Growth isn't built through one successful campaign. It's built through consistent improvement, informed decision-making, and strategies that evolve alongside your business. Our focus is on creating lasting value, not short-term wins.",
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
            position: "relative", background: "#0F1B2D", borderRadius: 16, padding: "56px 64px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>
                Our Promise
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.8)", marginBottom: 8 }}>
                We won&apos;t recommend services you don&apos;t need.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.8)", marginBottom: 8 }}>
                We won&apos;t chase vanity metrics.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
                We won&apos;t confuse activity with progress.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
                Instead, we&apos;ll help you focus on what matters most:
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Building a stronger market position.",
                "Becoming easier to discover.",
                "Earning buyer trust.",
                "Creating sustainable demand.",
                "Connecting your revenue systems.",
                "Supporting smarter business decisions.",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(203,119,45,0.15)", border: "1px solid rgba(203,119,45,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3L10 3" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)" }}>{item}</span>
                </div>
              ))}
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontStyle: "italic", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginTop: 8 }}>
                Because when your business grows, that&apos;s how we measure our success.
              </p>
            </div>
          </div>

          <p className={`reveal${partnerView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.9, color: "#555", maxWidth: 860, margin: "48px auto 0", textAlign: "center" }}>
            We&apos;re here to help you build what&apos;s next. Whether you&apos;re defining your brand, entering a new market, improving AI visibility, scaling revenue operations, or preparing for your next stage of growth, Brand Iron is ready to help you move forward with clarity, confidence, and purpose. Every successful growth story begins with a conversation. Let&apos;s start yours.
          </p>
        </div>
      </section>

      {/* ── S12: FINAL CTA ────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "140px 40px 140px",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.88)" }} />
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
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", maxWidth: 720, margin: "0 auto 24px", fontStyle: "italic" }}>
            The strongest brands don&apos;t leave growth to chance. They build it with intention.
          </p>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.7)", maxWidth: 760, margin: "0 auto 48px" }}>
            Every organization reaches a point where incremental improvements are no longer enough. Whether you&apos;re refining your market position, increasing AI visibility, launching a new go-to-market strategy, optimizing revenue operations, strengthening outbound growth, or preparing for investment, success starts with a clear strategy and the right partner. Brand Iron helps organizations connect the pieces that matter most — brand, visibility, demand, technology, and revenue — into one unified system designed for sustainable business growth. Because modern growth isn&apos;t built through disconnected tactics. It&apos;s forged through strategic thinking, disciplined execution, and continuous improvement.
          </p>

          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <Link href="/contact" className="hero-btn-primary" style={{ fontSize: 15, padding: "16px 40px" }}>
              Book a Strategy Session
            </Link>
            <Link href="/services" className="hero-btn-outline" style={{ fontSize: 15, padding: "16px 40px" }}>
              Explore Our Solutions
            </Link>
          </div>

          {/* Closing brand statement */}
          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ borderTop: "1px solid rgba(203,119,45,0.3)", paddingTop: 40 }}>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontWeight: 400, fontSize: "clamp(22px, 3vw, 32px)", textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 16 }}>
              Forging Brands. Driving Revenue.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: 680, margin: "0 auto" }}>
              Helping organizations become discoverable, trusted, and chosen through strategic positioning, AI visibility, revenue engineering, and connected growth systems.
            </p>
          </div>

        </div>
      </section>

    </main>
    </>
  );
}
