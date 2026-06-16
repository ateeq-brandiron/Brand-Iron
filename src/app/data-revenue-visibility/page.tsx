import Link from "next/link";

export default function DataRevenueVisibilityPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.78)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            Data &<br /><span style={{ color: "#cb772d" }}>Revenue Visibility</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Everything working together. We build the data infrastructure and dashboards that give you complete, real-time visibility across every revenue function.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* Problem / Solution */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>The Problem</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 2.5vw, 36px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>Flying Blind</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Marketing, sales, and finance data live in different tools with no unified view",
                "Leadership asks for revenue forecasts and no one can answer confidently",
                "You can't tell which campaigns, channels, or reps are driving real ROI",
                "Data exists but takes days to pull into a usable report",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.55 }}>
                  <span style={{ color: "#cb772d", fontSize: 18, flexShrink: 0 }}>✗</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>The Solution</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 2.5vw, 36px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>Full Revenue Intelligence</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Single source of truth — all revenue data unified in one intelligence layer",
                "Live dashboards showing pipeline, CAC, LTV, win rate, and velocity in real-time",
                "Attribution models that show exactly which activities drive closed revenue",
                "Automated reports delivered to leadership every morning — no manual effort",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.55 }}>
                  <span style={{ color: "#22C55E", fontSize: 18, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>What We Build</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { icon: "📊", title: "Revenue Dashboard", body: "Pipeline, bookings, churn, and expansion — all in one live view updated automatically." },
              { icon: "🎯", title: "Marketing Attribution", body: "First-touch, last-touch, and multi-touch models showing true channel ROI." },
              { icon: "💼", title: "Sales Performance", body: "Rep-level activity, conversion rates, deal velocity, and forecast accuracy." },
              { icon: "🔮", title: "Revenue Forecasting", body: "AI-assisted forecasting that gives leadership confident pipeline projections." },
              { icon: "📉", title: "CAC & LTV Analysis", body: "Customer acquisition cost and lifetime value tracked by segment, channel, and cohort." },
              { icon: "⚡", title: "Funnel Conversion", body: "Stage-by-stage conversion rates with automated alerts when metrics drop." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "28px 24px" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Get Complete Revenue Visibility</h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Book a session and we&apos;ll audit your current data setup and show you exactly what&apos;s possible.</p>
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
