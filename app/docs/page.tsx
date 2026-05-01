import Link from "next/link";
import { docsSections } from "@/lib/docs";
import Card from "@/components/ui/Card";
import { BookOpen, ArrowRight } from "lucide-react";

export default function DocsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading text-text-primary mb-4">
          한국어 문서
        </h1>
        <p className="text-lg text-text-secondary">
          Hermes Agent 공식 문서를 한국어로 번역했습니다.
          아래 섹션에서 원하는 문서를 찾아보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docsSections.map((section) => (
          <Card key={section.slug} variant="elevated">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-hermes-primary shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        <ArrowRight className="w-3 h-3" />
                        {item.title}
                        {item.description && (
                          <span className="text-text-disabled">— {item.description}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
