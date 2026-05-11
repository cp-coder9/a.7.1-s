import { complianceItems } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function ComplianceChecklist() {
  return (
    <div className="grid gap-3">
      {complianceItems.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-mint/15 bg-white/[0.04] p-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-medium text-mint-pale">{item.requirement}</p>
              <p className="text-sm text-slate-400">
                {item.authority} · Owner: {item.owner} · Due {item.due}
              </p>
              <p className="mt-2 text-sm text-teal-light">
                AI check: {item.aiCheck}
              </p>
            </div>
            <StatusBadge status={item.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
