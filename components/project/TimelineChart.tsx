// components/project/TimelineChart.tsx

import { timeline } from "@/data/timeline";

export default function TimelineChart() {
  return (
    <div style={{ border: "1px solid var(--border-green)", overflow: "hidden" }}>

      {/* Header */}
      <div style={{ background: "var(--bg-navbar)", padding: "0.75rem 1.5rem", display: "grid", gridTemplateColumns: "200px 1fr 120px", gap: "1rem", borderBottom: "1px solid var(--border-accent)" }}>
        <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Phase</span>
        <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Timeline (Months 1–40)</span>
        <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", textAlign: "right" }}>Cost (US$M)</span>
      </div>

      {/* Rows */}
      {timeline.map((item, i) => {
        const barLeft = ((item.start - 1) / 40) * 100;
        const barWidth = ((item.end - item.start + 1) / 40) * 100;
        return (
          <div
            key={i}
            style={{
              padding: "1rem 1.5rem",
              display: "grid",
              gridTemplateColumns: "200px 1fr 120px",
              gap: "1rem",
              alignItems: "center",
              borderBottom: i < timeline.length - 1 ? "1px solid var(--border-green)" : "none",
              background: i % 2 === 0 ? "var(--bg-card)" : "transparent",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)" }}>{item.phase}</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "2px" }}>Mth {item.start}–{item.end}</div>
            </div>
            <div style={{ position: "relative", height: "28px", background: "rgba(74,124,47,0.1)", borderRadius: "2px" }}>
              <div style={{ position: "absolute", left: `${barLeft}%`, width: `${barWidth}%`, height: "100%", background: item.color, borderRadius: "2px", opacity: 0.85 }} />
            </div>
            <div style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--orange)" }}>${item.cost}M</div>
          </div>
        );
      })}

      {/* Total */}
      <div style={{ padding: "1rem 1.5rem", display: "grid", gridTemplateColumns: "200px 1fr 120px", gap: "1rem", alignItems: "center", background: "var(--bg-navbar)", borderTop: "2px solid var(--border-accent)" }}>
        <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Total</div>
        <div />
        <div style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--orange)" }}>$450M</div>
      </div>

    </div>
  );
}