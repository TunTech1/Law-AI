import { NextRequest, NextResponse } from "next/server";
import { getDocumentById } from "@/lib/data";

// GET /api/ai/sources?documentId=... — resolves a single citation back to
// its underlying verified document, for the "View in document" action.
export async function GET(req: NextRequest) {
  const documentId = req.nextUrl.searchParams.get("documentId");
  if (!documentId) {
    return NextResponse.json({ error: "Missing 'documentId'" }, { status: 400 });
  }
  const result = getDocumentById(documentId);
  if (!result) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }
  return NextResponse.json(result);
}
