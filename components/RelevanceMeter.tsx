export default function RelevanceMeter({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1 w-14 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="font-data text-[11px] text-muted">{score}%</span>
    </div>
  );
}
