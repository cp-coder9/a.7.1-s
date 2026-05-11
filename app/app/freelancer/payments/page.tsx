import { PageHeader } from "@/components/layout/PageHeader";
import { FreelancerWorkPackageCard } from "@/components/workflows/FreelancerWorkPackageCard";
import { freelancerWorkPackages } from "@/lib/mock-data";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Freelancer module"
        eyebrow="BEP-posted jobs"
        description="Freelancer routes focus on applications, assigned tasks, deliverables, payment tracking, skill badges and profile readiness."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {freelancerWorkPackages.map((pkg) => (
          <FreelancerWorkPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </>
  );
}
