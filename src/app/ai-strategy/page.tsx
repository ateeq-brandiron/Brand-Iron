import Link from "next/link";

export default function AIStrategyPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(28,54,82,0.85) 0%, rgba(20,32,55,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            AI Strategy &<br /><span style={{ color: "#cb772d" }}>Consulting</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Know where to go before you start moving. We build your AI roadmap so every investment compounds toward revenue.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* What It Is */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>What We Do</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>Strategy Before Execution</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#555", marginBottom: 20 }}>
              Most companies rush into AI tools without a plan. The result: fragmented tech, wasted spend, and zero competitive advantage. We fix that by starting with strategy.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#555" }}>
              Our AI Strategy engagement maps your current state, identifies the highest-ROI opportunities, and builds a phased roadmap your team can actually execute — tied directly to revenue outcomes.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {["AI Readiness Audit", "Use Case Prioritisation", "ROI Modelling", "Vendor Selection", "Implementation Roadmap", "Team Enablement Plan"].map(item => (
              <div key={item} style={{ background: "#F8F7F4", borderRadius: 8, padding: "20px", borderTop: "2px solid #cb772d" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>How It Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { n: "01", title: "Discovery Call", body: "We learn your business model, current tools, goals, and gaps — no templates, just real conversation." },
              { n: "02", title: "AI Audit", body: "We assess your data infrastructure, team capability, and existing AI initiatives against revenue objectives." },
              { n: "03", title: "Opportunity Map", body: "We identify and score AI use cases by ROI potential, effort, and strategic fit." },
              { n: "04", title: "Roadmap Delivery", body: "You receive a phased, prioritised AI roadmap with success metrics, budget guidance, and vendor recommendations." },
            ].map(({ n, title, body }) => (
              <div key={n} style={{ borderTop: "3px solid #cb772d", padding: "28px 20px" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 44, fontWeight: 700, color: "rgba(203,119,45,0.65)", lineHeight: 1, marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ background: "#F8F7F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 48 }}>What You Walk Away With</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, textAlign: "left" }}>
            {[
              { icon: "📋", title: "AI Strategy Document", body: "A clear, board-ready AI strategy aligned to your revenue goals." },
              { icon: "🗺️", title: "Phased Roadmap", body: "Quarter-by-quarter implementation plan with milestones and KPIs." },
              { icon: "💰", title: "ROI Projections", body: "Quantified estimates of revenue impact and cost savings per initiative." },
              { icon: "🤝", title: "Vendor Shortlist", body: "Curated recommendations of tools and partners that fit your stack and budget." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "#FFFFFF", borderRadius: 8, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#666" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Ready to Build Your AI Strategy?</h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Book a 30-minute strategy session and we&apos;ll show you exactly where AI can move the needle in your business.</p>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#FFFFFF", color: "#cb772d",
          fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "16px 36px", borderRadius: 4, textDecoration: "none",
        }}>Book Strategy Session</Link>
      </section>
    </main>
  );
}
