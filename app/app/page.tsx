import {
  Brain,
  CreditCard,
  FileCheck2,
  HardHat,
  Library,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { RoleSwitcher } from "@/components/layout/RoleSwitcher";
import { DashboardMetricCard } from "@/components/dashboard/DashboardMetricCard";
import { WorkflowTimeline } from "@/components/workflows/WorkflowTimeline";
import { AIOrchestratorBand } from "@/components/ai/AIOrchestratorBand";
import { projectStages } from "@/lib/mock-data";
export default function AppHome() {
  return (
    <>
      <PageHeader
        eyebrow="Application shell"
        title="Built-environment workflow operating system"
        description="Navigate role-specific dashboards, shared system modules, AI orchestration, governance, payments and delivery controls."
      />
      <RoleSwitcher />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard
          label="Core modules"
          value="12"
          detail="From intake to escrow and governance"
          icon={FileCheck2}
        />
        <DashboardMetricCard
          label="Human approval gates"
          value="Always"
          detail="AI cannot certify or release payments"
          icon={ShieldCheck}
        />
        <DashboardMetricCard
          label="Construction tools"
          value="Deep"
          detail="Programme, RFIs, claims, close-out"
          icon={HardHat}
        />
        <DashboardMetricCard
          label="Knowledge layer"
          value="CPD"
          detail="Role education and workflow playbooks"
          icon={Library}
        />
      </div>
      <AIOrchestratorBand />
      <WorkflowTimeline stages={projectStages} />
    </>
  );
}
