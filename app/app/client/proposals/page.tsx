import { PageHeader } from "@/components/layout/PageHeader";
import { ProposalComparisonTable } from "@/components/tables/ProposalComparisonTable";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Verified BEP proposal comparison"
        eyebrow="Appointment"
        description="Compare accountable professional proposals. Client-to-freelancer hiring is intentionally not available."
      />
      <ProposalComparisonTable />
    </>
  );
}
