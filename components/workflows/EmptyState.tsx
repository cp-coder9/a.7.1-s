import { Inbox } from "lucide-react";
export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-mint/20 bg-white/[0.03] p-8 text-center">
      <Inbox className="mx-auto size-8 text-mint" />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
}
