"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  MessageCircle,
  RefreshCw,
  Search,
  Tag,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { issuesUrl, newIssueUrl, siteConfig } from "@/lib/site";

type GitHubLabel = {
  name: string;
  color: string;
};

type GitHubIssue = {
  id: number;
  number: number;
  title: string;
  body?: string | null;
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

type BoardFilter = {
  id: string;
  label: string;
  description: string;
};

type QuickLink = {
  label: string;
  labels: string[];
  variant?: "primary" | "secondary";
};

type BoardConfig = {
  sourceLabel: string;
  template: string;
  title: string;
  description: string;
  statsLabels: {
    total: string;
    waiting?: string;
    completed?: string;
  };
  filters: BoardFilter[];
  quickLinks: QuickLink[];
  labelRules: Array<{ label: string; text: string }>;
  emptyTitle: string;
  emptyDescription: string;
  firstActionLabel: string;
  searchPlaceholder: string;
  statusMode?: "qa" | "simple";
};

const labelTextMap: Record<string, string> = {
  question: "Q&A",
  tip: "TIP",
  "needs-answer": "답변 대기",
  answered: "답변 완료",
  curated: "추천",
  "topic:install": "설치",
  "topic:config": "설정",
  "topic:tools": "도구",
  "topic:skills": "스킬",
  "topic:docs": "문서",
  "topic:workflow": "워크플로우",
  "topic:automation": "자동화",
  "topic:mcp": "MCP",
  "topic:prompt": "프롬프트",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function hasLabel(issue: GitHubIssue, label: string) {
  return issue.labels.some((item) => item.name === label);
}

function issueStatus(issue: GitHubIssue, mode: "qa" | "simple" = "qa") {
  if (mode === "simple") {
    return {
      label: issue.state === "closed" ? "보관됨" : "공개됨",
      className:
        issue.state === "closed"
          ? "border-gray-60 bg-background-alt text-muted-foreground"
          : "border-primary/30 bg-primary/10 text-primary",
      icon: issue.state === "closed" ? CheckCircle2 : Clock3,
    };
  }

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
  if (label === "tip") return "border-amber-400/30 bg-amber-400/10 text-warning";
  if (label === "question") return "border-primary/30 bg-primary/10 text-primary";
  if (label === "curated") return "border-purple-400/30 bg-purple-400/10 text-purple-200";
  if (label.startsWith("topic:")) return "border-blue-500/30 bg-blue-500/10 text-blue-300";
  return "border-border bg-background-alt text-muted-foreground";
}

function labelText(label: string) {
  return labelTextMap[label] || label;
}

function matchesFilter(issue: GitHubIssue, filter: string, mode: "qa" | "simple") {
  if (filter === "all") return true;
  if (mode === "qa") {
    if (filter === "answered") return hasLabel(issue, "answered") || issue.state === "closed";
    if (filter === "needs-answer") return !(hasLabel(issue, "answered") || issue.state === "closed");
  }
  if (filter === "open") return issue.state === "open";
  if (filter === "closed") return issue.state === "closed";
  return hasLabel(issue, filter);
}

export default function IssueListBoard({ config }: { config: BoardConfig }) {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const statusMode = config.statusMode || "qa";

  async function loadIssues() {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        state: "all",
        labels: config.sourceLabel,
        sort: "updated",
        direction: "desc",
        per_page: "50",
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
    if (statusMode === "simple") {
      return {
        total: issues.length,
        waiting: issues.filter((issue) => issue.state === "open").length,
        completed: issues.filter((issue) => issue.state === "closed").length,
      };
    }

    const answered = issues.filter((issue) => hasLabel(issue, "answered") || issue.state === "closed").length;
    return {
      total: issues.length,
      waiting: issues.length - answered,
      completed: answered,
    };
  }, [issues, statusMode]);

  const visibleIssues = useMemo(() => {
    return issues.filter((issue) => {
      const filterMatched = matchesFilter(issue, activeFilter, statusMode);
      const normalizedQuery = query.trim().toLowerCase();
      const queryMatched =
        !normalizedQuery ||
        issue.title.toLowerCase().includes(normalizedQuery) ||
        (issue.body || "").toLowerCase().includes(normalizedQuery) ||
        issue.user.login.toLowerCase().includes(normalizedQuery) ||
        issue.labels.some((label) => label.name.toLowerCase().includes(normalizedQuery));

      return filterMatched && queryMatched;
    });
  }, [activeFilter, issues, query, statusMode]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="outlined" className="p-5">
          <p className="text-sm text-muted-foreground mb-1">{config.statsLabels.total}</p>
          <p className="text-3xl font-bold text-foreground font-heading">{stats.total}</p>
        </Card>
        {config.statsLabels.waiting && (
          <Card variant="outlined" className="p-5">
            <p className="text-sm text-muted-foreground mb-1">{config.statsLabels.waiting}</p>
            <p className="text-3xl font-bold text-yellow-300 font-heading">{stats.waiting}</p>
          </Card>
        )}
        {config.statsLabels.completed && (
          <Card variant="outlined" className="p-5">
            <p className="text-sm text-muted-foreground mb-1">{config.statsLabels.completed}</p>
            <p className="text-3xl font-bold text-green-300 font-heading">{stats.completed}</p>
          </Card>
        )}
      </div>

      <Card variant="elevated" className="p-5">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground  mb-1">
              {config.title}
            </h2>
            <p className="text-sm text-muted-foreground">{config.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {config.quickLinks.map((link) => (
              <a key={link.label} href={newIssueUrl(config.template, link.labels)} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant={link.variant || "secondary"}>
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
            <h2 className="text-sm font-semibold text-foreground mb-3 font-heading">필터</h2>
            <div className="space-y-1">
              {config.filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`w-full rounded-xl px-3 py-2 text-left transition-colors ${
                    activeFilter === filter.id
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-background-alt hover:text-foreground"
                  }`}
                >
                  <span className="block text-sm font-medium">{filter.label}</span>
                  <span className={`block text-xs ${activeFilter === filter.id ? "text-white/70" : "text-muted-foreground"}`}>
                    {filter.description}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          <Card variant="outlined" className="p-4">
            <h2 className="text-sm font-semibold text-foreground mb-3 font-heading">라벨 규칙</h2>
            <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              {config.labelRules.map((rule) => (
                <li key={rule.label}>
                  <span className={labelClass(rule.label).split(" ").slice(-1)[0]}>{rule.label}</span> — {rule.text}
                </li>
              ))}
            </ul>
          </Card>
        </aside>

        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <label className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={config.searchPlaceholder}
                className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <Button size="sm" variant="secondary" onClick={loadIssues} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              새로고침
            </Button>
          </div>

          {loading && (
            <Card variant="outlined" className="p-8 text-center text-muted-foreground">
              GitHub Issues를 불러오는 중입니다…
            </Card>
          )}

          {error && !loading && (
            <Card variant="outlined" className="p-8 text-center">
              <p className="text-foreground font-semibold mb-2">이슈를 불러오지 못했습니다.</p>
              <p className="text-sm text-muted-foreground mb-4">{error}</p>
              <a href={issuesUrl([config.sourceLabel])} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">GitHub에서 직접 보기 ↗</Button>
              </a>
            </Card>
          )}

          {!loading && !error && visibleIssues.length === 0 && (
            <Card variant="outlined" className="p-8 text-center">
              <p className="text-foreground font-semibold mb-2">{config.emptyTitle}</p>
              <p className="text-sm text-muted-foreground mb-4">{config.emptyDescription}</p>
              <a href={newIssueUrl(config.template, [config.sourceLabel])} target="_blank" rel="noopener noreferrer">
                <Button>{config.firstActionLabel} ↗</Button>
              </a>
            </Card>
          )}

          {!loading && !error && visibleIssues.map((issue) => {
            const status = issueStatus(issue, statusMode);
            const StatusIcon = status.icon;
            const visibleLabels = issue.labels.filter((label) =>
              [config.sourceLabel, "needs-answer", "answered", "curated"].includes(label.name) || label.name.startsWith("topic:"),
            );

            return (
              <a key={issue.id} href={issue.html_url} target="_blank" rel="noopener noreferrer" className="block">
                <Card variant="elevated" className="p-5 hover:border-primary/60 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${status.className}`}>
                            <StatusIcon className="h-3.5 w-3.5" />
                            {status.label}
                          </span>
                          <span className="text-xs text-muted-foreground">#{issue.number}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground  leading-snug hover:text-primary">
                          {issue.title}
                        </h3>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {visibleLabels.map((label) => (
                        <span key={label.name} className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${labelClass(label.name)}`}>
                          <Tag className="h-3 w-3" />
                          {labelText(label.name)}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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
