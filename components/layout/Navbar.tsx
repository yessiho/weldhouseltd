"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname                = usePathname();
  const dropdownRef             = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setIsOpen(false); setDropdown(null); }, [pathname]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "#0D1F0A" : "#0D1F0A",
      borderBottom: scrolled ? "2px solid var(--orange)" : "2px solid rgba(74,124,47,0.6)",
      boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.6)" : "none",
      transition: "all 0.3s ease",
    }}>

      {/* ── TOP ACCENT BAR ── */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, var(--green), var(--orange), var(--green))" }} />

      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div style={{
              width: "42px", height: "42px",
              background: "linear-gradient(135deg, var(--green), var(--green-dark))",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid var(--orange)",
              borderRadius: "4px",
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", letterSpacing: "0.05em" }}>WH</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: "2px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", letterSpacing: "0.06em", lineHeight: 1 }}>
                <span style={{ color: "var(--green-light)" }}>Weld</span><span style={{ color: "var(--orange)" }}>House</span>
              </span>
              <span style={{
                fontFamily: "var(--font-condensed)", fontSize: "0.58rem", fontWeight: 600,
                letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase",
              }}>
                Limited · Est. 2008
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav ref={dropdownRef} className="hidden lg:flex" style={{ alignItems: "center", gap: "0" }}>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} style={{ position: "relative" }}>
                  <button
                    onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                    style={{
                      display: "flex", alignItems: "center", gap: "0.3rem",
                      padding: "0.5rem 0.85rem",
                      background: "none", border: "none", cursor: "pointer",
                      fontFamily: "var(--font-condensed)", fontSize: "0.78rem",
                      fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                      color: isActive(link.href) ? "var(--orange)" : "rgba(255,255,255,0.75)",
                      transition: "color 0.2s ease",
                      borderBottom: isActive(link.href) ? "2px solid var(--orange)" : "2px solid transparent",
                    }}
                  >
                    {link.label}
                    <ChevronDown size={12} style={{ transition: "transform 0.2s ease", transform: dropdown === link.label ? "rotate(180deg)" : "rotate(0)" }} />
                  </button>

                  {dropdown === link.label && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 2px)", left: "50%",
                      transform: "translateX(-50%)",
                      background: "#0D1F0A",
                      border: "1px solid var(--green)",
                      borderTop: "2px solid var(--orange)",
                      minWidth: "170px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
                      animation: "fadeUp 0.2s ease forwards",
                    }}>
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} style={{
                          display: "block", padding: "0.7rem 1.25rem",
                          fontFamily: "var(--font-condensed)", fontSize: "0.75rem",
                          fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                          color: isActive(child.href) ? "var(--orange)" : "rgba(255,255,255,0.7)",
                          borderBottom: "1px solid rgba(74,124,47,0.3)",
                          transition: "all 0.2s ease",
                        }}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} style={{
                  display: "block", padding: "0.5rem 0.85rem",
                  fontFamily: "var(--font-condensed)", fontSize: "0.78rem",
                  fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: isActive(link.href) ? "var(--orange)" : "rgba(255,255,255,0.75)",
                  transition: "color 0.2s ease",
                  borderBottom: isActive(link.href) ? "2px solid var(--orange)" : "2px solid transparent",
                }}>
                  {link.label}
                </Link>
              )
            )}

            {/* CTA */}
            <Link href="/investors" style={{
              marginLeft: "1rem",
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.6rem 1.4rem",
              background: "linear-gradient(135deg, var(--orange), var(--orange-dark))",
              color: "#fff",
              fontFamily: "var(--font-condensed)", fontSize: "0.78rem",
              fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              border: "none", borderRadius: "3px",
              boxShadow: "0 4px 16px rgba(245,130,10,0.35)",
              transition: "all 0.2s ease",
            }}>
              Invest Now
            </Link>
          </nav>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            style={{
              background: "rgba(74,124,47,0.2)", border: "1px solid var(--green)",
              color: "var(--orange)", padding: "0.5rem 0.6rem",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", borderRadius: "3px",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {isOpen && (
        <div style={{
          background: "#0D1F0A",
          borderTop: "1px solid var(--green)",
          padding: "0",
          animation: "fadeUp 0.2s ease forwards",
        }}>
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link href={link.href} style={{
                display: "block", padding: "0.9rem 1.5rem",
                fontFamily: "var(--font-condensed)", fontSize: "0.9rem",
                fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                color: isActive(link.href) ? "var(--orange)" : "rgba(255,255,255,0.8)",
                borderBottom: "1px solid rgba(74,124,47,0.25)",
                background: isActive(link.href) ? "rgba(245,130,10,0.08)" : "transparent",
              }}>
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link key={child.href} href={child.href} style={{
                  display: "block", padding: "0.7rem 2.5rem",
                  fontFamily: "var(--font-condensed)", fontSize: "0.78rem",
                  fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: isActive(child.href) ? "var(--orange)" : "rgba(255,255,255,0.5)",
                  borderBottom: "1px solid rgba(74,124,47,0.15)",
                  background: "rgba(0,0,0,0.2)",
                }}>
                  — {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid var(--green)" }}>
            <Link href="/investors" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "0.85rem",
              background: "linear-gradient(135deg, var(--orange), var(--orange-dark))",
              color: "#fff", fontFamily: "var(--font-condensed)", fontSize: "0.85rem",
              fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              borderRadius: "3px", boxShadow: "0 4px 16px rgba(245,130,10,0.3)",
            }}>
              Invest Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}