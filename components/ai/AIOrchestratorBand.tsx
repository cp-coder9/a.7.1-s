import { Brain } from "lucide-react";
export function AIOrchestratorBand() {
  return (
    <section className="rounded-3xl border border-mint/20 bg-gradient-to-r from-teal-deep/70 to-mint/10 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <Brain className="mt-1 size-6 text-mint" />
          <div>
            <h2 className="text-2xl font-semibold">
              Embedded AI orchestration, governed by human approval
            </h2>
            <p className="mt-2 max-w-3xl text-slate-300">
              Agents draft briefs, summarise evidence, route dependencies and
              prepare actions. They cannot sign contracts, certify compliance,
              approve claims or release payments without accountable human
              approval.
            </p>
          </div>
        </div>
        <span className="rounded-full border border-mint/30 px-4 py-2 text-sm text-mint-pale">
          Draft → reviewed → approved/rejected
        </span>
      </div>
    </section>
  );
}
