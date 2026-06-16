"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", size: "", interest: "", investment: "", timeline: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "#333333",
    outline: "none",
  };

  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "50vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.78)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#cb772d", marginBottom: 16 }}>Get In Touch</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            lineHeight: 1.0, marginBottom: 28,
          }}>
            Let&apos;s Build Your Revenue Engine
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 540, margin: "0 auto" }}>
            Whether you&apos;re ready to start or just exploring, we&apos;d love to learn about your business and share how BrandIron creates transformative growth.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section style={{ background: "#0D1A2E", padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { icon: "📅", title: "Book A Strategy Session", desc: "30-minute call to explore how BrandIron can transform your revenue engine." },
            { icon: "🤖", title: "AI Transformation Inquiry", desc: "Discuss your AI readiness and where automation can create real business value." },
            { icon: "📈", title: "Capital Raise Discussion", desc: "Explore how we can help you build investor-ready positioning and raise capital." },
            { icon: "💬", title: "General Inquiry", desc: "Any other questions about BrandIron services or capabilities." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "24px 20px", textAlign: "center", borderTop: "3px solid #cb772d" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: "#0D1A2E", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "start" }}>

          {/* Form */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "40px 36px" }}>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 36, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", marginBottom: 8 }}>Send Us A Message</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 32 }}>We typically respond within one business day.</p>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#cb772d", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 24, fontWeight: 600, textTransform: "uppercase", color: "#FFFFFF", marginBottom: 12 }}>Message Received</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>Thank you for reaching out. A member of our team will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Company</label>
                    <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Your company" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Phone</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Company Size</label>
                  <select value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ background: "#FFFFFF", color: "#333333" }}>Select size...</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>1–10 employees</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>11–50 employees</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>51–200 employees</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>200+ employees</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>I&apos;m interested in...</label>
                  <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ background: "#FFFFFF", color: "#333333" }}>Select an option...</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>Revenue Strategy & Growth Planning</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>AI Transformation</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>CRM & Revenue Operations</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>Demand Generation</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>Capital Raise Support</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>Full Revenue Engine Build</option>
                    <option style={{ background: "#FFFFFF", color: "#333333" }}>General Inquiry</option>
                  </select>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Investment Range</label>
                    <select value={form.investment} onChange={e => setForm({ ...form, investment: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" style={{ background: "#FFFFFF", color: "#333333" }}>Select range...</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>Under $5K/mo</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>$5K–$15K/mo</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>$15K–$30K/mo</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>$30K+/mo</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Timeline</label>
                    <select value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" style={{ background: "#FFFFFF", color: "#333333" }}>Select timeline...</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>ASAP</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>1–3 months</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>3–6 months</option>
                      <option style={{ background: "#FFFFFF", color: "#333333" }}>Exploring options</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your business and what you're looking to achieve..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" style={{ background: "#cb772d", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 32px", borderRadius: 4, border: "none", cursor: "pointer", alignSelf: "flex-start", marginTop: 4 }}>
                  Send Message →
                </button>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>No spam. No obligation. We respond within 1 business day.</p>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <div style={{ backgroundImage: "url('/images/bg-haybales.jpg')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: 10, overflow: "hidden", height: 220, position: "relative", marginBottom: 24 }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(28,54,82,0.75) 100%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF" }}>Executive-Level Strategy</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>25+ years of growth experience, applied to your business.</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {[
                { label: "Response Time", value: "Within 1 business day" },
                { label: "Serving", value: "Global clients, enterprise to startup" },
                { label: "First Step", value: "30-min Revenue Strategy Session" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "14px 18px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#cb772d", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#cb772d" }}>{label}</p>
                    <p style={{ fontSize: 14, color: "#FFFFFF", marginTop: 2 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#cb772d", borderRadius: 10, padding: "24px 24px" }}>
              <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", marginBottom: 8 }}>Ready to start immediately?</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.80)", marginBottom: 16, lineHeight: 1.6 }}>Book a Revenue Strategy Session directly in our calendar and we&apos;ll get you started right away.</p>
              <a href="mailto:contact@brandiron.net" style={{ display: "inline-block", background: "#0D1A2E", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 24px", borderRadius: 4, textDecoration: "none" }}>Email Us Directly →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
