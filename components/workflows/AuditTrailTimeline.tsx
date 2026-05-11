import { auditTrailEvents } from "@/lib/mock-data";
export function AuditTrailTimeline() {
  return (
    <div className="space-y-3">
      {auditTrailEvents.map((e) => (
        <div
          key={e.id}
          className="rounded-2xl border border-mint/15 bg-white/[0.04] p-4"
        >
          <p className="font-medium text-mint-pale">
            {e.actor} {e.action} {e.object}
          </p>
          <p className="text-sm text-slate-400">{e.time}</p>
          <p className="mt-2 text-sm text-slate-300">{e.note}</p>
        </div>
      ))}
    </div>
  );
}
