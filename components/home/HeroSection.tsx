"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--bg-primary)" }}>

      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glows */}
      <div style={{ position: "absolute", top: "15%", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(245,130,10,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(74,124,47,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Vertical accent line */}
      <div style={{ position: "absolute", left: "calc(50% - 640px)", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(245,130,10,0.5), transparent)" }} />

      <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "9rem", paddingBottom: "4rem" }}>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* ── LEFT: TEXT CONTENT ── */}
          <div>

            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem", animation: "fadeUp 0.6s ease forwards", opacity: 0 }}>
              <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg, var(--green), var(--orange))" }} />
              <span className="section-eyebrow">Nigeria · Oil &amp; Gas · RC 760751</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 6.5rem)", lineHeight: 0.95, letterSpacing: "0.02em", color: "var(--text-primary)", animation: "fadeUp 0.7s 0.1s ease forwards", opacity: 0, marginBottom: "1.5rem" }}>
              NIGERIA&apos;S
              <br />
              <span style={{ color: "var(--green-light)" }}>FIRST</span> MODERN
              <br />
              FABRICATION
              <br />
              <span style={{ WebkitTextStroke: "1px rgba(245,130,10,0.5)", color: "transparent", display: "block" }}>YARD</span>
            </h1>

            {/* Subtext */}
            <p style={{ fontFamily: "var(--font-condensed)", fontSize: "1.05rem", fontWeight: 400, color: "var(--text-secondary)", maxWidth: "480px", lineHeight: 1.7, marginBottom: "2.5rem", animation: "fadeUp 0.7s 0.2s ease forwards", opacity: 0 }}>
              WeldHouse Limited is developing the first large-scale high tonnage Oil &amp; Gas Fabrication Yard in Nigeria — enabling full in-country compliance with the Nigerian Content Law and unlocking billions in offshore contracts.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem", animation: "fadeUp 0.7s 0.3s ease forwards", opacity: 0 }}>
              <Link href="/investors" className="btn-primary">Invest in the Project <ArrowRight size={16} /></Link>
              <Link href="/project" className="btn-secondary">View Project Details <ArrowRight size={16} /></Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", animation: "fadeUp 0.7s 0.4s ease forwards", opacity: 0, flexWrap: "wrap" }}>
              {[
                { label: "Founded", value: "2008" },
                { label: "Land Acquired", value: "49 Ha" },
                { label: "Deloitte Verified", value: "NPV $1.4B" },
              ].map((badge, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "2px", paddingRight: "1.5rem", borderRight: i < 2 ? "1px solid var(--border-green)" : "none" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--orange)", lineHeight: 1 }}>{badge.value}</span>
                  <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>{badge.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: IMAGE CARDS ── */}
          <div style={{ position: "relative", animation: "fadeIn 0.8s 0.3s ease forwards", opacity: 0 }}>

            {/* Main large image card */}
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-green)", boxShadow: "0 24px 60px rgba(0,0,0,0.5)", marginBottom: "1rem" }}>
              <div style={{ width: "100%", height: "320px", background: "linear-gradient(135deg, #0D2B0A 0%, #1A4A12 40%, #0F3A0C 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>

                {/* Placeholder visual — replace src with real image */}
                <Image
                  src="/images/hero/fabrication-yard.jpg"
                  alt="WeldHouse Fabrication Yard"
                  fill
                  style={{ objectFit: "cover", opacity: 0.7 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />

                {/* Overlay when no image */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,43,10,0.85), rgba(26,74,18,0.6))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", border: "2px solid var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(245,130,10,0.1)" }}>
                    <Play size={24} color="var(--orange)" style={{ marginLeft: "3px" }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#fff", letterSpacing: "0.05em" }}>FABRICATION YARD</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Esuk Enwang, Mbo · Akwa Ibom State</div>
                  </div>
                </div>

                {/* Bottom overlay */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--orange)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2px" }}>Project Site</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#fff" }}>49 Hectares · Cross River Frontage</div>
                    </div>
                    <span className="badge badge-green">Land Acquired</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Two smaller cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>

              {/* Card 1 — FPSO */}
              <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-green)", position: "relative", background: "var(--bg-card)" }}>
                <div style={{ height: "160px", background: "linear-gradient(135deg, #0A2810, #1E4A15)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src="/images/facilities/fpso.jpg"
                    alt="FPSO Fabrication"
                    fill
                    style={{ objectFit: "cover", opacity: 0.6 }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,40,16,0.7), rgba(30,74,21,0.5))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "rgba(245,130,10,0.15)", letterSpacing: "0.1em" }}>FPSO</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.75rem", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.6rem", color: "var(--orange)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Primary Product</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "#fff" }}>FPSO Fabrication</div>
                  </div>
                </div>
                <div style={{ padding: "0.85rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--orange)" }}>$4–6B</div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Per Contract</div>
                </div>
              </div>

              {/* Card 2 — Location */}
              <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(245,130,10,0.4)", position: "relative", background: "var(--bg-card)" }}>
                <div style={{ height: "160px", background: "linear-gradient(135deg, #1A0F00, #3D2500)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src="/images/land/location-map.jpg"
                    alt="Yard Location"
                    fill
                    style={{ objectFit: "cover", opacity: 0.5 }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(245,130,10,0.2)", border: "2px solid var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--orange)" }} />
                    </div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.62rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>4° 40&apos; 48&quot;N · 8° 19&apos; 08&quot;E</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.75rem", background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.6rem", color: "var(--orange)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Location</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "#fff" }}>Cross River, AKS</div>
                  </div>
                </div>
                <div style={{ padding: "0.85rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--green-light)" }}>8 NM</div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>From Atlantic Ocean</div>
                </div>
              </div>

            </div>

            {/* Floating stat badge */}
            <div style={{ position: "absolute", top: "-16px", right: "-16px", background: "linear-gradient(135deg, var(--orange), var(--orange-dark))", borderRadius: "4px", padding: "0.85rem 1.1rem", boxShadow: "0 8px 24px rgba(245,130,10,0.4)", textAlign: "center", zIndex: 20 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", lineHeight: 1 }}>$450M</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>Funding Needed</div>
            </div>

            {/* Floating IRR badge */}
            <div style={{ position: "absolute", bottom: "-16px", left: "-16px", background: "linear-gradient(135deg, var(--green), var(--green-dark))", borderRadius: "4px", padding: "0.85rem 1.1rem", boxShadow: "0 8px 24px rgba(74,124,47,0.4)", textAlign: "center", zIndex: 20 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", lineHeight: 1 }}>54.8%</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>IRR Return</div>
            </div>

          </div>

        </div>

        {/* ── STATS ROW ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", borderTop: "1px solid var(--border-green)", marginTop: "5rem", animation: "fadeUp 0.7s 0.5s ease forwards", opacity: 0 }}>
          {[
            { value: "$450M",   label: "Total Funding",     suffix: "USD Required" },
            { value: "$1.4B",   label: "Net Present Value", suffix: "Deloitte Model" },
            { value: "54.8%",   label: "IRR",               suffix: "Return" },
            { value: "5 Yrs",   label: "Payback Period",    suffix: "From Operations" },
            { value: "49 Ha",   label: "Land Acquired",     suffix: "Akwa Ibom State" },
            { value: "40 Mths", label: "Build Timeline",    suffix: "To Completion" },
          ].map((stat, i) => (
            <div key={stat.label} style={{ padding: "1.75rem 1.25rem", borderRight: i < 5 ? "1px solid var(--border-green)" : "none", background: i % 2 === 0 ? "transparent" : "rgba(74,124,47,0.03)" }}>
              <div className="stat-value" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)" }}>{stat.value}</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.25rem" }}>{stat.label}</div>
              <div className="stat-label" style={{ fontSize: "0.65rem", marginTop: "0.1rem" }}>{stat.suffix}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", animation: "fadeIn 1s 1s ease forwards", opacity: 0 }}>
        <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>Scroll</span>
        <ChevronDown size={16} color="var(--orange)" />
      </div>

    </section>
  );
}