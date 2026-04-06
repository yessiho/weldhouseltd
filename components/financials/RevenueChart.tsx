// components/financials/RevenueChart.tsx

import { REVENUE_PROJECTIONS } from "@/lib/constants";

export default function RevenueChart() {
  const maxRevenue = Math.max(...REVENUE_PROJECTIONS.map((r) => r.revenue));

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "2.5rem", borderRadius: "3px" }}>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem", height: "300px", position: "relative" }}>

        {/* Y-axis */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", paddingBottom: "2.5rem" }}>
          {["$3.5B", "$2.5B", "$1.5B", "$0.5B", "$0"].reverse().map((l) => (
            <span key={l} style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.08em", textAlign: "right", width: "40px" }}>{l}</span>
          ))}
        </div>

        {/* Bars */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end", flex: 1, height: "100%", position: "relative" }}>

          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((pct) => (
            <div key={pct} style={{ position: "absolute", bottom: `calc(${pct}% + 2.5rem)`, left: 0, right: 0, height: "1px", background: pct === 0 ? "var(--border-green)" : "rgba(74,124,47,0.1)", zIndex: 0 }} />
          ))}

          {REVENUE_PROJECTIONS.map((item, i) => {
            const heightPct = maxRevenue > 0 ? (item.revenue / maxRevenue) * 100 : 5;
            const isConstruction = item.revenue === 0;
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", height: "100%", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
                {!isConstruction && (
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", color: "var(--orange)", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                    ${(item.revenue / 1000).toFixed(1)}B
                  </div>
                )}
                <div style={{ width: "100%", height: isConstruction ? "8px" : `${heightPct}%`, background: isConstruction ? "var(--border-green)" : "linear-gradient(to top, var(--green-dark), var(--orange))", borderRadius: "2px 2px 0 0", minHeight: "8px", position: "relative", overflow: "hidden" }}>
                  {!isConstruction && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />}
                </div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: isConstruction ? "var(--text-muted)" : "var(--text-secondary)", letterSpacing: "0.08em", textAlign: "center", marginTop: "0.5rem" }}>
                  {item.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "16px", height: "8px", background: "linear-gradient(90deg, var(--green-dark), var(--orange))", borderRadius: "2px" }} />
          <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>Revenue (US$ Millions)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "16px", height: "8px", background: "var(--border-green)", borderRadius: "2px" }} />
          <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>Construction Phase (No Revenue)</span>
        </div>
      </div>

    </div>
  );
}