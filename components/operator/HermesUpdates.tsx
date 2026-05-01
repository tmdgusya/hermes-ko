import { CalendarDays, ExternalLink, GitCommitHorizontal } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { hermesUpdates, hermesUpdatesLastChecked, hermesUpdatesSourceUrl } from "@/lib/hermesUpdates";

export default function HermesUpdates() {
  return (
    <section className="py-20 px-4 bg-surface-dark-alt/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div className="max-w-2xl">
            <Badge variant="success" className="mb-4">Official Git log</Badge>
            <h2 className="text-3xl font-bold font-heading text-text-primary mb-4">
              Hermes 최근 업데이트
            </h2>
            <p className="text-text-secondary leading-relaxed">
              공식 Hermes Agent 저장소의 최근 commit log를 보고, 한국어로 읽기 쉽게 묶었습니다.
              업데이트 일자와 원본 commit 링크를 함께 남깁니다.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-text-disabled">
              <CalendarDays className="h-4 w-4" />
              마지막 확인: {hermesUpdatesLastChecked}
            </p>
          </div>
          <a href={hermesUpdatesSourceUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              공식 Git log 보기
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {hermesUpdates.map((update) => (
            <Card key={update.title} variant="elevated" className="h-full">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-hermes-primary/30 bg-hermes-primary/10 px-3 py-1 text-xs font-medium text-hermes-primary">
                  {update.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-text-disabled">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {update.date}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-3 leading-snug">
                {update.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {update.summary}
              </p>
              <div className="space-y-2 border-t border-gray-80 pt-4">
                {update.commits.map((commit) => (
                  <a
                    key={commit.sha}
                    href={commit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 rounded-xl px-2 py-2 transition-colors hover:bg-surface-dark-alt"
                  >
                    <GitCommitHorizontal className="mt-0.5 h-4 w-4 shrink-0 text-text-disabled group-hover:text-hermes-primary" />
                    <span className="min-w-0 text-sm">
                      <span className="font-mono text-xs text-hermes-primary">{commit.sha}</span>
                      <span className="ml-2 text-text-secondary group-hover:text-text-primary">{commit.message}</span>
                    </span>
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
