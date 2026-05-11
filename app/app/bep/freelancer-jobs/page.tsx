import { PageHeader } from "@/components/layout/PageHeader";
import { FreelancerWorkPackageCard } from "@/components/workflows/FreelancerWorkPackageCard";
import { freelancerWorkPackages } from "@/lib/mock-data";
export default function Page() {
  return (
    <>
      <PageHeader
        title="BEP-posted freelancer work packages"
        eyebrow="Capacity"
        description="BEPs can post scoped work packages; freelancers only see BEP-posted jobs, not direct client appointments."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {freelancerWorkPackages.map((pkg) => (
          <FreelancerWorkPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </>
  );
}
