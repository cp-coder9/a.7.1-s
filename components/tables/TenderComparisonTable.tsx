import { tenders } from "@/lib/mock-data";
export function TenderComparisonTable() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {tenders.map((t) => (
        <div
          key={t.id}
          className="rounded-2xl border border-mint/15 bg-white/[0.04] p-4"
        >
          <p className="font-semibold text-mint-pale">{t.contractor}</p>
          <p className="mt-2 text-sm text-slate-300">{t.recommendation}</p>
          <p className="mt-3 text-xs uppercase tracking-[.2em] text-slate-500">
            Appointment recommendation
          </p>
        </div>
      ))}
    </div>
  );
}
