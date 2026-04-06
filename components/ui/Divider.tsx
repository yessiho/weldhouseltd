// components/ui/Divider.tsx

interface DividerProps {
  accent?: boolean;
  style?: React.CSSProperties;
}

export default function Divider({ accent, style }: DividerProps) {
  return (
    <hr
      className={accent ? "divider-accent" : "divider"}
      style={style}
    />
  );
}