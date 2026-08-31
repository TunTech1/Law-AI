"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, FileText, Clock, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/lib/data";
import { suggestedPrompts } from "@/lib/ai/mockAI";

const recentQueries = [
  { q: "What did Nigerian courts say about admissibility of electronic evidence in fraud cases?", time: "2 hours ago", resultCount: 2 },
  { q: "Can affidavit evidence be rejected for procedural defects?", time: "Yesterday", resultCount: 2 },
  { q: "What is the test for negligence in Nigerian law?", time: "3 days ago", resultCount: 1 },
];

const researchPaths = [
  { title: "Build out an evidence-admissibility brief", body: "Okafor v. FRN and Adeyemi v. State give contrasting outcomes on Section 84 certification.", href: "/case/okafor-v-frn" },
  { title: "Review contract remedies precedent", body: "Chukwu v. First Merchant Bank sets the test for specific performance vs. damages.", href: "/case/chukwu-v-fbn" },
  { title: "Check bail conditions authority", body: "Musa v. State is the current Supreme Court position on delay as an exceptional circumstance.", href: "/case/musa-v-state-bail" },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="font-display text-2xl font-bold text-navy">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          Your research activity across the verified database.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: "Verified cases", value: cases.length, icon: FileText },
            { label: "Documents indexed", value: cases.reduce((n, c) => n + c.documents.length, 0), icon: TrendingUp },
            { label: "AI queries this week", value: recentQueries.length, icon: Sparkles },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-line bg-white p-5">
              <Icon size={16} className="text-primary" />
              <p className="mt-3 font-display text-2xl font-bold text-navy">{value}</p>
              <p className="text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* VERITAS AI Assistant widget */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                <h2 className="font-display text-base font-bold text-navy">
                  VERITAS AI Assistant
                </h2>
              </div>
              <Link
                href="/search?mode=ai"
                className="text-xs font-semibold text-primary hover:text-deep-blue"
              >
                New query
              </Link>
            </div>

            <h3 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted">
              <Clock size={12} />
              Recent AI queries
            </h3>
            <div className="mb-6 flex flex-col gap-2">
              {recentQueries.map((r) => (
                <Link
                  key={r.q}
                  href={`/search?mode=ai`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 hover:border-primary/40"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm text-navy">{r.q}</p>
                    <p className="text-xs text-muted">
                      {r.time} · {r.resultCount} linked authorities
                    </p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 text-muted" />
                </Link>
              ))}
            </div>

            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
              Suggested research paths
            </h3>
            <div className="flex flex-col gap-2">
              {researchPaths.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group flex items-center justify-between gap-3 rounded-xl bg-light-blue/60 px-4 py-3 hover:bg-light-blue"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy">{p.title}</p>
                    <p className="mt-0.5 text-xs text-muted">{p.body}</p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Continue
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick prompts + recently viewed cases */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-line bg-white p-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">
                Try asking
              </h3>
              <div className="flex flex-col gap-2">
                {suggestedPrompts.map((p) => (
                  <Link
                    key={p}
                    href={`/search?mode=ai`}
                    className="rounded-lg border border-line px-3 py-2 text-xs text-muted hover:border-primary/40 hover:text-primary"
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 font-display text-base font-bold text-navy">
            Recently added to the verified database
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cases.slice(0, 3).map((c) => (
              <CaseCard key={c.id} legalCase={c} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
