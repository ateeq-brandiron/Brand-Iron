"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
        overflow: "hidden",
      }}>
        {/* Hero background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/hero-saddle.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 40%",
        }} />
        {/* Light overlay — only 20% dark so image shows clearly */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(10,20,35,0.50)",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 100px", width: "100%" }}>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(56px, 7vw, 92px)",
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "transparent",
            WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 860,
            marginBottom: 32,
          }}>
            Turn Your Marketing<br />Into A Revenue Engine
          </h1>

          {/* Body copy */}
          <p style={{ fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.95)", maxWidth: 600, marginBottom: 16 }}>
            We build systems that align strategy with execution, connect marketing and sales, and combine AI with expert human craft — designed to scale performance and drive results.
          </p>

          {/* Orange stats line — not bold */}
          <p style={{
            fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400,
            letterSpacing: "0.04em", color: "#cb772d", marginBottom: 40,
          }}>
            3X pipeline. 60% less wasted effort. 100% visibility.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="hero-btn-primary">
              3X Your Pipeline
            </Link>
            <Link href="/contact" className="hero-btn-outline">
              Book Your Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ────────────────────────────────────────── */}
      <section id="services" style={{
        position: "relative", padding: "80px 24px 100px",
        backgroundImage: "url('/images/bg-wood.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        {/* Light overlay so wood texture shows through */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.78)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          {/* Full-width headline — centered, tight letter-spacing, one line */}
          <h1 className="section-heading" style={{ color: "#0F1B2D", marginBottom: 32 }}>
            The Problem Isn&apos;t Your Marketing. It&apos;s Your System.
          </h1>

          {/* Centered subtext — 20px matching hero body */}
          <p style={{
            fontSize: 20, lineHeight: 1.75, color: "#444",
            maxWidth: 720, margin: "0 auto 64px", textAlign: "center",
          }}>
            You&apos;re running campaigns. You&apos;re using AI. You&apos;re creating content.
            But your pipeline isn&apos;t growing. Because nothing is connected. AI on
            top of a broken system scales inefficiency.
          </p>

          {/* 4 cards — 15% bigger padding & icons */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              {
                icon: (
                  <svg width="37" height="37" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L2 28h28L16 4z" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 14v6" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="16" cy="23" r="1.2" fill="#cb772d"/>
                  </svg>
                ),
                title: "Disconnected Execution",
                body: "Tools that don't talk to each other, creating data silos and workflow chaos.",
              },
              {
                icon: (
                  <svg width="37" height="37" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="13" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M13 12.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-2 2.5-3 4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="16" cy="22.5" r="1.2" fill="#cb772d"/>
                  </svg>
                ),
                title: "No Unified System",
                body: "Spending on marketing and AI without visibility into what's actually driving revenue.",
              },
              {
                icon: (
                  <svg width="37" height="37" viewBox="0 0 32 32" fill="none">
                    <path d="M4 10l7 8 6-4 11 12" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 26h4v-4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "AI Without Strategy",
                body: "Revenue that depends on luck, timing, or individual heroics instead of systems.",
              },
              {
                icon: (
                  <svg width="37" height="37" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="13" stroke="#cb772d" strokeWidth="2"/>
                    <circle cx="10" cy="16" r="1.5" fill="#cb772d"/>
                    <circle cx="16" cy="16" r="1.5" fill="#cb772d"/>
                    <circle cx="22" cy="16" r="1.5" fill="#cb772d"/>
                  </svg>
                ),
                title: "Unpredictable Pipeline",
                body: "Teams operating in separate worlds with different goals and no shared accountability.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="problem-card" style={{
                background: "rgba(255,255,255,0.93)",
                borderRadius: 10,
                borderLeft: "4px solid #cb772d",
                padding: "37px 28px 41px",
                boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
              }}>
                <div style={{ marginBottom: 26 }}>{icon}</div>
                <h3 style={{
                  fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 19, fontWeight: 400,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  color: "#0F1B2D", marginBottom: 16, lineHeight: 1.3,
                }}>{title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #services .problem-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 560px) {
            #services .problem-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── AI GROWTH ENGINE (section 3) ───────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "100px 24px 110px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          {/* Headline — filled navy, not stroke */}
          <h1 className="section-heading" style={{ color: "#0F1B2D", marginBottom: 28 }}>
            The AI Growth Engine
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 19, lineHeight: 1.75, color: "#444",
            maxWidth: 680, margin: "0 auto 40px",
          }}>
            We build systems that align strategy with execution, connect marketing and sales, and use AI to scale performance — designed to drive measurable revenue.
          </p>

          {/* Quote block */}
          <div style={{
            display: "flex", alignItems: "stretch", gap: 0,
            maxWidth: 680, margin: "0 auto 72px", textAlign: "left",
            background: "#F9F8F6", borderRadius: 8,
            overflow: "hidden",
          }}>
            <div style={{ width: 5, background: "#cb772d", flexShrink: 0 }} />
            <p style={{
              fontSize: 17, lineHeight: 1.7, color: "#333",
              fontStyle: "italic", padding: "24px 28px",
            }}>
              &ldquo;Not just marketing. Not just automation. A complete system where every piece works together to drive measurable growth.&rdquo;
            </p>
          </div>
        </div>

        {/* 5 icon boxes with arrows — boxes/arrows row + labels row separated */}
        {(() => {
          const items = [
            {
              label: "Brand Strategy",
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <rect x="8" y="28" width="10" height="10" rx="2" stroke="#cb772d" strokeWidth="2"/>
                  <rect x="20" y="18" width="10" height="20" rx="2" stroke="#cb772d" strokeWidth="2"/>
                  <path d="M34 8 L34 38" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M30 12 L34 8 L38 12" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              label: "Demand Generation",
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle cx="22" cy="22" r="14" stroke="#cb772d" strokeWidth="2"/>
                  <path d="M22 22 L22 8" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 22 L32 30" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 22 L10 28" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="22" cy="22" r="3" fill="#cb772d"/>
                </svg>
              ),
            },
            {
              label: "CRM Systems",
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <rect x="10" y="8" width="24" height="8" rx="2" stroke="#cb772d" strokeWidth="2"/>
                  <rect x="10" y="20" width="24" height="8" rx="2" stroke="#cb772d" strokeWidth="2"/>
                  <rect x="10" y="32" width="24" height="6" rx="2" stroke="#cb772d" strokeWidth="2"/>
                  <circle cx="15" cy="12" r="2" fill="#cb772d"/>
                  <circle cx="15" cy="24" r="2" fill="#cb772d"/>
                </svg>
              ),
            },
            {
              label: "AI Automation",
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle cx="22" cy="20" r="10" stroke="#cb772d" strokeWidth="2"/>
                  <path d="M22 30 L22 38" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 38 L28 38" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18 16 Q22 12 26 16" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <circle cx="22" cy="20" r="3" fill="#cb772d"/>
                </svg>
              ),
            },
            {
              label: "Revenue Analytics",
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <rect x="8" y="28" width="7" height="10" rx="1" stroke="#cb772d" strokeWidth="2"/>
                  <rect x="18" y="20" width="7" height="18" rx="1" stroke="#cb772d" strokeWidth="2"/>
                  <rect x="28" y="12" width="7" height="26" rx="1" stroke="#cb772d" strokeWidth="2"/>
                  <path d="M10 20 L20 14 L30 8" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
          ];
          return (
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              {/* Row 1: boxes + arrows — all same height, perfectly centered */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {items.map(({ label, icon }, i) => (
                  <div key={label} style={{ display: "flex", alignItems: "center" }}>
                    <div className="engine-icon-box" style={{
                      width: 120, height: 120, borderRadius: 16,
                      border: "2.5px solid #0F1B2D",
                      background: "#FFFFFF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
                    }}>
                      {icon}
                    </div>
                    {i < items.length - 1 && (
                      <div className="engine-arrow" style={{
                        padding: "0 20px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "transform 0.2s ease",
                      }}>
                        <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
                          <path d="M2 14h29M24 6l9 8-9 8" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Row 2: labels aligned under each box */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: 16 }}>
                {items.map(({ label }, i) => (
                  <div key={label} style={{ display: "flex", alignItems: "center" }}>
                    <span style={{
                      width: 120,
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 14,
                      color: "#0F1B2D", textAlign: "center", display: "block",
                    }}>{label}</span>
                    {i < items.length - 1 && (
                      <div style={{ width: 78 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* ── 5-STEP PROCESS (section 4) ─────────────────────── */}
      <section id="process" style={{
        position: "relative", padding: "140px 24px 160px",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center top",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,40,0.82)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto" }}>

          <h1 className="section-heading" style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 28 }}>
            AI Alone Isn&apos;t The Advantage.
          </h1>

          <p style={{
            fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.85)",
            textAlign: "center", maxWidth: 640, margin: "0 auto 100px",
          }}>
            Anyone can use AI. Very few know how to use it correctly.<br />
            Human expertise guiding AI is what drives results.
          </p>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: 66,
              left: "8%", right: "8%",
              height: 2, background: "#cb772d", zIndex: 0,
            }} />
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 1, gap: 16 }}>
              {[
                { n: "01", title: "Define The Strategy", body: "Define positioning, audience, and growth strategy." },
                { n: "02", title: "Build The System", body: "Design CRM, automation, and AI infrastructure." },
                { n: "03", title: "Deploy AI Execution", body: "Deploy agents, workflows, and data systems." },
                { n: "04", title: "Drive Pipeline", body: "Activate campaigns that generate pipeline." },
                { n: "05", title: "Scale Results", body: "Track, optimize, and expand." },
              ].map(({ n, title, body }) => (
                <div key={n} className="process-step" style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  <div className="process-circle" style={{
                    width: 132, height: 132, borderRadius: "50%",
                    background: "#0F1B2D", border: "3px solid #cb772d",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 36, flexShrink: 0,
                    transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
                  }}>
                    <span style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 38, color: "#cb772d", lineHeight: 1 }}>{n}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 15,
                    textTransform: "uppercase", letterSpacing: "0.12em",
                    color: "#cb772d", marginBottom: 14, textAlign: "center",
                  }}>{title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", textAlign: "center", maxWidth: 180 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD (section 5) ──────────────────────── */}
      <section style={{
        position: "relative", padding: "100px 24px 0",
        backgroundImage: "url('/images/bg-haybales.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 40%",
      }}>
        {/* Very light warm overlay so saddle/rope texture shows subtly */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,235,218,0.88)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          {/* Headline */}
          <h1 className="section-heading" style={{ color: "#0F1B2D", marginBottom: 20 }}>
            What We Build
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.7, color: "#555",
            textAlign: "center", maxWidth: 620, margin: "0 auto 64px",
          }}>
            Services designed to work as one ecosystem, not disconnected solutions.
          </p>

          {/* 6 cards — 3 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="15" r="7" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M18 22v4M14 30h8" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M13 12 Q18 7 23 12" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M15 14 Q18 10 21 14" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    <circle cx="18" cy="16" r="2" fill="#cb772d"/>
                  </svg>
                ),
                title: "AI Strategy & Consulting",
                body: "Know where to go before you start moving.",
                href: "/ai-strategy",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="7" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M18 11V7M18 29v-4M11 18H7M29 18h-4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M13.4 13.4L10.6 10.6M25.4 25.4l-2.8-2.8M22.6 13.4l2.8-2.8M10.6 25.4l2.8-2.8" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="18" cy="18" r="3" fill="#cb772d"/>
                  </svg>
                ),
                title: "AI Execution & Automation",
                body: "From lead generation to booked meetings.",
                href: "/ai-execution",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <ellipse cx="18" cy="10" rx="10" ry="4" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M8 10v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M8 17v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7" stroke="#cb772d" strokeWidth="2"/>
                  </svg>
                ),
                title: "GTM & Sales Systems",
                body: "Built to connect. Built to scale.",
                href: "/gtm-sales-systems",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="6" y="8" width="16" height="20" rx="2" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M10 14h8M10 18h8M10 22h5" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M22 14l8-6M26 8h4v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Branding & High-Converting Decks",
                body: "See what's working. Fix what's not.",
                href: "/branding-decks",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M4 28l8-10 7 5 10-13" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28 10l4-4M30 6h4v4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Data & Revenue Visibility",
                body: "Everything working together.",
                href: "/data-revenue-visibility",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="5" y="22" width="6" height="10" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <rect x="15" y="14" width="6" height="18" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <rect x="25" y="6" width="6" height="26" rx="1" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M7 18l10-8 10-6" stroke="#cb772d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Demand Generation & Pipeline",
                body: "Turn strategy into consistent, qualified opportunities.",
                href: "/demand-generation",
              },
            ].map(({ icon, title, body, href }) => (
              <div key={title} className="service-card" style={{
                background: "rgba(255,255,255,0.88)",
                borderRadius: 12, padding: "36px 28px 28px",
                boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ marginBottom: 22 }}>{icon}</div>
                <h3 style={{
                  fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 15, fontWeight: 400,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "#cb772d", marginBottom: 10,
                }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#555", flex: 1, marginBottom: 28 }}>{body}</p>
                <Link href={href} style={{ display: "block" }}>
                  <div className="service-underline" style={{ width: 48, height: 3, background: "#0F1B2D", borderRadius: 2 }} />
                </Link>
              </div>
            ))}
          </div>

          {/* Checkmark badge row */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 48,
            flexWrap: "wrap", padding: "48px 0 56px",
          }}>
            {["AI-Powered Systems", "Full Integration", "Strategic Execution", "Designed to Scale"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "#0F1B2D",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3L11.5 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 500, color: "#0F1B2D" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOST AGENCIES + COMPARISON + TAGLINE (section 6) ── */}
      <section style={{
        position: "relative", padding: "120px 24px 80px",
        backgroundImage: "url('/images/bg-barn.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,22,42,0.80)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>

          {/* Stroke headline */}
          <h1 className="section-heading" style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 28 }}>
            Most Agencies Focus On One Piece Of The Puzzle.
          </h1>
          <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF", textAlign: "center", marginBottom: 64 }}>
            We build the whole system.
          </p>

          {/* Two comparison cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>

            {/* Left — Typical Agency */}
            <div className="compare-card" style={{
              background: "#0F1B2D",
              border: "1.5px solid #cb772d",
              borderRadius: 12, padding: "40px 36px",
            }}>
              <h3 style={{
                fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 20,
                textTransform: "uppercase", letterSpacing: "0.15em",
                color: "#cb772d", textAlign: "center", marginBottom: 36,
              }}>Typical Agency</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {["Disconnected services", "Single-channel focus", "Tool-first thinking", "No revenue visibility", "Siloed execution"].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    {/* Red X */}
                    <div style={{
                      width: 28, height: 28, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M5 5l12 12M17 5L5 17" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Brand Iron (texture shows through) */}
            <div className="compare-card" style={{
              background: "rgba(180,100,20,0.18)",
              border: "1.5px solid #cb772d",
              borderRadius: 12, padding: "40px 36px",
              backdropFilter: "blur(2px)",
            }}>
              <h3 style={{
                fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 20,
                textTransform: "uppercase", letterSpacing: "0.15em",
                color: "#cb772d", textAlign: "center", marginBottom: 36,
              }}>Brand Iron</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {["Integrated revenue engine", "Full-funnel systems", "Outcome-first approach", "Clear ROI tracking", "Orchestrated execution"].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    {/* Orange checkmark */}
                    <div style={{ width: 28, height: 28, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M4 11l5 5L18 6" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 16, color: "rgba(255,255,255,0.92)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tagline banner box */}
          <div style={{
            border: "1.5px solid #cb772d",
            borderRadius: 12, padding: "32px 40px",
            textAlign: "center",
            background: "rgba(15,27,45,0.70)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 16 }}>
              {["Brand", "Demand", "AI", "Revenue"].map((word, i) => (
                <div key={word} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  {i > 0 && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#cb772d" }} />}
                  <span style={{
                    fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 15,
                    letterSpacing: "0.18em", textTransform: "uppercase", color: "#cb772d",
                  }}>{word}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif" }}>
              That&apos;s how growth is forged.
            </p>
          </div>

        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────── */}
      <section style={{
        position: "relative", padding: "100px 24px",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.78)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h1 className="section-heading" style={{ color: "#FFFFFF" }}>Brand Iron vs. Typical Agency</h1>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: "rgba(0,0,0,0.3)" }}>
              <div style={{ padding: "16px 24px", fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>Capability</div>
              <div style={{ padding: "16px 24px", fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", textAlign: "center" }}>Typical Agency</div>
              <div style={{ padding: "16px 24px", fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#cb772d", textAlign: "center" }}>Brand Iron</div>
            </div>
            {[
              "Integrated Revenue Strategy",
              "AI-Powered Automation",
              "CRM & RevOps Architecture",
              "Full-Funnel Analytics",
              "Ongoing Optimization Loop",
              "Transparent ROI Reporting",
              "Dedicated Revenue Team",
            ].map((row, i) => (
              <div key={row} className="table-row" style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
              }}>
                <div style={{ padding: "16px 24px", fontSize: 15, color: "rgba(255,255,255,0.85)" }}>{row}</div>
                <div style={{ padding: "16px 24px", textAlign: "center" }}>
                  <span style={{ color: "#cb772d", fontSize: 18 }}>✗</span>
                </div>
                <div style={{ padding: "16px 24px", textAlign: "center" }}>
                  <span style={{ color: "#22C55E", fontSize: 18 }}>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET (section 7) ───────────────────────── */}
      <section id="outcomes" style={{
        position: "relative", padding: "100px 24px 80px",
        backgroundImage: "url('/images/bg-haybales.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 20%",
      }}>
        {/* Light warm overlay — shows golden field */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,238,225,0.82)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>

          {/* Heading — dark navy on light bg */}
          <h1 className="section-heading" style={{ color: "#0F1B2D", marginBottom: 20 }}>
            What You Get
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.7, color: "#555",
            textAlign: "center", maxWidth: 600, margin: "0 auto 56px",
          }}>
            Real outcomes that transform how your business operates and grows.
          </p>

          {/* Floating dark stats box */}
          <div style={{
            background: "#0F1B2D",
            borderRadius: 16, padding: "56px 56px 44px",
            marginBottom: 32,
            boxShadow: "0 20px 60px rgba(15,27,45,0.35)",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, textAlign: "center", marginBottom: 36 }}>
              {[
                { num: "3X",   label: "Pipeline Growth",    pct: 60 },
                { num: "60%",  label: "Less Wasted Effort", pct: 60 },
                { num: "100%", label: "Visibility",         pct: 100 },
              ].map(({ num, label, pct }) => (
                <div key={num} className="stat-block">
                  <div style={{
                    fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
                    fontSize: 72, fontWeight: 400,
                    color: "#cb772d", lineHeight: 1, marginBottom: 10,
                  }}>{num}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: "#FFFFFF", marginBottom: 22 }}>{label}</div>
                  <div style={{ height: 8, background: "rgba(255,255,255,0.12)", borderRadius: 4, overflow: "hidden" }}>
                    <div className="progress-bar" style={{
                      height: "100%", width: `${pct}%`,
                      background: "linear-gradient(to right, #1c3652, #506794, #a5621e, #cb772d, #e8a44a)",
                      borderRadius: 4,
                      backgroundSize: "200% 100%",
                    }} />
                  </div>
                </div>
              ))}
            </div>
            <p style={{
              fontSize: 13, color: "rgba(255,255,255,0.5)", textAlign: "center", fontStyle: "italic",
            }}>
              * Representative outcomes based on client implementations. Results vary by business model and execution.
            </p>
          </div>

          {/* White feature cards on warm field bg */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="14" stroke="#cb772d" strokeWidth="2"/>
                    <path d="M11 18l5 5 9-9" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "A Pipeline That Doesn't Rely On Guesswork",
                body: "Predictable lead flow backed by data, automation, and proven systems.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M18 6 L12 18 L18 15 L12 30" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 6 L24 18 L18 15 L24 30" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "AI Working Behind The Scenes To Drive Efficiency",
                body: "Automation that handles repetitive tasks while your team focuses on growth.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="14" stroke="#cb772d" strokeWidth="2"/>
                    <circle cx="18" cy="18" r="6" stroke="#cb772d" strokeWidth="2"/>
                    <circle cx="18" cy="18" r="2" fill="#cb772d"/>
                  </svg>
                ),
                title: "Clear Visibility Into What's Driving Revenue",
                body: "Dashboards and metrics that show exactly what's working and what needs adjustment.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M6 26 L14 16 L22 21 L30 10" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 10 L30 10 L30 14" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Systems That Scale As You Grow",
                body: "Infrastructure built to handle increasing volume without breaking or requiring constant fixes.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="feature-card" style={{
                background: "rgba(255,255,255,0.92)",
                borderLeft: "4px solid #cb772d",
                borderRadius: 12, padding: "32px 32px",
                display: "flex", alignItems: "flex-start", gap: 20,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>{icon}</div>
                <div>
                  <h3 style={{
                    fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 14, fontWeight: 400,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#0F1B2D", marginBottom: 10, lineHeight: 1.4,
                  }}>{title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── FINAL CTA + FORM (section 8) ───────────────────── */}
      <section style={{
        position: "relative", padding: "80px 24px 100px",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.78)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto" }}>

          {/* Orange dot divider at top */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 48 }}>
            <div style={{ width: 48, height: 2, background: "#cb772d", borderRadius: 2 }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#cb772d" }} />
            <div style={{ width: 48, height: 2, background: "#cb772d", borderRadius: 2 }} />
          </div>

          {/* Filled white headline — 3 lines */}
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 5.5vw, 72px)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            lineHeight: 1.1,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 56,
          }}>
            Ready To Stop Chasing Tools And Start<br />
            Building A Complete Strategy Delivers 3X<br />
            Revenue?
          </h1>

          {/* White form card */}
          <div style={{
            background: "#FFFFFF", borderRadius: 16,
            padding: "56px 64px",
          }}>
            <h3 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 40px)",
              textTransform: "uppercase", letterSpacing: "0.08em",
              color: "#0F1B2D", textAlign: "center", marginBottom: 16,
            }}>
              Let&apos;s Build Something That Drives Revenue
            </h3>
            <p style={{ fontSize: 16, color: "#666", textAlign: "center", marginBottom: 40 }}>
              Tell us where you are — we&apos;ll map out how to get you where you want to go.
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: 20 }} onSubmit={e => e.preventDefault()}>

              {/* Your Name */}
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>Your Name *</label>
                <input type="text" placeholder="" className="form-input" style={{
                  width: "100%", padding: "14px 16px", fontSize: 15,
                  border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                  fontFamily: "'Montserrat', sans-serif", color: "#333",
                }} />
              </div>

              {/* Company */}
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>Company</label>
                <input type="text" placeholder="" className="form-input" style={{
                  width: "100%", padding: "14px 16px", fontSize: 15,
                  border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                  fontFamily: "'Montserrat', sans-serif", color: "#333",
                }} />
              </div>

              {/* Email + Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>Email *</label>
                  <input type="email" className="form-input" style={{
                    width: "100%", padding: "14px 16px", fontSize: 15,
                    border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                    fontFamily: "'Montserrat', sans-serif", color: "#333",
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>Phone Number</label>
                  <input type="tel" className="form-input" style={{
                    width: "100%", padding: "14px 16px", fontSize: 15,
                    border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                    fontFamily: "'Montserrat', sans-serif", color: "#333",
                  }} />
                </div>
              </div>

              {/* Company Size */}
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>Company Size</label>
                <select className="form-input" style={{
                  width: "100%", padding: "14px 16px", fontSize: 15,
                  border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                  fontFamily: "'Montserrat', sans-serif", color: "#888", background: "#FFFFFF",
                  appearance: "auto",
                }}>
                  <option value="">- Select a Value -</option>
                  <option>1–10 employees</option>
                  <option>11–50 employees</option>
                  <option>51–200 employees</option>
                  <option>201–500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>

              {/* What are you looking to build */}
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>What are you looking to build?</label>
                <select className="form-input" style={{
                  width: "100%", padding: "14px 16px", fontSize: 15,
                  border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                  fontFamily: "'Montserrat', sans-serif", color: "#888", background: "#FFFFFF",
                }}>
                  <option value="">- Select a Value -</option>
                  <option>AI Strategy & Roadmap</option>
                  <option>Revenue Engine System</option>
                  <option>CRM & Sales Infrastructure</option>
                  <option>Demand Generation</option>
                  <option>Branding & Collateral</option>
                  <option>Full Revenue Transformation</option>
                </select>
              </div>

              {/* Monthly Investment + Timeline */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>Monthly Investment Range</label>
                  <select className="form-input" style={{
                    width: "100%", padding: "14px 16px", fontSize: 15,
                    border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                    fontFamily: "'Montserrat', sans-serif", color: "#888", background: "#FFFFFF",
                  }}>
                    <option value="">- Select a Value -</option>
                    <option>Under $2,500/mo</option>
                    <option>$2,500 – $5,000/mo</option>
                    <option>$5,000 – $10,000/mo</option>
                    <option>$10,000 – $25,000/mo</option>
                    <option>$25,000+/mo</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 8 }}>How soon are you looking to start?</label>
                  <select className="form-input" style={{
                    width: "100%", padding: "14px 16px", fontSize: 15,
                    border: "1px solid #E0E0E0", borderRadius: 6, outline: "none",
                    fontFamily: "'Montserrat', sans-serif", color: "#888", background: "#FFFFFF",
                  }}>
                    <option value="">- Select a Value -</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="submit-btn" style={{
                width: "100%", padding: "18px",
                background: "#cb772d",
                color: "#FFFFFF", border: "none", borderRadius: 8,
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 17,
                cursor: "pointer", marginTop: 8,
                letterSpacing: "0.02em",
              }}>
                Submit
              </button>

              {/* Reassurance */}
              <p style={{ textAlign: "center", fontSize: 14, color: "#888", lineHeight: 1.6, marginTop: 4 }}>
                No pressure. No generic pitch.<br />
                Just a clear plan built around your business.
              </p>
            </form>
          </div>

          {/* Orange dot divider below form */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 64 }}>
            <div style={{ width: 48, height: 2, background: "#cb772d", borderRadius: 2 }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#cb772d" }} />
            <div style={{ width: 48, height: 2, background: "#cb772d", borderRadius: 2 }} />
          </div>
        </div>
      </section>

    </main>
  );
}
