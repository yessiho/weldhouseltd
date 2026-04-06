// components/swot/SwotMatrix.tsx

import { swotData } from "@/data/swot";

const config = {
  strength:    { label: "Strengths",     color: "var(--green-light)", border: "var(--green)",  bg: "rgba(74,124,47,0.06)",  icon: "💪" },
  weakness:    { label: "Weaknesses",    color: "var(--orange)",      border: "var(--orange)", bg: "rgba(245,130,10,0.06)", icon: "⚠️" },
  opportunity: { label: "Opportunities", color: "var(--green-light)", border: "var(--green)",  bg: "rgba(74,124,47,0.06)",  icon: "🚀" },
  threat:      { label: "Threats",       color: "var(--orange)",      border: "var(--orange)", bg: "rgba(245,130,10,0.06)", icon: "🛡️" },
};

export default function SwotMatrix() {
  return (
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
  );
}