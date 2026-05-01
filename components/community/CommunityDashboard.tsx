"use client";

import { useEffect, useState } from "react";
import {
  MessageSquare,
  CheckCircle2,
  Clock3,
  Tag,
  Users,
  TrendingUp,
  Lightbulb,
  ExternalLink,
  Loader2,
} from "lucide-react";
import Card from "@/components/ui/Card";
import {
  fetchIssuesByLabel,
  computeIssueStats,
  computeLabelFrequencies,
  computeTopContributors,
  type GitHubIssue,
  type GitHubIssueSummary,
  type LabelFrequency,
} from "@/lib/github";
import { issuesUrl } from "@/lib/site";

type DashboardData = {
  qaIssues: GitHubIssue[];
  tipIssues: GitHubIssue[];
  loading: boolean;
  error: string | null;
};

export default function CommunityDashboard() {
  const [{ qaIssues, tipIssues, loading, error }, setData] = useState<DashboardData>({
    qaIssues: [],
    tipIssues: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function load() {
      try {
        const [qa, tip] = await Promise.all([
          fetchIssuesByLabel("question"),
          fetchIssuesByLabel("tip"),
        ]);
        setData({ qaIssues: qa, tipIssues: tip, loading: false, error: null });
      } catch (err) {
        setData((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : "알 수 없는 오류",
        }));
      }
    }
    load();
  }, []);

  // Stats
  const qaStats = computeIssueStats(qaIssues, "answered");
  const tipStats = computeIssueStats(tipIssues);

  // Combined for label frequencies + contributors
  const allIssues = [...qaIssues, ...tipIssues];
  const labelFreqs = computeLabelFrequencies(allIssues, ["question", "tip"]);
  const topContributors = computeTopContributors(allIssues, 5);

  // 답변 대기 중인 질문 (최대 3개)
  const unansweredQuestions = qaIssues
    .filter(
      (issue) =>
        issue.state === "open" && !issue.labels.some((l) => l.name === "answered"),
    )
    .slice(0, 3);

  // Label 한글명 매핑
  const labelDisplay = (name: string) => {
    const map: Record<string, string> = {
      "topic:install": "설치",
      "topic:config": "설정",
      "topic:tools": "도구",
      "topic:skills": "스킬",
      "topic:docs": "문서",
      "topic:workflow": "워크플로우",
      "topic:automation": "자동화",
      "topic:mcp": "MCP",
      "topic:prompt": "프롬프트",
      "needs-answer": "답변대기",
      answered: "답변완료",
      curated: "추천",
      question: "Q&A",
      tip: "TIP",
    };
    return map[name] || name;
  };

  // 답변율 계산
  const answerRate =
    qaStats.total > 0 ? Math.round(((qaStats.answered ?? 0) / qaStats.total) * 100) : 0;

  if (loading) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
          <p className="mt-3 text-sm text-muted-foreground">
            커뮤니티 현황을 불러오는 중…
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            커뮤니티 데이터를 불러오지 못했습니다: {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">커뮤니티 현황</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            GitHub Issues로 운영되는 Q&A와 TIP 게시판의 실시간 통계입니다.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard
            icon={MessageSquare}
            label="전체 질문"
            value={qaStats.total}
            colorClass="text-primary bg-primary/10 border-primary/30"
          />
          <StatCard
            icon={CheckCircle2}
            label="답변 완료"
            value={qaStats.answered ?? 0}
            colorClass="text-green-300 bg-green-500/10 border-green-500/30"
            sub={`답변율 ${answerRate}%`}
          />
          <StatCard
            icon={Clock3}
            label="답변 대기"
            value={qaStats.waiting ?? 0}
            colorClass="text-yellow-300 bg-yellow-500/10 border-yellow-500/30"
          />
          <StatCard
            icon={Lightbulb}
            label="공유된 팁"
            value={tipStats.total}
            colorClass="text-amber-400 bg-amber-400/10 border-amber-400/30"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 인기 태그 */}
          <Card variant="elevated" className="p-5 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
              <TrendingUp className="h-4 w-4 text-primary" />
              인기 주제
            </h3>
            {labelFreqs.length === 0 ? (
              <p className="text-sm text-muted-foreground">아직 데이터가 없습니다</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {labelFreqs.map((lf) => (
                  <a
                    key={lf.name}
                    href={issuesUrl([lf.name])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background-alt px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <Tag className="h-3 w-3" />
                    {labelDisplay(lf.name)}
                    <span className="text-muted-foreground">{lf.count}</span>
                  </a>
                ))}
              </div>
            )}
          </Card>

          {/* 최근 활동 기여자 */}
          <Card variant="elevated" className="p-5 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
              <Users className="h-4 w-4 text-primary" />
              최근 기여자
            </h3>
            {topContributors.length === 0 ? (
              <p className="text-sm text-muted-foreground">아직 활동이 없습니다</p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {topContributors.map((contrib) => (
                  <a
                    key={contrib.login}
                    href={contrib.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border bg-background-alt px-3 py-1.5 text-xs transition-colors hover:border-primary/60"
                    title={contrib.login}
                  >
                    <img
                      src={contrib.avatarUrl}
                      alt={contrib.login}
                      className="h-5 w-5 rounded-full"
                    />
                    <span className="text-foreground">{contrib.login}</span>
                  </a>
                ))}
              </div>
            )}
          </Card>

          {/* 답변 대기 질문 */}
          <Card variant="elevated" className="p-5 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
              <Clock3 className="h-4 w-4 text-yellow-400" />
              답변을 기다리는 질문
            </h3>
            {unansweredQuestions.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                모든 질문에 답변이 달렸습니다 🎉
              </p>
            ) : (
              <ul className="space-y-3">
                {unansweredQuestions.map((issue) => (
                  <li key={issue.id}>
                    <a
                      href={issue.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 text-sm"
                    >
                      <span className="mt-0.5 shrink-0 text-yellow-400">●</span>
                      <span className="text-foreground group-hover:text-primary line-clamp-2 leading-snug">
                        {issue.title}
                      </span>
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  colorClass,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  colorClass: string;
  sub?: string;
}) {
  return (
    <Card variant="elevated" className="p-4 md:p-5 text-center">
      <div
        className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border ${colorClass}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-2xl md:text-3xl font-bold text-foreground font-heading">
        {value}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
      {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
    </Card>
  );
}
