import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { professionals, bepDisciplines } from "@/lib/mock-data";
import { VerificationBadge } from "@/components/dashboard/VerificationBadge";
export default function Page() {
  return (
    <>
      <PageHeader
        title="BEP operating module"
        eyebrow="Verified professional layer"
        description="This page reserves the module route for marketplace access, projects, financial controls or verification workflows."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {professionals.map((p) => (
          <Card key={p.id}>
            <CardTitle>{p.name}</CardTitle>
            <CardDescription>
              {p.discipline} · {p.capacity}
            </CardDescription>
            <div className="mt-4">
              <VerificationBadge verified={p.verified} />
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <CardTitle>Discipline coverage</CardTitle>
        <CardDescription>
          {bepDisciplines.map((d) => d.name).join(" · ")}
        </CardDescription>
      </Card>
    </>
  );
}
