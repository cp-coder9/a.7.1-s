import { progressClaims } from "@/lib/mock-data";
import { currency } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function ProgressClaimTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mint/15">
      <table className="w-full min-w-[900px] text-left text-sm">
        <thead className="bg-mint/10 text-mint-pale">
          <tr>
            <th className="p-3">Claim</th>
            <th>Work stage</th>
            <th>Evidence/photos</th>
            <th>Certification</th>
            <th>Client approval</th>
            <th>Invoice</th>
            <th>Escrow release</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {progressClaims.map((p) => (
            <tr key={p.id} className="border-t border-mint/10 align-top">
              <td className="p-3">
                {p.id}
                <br />
                {currency(p.claimAmount)}
              </td>
              <td>{p.workStage}</td>
              <td>{p.evidence}</td>
              <td>{p.qsCertification}</td>
              <td>{p.clientApproval}</td>
              <td>{p.invoice}</td>
              <td>{p.escrowRelease}</td>
              <td>
                <StatusBadge status={p.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
