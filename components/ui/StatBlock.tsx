// components/ui/StatBlock.tsx

interface StatBlockProps {
  value: string;
  label: string;
  suffix?: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
}

export default function StatBlock({ value, label, suffix, size = "md", align = "left" }: StatBlockProps) {
  const fontSize = size === "sm" ? "1.8rem" : size === "lg" ? "4rem" : "2.5rem";

  return (
    <div style={{ textAlign: align }}>
      <div className="stat-value" style={{ fontSize }}>{value}</div>
      <div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-primary)", marginTop: "0.25rem" }}>
        {label}
      </div>
      {suffix && <div className="stat-label" style={{ fontSize: "0.68rem", marginTop: "0.1rem" }}>{suffix}</div>}
    </div>
  );
}