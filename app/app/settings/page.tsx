import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState } from "@/components/workflows/EmptyState";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Shared system route"
        eyebrow="Architex OS"
        description="Shared route reserved for messages, notifications, settings or resource sharing."
      />
      <EmptyState
        title="Module shell ready"
        description="The frontend structure is in place for future API-backed state, permissions and records."
      />
    </>
  );
}
