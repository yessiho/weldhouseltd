// components/ui/SafeImage.tsx
"use client";

import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export default function SafeImage({ src, alt, style }: SafeImageProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHidden(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }}
    />
  );
}