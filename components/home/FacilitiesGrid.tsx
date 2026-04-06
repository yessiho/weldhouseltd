import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "@/data/facilities";

export default function FacilitiesGrid() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-eyebrow">Yard Capabilities</span>
          <span className="accent-line-center" />
          <h2 style={{ marginTop: "0.5rem" }}>Facilities We Will Fabricate</h2>
          <p style={{ maxWidth: "500px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            The WeldHouse Yard will have full capacity to handle the complete fabrication of all oil &amp; gas surface modules and offshore facilities.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)", marginBottom: "3rem" }}>
          {facilities.map((facility, i) => (
            <div key={facility.title} className="card" style={{ padding: "2rem", border: "none", borderRadius: 0, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "1rem", right: "1.25rem", fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "rgba(245,130,10,0.06)", lineHeight: 1, userSelect: "none" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ width: "32px", height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange))", marginBottom: "1.25rem" }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", letterSpacing: "0.03em", marginBottom: "0.75rem", lineHeight: 1.2, paddingRight: "2rem" }}>
                {facility.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>{facility.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/facilities" className="btn-secondary">View All Capabilities <ArrowRight size={16} /></Link>
        </div>

      </div>
    </section>
  );
}