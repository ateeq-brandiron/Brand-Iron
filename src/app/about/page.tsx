import Link from "next/link";

export default function AboutPage() {
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
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>About BrandIron</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 800, lineHeight: 1.0, marginBottom: 28,
          }}>
            We Build Revenue Engines.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 560 }}>
            BrandIron exists because too many organizations invest in disconnected strategies, tools, and agencies — and wonder why growth doesn&apos;t compound.
          </p>
        </div>
      </section>

      {/* Mission + Stats */}
      <section style={{ background: "#0D1A2E", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 72 }}>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Our Mission</p>
              <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 20, lineHeight: 1.1 }}>
                Transform How Companies Generate Revenue
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 16 }}>
                We combine strategy, branding, go-to-market, AI, automation, CRM, and revenue operations into integrated systems that drive compounding, measurable growth.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                Companies don&apos;t fail because they lack effort. They fail because their revenue systems are fragmented — marketing, sales, technology, and data all operating in separate lanes.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(203,119,45,0.2)", borderRadius: 12, overflow: "hidden" }}>
              {[
                { num: "3X", label: "Average Pipeline Growth" },
                { num: "60%", label: "Less Manual Work" },
                { num: "50+", label: "Clients Transformed" },
                { num: "100%", label: "Revenue Visibility" },
              ].map(({ num, label }) => (
                <div key={num} style={{ background: "#0F1B2D", padding: "36px 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 52, fontWeight: 700, color: "#cb772d", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.4, marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 8 }}>Core Values</p>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 36, lineHeight: 1.1 }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Revenue First", body: "Every decision is evaluated through the lens of revenue impact. We don't do things that look good. We do things that work." },
              { title: "Integrated Thinking", body: "We connect strategy to execution, marketing to sales, technology to outcomes. Silos are the enemy of revenue." },
              { title: "AI-Augmented Excellence", body: "We combine the power of AI with the judgment of experienced operators to deliver outcomes neither could achieve alone." },
              { title: "Radical Transparency", body: "We tell you what you need to hear, not what you want to hear. Our clients grow because we hold them to a higher standard." },
              { title: "Measurable Impact", body: "If we can't measure it, we don't do it. Every engagement is structured around KPIs that connect to business performance." },
              { title: "Execution Over Theory", body: "Strategy without execution is just planning. We are operators who build the systems and run the plays alongside you." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "28px 24px", borderLeft: "3px solid #cb772d" }}>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#cb772d", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 8 }}>Our Approach</p>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 48, lineHeight: 1.1 }}>How We Work</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { step: "01", title: "Diagnose", body: "We start by understanding how revenue actually flows through your business — not how it's supposed to work, but how it does." },
              { step: "02", title: "Design", body: "We design the integrated revenue system your business needs — strategy, positioning, technology, and processes aligned to outcomes." },
              { step: "03", title: "Build", body: "We build the infrastructure: CRM systems, AI automation, demand generation engines, and revenue intelligence platforms." },
              { step: "04", title: "Deploy", body: "We deploy the system with your team, ensuring adoption, training, and the organizational buy-in that determines success." },
              { step: "05", title: "Optimize", body: "We continuously monitor performance, identify optimization opportunities, and iterate based on real revenue data." },
            ].map(({ step, title, body }) => (
              <div key={step} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#0D1A2E", border: "2px solid #cb772d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 18, color: "#cb772d" }}>{step}</span>
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Ready To Work With BrandIron?</h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.88)", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>Book a strategy session and let&apos;s design the revenue system your business deserves.</p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#cb772d", fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", borderRadius: 4, textDecoration: "none" }}>Book Strategy Session</Link>
      </section>
    </main>
  );
}
