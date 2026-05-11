import { contractorProgrammeTasks } from "@/lib/mock-data";
export function ContractorProgrammeGantt() {
  return (
    <div className="space-y-4 rounded-2xl border border-mint/15 bg-white/[0.04] p-4">
      {contractorProgrammeTasks.map((task, index) => (
        <div key={task.id} className="grid gap-2 md:grid-cols-[220px_1fr]">
          <div>
            <p className="font-medium text-mint-pale">{task.task}</p>
            <p className="text-xs text-slate-400">
              {task.start} → {task.end}
              <br />
              Dependency: {task.dependency}
            </p>
          </div>
          <div className="relative h-10 rounded-full bg-ink/70">
            <div
              className="absolute top-2 h-6 rounded-full border border-mint/30 bg-gradient-to-r from-teal to-mint"
              style={{ left: `${index * 12}%`, width: `${28 + index * 8}%` }}
            />
            <span className="absolute right-3 top-2 text-xs text-slate-300">
              {task.progress}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
