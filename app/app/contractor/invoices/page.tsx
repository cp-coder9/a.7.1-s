import { PageHeader } from "@/components/layout/PageHeader";
import { InvoiceTable } from "@/components/tables/InvoiceTable";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Contractor invoices"
        eyebrow="Financial control"
        description="Milestone invoices are connected to progress claims, certification, retention and escrow-style status."
      />
      <InvoiceTable />
    </>
  );
}
