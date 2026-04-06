// app/project/design/page.tsx

import Link from "next/link";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";

export default function DesignPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/project" style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Project</Link>
            <span style={{ color: "var(--orange)" }}>›</span>
            <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Design</span>
          </div>
          <span className="section-eyebrow">Engineering &amp; Quality Assurance</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>Design &amp; QA Plan</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            All design work packages will be executed to international oil industry standards, independently verified by globally recognized Third-Party Approvers and endorsed by International Oil Companies operating in Nigeria.
          </p>
        </div>
      </section>

      {/* ── DESIGN PLAN ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>

            <div>
              <span className="section-eyebrow">Yard Design Plan</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "1.5rem" }}>How the Yard Will Be Designed</h2>
              {[
                { title: "Design Company on Standby", desc: "A South Korean design company is on standby to design the Fabrication Yard in accordance with International Oil Industry Standards." },
                { title: "Milestone-Based Payment", desc: "As design works progress, payment for design milestones completed will be upon certification by an International Third-Party Approver (TPA)." },
                { title: "Third-Party Approval", desc: "All Design Packages will be approved by an international Third-Party Approver to confirm that designs have met global oil industry standards." },
                { title: "IOC Endorsement", desc: "All design packages for the Yard will be endorsed by International Oil Companies (IOCs) in Nigeria as meeting their basic specifications." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "28px", height: "28px", background: "var(--orange-glow)", border: "1px solid rgba(245,130,10,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.3rem" }}>{item.title}</div>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TPA Cards */}
            <div>
              <span className="section-eyebrow">Third-Party Approvers</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "1.5rem" }}>International Verification Bodies</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
                The TPA will be selected from the following internationally recognised bodies — all of which have been operating in the Nigerian Oil &amp; Gas Industry with well-established standards.
              </p>

              {[
                { name: "Lloyd's Register", location: "London, United Kingdom", desc: "One of the world's leading providers of classification, compliance and consultancy services to the marine and offshore industries.", abbr: "LR" },
                { name: "Bureau Veritas", location: "Paris, France", desc: "A world leader in testing, inspection and certification services with extensive experience in the Nigerian oil and gas sector.", abbr: "BV" },
                { name: "DNV", location: "Oslo, Norway", desc: "An international accredited registrar and classification society headquartered in Norway with deep expertise in offshore fabrication quality assurance.", abbr: "DNV" },
              ].map((tpa) => (
                <div key={tpa.name} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderLeft: "4px solid var(--green)", padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", color: "#fff", letterSpacing: "0.05em" }}>{tpa.abbr}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>{tpa.name}</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", color: "var(--orange)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{tpa.location}</div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{tpa.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CONSTRUCTION PLAN ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Construction Execution</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Yard Construction Plan</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: <Shield size={20} color="var(--orange)" />, title: "Design-Led Construction", desc: "The Design Company will be responsible for ensuring construction is executed in strict accordance with the Detailed Design deliverables and Detailed Construction Plan." },
              { icon: <CheckCircle size={20} color="var(--green-light)" />, title: "Nigerian Workforce", desc: "Experienced Engineers and skilled operators exist in Nigeria to construct the Fabrication Yard. Over 1,000 competent personnel have already been identified in-country." },
              { icon: <Shield size={20} color="var(--orange)" />, title: "Materials Sourced", desc: "All procurement sources for Yard Construction materials have been identified. Sources to procure all yard construction equipment have also been confirmed." },
              { icon: <CheckCircle size={20} color="var(--green-light)" />, title: "40-Month Delivery", desc: "Current plan is to design and construct the Fabrication Yard within 40 months from funding commencement to full operational readiness." },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.75rem", borderRadius: "3px" }}>
                <div style={{ marginBottom: "1rem" }}>{item.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.75rem" }}>{item.title}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATIONS PLAN ── */}
      <section className="section" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <span className="section-eyebrow">Post-Construction</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}>Yard Operations Plan</h2>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "2.5rem", textAlign: "left", borderRadius: "3px" }}>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                Partnership with an international FPSO fabrication company is being progressed to operate the Fabrication Yard upon completion and when an FPSO fabrication contract is won to be executed in the Yard.
              </p>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                The Partner has fabricated and installed functional new FPSOs in Nigerian offshore oilfields, thus making the partner a recognised and acceptable offshore fabricator in the Nigerian Oil &amp; Gas industry.
              </p>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                This partnership approach ensures that from Day 1 of operations, the WeldHouse Fabrication Yard will be run by an organisation with a proven track record in delivering major FPSO projects in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Continue Exploring</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/project/scope" className="btn-primary">Project Scope <ArrowRight size={16} /></Link>
            <Link href="/project/location" className="btn-secondary">Site Location <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}