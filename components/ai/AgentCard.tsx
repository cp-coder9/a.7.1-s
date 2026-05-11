import { Card, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import type { AIAgent } from "@/lib/types";
export function AgentCard({ agent }: { agent: AIAgent }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <CardTitle>{agent.name}</CardTitle>
        <StatusBadge status={agent.status} />
      </div>
      <p className="mt-3 text-sm text-slate-300">{agent.does}</p>
      <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
        <div>
          <p className="text-slate-500">Inputs</p>
          {agent.inputs.join(", ")}
        </div>
        <div>
          <p className="text-slate-500">Outputs</p>
          {agent.outputs.join(", ")}
        </div>
        <div>
          <p className="text-slate-500">Human approval gate</p>
          {agent.approvalGate}
        </div>
      </div>
    </Card>
  );
}
