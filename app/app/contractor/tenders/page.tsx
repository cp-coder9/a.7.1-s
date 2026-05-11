import { PageHeader } from "@/components/layout/PageHeader";
import { TenderTable } from "@/components/tables/TenderTable";
import { TenderComparisonTable } from "@/components/tables/TenderComparisonTable";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Contractor tender centre"
        eyebrow="Tendering"
        description="Tender invitations, tender pack status, addenda, tender queries, pricing returns, comparison and appointment recommendation."
      />
      <TenderTable />
      <TenderComparisonTable />
    </>
  );
}
