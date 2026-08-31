import Link from "next/link";
import { Scale } from "lucide-react";

const links = [
  { href: "/search", label: "Search" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/case/okafor-v-frn", label: "Sample case" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <Scale size={17} strokeWidth={2.25} />
          </span>
          <span className="font-display text-[17px] font-bold tracking-tight text-navy">
            Ja Law
          </span>
          <span className="hidden rounded-full bg-light-blue px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary sm:inline">
            Demo
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden text-sm font-medium text-muted transition-colors hover:text-navy sm:inline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/search"
            className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Open research
          </Link>
        </nav>
      </div>
    </header>
  );
}
