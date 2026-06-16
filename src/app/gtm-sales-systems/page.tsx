import Link from "next/link";

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
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            GTM &<br /><span style={{ color: "#cb772d" }}>Sales Systems</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Built to connect. Built to scale. We architect go-to-market systems and sales infrastructure that turn strategy into closed revenue.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* Core Offering */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Core Services</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D" }}>Everything That Drives Revenue</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "🗺️", title: "GTM Strategy", body: "Market positioning, ICP definition, messaging framework, and channel strategy built around your revenue targets." },
              { icon: "⚙️", title: "CRM Architecture", body: "HubSpot or Salesforce configured as a true revenue operating system — not just a contact database." },
              { icon: "🔗", title: "Tech Stack Integration", body: "Your entire MarTech and SalesTech stack connected so data flows cleanly from first touch to closed deal." },
              { icon: "📈", title: "Pipeline Systems", body: "Stage-by-stage pipeline architecture with defined entry/exit criteria, SLAs, and automated alerts." },
              { icon: "👥", title: "Sales Enablement", body: "Playbooks, cadences, scripts, and battle cards your team actually uses to win more deals." },
              { icon: "🎯", title: "ICP & Territory Design", body: "Data-driven ideal customer profiles and territory planning to focus effort on the highest-value opportunities." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "#F8F7F4", borderRadius: 8, padding: "32px 28px", borderLeft: "4px solid #cb772d" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 19, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#555" }}>{body}</p>
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
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>What You Can Expect</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, textAlign: "center" }}>
            {[
              { num: "2X", label: "Sales cycle compression" },
              { num: "40%", label: "Higher win rates" },
              { num: "3X", label: "Pipeline coverage" },
              { num: "100%", label: "CRM adoption" },
            ].map(({ num, label }) => (
              <div key={num}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 52, fontWeight: 700, color: "#cb772d", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Build Your GTM Engine</h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Let&apos;s map out your GTM system and identify the gaps that are costing you pipeline.</p>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#FFFFFF", color: "#cb772d",
          fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "16px 36px", borderRadius: 4, textDecoration: "none",
        }}>Book Strategy Session</Link>
      </section>
    </main>
  );
}
