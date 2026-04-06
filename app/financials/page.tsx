// app/financials/page.tsx

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { REVENUE_PROJECTIONS, BUDGET_BREAKDOWN } from "@/lib/constants";

export default function FinancialsPage() {
  const maxRevenue = Math.max(...REVENUE_PROJECTIONS.map((r) => r.revenue));

  return (
    <main style={{ paddingTop: "76px" }}>

      {/* ── BANNER ── */}
      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Financial Performance</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Financial Projections</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            An independent Business Plan and Financial Model developed by Deloitte confirms the WeldHouse Fabrication Yard as highly profitable and commercially feasible with exceptional returns.
          </p>
        </div>
      </section>

      {/* ── HEADLINE FINANCIALS ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "var(--border-accent)", border: "1px solid var(--border-accent)" }}>
            {[
              { value: "$1.4B",  label: "Net Present Value",       sub: "NPV — Deloitte Model", highlight: true },
              { value: "54.8%",  label: "Internal Rate of Return", sub: "IRR — Exceptional Return", highlight: true },
              { value: "5 Yrs",  label: "Payback Period",          sub: "From Year 5 Operations", highlight: false },
              { value: "$450M",  label: "Total Investment",         sub: "Full Project Cost", highlight: false },
              { value: "$3.3B",  label: "Peak Year Revenue",        sub: "Year 7 Projection", highlight: true },
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

      {/* ── REVENUE CHART ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">10-Year Revenue Forecast</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Revenue Projections (Year 1–10)</h2>
            <p style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
              Years 1–4 are construction. Revenue commences in Year 5 when the first FPSO fabrication contract is executed.
            </p>
          </div>

          {/* Bar chart */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "2.5rem", borderRadius: "3px", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem", height: "300px", position: "relative" }}>

              {/* Y-axis labels */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", paddingBottom: "2.5rem" }}>
                {["$3.5B", "$2.5B", "$1.5B", "$0.5B", "$0"].reverse().map((l) => (
                  <span key={l} style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.08em", textAlign: "right", width: "40px" }}>{l}</span>
                ))}
              </div>

              {/* Bars */}
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end", flex: 1, height: "100%", position: "relative" }}>

                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((pct) => (
                  <div key={pct} style={{ position: "absolute", bottom: `calc(${pct}% + 2.5rem)`, left: 0, right: 0, height: "1px", background: pct === 0 ? "var(--border-green)" : "rgba(74,124,47,0.1)", zIndex: 0 }} />
                ))}

                {REVENUE_PROJECTIONS.map((item, i) => {
                  const heightPct = maxRevenue > 0 ? (item.revenue / maxRevenue) * 100 : 5;
                  const isConstruction = item.revenue === 0;
                  return (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", height: "100%", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
                      {/* Value label */}
                      {!isConstruction && (
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", color: "var(--orange)", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                          ${(item.revenue / 1000).toFixed(1)}B
                        </div>
                      )}
                      {/* Bar */}
                      <div style={{ width: "100%", height: isConstruction ? "8px" : `${heightPct}%`, background: isConstruction ? "var(--border-green)" : "linear-gradient(to top, var(--green-dark), var(--orange))", borderRadius: "2px 2px 0 0", transition: "height 0.3s ease", minHeight: "8px", position: "relative", overflow: "hidden" }}>
                        {!isConstruction && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />}
                      </div>
                      {/* X label */}
                      <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: isConstruction ? "var(--text-muted)" : "var(--text-secondary)", letterSpacing: "0.08em", textAlign: "center", marginTop: "0.5rem" }}>
                        {item.year}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "16px", height: "8px", background: "linear-gradient(90deg, var(--green-dark), var(--orange))", borderRadius: "2px" }} />
                <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>Revenue (US$ Millions)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "16px", height: "8px", background: "var(--border-green)", borderRadius: "2px" }} />
                <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>Construction Phase (No Revenue)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVENUE TABLE ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Year-by-Year Breakdown</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Revenue Schedule</h2>
          </div>

          <div style={{ border: "1px solid var(--border-green)", overflow: "hidden", marginBottom: "3rem" }}>
            <table className="wh-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Contract Description</th>
                  <th>Phase</th>
                  <th style={{ textAlign: "right" }}>Revenue (US$M)</th>
                </tr>
              </thead>
              <tbody>
                {REVENUE_PROJECTIONS.map((item, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--orange)" }}>{item.year}</td>
                    <td style={{ color: "var(--text-primary)" }}>{item.label}</td>
                    <td>
                      <span className={item.revenue === 0 ? "badge badge-steel" : "badge badge-green"}>
                        {item.revenue === 0 ? "Construction" : "Operations"}
                      </span>
                    </td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.2rem", color: item.revenue === 0 ? "var(--text-muted)" : "var(--orange)" }}>
                      {item.revenue === 0 ? "—" : `$${item.revenue.toLocaleString()}M`}
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan={3}>Total 6-Year Revenue (Yr 5–10)</td>
                  <td style={{ textAlign: "right" }}>
                    ${REVENUE_PROJECTIONS.reduce((s, r) => s + r.revenue, 0).toLocaleString()}M
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              { title: "Contract Duration", desc: "Each facility fabrication contract lasts approximately 36 months, providing sustained multi-year revenue per engagement." },
              { title: "Simultaneous Capacity", desc: "The yard has the capacity to handle two fabrication works simultaneously — new build FPSO fabrication plus repairs/upgrades of existing vessels." },
              { title: "Contract Value Range", desc: "With the Nigerian Content Law, oilfield facilities will be fabricated at an average cost of US$4 to 6 Billion per contract." },
              { title: "Mobilisation Revenue", desc: "The very first invoice on commencement of the first fabrication contract will be for yard mobilisation — enough to repay the Design and Construction costs." },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderLeft: "3px solid var(--orange)", padding: "1.25rem" }}>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.5rem" }}>{item.title}</div>
                <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELOITTE ENDORSEMENT ── */}
      <section className="section" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <span className="section-eyebrow">Independent Verification</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>Deloitte Financial Model</h2>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "3rem", borderRadius: "3px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ width: "60px", height: "60px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--orange)" }}>
                  <TrendingUp size={24} color="var(--orange)" />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>Deloitte &amp; Touche</div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Independent Financial Advisor</div>
                </div>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                An independent Business Plan and Financial Model of the venture developed by Deloitte has confirmed the project as being very profitable and highly feasible. The model accounts for construction costs, contract revenues, operating expenses and financing charges over the full project lifetime.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
                {[
                  { value: "$1.40B", label: "NPV" },
                  { value: "54.8%", label: "IRR" },
                  { value: "5 Years", label: "Payback" },
                ].map((s) => (
                  <div key={s.label} style={{ padding: "1.25rem", background: "var(--bg-secondary)", textAlign: "center" }}>
                    <div className="stat-value" style={{ fontSize: "2rem" }}>{s.value}</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Invest?</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            With a Deloitte-verified NPV of US$1.4B and IRR of 54.8%, this is one of the most compelling investment opportunities in West Africa.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">View Investment Terms <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-secondary">Speak to the Team <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}