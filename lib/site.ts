export const siteConfig = {
  name: "Hermes KR",
  repoOwner: "tmdgusya",
  repoName: "hermes-ko",
  repoUrl: "https://github.com/tmdgusya/hermes-ko",
  upstreamUrl: "https://github.com/NousResearch/hermes-agent",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export function withBasePath(path: string): string {
  const basePath = siteConfig.basePath;
  if (!basePath || path.startsWith("http")) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function newIssueUrl(template: string, labels?: string[]): string {
  const url = new URL(`${siteConfig.repoUrl}/issues/new`);
  url.searchParams.set("template", template);
  if (labels?.length) url.searchParams.set("labels", labels.join(","));
  return url.toString();
}

export function issuesUrl(labels?: string[]): string {
  const url = new URL(`${siteConfig.repoUrl}/issues`);
  if (labels?.length) url.searchParams.set("q", `is:issue is:open ${labels.map((label) => `label:${label}`).join(" ")}`);
  return url.toString();
}
