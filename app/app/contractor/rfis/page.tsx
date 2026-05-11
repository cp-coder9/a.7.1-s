import { PageHeader } from "@/components/layout/PageHeader";
import { RFIRegister } from "@/components/tables/RFIRegister";
export default function Page() {
  return (
    <>
      <PageHeader
        title="RFI register"
        eyebrow="Site coordination"
        description="Requests for information with owners, due dates and programme impact."
      />
      <RFIRegister />
    </>
  );
}
