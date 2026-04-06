// app/team/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team } from "@/data/team";

export default function TeamPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Leadership</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Project Management Team</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A team of seasoned Oil &amp; Gas professionals with combined experience of over 200 years across Shell, ExxonMobil, GE Oil &amp; Gas, Baker Hughes and leading EPCM contractors in Nigeria and internationally.
          </p>
        </div>
      </section>

      {/* ── TEAM STATS ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
            {[
              { value: "200+", label: "Combined Years", sub: "Industry experience" },
              { value: "7",    label: "Team Members",   sub: "Senior leadership" },
              { value: "Shell", label: "Key Alumni",    sub: "Royal Dutch Shell" },
              { value: "5",    label: "Nationalities",  sub: "Nigerian, Canadian, British, American" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.5rem", background: "var(--bg-card)" }}>
                <div className="stat-value" style={{ fontSize: "2rem" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.2rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
            {team.map((member, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: "3px", overflow: "hidden", position: "relative" }}>

                {/* Deceased banner */}
                {member.deceased && (
                  <div style={{ background: "rgba(245,130,10,0.1)", borderBottom: "1px solid rgba(245,130,10,0.3)", padding: "0.4rem 1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange)" }}>In Memoriam</span>
                  </div>
                )}

                {/* Header */}
                <div style={{ padding: "1.75rem 1.75rem 1.25rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  {/* Avatar */}
                  <div style={{ width: "64px", height: "64px", borderRadius: "4px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", border: `2px solid ${member.deceased ? "var(--orange)" : "var(--green)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.4rem", fontFamily: "var(--font-display)", color: "#fff", letterSpacing: "0.05em" }}>
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--text-primary)", letterSpacing: "0.03em", lineHeight: 1.2, marginBottom: "0.3rem" }}>{member.name}</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.3rem" }}>{member.title}</div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span className="badge badge-green">{member.experience}</span>
                      <span className="badge badge-steel">{member.nationality}</span>
                    </div>
                  </div>
                </div>

                <div style={{ height: "1px", background: "var(--border-green)", margin: "0 1.75rem" }} />

                {/* Highlights */}
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

                {/* Education */}
                <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Education</div>
                  {member.education.map((e, j) => (
                    <div key={j} style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "0.3rem" }}>• {e}</div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCE DIRECTOR NOTE ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", background: "var(--bg-card)", border: "1px solid var(--border-accent)", borderTop: "3px solid var(--orange)", padding: "2rem", borderRadius: "3px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--orange)", marginBottom: "0.75rem", letterSpacing: "0.03em" }}>Finance Director — Position Reserved</div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
              The Fund Provider has the right of first refusal to nominate the Finance Director of WeldHouse Limited. The nominated individual must hold all qualifications required by Nigerian Laws to occupy the position of a Finance Director in a Nigerian-registered company (ICAN certified or equivalent).
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Work With This Team</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            This is a team that has delivered billions of dollars of oil &amp; gas projects. Now they are building Nigeria&apos;s most important fabrication infrastructure.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">Investment Opportunity <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-secondary">Contact the Team <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}