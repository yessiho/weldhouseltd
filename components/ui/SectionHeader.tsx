// components/ui/SectionHeader.tsx

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  maxWidth?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", maxWidth = "560px" }: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div style={{ textAlign: isCenter ? "center" : "left", marginBottom: "3.5rem" }}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {isCenter ? <span className="accent-line-center" /> : <span className="accent-line" />}
      <h2 style={{ marginTop: "0.5rem" }}>{title}</h2>
      {subtitle && (
        <p style={{ maxWidth, margin: isCenter ? "1rem auto 0" : "1rem 0 0", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}