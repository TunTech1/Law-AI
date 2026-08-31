"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModeToggle, { SearchMode } from "@/components/SearchModeToggle";
import AILegalSearch from "@/components/AILegalSearch";
import CaseCard from "@/components/CaseCard";
import { cases, searchCases } from "@/lib/data";

const allAreas = Array.from(new Set(cases.flatMap((c) => c.practiceArea))).sort();

function SearchPageInner() {
  const params = useSearchParams();
  const initialMode = (params.get("mode") as SearchMode) || "standard";
  const [mode, setMode] = useState<SearchMode>(initialMode);
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<string | null>(null);

  const results = useMemo(() => {
    let r = searchCases(query);
    if (area) r = r.filter((c) => c.practiceArea.includes(area));
    return r;
  }, [query, area]);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-navy">
              Legal research
            </h1>
            <p className="mt-1 text-sm text-muted">
              Search the verified database, or ask VERITAS AI directly.
            </p>
          </div>
          <SearchModeToggle mode={mode} onChange={setMode} />
        </div>

        {mode === "standard" ? (
          <>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-line bg-white px-3 py-2.5">
                <Search size={15} className="text-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search case name, citation, judge..."
                  className="flex-1 bg-transparent text-sm text-navy outline-none placeholder:text-muted"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto">
                <SlidersHorizontal size={14} className="shrink-0 text-muted" />
                <button
                  onClick={() => setArea(null)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    area === null
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white text-muted hover:text-navy"
                  }`}
                >
                  All areas
                </button>
                {allAreas.map((a) => (
                  <button
                    key={a}
                    onClick={() => setArea(a)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      area === a
                        ? "border-primary bg-primary text-white"
                        : "border-line bg-white text-muted hover:text-navy"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <p className="mb-4 text-xs text-muted">
              {results.length} verified {results.length === 1 ? "case" : "cases"}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {results.map((c) => (
                <CaseCard key={c.id} legalCase={c} />
              ))}
              {results.length === 0 && (
                <div className="col-span-full rounded-2xl border border-dashed border-line py-16 text-center text-sm text-muted">
                  No verified cases match that search.
                </div>
              )}
            </div>
          </>
        ) : (
          <AILegalSearch />
        )}
      </main>
      <Footer />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchPageInner />
    </Suspense>
  );
}
