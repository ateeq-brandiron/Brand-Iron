"use client";
import Link from "next/link";

const GTMStrategyIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" stroke="#cb772d" strokeWidth="2" />
    <line x1="18" y1="4" x2="18" y2="32" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="18" x2="32" y2="18" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="18" r="3" stroke="#cb772d" strokeWidth="2" />
    <path d="M18 8 L20 13 L18 12 L16 13 Z" stroke="#cb772d" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
  </svg>
);

const CRMIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="10" rx="11" ry="4" stroke="#cb772d" strokeWidth="2" />
    <path d="M7 10 L7 18" stroke="#cb772d" strokeWidth="2" />
    <path d="M29 10 L29 18" stroke="#cb772d" strokeWidth="2" />
    <ellipse cx="18" cy="18" rx="11" ry="4" stroke="#cb772d" strokeWidth="2" />
    <path d="M7 18 L7 26" stroke="#cb772d" strokeWidth="2" />
    <path d="M29 18 L29 26" stroke="#cb772d" strokeWidth="2" />
    <ellipse cx="18" cy="26" rx="11" ry="4" stroke="#cb772d" strokeWidth="2" />
  </svg>
);

const TechStackIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="18" r="4" stroke="#cb772d" strokeWidth="2" />
    <circle cx="28" cy="10" r="4" stroke="#cb772d" strokeWidth="2" />
    <circle cx="28" cy="26" r="4" stroke="#cb772d" strokeWidth="2" />
    <line x1="12" y1="17" x2="24" y2="11.5" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="19" x2="24" y2="24.5" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PipelineIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8 L30 8 L26 16 L10 16 Z" stroke="#cb772d" strokeWidth="2" strokeLinejoin="round" />
    <path d="M10 16 L26 16 L22 24 L14 24 Z" stroke="#cb772d" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 24 L22 24 L20 30 L16 30 Z" stroke="#cb772d" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const SalesEnablementIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="12" r="5" stroke="#cb772d" strokeWidth="2" />
    <path d="M4 28 C4 22 9 18 13 18 C17 18 22 22 22 28" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="12" r="5" stroke="#cb772d" strokeWidth="2" />
    <path d="M22 28 C22 22 27 18 31 18" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ICPIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" stroke="#cb772d" strokeWidth="2" />
    <circle cx="18" cy="18" r="8" stroke="#cb772d" strokeWidth="2" />
    <circle cx="18" cy="18" r="2.5" stroke="#cb772d" strokeWidth="2" />
    <line x1="18" y1="4" x2="18" y2="10" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="26" x2="18" y2="32" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="18" x2="10" y2="18" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
    <line x1="26" y1="18" x2="32" y2="18" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const coreServices = [
  { icon: <GTMStrategyIcon />, title: "GTM Strategy", body: "Market positioning, ICP definition, messaging framework, and channel strategy built around your revenue targets." },
  { icon: <CRMIcon />, title: "CRM Architecture", body: "HubSpot or Salesforce configured as a true revenue operating system — not just a contact database." },
  { icon: <TechStackIcon />, title: "Tech Stack Integration", body: "Your entire MarTech and SalesTech stack connected so data flows cleanly from first touch to closed deal." },
  { icon: <PipelineIcon />, title: "Pipeline Systems", body: "Stage-by-stage pipeline architecture with defined entry/exit criteria, SLAs, and automated alerts." },
  { icon: <SalesEnablementIcon />, title: "Sales Enablement", body: "Playbooks, cadences, scripts, and battle cards your team actually uses to win more deals." },
  { icon: <ICPIcon />, title: "ICP & Territory Design", body: "Data-driven ideal customer profiles and territory planning to focus effort on the highest-value opportunities." },
];

const stats = [
  { num: "2X", label: "Sales cycle compression" },
  { num: "40%", label: "Higher win rates" },
  { num: "3X", label: "Pipeline coverage" },
  { num: "100%", label: "CRM adoption" },
];

export default function GTMSalesSystemsPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,27,45,0.88)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            GTM &<br /><span style={{ color: "#cb772d" }}>Sales Systems</span>
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Built to connect. Built to scale. We architect go-to-market systems and sales infrastructure that turn strategy into closed revenue.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* Core Offering */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Core Services</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D" }}>Everything That Drives Revenue</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {coreServices.map(({ icon, title, body }) => (
              <div key={title} className="channel-card-left" style={{ background: "#F8F7F4", borderRadius: 8, padding: "32px 28px" }}>
                <div style={{ marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 19, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.65, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{
        position: "relative", padding: "80px 24px",
        backgroundImage: "url('/images/bg-haybales.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,27,45,0.91)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>What You Can Expect</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, textAlign: "center" }}>
            {stats.map(({ num, label }) => (
              <div key={num} className="stat-block-sm">
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 52, fontWeight: 700, color: "#cb772d", lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Build Your GTM Engine</h2>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Let&apos;s map out your GTM system and identify the gaps that are costing you pipeline.</p>
        <Link href="/contact" className="cta-link-btn">Book Strategy Session</Link>
      </section>
    </main>
  );
}
