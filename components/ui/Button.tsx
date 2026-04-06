// components/ui/Button.tsx

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline-green";
  children: ReactNode;
  fullWidth?: boolean;
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({ href, onClick, variant = "primary", children, fullWidth, external, type = "button" }: ButtonProps) {
  const className = `btn-${variant}`;
  const style = fullWidth ? { width: "100%", justifyContent: "center" } : {};

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>{children}</a>;
    }
    return <Link href={href} className={className} style={style}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}