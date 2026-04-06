import Link from "next/link";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const linkStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-secondary)", fontSize: "0.82rem", transition: "color 0.2s ease" };
const navLinkStyle: React.CSSProperties = { fontFamily: "var(--font-condensed)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)", transition: "color 0.2s ease", display: "flex", alignItems: "center", gap: "0.5rem" };
const headingStyle: React.CSSProperties = { fontFamily: "var(--font-condensed)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.25rem" };
const listStyle: React.CSSProperties = { listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-navbar)", borderTop: "2px solid var(--green)", paddingTop: "4rem", paddingBottom: "2rem", position: "relative" }}>

      {/* Top gradient line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid var(--border-green)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "42px", height: "42px", background: "linear-gradient(135deg, var(--green), var(--green-dark))", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--orange)", borderRadius: "4px", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff" }}>WH</span>
              </div>
              <div style={{ lineHeight: 1, gap: "2px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", letterSpacing: "0.08em" }}>
                  <span style={{ color: "var(--green-light)" }}>Weld</span><span style={{ color: "var(--orange)" }}>House</span>
                </div>
                <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Limited · RC 760751</div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "280px" }}>
              Developing Nigeria&apos;s first modern high tonnage Oil &amp; Gas Fabrication Yard on the East Bank of Cross River, Akwa Ibom State.
            </p>
            <span className="accent-line" style={{ marginTop: "1.5rem" }} />
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <ul style={listStyle}>
              {NAV_LINKS.filter((l) => !l.children).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={navLinkStyle}>
                    <span style={{ color: "var(--orange)", fontSize: "0.6rem" }}>▶</span>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h4 style={headingStyle}>The Project</h4>
            <ul style={listStyle}>
              {NAV_LINKS.find((l) => l.label === "Project")?.children?.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} style={navLinkStyle}>
                    <span style={{ color: "var(--orange)", fontSize: "0.6rem" }}>▶</span>{child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <li><a href={`mailto:${COMPANY.email}`} style={linkStyle}><Mail size={14} color="var(--orange)" />{COMPANY.email}</a></li>
              <li><a href={`tel:${COMPANY.phone2}`} style={linkStyle}><Phone size={14} color="var(--orange)" />{COMPANY.phone2}</a></li>
              <li><a href={`tel:${COMPANY.phone1}`} style={linkStyle}><Phone size={14} color="var(--orange)" />{COMPANY.phone1}</a></li>
              <li><a href={`https://${COMPANY.website}`} target="_blank" rel="noopener noreferrer" style={linkStyle}><Globe size={14} color="var(--orange)" />{COMPANY.website}</a></li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
                <MapPin size={14} color="var(--orange)" style={{ flexShrink: 0, marginTop: "2px" }} />{COMPANY.address}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", paddingTop: "2rem" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>© {year} WeldHouse Limited. All rights reserved. RC 760751</p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>Fabrication Yard · Akwa Ibom State, Nigeria</p>
        </div>

      </div>
    </footer>
  );
}