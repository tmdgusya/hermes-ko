import Link from "next/link";
import { docsSections } from "@/lib/docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <nav className="sticky top-20 space-y-6 overflow-y-auto max-h-[calc(100vh-6rem)] pr-2">
            <div>
              <h2 className="text-sm font-bold text-foreground mb-1">
                한국어 문서
              </h2>
              <p className="text-xs text-muted-foreground mb-4">
                Hermes Agent 공식 문서 한국어 번역
              </p>
            </div>

            {docsSections.map((section) => (
              <div key={section.slug}>
                <h3 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                  {section.title}
                </h3>
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className="block px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground hover:bg-secondary rounded-[var(--radius-sm)] transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-3xl">
          {children}
        </main>
      </div>
    </div>
  );
}
