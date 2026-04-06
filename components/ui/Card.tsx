// components/ui/Card.tsx

import { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  dark?: boolean;
  style?: CSSProperties;
  accentColor?: string;
  hover?: boolean;
}

export default function Card({ children, dark, style, accentColor, hover = true }: CardProps) {
  return (
    <div
      className={hover ? "card" : "card-dark"}
      style={{
        background: dark ? "var(--bg-secondary)" : "var(--bg-card)",
        borderTop: accentColor ? `3px solid ${accentColor}` : undefined,
        borderRadius: "3px",
        padding: "2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}