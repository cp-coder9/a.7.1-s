import type { ProjectStage } from "@/lib/types";
import { WorkflowStageCard } from "@/components/workflows/WorkflowStageCard";
export function WorkflowTimeline({ stages }: { stages: ProjectStage[] }) {
  return (
    <div>
      <div className="workflow-line mb-5" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stages.map((stage) => (
          <WorkflowStageCard key={stage.id} stage={stage} />
        ))}
      </div>
    </div>
  );
}
