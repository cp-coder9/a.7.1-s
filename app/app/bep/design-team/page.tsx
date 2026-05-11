import { PageHeader } from "@/components/layout/PageHeader";
import { DesignTeamMatrix } from "@/components/tables/DesignTeamMatrix";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Design team discipline matrix"
        eyebrow="Professional coordination"
        description="Architect, engineers, QS, landscape, town planning and specialist dependencies are visible in one coordination matrix."
      />
      <DesignTeamMatrix />
    </>
  );
}
