// components/home/KeyStats.tsx

export default function KeyStats() {
  const stats = [
    { value: "49 Ha",   label: "Land Acquired",        description: "49 Hectares of land already acquired, surveyed and titled in Akwa Ibom State.", icon: "📍" },
    { value: "40 Mths", label: "Build Timeline",        description: "Full design and construction of the fabrication yard within 40 months of funding.", icon: "🏗️" },
    { value: "20+",     label: "Contracts On Standby",  description: "Offshore fabrication contracts averaging US$5B each are waiting for this yard.", icon: "📋" },
    { value: "$4–6B",   label: "Avg Contract Value",    description: "Each FPSO or offshore platform fabrication contract averages US$4 to 6 Billion.", icon: "📈" },
    { value: "95",      label: "Oil Blocks Undeveloped",description: "95 offshore oil blocks in Nigeria are yet to be developed — all requiring fabrication.", icon: "🛢️" },
    { value: "1st",     label: "In Nigeria",            description: "WeldHouse will be the first and only modern high-tonnage fabrication yard in Nigeria.", icon: "🏭" },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--orange), var(--green), transparent)" }} />

      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-eyebrow">Project Overview</span>
          <span className="accent-line-center" />
          <h2 style={{ marginTop: "0.5rem" }}>Project at a Glance</h2>
          <p style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            The WeldHouse Fabrication Yard is a major development that will establish Nigeria&apos;s first modern large-scale Oil &amp; Gas Fabrication Yard — enabling full in-country compliance with the Nigerian Content Law.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "var(--border-green)", border: "1px solid var(--border-green)" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="card" style={{ padding: "2.5rem 2rem", border: "none", borderRadius: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ fontSize: "2rem" }}>{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-primary)" }}>{stat.label}</div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}