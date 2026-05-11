import { siteInstructions } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function SiteInstructionRegister() {
  return (
    <div className="grid gap-3">
      {siteInstructions.map((s) => (
        <div
          key={s.id}
          className="rounded-2xl border border-mint/15 bg-white/[0.04] p-4"
        >
          <div className="flex justify-between gap-3">
            <div>
              <p className="font-medium text-mint-pale">
                {s.id}: {s.instruction}
              </p>
              <p className="text-sm text-slate-400">
                Issued by {s.issuedBy} · Cost: {s.costImpact} · Programme:{" "}
                {s.programmeImpact}
              </p>
            </div>
            <StatusBadge status={s.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
