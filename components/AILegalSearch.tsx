"use client";

import { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { useAIStream } from "@/lib/hooks/useAIStream";
import { suggestedPrompts } from "@/lib/ai/mockAI";
import AIAnswerBlock from "./AIAnswerBlock";
import SourcesPanel from "./SourcesPanel";
import VerifiedBadge from "./VerifiedBadge";

export default function AILegalSearch({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [input, setInput] = useState("");
  const { text, sources, isStreaming, hasRun, noMatch, ask } = useAIStream();

  const submit = (q: string) => {
    if (!q.trim()) return;
    setInput(q);
    ask(q);
  };

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="flex items-center gap-2 rounded-2xl border-2 border-primary/20 bg-white p-2 shadow-sm focus-within:border-primary/50"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
          <Zap size={16} />
        </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a legal question in natural language..."
          className="min-w-0 flex-1 bg-transparent px-1 py-2 text-[15px] text-navy outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="flex shrink-0 items-center gap-1.5 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          Ask Ja Law AI
          <ArrowRight size={14} />
        </button>
      </form>

      {!hasRun && (
        <div className="flex flex-wrap gap-2">
          {suggestedPrompts.slice(0, compact ? 3 : 5).map((p) => (
            <button
              key={p}
              onClick={() => submit(p)}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "" : "lg:grid-cols-[1.4fr_1fr]"}`}>
        <AIAnswerBlock text={text} isStreaming={isStreaming} hasRun={hasRun} noMatch={noMatch} />
        {hasRun && !noMatch && (
          <SourcesPanel sources={sources} loading={isStreaming && sources.length === 0} />
        )}
      </div>

      {hasRun && !noMatch && (
        <div className="flex justify-end">
          <VerifiedBadge small />
        </div>
      )}
    </div>
  );
}
