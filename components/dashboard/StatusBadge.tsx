import { cn } from "@/lib/utils";
export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-1 text-xs font-medium capitalize",
        status === "approved" || status === "paid" || status === "complete"
          ? "border-mint/40 bg-mint/10 text-mint"
          : status === "blocked" || status === "rejected"
            ? "border-red-300/40 bg-red-500/10 text-red-200"
            : "border-teal-light/30 bg-teal/20 text-teal-light",
      )}
    >
      {status}
    </span>
  );
}
