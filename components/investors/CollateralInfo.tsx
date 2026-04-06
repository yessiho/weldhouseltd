// components/investors/CollateralInfo.tsx

import { Shield, Users, TrendingUp } from "lucide-react";

export default function CollateralInfo() {
  const items = [
    {
      icon: <Shield size={28} color="var(--orange)" />,
      title: "Debt Finance",
      color: "var(--orange)",
      points: [
        "A lien over the completed Fabrication Yard will be provided as collateral",
        "The lien remains until the debt plus interest is fully repaid",
        "Ownership is then transferred back to WeldHouse Limited",
        "Secured against a hard asset — a completed fabrication yard",
      ],
    },
    {
      icon: <Users size={28} color="var(--green-light)" />,
      title: "Equity Investment",
      color: "var(--green-light)",
      points: [
        "Holding of shares in WeldHouse Limited",
        "Fund provider participates in long-term upside",
        "Board representation through Finance Director nomination",
        "Equity proportional to investment contribution",
      ],
    },
    {
      icon: <TrendingUp size={28} color="var(--orange)" />,
      title: "Partial Funding",
      color: "var(--orange)",
      points: [
        "Part funding of the full US$450M is acceptable",
        "Co-investment with multiple fund providers is possible",
        "Staged funding aligned to project milestones",
        "Payments triggered by Third-Party Approver certification",
      ],
    },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
      {items.map((item) => (
        <div key={item.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: `3px solid ${item.color}`, padding: "2rem", borderRadius: "3px" }}>
          <div style={{ marginBottom: "1.25rem" }}>{item.icon}</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: item.color, letterSpacing: "0.04em", marginBottom: "1rem" }}>{item.title}</h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {item.points.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                <span style={{ color: item.color, flexShrink: 0 }}>▸</span>{p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}