import IssueListBoard from "@/components/community/IssueListBoard";

const qaBoardConfig = {
  sourceLabel: "question",
  template: "question.yml",
  title: "질문 작성하기",
  description: "작성 버튼은 GitHub Issue 템플릿으로 연결됩니다. 라벨로 주제와 답변 상태를 구분합니다.",
  statsLabels: {
    total: "전체 질문",
    waiting: "답변 대기",
    completed: "답변 완료",
  },
  filters: [
    { id: "all", label: "전체", description: "모든 질문" },
    { id: "needs-answer", label: "답변 대기", description: "아직 답이 필요한 질문" },
    { id: "answered", label: "답변 완료", description: "답변이 달렸거나 해결된 질문" },
    { id: "topic:install", label: "설치", description: "설치/업데이트" },
    { id: "topic:config", label: "설정", description: "config/env/model" },
    { id: "topic:tools", label: "도구", description: "tools/toolsets" },
    { id: "topic:skills", label: "스킬", description: "skills/memory" },
  ],
  quickLinks: [
    { label: "일반 질문", labels: ["question", "needs-answer"], variant: "primary" as const },
    { label: "설치 질문", labels: ["question", "needs-answer", "topic:install"] },
    { label: "설정 질문", labels: ["question", "needs-answer", "topic:config"] },
    { label: "도구/스킬 질문", labels: ["question", "needs-answer", "topic:tools", "topic:skills"] },
  ],
  labelRules: [
    { label: "question", text: "Q&A 글" },
    { label: "needs-answer", text: "답변 대기" },
    { label: "answered", text: "답변 완료" },
    { label: "topic:*", text: "설치/설정/도구/스킬 구분" },
  ],
  emptyTitle: "아직 표시할 질문이 없습니다.",
  emptyDescription: "첫 질문을 남기면 이곳에 Q&A 게시글처럼 표시됩니다.",
  firstActionLabel: "첫 질문 작성하기",
  searchPlaceholder: "제목, 본문, 작성자, 라벨로 검색",
  statusMode: "qa" as const,
};

export default function QAIssueBoard() {
  return <IssueListBoard config={qaBoardConfig} />;
}
