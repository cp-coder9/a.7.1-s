import { payments } from "@/lib/mock-data";
import { currency } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function PaymentSchedule() {
  return (
    <div className="space-y-3">
      {payments.map((p) => (
        <div
          key={p.id}
          className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-mint/15 bg-white/[0.04] p-4"
        >
          <div>
            <p className="font-medium text-mint-pale">{p.milestone}</p>
            <p className="text-sm text-slate-400">
              {p.project} · Due {p.due}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span>{currency(p.amount)}</span>
            <StatusBadge status={p.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
