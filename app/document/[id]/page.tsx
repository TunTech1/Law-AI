import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDocumentById, cases } from "@/lib/data";
import DocumentViewerClient from "./DocumentViewerClient";

export function generateStaticParams() {
  return cases.flatMap((c) => c.documents.map((d) => ({ id: d.id })));
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = getDocumentById(id);
  if (!result) notFound();
  const { doc, legalCase } = result;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <DocumentViewerClient doc={doc} legalCase={legalCase} />
      </main>
      <Footer />
    </>
  );
}
