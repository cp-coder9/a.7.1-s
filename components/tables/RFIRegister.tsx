import { rfis } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function RFIRegister() {
  return (
    <div className="grid gap-3">
      {rfis.map((r) => (
        <div
          key={r.id}
          className="rounded-2xl border border-mint/15 bg-white/[0.04] p-4"
        >
          <div className="flex justify-between gap-3">
            <div>
              <p className="font-medium text-mint-pale">
                {r.id}: {r.subject}
              </p>
              <p className="text-sm text-slate-400">
                Raised by {r.raisedBy}; assigned to {r.assignedTo}; due {r.due}
              </p>
              <p className="mt-2 text-sm text-teal-light">Impact: {r.impact}</p>
            </div>
            <StatusBadge status={r.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
