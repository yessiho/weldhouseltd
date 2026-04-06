// app/about/page.tsx

import Link from "next/link";
import { ArrowRight, CheckCircle, Building2, Calendar, MapPin, Award } from "lucide-react";
import { COMPANY, PROJECT } from "@/lib/constants";
// Add this import + export to each inner page
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WeldHouse Limited",
  description: "Learn about WeldHouse Limited — the company developing Nigeria's first modern high tonnage Oil & Gas Fabrication Yard in Akwa Ibom State.",
};
export default function AboutPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      {/* ── HERO BANNER ── */}
      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Who We Are</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>About WeldHouse</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            WeldHouse Limited is a Nigerian-registered company with a singular mission — to design, build and operate Nigeria&apos;s first modern large-scale high tonnage Oil &amp; Gas Fabrication Yard.
          </p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>

            <div>
              <span className="section-eyebrow">Our Story</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "1.5rem" }}>Built for Nigeria&apos;s Oil &amp; Gas Future</h2>
              <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                Founded in 2008, WeldHouse Limited was established with the vision of addressing one of Nigeria&apos;s most critical infrastructure gaps in the oil and gas sector — the complete absence of a modern, large-scale fabrication yard capable of handling full FPSO and offshore platform fabrication in-country.
              </p>
              <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                The Nigerian Oil and Gas Industry Content Development Act mandates that all oil and gas processing facilities for Nigerian oilfields be fabricated in-country. Yet for decades, this requirement has gone unmet — forcing international oil companies to fabricate abroad and return finished products to Nigeria, at enormous cost and delay.
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                WeldHouse Limited exists to change that. Our proposed fabrication yard on the East Bank of Cross River in Akwa Ibom State will be the first facility in Nigeria with the full capacity to meet this national mandate.
              </p>
            </div>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <Building2 size={20} color="var(--orange)" />, label: "Company Name", value: COMPANY.name, sub: `RC ${COMPANY.registration.split(" ").pop()}` },
                { icon: <Calendar size={20} color="var(--orange)" />, label: "Founded", value: String(COMPANY.founded), sub: "Uyo, Akwa Ibom State" },
                { icon: <MapPin size={20} color="var(--orange)" />, label: "Registered Address", value: "27 Port Harcourt Street", sub: "Uyo, Akwa Ibom State, Nigeria" },
                { icon: <Award size={20} color="var(--orange)" />, label: "Registration", value: "RC 760751", sub: "Registered in Nigeria" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.25rem", borderRadius: "3px" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--green-glow)", border: "1px solid rgba(74,124,47,0.4)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{item.label}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "0.03em" }}>{item.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, var(--green), transparent)" }} />
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-eyebrow">Purpose &amp; Direction</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Mission &amp; Vision</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                title: "Our Mission",
                color: "var(--orange)",
                borderColor: "var(--orange)",
                content: "To design, construct and operate Nigeria's first modern large-scale high tonnage Oil & Gas Fabrication Yard — enabling International Oil Companies to fully comply with the Nigerian Content Law while executing world-class offshore fabrication projects in-country.",
              },
              {
                title: "Our Vision",
                color: "var(--green-light)",
                borderColor: "var(--green)",
                content: "To become the premier Oil & Gas fabrication facility in West Africa — serving Nigerian and African offshore oilfields with the highest international standards of quality, safety and execution, while creating thousands of skilled jobs and contributing to Nigeria's economic development.",
              },
              {
                title: "Our Objective",
                color: "var(--orange)",
                borderColor: "var(--orange)",
                content: "To establish a fabrication yard that enables the complete in-country fabrication of FPSOs, offshore platforms, steel jackets, subsea structures, refinery modules and LNG plant modules — capturing billions of dollars in contracts that currently leave Nigeria.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: `3px solid ${item.borderColor}`, padding: "2rem", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: item.color, letterSpacing: "0.05em", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FACTS ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-eyebrow">Key Facts</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>What Makes Us Unique</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "First in Nigeria", desc: "The WeldHouse Fabrication Yard will be the first and only yard in Nigeria with full capacity to fabricate complete oil & gas surface modules and facilities." },
              { title: "Deep-Water Access", desc: "Located on the East Bank of Cross River with naturally deep water all the way to the Atlantic Ocean — no expensive dredging required unlike other Nigerian waterways." },
              { title: "Land Already Acquired", desc: "49 Hectares (122 Acres) of land at Esuk Enwang, Mbo, Akwa Ibom State has been acquired, surveyed and title secured from the Akwa Ibom State Government." },
              { title: "Deloitte Verified", desc: "An independent Business Plan and Financial Model developed by Deloitte confirms the project NPV at US$1.4 Billion with an IRR of 54.8% and 5-year payback." },
              { title: "Dual Revenue Streams", desc: "The yard will simultaneously handle new FPSO fabrication works and repairs or upgrades of existing offshore vessels — maximising utilisation and revenue." },
              { title: "IOC Endorsed", desc: "All design packages for the yard will be endorsed by International Oil Companies in Nigeria, with Third-Party Approval from Lloyds, Bureau Veritas or DNV Oslo." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <CheckCircle size={18} color="var(--green-light)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.4rem" }}>{item.title}</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIGERIAN CONTENT ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="section-eyebrow">Legal Mandate</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "1.5rem" }}>The Nigerian Content Law</h2>
              <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                The Nigerian Oil and Gas Industry Content Development Act (NCDMB Act) is the cornerstone of WeldHouse&apos;s business case. This law legally requires the fabrication of all oil and gas processing facilities for Nigerian oilfields to be executed in-country.
              </p>
              <p style={{ marginBottom: "2rem", fontSize: "0.95rem" }}>
                All Nigerian Oil Block License holders — including Shell, ExxonMobil, Total, Chevron, Agip and Statoil — are legally obligated to comply. WeldHouse will be the facility that makes compliance possible.
              </p>
              <a href="https://www.ncdmb.gov.ng/images/GUIDELINES/NCACT.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Read the NCDMB Act <ArrowRight size={16} />
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { value: "110", label: "Offshore Oil Blocks", sub: "In Nigerian waters" },
                { value: "95",  label: "Yet To Develop",      sub: "Awaiting fabrication capacity" },
                { value: "15",  label: "In Production",       sub: "Currently producing" },
                { value: "$5B", label: "Avg Contract",        sub: "Per development" },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "1.5rem", textAlign: "center", borderRadius: "3px" }}>
                  <div className="stat-value" style={{ fontSize: "2.5rem" }}>{stat.value}</div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.3rem" }}>{stat.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Learn More?</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            Explore the project scope, financial model, team profiles and investment opportunity.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/project" className="btn-primary">View the Project <ArrowRight size={16} /></Link>
            <Link href="/team" className="btn-secondary">Meet the Team <ArrowRight size={16} /></Link>
            <Link href="/investors" className="btn-outline-green">Invest Now <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}