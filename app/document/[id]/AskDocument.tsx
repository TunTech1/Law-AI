"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { CaseDocument } from "@/lib/types";
import { askDocument } from "@/lib/ai/mockAI";

const prompts = [
  "What is the court's reasoning?",
  "Summarize page 1-3",
  "What evidence was discussed?",
];

export default function AskDocument({
  doc,
  onJump,
}: {
  doc: CaseDocument;
  onJump: (index: number) => void;
}) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ answer: string; paragraphIndex: number | null } | null>(null);

  const ask = (q: string) => {
    if (!q.trim()) return;
    setInput(q);
    const r = askDocument(doc, q);
    setResult(r);
    if (r.paragraphIndex !== null) onJump(r.paragraphIndex);
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-4">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-primary" />
        <h3 className="font-display text-sm font-bold text-navy">Ask this document</h3>
      </div>
      <p className="text-xs text-muted">
        Answers use only the text of &ldquo;{doc.title}&rdquo; &mdash; nothing outside it.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex items-center gap-2 rounded-xl border border-line bg-bg px-3 py-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about this document..."
          className="min-w-0 flex-1 bg-transparent text-sm text-navy outline-none placeholder:text-muted"
        />
        <button type="submit" className="text-primary">
          <ArrowRight size={15} />
        </button>
      </form>

      <div className="flex flex-wrap gap-1.5">
        {prompts.map((p) => (
          <button
            key={p}
            onClick={() => ask(p)}
            className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted hover:border-primary/40 hover:text-primary"
          >
            {p}
          </button>
        ))}
      </div>

      {result && (
        <div className="trace-line ml-3 border-t border-line pt-3 text-sm leading-relaxed text-navy">
          {result.answer}
          {result.paragraphIndex !== null && (
            <p className="mt-1.5 text-[11px] font-medium text-primary">
              Jumped to paragraph {result.paragraphIndex + 1} below.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
