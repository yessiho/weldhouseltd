// app/risk/page.tsx

import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { businessRisks, securityRisks } from "@/data/risks";

export default function RiskPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Risk Management</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Risk &amp; Mitigation</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A comprehensive risk register identifying all key business and security risks for the WeldHouse Fabrication Yard project — with detailed mitigation strategies for each.
          </p>
        </div>
      </section>

      {/* ── BUSINESS RISKS ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-eyebrow">Business Risks</span>
            <span className="accent-line" />
            <h2 style={{ marginTop: "0.5rem" }}>Business Risk &amp; Mitigation</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {businessRisks.map((item, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: "3px", overflow: "hidden" }}>
                {/* Risk header */}
                <div style={{ padding: "1.25rem 1.75rem", background: "rgba(245,130,10,0.05)", borderBottom: "1px solid var(--border-green)", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "32px", background: "var(--orange-glow)", border: "1px solid rgba(245,130,10,0.4)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)" }}>{item.risk}</div>
                </div>
                {/* Mitigations */}
                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Mitigation Strategies</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {item.mitigations.map((m, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <Shield size={14} color="var(--green-light)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY RISKS ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-eyebrow">Security Risks</span>
            <span className="accent-line" />
            <h2 style={{ marginTop: "0.5rem" }}>Security Risk &amp; Mitigation</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {securityRisks.map((item, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ padding: "1.25rem 1.75rem", background: "rgba(74,124,47,0.05)", borderBottom: "1px solid var(--border-green)", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "32px", background: "var(--green-glow)", border: "1px solid rgba(74,124,47,0.4)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--green-light)" }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--green-light)" }}>{item.risk}</div>
                </div>
                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Mitigation Strategies</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {item.mitigations.map((m, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <Shield size={14} color="var(--green-light)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Satisfied With Our Risk Management?</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">View Investment Terms <ArrowRight size={16} /></Link>
            <Link href="/swot" className="btn-secondary">SWOT Analysis <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}