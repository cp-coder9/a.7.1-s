import { ClipboardCheck, FileText, HardHat, WalletCards } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardMetricCard } from "@/components/dashboard/DashboardMetricCard";
import { ContractorProgrammeGantt } from "@/components/contractor/ContractorProgrammeGantt";
import { RFIRegister } from "@/components/tables/RFIRegister";
import { SiteInstructionRegister } from "@/components/tables/SiteInstructionRegister";
import { ProgressClaimTable } from "@/components/tables/ProgressClaimTable";
import { InvoiceTable } from "@/components/tables/InvoiceTable";
import { Card, CardTitle } from "@/components/ui/card";
export default function ContractorDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Contractor dashboard"
        title="Construction delivery operating system"
        description="A proper contractor workspace for active builds, tenders, contracts, programme, RFIs, instructions, inspections, progress photos, claims, invoices, certification, escrow, retention, variations, snagging and close-out."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard
          label="Active builds"
          value="3"
          detail="1 entering roof structure"
          icon={HardHat}
        />
        <DashboardMetricCard
          label="Tender invitations"
          value="5"
          detail="2 addenda open"
          icon={ClipboardCheck}
        />
        <DashboardMetricCard
          label="Signed contracts"
          value="2"
          detail="Building contracts active"
          icon={FileText}
        />
        <DashboardMetricCard
          label="Escrow release"
          value="1"
          detail="Awaiting client approval"
          icon={WalletCards}
        />
      </div>
      <Card>
        <CardTitle className="mb-4">Construction programme</CardTitle>
        <ContractorProgrammeGantt />
      </Card>
      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardTitle className="mb-4">RFIs</CardTitle>
          <RFIRegister />
        </Card>
        <Card>
          <CardTitle className="mb-4">Site instructions</CardTitle>
          <SiteInstructionRegister />
        </Card>
      </section>
      <Card>
        <CardTitle className="mb-4">
          Progress claims, certification and escrow
        </CardTitle>
        <ProgressClaimTable />
      </Card>
      <Card>
        <CardTitle className="mb-4">Invoices and retention</CardTitle>
        <InvoiceTable />
      </Card>
    </>
  );
}
