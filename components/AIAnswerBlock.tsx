import { Sparkles, SearchX } from "lucide-react";

export default function AIAnswerBlock({
  text,
  isStreaming,
  hasRun,
  noMatch,
}: {
  text: string;
  isStreaming: boolean;
  hasRun: boolean;
  noMatch: boolean;
}) {
  if (!hasRun) {
    return (
      <div className="flex h-full min-h-[160px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line px-6 py-10 text-center">
        <Sparkles size={20} className="text-primary" />
        <p className="text-sm text-muted">
          Ask a legal question in natural language — Ja Law AI will answer
          only from documents verified in the database.
        </p>
      </div>
    );
  }

  if (noMatch && !isStreaming) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-flag/30 bg-flag-bg px-6 py-10 text-center">
        <SearchX size={20} className="text-flag" />
        <p className="font-display text-sm font-semibold text-flag">
          No verified cases found in the database for this query.
        </p>
        <p className="max-w-sm text-xs text-muted">
          Ja Law AI never generates an authority that isn&rsquo;t backed by a
          document in the verified store. Try rephrasing, or browse the full
          case index.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles size={15} className="text-primary" />
        <span className="font-display text-xs font-bold uppercase tracking-wider text-primary">
          Direct answer
        </span>
      </div>
      <div className="space-y-3 text-[15px] leading-relaxed text-navy">
        {text.split("\n\n").map((para, i) => (
          <p key={i}>
            {para}
            {isStreaming && i === text.split("\n\n").length - 1 && (
              <span className="caret ml-0.5 inline-block h-4 w-[2px] -translate-y-0.5 bg-primary align-middle" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
