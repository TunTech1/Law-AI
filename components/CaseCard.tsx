import Link from "next/link";
import { Gavel, ArrowUpRight } from "lucide-react";
import { LegalCase } from "@/lib/types";
import VerifiedBadge from "./VerifiedBadge";

export default function CaseCard({ legalCase }: { legalCase: LegalCase }) {
  return (
    <Link
      href={`/case/${legalCase.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-[15px] font-bold leading-snug text-navy group-hover:text-primary">
            {legalCase.name}
          </h3>
          <p className="mt-1 font-data text-xs text-muted">{legalCase.citation}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-muted transition-colors group-hover:text-primary"
        />
      </div>

      <p className="line-clamp-2 text-sm leading-relaxed text-muted">
        {legalCase.summary}
      </p>

      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
        <Gavel size={12} />
        <span>{legalCase.court}</span>
        <span className="text-line">·</span>
        <span>{legalCase.dateDecided}</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {legalCase.practiceArea.map((a) => (
          <span
            key={a}
            className="rounded-full bg-light-blue px-2 py-0.5 text-[11px] font-medium text-primary"
          >
            {a}
          </span>
        ))}
      </div>

      <div className="pt-1">
        <VerifiedBadge small />
      </div>
    </Link>
  );
}
