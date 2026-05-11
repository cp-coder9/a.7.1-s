import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
const modules = [
  "Client education",
  "Professional workflows",
  "Contractor workflows",
  "Freelancer learning",
  "CPD: municipal readiness",
  "Tutorial: claims and escrow evidence",
];
export default function Page() {
  return (
    <>
      <PageHeader
        title="Knowledge, CPD and community"
        eyebrow="Learning layer"
        description="Role-specific education, professional workflow playbooks, contractor guidance, freelancer learning and platform tutorial cards."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((m) => (
          <Card key={m}>
            <CardTitle>{m}</CardTitle>
            <CardDescription>
              Practical built-environment workflow guidance connected to
              Architex modules and approval gates.
            </CardDescription>
          </Card>
        ))}
      </div>
    </>
  );
}
