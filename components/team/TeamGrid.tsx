// components/team/TeamGrid.tsx

import { team } from "@/data/team";
import TeamCard from "./TeamCard";

export default function TeamGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
      {team.map((member, i) => (
        <TeamCard key={i} member={member} />
      ))}
    </div>
  );
}