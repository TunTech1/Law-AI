"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, ArrowUpRight, AlertTriangle, Sparkles } from "lucide-react";
import { LegalCase } from "@/lib/types";
import { cases } from "@/lib/data";

type Tab = "overview" | "documents" | "ai-analysis";

export default function CaseTabs({ legalCase }: { legalCase: LegalCase }) {
  const [tab, setTab] = useState<Tab>("overview");
  const related = legalCase.relatedCaseIds
    .map((id) => cases.find((c) => c.id === id))
    .filter((c): c is LegalCase => Boolean(c));

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "documents", label: "Documents" },
    { id: "ai-analysis", label: "AI Analysis" },
  ];

  return (
    <div>
      <div className="mb-6 flex gap-1 rounded-xl border border-line bg-white p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              tab === t.id ? "bg-navy text-white" : "text-muted hover:text-navy"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="mb-2 font-display text-sm font-bold uppercase tracking-wide text-muted">
                Summary
              </h2>
              <p className="text-[15px] leading-relaxed text-navy">{legalCase.summary}</p>
            </div>
            <div>
              <h2 className="mb-2 font-display text-sm font-bold uppercase tracking-wide text-muted">
                Key legal principles
              </h2>
              <ul className="flex flex-col gap-2">
                {legalCase.keyPrinciples.map((p, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-line bg-white px-4 py-3 text-sm leading-relaxed text-navy"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-display text-sm font-bold uppercase tracking-wide text-muted">
                Outcome
              </h2>
              <p className="rounded-xl border border-verified/30 bg-verified-bg px-4 py-3 text-sm leading-relaxed text-navy">
                {legalCase.outcome}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="mb-2 font-display text-sm font-bold uppercase tracking-wide text-muted">
                Parties
              </h2>
              <div className="flex flex-col gap-2">
                {legalCase.parties.map((p) => (
                  <div key={p.name} className="rounded-xl border border-line bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-navy">{p.name}</p>
                    <p className="text-xs text-muted">
                      {p.role} · counsel: {p.counsel}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div>
                <h2 className="mb-2 font-display text-sm font-bold uppercase tracking-wide text-muted">
                  Related precedents
                </h2>
                <div className="flex flex-col gap-2">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/case/${r.id}`}
                      className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy hover:border-primary/40"
                    >
                      {r.name}
                      <ArrowUpRight size={14} className="text-muted" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {legalCase.riskFlags.length > 0 && (
              <div>
                <h2 className="mb-2 flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-flag">
                  <AlertTriangle size={13} />
                  Risk flags
                </h2>
                <div className="flex flex-col gap-2">
                  {legalCase.riskFlags.map((f, i) => (
                    <p
                      key={i}
                      className="rounded-xl border border-flag/30 bg-flag-bg px-4 py-3 text-xs leading-relaxed text-flag"
                    >
                      {f}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "documents" && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {legalCase.documents.map((doc) => (
            <Link
              key={doc.id}
              href={`/document/${doc.id}`}
              className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-light-blue text-primary">
                <FileText size={16} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-navy">{doc.title}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {doc.type} · {doc.pages} pages · filed {doc.filedDate}
                </p>
                <p className="mt-1 line-clamp-2 text-xs italic text-muted">
                  &ldquo;{doc.excerpt}&rdquo;
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {tab === "ai-analysis" && (
        <div className="rounded-2xl border border-line bg-white p-6">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={15} className="text-primary" />
            <h2 className="font-display text-sm font-bold text-navy">
              AI-generated case analysis
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
                Case summary
              </h3>
              <p className="text-sm leading-relaxed text-navy">{legalCase.summary}</p>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
                Outcome explanation
              </h3>
              <p className="text-sm leading-relaxed text-navy">{legalCase.outcome}</p>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
                Key legal principles
              </h3>
              <ul className="flex flex-col gap-2">
                {legalCase.keyPrinciples.map((p, i) => {
                  const doc = legalCase.documents[0];
                  return (
                    <li key={i} className="text-sm leading-relaxed text-navy">
                      {p}
                      {doc && (
                        <Link
                          href={`/document/${doc.id}`}
                          className="ml-1.5 inline-flex items-center gap-0.5 text-xs font-semibold text-primary hover:text-deep-blue"
                        >
                          view paragraph
                          <ArrowUpRight size={11} />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
                Risk flags
              </h3>
              {legalCase.riskFlags.length === 0 ? (
                <p className="text-sm text-muted">No risk flags for this authority.</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {legalCase.riskFlags.map((f, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-flag/30 bg-flag-bg px-3 py-2 text-xs text-flag"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
