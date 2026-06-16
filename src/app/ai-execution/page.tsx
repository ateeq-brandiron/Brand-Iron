import Link from "next/link";

export default function AIExecutionPage() {
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
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            AI Execution &<br /><span style={{ color: "#cb772d" }}>Automation</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            From lead generation to booked meetings — fully automated. We build and deploy the AI systems that run your revenue engine while your team focuses on closing.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* What We Automate */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>What We Automate</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D" }}>Every Revenue-Generating Workflow</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {[
              { icon: "📧", title: "Outbound Sequences", body: "AI-personalised email and LinkedIn outreach that books meetings — without your team lifting a finger." },
              { icon: "🎯", title: "Lead Scoring & Routing", body: "Intelligent models that score inbound leads in real-time and route them to the right rep instantly." },
              { icon: "📝", title: "Content Automation", body: "Blog posts, ads, social content, and case studies — generated at scale with your brand voice." },
              { icon: "🔄", title: "Nurture Workflows", body: "Behaviour-triggered sequences that move prospects through the funnel with zero manual effort." },
              { icon: "📊", title: "Reporting Automation", body: "Daily, weekly, and monthly revenue reports assembled and delivered automatically." },
              { icon: "🤝", title: "Meeting Booking AI", body: "Conversational AI that qualifies, schedules, and follows up — 24/7 without a human in the loop." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "#F8F7F4", borderRadius: 8, padding: "32px 28px", borderTop: "3px solid #cb772d" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, textAlign: "center" }}>
          {[
            { num: "20hrs", label: "Saved per rep, per week" },
            { num: "4X", label: "More outreach capacity" },
            { num: "65%", label: "Faster lead response time" },
          ].map(({ num, label }) => (
            <div key={num}>
              <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 52, fontWeight: 700, color: "#cb772d", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Montserrat', sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section style={{ background: "#F8F7F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 16 }}>Platforms We Build On</h2>
          <p style={{ fontSize: 16, color: "#666", marginBottom: 48 }}>We work with your existing stack or recommend the best tools for your use case.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["HubSpot", "Salesforce", "Make.com", "Zapier", "Clay", "Apollo", "Instantly", "OpenAI", "Anthropic Claude", "n8n", "ActiveCampaign", "Lemlist"].map(tool => (
              <div key={tool} style={{
                padding: "10px 20px", background: "#FFFFFF", border: "1px solid #E8E8E8",
                borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 14,
                fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0F1B2D",
              }}>{tool}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Let&apos;s Automate Your Revenue</h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Book a session and we&apos;ll map out exactly which workflows to automate first for the biggest impact.</p>
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
