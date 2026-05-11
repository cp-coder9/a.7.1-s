import {
  CalendarCheck,
  FileText,
  Gauge,
  Landmark,
  Lightbulb,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardMetricCard } from "@/components/dashboard/DashboardMetricCard";
import { ProjectCard } from "@/components/workflows/ProjectCard";
import { PaymentSchedule } from "@/components/payments/PaymentSchedule";
import { MunicipalTrackerTimeline } from "@/components/tables/MunicipalTrackerTimeline";
import { Card, CardTitle } from "@/components/ui/card";
import { projects, proposals } from "@/lib/mock-data";
export default function ClientDashboard() {
  const project = projects[0];
  return (
    <>
      <PageHeader
        eyebrow="Client dashboard"
        title="Project command centre"
        description="Clients can post projects, appoint verified BEPs and track contracts, municipal status and payment milestones. They cannot directly hire freelancers."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard
          label="Active projects"
          value="2"
          detail={project.nextAction}
          icon={FileText}
        />
        <DashboardMetricCard
          label="Readiness score"
          value={`${project.readinessScore}%`}
          detail="AI diagnostic updated"
          icon={Gauge}
        />
        <DashboardMetricCard
          label="Verified proposals"
          value={`${proposals.length}`}
          detail="Ready for comparison"
          icon={CalendarCheck}
        />
        <DashboardMetricCard
          label="Municipal tracker"
          value="Pre-check"
          detail="Authority meeting booked"
          icon={Landmark}
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="space-y-4">
          <Card>
            <Lightbulb className="size-5 text-mint" />
            <CardTitle className="mt-3">AI educational feedback</CardTitle>
            <p className="mt-2 text-sm text-slate-300">
              Your brief is strong enough for verified BEP appointment. Before
              municipal submission, expect specialist structural and heritage
              inputs. AI can explain risks, but your appointed professionals
              remain accountable.
            </p>
          </Card>
          <Card>
            <CardTitle>Contract status</CardTitle>
            <p className="mt-2 text-sm text-slate-300">
              Architect appointment drafted. Human signature required before any
              professional obligation begins.
            </p>
          </Card>
        </div>
      </div>
      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardTitle className="mb-4">Payment schedule</CardTitle>
          <PaymentSchedule />
        </Card>
        <Card>
          <CardTitle className="mb-4">Municipal tracker status</CardTitle>
          <MunicipalTrackerTimeline />
        </Card>
      </section>
    </>
  );
}
