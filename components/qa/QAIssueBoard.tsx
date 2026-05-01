"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Clock3, ExternalLink, MessageCircle, RefreshCw, Search, Tag } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { issuesUrl, newIssueUrl, siteConfig } from "@/lib/site";

type GitHubLabel = {
  name: string;
  color: string;
};

type GitHubIssue = {
  id: number;
  number: number;
  title: string;
  html_url: string;
  state: "open" | "closed";
  comments: number;
  created_at: string;
  updated_at: string;
  labels: GitHubLabel[];
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};

const filters = [
  { id: "all", label: "전체", description: "모든 질문" },
  { id: "needs-answer", label: "답변 대기", description: "아직 답이 필요한 질문" },
  { id: "answered", label: "답변 완료", description: "답변이 달렸거나 해결된 질문" },
  { id: "topic:install", label: "설치", description: "설치/업데이트" },
  { id: "topic:config", label: "설정", description: "config/env/model" },
  { id: "topic:tools", label: "도구", description: "tools/toolsets" },
  { id: "topic:skills", label: "스킬", description: "skills/memory" },
];

const askLinks = [
  { label: "일반 질문", labels: ["question", "needs-answer"] },
  { label: "설치 질문", labels: ["question", "needs-answer", "topic:install"] },
  { label: "설정 질문", labels: ["question", "needs-answer", "topic:config"] },
  { label: "도구/스킬 질문", labels: ["question", "needs-answer", "topic:tools", "topic:skills"] },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function hasLabel(issue: GitHubIssue, label: string) {
  return issue.labels.some((item) => item.name === label);
}

function issueStatus(issue: GitHubIssue) {
  if (hasLabel(issue, "answered") || issue.state === "closed") {
    return {
      label: "답변 완료",
      className: "border-green-500/30 bg-green-500/10 text-green-300",
      icon: CheckCircle2,
    };
  }

  return {
    label: "답변 대기",
    className: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    icon: Clock3,
  };
}

function labelClass(label: string) {
  if (label === "answered") return "border-green-500/30 bg-green-500/10 text-green-300";
  if (label === "needs-answer") return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
  if (label.startsWith("topic:")) return "border-blue-500/30 bg-blue-500/10 text-blue-300";
  if (label === "question") return "border-hermes-primary/30 bg-hermes-primary/10 text-hermes-primary";
  return "border-gray-70 bg-surface-dark-alt text-text-secondary";
}

function labelText(label: string) {
  const map: Record<string, string> = {
    question: "Q&A",
    "needs-answer": "답변 대기",
    answered: "답변 완료",
    "topic:install": "설치",
    "topic:config": "설정",
    "topic:tools": "도구",
    "topic:skills": "스킬",
    "topic:docs": "문서",
  };
  return map[label] || label;
}

export default function QAIssueBoard() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  async function loadIssues() {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        state: "all",
        labels: "question",
        sort: "updated",
        direction: "desc",
        per_page: "30",
      });
      const response = await fetch(
        `https://api.github.com/repos/${siteConfig.repoOwner}/${siteConfig.repoName}/issues?${params.toString()}`,
        { headers: { Accept: "application/vnd.github+json" } },
      );

      if (!response.ok) {
        throw new Error(`GitHub API ${response.status}`);
      }

      const data = (await response.json()) as GitHubIssue[];
      setIssues(data.filter((issue) => !("pull_request" in issue)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadIssues();
  }, []);

  const stats = useMemo(() => {
    const answered = issues.filter((issue) => hasLabel(issue, "answered") || issue.state === "closed").length;
    return {
      total: issues.length,
      waiting: issues.length - answered,
      answered,
    };
  }, [issues]);

  const visibleIssues = useMemo(() => {
    return issues.filter((issue) => {
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "answered" && (hasLabel(issue, "answered") || issue.state === "closed")) ||
        (activeFilter === "needs-answer" && !(hasLabel(issue, "answered") || issue.state === "closed")) ||
        hasLabel(issue, activeFilter);

      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        issue.title.toLowerCase().includes(normalizedQuery) ||
        issue.user.login.toLowerCase().includes(normalizedQuery) ||
        issue.labels.some((label) => label.name.toLowerCase().includes(normalizedQuery));

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, issues, query]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="outlined" className="p-5">
          <p className="text-sm text-text-secondary mb-1">전체 질문</p>
          <p className="text-3xl font-bold text-text-primary font-heading">{stats.total}</p>
        </Card>
        <Card variant="outlined" className="p-5">
          <p className="text-sm text-text-secondary mb-1">답변 대기</p>
          <p className="text-3xl font-bold text-yellow-300 font-heading">{stats.waiting}</p>
        </Card>
        <Card variant="outlined" className="p-5">
          <p className="text-sm text-text-secondary mb-1">답변 완료</p>
          <p className="text-3xl font-bold text-green-300 font-heading">{stats.answered}</p>
        </Card>
      </div>

      <Card variant="elevated" className="p-5">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text-primary font-heading mb-1">
              질문 작성하기
            </h2>
            <p className="text-sm text-text-secondary">
              작성 버튼은 GitHub Issue 템플릿으로 연결됩니다. 라벨로 주제와 답변 상태를 구분합니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {askLinks.map((link) => (
              <a key={link.label} href={newIssueUrl("question.yml", link.labels)} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant={link.label === "일반 질문" ? "primary" : "secondary"}>
                  {link.label} ↗
                </Button>
              </a>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 items-start">
        <aside className="lg:sticky lg:top-24 space-y-4">
          <Card variant="outlined" className="p-4">
            <h2 className="text-sm font-semibold text-text-primary mb-3 font-heading">필터</h2>
            <div className="space-y-1">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`w-full rounded-xl px-3 py-2 text-left transition-colors ${
                    activeFilter === filter.id
                      ? "bg-hermes-primary text-white"
                      : "text-text-secondary hover:bg-surface-dark-alt hover:text-text-primary"
                  }`}
                >
                  <span className="block text-sm font-medium">{filter.label}</span>
                  <span className={`block text-xs ${activeFilter === filter.id ? "text-white/70" : "text-text-disabled"}`}>
                    {filter.description}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          <Card variant="outlined" className="p-4">
            <h2 className="text-sm font-semibold text-text-primary mb-3 font-heading">라벨 규칙</h2>
            <ul className="space-y-2 text-xs text-text-secondary leading-relaxed">
              <li><span className="text-hermes-primary">question</span> — Q&A 글</li>
              <li><span className="text-yellow-300">needs-answer</span> — 답변 대기</li>
              <li><span className="text-green-300">answered</span> — 답변 완료</li>
              <li><span className="text-blue-300">topic:*</span> — 설치/설정/도구/스킬 구분</li>
            </ul>
          </Card>
        </aside>

        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <label className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-disabled" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="제목, 작성자, 라벨로 검색"
                className="h-11 w-full rounded-xl border border-gray-80 bg-surface-card pl-10 pr-4 text-sm text-text-primary placeholder:text-text-disabled focus:border-hermes-primary focus:outline-none focus:ring-2 focus:ring-hermes-primary/20"
              />
            </label>
            <Button size="sm" variant="secondary" onClick={loadIssues} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              새로고침
            </Button>
          </div>

          {loading && (
            <Card variant="outlined" className="p-8 text-center text-text-secondary">
              GitHub Issues를 불러오는 중입니다…
            </Card>
          )}

          {error && !loading && (
            <Card variant="outlined" className="p-8 text-center">
              <p className="text-text-primary font-semibold mb-2">이슈를 불러오지 못했습니다.</p>
              <p className="text-sm text-text-secondary mb-4">{error}</p>
              <a href={issuesUrl(["question"])} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">GitHub에서 직접 보기 ↗</Button>
              </a>
            </Card>
          )}

          {!loading && !error && visibleIssues.length === 0 && (
            <Card variant="outlined" className="p-8 text-center">
              <p className="text-text-primary font-semibold mb-2">아직 표시할 질문이 없습니다.</p>
              <p className="text-sm text-text-secondary mb-4">
                첫 질문을 남기면 이곳에 Q&A 게시글처럼 표시됩니다.
              </p>
              <a href={newIssueUrl("question.yml", ["question", "needs-answer"])} target="_blank" rel="noopener noreferrer">
                <Button>첫 질문 작성하기 ↗</Button>
              </a>
            </Card>
          )}

          {!loading && !error && visibleIssues.map((issue) => {
            const status = issueStatus(issue);
            const StatusIcon = status.icon;
            const visibleLabels = issue.labels.filter((label) =>
              ["question", "needs-answer", "answered"].includes(label.name) || label.name.startsWith("topic:"),
            );

            return (
              <a key={issue.id} href={issue.html_url} target="_blank" rel="noopener noreferrer" className="block">
                <Card variant="elevated" className="p-5 hover:border-hermes-primary/60 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${status.className}`}>
                            <StatusIcon className="h-3.5 w-3.5" />
                            {status.label}
                          </span>
                          <span className="text-xs text-text-disabled">#{issue.number}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary font-heading leading-snug hover:text-hermes-primary">
                          {issue.title}
                        </h3>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-text-disabled" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {visibleLabels.map((label) => (
                        <span key={label.name} className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${labelClass(label.name)}`}>
                          <Tag className="h-3 w-3" />
                          {labelText(label.name)}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-text-disabled">
                      <span className="inline-flex items-center gap-2">
                        <img src={issue.user.avatar_url} alt={`${issue.user.login} avatar`} className="h-5 w-5 rounded-full" />
                        {issue.user.login}
                      </span>
                      <span>업데이트 {formatDate(issue.updated_at)}</span>
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle className="h-3.5 w-3.5" />
                        댓글 {issue.comments}
                      </span>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </section>
      </div>
    </div>
  );
}
