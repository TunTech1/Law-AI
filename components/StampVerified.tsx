import { ShieldCheck } from "lucide-react";

export default function StampVerified() {
  return (
    <div className="stamp inline-flex items-center gap-2 rounded-lg px-4 py-2 font-data text-xs font-bold uppercase">
      <ShieldCheck size={15} />
      Document-verified · No hallucinated citations
    </div>
  );
}
