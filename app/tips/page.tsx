import { Lightbulb } from "lucide-react";
import Badge from "@/components/ui/Badge";
import TipIssueBoard from "@/components/tips/TipIssueBoard";

export const metadata = {
  title: "TIP | Hermes KR",
  description: "GitHub Issues label 기반 Hermes KR TIP 게시판",
};

export default function TipsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <Badge variant="success" className="mb-4">GitHub Issues TIP</Badge>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10">
              <Lightbulb className="h-6 w-6 text-amber-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary">
              TIP 게시판
            </h1>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed">
            Hermes 사용 중 발견한 workflow, toolset 조합, 스킬 활용법을 <span className="text-text-primary">tip 라벨</span>로
            모아 보여줍니다. 별도 게시판 DB 없이 GitHub Issues가 그대로 지식 베이스가 됩니다.
          </p>
        </div>

        <TipIssueBoard />
      </div>
    </div>
  );
}
