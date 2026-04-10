// app/investors/download/page.tsx

import Link from "next/link";
import { ArrowRight, Download, FileText, Mail, Phone, Shield, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function DownloadPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      {/* ── BANNER ── */}
      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div style={{ position: "absolute", top: "30%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(245,130,10,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/investors" style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Investors</Link>
            <span style={{ color: "var(--orange)" }}>›</span>
            <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Download</span>
          </div>
          <span className="section-eyebrow">Investor Documentation</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Project Documents</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Download the WeldHouse Executive Summary and access the full investor documentation package. All documents are provided in confidence to serious investors and fund providers.
          </p>
        </div>
      </section>

      {/* ── DOWNLOAD CARDS ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow">Available Documents</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Investor Documentation Package</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>

            {/* ── Executive Summary Card ── */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "52px", height: "52px", background: "linear-gradient(135deg, var(--orange-dark), var(--orange))", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <FileText size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>Executive Summary</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>PDF · 14 Pages</div>
                  </div>
                </div>

                <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  The full Executive Summary covering the project overview, financial highlights, team profiles, location details, SWOT analysis and risk mitigation strategies.
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                  {[
                    "Project scope and US$450M budget breakdown",
                    "Deloitte NPV, IRR and payback analysis",
                    "10-year revenue projections",
                    "Team profiles and qualifications",
                    "Land title and survey documentation",
                    "SWOT and risk mitigation tables",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                      <CheckCircle size={14} color="var(--green-light)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="/documents/executive-summary.pdf" download className="btn-primary" style={{ width: "100%", justifyContent: "center" }}><Download size={16} /> Download Executive Summary</a>
              </div>

              <div style={{ padding: "1rem 2rem", background: "rgba(245,130,10,0.05)", borderTop: "1px solid var(--border-green)" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Shield size={13} color="var(--green-light)" />
                  <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>Confidential — For serious investors only</span>
                </div>
              </div>
            </div>

            {/* ── Full Package Card ── */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--green)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "52px", height: "52px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <FileText size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>Full Investor Package</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Request via Email</div>
                  </div>
                </div>

                <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  The complete investor documentation package including the Deloitte Business Plan, Financial Model, land title documents, survey plans and government correspondence.
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                  {[
                    "Land title and survey documentation",
                    "Akwa Ibom State Certificate of Occupancy",
                    "Community MOU documentation",
                    "Team profiles and CVs (under NDA)",
                    "Financial documentation (under Hold Harmless Agreement)",
                    "Partnership term sheet (upon NDA execution)",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                      <CheckCircle size={14} color="var(--green-light)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href={`mailto:${COMPANY.email}?subject=Full Investor Package Request`} className="btn-outline-green" style={{ width: "100%", justifyContent: "center" }}><Mail size={16} /> Request Full Package</a>
              </div>

              <div style={{ padding: "1rem 2rem", background: "rgba(74,124,47,0.05)", borderTop: "1px solid var(--border-green)" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Shield size={13} color="var(--green-light)" />
                  <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>NDA may be required for sensitive documents</span>
                </div>
              </div>
            </div>

            {/* ── Schedule a Call Card ── */}
            <div style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", border: "1px solid var(--green)", borderTop: "3px solid var(--orange)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "52px", height: "52px", background: "rgba(245,130,10,0.2)", border: "2px solid var(--orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={24} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>Schedule a Call</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Direct with Nsi Udott</div>
                  </div>
                </div>

                <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Speak directly with Nsikak (Nsi) Udott, Executive Director, to discuss the investment opportunity, ask questions about the project and explore how you can participate.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  <a href={`tel:${COMPANY.phone2}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}><Phone size={15} color="var(--orange)" />{COMPANY.phone2} (Nigeria)</a>
                  <a href={`tel:${COMPANY.phone1}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}><Phone size={15} color="var(--orange)" />{COMPANY.phone1} (Canada)</a>
                  <a href={`mailto:${COMPANY.email}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}><Mail size={15} color="var(--orange)" />{COMPANY.email}</a>
                </div>

                <a href={`mailto:${COMPANY.email}?subject=Meeting Request — WeldHouse Investment`} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}><Mail size={16} /> Request a Meeting</a>
              </div>

              <div style={{ padding: "1rem 2rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(74,124,47,0.3)" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Shield size={13} color="var(--green-light)" />
                  <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>Nigeria &amp; Canada time zones available</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Due Diligence Checklist ── */}
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span className="section-eyebrow">Due Diligence</span>
              <span className="accent-line-center" />
              <h2 style={{ marginTop: "0.5rem" }}>What to Review</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[
                { step: "01", title: "Executive Summary", desc: "Start with the executive summary for a full project overview.", href: "/documents/executive-summary.pdf", action: "Download PDF" },
                { step: "02", title: "Financial Model",   desc: "Review the Deloitte NPV, IRR and 10-year revenue projections.", href: "/financials", action: "View Financials" },
                { step: "03", title: "Project Scope",     desc: "Understand the 40-month build programme and budget breakdown.", href: "/project/scope", action: "View Scope" },
                { step: "04", title: "Risk Analysis",     desc: "Review business and security risks with mitigation strategies.", href: "/risk", action: "View Risks" },
                { step: "05", title: "Team Credentials",  desc: "Assess the leadership team experience and track record.", href: "/team", action: "Meet the Team" },
                { step: "06", title: "Contact Us",        desc: "Reach out to discuss terms, ask questions or request an NDA.", href: "/contact", action: "Get in Touch" },
              ].map((item) => (
                <Link key={item.step} href={item.href} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.5rem", borderRadius: "3px", display: "block", textDecoration: "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "rgba(245,130,10,0.15)", lineHeight: 1, marginBottom: "0.5rem" }}>{item.step}</div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.4rem" }}>{item.title}</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: "0 0 0.75rem", lineHeight: 1.6 }}>{item.desc}</p>
                  <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--green-light)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    {item.action} <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFIDENTIALITY NOTE ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", background: "var(--bg-card)", border: "1px solid rgba(245,130,10,0.3)", padding: "2rem", borderRadius: "3px" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <Shield size={20} color="var(--orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.5rem" }}>Confidentiality Notice</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>
                  All documents provided by WeldHouse Limited are strictly confidential and are intended solely for the use of the individual or entity to whom they are addressed. Recipients are not authorised to reproduce, distribute or disclose any information contained herein without the prior written consent of WeldHouse Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Move Forward?</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            Contact our team directly to begin the investment process.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href={`mailto:${COMPANY.email}`} className="btn-primary"><Mail size={16} /> Email Directly</a>
            <Link href="/investors" className="btn-secondary">Back to Investors <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}