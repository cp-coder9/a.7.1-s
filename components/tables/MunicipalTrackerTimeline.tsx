import { municipalStatuses } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function MunicipalTrackerTimeline() {
  return (
    <div className="space-y-3">
      {municipalStatuses.map((m) => (
        <div
          key={m.id}
          className="relative rounded-2xl border border-mint/15 bg-white/[0.04] p-4"
        >
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <p className="font-medium text-mint-pale">{m.step}</p>
              <p className="text-sm text-slate-400">
                {m.authority} · {m.date}
              </p>
              <p className="mt-2 text-sm text-slate-300">{m.note}</p>
            </div>
            <StatusBadge status={m.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
