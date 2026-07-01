"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0D1A2E", color: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>

          {/* Logo + tagline + social */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: 24 }}>
              <img src="/logo.png" alt="Brand Iron Marketing" style={{ height: 72, width: "auto" }} />
            </Link>

            <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.70)", maxWidth: 300, marginBottom: 12 }}>
              We build brands that get found, get trusted, and generate consistent revenue — through human craft, AI-powered systems, and integrated growth strategy.
            </p>

            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#cb772d", marginBottom: 32 }}>
              Human Crafted. AI Powered. Revenue Driven.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2z" fill="white"/>
                      <rect x="2" y="9" width="4" height="13" fill="white"/>
                      <circle cx="4" cy="4" r="2" fill="white"/>
                    </svg>
                  ),
                },
                {
                  label: "X (Twitter)",
                  href: "#",
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(255,255,255,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(203,119,45,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 16, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 22 }}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                ["Brand Strategy", "/services/brand-strategy"],
                ["AI Visibility", "/services/ai-visibility"],
                ["Go-To-Market", "/services/gtm"],
                ["Capital Raise", "/services/capital-raise"],
                ["Revenue Engineering", "/services/revenue-engineering"],
                ["Outbound Growth", "/services/outbound-growth"],
                ["Website Development", "/services/website-development"],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >{label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 16, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 22 }}>Company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                ["About", "/about"],
                ["Industries", "/industries"],
                ["Case Studies", "/case-studies"],
                ["Pricing", "/pricing"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >{label}</Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 16, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 22 }}>Resources</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                ["Resources Hub", "/resources"],
                ["AI Visibility Audit", "/ai-visibility-audit"],
                ["Capital Raise Audit", "/capital-raise-audit"],
                ["GTM Audit", "/gtm-audit"],
                ["Client Portal", "/client-portal"],
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >{label}</Link>
              ))}
            </div>

            {/* CTA callout */}
            <div style={{ marginTop: 32, padding: "20px", background: "rgba(203,119,45,0.1)", border: "1px solid rgba(203,119,45,0.2)", borderRadius: 10 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#cb772d", marginBottom: 8 }}>
                Ready to grow?
              </p>
              <Link href="/contact" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#cb772d")}
                onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
              >
                Book a Discovery Call →
              </Link>
            </div>
          </div>
        </div>

        {/* Orange divider */}
        <div style={{ height: 1, background: "rgba(203,119,45,0.4)", marginBottom: 28 }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingBottom: 32 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
            © {new Date().getFullYear()} Brand Iron Marketing. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              ["Privacy Policy", "/privacy"],
              ["Terms of Service", "/terms"],
              ["Sitemap", "/sitemap.xml"],
            ].map(([label, href]) => (
              <Link key={label} href={href} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copper accent bar */}
      <div style={{ height: 4, background: "linear-gradient(to right, #8B5E24, #cb772d, #e8a44a, #cb772d, #8B5E24)" }} />

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-of-type { grid-template-columns: 1fr 1fr !important; }
          footer > div > div:first-of-type > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 500px) {
          footer > div > div:first-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
