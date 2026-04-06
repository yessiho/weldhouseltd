// app/investors/page.tsx

import Link from "next/link";
import { ArrowRight, Mail, Phone, Shield, TrendingUp, Users } from "lucide-react";
import { COMPANY, PROJECT, REVENUE_PROJECTIONS } from "@/lib/constants";

export default function InvestorsPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div style={{ position: "absolute", top: "30%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(245,130,10,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Investment Opportunity</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Invest in WeldHouse</h1>
          <p style={{ maxWidth: "620px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A once-in-a-generation opportunity to fund Nigeria&apos;s first modern Oil &amp; Gas Fabrication Yard — with a Deloitte-verified NPV of US$1.4 Billion, IRR of 54.8% and 5-year payback period.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.5rem" }}>
            <a href={`mailto:${COMPANY.email}`} className="btn-primary"><Mail size={16} /> Contact Investor Relations</a>
            <Link href="/financials" className="btn-secondary">View Financial Model <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── KEY TERMS ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "var(--border-accent)", border: "1px solid var(--border-accent)" }}>
            {[
              { value: "$450M",  label: "Total Funding Needed", sub: "Full project development cost", highlight: true },
              { value: "OK",     label: "Partial Funding",       sub: "Part funding is acceptable", highlight: false },
              { value: "$1.4B",  label: "NPV",                   sub: "Net Present Value — Deloitte", highlight: true },
              { value: "54.8%",  label: "IRR",                   sub: "Internal Rate of Return", highlight: true },
              { value: "5 Yrs",  label: "Payback Period",        sub: "From commencement of operations", highlight: false },
            ].map((s) => (
              <div key={s.label} style={{ padding: "2rem 1.5rem", background: s.highlight ? "rgba(245,130,10,0.06)" : "var(--bg-card)", textAlign: "center" }}>
                <div className="stat-value" style={{ fontSize: "2.5rem" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.3rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLATERAL & STRUCTURE ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow">Investment Structure</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>How the Investment Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
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
            ].map((item) => (
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
        </div>
      </section>

      {/* ── WHY INVEST ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow">The Investment Case</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Why Invest in WeldHouse?</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { no: "01", title: "Mandatory Demand", desc: "Nigerian Content Law legally mandates that all oil & gas facilities be fabricated in-country. Demand is guaranteed by law — not market sentiment." },
              { no: "02", title: "Zero Competition", desc: "WeldHouse will be the FIRST and ONLY modern high-tonnage fabrication yard in Nigeria. There is currently no competition for these contracts." },
              { no: "03", title: "Land Already Secured", desc: "49 Hectares of land has been acquired, surveyed and title secured from the Akwa Ibom State Government — eliminating one of the biggest development risks." },
              { no: "04", title: "Deloitte Verified Model", desc: "An independent Deloitte Business Plan confirms NPV of US$1.4B, IRR of 54.8% and 5-year payback — not a promoter estimate." },
              { no: "05", title: "Massive Pipeline", desc: "20+ fabrication contracts averaging US$5 Billion each are on standby. ExxonMobil's $10B Owowo and Shell's $4–6B Bonga SW are immediate opportunities." },
              { no: "06", title: "Experienced Team", desc: "The leadership team has 200+ combined years of experience in Shell, GE Oil & Gas, Baker Hughes and major EPCM contractors across Nigerian oil & gas." },
              { no: "07", title: "Hard Asset Collateral", desc: "Debt investors receive a lien over the completed fabrication yard — a hard, tangible, revenue-generating asset as security for their investment." },
              { no: "08", title: "Pan-African Opportunity", desc: "Beyond Nigeria, all littoral African countries are issuing oil block licenses — expanding the addressable market to the entire West and East African coastline." },
            ].map((item) => (
              <div key={item.no} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.75rem", borderRadius: "3px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "0.75rem", right: "1rem", fontFamily: "var(--font-display)", fontSize: "3rem", color: "rgba(245,130,10,0.06)", lineHeight: 1 }}>{item.no}</div>
                <div style={{ width: "28px", height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange))", marginBottom: "1rem" }} />
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.5rem" }}>{item.title}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVENUE SNAPSHOT ── */}
      <section className="section" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Revenue Snapshot</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Projected Returns</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)", marginBottom: "2rem" }}>
            {REVENUE_PROJECTIONS.map((item, i) => (
              <div key={i} style={{ padding: "1.5rem 1rem", background: item.revenue === 0 ? "var(--bg-card)" : "rgba(245,130,10,0.04)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: item.revenue === 0 ? "var(--text-muted)" : "var(--orange)", lineHeight: 1 }}>
                  {item.revenue === 0 ? "—" : `$${(item.revenue / 1000).toFixed(1)}B`}
                </div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.3rem" }}>{item.year}</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/financials" className="btn-secondary">Full Financial Model <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1.25rem" }}>Start a Conversation</h2>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Contact our investor relations team to receive the full Executive Summary, Deloitte Financial Model and project documentation package.
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "2rem", borderRadius: "3px", marginBottom: "2rem", textAlign: "left" }}>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1rem" }}>Investor Contact</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{COMPANY.contact}</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>Executive Director, WeldHouse Limited</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <a href={`mailto:${COMPANY.email}`} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-secondary)", fontSize: "0.88rem" }}><Mail size={14} color="var(--orange)" />{COMPANY.email}</a>
                <a href={`tel:${COMPANY.phone2}`} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-secondary)", fontSize: "0.88rem" }}><Phone size={14} color="var(--orange)" />{COMPANY.phone2} (Nigeria)</a>
                <a href={`tel:${COMPANY.phone1}`} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-secondary)", fontSize: "0.88rem" }}><Phone size={14} color="var(--orange)" />{COMPANY.phone1} (Canada)</a>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={`mailto:${COMPANY.email}`} className="btn-primary"><Mail size={16} /> Send Email Now</a>
              <Link href="/contact" className="btn-secondary">Contact Form <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}