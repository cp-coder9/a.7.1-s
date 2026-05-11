import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
const links = [
  ["How it works", "/how-it-works"],
  ["Clients", "/for-clients"],
  ["Professionals", "/for-professionals"],
  ["Contractors", "/for-contractors"],
  ["AI workflows", "/ai-workflows"],
  ["Knowledge", "/knowledge"],
];
export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-mint/10 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Architex origami bird"
            width={38}
            height={38}
          />
          <span className="text-lg font-semibold tracking-wide">Architex</span>
        </Link>
        <nav className="hidden gap-5 text-sm text-slate-300 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-mint">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink
            href="/login"
            variant="secondary"
            className="hidden px-4 py-2 sm:inline-flex"
          >
            Login
          </ButtonLink>
          <ButtonLink href="/register" className="px-4 py-2">
            Start
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
