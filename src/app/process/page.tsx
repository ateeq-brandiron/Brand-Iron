import Link from "next/link";

export default function ProcessPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center top",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(28,54,82,0.85) 0%, rgba(20,32,55,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>How We Work</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 800, lineHeight: 1.0, marginBottom: 28,
          }}>
            Our Process
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 560 }}>
            A proven 5-step system that turns your marketing into a predictable revenue engine. No guesswork. No silos. Just results.
          </p>
        </div>
      </section>

      {/* Timeline steps */}
      <section style={{ background: "#0D1A2E", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {[
            { n: "01", title: "Define The Strategy", body: "We start with a deep revenue audit — your market position, ICP, competitive landscape, and current pipeline gaps. Then we define the positioning, messaging, and growth strategy that everything else is built on.", deliverables: ["Revenue Audit Report", "ICP Definition", "Messaging Framework", "Channel Strategy"] },
            { n: "02", title: "Build The System", body: "We architect your Revenue Engine — designing the CRM infrastructure, automation workflows, data systems, and AI integrations that make execution seamless and scalable.", deliverables: ["CRM Architecture", "Automation Blueprint", "Tech Stack Map", "AI Integration Plan"] },
            { n: "03", title: "Deploy AI Execution", body: "We deploy intelligent agents, outbound sequences, content workflows, and data pipelines. Your revenue engine goes live — running campaigns, scoring leads, and booking meetings automatically.", deliverables: ["Live Campaigns", "AI Agents Deployed", "Outbound Sequences", "Lead Scoring Active"] },
            { n: "04", title: "Drive Pipeline", body: "With systems live, we activate full-funnel demand generation. Multi-channel campaigns coordinated across email, LinkedIn, paid media, and content — all feeding a single, visible pipeline.", deliverables: ["Multi-Channel Campaigns", "Pipeline Dashboard", "Weekly Performance Reports", "Sales Enablement"] },
            { n: "05", title: "Scale Results", body: "We enter the optimization loop — testing, learning, and compounding results every week. What works gets scaled. What doesn't gets cut. Revenue grows predictably.", deliverables: ["Monthly Growth Reviews", "A/B Test Results", "Scaling Playbook", "Quarterly Strategy Sessions"] },
          ].map(({ n, title, body, deliverables }, i) => (
            <div key={n} style={{ display: "flex", gap: 40, marginBottom: 72, position: "relative" }}>
              {/* Number + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "#0F1B2D", border: "2.5px solid #cb772d",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 24, color: "#cb772d" }}>{n}</span>
                </div>
                {i < 4 && <div style={{ width: 2, flex: 1, background: "rgba(203,119,45,0.25)", marginTop: 12, minHeight: 60 }} />}
              </div>
              {/* Content */}
              <div style={{ paddingTop: 12, flex: 1 }}>
                <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 16 }}>{title}</h2>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.70)", marginBottom: 24 }}>{body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {deliverables.map(d => (
                    <span key={d} style={{ padding: "6px 14px", border: "1px solid rgba(203,119,45,0.4)", borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#cb772d" }}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Ready To Start The Process?</h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.88)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Book a strategy session and we&apos;ll walk you through exactly how this applies to your business.</p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#cb772d", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", borderRadius: 4, textDecoration: "none" }}>Book Strategy Session</Link>
      </section>
    </main>
  );
}
