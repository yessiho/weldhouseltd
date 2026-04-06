// components/project/LocationMap.tsx

import { MapPin, Navigation, Anchor } from "lucide-react";

export default function LocationMap() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

      {/* Map placeholder */}
      <div style={{ height: "320px", background: "linear-gradient(135deg, #0A2810, #1A4A12, #0D3A0A)", border: "1px solid var(--border-green)", borderRadius: "3px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

        {/* Grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,124,47,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Location pin */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(245,130,10,0.2)", border: "2px solid var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", animation: "pulse-orange 2s infinite" }}>
            <MapPin size={22} color="var(--orange)" />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#fff", letterSpacing: "0.05em" }}>WeldHouse Fabrication Yard</div>
            <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.68rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.25rem" }}>Esuk Enwang, Mbo · Akwa Ibom State</div>
          </div>
        </div>

        {/* River line */}
        <div style={{ position: "absolute", right: "20%", top: 0, bottom: 0, width: "3px", background: "linear-gradient(to bottom, rgba(74,124,47,0.3), rgba(74,124,47,0.6), rgba(74,124,47,0.3))", borderRadius: "2px" }} />

        {/* Ocean label */}
        <div style={{ position: "absolute", bottom: "1rem", right: "1rem", fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Atlantic Ocean ↓ 8NM</div>

        {/* Coordinates */}
        <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(0,0,0,0.5)", padding: "0.5rem 0.75rem", borderRadius: "2px", border: "1px solid rgba(245,130,10,0.3)" }}>
          <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", color: "var(--orange)", letterSpacing: "0.1em" }}>4° 40&apos; 48&quot;N · 8° 19&apos; 08&quot;E</div>
        </div>
      </div>

      {/* Location stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
        {[
          { icon: <MapPin size={14} color="var(--orange)" />, value: "49 Ha", label: "Land Area" },
          { icon: <Navigation size={14} color="var(--orange)" />, value: "MBO LGA", label: "Location" },
          { icon: <Anchor size={14} color="var(--orange)" />, value: "8 NM", label: "To Ocean" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "1rem", background: "var(--bg-card)", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.4rem" }}>{s.icon}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--orange)" }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>

    </div>
  );
}