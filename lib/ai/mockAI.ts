import { cases } from "../data";
import { AIAnswer, SourceRef, LegalCase, CaseDocument } from "../types";

interface Topic {
  keywords: string[];
  caseIds: string[];
  answer: string[];
}

// Each topic is hand-grounded to real cases in lib/data.ts. This is the
// stand-in for a real retrieval-augmented generation pipeline: in production,
// /lib/ai/askLegalAI would run semantic search over the verified document
// store and pass only matched excerpts to the model, with generation
// constrained to those excerpts (see validateSourceGrounding below).
const topics: Topic[] = [
  {
    keywords: ["electronic evidence", "whatsapp", "sms", "chat", "digital evidence", "computer-generated", "section 84"],
    caseIds: ["okafor-v-frn", "adeyemi-v-state"],
    answer: [
      "Nigerian courts have taken a consistent but fact-sensitive approach to electronic evidence. Where a party tenders a secondary printout — such as a WhatsApp export — without a certificate of compliance under Section 84 of the Evidence Act 2011, that evidence is liable to be excluded, even if it appears highly probative.",
      "The requirement is applied less strictly where the original device is produced in court and its author gives direct oral evidence, since the foundational concern behind Section 84 is authenticity rather than form.",
      "In practice, exclusion of improperly certified electronic evidence does not automatically defeat a case: courts have upheld convictions or findings where other independently admissible evidence was sufficient.",
    ],
  },
  {
    keywords: ["affidavit", "procedural defect", "jurat", "commissioned", "struck out", "reject"],
    caseIds: ["zenith-v-okeke", "okafor-v-frn"],
    answer: [
      "Yes. An affidavit that lacks a valid jurat, or was not sworn before a person authorised to administer oaths, is treated as incompetent and will be struck out or discountenanced, regardless of how relevant its content is.",
      "This is not treated as a curable irregularity — courts have declined to accept oral submissions from counsel as a substitute for a properly commissioned affidavit.",
      "Rejection of a defective affidavit does not necessarily end the matter for the party who filed it: if the same facts can be proved through other admissible oral or documentary evidence, the underlying claim can still succeed.",
    ],
  },
  {
    keywords: ["contract breach", "specific performance", "damages", "remedies", "hadley"],
    caseIds: ["chukwu-v-fbn"],
    answer: [
      "For breach of a purely commercial contract, damages remain the default remedy. Specific performance is an equitable remedy and is only granted where damages would be inadequate — typically because the subject matter is unique.",
      "Quantum is assessed on the ordinary contractual measure: losses that flow naturally from the breach, or that were reasonably within both parties' contemplation at the time of contracting.",
      "A claim for specific performance of a facility agreement to pay money is unlikely to succeed, since a sum of money is fungible and damages can ordinarily restore the claimant to their original position.",
    ],
  },
  {
    keywords: ["bail", "bail condition", "capital offence", "custody", "sureties"],
    caseIds: ["musa-v-state-bail"],
    answer: [
      "Bail is refused as of right for capital offences, save in exceptional circumstances — the Supreme Court has recognised undue delay in prosecution attributable to the State as one such circumstance.",
      "Where bail is granted, courts weigh the gravity of the charge, risk of flight, risk of interference with witnesses, and the accused's antecedents in setting conditions.",
      "Conditions must remain reasonable relative to the accused's means; sureties and sums fixed so high that they amount to a de facto denial of bail are not permitted.",
    ],
  },
  {
    keywords: ["negligence", "duty of care", "donoghue", "neighbour principle", "oil spill", "tort"],
    caseIds: ["eze-v-nnpc-negligence"],
    answer: [
      "Nigerian courts apply the neighbour principle from Donoghue v. Stevenson: a duty of care arises where harm to the claimant was a reasonably foreseeable consequence of the defendant's conduct.",
      "To succeed, a claimant must establish, on the balance of probabilities, that a duty of care existed, that it was breached, and that damage resulted from the breach.",
      "Where an operator seeks to rely on a statutory defence such as third-party sabotage, it carries the evidential burden of proving that defence with more than a bare assertion.",
    ],
  },
  {
    keywords: ["fraud", "false pretence", "advance fee"],
    caseIds: ["okafor-v-frn"],
    answer: [
      "In fraud prosecutions, courts have been willing to affirm convictions even where one strand of digital evidence is excluded for want of certification, provided independent evidence — such as certified bank ledgers or direct witness testimony — is sufficient to sustain the charge.",
    ],
  },
];

function scoreCase(c: LegalCase): number {
  return c.riskFlags.length > 0 ? 1 : 0;
}

function excerptFor(doc: CaseDocument): { page: number; text: string } {
  const idx = Math.max(0, Math.min(doc.fullText.length - 1, 2));
  return { page: idx + 1, text: doc.fullText[idx] ?? doc.excerpt };
}

function sourcesForCase(c: LegalCase, relevanceBase: number): SourceRef[] {
  return c.documents.slice(0, 1).map((doc) => {
    const { page, text } = excerptFor(doc);
    return {
      caseId: c.id,
      caseName: c.name,
      citation: c.citation,
      court: c.court,
      documentId: doc.id,
      documentType: doc.type,
      page,
      excerpt: text,
      relevance: Math.max(60, relevanceBase - scoreCase(c) * 3),
    };
  });
}

/**
 * askLegalAI(query) — the single entry point the UI calls.
 * Matches the query against topics grounded in the verified database only.
 * Never fabricates a case: if no topic matches, returns noMatch: true.
 */
export function askLegalAI(query: string): AIAnswer {
  const q = query.toLowerCase();
  let best: Topic | null = null;
  let bestScore = 0;

  for (const topic of topics) {
    const score = topic.keywords.filter((k) => q.includes(k)).length;
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }

  if (!best) {
    return {
      query,
      answer: [],
      sources: [],
      noMatch: true,
    };
  }

  const matchedCases = best.caseIds
    .map((id) => cases.find((c) => c.id === id))
    .filter((c): c is LegalCase => Boolean(c));

  const sources = matchedCases.flatMap((c, i) => sourcesForCase(c, 96 - i * 8));

  return {
    query,
    answer: best.answer,
    sources,
  };
}

/** validateSourceGrounding — every source cited must resolve to a real document in the store. */
export function validateSourceGrounding(sources: SourceRef[]): boolean {
  return sources.every((s) => {
    const c = cases.find((c) => c.id === s.caseId);
    return Boolean(c && c.documents.some((d) => d.id === s.documentId));
  });
}

export function getCitedSources(answer: AIAnswer): SourceRef[] {
  return answer.sources;
}

export function mapResponseToDocuments(answer: AIAnswer) {
  return answer.sources.map((s) => ({
    documentId: s.documentId,
    caseId: s.caseId,
    page: s.page,
  }));
}

/**
 * askDocument — scoped Q&A that answers ONLY from the paragraphs of a single
 * document, for the "Ask this document" sidebar in the document viewer.
 */
export function askDocument(doc: CaseDocument, query: string): { answer: string; paragraphIndex: number | null } {
  const q = query.toLowerCase();

  if (q.includes("summarize") || q.includes("summary")) {
    const range = doc.fullText.slice(0, 3).join(" ");
    return { answer: range, paragraphIndex: 0 };
  }

  if (q.includes("reasoning") || q.includes("why") || q.includes("held")) {
    const idx = doc.fullText.findIndex((p) => /trite|find|hold|principle|reason/i.test(p));
    if (idx >= 0) return { answer: doc.fullText[idx], paragraphIndex: idx };
  }

  if (q.includes("evidence") || q.includes("reject")) {
    const idx = doc.fullText.findIndex((p) => /evidence|exhibit|affidavit|excluded|discountenance/i.test(p));
    if (idx >= 0) return { answer: doc.fullText[idx], paragraphIndex: idx };
  }

  // Fallback: best keyword-overlap paragraph within this document only.
  const words = q.split(/\W+/).filter((w) => w.length > 3);
  let bestIdx = -1;
  let bestScore = 0;
  doc.fullText.forEach((p, i) => {
    const score = words.filter((w) => p.toLowerCase().includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      bestIdx = i;
    }
  });

  if (bestIdx >= 0) {
    return { answer: doc.fullText[bestIdx], paragraphIndex: bestIdx };
  }

  return {
    answer:
      "This document does not appear to address that directly. Try asking about its reasoning, the evidence discussed, or a page range to summarize.",
    paragraphIndex: null,
  };
}

export const suggestedPrompts = [
  "What did Nigerian courts say about admissibility of electronic evidence in fraud cases?",
  "Can affidavit evidence be rejected for procedural defects?",
  "Find cases about contract breach remedies",
  "Summarize Supreme Court rulings on bail conditions",
  "What is the test for negligence in Nigerian law?",
];
