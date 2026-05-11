import { PageHeader } from "@/components/layout/PageHeader";
import { AuditTrailTimeline } from "@/components/workflows/AuditTrailTimeline";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Admin governance module"
        eyebrow="Trust desk"
        description="Admin route for users, verification, projects, disputes, payments, escrow, compliance audits, analytics and audit trails."
      />
      <AuditTrailTimeline />
    </>
  );
}
