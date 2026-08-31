# VERITAS — Verified Legal Research & AI Case Intelligence

A demo/pitch prototype for a legal research platform where every AI answer is
traceable to a real, verified document — never a hallucinated citation.

## Stack
Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Lucide icons

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000. (First build downloads Plus Jakarta Sans,
Inter and IBM Plex Mono from Google Fonts, so it needs an internet
connection the first time you build.)

## Pages
- `/` — landing page with dual search (standard + AI) and the "Ask VERITAS AI" section
- `/search` — standard search with filters, or AI Legal Search mode (toggle)
- `/case/[id]` — case detail with Overview / Documents / AI Analysis tabs
- `/document/[id]` — document viewer with an "Ask this document" sidebar
- `/dashboard` — VERITAS AI Assistant widget, recent queries, research paths

## Data & AI layer
All case, document, and citation data lives in `lib/data.ts` — a small
fictional database of Nigerian court cases. The AI layer in `lib/ai/mockAI.ts`
only ever answers from that database (`askLegalAI`, `askDocument`,
`validateSourceGrounding`); if nothing matches, it returns "No verified cases
found" rather than inventing an authority. Swap the functions in
`lib/ai/mockAI.ts` for real model + retrieval calls to wire up a production
backend — the API routes in `app/api/ai/*` already model that contract.
