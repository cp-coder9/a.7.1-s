import { invoices } from "@/lib/mock-data";
import { currency } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function InvoiceTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mint/15">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-mint/10 text-mint-pale">
          <tr>
            <th className="p-3">Invoice</th>
            <th>Project</th>
            <th>Amount</th>
            <th>Linked claim</th>
            <th>Certification</th>
            <th>Escrow</th>
            <th>Retention</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((i) => (
            <tr key={i.id} className="border-t border-mint/10">
              <td className="p-3">{i.invoiceNo}</td>
              <td>{i.project}</td>
              <td>{currency(i.amount)}</td>
              <td>{i.linkedClaim}</td>
              <td>{i.certification}</td>
              <td>{i.escrowStatus}</td>
              <td>{i.retention}</td>
              <td>
                <StatusBadge status={i.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
