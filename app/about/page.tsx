// app/about/page.tsx

import Link from "next/link";
import { ArrowRight, CheckCircle, Building2, Calendar, MapPin, Award } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About WeldHouse Limited" };

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      {/* ── HERO BANNER ── */}
      <section style={{ position: "relative", height: "480px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #080F06 0%, #112010 40%, #0D2B0A 100%)" }}>
          <SafeImage src="/images/hero/weldhouse1.png" alt="WeldHouse Fabrication Yard" style={{ objectFit: "cover", opacity: 0.95 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,15,6,0.95) 40%, rgba(8,15,6,0.4) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg-primary), transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">Who We Are</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem", maxWidth: "700px" }}>About WeldHouse Limited</h1>
          <p style={{ maxWidth: "560px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Developing Nigeria&apos;s first modern large-scale high tonnage Oil &amp; Gas Fabrication Yard — enabling full in-country compliance with the Nigerian Content Law.
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

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <Building2 size={20} color="var(--orange)" />, label: "Company Name",       value: "WeldHouse Limited",       sub: "Registered in Nigeria" },
                { icon: <Calendar size={20} color="var(--orange)" />,  label: "Founded",            value: "2008",                    sub: "Uyo, Akwa Ibom State" },
                { icon: <MapPin size={20} color="var(--orange)" />,    label: "Registered Address", value: "27 Port Harcourt Street", sub: "Uyo, Akwa Ibom State, Nigeria" },
                { icon: <Award size={20} color="var(--orange)" />,     label: "Registration",       value: "RC 760751",               sub: "Corporate Affairs Commission" },
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

      {/* ── IMAGE GALLERY ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Our Facilities Vision</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>The Fabrication Yard</h2>
            <p style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
              World-class fabrication infrastructure designed to meet international oil industry standards and enable full in-country fabrication of all offshore oil &amp; gas facilities.
            </p>
          </div>

          {/* Large main image */}
          <div style={{ position: "relative", width: "100%", height: "420px", background: "linear-gradient(135deg, #0A2810, #1E4A15, #0F3A0C)", borderRadius: "4px", overflow: "hidden", marginBottom: "1.5rem", border: "1px solid var(--border-green)" }}>
            <SafeImage src="/images/weldhouse1.png" alt="WeldHouse Fabrication Yard" style={{ objectFit: "cover", opacity: 0.8 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,6,0.7) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", pointerEvents: "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 3vw, 2.5rem)", color: "rgba(245,130,10,0.12)", letterSpacing: "0.1em", textAlign: "center" }}>WELDHOUSE FABRICATION YARD</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Add photo → /public/images/about/yard-main.jpg</div>
            </div>
            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
              <span className="badge badge-green">Fabrication Yard · Cross River, Akwa Ibom State</span>
            </div>
          </div>

          {/* Three smaller images */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { src: "/images/about/yard-aerial.jpg",     alt: "Aerial view",          label: "Site Location · Akwa Ibom State",   placeholder: "yard-aerial.jpg" },
              { src: "/images/about/yard-quayside.jpg",   alt: "Quayside access",      label: "Deep-Water River Access",           placeholder: "yard-quayside.jpg" },
              { src: "/images/about/yard-facilities.jpg", alt: "Fabrication yard",     label: "World-Class Fabrication Facilities", placeholder: "yard-facilities.jpg" },
            ].map((img, i) => (
              <div key={i} style={{ position: "relative", height: "240px", background: "linear-gradient(135deg, #0A2810, #1E4A15)", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-green)" }}>
                <SafeImage src={img.src} alt={img.alt} style={{ objectFit: "cover", opacity: 0.75 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,6,0.75) 0%, transparent 55%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", padding: "0 1rem" }}>
                    Add photo → /public/images/about/{img.placeholder}
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", pointerEvents: "none" }}>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>{img.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="section" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-eyebrow">Purpose &amp; Direction</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Mission &amp; Vision</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Our Mission",   color: "var(--orange)",      borderColor: "var(--orange)", content: "To design, construct and operate Nigeria's first modern large-scale high tonnage Oil & Gas Fabrication Yard — enabling International Oil Companies to fully comply with the Nigerian Content Law while executing world-class offshore fabrication projects in-country." },
              { title: "Our Vision",    color: "var(--green-light)", borderColor: "var(--green)",  content: "To become the premier Oil & Gas fabrication facility in West Africa — serving Nigerian and African offshore oilfields with the highest international standards of quality, safety and execution, while creating thousands of skilled jobs and contributing to Nigeria's economic development." },
              { title: "Our Objective", color: "var(--orange)",      borderColor: "var(--orange)", content: "To establish a fabrication yard that enables the complete in-country fabrication of FPSOs, offshore platforms, steel jackets, subsea structures, refinery modules and LNG plant modules — capturing billions of dollars in contracts that currently leave Nigeria." },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: `3px solid ${item.borderColor}`, padding: "2rem", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: item.color, letterSpacing: "0.05em", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US UNIQUE ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-eyebrow">Key Facts</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>What Makes Us Unique</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "First in Nigeria",      desc: "The WeldHouse Fabrication Yard will be the first and only yard in Nigeria with full capacity to fabricate complete oil & gas surface modules and facilities." },
              { title: "Deep-Water Access",     desc: "Located on the East Bank of Cross River with naturally deep water all the way to the Atlantic Ocean — no expensive dredging required unlike other Nigerian waterways." },
              { title: "Land Already Acquired", desc: "49 Hectares of land at Esuk Enwang, Mbo, Akwa Ibom State has been acquired, surveyed and title secured from the Akwa Ibom State Government." },
              { title: "Dual Revenue Streams",  desc: "The yard will simultaneously handle new FPSO fabrication works and repairs or upgrades of existing offshore vessels — maximising utilisation and revenue." },
              { title: "IOC Endorsed Design",   desc: "All design packages for the yard will be endorsed by International Oil Companies in Nigeria and independently verified to international oil industry standards." },
              { title: "Nigerian Compliance",   desc: "Positioned to enable all Nigerian Oil Block License holders to fully comply with the Nigerian Content Development Act for the first time." },
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
      <section className="section" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-green)" }}>
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
                All Nigerian Oil Block License holders are legally obligated to comply with this Act. WeldHouse will be the facility that makes full compliance possible for the first time.
              </p>
              <a href="https://www.ncdmb.gov.ng/images/GUIDELINES/NCACT.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">Read the NCDMB Act <ArrowRight size={16} /></a>
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

      {/* ── FACILITIES IMAGE ROW ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">In-Country Fabrication</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Types of Facilities We Will Fabricate</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { src: "/images/facilities/fpso.jpg",              alt: "FPSO Vessel",       title: "FPSO Vessels",           desc: "Full fabrication of Floating Production, Storage & Offloading topsides and modules" },
              { src: "/images/facilities/offshore-platform.jpg", alt: "Offshore Platform", title: "Offshore Platforms",     desc: "Complete fabrication of fixed and floating offshore platform structures" },
              { src: "/images/facilities/steel-jacket.jpg",      alt: "Steel Jacket",      title: "Steel Jackets & Subsea", desc: "Structural steel jacket fabrication and subsea infrastructure components" },
              { src: "/images/facilities/refinery-modules.jpg",  alt: "Refinery Modules",  title: "Refinery & LNG Modules", desc: "Modular refinery components and LNG plant prefabricated modules" },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "200px", background: "linear-gradient(135deg, #0A2810, #1E4A15)" }}>
                  <SafeImage src={item.src} alt={item.alt} style={{ objectFit: "cover", opacity: 0.7 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,6,0.8) 0%, transparent 60%)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                    <span className="badge badge-green">0{i + 1}</span>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ width: "24px", height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange))", marginBottom: "0.75rem" }} />
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>{item.title}</div>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Learn More?</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            Explore the project scope, team profiles and investment opportunity.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/project" className="btn-primary">View the Project <ArrowRight size={16} /></Link>
            <Link href="/team" className="btn-secondary">Meet the Team <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-outline-green">Contact Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}