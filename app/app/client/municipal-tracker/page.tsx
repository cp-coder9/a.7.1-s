import { PageHeader } from "@/components/layout/PageHeader";
import { MunicipalTrackerTimeline } from "@/components/tables/MunicipalTrackerTimeline";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Municipal approval tracker"
        eyebrow="Compliance"
        description="Track pre-consultations, submission pack dependencies, authority comments and human sign-off gates."
      />
      <MunicipalTrackerTimeline />
    </>
  );
}
