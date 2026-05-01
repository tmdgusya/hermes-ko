"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  ThumbsUp,
  ExternalLink,
  Loader2,
  MessageSquarePlus,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  fetchDiscussions,
  categoryDisplay,
  type Discussion,
  type DiscussionCategory,
} from "@/lib/github";
import { siteConfig } from "@/lib/site";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function timeAgo(value: string) {
  const diff = Date.now() - new Date(value).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "방금";
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}일 전`;
  return formatDate(value);
}

export default function LoungeDiscussions() {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchDiscussions();
        setDiscussions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // 카테고리별 그룹화
  const categories = new Map<string, { cat: DiscussionCategory; items: Discussion[] }>();
  for (const d of discussions) {
    const name = d.category.name;
    if (!categories.has(name)) {
      categories.set(name, { cat: d.category, items: [] });
    }
    categories.get(name)!.items.push(d);
  }

  const filteredDiscussions = activeCategory
    ? discussions.filter((d) => d.category.name === activeCategory)
    : discussions;

  const categoryList = Array.from(categories.values());

  if (loading) {
    return (
      <div className="py-16 px-4 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
        <p className="mt-3 text-sm text-muted-foreground">라운지 소식을 불러오는 중…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 px-4 text-center">
        <p className="text-foreground font-semibold mb-2">라운지를 불러오지 못했습니다</p>
        <p className="text-sm text-muted-foreground mb-4">{error}</p>
        <a
          href={`${siteConfig.repoUrl}/discussions`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary">GitHub에서 직접 보기 ↗</Button>
        </a>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            🏠 라운지
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Hermes에 대한 이야기, 아이디어, 자랑, 가벼운 질문까지.
            <br />
            GitHub Discussions에서 자유롭게 대화해요.
          </p>
          <a
            href={`${siteConfig.repoUrl}/discussions/new/choose`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <MessageSquarePlus className="h-4 w-4" />
              새 글 쓰기
            </Button>
          </a>
        </div>

        {/* Category tabs */}
        {categoryList.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === null
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              전체
            </button>
            {categoryList.map(({ cat }) => {
              const disp = categoryDisplay(cat);
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    activeCategory === cat.name
                      ? "bg-primary text-white border-primary"
                      : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                >
                  {disp.emoji} {disp.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Discussion list */}
        {filteredDiscussions.length === 0 ? (
          <div className="text-center py-12">
            <Badge variant="info">아직 글이 없어요</Badge>
            <p className="mt-4 text-sm text-muted-foreground">첫 번째 글을 남겨보세요!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredDiscussions.map((d) => {
              const disp = categoryDisplay(d.category);
              return (
                <a
                  key={d.id}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    variant="elevated"
                    className="p-5 hover:border-primary/60 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Author avatar */}
                      <img
                        src={d.author.avatarUrl}
                        alt={d.author.login}
                        className="h-10 w-10 rounded-full mt-0.5 ring-2 ring-border"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <Badge variant="default">
                            {disp.emoji} {disp.label}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            #{d.number}
                          </span>
                        </div>

                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary leading-snug mb-2">
                          {d.title}
                        </h3>

                        {/* Body preview */}
                        {d.body && (
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {d.body.slice(0, 200)}
                          </p>
                        )}

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span>{d.author.login}</span>
                          <span className="inline-flex items-center gap-1">
                            <MessageCircle className="h-3.5 w-3.5" />
                            {d.commentsCount}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <ThumbsUp className="h-3.5 w-3.5" />
                            {d.upvoteCount}
                          </span>
                          <span>{timeAgo(d.createdAt)}</span>
                          {d.answerChosenAt && (
                            <span className="text-green-400">✅ 답변 채택됨</span>
                          )}
                        </div>
                      </div>

                      <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100" />
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        )}

        {/* Footer link */}
        <div className="text-center mt-10">
          <a
            href={`${siteConfig.repoUrl}/discussions`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              GitHub Discussions 전체 보기 ↗
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
