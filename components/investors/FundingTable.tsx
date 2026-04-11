// components/investors/FundingTable.tsx

// import { BUDGET_BREAKDOWN } from "@/lib/constants";

// export default function FundingTable() {
//   const total = BUDGET_BREAKDOWN.reduce((s, i) => s + i.cost, 0);

//   return (
//     <div style={{ border: "1px solid var(--border-green)", overflow: "hidden" }}>
//       <table className="wh-table">
//         <thead>
//           <tr>
//             <th>Scope</th>
//             <th>Duration</th>
//             <th style={{ textAlign: "right" }}>Cost (US$M)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {BUDGET_BREAKDOWN.map((item, i) => (
//             <tr key={i}>
//               <td style={{ color: "var(--text-primary)" }}>{item.scope}</td>
//               <td style={{ fontFamily: "var(--font-condensed)", fontSize: "0.8rem" }}>{item.duration}</td>
//               <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--orange)" }}>
//                 {item.cost.toFixed(2)}
//               </td>
//             </tr>
//           ))}
//           <tr className="total-row">
//             <td colSpan={2}>Total Investment Required</td>
//             <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>
//               {total.toFixed(2)}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }