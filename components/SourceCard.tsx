"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, FileText, ArrowUpRight } from "lucide-react";
import { SourceRef } from "@/lib/types";
import RelevanceMeter from "./RelevanceMeter";

export default function SourceCard({ source, index }: { source: SourceRef; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <div className="flex min-w-0 items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-light-blue font-data text-[11px] font-semibold text-primary">
            {index + 1}
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold text-navy">
              {source.caseName}
            </p>
            <p className="truncate font-data text-xs text-muted">
              {source.citation} · {source.court}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <RelevanceMeter score={source.relevance} />
          <ChevronDown
            size={16}
            className={`text-muted transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {open && (
        <div className="trace-line ml-[42px] border-t border-line px-4 py-3 pl-4">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted">
            <FileText size={13} />
            <span>
              {source.documentType} · page {source.page}
            </span>
          </div>
          <blockquote className="border-l-2 border-primary/40 bg-light-blue/60 px-3 py-2 text-[13px] italic leading-relaxed text-navy">
            &ldquo;{source.excerpt}&rdquo;
          </blockquote>
          <Link
            href={`/document/${source.documentId}?page=${source.page}`}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-deep-blue"
          >
            View in document
            <ArrowUpRight size={13} />
          </Link>
        </div>
      )}
    </div>
  );
}
