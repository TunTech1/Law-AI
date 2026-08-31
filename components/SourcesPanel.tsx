import { SourceRef } from "@/lib/types";
import SourceCard from "./SourceCard";
import { Link2 } from "lucide-react";

export default function SourcesPanel({
  sources,
  loading = false,
}: {
  sources: SourceRef[];
  loading?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-bg p-4">
      <div className="mb-3 flex items-center gap-2 px-1">
        <Link2 size={14} className="text-primary" />
        <h3 className="font-display text-sm font-bold text-navy">
          Linked authorities
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        {loading &&
          [0, 1].map((i) => (
            <div
              key={i}
              className="h-14 animate-pulse rounded-xl border border-line bg-white"
            />
          ))}
        {!loading && sources.length === 0 && (
          <p className="px-1 text-sm text-muted">
            Sources will appear here once Ja Law AI finds a match in the
            verified database.
          </p>
        )}
        {!loading &&
          sources.map((s, i) => (
            <SourceCard key={s.documentId + i} source={s} index={i} />
          ))}
      </div>
    </div>
  );
}
