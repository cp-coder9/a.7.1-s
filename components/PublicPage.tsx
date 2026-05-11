import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  FileCheck2,
  Handshake,
  HardHat,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { AIOrchestratorBand } from "@/components/ai/AIOrchestratorBand";
import { WorkflowTimeline } from "@/components/workflows/WorkflowTimeline";
import { projectStages } from "@/lib/mock-data";

const publicCopy: Record<string, { title: string; description: string }> = {
  "how-it-works": {
    title: "From first brief to close-out archive",
    description:
      "Architex structures every appointment, approval, tender, construction instruction, claim and audit event around the project workflow.",
  },
  "for-clients": {
    title:
      "Client project clarity without bypassing professional accountability",
    description:
      "Post a project, understand readiness, appoint verified BEPs and track municipal, contract and payment milestones.",
  },
  "for-professionals": {
    title: "A Practice OS for verified built-environment professionals",
    description:
      "Coordinate design teams, drawing registers, compliance packs, freelancer capacity and fee-stage financial control.",
  },
  "for-contractors": {
    title: "Construction delivery tools for contractors",
    description:
      "Manage tenders, signed building contracts, programmes, RFIs, instructions, claims, invoices, retention and close-out.",
  },
  "for-freelancers": {
    title: "Freelancer work packages posted by verified BEPs",
    description:
      "Freelancers see scoped professional tasks, not direct client hires, with deliverables, skills and payment tracking.",
  },
  "ai-workflows": {
    title: "AI agents embedded into accountable workflows",
    description:
      "AI can draft and route actions, but humans approve contracts, compliance, claims and payment release.",
  },
  knowledge: {
    title: "Knowledge, CPD and platform playbooks",
    description:
      "Role-specific education for clients, professionals, contractors and freelancers, with CPD-style workflow modules.",
  },
  "pricing-placeholder": {
    title: "Pricing placeholder",
    description:
      "Commercial packaging will map to role permissions, verification, project volume, escrow workflows and practice tools.",
  },
  login: {
    title: "Login placeholder",
    description:
      "Authentication is intentionally not implemented yet. This screen reserves the route for future identity integration.",
  },
  register: {
    title: "Register placeholder",
    description:
      "Future onboarding will branch by Client, BEP, Contractor, Freelancer and Admin verification workflows.",
  },
};
const roles = [
  [
    "Client",
    "Start a project, compare verified proposals, approve appointments and monitor payments.",
    Users,
  ],
  [
    "BEP",
    "Run design coordination, compliance, drawing registers and freelancer capacity.",
    Building2,
  ],
  [
    "Contractor",
    "Operate tenders, programme, RFIs, claims, invoices and close-out.",
    HardHat,
  ],
  [
    "Freelancer",
    "Accept BEP-posted work packages with scoped deliverables.",
    Handshake,
  ],
  [
    "Admin",
    "Oversee verification, disputes, escrow holds, audits and governance.",
    ShieldCheck,
  ],
] as const;
export function PublicPage({ slug = "home" }: { slug?: string }) {
  const copy = publicCopy[slug];
  const isHome = slug === "home";
  return (
    <div className="relative">
      <PublicHeader />
      <main className="mx-auto max-w-7xl space-y-16 px-4 py-10 md:py-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.3em] text-mint">
              Architex platform prototype
            </p>
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              {isHome
                ? "The AI-powered operating system for the built environment."
                : copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              {isHome
                ? "Connect clients, verified professionals, contractors, freelancers and admins through one governed workflow from project intake to close-out."
                : copy.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/app/client/new-project">
                Start a Project <ArrowRight className="ml-2 size-4" />
              </ButtonLink>
              <ButtonLink href="/app/bep" variant="secondary">
                Explore Professional Tools
              </ButtonLink>
            </div>
          </div>
          <Card className="overflow-hidden p-0">
            <div className="bg-grid bg-[length:32px_32px] p-6">
              <div className="rounded-2xl border border-mint/20 bg-ink/70 p-5">
                <p className="text-sm uppercase tracking-[.2em] text-mint">
                  Platform walkthrough
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    "AI project diagnostic",
                    "Verified BEP appointment",
                    "Municipal tracker",
                    "Tender comparison",
                    "Construction claims + escrow",
                  ].map((item, i) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex size-7 items-center justify-center rounded-full bg-mint/15 text-xs text-mint">
                        {i + 1}
                      </span>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>
        <WorkflowTimeline stages={projectStages} />
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {roles.map(([title, text, Icon]) => (
            <Card key={title}>
              <Icon className="size-6 text-mint" />
              <CardTitle className="mt-4">{title}</CardTitle>
              <CardDescription>{text}</CardDescription>
            </Card>
          ))}
        </section>
        <AIOrchestratorBand />
        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <CheckCircle2 className="size-6 text-mint" />
            <CardTitle className="mt-4">Governed marketplace</CardTitle>
            <CardDescription>
              Clients appoint verified BEPs; clients do not directly hire
              freelancers.
            </CardDescription>
          </Card>
          <Card>
            <FileCheck2 className="size-6 text-mint" />
            <CardTitle className="mt-4">Compliance evidence</CardTitle>
            <CardDescription>
              Municipal, design and construction evidence is tracked against
              human sign-off gates.
            </CardDescription>
          </Card>
          <Card>
            <Bot className="size-6 text-mint" />
            <CardTitle className="mt-4">Logged AI assistance</CardTitle>
            <CardDescription>
              AI outputs move through draft, reviewed, approved or rejected
              states with audit entries.
            </CardDescription>
          </Card>
        </section>
      </main>
    </div>
  );
}
