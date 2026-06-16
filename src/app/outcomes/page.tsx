import Link from "next/link";

export default function OutcomesPage() {
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
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Results</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "#FFFFFF",
            maxWidth: 800, lineHeight: 1.0, marginBottom: 28,
          }}>
            What You Can Expect
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 560 }}>
            Real, measurable outcomes from a complete revenue system — not vanity metrics, not guesswork.
          </p>
        </div>
      </section>

      {/* Big stats */}
      <section style={{ background: "#0D1A2E", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(203,119,45,0.2)", borderRadius: 12, overflow: "hidden", marginBottom: 64 }}>
            {[
              { num: "3X", label: "Pipeline Growth", sub: "Average pipeline increase within 90 days" },
              { num: "60%", label: "Less Wasted Effort", sub: "Reduction in manual tasks through AI automation" },
              { num: "100%", label: "Revenue Visibility", sub: "Full-funnel clarity from first touch to close" },
            ].map(({ num, label, sub }) => (
              <div key={num} style={{ background: "#0F1B2D", padding: "48px 32px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 72, fontWeight: 800, color: "#cb772d", lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginTop: 12, marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.70)", lineHeight: 1.5 }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Outcome cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { icon: "🎯", title: "Predictable Pipeline", body: "A system that generates consistent, qualified leads — not dependent on luck, referrals, or heroic individual effort." },
              { icon: "⚡", title: "AI-Powered Efficiency", body: "Automation handles the repetitive work. Your team focuses on high-value activities. Output multiplies without headcount." },
              { icon: "👁️", title: "Full Revenue Visibility", body: "Live dashboards showing pipeline, conversion rates, CAC, LTV, and revenue forecast — updated automatically." },
              { icon: "📈", title: "Compounding Growth", body: "Each month builds on the last. Systems optimize continuously. Results compound as data accumulates." },
              { icon: "🔗", title: "Aligned Teams", body: "Marketing, sales, and ops finally working from the same data, toward the same goals, with clear accountability." },
              { icon: "🚀", title: "Scalable Infrastructure", body: "Revenue systems built to handle 2X, 5X, 10X volume — without rebuilding from scratch every time you grow." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "32px 28px", borderLeft: "3px solid #cb772d" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section style={{ position: "relative", background: "#0D1A2E", padding: "100px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent 0%, #cb772d 30%, #cb772d 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(203,119,45,0.10) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 20 }}>Ready To Start?</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(32px, 4vw, 54px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 28 }}>
              See These Outcomes In Your Business
            </h2>
            <div style={{ width: 64, height: 3, background: "#cb772d", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a session and we&apos;ll show you what&apos;s realistic for your specific business model and market.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary">Book Strategy Session</Link>
              <Link href="/services" style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2, transition: "color 0.2s ease, border-color 0.2s ease" }}>View All Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
