import { NextRequest } from "next/server";
import { askLegalAI } from "@/lib/ai/mockAI";

// POST /api/ai/stream — token-streamed variant of the same grounded answer,
// so the client UI can render a typing effect while sources load progressively.
export async function POST(req: NextRequest) {
  const { query } = await req.json();
  const result = askLegalAI(query as string);
  const text = result.noMatch
    ? "No verified cases found in the database for this query."
    : result.answer.join("\n\n");

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const words = text.split(" ");
      let i = 0;
      const tick = () => {
        if (i >= words.length) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ done: true, sources: result.sources })}\n\n`)
          );
          controller.close();
          return;
        }
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ token: words[i] + " " })}\n\n`)
        );
        i++;
        setTimeout(tick, 18);
      };
      tick();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
