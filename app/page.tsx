import Link from "next/link";
import { ShieldCheck, Zap, FileSearch, Link2, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StampVerified from "@/components/StampVerified";
import AILegalSearch from "@/components/AILegalSearch";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="border-b border-line bg-gradient-to-b from-light-blue/60 to-bg px-6 pb-16 pt-16 sm:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 flex justify-center animate-rise">
              <StampVerified />
            </div>
            <h1
              className="animate-rise font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              If the document isn&rsquo;t in the database,
              <br className="hidden sm:block" /> it isn&rsquo;t a verified source.
            </h1>
            <p
              className="animate-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "160ms" }}
            >
              Ja Law is a controlled legal research platform with a native AI
              reasoning layer &mdash; ChatGPT-speed answers, every claim traceable
              to a real, verified case document.
            </p>

            <div
              className="animate-rise mx-auto mt-10 max-w-2xl rounded-2xl border border-line bg-white p-2 text-left shadow-sm"
              style={{ animationDelay: "220ms" }}
            >
              <div className="flex items-center gap-2 border-b border-line px-3 py-2">
                <Search size={14} className="text-muted" />
                <input
                  readOnly
                  placeholder="Search case name, citation, judge..."
                  className="flex-1 bg-transparent py-1 text-sm text-navy outline-none placeholder:text-muted"
                />
                <Link
                  href="/search"
                  className="rounded-lg bg-bg px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-line"
                >
                  Standard search
                </Link>
              </div>
              <div className="flex items-center gap-2 px-3 py-2">
                <Zap size={14} className="text-primary" />
                <input
                  readOnly
                  placeholder="Ask a legal question in natural language..."
                  className="flex-1 bg-transparent py-1 text-sm text-navy outline-none placeholder:text-muted"
                />
                <Link
                  href="/search?mode=ai"
                  className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-deep-blue"
                >
                  Ask Ja Law AI
                  <Zap size={11} />
                </Link>
              </div>
            </div>

            <p
              className="animate-rise mt-4 text-xs text-muted"
              style={{ animationDelay: "260ms" }}
            >
              Demo prototype &middot; all cases below use fictional sample data
            </p>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-line bg-white px-6 py-10">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Nothing invented",
                body: "Every citation resolves to a real document. No hallucinated case law, ever.",
              },
              {
                icon: Zap,
                title: "ChatGPT-speed",
                body: "Streaming answers with progressive citation loading, built for the pace of real research.",
              },
              {
                icon: Link2,
                title: "Full traceability",
                body: "Every AI statement expands to the exact page and highlighted excerpt it came from.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-2">
                <Icon size={18} className="text-primary" />
                <h3 className="font-display text-sm font-bold text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ASK VERITAS AI — full width interactive section */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Zap size={15} className="text-primary" />
              </span>
              <h2 className="font-display text-2xl font-bold text-navy">
                Ask Ja Law AI
              </h2>
            </div>
            <AILegalSearch />
          </div>
        </section>

        {/* FEATURED CASES */}
        <section className="border-t border-line bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FileSearch size={16} className="text-primary" />
                  <h2 className="font-display text-2xl font-bold text-navy">
                    Verified case index
                  </h2>
                </div>
                <p className="mt-1 text-sm text-muted">
                  A sample of the fictional cases in the demo database.
                </p>
              </div>
              <Link
                href="/search"
                className="hidden items-center gap-1 text-sm font-semibold text-primary hover:text-deep-blue sm:flex"
              >
                View all
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cases.slice(0, 6).map((c) => (
                <CaseCard key={c.id} legalCase={c} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL POSITIONING */}
        <section className="border-t border-line bg-navy px-6 py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              ChatGPT for legal research &mdash; but every answer is
              traceable to real case documents.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Ja Law is a controlled legal research platform with an AI
              reasoning layer. Not a general chatbot. Not a legal advice
              engine.
            </p>
            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
            >
              Explore the dashboard
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
