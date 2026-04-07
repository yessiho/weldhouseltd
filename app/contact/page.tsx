// app/contact/page.tsx

import { Mail, Phone, Globe, MapPin, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact WeldHouse" };

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Get In Touch</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Contact WeldHouse</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Whether you are an investor, an oil company representative, a potential partner or a media enquiry — we welcome your contact.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>

            {/* Contact details */}
            <div>
              <span className="section-eyebrow">Direct Contact</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "2rem" }}>Reach Us Directly</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
                <a href={`mailto:${COMPANY.email}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.25rem", borderRadius: "3px", textDecoration: "none" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--green-glow)", border: "1px solid rgba(74,124,47,0.4)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Email</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>{COMPANY.email}</div>
                  </div>
                </a>

                <a href={`tel:${COMPANY.phone2}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.25rem", borderRadius: "3px", textDecoration: "none" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--green-glow)", border: "1px solid rgba(74,124,47,0.4)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Nigeria</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>{COMPANY.phone2}</div>
                  </div>
                </a>

                <a href={`tel:${COMPANY.phone1}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.25rem", borderRadius: "3px", textDecoration: "none" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--green-glow)", border: "1px solid rgba(74,124,47,0.4)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Canada</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>{COMPANY.phone1}</div>
                  </div>
                </a>

                <a href={`https://${COMPANY.website}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.25rem", borderRadius: "3px", textDecoration: "none" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--green-glow)", border: "1px solid rgba(74,124,47,0.4)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Globe size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Website</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>{COMPANY.website}</div>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderLeft: "4px solid var(--green)", padding: "1.5rem", borderRadius: "3px" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <MapPin size={18} color="var(--orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Registered Address</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-primary)", lineHeight: 1.6 }}>{COMPANY.address}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>RC 760751 · Est. {COMPANY.founded}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <span className="section-eyebrow">Investor Relations</span>
              <span className="accent-line" />

              {/* Contact card — no individual name */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "2rem", borderRadius: "3px", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{ width: "64px", height: "64px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", border: "2px solid var(--orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "#fff", letterSpacing: "0.05em" }}>WH</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>WeldHouse Limited</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.4rem" }}>Investor Relations</div>
                    <span className="badge badge-green">RC 760751</span>
                  </div>
                </div>
                <div style={{ height: "1px", background: "var(--border-green)", marginBottom: "1.25rem" }} />
                <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                  For all investor relations, partnership enquiries and project discussions, please reach out via email or phone. Our team will respond promptly to all serious enquiries.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href={`mailto:${COMPANY.email}`} className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.78rem" }}><Mail size={14} /> Send Email</a>
                  <a href={`tel:${COMPANY.phone2}`} className="btn-secondary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.78rem" }}><Phone size={14} /> Call Nigeria</a>
                </div>
              </div>

              {/* Enquiry types */}
              <div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>We Welcome Enquiries From</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { type: "Investors & Fund Providers",       desc: "Seeking US$450M — partial funding accepted. Debt and equity options available." },
                    { type: "International Oil Companies",       desc: "FPSO fabrication, offshore platform and module fabrication partnerships." },
                    { type: "International Fabrication Partners",desc: "Joint venture or partnership for yard operations and contract execution." },
                    { type: "Engineering & Design Firms",        desc: "Yard design, TPA services and construction management opportunities." },
                    { type: "Media & Press",                     desc: "Press enquiries, project updates and executive interviews." },
                  ].map((item) => (
                    <div key={item.type} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1rem 1.25rem", borderRadius: "3px", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--green-light)", fontSize: "0.75rem", flexShrink: 0, marginTop: "2px" }}>▸</span>
                      <div>
                        <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--orange)", marginBottom: "0.2rem" }}>{item.type}</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Project Location</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Find Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { label: "Registered Office",    value: "27 Port Harcourt Street, Uyo, Akwa Ibom State" },
              { label: "Fabrication Yard Site", value: "Esuk Enwang, Mbo LGA, Akwa Ibom State" },
              { label: "GPS Coordinates",       value: "4° 40' 48\"N · 8° 19' 08\"E" },
              { label: "Ocean Distance",        value: "8 Nautical Miles from Atlantic Ocean" },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.5rem", borderRadius: "3px", textAlign: "center" }}>
                <MapPin size={18} color="var(--orange)" style={{ marginBottom: "0.75rem" }} />
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.4rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-primary)", lineHeight: 1.5 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Take the Next Step?</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            Download the Executive Summary or view the full investment terms to begin your due diligence.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">Investment Terms <ArrowRight size={16} /></Link>
            <Link href="/investors/download" className="btn-secondary">Download Documents <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}