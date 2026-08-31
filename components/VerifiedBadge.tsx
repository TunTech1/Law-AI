import { ShieldCheck } from "lucide-react";

export default function VerifiedBadge({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-verified/30 bg-verified-bg font-data font-medium uppercase tracking-wider text-verified ${
        small ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
      }`}
    >
      <ShieldCheck size={small ? 11 : 13} strokeWidth={2.5} />
      Verified source required
    </span>
  );
}
