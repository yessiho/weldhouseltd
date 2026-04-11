// components/financials/FinancialHighlights.tsx

export default function FinancialHighlights() {
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "3rem", borderRadius: "3px", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>Independent Financial Model</div>
      <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Verified by an Independent Financial Advisor</div>
      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
        An independent Business Plan and Financial Model has confirmed the project as highly profitable and commercially feasible. Financial details are available to qualified investors upon execution of a Hold Harmless Agreement.
      </p>
    </div>
  );
}