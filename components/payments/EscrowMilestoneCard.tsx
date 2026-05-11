import { Card, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { currency } from "@/lib/utils";
import type { EscrowMilestone } from "@/lib/types";
export function EscrowMilestoneCard({
  milestone,
}: {
  milestone: EscrowMilestone;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div>
          <CardTitle>{milestone.title}</CardTitle>
          <p className="mt-2 text-2xl font-semibold">
            {currency(milestone.amount)}
          </p>
        </div>
        <StatusBadge status={milestone.status} />
      </div>
      <dl className="mt-4 space-y-2 text-sm text-slate-300">
        <div>
          <dt className="text-slate-500">Release gate</dt>
          <dd>{milestone.releaseGate}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Certification</dt>
          <dd>{milestone.certificationStatus}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Retention</dt>
          <dd>{milestone.retention}</dd>
        </div>
        <div className="rounded-xl border border-mint/10 bg-ink/40 p-3 text-teal-light">
          {milestone.auditNote}
        </div>
      </dl>
    </Card>
  );
}
