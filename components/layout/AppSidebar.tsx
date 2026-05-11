import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Building2,
  HardHat,
  Home,
  Landmark,
  Library,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
const sections = [
  {
    title: "Roles",
    items: [
      ["Client", "/app/client", Home],
      ["BEP OS", "/app/bep", Users],
      ["Contractor", "/app/contractor", HardHat],
      ["Freelancer", "/app/freelancer", Building2],
      ["Admin", "/app/admin", Landmark],
    ],
  },
  {
    title: "Shared",
    items: [
      ["AI orchestrator", "/app/ai-orchestrator", Brain],
      ["Messages", "/app/messages", MessageSquare],
      ["Knowledge", "/app/knowledge", Library],
      ["Settings", "/app/settings", Settings],
    ],
  },
] as const;
export function AppSidebar() {
  return (
    <aside className="border-r border-mint/10 bg-graphite/80 p-4 lg:sticky lg:top-0 lg:h-screen">
      <Link href="/app" className="mb-6 flex items-center gap-3">
        <Image src="/logo.svg" alt="Architex" width={34} height={34} />
        <div>
          <p className="font-semibold">Architex</p>
          <p className="text-xs text-slate-400">Workflow OS</p>
        </div>
      </Link>
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          <p className="mb-2 text-xs uppercase tracking-[.2em] text-slate-500">
            {section.title}
          </p>
          <div className="space-y-1">
            {section.items.map(([label, href, Icon]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-mint/10 hover:text-mint"
              >
                <Icon className="size-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
