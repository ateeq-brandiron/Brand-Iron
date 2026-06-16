"use client";
import Link from "next/link";

const brandItems = ["Brand strategy & positioning", "Visual identity system", "Messaging & tone of voice", "Brand guidelines document", "Website design direction", "Social media templates"];
const collateralItems = ["Investor pitch decks", "Sales presentation decks", "Capability statements", "One-pagers & proposals", "Case study design", "Conference & event materials"];

const processSteps = [
  { n: "01", title: "Brand Discovery", body: "Deep dive into your business, competitors, audience, and goals to build a strategic creative brief." },
  { n: "02", title: "Strategy & Direction", body: "We develop positioning, messaging hierarchy, and creative direction before any design begins." },
  { n: "03", title: "Design & Build", body: "Your brand system or deck is designed, refined through feedback rounds, and delivered production-ready." },
  { n: "04", title: "Deploy & Test", body: "We track performance and refine collateral based on real sales conversations and conversion data." },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M3 8l3.5 3.5L13 5" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BrandingDecksPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(28,54,82,0.85) 0%, rgba(20,32,55,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            Branding &<br /><span style={{ color: "#cb772d" }}>High-Converting Decks</span>
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            See what&apos;s working. Fix what&apos;s not. We build brand systems and sales collateral that wins in the room and converts in the inbox.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* Two Column */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div className="channel-card-left" style={{ padding: "32px 28px", borderRadius: 8, background: "#F8F7F4" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Brand Identity</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 2.5vw, 38px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>A Brand That Commands Attention</h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.75, color: "#555", marginBottom: 20 }}>
              Your brand is the first thing prospects judge. We build brand systems — not just logos — that communicate authority, trust, and differentiation from the first impression.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {brandItems.map(item => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "#444" }}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="channel-card-left" style={{ padding: "32px 28px", borderRadius: 8, background: "#F8F7F4" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Sales Collateral</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 2.5vw, 38px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>Decks That Close Deals</h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.75, color: "#555", marginBottom: 20 }}>
              Most pitch decks talk about the company. Winning decks talk about the buyer&apos;s problem and make the solution obvious. We build both.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {collateralItems.map(item => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "#444" }}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>Our Creative Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {processSteps.map(({ n, title, body }) => (
              <div key={n} className="process-card" style={{ padding: "28px 20px" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 44, fontWeight: 700, color: "rgba(203,119,45,0.25)", lineHeight: 1, marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#cb772d", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 16 }}>Ready to Elevate Your Brand?</h2>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Book a session and let&apos;s look at your current brand and collateral — and build what wins.</p>
        <Link href="/contact" className="cta-link-btn">Book Strategy Session</Link>
      </section>
    </main>
  );
}
