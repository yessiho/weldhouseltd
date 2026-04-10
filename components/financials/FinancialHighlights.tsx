// components/financials/FinancialHighlights.tsx

import { TrendingUp } from "lucide-react";

export default function FinancialHighlights() {
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "3rem", borderRadius: "3px" }}>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ width: "60px", height: "60px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--orange)" }}>
          <TrendingUp size={24} color="var(--orange)" />
        </div>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>Deloitte &amp; Touche</div>
          <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Independent Financial Advisor</div>
        </div>
      </div>

      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem", textAlign: "center" }}>
        An independent Business Plan and Financial Model of the venture developed by Deloitte has confirmed the project as being very profitable and highly feasible.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
        {[
          { value: "54.8%", label: "IRR" },
          { value: "5 Years", label: "Payback" },
        ].map((s) => (
          <div key={s.label} style={{ padding: "1.25rem", background: "var(--bg-secondary)", textAlign: "center" }}>
            <div className="stat-value" style={{ fontSize: "2rem" }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
          </div>
        ))}
      </div>

    </div>
  );
}