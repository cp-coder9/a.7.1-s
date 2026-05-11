import { PageHeader } from "@/components/layout/PageHeader";
import { DrawingRegisterTable } from "@/components/tables/DrawingRegisterTable";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Drawing register"
        eyebrow="Documentation"
        description="Track drawing numbers, revisions, issue purposes, dependencies and status across disciplines."
      />
      <DrawingRegisterTable />
    </>
  );
}
