import { designTeamMembers } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function DesignTeamMatrix() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mint/15">
      <table className="w-full min-w-[900px] text-left text-sm">
        <thead className="bg-mint/10 text-mint-pale">
          <tr>
            <th className="p-3">Role</th>
            <th>Responsibility</th>
            <th>Current deliverable</th>
            <th>Status</th>
            <th>Dependency</th>
            <th>Next action</th>
          </tr>
        </thead>
        <tbody>
          {designTeamMembers.map((m) => (
            <tr key={m.role} className="border-t border-mint/10 align-top">
              <td className="p-3 font-medium">{m.role}</td>
              <td>{m.responsibility}</td>
              <td>{m.deliverable}</td>
              <td>
                <StatusBadge status={m.status} />
              </td>
              <td>{m.dependency}</td>
              <td>{m.nextAction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
