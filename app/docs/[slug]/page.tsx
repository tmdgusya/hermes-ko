import { notFound } from "next/navigation";
import { getAllDocSlugs, getDocBySlug } from "@/lib/docs";
import { readFileSync } from "fs";
import { join } from "path";
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import MarkdownRenderer from "@/components/docs/MarkdownRenderer";

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return {};
  
  return {
    title: `${doc.title} | Hermes KR`,
    description: doc.description || `Hermes Agent 한국어 문서 - ${doc.title}`,
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  
  if (!doc) notFound();

  const filePath = join(process.cwd(), "content", "docs", `${slug}.md`);
  let content = "";
  
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    return (
      <div className="text-center py-16">
        <BookOpen className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-4" />
        <h1 className="text-xl font-bold text-[var(--text-primary)] mb-2">{doc.title}</h1>
        <p className="text-sm text-[var(--text-secondary)]">
          아직 번역되지 않았습니다. 곧 업데이트될 예정입니다.
        </p>
      </div>
    );
  }

  const allSlugs = getAllDocSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevDoc = prevSlug ? getDocBySlug(prevSlug) : null;
  const nextDoc = nextSlug ? getDocBySlug(nextSlug) : null;

  return (
    <article>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>한국어 문서</span>
        </div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
          {doc.title}
        </h1>
        {doc.description && (
          <p className="text-sm text-[var(--text-secondary)]">{doc.description}</p>
        )}
      </div>

      {/* Content */}
      <MarkdownRenderer content={content} />

      {/* Navigation */}
      <nav className="mt-10 pt-6 border-t border-[var(--border-default)] flex justify-between">
        {prevDoc ? (
          <Link
            href={`/docs/${prevDoc.slug}`}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <div className="text-[11px] text-[var(--text-muted)]">이전</div>
              <div className="text-sm font-medium">{prevDoc.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        
        {nextDoc ? (
          <Link
            href={`/docs/${nextDoc.slug}`}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-right"
          >
            <div>
              <div className="text-[11px] text-[var(--text-muted)]">다음</div>
              <div className="text-sm font-medium">{nextDoc.title}</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
