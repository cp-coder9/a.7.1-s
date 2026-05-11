import { PageHeader } from "@/components/layout/PageHeader";
import { ContractorProgrammeGantt } from "@/components/contractor/ContractorProgrammeGantt";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Construction programme"
        eyebrow="Delivery"
        description="Simple Gantt-style view showing work stages, dates, progress and dependencies."
      />
      <ContractorProgrammeGantt />
    </>
  );
}
