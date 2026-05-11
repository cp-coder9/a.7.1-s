import { PageHeader } from "@/components/layout/PageHeader";
import { ProgressClaimTable } from "@/components/tables/ProgressClaimTable";
import { AuditTrailTimeline } from "@/components/workflows/AuditTrailTimeline";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Progress claims"
        eyebrow="Certification workflow"
        description="Claims link to work stages, evidence/photos, QS or architect certification, client approval, invoice, escrow release and audit trail."
      />
      <ProgressClaimTable />
      <AuditTrailTimeline />
    </>
  );
}
