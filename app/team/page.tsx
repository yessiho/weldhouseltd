// app/team/page.tsx

import Link from "next/link";
import { ArrowRight, Mail, Users, Globe, Award } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Project Management Team" };

export default function TeamPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      {/* ── BANNER ── */}
      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div style={{ position: "absolute", top: "20%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(74,124,47,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Leadership</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Project Management Team</h1>
          <p style={{ maxWidth: "650px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A team of seasoned Oil &amp; Gas professionals with combined experience of over 200 years across leading Oil &amp; Gas Operators, Service Providers &amp; EPCM contractors in Nigeria and internationally.
          </p>
        </div>
      </section>

      {/* ── TEAM STATS ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
            {[
              { value: "200+", label: "Combined Years",   sub: "Industry experience" },
              { value: "7",    label: "Team Members",     sub: "Senior leadership roles" },
              { value: "IOCs", label: "Key Background",   sub: "Operators & EPCM contractors" },
              { value: "4",    label: "Countries",        sub: "Nigeria, Canada, UK, USA" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.75rem 1.5rem", background: "var(--bg-card)", textAlign: "center" }}>
                <div className="stat-value" style={{ fontSize: "2.2rem" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.3rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM OVERVIEW ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>

            <div>
              <span className="section-eyebrow">Who We Are</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "1.5rem" }}>Experienced. Proven. Committed.</h2>
              <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                The WeldHouse project is led by a multi-disciplinary team of senior Oil &amp; Gas professionals whose combined experience spans every aspect of offshore and onshore oil &amp; gas project development, execution and delivery.
              </p>
              <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                Our team has worked at the highest levels of major International Oil Companies, global EPCM contractors and leading oilfield service organisations — both in Nigeria and across international markets.
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                Full team profiles, including names, detailed CVs and professional references, are available to qualified investors and partners under a Non-Disclosure Agreement.
              </p>
            </div>

            {/* Roles summary */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { role: "Managing Director",            exp: "38 years",  bg: "Oil & Gas Operations & Delivery" },
                { role: "Executive Director",           exp: "35+ years", bg: "FPSO & Deepwater Project Development" },
                { role: "Business Development Director",exp: "36 years",  bg: "EPCM & International Project Management" },
                { role: "Corporate Services Director",  exp: "50 years",  bg: "Engineering & Corporate Development" },
                { role: "Executive Director",           exp: "15+ years", bg: "Energy & Industrial Projects" },
                { role: "Construction Manager",         exp: "22+ years", bg: "Oil & Gas Construction" },
                { role: "Engineering Manager",          exp: "27+ years", bg: "Mechanical & Process Engineering" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center", background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1rem 1.25rem", borderRadius: "3px" }}>
                  <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "#fff" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--orange)" }}>{item.role}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{item.bg}</div>
                  </div>
                  <span className="badge badge-green" style={{ flexShrink: 0 }}>{item.exp}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPERTISE AREAS ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow">Team Expertise</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Areas of Specialisation</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: <Award size={22} color="var(--orange)" />,
                title: "FPSO Development",
                desc: "Direct experience in FPSO Topsides and Hull Engineering, Frontend Engineering Design, and leading flagship FPSO projects through all development phases.",
              },
              {
                icon: <Globe size={22} color="var(--orange)" />,
                title: "Nigerian Oil & Gas",
                desc: "Deep in-country knowledge of the Nigerian Oil & Gas industry — including IOC relationships, regulatory compliance, Nigerian Content and contractor ecosystems.",
              },
              {
                icon: <Users size={22} color="var(--orange)" />,
                title: "Project Delivery",
                desc: "Proven track record delivering multi-hundred-million to multi-billion dollar oil & gas projects including pipelines, offshore platforms, FPSOs and surface facilities.",
              },
              {
                icon: <Award size={22} color="var(--orange)" />,
                title: "Business Development",
                desc: "Experience tendering and winning major contracts from International Oil Companies in Nigeria, with direct access to industry decision makers.",
              },
              {
                icon: <Globe size={22} color="var(--orange)" />,
                title: "Construction Management",
                desc: "Hands-on experience managing construction of oil & gas surface facilities, pipelines, tanks and offshore structures using Nigerian and expatriate workforces.",
              },
              {
                icon: <Users size={22} color="var(--orange)" />,
                title: "Corporate & Finance",
                desc: "International corporate development experience with major engineering firms, oil companies, World Bank projects and government ministries across Africa.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.75rem", borderRadius: "3px" }}>
                <div style={{ marginBottom: "1rem" }}>{item.icon}</div>
                <div style={{ width: "28px", height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange))", marginBottom: "1rem" }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.75rem" }}>{item.title}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFIDENTIALITY NOTE ── */}
      <section className="section-sm" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>

              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-accent)", borderTop: "3px solid var(--orange)", padding: "2rem", borderRadius: "3px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--orange)", marginBottom: "0.75rem", letterSpacing: "0.03em" }}>Team Profiles — On Request</div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: "0 0 1.25rem" }}>
                  Full individual profiles including names, detailed CVs, professional certifications and references are available to qualified investors and partners under a Non-Disclosure Agreement.
                </p>
                <Link href="/contact" className="btn-primary" style={{ fontSize: "0.8rem", padding: "0.65rem 1.25rem" }}>Request Profiles <ArrowRight size={14} /></Link>
              </div>

              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--green)", padding: "2rem", borderRadius: "3px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--green-light)", marginBottom: "0.75rem", letterSpacing: "0.03em" }}>Finance Director — Reserved</div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                  The Fund Provider has the right of first refusal to nominate the Finance Director of WeldHouse Limited. The nominee must hold all qualifications required by Nigerian law for a Finance Director of a Nigerian-registered company.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Work With This Team</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            This is a team that has delivered billions of dollars of oil &amp; gas projects. Now they are building Nigeria&apos;s most important fabrication infrastructure.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">Investment Opportunity <ArrowRight size={16} /></Link>
            <a href={`mailto:${COMPANY.email}`} className="btn-secondary"><Mail size={16} /> Contact Us</a>
          </div>
        </div>
      </section>

    </main>
  );
}