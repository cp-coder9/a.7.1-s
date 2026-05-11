import { PageHeader } from "@/components/layout/PageHeader";
import { AIOrchestratorBand } from "@/components/ai/AIOrchestratorBand";
import { AgentCard } from "@/components/ai/AgentCard";
import { aiAgents } from "@/lib/mock-data";
export default function Page() {
  return (
    <>
      <PageHeader
        title="AI orchestrator layer"
        eyebrow="Embedded agents"
        description="AI is workflow support, not a standalone chatbot. Actions are logged and outputs move through draft, reviewed, approved or rejected states."
      />
      <AIOrchestratorBand />
      <div className="grid gap-4 lg:grid-cols-2">
        {aiAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </>
  );
}
