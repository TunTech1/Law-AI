"use client";

import { Search, Zap } from "lucide-react";

export type SearchMode = "standard" | "ai";

export default function SearchModeToggle({
  mode,
  onChange,
}: {
  mode: SearchMode;
  onChange: (m: SearchMode) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-line bg-white p-1">
      <button
        onClick={() => onChange("standard")}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
          mode === "standard" ? "bg-navy text-white" : "text-muted hover:text-navy"
        }`}
      >
        <Search size={13} />
        Standard
      </button>
      <button
        onClick={() => onChange("ai")}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
          mode === "ai" ? "bg-primary text-white" : "text-muted hover:text-navy"
        }`}
      >
        <Zap size={13} />
        AI Legal Search
      </button>
    </div>
  );
}
