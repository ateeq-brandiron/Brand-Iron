"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const navLinks = [
    ["Services", "/services"],
    ["About", "/about"],
    ["Results", "/case-studies"],
    ["Contact", "/contact"],
    ["Blog", "/blog"],
    ["Testimonials", "/testimonials"],
  ];

  const socialLinks = [
    {
      label: "X",
      href: "#",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2z" fill="white"/>
          <rect x="2" y="9" width="4" height="13" fill="white"/>
          <circle cx="4" cy="4" r="2" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ position: "relative", color: "#FFFFFF", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
      }} />
      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,38,0.88) 0%, rgba(10,20,38,0.82) 60%, rgba(10,20,38,0.93) 100%)",
      }} />

      {/* Copper top accent line */}
      <div style={{ position: "relative", height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Top nav row */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0 8px", padding: "20px 0" }}>
              {navLinks.map(([label, href], i) => (
                <span key={label} style={{ display: "flex", alignItems: "center" }}>
                  <Link href={href} style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.80)",
                    textDecoration: "none",
                    padding: "4px 10px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#cb772d")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
                  >{label}</Link>
                  {i < navLinks.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>|</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Main content: address/social left + newsletter right */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 48px" }}>
          <div className="footer-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

            {/* Left: Brand info + address + social */}
            <div>
              <Link href="/" style={{ display: "inline-block", marginBottom: 28, textDecoration: "none" }}>
                <img src="/logo.png" alt="Brand Iron Marketing" style={{ height: 56, width: "auto" }} />
              </Link>

              <div style={{ marginBottom: 28 }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.85)" }}>
                  Brand Iron
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.85)" }}>
                  2590 Welton St. Suite 200,
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.85)" }}>
                  Denver, CO 80205
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.9, color: "#cb772d", marginTop: 4 }}>
                  Ph: &nbsp;303-534-1901
                </p>
              </div>

              {/* Social icons */}
              <div style={{ display: "flex", gap: 10 }}>
                {socialLinks.map(({ label, href, icon }) => (
                  <a key={label} href={href} aria-label={label} style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(203,119,45,0.40)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(203,119,45,0.6)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                  }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Newsletter */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{
                fontFamily: "'Burford Rustic Black', sans-serif",
                fontSize: 28,
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.25,
                marginBottom: 8,
                letterSpacing: "0.02em",
              }}>
                Subscribe To Our Newsletter
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.60)", marginBottom: 24 }}>
                Insights, strategies, and growth frameworks — straight to your inbox.
              </p>

              <form onSubmit={e => { e.preventDefault(); setEmail(""); }} style={{ display: "flex", gap: 0, maxWidth: 420 }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "14px 20px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.30)",
                    borderRight: "none",
                    borderRadius: "40px 0 0 40px",
                    color: "#FFFFFF",
                    outline: "none",
                  }}
                />
                <button type="submit" style={{
                  width: 52, height: 52,
                  borderRadius: "0 40px 40px 0",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.30)",
                  borderLeft: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(203,119,45,0.50)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M10 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              © {new Date().getFullYear()} Brand Iron Marketing. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Sitemap", "/sitemap.xml"]].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >{label}</Link>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Copper bottom bar */}
      <div style={{ position: "relative", height: 4, background: "linear-gradient(to right, #8B5E24, #cb772d, #e8a44a, #cb772d, #8B5E24)" }} />

      <style>{`
        @media (max-width: 768px) {
          .footer-main-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
