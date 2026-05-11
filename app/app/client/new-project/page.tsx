import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardTitle } from "@/components/ui/card";
const steps = [
  "Project type",
  "Property information",
  "Scope and goals",
  "Upload requirements",
  "Budget and timeline",
  "AI route recommendation",
  "Submit to verified BEPs",
];
export default function NewProject() {
  return (
    <>
      <PageHeader
        eyebrow="Project intake"
        title="Create a structured project brief"
        description="A multi-step intake mockup that prepares a diagnostic and routes the project to verified BEPs, not freelancers."
      />
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="space-y-2">
          {steps.map((s, i) => (
            <div
              key={s}
              className="rounded-xl border border-mint/15 bg-white/[0.04] p-3 text-sm"
            >
              <span className="mr-2 text-mint">{i + 1}</span>
              {s}
            </div>
          ))}
        </div>
        <Card>
          <CardTitle>AI route recommendation preview</CardTitle>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-ink/50 p-4">
              <p className="text-sm text-slate-500">Recommended lead</p>
              <p className="mt-1 text-xl text-mint-pale">Verified architect</p>
            </div>
            <div className="rounded-2xl bg-ink/50 p-4">
              <p className="text-sm text-slate-500">
                Specialists likely required
              </p>
              <p className="mt-1 text-xl text-mint-pale">
                Structural, fire, town planning
              </p>
            </div>
            <div className="rounded-2xl bg-ink/50 p-4 md:col-span-2">
              <p className="text-sm text-slate-500">Submission rule</p>
              <p className="mt-1 text-slate-300">
                AI can draft the brief and shortlist verified BEPs. Appointment,
                contract signature and fee acceptance require human approval.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
