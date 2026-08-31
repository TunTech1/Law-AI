"use client";

import { useCallback, useRef, useState } from "react";
import { SourceRef } from "@/lib/types";

interface StreamState {
  text: string;
  sources: SourceRef[];
  isStreaming: boolean;
  noMatch: boolean;
  hasRun: boolean;
}

export function useAIStream() {
  const [state, setState] = useState<StreamState>({
    text: "",
    sources: [],
    isStreaming: false,
    noMatch: false,
    hasRun: false,
  });
  const controllerRef = useRef<AbortController | null>(null);

  const ask = useCallback(async (query: string) => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setState({ text: "", sources: [], isStreaming: true, noMatch: false, hasRun: true });

    const res = await fetch("/api/ai/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      signal: controller.signal,
    });

    if (!res.body) return;
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() ?? "";
      for (const part of parts) {
        if (!part.startsWith("data: ")) continue;
        const payload = JSON.parse(part.slice(6));
        if (payload.token) {
          setState((s) => ({ ...s, text: s.text + payload.token }));
        }
        if (payload.done) {
          setState((s) => ({
            ...s,
            isStreaming: false,
            sources: payload.sources ?? [],
            noMatch: s.text.trim().startsWith("No verified cases"),
          }));
        }
      }
    }
  }, []);

  return { ...state, ask };
}
