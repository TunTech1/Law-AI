import { NextRequest, NextResponse } from "next/server";
import { askLegalAI, validateSourceGrounding } from "@/lib/ai/mockAI";

// POST /api/ai/query — synchronous grounded answer. In production this would
// call the model with retrieval-scoped context; here it queries the mock
// verified-document store so the contract is identical for a real backend.
export async function POST(req: NextRequest) {
  const { query } = await req.json();
  if (!query || typeof query !== "string") {
    return NextResponse.json({ error: "Missing 'query' string" }, { status: 400 });
  }
  const result = askLegalAI(query);
  if (!validateSourceGrounding(result.sources)) {
    return NextResponse.json(
      { error: "Source grounding validation failed" },
      { status: 500 }
    );
  }
  return NextResponse.json(result);
}
