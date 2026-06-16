import Link from "next/link";

export default function DemandGenerationPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-haybales.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,27,45,0.88)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            Demand Generation<br /><span style={{ color: "#cb772d" }}>& Pipeline</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Turn strategy into consistent, qualified opportunities. We run multi-channel demand generation campaigns that fill your pipeline with the right buyers.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* Channels */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Channels & Tactics</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D" }}>Full-Funnel Demand Generation</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "📨", title: "Outbound Email", body: "AI-personalised cold email campaigns with A/B testing, deliverability optimisation, and automated follow-ups that book meetings." },
              { icon: "💼", title: "LinkedIn Outreach", body: "Strategic LinkedIn sequences — connection requests, messaging, content — that build relationships and create pipeline." },
              { icon: "🔍", title: "SEO & Content", body: "Search-optimised content that attracts your ICP, builds authority, and generates inbound leads consistently." },
              { icon: "🎯", title: "Paid Media", body: "Google, LinkedIn, and Meta campaigns engineered for pipeline, not just clicks — with conversion tracking from ad to closed deal." },
              { icon: "🎤", title: "Events & Webinars", body: "Virtual and in-person events that generate qualified pipeline and accelerate deals already in the funnel." },
              { icon: "🤝", title: "Partner & Referral", body: "Structured referral and partner programmes that turn your network into a predictable pipeline channel." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "#F8F7F4", borderRadius: 8, padding: "32px 28px", borderTop: "3px solid #cb772d" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 19, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>What Results Look Like</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, textAlign: "center" }}>
            {[
              { num: "3X", label: "Pipeline increase in 90 days" },
              { num: "55%", label: "Lower cost per qualified meeting" },
              { num: "8X", label: "More outreach capacity vs manual" },
              { num: "40%", label: "Increase in inbound leads" },
            ].map(({ num, label }) => (
              <div key={num}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 52, fontWeight: 700, color: "#cb772d", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ background: "#F8F7F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", textAlign: "center", marginBottom: 56 }}>How We Operate</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { n: "01", title: "ICP & Targeting", body: "We define your ideal customer profile, buying committee, and build precision target lists from multiple data sources." },
              { n: "02", title: "Messaging & Creative", body: "We develop channel-specific messaging and creative that speaks directly to your buyer&apos;s pain points." },
              { n: "03", title: "Launch & Test", body: "We launch campaigns across selected channels, A/B testing everything to find what converts." },
              { n: "04", title: "Optimise & Scale", body: "We double down on what works, kill what doesn&apos;t, and systematically scale pipeline production month over month." },
            ].map(({ n, title, body }) => (
              <div key={n} style={{ background: "#FFFFFF", borderRadius: 8, padding: "28px 24px", borderTop: "3px solid #cb772d", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 44, fontWeight: 700, color: "rgba(203,119,45,0.2)", lineHeight: 1, marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#666" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Ready to Fill Your Pipeline?</h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Book a session and we&apos;ll build your demand generation plan — channels, targeting, and 90-day pipeline forecast.</p>
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
