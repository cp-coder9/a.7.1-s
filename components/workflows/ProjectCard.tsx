import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { currency } from "@/lib/utils";
import type { Project } from "@/lib/types";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>
            {project.type} · {project.location}
          </CardDescription>
        </div>
        <StatusBadge status={project.status} />
      </div>
      <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
        <p>
          <span className="text-slate-500">Stage</span>
          <br />
          {project.stage}
        </p>
        <p>
          <span className="text-slate-500">Budget</span>
          <br />
          {currency(project.budget)}
        </p>
        <p>
          <span className="text-slate-500">Readiness</span>
          <br />
          {project.readinessScore}%
        </p>
      </div>
      <p className="mt-4 rounded-xl border border-mint/10 bg-ink/40 p-3 text-sm text-slate-300">
        Next: {project.nextAction}
      </p>
    </Card>
  );
}
