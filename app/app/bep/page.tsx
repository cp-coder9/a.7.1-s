import {
  BriefcaseBusiness,
  FileWarning,
  PenTool,
  Users,
  Wallet,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardMetricCard } from "@/components/dashboard/DashboardMetricCard";
import { VerificationBadge } from "@/components/dashboard/VerificationBadge";
import { Card, CardTitle } from "@/components/ui/card";
import { DrawingRegisterTable } from "@/components/tables/DrawingRegisterTable";
import { ComplianceChecklist } from "@/components/tables/ComplianceChecklist";
import { FreelancerWorkPackageCard } from "@/components/workflows/FreelancerWorkPackageCard";
import { freelancerWorkPackages } from "@/lib/mock-data";
export default function BEPDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="BEP dashboard"
        title="Practice OS and professional coordination"
        description="Verified BEPs access client marketplace jobs, coordinate design teams and post freelancer work packages for scoped support."
        action={<VerificationBadge verified />}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard
          label="Marketplace opportunities"
          value="8"
          detail="Verification gate passed"
          icon={BriefcaseBusiness}
        />
        <DashboardMetricCard
          label="Active projects"
          value="4"
          detail="2 in municipal workflow"
          icon={PenTool}
        />
        <DashboardMetricCard
          label="Compliance flags"
          value="2"
          detail="Human sign-off required"
          icon={FileWarning}
        />
        <DashboardMetricCard
          label="Financial summary"
          value="R186k"
          detail="Current appointment value"
          icon={Wallet}
        />
      </div>
      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardTitle className="mb-4">Drawing register summary</CardTitle>
          <DrawingRegisterTable />
        </Card>
        <Card>
          <CardTitle className="mb-4">Compliance alerts</CardTitle>
          <ComplianceChecklist />
        </Card>
      </section>
      <Card>
        <Users className="size-5 text-mint" />
        <CardTitle className="mt-3 mb-4">Freelancer work packages</CardTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {freelancerWorkPackages.map((pkg) => (
            <FreelancerWorkPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Card>
    </>
  );
}
