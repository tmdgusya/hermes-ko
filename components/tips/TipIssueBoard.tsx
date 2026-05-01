import IssueListBoard from "@/components/community/IssueListBoard";

const tipBoardConfig = {
  sourceLabel: "tip",
  template: "tip.yml",
  title: "팁 공유하기",
  description: "Hermes를 쓰며 발견한 workflow, 설정, 스킬 조합, 자동화 노하우를 GitHub Issue로 공유합니다.",
  statsLabels: {
    total: "전체 팁",
    waiting: "공개 팁",
    completed: "보관됨",
  },
  filters: [
    { id: "all", label: "전체", description: "모든 팁" },
    { id: "open", label: "공개", description: "현재 열려 있는 팁" },
    { id: "curated", label: "추천", description: "운영자가 큐레이션한 팁" },
    { id: "topic:workflow", label: "워크플로우", description: "반복 작업 흐름" },
    { id: "topic:tools", label: "도구", description: "toolsets/tools 활용" },
    { id: "topic:skills", label: "스킬", description: "skills/memory" },
    { id: "topic:automation", label: "자동화", description: "cron/webhook/agent" },
  ],
  quickLinks: [
    { label: "일반 팁", labels: ["tip"], variant: "primary" as const },
    { label: "워크플로우 팁", labels: ["tip", "topic:workflow"] },
    { label: "도구/스킬 팁", labels: ["tip", "topic:tools", "topic:skills"] },
    { label: "자동화 팁", labels: ["tip", "topic:automation"] },
  ],
  labelRules: [
    { label: "tip", text: "사용 팁" },
    { label: "curated", text: "운영자 추천" },
    { label: "topic:workflow", text: "워크플로우" },
    { label: "topic:tools", text: "도구 활용" },
    { label: "topic:skills", text: "스킬/메모리" },
  ],
  emptyTitle: "아직 표시할 팁이 없습니다.",
  emptyDescription: "첫 팁을 남기면 이곳에 TIP 게시글처럼 표시됩니다.",
  firstActionLabel: "첫 팁 공유하기",
  searchPlaceholder: "제목, 본문, 작성자, 라벨로 팁 검색",
  statusMode: "simple" as const,
};

export default function TipIssueBoard() {
  return <IssueListBoard config={tipBoardConfig} />;
}
