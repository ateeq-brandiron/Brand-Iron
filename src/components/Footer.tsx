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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ position: "relative", color: "#FFFFFF", overflow: "hidden" }}>

      {/* Split background: leather left / scenic right */}
      <div style={{ position: "absolute", inset: 0, display: "flex" }}>
        {/* Left half — leather from footer logo image */}
        <div style={{
          width: "38%",
          backgroundImage: "url('/images/bi-footer-logo.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        {/* Right half — misty forest mountain */}
        <div style={{
          flex: 1,
          backgroundImage: "url('/images/bg-forest-mist.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}>
          {/* dark overlay on scenic side */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "38%", right: 0, background: "rgba(8,18,38,0.65)" }} />
        </div>
      </div>

      {/* Copper top accent */}
      <div style={{ position: "relative", zIndex: 2, height: 3, background: "linear-gradient(to right, transparent, #cb772d, transparent)" }} />

      <div style={{ position: "relative", zIndex: 2, display: "flex", minHeight: 380 }}>

        {/* LEFT PANEL — logo centered on leather */}
        <div style={{
          width: "38%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "56px 40px",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "block", textAlign: "center" }}>
            <img
              src="/logo.png"
              alt="Brand Iron Marketing"
              style={{ height: 110, width: "auto", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }}
            />
          </Link>
        </div>

        {/* RIGHT PANEL — nav + info + newsletter */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "40px 48px 40px 56px" }}>

          {/* Nav links row */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "0 6px", marginBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: 20 }}>
            {navLinks.map(([label, href], i) => (
              <span key={label} style={{ display: "flex", alignItems: "center" }}>
                <Link href={href} style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none", padding: "2px 8px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#cb772d")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.78)")}
                >{label}</Link>
                {i < navLinks.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.22)", fontSize: 11 }}>|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Address + newsletter row */}
          <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flex: 1 }}>

            {/* Address + social */}
            <div style={{ minWidth: 200 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.88)" }}>Brand Iron</p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)" }}>2590 Welton St. Suite 200,</p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)" }}>Denver, CO 80205</p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>Ph:&nbsp; 303-534-1901</p>
              <div style={{ display: "flex", gap: 12 }}>
                {socialLinks.map(({ label, href, icon }) => (
                  <a key={label} href={href} aria-label={label} style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(203,119,45,0.45)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#cb772d"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)"; }}
                  >{icon}</a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div style={{ flex: 1, maxWidth: 360 }}>
              <p style={{
                fontFamily: "'Burford Rustic Black', sans-serif",
                fontSize: 22, fontWeight: 400,
                color: "#FFFFFF", lineHeight: 1.25, marginBottom: 20,
              }}>
                Subscribe To Our<br />Newsletter
              </p>
              <form onSubmit={e => { e.preventDefault(); setEmail(""); }} style={{ display: "flex", gap: 0 }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    flex: 1, padding: "12px 18px",
                    fontFamily: "'Montserrat', sans-serif", fontSize: 13,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.30)",
                    borderRight: "none",
                    borderRadius: "40px 0 0 40px",
                    color: "#FFFFFF", outline: "none",
                  }}
                />
                <button type="submit" style={{
                  width: 48, height: 48,
                  borderRadius: "0 40px 40px 0",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.30)",
                  borderLeft: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(203,119,45,0.55)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M10 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "16px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.40)" }}>
            © {new Date().getFullYear()} Brand Iron Marketing. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Sitemap", "/sitemap.xml"]].map(([label, href]) => (
              <Link key={label} href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.40)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.40)")}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copper bottom bar */}
      <div style={{ position: "relative", zIndex: 2, height: 4, background: "linear-gradient(to right, #8B5E24, #cb772d, #e8a44a, #cb772d, #8B5E24)" }} />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: "absolute", bottom: 28, right: 28, zIndex: 10,
          width: 48, height: 48, borderRadius: "50%",
          background: "#cb772d",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(203,119,45,0.5)",
          transition: "background 0.2s, transform 0.2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#b8661f"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#cb772d"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </footer>
  );
}
