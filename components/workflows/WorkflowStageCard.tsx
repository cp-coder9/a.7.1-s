import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import type { ProjectStage } from "@/lib/types";
export function WorkflowStageCard({ stage }: { stage: ProjectStage }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div>
          <CardTitle>{stage.title}</CardTitle>
          <CardDescription>{stage.description}</CardDescription>
          <p className="mt-3 text-xs uppercase tracking-[.2em] text-slate-500">
            Owner: {stage.owner}
          </p>
        </div>
        <StatusBadge status={stage.status} />
      </div>
    </Card>
  );
}
