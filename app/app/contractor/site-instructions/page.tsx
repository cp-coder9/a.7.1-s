import { PageHeader } from "@/components/layout/PageHeader";
import { SiteInstructionRegister } from "@/components/tables/SiteInstructionRegister";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Site instruction register"
        eyebrow="Contract administration"
        description="Instructions, cost impact, programme impact and approval status."
      />
      <SiteInstructionRegister />
    </>
  );
}
