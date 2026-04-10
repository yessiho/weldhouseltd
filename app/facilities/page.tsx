// app/facilities/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "@/data/facilities";

export default function FacilitiesPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-eyebrow">What We Will Build</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}>Yard Capabilities &amp; Facilities</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            The WeldHouse Fabrication Yard will have the capacity to fabricate all types of Oil &amp; Gas surface modules, offshore facilities and marine structures — making it the most versatile yard in West Africa.
          </p>
        </div>
      </section>

      {/* ── CAPACITY OVERVIEW ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
            {[
              { value: "6+", label: "Facility Types", sub: "Full fabrication capability" },
              { value: "2", label: "Simultaneous Jobs", sub: "New build + repairs" },
              // { value: "$4–6B", label: "Per Contract", sub: "Average FPSO value" },
              { value: "20+", label: "On Standby", sub: "Contracts waiting" },
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

      {/* ── FACILITIES GRID ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-eyebrow">Full Capability List</span>
            <span className="accent-line-center" />
            <h2 style={{ marginTop: "0.5rem" }}>Types of Facilities to be Fabricated</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
            {facilities.map((facility, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: "3px", overflow: "hidden" }}>
                {/* Image placeholder */}
                <div style={{ height: "200px", background: `linear-gradient(135deg, #0A2810 0%, #1E4A15 50%, #0F3A0C 100%)`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,40,16,0.6), rgba(30,74,21,0.4))" }} />
                  <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: "rgba(245,130,10,0.12)", letterSpacing: "0.1em", lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to top, var(--bg-card), transparent)" }} />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                    <span className="badge badge-green">Capability {String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem" }}>
                  <div style={{ width: "28px", height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange))", marginBottom: "1rem" }} />
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.75rem", lineHeight: 1.2 }}>{facility.title}</h3>
                  <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIGERIAN CONTENT CONTEXT ── */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-eyebrow">Historical Context</span>
              <span className="accent-line-center" />
              <h2 style={{ marginTop: "0.5rem" }}>Nigerian Content in Action</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
              {[
                { year: "2002", title: "Bonga FPSO", desc: "Samsung built the Bonga FPSO Hull in South Korea with no Topside, towed it to AMEC's Yard in Newcastle, England for Topsides fabrication, then towed the completed FPSO to Nigeria. Zero Nigerian content in fabrication." },
                { year: "2017", title: "Egina FPSO", desc: "Egina FPSO left the Samsung Yard in South Korea fully built and came to Lagos, Nigeria only for final finishing before towing to its final location in Nigeria's Atlantic Ocean. Still minimal Nigerian content." },
              ].map((item) => (
                <div key={item.year} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "1.75rem", borderRadius: "3px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "rgba(245,130,10,0.15)", lineHeight: 1, marginBottom: "0.25rem" }}>{item.year}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--orange)", letterSpacing: "0.03em", marginBottom: "0.75rem" }}>{item.title}</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green))", padding: "2.5rem", borderRadius: "3px", textAlign: "center", border: "1px solid var(--green-light)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--orange), var(--orange-light), var(--orange))" }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "#fff", marginBottom: "1rem", letterSpacing: "0.04em" }}>The WeldHouse Solution</h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
                The WeldHouse Fabrication Yard is specifically designed to build and install ALL Oil &amp; Gas Topsides modules on a Hull in Nigeria — exactly as was done in Newcastle, England for Bonga. This will enable International Oil Companies to fully comply with the Nigerian Content Law for the very first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Partner With Us?</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "0.95rem" }}>
            Whether you are an IOC seeking a fabrication partner or an investor looking for exceptional returns, WeldHouse is your opportunity.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">Investment Opportunity <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-secondary">Contact Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}