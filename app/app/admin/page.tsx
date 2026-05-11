import {
  AlertTriangle,
  BarChart3,
  CreditCard,
  FileSearch,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardMetricCard } from "@/components/dashboard/DashboardMetricCard";
import { AuditTrailTimeline } from "@/components/workflows/AuditTrailTimeline";
import { Card, CardTitle } from "@/components/ui/card";
export default function AdminDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Admin dashboard"
        title="Governance, trust and platform operations"
        description="Admins oversee BEP verification, user management, disputes, payments, escrow holds, compliance audits, AI report review queues and audit trails."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard
          label="Pending BEP verifications"
          value="14"
          detail="Marketplace access gated"
          icon={ShieldCheck}
        />
        <DashboardMetricCard
          label="Active disputes"
          value="3"
          detail="2 construction claims"
          icon={AlertTriangle}
        />
        <DashboardMetricCard
          label="Escrow/payment holds"
          value="R1.2m"
          detail="Human review required"
          icon={CreditCard}
        />
        <DashboardMetricCard
          label="AI report review queue"
          value="9"
          detail="Draft outputs pending"
          icon={FileSearch}
        />
      </div>
      <Card>
        <BarChart3 className="size-5 text-mint" />
        <CardTitle className="mt-3">Platform analytics</CardTitle>
        <p className="mt-2 text-sm text-slate-300">
          Mock analytics reserve space for role growth, project conversion,
          claim cycle time and compliance bottlenecks.
        </p>
      </Card>
      <AuditTrailTimeline />
    </>
  );
}
