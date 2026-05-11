import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
export function DashboardMetricCard({
  label,
  value,
  detail,
  icon: Icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
          <p className="mt-2 text-sm text-teal-light">{detail}</p>
        </div>
        <Icon className="size-5 text-mint" />
      </div>
    </Card>
  );
}
