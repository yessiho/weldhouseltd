// app/project/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUDGET_BREAKDOWN } from "@/lib/constants";

export default function ProjectPage() {
  const total = BUDGET_BREAKDOWN.reduce((s, i) => s + i.cost, 0);

  return (
    <main style={{ paddingTop: "76px" }}>

      {/* ── BANNER ── */}
      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">The Development</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Project Overview</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A US$450 Million, 40-month project to design and construct Nigeria&apos;s first modern large-scale high tonnage Oil &amp; Gas Fabrication Yard on 49 Hectares of acquired land in Akwa Ibom State.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.5rem" }}>
            <Link href="/project/scope" className="btn-primary">View Full Scope <ArrowRight size={16} /></Link>
            <Link href="/project/location" className="btn-secondary">See Location <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── KEY NUMBERS ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
            {[
              { value: "$450M",   label: "Total Cost",       sub: "Full project budget" },
              { value: "40",      label: "Months",           sub: "Design to completion" },
              { value: "49 Ha",   label: "Land Area",        sub: "Acquired & surveyed" },
              { value: "700m",    label: "Site Dimension",   sub: "700m × 700m plot" },
              { value: "8 NM",    label: "Ocean Access",     sub: "From Atlantic Ocean" },
              { value: "2013",    label: "Land Survey",      sub: "Plan RS/AK/1/2013/45" },
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

      {/* ── PROJECT OBJECTIVE ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>

            <div>
              <span className="section-eyebrow">Objective</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "1.5rem" }}>What We Are Building</h2>
              <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                The overall project objective is to design and construct the first modern large-scale high tonnage Oil &amp; Gas Fabrication Yard in Nigeria. This Yard will be patronized by Oil &amp; Gas companies in Nigeria to enable them to comply with the Nigerian Content Law.
              </p>
              <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                Many Nigerian oilfield developments have been put on hold pending availability of a fabrication yard like ours. In particular, ExxonMobil is yet to develop its US$10 Billion Owowo offshore oilfield, and Shell Nigeria has cancelled its Bonga South-West FPSO tender three times — both for the same reason.
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                With 1,500+ deep-water oilfields available in Nigeria and other African countries, averaging US$5 billion per contract, the WeldHouse Fabrication Yard is positioned to capture decades of sustained work.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { phase: "Phase 1", title: "Engineering", duration: "14 months", detail: "Full design of the fabrication yard to international oil industry standards, approved by Third-Party Approvers and endorsed by IOCs." },
                { phase: "Phase 2", title: "Early Site Works", duration: "8 months", detail: "Site preparation, ground works, marine infrastructure and initial civil works to prepare the 49-hectare site for main construction." },
                { phase: "Phase 3", title: "Yard Construction", duration: "26 months", detail: "Full construction of all fabrication facilities, workshops, quayside, cranes, equipment installation and commissioning." },
              ].map((p) => (
                <div key={p.phase} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderLeft: "4px solid var(--orange)", padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span className="badge badge-green">{p.phase}</span>
                    <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>{p.duration}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>{p.title}</div>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{p.detail}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── BUDGET TABLE ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Budget Breakdown</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Use of US$450 Million</h2>
          </div>

          <div style={{ border: "1px solid var(--border-green)", overflow: "hidden" }}>
            <table className="wh-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Scope</th>
                  <th>Schedule</th>
                  <th>Duration</th>
                  <th style={{ textAlign: "right" }}>Cost (US$ M)</th>
                  <th style={{ textAlign: "right" }}>% of Total</th>
                </tr>
              </thead>
              <tbody>
                {BUDGET_BREAKDOWN.map((item, i) => (
                  <tr key={i}>
                    <td style={{ color: "var(--text-muted)", fontFamily: "var(--font-condensed)" }}>{String(i + 1).padStart(2, "0")}</td>
                    <td style={{ color: "var(--text-primary)", fontWeight: 500 }}>{item.scope}</td>
                    <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem" }}>{item.schedule}</td>
                    <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem" }}>{item.duration}</td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--orange)" }}>{item.cost.toFixed(2)}</td>
                    <td style={{ textAlign: "right", color: "var(--text-muted)", fontSize: "0.82rem" }}>{((item.cost / total) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan={4} style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Total Project Cost</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>{total.toFixed(2)}</td>
                  <td style={{ textAlign: "right" }}>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SUB-PAGE LINKS ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Explore Further</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Project Deep Dives</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { href: "/project/scope",    title: "Scope & Schedule",   desc: "Full project scope, timeline and phase breakdown across all 40 months." },
              { href: "/project/design",   title: "Design & QA Plan",   desc: "Yard design approach, Third-Party Approver process and IOC endorsement." },
              { href: "/project/location", title: "Site Location",       desc: "Detailed site location, survey plan and GPS coordinates on Cross River." },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "2rem", display: "block", transition: "border-color 0.2s ease", borderRadius: "3px" }}>
                <div style={{ width: "32px", height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange))", marginBottom: "1.25rem" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65, margin: "0 0 1.25rem" }}>{item.desc}</p>
                <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--orange)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  Explore <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}