// app/team/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Project Management Team" };

const roles = [
  {
    title: "Managing Director",
    experience: "38 years",
    background: "Oil & Gas Operations",
    highlights: [
      "Decades of experience managing and delivering oil & gas projects",
      "Extensive experience working on high profile surface facilities projects including FPSO development",
      "Managed an Oilfield Service company as COO, delivering multi-hundred-million dollar projects",
      "Deep knowledge of Nigerian and international oil & gas project execution",
    ],
    education: "B.Eng Mechanical Engineering · MBA",
  },
  {
    title: "Executive Director",
    experience: "35+ years",
    background: "FPSO & Deepwater Projects",
    highlights: [
      "Extensive experience with a leading international operator spanning onshore and deepwater projects",
      "Led Topsides and Hull Engineering teams for major FPSO project development",
      "Played a key role in the successful development of a flagship FPSO project",
      "Led a multi-billion dollar deepwater development project through multiple phases",
    ],
    education: "B.Eng Civil Engineering · MBA",
  },
  {
    title: "Business Development Director",
    experience: "36 years",
    background: "EPCM & Project Management",
    highlights: [
      "Professional Engineer with experience on both owner and EPCM contractor sides",
      "Successfully managed and delivered oil & gas projects across Canada and internationally",
      "Delivered gas processing plants, pipelines, fixed offshore platforms and FPSO systems",
      "Specialisation in international business development",
    ],
    education: "B.Eng Metallurgical Engineering · MBA (International Business)",
  },
  {
    title: "Corporate Services Director",
    experience: "50 years",
    background: "Engineering & Corporate Development",
    highlights: [
      "Extensive experience in Project Management, Engineering and Administration across Oil & Gas and Civil Engineering",
      "Multi-contract coordination with major international engineering companies",
      "Clients include major International Oil and Gas Companies and the World Bank",
      "Last 28 years executing oil & gas projects in Africa, primarily Nigeria",
    ],
    education: "B.Sc Engineering · Diploma in Management",
  },
  {
    title: "Executive Director",
    experience: "15+ years",
    background: "Energy & Industrial Projects",
    highlights: [
      "Delivering commercial, industrial, energy and infrastructure projects across Canada and Nigeria",
      "Senior Project Manager leading end-to-end delivery of energy and industrial projects",
      "Experience in oil sands facility construction, field engineering and crew supervision",
      "Drives data-driven reporting and construction management platforms",
    ],
    education: "BSc Electrical Engineering · MBA · P.Eng (APEGA)",
  },
  {
    title: "Construction Manager",
    experience: "22+ years",
    background: "Oil & Gas Construction",
    highlights: [
      "Delivered new Oil & Gas Pipelines and surface facilities for major operators",
      "Crude Oil Tanks Rehabilitation in major Nigerian terminals",
      "Led Tender and Proposal teams for IOC surface facilities contracts",
      "Expertise in project disciplines and all support services",
    ],
    education: "B.Eng Mechanical Engineering · HND Mechanical Engineering",
  },
  {
    title: "Engineering Manager",
    experience: "27+ years",
    background: "Mechanical & Process Engineering",
    highlights: [
      "Delivered major gas pipeline, refining plant and tank construction projects",
      "FEED of major Power Plant and detailed engineering of large-scale floating roof tanks",
      "Experience as Engineering Manager and Project Manager across multiple contractors",
      "Broad portfolio including pipelines, tanks, power plants and lubricating plants",
    ],
    education: "B.Sc Mechanical Engineering · Masters of Project Management",
  },
];

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
              { value: "200+", label: "Combined Years",  sub: "Industry experience" },
              { value: "7",    label: "Team Members",    sub: "Senior leadership" },
              { value: "IOCs", label: "Key Background",  sub: "Operators & EPCM contractors" },
              { value: "4",    label: "Countries",       sub: "Nigeria, Canada, UK, USA" },
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
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Leadership Roles</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Our Team</h2>
            <p style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
              Individual profiles are available to qualified investors and partners under a Non-Disclosure Agreement. Please contact us to request full team credentials.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {roles.map((member, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: "3px", overflow: "hidden" }}>

                {/* Header */}
                <div style={{ padding: "1.75rem 1.75rem 1.25rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "4px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", border: "2px solid var(--green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "#fff", letterSpacing: "0.05em" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--orange)", letterSpacing: "0.03em", lineHeight: 1.2, marginBottom: "0.3rem" }}>{member.title}</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{member.background}</div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span className="badge badge-green">{member.experience}</span>
                    </div>
                  </div>
                </div>

                <div style={{ height: "1px", background: "var(--border-green)", margin: "0 1.75rem" }} />

                {/* Highlights */}
                <div style={{ padding: "1.25rem 1.75rem" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Key Experience</div>
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
                <div style={{ padding: "1rem 1.75rem 1.5rem" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Education</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{member.education}</div>
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
              The Fund Provider has the right of first refusal to nominate the Finance Director of WeldHouse Limited. The nominated individual must hold all qualifications required by Nigerian Laws to occupy the position of a Finance Director in a Nigerian-registered company.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Request Full Team Credentials</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            Full team profiles including names, detailed CVs and references are available to qualified investors under a Non-Disclosure Agreement.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Request Team Profiles <ArrowRight size={16} /></Link>
            <Link href="/investors" className="btn-secondary">Investment Overview <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}