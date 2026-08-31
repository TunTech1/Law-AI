import Link from "next/link";
import { FileSearch } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <FileSearch size={28} className="text-primary" />
      <h1 className="font-display text-2xl font-bold text-navy">Not found in the verified database</h1>
      <p className="max-w-sm text-sm text-muted">
        This case or document doesn&rsquo;t exist in VERITAS&rsquo;s demo database.
      </p>
      <Link href="/" className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white">
        Back home
      </Link>
    </main>
  );
}
