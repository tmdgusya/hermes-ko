export type OperatorThread = {
  title: string;
  excerpt: string;
  href: string;
  publishedLabel: string;
  labels: string[];
  stats?: string;
};

export const operatorThreads: OperatorThread[] = [
  {
    title: "Hermes Kanban으로 멀티에이전트 운영하기",
    excerpt:
      "Kanban task를 만들고 profile에 배정하면 gateway dispatcher가 worker를 띄우는 구조. parent/child 의존성으로 backend 이후 frontend가 이어받는 파이프라인도 만들 수 있어요.",
    href: "https://www.threads.com/@roach_log/post/DXyB2OkgAy3",
    publishedLabel: "최근 Threads",
    labels: ["multi-agent", "kanban", "gateway"],
    stats: "좋아요 11 · 댓글 7",
  },
  {
    title: "openrouter/owl-alpha: 무료 1M 컨텍스트 모델 테스트",
    excerpt:
      "OpenRouter 기준 `openrouter/owl-alpha`로 등록 가능한 일시적 무료 모델. 1,048,756 토큰 컨텍스트라 긴 파일을 읽고 도구를 쓰는 Agent 실험에 잘 맞습니다. 단, 민감 정보 입력은 피해야 해요.",
    href: "https://www.threads.com/@roach_log/post/DXxmMefAZYU",
    publishedLabel: "Threads에서",
    labels: ["model", "openrouter", "context"],
    stats: "좋아요 7 · 댓글 3",
  },
  {
    title: "Hermes 0.12.0 업데이트: 스킬을 스스로 정리하는 집사",
    excerpt:
      "Curator가 스킬 서랍을 주기적으로 검사하고, 비슷한 스킬을 묶고, 오래 안 쓰는 건 archive로 보내는 흐름. TUI, 플러그인, 안정성 개선도 함께 들어왔습니다.",
    href: "https://www.threads.com/@roach_log/post/DXxkPd3gZ6B",
    publishedLabel: "Threads에서",
    labels: ["release", "curator", "skills"],
    stats: "좋아요 24 · 댓글 15",
  },
  {
    title: "Auxiliary Model로 Hermes 비용 줄이기",
    excerpt:
      "이미지 분석, 웹 요약, 긴 대화 압축, 세션 검색 같은 보조 작업은 aux 모델에 맡기고, 메인 모델은 중요한 대화와 코딩에 집중시키는 설정 팁입니다.",
    href: "https://www.threads.com/@roach_log/post/DXwom05ga0Q",
    publishedLabel: "Threads에서",
    labels: ["cost", "aux-model", "setup"],
    stats: "좋아요 42 · 댓글 13",
  },
];
