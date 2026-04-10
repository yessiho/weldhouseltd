// components/home/CTASection.tsx

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section style={{ background: "var(--bg-tertiary)", position: "relative", overflow: "hidden", padding: "7rem 0", borderTop: "1px solid var(--border-green)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(74,124,47,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(245,130,10,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>

          <span className="section-eyebrow">Investment Opportunity</span>
          <span className="accent-line-center" />

          <h2 style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}>
            Be Part of Nigeria&apos;s{" "}
            <span style={{ color: "var(--green-light)" }}>Oil &amp; Gas</span>{" "}
            <span style={{ color: "var(--orange)" }}>Transformation</span>
          </h2>

          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "1rem", lineHeight: 1.8 }}>
            WeldHouse Limited is seeking investment to develop Nigeria&apos;s first modern high tonnage Oil &amp; Gas Fabrication Yard. Partial funding is acceptable. Debt financing secured by a lien over the completed yard. Equity participation through shareholding also available.
          </p>

          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
            Contact us for funding details: <strong style={{ color: "var(--orange)" }}>{COMPANY.email}</strong>{" · "}{COMPANY.phone2}{" · "}{COMPANY.phone1}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "var(--border-accent)", border: "1px solid var(--border-accent)", marginBottom: "3rem" }}>
            {[
              { label: "Debt Finance", value: "Lien over completed Fabrication Yard as collateral" },
              { label: "Equity",       value: "Holding of shares in WeldHouse Limited" },
              { label: "Partial OK",   value: "Co-investment with multiple fund providers is possible" },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--bg-card)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.5rem" }}>{item.label}</div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/investors" className="btn-primary">Investor Information <ArrowRight size={16} /></Link>
            <a href={`mailto:${COMPANY.email}`} className="btn-secondary"><Mail size={16} /> Contact Us Directly</a>
          </div>

        </div>
      </div>
    </section>
  );
}