import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { snags } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Construction module"
        eyebrow="Contractor OS"
        description="Route reserved for signed contracts, site management, inspections, progress photos, variations, snagging, final account and close-out archive."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {snags.map((s) => (
          <Card key={s.id}>
            <CardTitle>
              {s.area}: {s.item}
            </CardTitle>
            <CardDescription>
              Owner: {s.owner} · Due {s.due}
            </CardDescription>
            <div className="mt-4">
              <StatusBadge status={s.status} />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
