"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0D1A2E", color: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>

          {/* Logo + tagline + social */}
          <div>
            {/* Stacked logo */}
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: 24 }}>
              <img src="/logo.png" alt="Brand Iron Marketing" style={{ height: 72, width: "auto" }} />
            </Link>

            <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.70)", maxWidth: 300, marginBottom: 32 }}>
              We drive measurable revenue generation through customized AI systems, elevated by expert human craft, and integrated performance strategies across GTM, branding, and sales.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M4 4l16 16M4 20L20 4" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
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
            <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 22 }}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                ["AI Strategy", "/ai-strategy"],
                ["Automation & Agents", "/ai-execution"],
                ["CRM Systems", "/crm-revops"],
                ["Data & Dashboards", "/data-revenue-visibility"],
                ["Revenue Integration", "/revenue-engine"],
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
            <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 22 }}>Company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                ["About", "/about"],
                ["Results", "/transformation-stories"],
                ["Testimonials", "/transformation-stories"],
                ["Blog", "/insights"],
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
            <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 22 }}>Resources</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                ["Case Studies", "/transformation-stories"],
                ["Process", "/#process"],
                ["BrandStorm™", "/contact"],
                ["GTM Strategy", "/gtm-sales-systems"],
                ["Documentation", "/insights"],
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >{label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Orange divider */}
        <div style={{ height: 1, background: "#cb772d", marginBottom: 28 }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingBottom: 32 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.60)" }}>© {new Date().getFullYear()} Brand Iron. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" style={{ fontSize: 13, color: "rgba(255,255,255,0.60)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
            >Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: 13, color: "rgba(255,255,255,0.60)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
            >Terms of service</Link>
          </div>
        </div>
      </div>

      {/* Orange accent bar at bottom edge */}
      <div style={{ height: 5, background: "linear-gradient(to right, #8B5E24, #cb772d, #8B5E24)" }} />

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer > div > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 500px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
