// components/layout/MobileMenu.tsx

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, pathname, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      style={{
        background: "var(--bg-navbar)",
        borderTop: "1px solid var(--green)",
        animation: "fadeUp 0.2s ease forwards",
      }}
    >
      {NAV_LINKS.map((link) => (
        <div key={link.label}>
          <Link
            href={link.href}
            onClick={onClose}
            style={{
              display: "block",
              padding: "0.9rem 1.5rem",
              fontFamily: "var(--font-condensed)",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: isActive(link.href) ? "var(--orange)" : "rgba(255,255,255,0.8)",
              borderBottom: "1px solid rgba(74,124,47,0.25)",
              background: isActive(link.href) ? "rgba(245,130,10,0.08)" : "transparent",
            }}
          >
            {link.label}
          </Link>

          {link.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              style={{
                display: "block",
                padding: "0.7rem 2.5rem",
                fontFamily: "var(--font-condensed)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isActive(child.href) ? "var(--orange)" : "rgba(255,255,255,0.5)",
                borderBottom: "1px solid rgba(74,124,47,0.15)",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              — {child.label}
            </Link>
          ))}
        </div>
      ))}

      <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid var(--green)" }}>
        <Link
          href="/investors"
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.85rem",
            background: "linear-gradient(135deg, var(--orange), var(--orange-dark))",
            color: "#fff",
            fontFamily: "var(--font-condensed)",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            borderRadius: "3px",
            boxShadow: "0 4px 16px rgba(245,130,10,0.3)",
          }}
        >
          Invest Now
        </Link>
      </div>
    </div>
  );
}