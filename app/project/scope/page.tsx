// app/project/scope/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Project Scope & Schedule" };

export default function ScopePage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      {/* ── BANNER ── */}
      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative" }}>
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
            The full project spans 40 months from funding commencement to operational readiness — covering engineering, site works, construction, community engagement and project management.
          </p>
        </div>
      </section>

      {/* ── OVERVIEW STATS — no USD ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
            {[
              { value: "40",    label: "Months",       sub: "Design to completion" },
              { value: "3",     label: "Major Phases", sub: "Engineering, Site, Construction" },
              { value: "49 Ha", label: "Site Area",    sub: "Acquired land" },
              { value: "8 NM",  label: "Ocean Access", sub: "From Atlantic Ocean" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.5rem 1.25rem", background: "var(--bg-card)" }}>
                <div className="stat-value" style={{ fontSize: "2rem" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.2rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE CARDS — no USD amounts ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Project Phases</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>40-Month Development Programme</h2>
            <p style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
              The project is structured across three primary development phases, supported by ongoing project management, community engagement and insurance activities throughout.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              {
                no: "01",
                phase: "Engineering",
                duration: "14 months",
                color: "var(--orange)",
                details: [
                  "Full yard design to international oil industry standards",
                  "Independent third-party review at each milestone",
                  "IOC endorsement of all design packages",
                  "Detailed construction plan development",
                ],
              },
              {
                no: "02",
                phase: "Early Site Works",
                duration: "8 months",
                color: "var(--gold)",
                details: [
                  "Site preparation and clearing",
                  "Marine infrastructure and initial quayside works",
                  "Ground improvement and foundation works",
                  "Utilities and access road construction",
                ],
              },
              {
                no: "03",
                phase: "Yard Construction",
                duration: "26 months",
                color: "var(--green-light)",
                details: [
                  "Main fabrication workshops and bays",
                  "Heavy lift crane installation",
                  "Quayside completion and marine facilities",
                  "All equipment installation and commissioning",
                ],
              },
              {
                no: "04",
                phase: "Support Activities",
                duration: "Throughout (40 months)",
                color: "var(--steel-light)",
                details: [
                  "Community projects — roads, schools, water supply",
                  "Project management and governance",
                  "Consultants fees and finance charges",
                  "Project insurance policies",
                ],
              },
            ].map((item) => (
              <div key={item.no} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: `3px solid ${item.color}`, padding: "1.75rem", borderRadius: "3px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: item.color, lineHeight: 1 }}>{item.no}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>{item.phase}</div>
                  </div>
                  <span className="badge badge-green">{item.duration}</span>
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

      {/* ── SCOPE TABLE — duration only, no costs ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Schedule Overview</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Project Schedule Summary</h2>
            <p style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
              Financial details are available to qualified investors upon request and execution of the appropriate agreements.
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-green)", overflow: "hidden" }}>
            <table className="wh-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Scope</th>
                  <th>Schedule</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { no: "01", scope: "Engineering",                                    schedule: "Mth-1 to Mth-14",  duration: "14 months" },
                  { no: "02", scope: "Early Site Works",                               schedule: "Mth-12 to Mth-21", duration: "8 months" },
                  { no: "03", scope: "Yard Construction",                              schedule: "Mth-14 to Mth-40", duration: "26 months" },
                  { no: "04", scope: "Community Projects",                             schedule: "Mth-1 to Mth-40",  duration: "40 months" },
                  { no: "05", scope: "Project Management",                             schedule: "Mth-1 to Mth-40",  duration: "40 months" },
                  { no: "06", scope: "Consultants, Pre-development & Finance Charges", schedule: "Mth-1 to Mth-40",  duration: "40 months" },
                  { no: "07", scope: "Project Insurance Policies",                     schedule: "Mth-6 to Mth-40",  duration: "35 months" },
                ].map((item) => (
                  <tr key={item.no}>
                    <td style={{ color: "var(--text-muted)", fontFamily: "var(--font-condensed)" }}>{item.no}</td>
                    <td style={{ color: "var(--text-primary)", fontWeight: 500 }}>{item.scope}</td>
                    <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem" }}>{item.schedule}</td>
                    <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem" }}><span className="badge badge-steel">{item.duration}</span></td>
                  </tr>
                ))}
                <tr style={{ background: "var(--bg-navbar)" }}>
                  <td colSpan={2} style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--orange)" }}>Total Project Duration</td>
                  <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem", color: "var(--text-muted)" }}>Mth-1 to Mth-40</td>
                  <td><span className="badge badge-orange">40 months</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Confidentiality note */}
          <div style={{ marginTop: "2rem", background: "var(--bg-card)", border: "1px solid rgba(245,130,10,0.3)", padding: "1.5rem", borderRadius: "3px", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--orange)", flexShrink: 0, marginTop: "6px" }} />
            <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>
              <strong style={{ color: "var(--orange)" }}>Financial Details — Private:</strong> Project cost breakdown and funding requirements are available exclusively to qualified investors upon request and execution of the appropriate confidentiality agreements. Please <Link href="/contact" style={{ color: "var(--green-light)", textDecoration: "underline" }}>contact us</Link> to request investor documentation.
            </p>
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