// app/swot/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { swotData } from "@/data/swot";

const config = {
  strength:    { label: "Strengths",    color: "var(--green-light)",  border: "var(--green)",  bg: "rgba(74,124,47,0.06)",  icon: "💪" },
  weakness:    { label: "Weaknesses",   color: "var(--orange)",       border: "var(--orange)", bg: "rgba(245,130,10,0.06)", icon: "⚠️" },
  opportunity: { label: "Opportunities",color: "var(--green-light)",  border: "var(--green)",  bg: "rgba(74,124,47,0.06)",  icon: "🚀" },
  threat:      { label: "Threats",      color: "var(--orange)",       border: "var(--orange)", bg: "rgba(245,130,10,0.06)", icon: "🛡️" },
};

export default function SwotPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Strategic Analysis</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>SWOT Analysis</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A comprehensive strategic analysis of WeldHouse Limited&apos;s internal strengths and weaknesses, and the external opportunities and threats facing the Fabrication Yard project.
          </p>
        </div>
      </section>

      {/* ── SWOT MATRIX ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {swotData.map((item) => {
              const c = config[item.category];
              return (
                <div key={item.category} style={{ background: c.bg, border: `1px solid ${c.border}`, borderTop: `4px solid ${c.color}`, padding: "2rem", borderRadius: "3px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: c.color, letterSpacing: "0.04em", lineHeight: 1 }}>{c.label}</div>
                      <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.points.length} items identified</div>
                    </div>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {item.points.map((point, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span style={{ color: c.color, flexShrink: 0, fontSize: "0.75rem", marginTop: "3px", fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
                        <span style={{ fontSize: "0.87rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUMMARY ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <span className="section-eyebrow">Strategic Conclusion</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>Overall Assessment</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", textAlign: "left" }}>
              {[
                { label: "Strength vs Weakness", verdict: "Strong", color: "var(--green-light)", desc: "The unique market position, deep-water location, experienced team and acquired land far outweigh the start-up limitations." },
                { label: "Opportunity vs Threat", verdict: "Compelling", color: "var(--green-light)", desc: "Legal mandate for in-country fabrication with 95 undeveloped oil blocks creates a captive market with essentially no current competition." },
              ].map((item) => (
                <div key={item.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--green)", padding: "1.75rem", borderRadius: "3px" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.4rem" }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: item.color, lineHeight: 1, marginBottom: "0.75rem" }}>{item.verdict}</div>
                  <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Explore Risk Mitigation</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/risk" className="btn-primary">Risk &amp; Mitigation <ArrowRight size={16} /></Link>
            <Link href="/investors" className="btn-secondary">Investment Terms <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}