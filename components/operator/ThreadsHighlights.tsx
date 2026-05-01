import { ExternalLink, MessageCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { operatorThreads } from "@/lib/operatorThreads";
import { siteConfig } from "@/lib/site";

export default function ThreadsHighlights() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div className="max-w-2xl">
            <Badge variant="info" className="mb-4">roach_log Threads</Badge>
            <h2 className="text-3xl font-bold font-heading text-text-primary mb-4">
              Threads에서 온 운영자 노트
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Hermes를 쓰며 발견한 업데이트, 모델 팁, 운영 노트를 사이트에도 큐레이션합니다.
              원문과 댓글 흐름은 Threads에서 이어서 볼 수 있어요.
            </p>
          </div>
          <a href={siteConfig.operatorThreadsUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              Threads 전체 보기
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {operatorThreads.map((thread) => (
            <a key={thread.href} href={thread.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <Card variant="elevated" className="h-full border-gray-80 transition-colors group-hover:border-hermes-primary/60">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-hermes-primary">
                    <MessageCircle className="h-4 w-4" />
                    {thread.publishedLabel}
                  </span>
                  {thread.stats && <span className="text-xs text-text-disabled">{thread.stats}</span>}
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-3 leading-snug group-hover:text-hermes-primary">
                  {thread.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {thread.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {thread.labels.map((label) => (
                    <span key={label} className="rounded-full border border-gray-80 bg-surface-dark-alt px-2.5 py-1 text-xs text-text-secondary">
                      #{label}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-hermes-primary">
                  원문 보기 <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
