import { PageHeader } from "@/components/layout/PageHeader";
import { ComplianceChecklist } from "@/components/tables/ComplianceChecklist";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Compliance checklist"
        eyebrow="Municipal and statutory"
        description="AI can check completeness, but professional accountability and certification stay with appointed humans."
      />
      <ComplianceChecklist />
    </>
  );
}
