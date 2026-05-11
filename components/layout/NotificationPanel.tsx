import { Bell } from "lucide-react";
import { notifications } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function NotificationPanel() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-mint/10 bg-mint/[0.04] p-3 text-sm md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2 text-mint-pale">
        <Bell className="size-4" />
        Workflow notifications
      </div>
      <div className="flex flex-wrap gap-2">
        {notifications.map((n) => (
          <span
            key={n.id}
            className="rounded-full bg-white/[0.04] px-3 py-1 text-slate-300"
          >
            {n.title} <StatusBadge status={n.status} />
          </span>
        ))}
      </div>
    </div>
  );
}
