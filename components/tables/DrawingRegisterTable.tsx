import { drawingRegister } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
export function DrawingRegisterTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mint/15">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-mint/10 text-mint-pale">
          <tr>
            <th className="p-3">No.</th>
            <th>Title</th>
            <th>Rev</th>
            <th>Discipline</th>
            <th>Issued for</th>
            <th>Dependency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {drawingRegister.map((d) => (
            <tr key={d.id} className="border-t border-mint/10">
              <td className="p-3">{d.number}</td>
              <td>{d.title}</td>
              <td>{d.revision}</td>
              <td>{d.discipline}</td>
              <td>{d.issuedFor}</td>
              <td>{d.dependency}</td>
              <td>
                <StatusBadge status={d.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
