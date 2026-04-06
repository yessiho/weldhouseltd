export default function OpportunityBanner() {
  const items = [
    "1,500+ Deep-Water Oilfields Available",
    "US$5 Billion Average Contract Value",
    "Nigerian Content Law Mandates In-Country Fabrication",
    "95 Offshore Oil Blocks Yet To Be Developed",
  ];

  return (
    <section style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green))", padding: "1.25rem 0", borderTop: "2px solid var(--orange)", borderBottom: "2px solid var(--orange)" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "2rem", textAlign: "center" }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {i > 0 && <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--orange)", flexShrink: 0 }} />}
              <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}