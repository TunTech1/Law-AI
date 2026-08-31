import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerifiedBadge from "@/components/VerifiedBadge";
import { getCaseById, cases } from "@/lib/data";
import { Gavel, Calendar, User } from "lucide-react";
import CaseTabs from "./CaseTabs";

export function generateStaticParams() {
  return cases.map((c) => ({ id: c.id }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const legalCase = getCaseById(id);
  if (!legalCase) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 border-b border-line pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <VerifiedBadge small />
            {legalCase.practiceArea.map((a) => (
              <span
                key={a}
                className="rounded-full bg-light-blue px-2 py-0.5 text-[11px] font-medium text-primary"
              >
                {a}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight text-navy">
            {legalCase.name}
          </h1>
          <p className="mt-1 font-data text-sm text-muted">{legalCase.citation}</p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Gavel size={13} />
              {legalCase.court}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={13} />
              {legalCase.judge}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {legalCase.dateDecided}
            </span>
          </div>
        </div>

        <CaseTabs legalCase={legalCase} />
      </main>
      <Footer />
    </>
  );
}
