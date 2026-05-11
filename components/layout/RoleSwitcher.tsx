import Link from "next/link";
const roleLinks = [
  ["Client", "/app/client"],
  ["BEP", "/app/bep"],
  ["Contractor", "/app/contractor"],
  ["Freelancer", "/app/freelancer"],
  ["Admin", "/app/admin"],
];
export function RoleSwitcher() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
      {roleLinks.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className="rounded-xl border border-mint/15 bg-white/[0.04] px-3 py-2 text-center text-sm text-slate-200 hover:border-mint/40 hover:text-mint"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
