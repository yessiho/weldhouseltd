export default function KeyStats() {
  const stats = [
    { value: "$450M",  label: "Total Funding Required",  description: "Full project cost to design and construct the fabrication yard over 40 months.", icon: "💰" },
    { value: "$1.4B",  label: "Net Present Value",        description: "Independent NPV calculated by Deloitte's financial model for the venture.", icon: "📈" },
    { value: "54.8%",  label: "Internal Rate of Return",  description: "Exceptional IRR confirming the project as highly profitable and feasible.", icon: "🎯" },
    { value: "5 Years",label: "Payback Period",           description: "Full return of investment within 5 years from commencement of operations.", icon: "⏱️" },
    { value: "$2.4B+", label: "Year 5 Revenue",           description: "First year of executing FPSO fabrication contracts generates US$2,386M.", icon: "🏭" },
    { value: "20+",    label: "Contracts On Standby",     description: "Offshore fabrication contracts averaging US$5B each waiting for the yard.", icon: "📋" },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--orange), var(--green), transparent)" }} />

      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-eyebrow">Deloitte Verified Financial Model</span>
          <span className="accent-line-center" />
          <h2 style={{ marginTop: "0.5rem" }}>Project at a Glance</h2>
          <p style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            An independent Business Plan and Financial Model developed by Deloitte confirms the project as highly profitable and commercially feasible.
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