"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function AIVisibilityPage() {
  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const ctaView = useInView();

  const tiers = [
    {
      number: "Tier 0",
      name: "AI Visibility Diagnostic",
      tagline: "Understand Where You Stand",
      description: "Discover how search engines and AI platforms currently view your business, identify visibility gaps, and receive a clear roadmap for improvement.",
      bestFor: "Organizations exploring AI Visibility or evaluating their current digital presence.",
      outcome: "Visibility Clarity",
      engagement: "One-Time Audit",
      focus: "Diagnose",
      href: "/services/ai-visibility/tier-0",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="16" cy="16" r="10" stroke="#cb772d" strokeWidth="2"/>
          <path d="M24 24l7 7" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="4" stroke="#cb772d" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 1",
      name: "SEO & AI Foundation",
      tagline: "Build a Strong Foundation",
      description: "Establish the technical, structural, and semantic foundation required for long-term visibility across search engines and AI-powered search experiences.",
      bestFor: "Organizations ready to improve their website's SEO, AI readiness, and technical performance.",
      outcome: "Strong SEO & AI Foundation",
      engagement: "One-Time Implementation",
      focus: "Build",
      href: "/services/ai-visibility/tier-1",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="4" y="20" width="8" height="12" rx="1" stroke="#cb772d" strokeWidth="2"/>
          <rect x="14" y="12" width="8" height="20" rx="1" stroke="#cb772d" strokeWidth="2"/>
          <rect x="24" y="4" width="8" height="28" rx="1" stroke="#cb772d" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 2",
      name: "AI Authority Growth System",
      tagline: "Grow Your Authority",
      description: "Expand your digital footprint through strategic content, authority building, citations, reviews, and AI-focused optimization that strengthens trust and recommendations.",
      bestFor: "Organizations focused on increasing rankings, authority, and qualified demand.",
      outcome: "Greater Authority & AI Recommendations",
      engagement: "Monthly Growth Program",
      focus: "Grow",
      href: "/services/ai-visibility/tier-2",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M4 28l8-10 6 4 10-14 4-4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="8" r="4" stroke="#cb772d" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 3",
      name: "AI Market Dominance Engine",
      tagline: "Lead Your Market",
      description: "Build category leadership through executive authority, advanced AI optimization, reputation management, and continuous strategic growth.",
      bestFor: "Organizations committed to becoming the trusted leader in their industry.",
      outcome: "Market Leadership & AI Recommendation Dominance",
      engagement: "Strategic Partnership",
      focus: "Lead",
      href: "/services/ai-visibility/tier-3",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 4l3.6 7.6 8.4 1.1-6.1 5.9 1.5 8.3L18 23l-7.4 3.9 1.5-8.3-6.1-5.9 8.4-1.1z" stroke="#cb772d" strokeWidth="2" strokeLinejoin="round" fill="rgba(203,119,45,0.12)"/>
        </svg>
      ),
    },
  ];

  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden",
        backgroundImage: "url('/images/horse mane circuit lines_1.png')",
        backgroundSize: "cover", backgroundPosition: "center top",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,16,36,0.90)" }} />
        <CircuitOverlay />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "160px 24px 100px", width: "100%" }}>
          <p className="hero-body-anim" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 20 }}>
            SEO / AI Visibility & Discoverability Services
          </p>
          <h1 className="hero-h1-anim" style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
            fontWeight: 700, fontSize: "clamp(38px, 5vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.0,
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 900, marginBottom: 36,
          }}>
            Helping Brands Become Discoverable, Trusted, and Recommended Across Search and AI.
          </h1>

          <p className="hero-body-anim" style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.9)", maxWidth: 680, marginBottom: 16 }}>
            The way people search has changed.
          </p>
          <p className="hero-body-anim" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", maxWidth: 700, marginBottom: 16 }}>
            Today&apos;s buyers don&apos;t rely on Google alone. They ask questions in ChatGPT, Gemini, Claude, Perplexity, Microsoft Copilot, voice assistants, industry communities, and traditional search engines long before contacting a company.
          </p>
          <p className="hero-body-anim" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 700, marginBottom: 16 }}>
            If your business isn&apos;t visible where those conversations happen, you&apos;re losing opportunities before your sales team ever has a chance to engage.
          </p>
          <p className="hero-body-anim" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 700, marginBottom: 32 }}>
            Brand Iron helps organizations strengthen their AI Visibility by combining Search Engine Optimization (SEO), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), technical optimization, entity development, authority building, and strategic content into one connected visibility strategy.
          </p>

          {/* Pull quote */}
          <div className="hero-body-anim" style={{ borderLeft: "3px solid #cb772d", paddingLeft: 24, marginBottom: 48, maxWidth: 600 }}>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#cb772d", lineHeight: 1.4, margin: 0 }}>
              &ldquo;The brands that earn visibility today become the brands AI recommends tomorrow.&rdquo;
            </p>
          </div>

          <div className="hero-btns-anim" style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 520 }}>
            <Link href="/ai-visibility-audit" className="hero-btn-primary" style={{ fontSize: 15, padding: "18px 40px", textAlign: "center" }}>
              Schedule an AI Visibility Assessment
            </Link>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0 }}>
              Discover how visible your business is across Google, ChatGPT, Gemini, Claude, Perplexity, and other AI-powered search experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ── S2: SEARCH HAS CHANGED ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24, textAlign: "center" }}>
            Search Has Changed. Visibility Has Changed with It.
          </h2>

          <div style={{ maxWidth: 780, margin: "0 auto", marginBottom: 80 }}>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16, textAlign: "center" }}>
              For years, businesses focused on one primary goal: ranking higher in search engines.
            </p>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16, textAlign: "center" }}>
              While traditional Search Engine Optimization (SEO) remains essential, it&apos;s no longer the complete picture.
            </p>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16, textAlign: "center" }}>
              Today&apos;s buyers don&apos;t just search — they ask questions. They expect direct answers, trusted recommendations, and personalized responses from AI-powered platforms before they ever visit a website or speak with a sales representative.
            </p>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16, textAlign: "center" }}>
              Whether they&apos;re using Google Search, ChatGPT, Gemini, Claude, Perplexity, Microsoft Copilot, voice assistants, or industry communities, the buying journey now spans multiple platforms and multiple moments of discovery.
            </p>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#444", fontWeight: 600, textAlign: "center" }}>
              That means your business needs to be visible wherever those conversations happen — not just on a search results page.
            </p>
          </div>

          {/* The Modern Buying Journey */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ background: "#F9F8F6", borderRadius: 16, padding: "56px 64px", marginBottom: 64 }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 16, textAlign: "center" }}>
              Today&apos;s buyers don&apos;t follow a straight path to purchase.
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 620, margin: "0 auto 12px", textAlign: "center" }}>
              Instead, they move between multiple channels as they research, compare, and validate their decisions.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 620, margin: "0 auto 48px", textAlign: "center" }}>
              Every step is an opportunity to build visibility, trust, and credibility — or lose the opportunity to a competitor.
            </p>

            {/* Journey steps */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0, flexWrap: "wrap" }}>
              {[
                { label: "Awareness", sub: "Buyers discover via AI, search, social, or peer referral" },
                { label: "Research", sub: "They compare options across multiple platforms" },
                { label: "Validate", sub: "They check reviews, content & AI recommendations" },
                { label: "Engage", sub: "Only then do they reach out" },
              ].map(({ label, sub }, i) => (
                <div key={label} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ textAlign: "center", maxWidth: 160, padding: "0 8px" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: i === 3 ? "#cb772d" : "#0F1B2D", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                      <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 20, fontWeight: 400, color: i === 3 ? "#FFFFFF" : "#cb772d" }}>0{i + 1}</span>
                    </div>
                    <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 13, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: i === 3 ? "#cb772d" : "#0F1B2D", marginBottom: 6 }}>{label}</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, lineHeight: 1.5, color: "#777" }}>{sub}</p>
                  </div>
                  {i < 3 && (
                    <div style={{ padding: "0 4px", marginBottom: 40 }}>
                      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                        <path d="M2 8h20M16 3l6 5-6 5" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Then vs Now */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ marginBottom: 64 }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F1B2D", marginBottom: 32, textAlign: "center" }}>
              Search Has Evolved
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 15 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#0F1B2D", color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left", width: "50%" }}>Then</th>
                    <th style={{ background: "#cb772d", color: "#FFFFFF", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left", width: "50%" }}>Now</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Search begins with keywords", "Search begins with questions and conversations"],
                    ["Google is the primary destination", "Buyers move between Google, ChatGPT, Gemini, Claude, Perplexity, LinkedIn, reviews, and industry resources"],
                    ["Ranking higher was the goal", "Being understood, trusted, and recommended is the goal"],
                    ["Success measured by clicks", "Success measured by discoverability, authority, citations, and qualified demand"],
                    ["Websites compete for rankings", "Brands compete for trust across an entire digital ecosystem"],
                  ].map(([then, now], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "20px 24px", color: "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{then}</td>
                      <td style={{ padding: "20px 24px", color: "#0F1B2D", fontWeight: 500, lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why This Matters */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ background: "#0F1B2D", borderRadius: 16, padding: "56px 64px" }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 24, textAlign: "center" }}>
              Why This Matters for Your Business
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", textAlign: "center", marginBottom: 28 }}>
              Every day, potential customers are asking questions like:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 40 }}>
              {[
                "&ldquo;Who are the best B2B branding agencies?&rdquo;",
                "&ldquo;What company specializes in AI Visibility?&rdquo;",
                "&ldquo;Who can help with Go-to-Market Strategy?&rdquo;",
                "&ldquo;What is Revenue Engineering?&rdquo;",
              ].map((q, i) => (
                <div key={i} style={{ background: "rgba(203,119,45,0.12)", border: "1px solid rgba(203,119,45,0.3)", borderRadius: 8, padding: "14px 20px" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontStyle: "italic", color: "#cb772d", margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", textAlign: "center", marginBottom: 16 }}>
              If AI platforms and search engines don&apos;t recognize your business as a trusted source, your competitors may become the answers buyers see first.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", textAlign: "center", marginBottom: 8 }}>
              AI doesn&apos;t simply rank content.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", textAlign: "center" }}>
              It evaluates context, authority, credibility, and relevance to determine which organizations deserve to be referenced and recommended.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: THE NEW VISIBILITY EQUATION ─────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/techy sagebrush.png')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.60)" }} />
        <CircuitOverlay />
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 16 }}>
            Visibility Alone Isn&apos;t Enough.
          </h2>
          <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 640, margin: "0 auto 64px" }}>
            Modern discoverability requires four connected capabilities working together.
          </p>

          {/* Be Found → Be Understood → Be Trusted → Be Recommended */}
          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "stretch", justifyContent: "center", gap: 0, marginBottom: 64, flexWrap: "wrap" }}>
            {[
              { label: "Be Found", sub: "Visible across search engines and AI platforms where buyers search", num: "01" },
              { label: "Be Understood", sub: "AI and search engines clearly understand who you are and what you do", num: "02" },
              { label: "Be Trusted", sub: "Authority, credibility, and digital presence that earns recommendations", num: "03" },
              { label: "Be Recommended", sub: "AI surfaces your business when buyers ask the questions you answer", num: "04" },
            ].map(({ label, sub, num }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  background: i === 3 ? "#cb772d" : "#0F1B2D",
                  borderRadius: 12, padding: "32px 24px", textAlign: "center", minWidth: 180, maxWidth: 200,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: i === 3 ? "rgba(255,255,255,0.7)" : "#cb772d", marginBottom: 12 }}>{num}</p>
                  <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: 12, lineHeight: 1.2 }}>{label}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>{sub}</p>
                </div>
                {i < 3 && (
                  <div style={{ padding: "0 6px" }}>
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                      <path d="M2 10h24M20 4l8 6-8 6" stroke="#cb772d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "#444", marginBottom: 16 }}>
              The organizations that win tomorrow aren&apos;t simply easier to find — they&apos;re easier to trust.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
              That&apos;s why Brand Iron goes beyond traditional SEO.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555" }}>
              We help organizations build the technical foundation, digital authority, and AI readiness needed to become discoverable, trusted, and recommended across today&apos;s evolving search landscape.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: STRATEGIC FRAMEWORK ─────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/bg-horse.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,16,36,0.90)" }} />
        <CircuitOverlay />
        <div ref={s4View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 24 }}>
              A Strategic Framework for AI Visibility
            </h2>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 680, margin: "0 auto 16px" }}>
              AI Visibility isn&apos;t achieved through a single tactic or tool. It requires a connected strategy that strengthens your technical foundation, builds digital authority, and helps AI platforms understand, trust, and recommend your business.
            </p>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: 680, margin: "0 auto" }}>
              At Brand Iron, we guide organizations through a four-stage framework designed to improve discoverability across search engines and AI-powered search experiences.
            </p>
          </div>

          {/* 4 stages */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 64 }}>
            {[
              {
                num: "1",
                title: "Diagnose",
                lines: [
                  "Understand how search engines and AI platforms currently see your business.",
                  "Identify visibility gaps, technical issues, and missed opportunities.",
                ],
                color: "#1a2d4a",
              },
              {
                num: "2",
                title: "Build",
                lines: [
                  "Strengthen your SEO, technical foundation, structured data, and entity optimization.",
                  "Create the infrastructure AI and search engines rely on.",
                ],
                color: "#1e3554",
              },
              {
                num: "3",
                title: "Grow",
                lines: [
                  "Expand your authority through strategic content, citations, digital PR, reviews, and brand mentions.",
                  "Increase trust, relevance, and AI recommendations.",
                ],
                color: "#24405f",
              },
              {
                num: "4",
                title: "Dominate",
                lines: [
                  "Continuously optimize your digital presence to become a recognized authority in your market.",
                  "Lead the conversation — not just participate in it.",
                ],
                color: "#cb772d",
              },
            ].map(({ num, title, lines, color }, i) => (
              <div key={num} className={`reveal${s4View.inView ? ' visible' : ''}`} style={{
                background: color,
                borderRadius: 12, padding: "40px 28px",
                border: i === 3 ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: i === 3 ? "rgba(255,255,255,0.2)" : "rgba(203,119,45,0.15)", border: `1px solid ${i === 3 ? "rgba(255,255,255,0.3)" : "rgba(203,119,45,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 400, color: i === 3 ? "#FFFFFF" : "#cb772d" }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.2 }}>{title}</h3>
                {lines.map((line, j) => (
                  <p key={j} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: i === 3 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.65)", marginBottom: j < lines.length - 1 ? 10 : 0 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
              No matter where you are in your AI Visibility journey, our framework helps you build a stronger digital presence that supports long-term discoverability, authority, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── S5: CHOOSE YOUR SOLUTION ─────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s5View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20 }}>
              Choose the Right AI Visibility Solution
            </h2>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 16px" }}>
              Every organization is at a different stage of its AI Visibility journey.
            </p>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto 16px" }}>
              Some need to understand why they&apos;re not appearing in AI-powered search results. Others are ready to strengthen their technical foundation, build digital authority, or establish market leadership.
            </p>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto" }}>
              Our four-tier framework allows you to start where you are today — and grow as your business grows.
            </p>
          </div>

          {/* Four tier cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 56 }}>
            {tiers.map((tier, i) => (
              <div key={tier.number} className={`reveal${s5View.inView ? ' visible' : ''}`} style={{
                background: i === 3 ? "#0F1B2D" : "#F9F8F6",
                borderRadius: 12, padding: "36px 28px",
                border: i === 3 ? "none" : "1px solid #EEEBE7",
                display: "flex", flexDirection: "column",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ width: 60, height: 60, borderRadius: 12, background: "rgba(203,119,45,0.12)", border: "1px solid rgba(203,119,45,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {tier.icon}
                </div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#cb772d", marginBottom: 8 }}>{tier.number}</p>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 17, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: i === 3 ? "#FFFFFF" : "#0F1B2D", marginBottom: 6, lineHeight: 1.3 }}>{tier.name}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, color: "#cb772d", marginBottom: 16 }}>{tier.tagline}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: i === 3 ? "rgba(255,255,255,0.7)" : "#666", marginBottom: 20, flex: 1 }}>{tier.description}</p>
                <div style={{ borderTop: `1px solid ${i === 3 ? "rgba(255,255,255,0.1)" : "#EEEBE7"}`, paddingTop: 16, marginBottom: 20 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: i === 3 ? "rgba(255,255,255,0.45)" : "#999", marginBottom: 6 }}>Primary Outcome</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, color: i === 3 ? "#cb772d" : "#0F1B2D" }}>{tier.outcome}</p>
                </div>
                <Link href={tier.href} style={{
                  display: "block", textAlign: "center", padding: "12px 20px", borderRadius: 8,
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  background: i === 3 ? "#cb772d" : "transparent",
                  color: i === 3 ? "#FFFFFF" : "#0F1B2D",
                  border: i === 3 ? "none" : "1.5px solid #0F1B2D",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={e => {
                  if (i !== 3) { (e.currentTarget as HTMLAnchorElement).style.background = "#0F1B2D"; (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }
                }}
                onMouseLeave={e => {
                  if (i !== 3) { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#0F1B2D"; }
                }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ marginBottom: 64, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#0F1B2D" }}>
                  <th style={{ padding: "18px 24px", textAlign: "left", color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}></th>
                  {tiers.map(t => (
                    <th key={t.number} style={{ padding: "18px 20px", textAlign: "center", color: "#cb772d", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Engagement", values: tiers.map(t => t.engagement) },
                  { label: "Primary Focus", values: tiers.map(t => t.focus) },
                  { label: "Best For", values: ["Visibility Assessment", "Technical Foundation", "Authority Growth", "Category Leadership"] },
                  { label: "Primary Outcome", values: ["Visibility Clarity", "AI-Ready Website", "Increased Authority & AI Recommendations", "AI & Market Leadership"] },
                  { label: "Ideal Next Step", values: ["Identify Opportunities", "Implement Foundation", "Scale Visibility", "Sustain Market Leadership"] },
                ].map(({ label, values }, ri) => (
                  <tr key={label} style={{ background: ri % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                    <td style={{ padding: "18px 24px", fontWeight: 600, color: "#0F1B2D", fontSize: 13, borderBottom: "1px solid #EEEBE7", whiteSpace: "nowrap" }}>{label}</td>
                    {values.map((v, ci) => (
                      <td key={ci} style={{ padding: "18px 20px", textAlign: "center", color: "#555", lineHeight: 1.5, borderBottom: "1px solid #EEEBE7" }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Which solution is right for you */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 40, textAlign: "center" }}>
              Which Solution Is Right for You?
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              {[
                {
                  tier: "AI Visibility Diagnostic",
                  items: [
                    "You're unsure how visible your business is across AI and search.",
                    "You want an expert assessment before investing in optimization.",
                    "You need a roadmap to guide future improvements.",
                  ],
                  href: "/services/ai-visibility/tier-0",
                },
                {
                  tier: "SEO & AI Foundation",
                  items: [
                    "Your website needs technical SEO improvements.",
                    "You're ready to establish an AI-ready digital foundation.",
                    "You want search engines and AI platforms to better understand your business.",
                  ],
                  href: "/services/ai-visibility/tier-1",
                },
                {
                  tier: "AI Authority Growth System",
                  items: [
                    "You're looking to increase rankings, authority, and qualified organic demand.",
                    "You want to become a trusted source within your industry.",
                    "You're committed to ongoing content and authority building.",
                  ],
                  href: "/services/ai-visibility/tier-2",
                },
                {
                  tier: "AI Market Dominance Engine",
                  items: [
                    "You want to lead your market — not just compete in it.",
                    "You're investing in long-term brand authority and executive positioning.",
                    "You need continuous optimization, strategic consulting, and AI visibility leadership.",
                  ],
                  href: "/services/ai-visibility/tier-3",
                },
              ].map(({ tier, items, href }) => (
                <div key={tier} style={{
                  background: "#F9F8F6", borderRadius: 12, padding: "36px 32px",
                  borderLeft: "4px solid #cb772d",
                }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#cb772d", marginBottom: 8 }}>
                    Choose {tier} if…
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                    {items.map(item => (
                      <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <svg style={{ flexShrink: 0, marginTop: 2 }} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4L13 4" stroke="#cb772d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.65, color: "#444", margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0F1B2D", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#cb772d")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#0F1B2D")}
                  >
                    Explore {tier} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Transition line */}
          <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", textAlign: "center", marginTop: 56, maxWidth: 640, margin: "56px auto 0" }}>
            Explore each solution in detail to understand what&apos;s included, who it&apos;s designed for, and the business outcomes you can expect.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.88)" }} />
        <div ref={ctaView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cb772d", marginBottom: 20 }}>
            Ready to Get Visible?
          </p>
          <h2 className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
            fontWeight: 700, fontSize: "clamp(32px, 4.5vw, 60px)",
            textTransform: "uppercase", letterSpacing: "0.02em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            lineHeight: 1.0, marginBottom: 28,
          }}>
            Schedule an AI Visibility Assessment
          </h2>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 580, margin: "0 auto 48px" }}>
            Discover how visible your business is across Google, ChatGPT, Gemini, Claude, Perplexity, and other AI-powered search experiences.
          </p>
          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/ai-visibility-audit" className="hero-btn-primary" style={{ fontSize: 15, padding: "16px 40px" }}>
              Schedule an AI Visibility Assessment
            </Link>
            <Link href="/contact" className="hero-btn-outline" style={{ fontSize: 15, padding: "16px 40px" }}>
              Talk to a Strategist
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
