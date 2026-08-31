"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { CaseDocument, LegalCase } from "@/lib/types";
import AskDocument from "./AskDocument";
import VerifiedBadge from "@/components/VerifiedBadge";

export default function DocumentViewerClient({
  doc,
  legalCase,
}: {
  doc: CaseDocument;
  legalCase: LegalCase;
}) {
  const [highlight, setHighlight] = useState<number | null>(null);
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  const jump = (index: number) => {
    setHighlight(index);
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
      <div className="rounded-2xl border border-line bg-white">
        <div className="paper-edge flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-primary" />
            <div>
              <p className="font-display text-sm font-bold text-navy">{doc.title}</p>
              <p className="text-xs text-muted">
                {doc.type} · {doc.pages} pages
              </p>
            </div>
          </div>
          <VerifiedBadge small />
        </div>
        <div className="flex flex-col gap-4 px-6 py-6">
          {doc.fullText.map((para, i) => (
            <p
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`rounded-lg px-3 py-2 text-[15px] leading-relaxed text-navy transition-colors ${
                highlight === i ? "bg-light-blue ring-1 ring-primary/40" : ""
              }`}
            >
              <span className="mr-2 font-data text-xs text-muted">[{i + 1}]</span>
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href={`/case/${legalCase.id}`}
          className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-navy"
        >
          <ArrowLeft size={14} />
          Back to {legalCase.name}
        </Link>
        <AskDocument doc={doc} onJump={jump} />
      </div>
    </div>
  );
}
