"use client";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "AI Strategy & Consulting",
    href: "/ai-strategy",
    description: "Executive-level AI roadmapping that connects artificial intelligence to real revenue outcomes. We identify where AI creates the highest ROI in your specific business — and build the plan to get there.",
    deliverables: ["AI Readiness Assessment", "ROI-Mapped AI Roadmap", "Use Case Prioritization", "Build vs. Buy Analysis"],
  },
  {
    number: "02",
    title: "AI Execution & Automation",
    href: "/ai-execution",
    description: "We don't just advise — we build. From AI agents to automated workflows, we deploy intelligent systems that run your revenue operations while your team focuses on high-value work.",
    deliverables: ["AI Agent Deployment", "Workflow Automation", "Lead Scoring & Routing", "Revenue Ops Automation"],
  },
  {
    number: "03",
    title: "GTM & Sales Systems",
    href: "/gtm-sales-systems",
    description: "Go-to-market strategy and sales infrastructure built to convert. We design the systems, sequences, and processes that turn your sales team into a predictable revenue engine.",
    deliverables: ["GTM Strategy", "ICP & Segmentation", "Sales Playbooks", "Pipeline Infrastructure"],
  },
  {
    number: "04",
    title: "Branding & High-Converting Decks",
    href: "/branding-decks",
    description: "Brand positioning and visual storytelling that commands attention and drives action. From investor pitch decks to full brand systems — built to win in competitive markets.",
    deliverables: ["Brand Strategy", "Visual Identity", "Pitch Deck Design", "Sales Collateral"],
  },
  {
    number: "05",
    title: "Data & Revenue Visibility",
    href: "/data-revenue-visibility",
    description: "Real-time revenue intelligence that gives leadership full-funnel clarity. We build the dashboards, data pipelines, and reporting systems that turn raw data into decisive action.",
    deliverables: ["Executive Dashboards", "Revenue Attribution", "KPI Framework", "Predictive Analytics"],
  },
  {
    number: "06",
    title: "Demand Generation & Pipeline",
    href: "/demand-generation",
    description: "Multi-channel demand generation that fills your pipeline with qualified opportunities — consistently, predictably, and at scale. Not campaigns. A system.",
    deliverables: ["Multi-Channel Campaigns", "Content Strategy", "Outbound Engine", "Pipeline Reporting"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "55vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-barn.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.80)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>What We Do</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 800, lineHeight: 1.0, marginBottom: 28,
          }}>
            Our Services
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 600 }}>
            Six integrated capabilities that work together as a complete revenue system — not isolated services, but one unified engine.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section style={{ background: "#0F1B2D", borderBottom: "1px solid rgba(203,119,45,0.25)", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
          {["Strategy → Execution", "AI-Powered Systems", "Full-Funnel Visibility", "Compounding Growth"].map((item, i) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {i > 0 && <span style={{ color: "rgba(203,119,45,0.4)", fontSize: 18, marginRight: 2 }}>·</span>}
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services list */}
      <section style={{ background: "#0D1A2E", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {services.map(({ number, title, href, description, deliverables }) => (
            <Link
              key={href}
              href={href}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10, padding: "36px 40px",
                display: "grid", gridTemplateColumns: "72px 1fr auto",
                gap: 32, alignItems: "center",
                transition: "background 0.2s, border-color 0.2s",
                marginBottom: 12,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(203,119,45,0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(203,119,45,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
              >
                {/* Number */}
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 40, fontWeight: 700, color: "rgba(203,119,45,0.3)", lineHeight: 1, flexShrink: 0 }}>{number}</div>

                {/* Content */}
                <div>
                  <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 36px)", textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 10 }}>{title}</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 16, maxWidth: 620 }}>{description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {deliverables.map(d => (
                      <span key={d} style={{ padding: "4px 12px", border: "1px solid rgba(203,119,45,0.35)", borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#cb772d" }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div style={{ color: "#cb772d", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", background: "#0D1A2E", padding: "100px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent 0%, #cb772d 30%, #cb772d 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(203,119,45,0.10) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 20 }}>Ready To Start?</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(32px, 4vw, 54px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 28 }}>
              Not Sure Where To Start?
            </h2>
            <div style={{ width: 64, height: 3, background: "#cb772d", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a strategy session and we&apos;ll map the exact services your business needs to build a complete revenue engine.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary">Book Strategy Session</Link>
              <Link href="/about" style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2, transition: "color 0.2s ease, border-color 0.2s ease" }}>Meet The Team →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
