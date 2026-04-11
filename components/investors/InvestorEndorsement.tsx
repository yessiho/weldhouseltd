// components/investors/InvestorEndorsement.tsx

import { TrendingUp } from "lucide-react";

export default function InvestorEndorsement() {
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "2.5rem", borderRadius: "3px", textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <div style={{ width: "56px", height: "56px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--orange)" }}>
          <TrendingUp size={24} color="var(--orange)" />
        </div>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>Independent Financial Model</div>
          <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Verified by Independent Financial Advisor</div>
        </div>
      </div>
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
        An independent Business Plan and Financial Model has confirmed the project as highly profitable and commercially feasible. Financial details are available to qualified investors under a Hold Harmless Agreement.
      </p>
    </div>
  );
}