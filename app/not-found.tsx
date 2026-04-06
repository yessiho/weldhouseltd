// app/not-found.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{ paddingTop: "76px", minHeight: "100vh", display: "flex", alignItems: "center", background: "var(--bg-primary)" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "4rem 1.5rem" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(6rem, 20vw, 14rem)", color: "rgba(245,130,10,0.08)", lineHeight: 1, marginBottom: "0" }}>404</div>
        <div style={{ marginTop: "-2rem", marginBottom: "1.5rem" }}>
          <span className="section-eyebrow">Page Not Found</span>
          <span className="accent-line-center" />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "0.5rem" }}>This Page Does Not Exist</h1>
        </div>
        <p style={{ maxWidth: "440px", margin: "0 auto 2.5rem", fontSize: "0.95rem", color: "var(--text-muted)" }}>
          The page you are looking for may have been moved or does not exist. Navigate back to explore the WeldHouse project.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <Link href="/" className="btn-primary">Back to Home <ArrowRight size={16} /></Link>
          <Link href="/investors" className="btn-secondary">Investor Info <ArrowRight size={16} /></Link>
        </div>
      </div>
    </main>
  );
}