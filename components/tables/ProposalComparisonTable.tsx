import { proposals } from "@/lib/mock-data";
import { currency } from "@/lib/utils";
import { VerificationBadge } from "@/components/dashboard/VerificationBadge";
export function ProposalComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mint/15">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-mint/10 text-mint-pale">
          <tr>
            <th className="p-3">Professional</th>
            <th>Discipline</th>
            <th>Fee</th>
            <th>Programme</th>
            <th>Risk notes</th>
            <th>Gate</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((p) => (
            <tr key={p.id} className="border-t border-mint/10">
              <td className="p-3 font-medium">{p.professional}</td>
              <td>{p.discipline}</td>
              <td>{currency(p.fee)}</td>
              <td>{p.duration}</td>
              <td>{p.riskNotes}</td>
              <td>
                <VerificationBadge verified={p.verified} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
