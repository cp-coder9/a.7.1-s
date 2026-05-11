import { tenders } from "@/lib/mock-data";
import { currency } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function TenderTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mint/15">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-mint/10 text-mint-pale">
          <tr>
            <th className="p-3">Package</th>
            <th>Contractor</th>
            <th>Pack</th>
            <th>Addenda</th>
            <th>Queries</th>
            <th>Return</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((t) => (
            <tr key={t.id} className="border-t border-mint/10">
              <td className="p-3">{t.package}</td>
              <td>{t.contractor}</td>
              <td>{t.packStatus}</td>
              <td>{t.addenda}</td>
              <td>{t.queries}</td>
              <td>{currency(t.returnValue)}</td>
              <td>
                <StatusBadge status={t.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
