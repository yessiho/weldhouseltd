// app/project/scope/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUDGET_BREAKDOWN } from "@/lib/constants";
import { timeline } from "@/data/timeline";

export default function ScopePage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/project" style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Project</Link>
            <span style={{ color: "var(--orange)" }}>›</span>
            <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scope</span>
          </div>
          <span className="section-eyebrow">Project Scope &amp; Schedule</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>Scope &amp; Schedule</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            The full 40-month project schedule spanning engineering, site works, construction, community engagement, project management and insurance.
          </p>
        </div>
      </section>

      {/* ── GANTT-STYLE TIMELINE ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">40-Month Programme</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Project Timeline</h2>
          </div>

          <div style={{ border: "1px solid var(--border-green)", overflow: "hidden", marginBottom: "3rem" }}>
            {/* Header */}
            <div style={{ background: "var(--bg-navbar)", padding: "0.75rem 1.5rem", display: "grid", gridTemplateColumns: "200px 1fr 120px", gap: "1rem", borderBottom: "1px solid var(--border-accent)" }}>
              <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Phase</span>
              <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Timeline (Months 1–40)</span>
              <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", textAlign: "right" }}>Cost (US$M)</span>
            </div>

            {timeline.map((item, i) => {
              const barLeft = ((item.start - 1) / 40) * 100;
              const barWidth = ((item.end - item.start + 1) / 40) * 100;
              return (
                <div key={i} style={{ padding: "1rem 1.5rem", display: "grid", gridTemplateColumns: "200px 1fr 120px", gap: "1rem", alignItems: "center", borderBottom: i < timeline.length - 1 ? "1px solid var(--border-green)" : "none", background: i % 2 === 0 ? "var(--bg-card)" : "transparent" }}>
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

          {/* Phase detail cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { no: "01", phase: "Engineering", mths: "Mth 1–14", cost: "$17M", color: "var(--orange)", details: ["Full yard design to international oil industry standards", "Third-Party Approver review at each milestone", "IOC endorsement of all design packages", "South Korean design company on standby"] },
              { no: "02", phase: "Early Site Works", mths: "Mth 12–21", cost: "$117M", color: "var(--gold)", details: ["Site preparation and clearing", "Marine infrastructure and quayside initial works", "Ground improvement and foundation works", "Utilities and access road construction"] },
              { no: "03", phase: "Yard Construction", mths: "Mth 14–40", cost: "$276M", color: "var(--green-light)", details: ["Main fabrication workshops and bays", "Heavy lift crane installation", "Quayside completion and marine facilities", "All equipment installation and commissioning"] },
              { no: "04", phase: "Support Activities", mths: "Mth 1–40", cost: "$40M", color: "var(--steel-light)", details: ["Community projects — roads, schools, water", "Project management and governance", "Consultants fees and finance charges", "Project insurance policies (Mth 6–40)"] },
            ].map((item) => (
              <div key={item.no} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: `3px solid ${item.color}`, padding: "1.75rem", borderRadius: "3px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: item.color, lineHeight: 1 }}>{item.no}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>{item.phase}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--orange)" }}>{item.cost}</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>{item.mths}</div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {item.details.map((d, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                      <span style={{ color: item.color, flexShrink: 0 }}>▸</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Explore More</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/project/design" className="btn-primary">Design &amp; QA Plan <ArrowRight size={16} /></Link>
            <Link href="/project/location" className="btn-secondary">Site Location <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}