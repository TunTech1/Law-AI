export type DocType =
  | "Judgment"
  | "Motion"
  | "Affidavit"
  | "Submission"
  | "Exhibit"
  | "Order";

export interface CaseDocument {
  id: string;
  caseId: string;
  type: DocType;
  title: string;
  pages: number;
  filedDate: string;
  excerpt: string;
  fullText: string[]; // paragraphs, index = page-ish chunk
}

export interface Party {
  name: string;
  role: "Plaintiff" | "Defendant" | "Appellant" | "Respondent";
  counsel: string;
}

export interface LegalCase {
  id: string;
  name: string; // e.g. "Okafor v. Federal Republic"
  citation: string; // e.g. "(2019) LPELR-47231(CA)"
  court: string;
  judge: string;
  dateDecided: string;
  practiceArea: string[];
  parties: Party[];
  summary: string;
  keyPrinciples: string[];
  outcome: string;
  relatedCaseIds: string[];
  riskFlags: string[];
  documents: CaseDocument[];
}

export interface SourceRef {
  caseId: string;
  caseName: string;
  citation: string;
  court: string;
  documentId: string;
  documentType: DocType;
  page: number;
  excerpt: string;
  relevance: number; // 0-100
}

export interface AIAnswer {
  query: string;
  answer: string[]; // paragraphs
  sources: SourceRef[];
  noMatch?: boolean;
}
