import { PageHeader } from "@/components/layout/PageHeader";
import { PaymentSchedule } from "@/components/payments/PaymentSchedule";
import { EscrowMilestoneCard } from "@/components/payments/EscrowMilestoneCard";
import { escrowMilestones } from "@/lib/mock-data";
export default function Page() {
  return (
    <>
      <PageHeader
        title="Payments and escrow-style milestones"
        eyebrow="Financial control"
        description="Mock UI for payment schedules, certification gates, retention and release requests. No real payment integration is implemented."
      />
      <PaymentSchedule />
      <div className="grid gap-4 md:grid-cols-2">
        {escrowMilestones.map((m) => (
          <EscrowMilestoneCard key={m.id} milestone={m} />
        ))}
      </div>
    </>
  );
}
