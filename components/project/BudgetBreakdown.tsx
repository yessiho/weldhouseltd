// components/project/BudgetBreakdown.tsx

// import { BUDGET_BREAKDOWN } from "@/lib/constants";

// export default function BudgetBreakdown() {
//   const total = BUDGET_BREAKDOWN.reduce((s, i) => s + i.cost, 0);

//   return (
//     <div style={{ border: "1px solid var(--border-green)", overflow: "hidden" }}>
//       <table className="wh-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Project Scope</th>
//             <th>Schedule</th>
//             <th>Duration</th>
//             <th style={{ textAlign: "right" }}>Cost (US$M)</th>
//             <th style={{ textAlign: "right" }}>% of Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {BUDGET_BREAKDOWN.map((item, i) => (
//             <tr key={i}>
//               <td style={{ color: "var(--text-muted)", fontFamily: "var(--font-condensed)" }}>
//                 {String(i + 1).padStart(2, "0")}
//               </td>
//               <td style={{ color: "var(--text-primary)", fontWeight: 500 }}>{item.scope}</td>
//               <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem" }}>{item.schedule}</td>
//               <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem" }}>{item.duration}</td>
//               <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--orange)" }}>
//                 {item.cost.toFixed(2)}
//               </td>
//               <td style={{ textAlign: "right", color: "var(--text-muted)", fontSize: "0.82rem" }}>
//                 {((item.cost / total) * 100).toFixed(1)}%
//               </td>
//             </tr>
//           ))}
//           <tr className="total-row">
//             <td colSpan={4} style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
//               Total Project Cost
//             </td>
//             <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>
//               {total.toFixed(2)}
//             </td>
//             <td style={{ textAlign: "right" }}>100%</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
export default function BudgetBreakdown() {
  return (
    <div>
      <h2>Budget Breakdown</h2>
      <p>Coming soon...</p>
    </div>
  );
}