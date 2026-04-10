// app/project/location/page.tsx

import Link from "next/link";
import { ArrowRight, MapPin, Navigation, Anchor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Fabrication Yard Location" };

export default function LocationPage() {
  return (
    <main style={{ paddingTop: "76px" }}>

      <section style={{ background: "var(--bg-navbar)", borderBottom: "1px solid var(--border-green)", padding: "5rem 0 4rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/project" style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Project</Link>
            <span style={{ color: "var(--orange)" }}>›</span>
            <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Location</span>
          </div>
          <span className="section-eyebrow">Site &amp; Location</span>
          <span className="accent-line" />
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>Fabrication Yard Location</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            49.084 Hectares of land on the East Bank of Cross River, 8 nautical miles upstream from the Atlantic Ocean in Akwa Ibom State — a strategically superior location with natural deep-water access.
          </p>
        </div>
      </section>

      {/* ── LOCATION STATS ── */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-green)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
            {[
              { icon: <MapPin size={16} color="var(--orange)" />,     value: "49.084 Ha", label: "Land Area",       sub: "122 Acres" },
              { icon: <Navigation size={16} color="var(--orange)" />, value: "4°40'48\"N", label: "Latitude",       sub: "8°19'08\"E Longitude" },
              { icon: <Anchor size={16} color="var(--orange)" />,     value: "8 NM",       label: "Ocean Distance", sub: "From Atlantic Ocean" },
              { icon: <MapPin size={16} color="var(--orange)" />,     value: "MBO LGA",    label: "Local Govt Area",sub: "Akwa Ibom State" },
              { icon: <Navigation size={16} color="var(--orange)" />, value: "700m²",      label: "Site Dimension", sub: "700m × 700m plot" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.5rem 1.25rem", background: "var(--bg-card)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {s.icon}
                <div className="stat-value" style={{ fontSize: "1.8rem" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION DETAIL ── */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>

            <div>
              <span className="section-eyebrow">Strategic Location</span>
              <span className="accent-line" />
              <h2 style={{ marginBottom: "1.5rem" }}>Why This Location?</h2>
              {[
                { title: "Natural Deep Water Access",  desc: "The fabrication yard is located on a river with naturally deep water all the way to the Atlantic Ocean — unlike other waterways in Nigeria that require expensive and massive dredging to deepen." },
                { title: "Close to Atlantic Ocean",    desc: "Just 8 nautical miles upstream from the Atlantic Ocean, the location provides efficient towing routes for completed FPSOs and other large offshore structures directly to their deployment sites." },
                { title: "Naval Security",             desc: "A Nigerian Naval Base is located close to the Fabrication Yard, providing security coverage to major oil & gas facilities located along the riverside." },
                { title: "Industrial Zoning",          desc: "The land is officially designated for Industrial purposes — ensuring full regulatory compliance for heavy industrial fabrication operations." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: i < 3 ? "1px solid var(--border-green)" : "none" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--orange)", flexShrink: 0, marginTop: "6px" }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.4rem" }}>{item.title}</div>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Land title — no surveyor name */}
              {/* <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderTop: "3px solid var(--orange)", padding: "2rem", borderRadius: "3px" }}>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1rem" }}>Land Title Details</div>
                {[
                  { label: "Survey Plan No.", value: "RS/AK/1/2013/45" },
                  { label: "Location",        value: "Esuk Enwang, Mbo, Mbo LGA" },
                  { label: "State",           value: "Akwa Ibom State, Nigeria" },
                  { label: "Area",            value: "49.084 Hectares (Industrial)" },
                  { label: "Datum",           value: "UTM Zone 32" },
                  { label: "C of O Ref",      value: "GHU/AKS/S/219/VOL.I/751" },
                  { label: "Title Date",      value: "20th April 2022 (Approval-in-Principle)" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid var(--border-green)", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{row.label}</span>
                    <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-primary)" }}>{row.value}</span>
                  </div>
                ))}
              </div> */}

              {/* GPS */}
              <div style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green))", padding: "1.75rem", borderRadius: "3px", border: "1px solid var(--green-light)" }}>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem" }}>GPS Coordinates</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#fff", marginBottom: "0.25rem" }}>4° 40&apos; 48.01&quot;N</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--orange)" }}>8° 19&apos; 08.73&quot;E</div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: "0.75rem", letterSpacing: "0.1em" }}>Cross River East Bank · Akwa Ibom State</div>
              </div>

              {/* Akwa Ibom State note */}
              <div style={{ background: "var(--bg-card)", border: "1px solid rgba(245,130,10,0.4)", padding: "1.5rem", borderRadius: "3px" }}>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.75rem" }}>Akwa Ibom State Government</div>
                <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>
                  Certificate of Statutory Right of Occupancy Approval-in-Principle has been granted by His Excellency the Executive Governor of Akwa Ibom State — confirming the land is allocated to WeldHouse Limited for industrial purposes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--bg-navbar))", borderTop: "2px solid var(--orange)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Invest?</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">Investor Information <ArrowRight size={16} /></Link>
            <Link href="/project" className="btn-secondary">Back to Project <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}