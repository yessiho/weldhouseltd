// components/ui/Badge.tsx

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "orange" | "green" | "steel";
}

export default function Badge({ children, variant = "orange" }: BadgeProps) {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
    </span>
  );
}