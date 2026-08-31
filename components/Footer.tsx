import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-display text-sm font-bold text-navy">
              <ShieldCheck size={16} className="text-verified" />
              Ja Law AI disclaimer
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Ja Law AI only responds using verified documents in the platform
              database. It does not generate independent legal authority, and
              this site is a demo prototype using fictional sample case data —
              not a source of legal advice.
            </p>
          </div>
          <div className="flex gap-10 text-sm text-muted">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-navy">Product</span>
              <a href="/search" className="hover:text-navy">Search</a>
              <a href="/dashboard" className="hover:text-navy">Dashboard</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-navy">Sample record</span>
              <a href="/case/okafor-v-frn" className="hover:text-navy">Okafor v. FRN</a>
              <a href="/document/okafor-judgment" className="hover:text-navy">Judgment viewer</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-6 text-xs text-muted">
          © 2026 Ja Law. Pitch prototype — all cases and documents are fictional sample data.
        </div>
      </div>
    </footer>
  );
}
