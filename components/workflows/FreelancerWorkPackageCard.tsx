import { Card, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { currency } from "@/lib/utils";
import type { FreelancerWorkPackage } from "@/lib/types";
export function FreelancerWorkPackageCard({
  pkg,
}: {
  pkg: FreelancerWorkPackage;
}) {
  return (
    <Card>
      <div className="flex justify-between gap-3">
        <div>
          <CardTitle>{pkg.title}</CardTitle>
          <p className="mt-1 text-sm text-slate-400">
            BEP-posted by {pkg.postedByBep} · {pkg.discipline}
          </p>
        </div>
        <StatusBadge status={pkg.status} />
      </div>
      <p className="mt-4 text-sm text-slate-300">
        Deliverable: {pkg.deliverable}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-mint-pale">{currency(pkg.fee)}</span>
        <span className="text-slate-500">Due {pkg.due}</span>
        {pkg.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-mint/10 px-2 py-1 text-xs text-mint"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}
