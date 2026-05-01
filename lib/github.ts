import { siteConfig } from "./site";

const API_BASE = "https://api.github.com";

export type GitHubLabel = {
  name: string;
  color: string;
};

export type GitHubIssue = {
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

export type GitHubIssueSummary = {
  total: number;
  open: number;
  closed: number;
  answered?: number;
  waiting?: number;
};

export type LabelFrequency = {
  name: string;
  count: number;
};

/**
 * 특정 label을 가진 모든 이슈를 가져옵니다.
 */
export async function fetchIssuesByLabel(
  label: string,
  options?: { state?: "open" | "closed" | "all"; perPage?: number },
): Promise<GitHubIssue[]> {
  const params = new URLSearchParams({
    state: options?.state || "all",
    labels: label,
    sort: "updated",
    direction: "desc",
    per_page: String(options?.perPage || 50),
  });

  const resp = await fetch(
    `${API_BASE}/repos/${siteConfig.repoOwner}/${siteConfig.repoName}/issues?${params}`,
    { headers: { Accept: "application/vnd.github+json" } },
  );

  if (!resp.ok) throw new Error(`GitHub API ${resp.status}`);
  const data = await resp.json();
  return (data as GitHubIssue[]).filter((issue) => !("pull_request" in (issue as Record<string, unknown>)));
}

/**
 * 특정 label을 가진 이슈들의 통계를 계산합니다.
 */
export function computeIssueStats(issues: GitHubIssue[], answeredLabel?: string): GitHubIssueSummary {
  const total = issues.length;
  const open = issues.filter((i) => i.state === "open").length;
  const closed = issues.filter((i) => i.state === "closed").length;
  const answered = answeredLabel
    ? issues.filter((i) => i.labels.some((l) => l.name === answeredLabel) || i.state === "closed").length
    : closed;
  const waiting = total - answered;

  return { total, open, closed, answered, waiting };
}

/**
 * 이슈 목록에서 label 빈도수를 계산합니다.
 */
export function computeLabelFrequencies(
  issues: GitHubIssue[],
  excludeLabels: string[] = [],
): LabelFrequency[] {
  const freq: Record<string, number> = {};

  for (const issue of issues) {
    for (const label of issue.labels) {
      if (excludeLabels.includes(label.name)) continue;
      if (
        label.name.startsWith("topic:") ||
        ["needs-answer", "answered", "curated", "question", "tip"].includes(label.name)
      ) {
        freq[label.name] = (freq[label.name] || 0) + 1;
      }
    }
  }

  return Object.entries(freq)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

/**
 * 최근 활동한 기여자 목록을 추출합니다 (중복 제거, 최대 N명).
 */
export function computeTopContributors(
  issues: GitHubIssue[],
  maxCount = 5,
): Array<{ login: string; avatarUrl: string; htmlUrl: string }> {
  const seen = new Set<string>();
  const contributors: Array<{ login: string; avatarUrl: string; htmlUrl: string }> = [];

  for (const issue of issues) {
    if (seen.has(issue.user.login)) continue;
    seen.add(issue.user.login);
    contributors.push({
      login: issue.user.login,
      avatarUrl: issue.user.avatar_url,
      htmlUrl: issue.user.html_url,
    });
    if (contributors.length >= maxCount) break;
  }

  return contributors;
}
