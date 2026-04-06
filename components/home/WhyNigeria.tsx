import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function WhyNigeria() {
  const reasons = [
    "The Nigerian Content Law (NCDMB Act) legally requires fabrication of all oil & gas facilities in-country",
    "ExxonMobil's US$10B Owowo offshore oilfield on hold pending availability of an in-country fabrication yard",
    "Shell Nigeria has tendered its Bonga South-West FPSO project ($4–6B) three times — cancelled each time for lack of a local yard",
    "95 offshore oil blocks yet to be developed by Shell, Total, ExxonMobil, Chevron, Statoil and Agip",
    "All littoral African countries issuing oil block licenses — expanding the addressable market beyond Nigeria",
    "WeldHouse yard located on naturally deep-water river — no expensive dredging required",
  ];

  return (
    <section className="section" style={{ background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", right: "-15%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(245,130,10,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(74,124,47,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>

          <div>
            <span className="section-eyebrow">Market Opportunity</span>
            <span className="accent-line" />
            <h2 style={{ marginBottom: "1.5rem" }}>Why Nigeria Needs This Yard Now</h2>
            <p style={{ marginBottom: "2rem", fontSize: "0.95rem" }}>
              Billions of dollars in offshore oil &amp; gas fabrication contracts are sitting idle in Nigeria — not because of lack of oil, but because there is no modern fabrication yard in-country capable of doing the work.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {reasons.map((reason, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle size={16} color="var(--green-light)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{reason}</span>
                </li>
              ))}
            </ul>

            <Link href="/project" className="btn-primary">Learn About the Project <ArrowRight size={16} /></Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { company: "ExxonMobil", project: "Owowo Offshore Oilfield", value: "US$10 Billion", status: "On Hold", reason: "No in-country fabrication yard with sufficient capacity to execute the project." },
              { company: "Shell Nigeria", project: "Bonga South-West FPSO", value: "US$4–6 Billion", status: "Tender Cancelled ×3", reason: "Tendered three times — last cancelled December 2021. Re-tender planned for 2024." },
            ].map((item) => (
              <div key={item.company} style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", borderLeft: "4px solid var(--orange)", padding: "1.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.05em" }}>{item.company}</div>
                    <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.project}</div>
                  </div>
                  <span className="badge badge-orange">{item.status}</span>
                </div>
                <div className="stat-value" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.value}</div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{item.reason}</p>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green))", padding: "1.75rem", textAlign: "center", border: "1px solid var(--green-light)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--orange), var(--orange-light), var(--orange))" }} />
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem" }}>Combined Immediate Opportunity</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "#fff", lineHeight: 1 }}>$14–16B</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", marginTop: "0.35rem", letterSpacing: "0.1em" }}>In Contracts Awaiting This Yard</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}