import { BookOpen, Briefcase, Clock, CreditCard, FileUp } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardMetricCard } from "@/components/dashboard/DashboardMetricCard";
import { FreelancerWorkPackageCard } from "@/components/workflows/FreelancerWorkPackageCard";
import { Card, CardTitle } from "@/components/ui/card";
import { freelancerWorkPackages } from "@/lib/mock-data";
export default function FreelancerDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Freelancer dashboard"
        title="BEP-posted work packages only"
        description="Freelancers discover scoped work packages posted by BEPs, manage applications, tasks, deliverables, payment tracking, skills and learning prompts."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard
          label="Available BEP jobs"
          value="2"
          detail="No direct client hiring"
          icon={Briefcase}
        />
        <DashboardMetricCard
          label="Applications"
          value="3"
          detail="1 under BEP review"
          icon={FileUp}
        />
        <DashboardMetricCard
          label="Deliverables due"
          value="2"
          detail="Next due 21 May"
          icon={Clock}
        />
        <DashboardMetricCard
          label="Payment tracking"
          value="R18.5k"
          detail="Pending BEP acceptance"
          icon={CreditCard}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {freelancerWorkPackages.map((pkg) => (
          <FreelancerWorkPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
      <Card>
        <BookOpen className="size-5 text-mint" />
        <CardTitle className="mt-3">Learning / CPD prompts</CardTitle>
        <p className="mt-2 text-sm text-slate-300">
          Recommended: municipal sheet standards, drawing issue protocols, and
          evidence requirements for professional deliverables.
        </p>
      </Card>
    </>
  );
}
