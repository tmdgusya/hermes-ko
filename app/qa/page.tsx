import { HelpCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import QAIssueBoard from "@/components/qa/QAIssueBoard";

export const metadata = {
  title: "Q&A | Hermes KR",
  description: "GitHub Issues label 기반 Hermes KR Q&A 게시판",
};

export default function QAPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <Badge variant="info" className="mb-4">GitHub Issues Q&A</Badge>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold  text-foreground">
              Q&A 게시판
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            질문은 GitHub Issue로 저장하고, 이 페이지에서는 <span className="text-foreground">라벨</span>로
            답변 상태와 주제를 구분해서 보여줍니다. 별도 가입/DB 없이도 게시판처럼 확인할 수 있어요.
          </p>
        </div>

        <QAIssueBoard />
      </div>
    </div>
  );
}
