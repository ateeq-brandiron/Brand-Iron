"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const servicesMenu = [
  { label: "Brand Strategy", href: "/services/brand-strategy" },
  { label: "AI Visibility & Discoverability", href: "/services/ai-visibility" },
  { label: "Go-To-Market Strategy", href: "/services/gtm" },
  { label: "Capital Raise Support", href: "/services/capital-raise" },
  { label: "Revenue Engineering", href: "/services/revenue-engineering" },
  { label: "Outbound Growth", href: "/services/outbound-growth" },
  { label: "Website Development", href: "/services/website-development" },
];

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(13,26,46,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Brand Iron Marketing" style={{ height: 56, width: "auto" }} />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">

            {/* Services Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: servicesOpen ? "#cb772d" : "rgba(255,255,255,0.9)",
                display: "flex", alignItems: "center", gap: 5, padding: 0,
                transition: "color 0.2s", textDecoration: "none",
              }}>
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none" }}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {servicesOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
                  background: "#0D1A2E", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8, padding: "8px 0", minWidth: 300,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                }}>
                  <div style={{
                    position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)",
                    width: 12, height: 12, background: "#0D1A2E",
                    border: "1px solid rgba(255,255,255,0.12)", borderBottom: "none", borderRight: "none",
                    rotate: "45deg",
                  }} />
                  {servicesMenu.map((s) => (
                    <Link key={s.href} href={s.href} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "11px 20px",
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 13,
                      color: "rgba(255,255,255,0.8)", textDecoration: "none",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(203,119,45,0.12)"; e.currentTarget.style.color = "#cb772d"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#cb772d", flexShrink: 0 }} />
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)", textDecoration: "none",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#cb772d")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              >
                {l.label}
              </Link>
            ))}

            <Link href="/contact" className="btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer" }} className="mobile-menu-btn" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? <path d="M6 6l12 12M6 18L18 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/> : <path d="M3 7h18M3 12h18M3 17h18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ paddingBottom: 24, borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(13,26,46,0.98)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 16 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", paddingBottom: 4 }}>Services</p>
              {servicesMenu.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)} style={{ padding: "8px 0 8px 12px", fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 14, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>{s.label}</Link>
              ))}
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "8px 0" }} />
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ padding: "10px 0", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", textDecoration: "none" }}>{l.label}</Link>
              ))}
              <div style={{ paddingTop: 12 }}>
                <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
