// app/financials/page.tsx

import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financials",
  description: "Financial information is available to qualified investors under a Hold Harmless Agreement.",
};

export default function FinancialsPage() {
  return (
    <main style={{ paddingTop: "76px", minHeight: "100vh", display: "flex", alignItems: "center", background: "var(--bg-primary)" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "4rem 1.5rem" }}>

        <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, var(--green-dark), var(--green))", border: "2px solid var(--orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
          <Lock size={36} color="var(--orange)" />
        </div>

        <span className="section-eyebrow">Restricted Access</span>
        <span className="accent-line-center" />

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
          Financial Information
        </h1>

        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-accent)", borderTop: "3px solid var(--orange)", padding: "2.5rem", borderRadius: "3px", marginBottom: "2.5rem", textAlign: "left" }}>
            <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1rem" }}>Confidentiality Notice</div>
            <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The financial projections, feasibility report and related documentation for the WeldHouse Fabrication Yard project are strictly confidential and are only made available to qualified investors and fund providers.
            </p>
            <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              A <strong style={{ color: "var(--text-primary)" }}>Hold Harmless Agreement</strong> must be executed by all third-party readers before the financial documentation package can be contractually delivered.
            </p>
            <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
              To request access to the financial documentation, please contact our investor relations team directly. We will guide you through the process.
            </p>
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", padding: "2rem", borderRadius: "3px", marginBottom: "2.5rem", textAlign: "left" }}>
            <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>To Request Financial Documentation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Send a request to our investor relations email",
                "We will issue a Hold Harmless Agreement for your review and execution",
                "Upon receipt of the executed agreement, the financial documentation package will be delivered",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "24px", height: "24px", background: "var(--orange-glow)", border: "1px solid rgba(245,130,10,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "0.75rem", color: "var(--orange)" }}>{i + 1}</div>
                  <span style={{ fontSize: "0.87rem", color: "var(--text-secondary)", lineHeight: 1.6, paddingTop: "2px" }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href={`mailto:${COMPANY.email}?subject=Financial Documentation Request — WeldHouse Limited`} className="btn-primary"><Mail size={16} /> Request Financial Documents</a>
            <Link href="/investors" className="btn-secondary">Investor Overview <ArrowRight size={16} /></Link>
          </div>
        </div>

      </div>
    </main>
  );
}