import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCard } from "@/components/workflows/ProjectCard";
import { projects } from "@/lib/mock-data";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Client projects and contracts"
        eyebrow="Client workspace"
        description="A client view of active projects, professional appointments and next accountable actions."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
