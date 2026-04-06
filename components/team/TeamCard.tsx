// components/team/TeamCard.tsx

import { TeamMember } from "@/lib/types";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const initials = member.name.split(" ").map((n) => n[0]).slice(0, 2).join("");

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: "3px", overflow: "hidden", position: "relative" }}>

      {member.deceased && (
        <div style={{ background: "rgba(245,130,10,0.1)", borderBottom: "1px solid rgba(245,130,10,0.3)", padding: "0.4rem 1.25rem" }}>
          <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange)" }}>In Memoriam</span>
        </div>
      )}

      <div style={{ padding: "1.75rem 1.75rem 1.25rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
        <div style={{ width: "64px", height: "64px", borderRadius: "4px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", border: `2px solid ${member.deceased ? "var(--orange)" : "var(--green)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#fff", letterSpacing: "0.05em" }}>
          {initials}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--text-primary)", letterSpacing: "0.03em", lineHeight: 1.2, marginBottom: "0.3rem" }}>{member.name}</div>
          <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.4rem" }}>{member.title}</div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <span className="badge badge-green">{member.experience}</span>
            <span className="badge badge-steel">{member.nationality}</span>
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "var(--border-green)", margin: "0 1.75rem" }} />

      <div style={{ padding: "1.25rem 1.75rem" }}>
        <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Key Highlights</div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {member.highlights.map((h, j) => (
            <li key={j} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              <span style={{ color: "var(--green-light)", flexShrink: 0, marginTop: "2px" }}>▸</span>{h}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ height: "1px", background: "var(--border-green)", margin: "0 1.75rem" }} />

      <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
        <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Education</div>
        {member.education.map((e, j) => (
          <div key={j} style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "0.3rem" }}>• {e}</div>
        ))}
      </div>

    </div>
  );
}