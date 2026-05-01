import { Bug, HelpCircle, Lightbulb, BookOpen, Sparkles, MessageSquare } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { issuesUrl, newIssueUrl, siteConfig, withBasePath } from "@/lib/site";

const categories = [
  {
    title: "질문",
    label: "question",
    template: "question.yml",
    description: "설치, 설정, 모델, 도구 사용 중 막힌 점을 질문합니다.",
    icon: HelpCircle,
  },
  {
    title: "팁 공유",
    label: "tip",
    template: "tip.yml",
    description: "Hermes workflow, 스킬, 자동화 팁을 공유합니다.",
    icon: Lightbulb,
  },
  {
    title: "문서 개선",
    label: "docs",
    template: "docs.yml",
    description: "번역 오류, 빠진 공식 정보, 구조 개선을 제안합니다.",
    icon: BookOpen,
  },
  {
    title: "버그 제보",
    label: "bug",
    template: "bug.yml",
    description: "사이트나 문서에서 깨진 부분, 링크 오류, 렌더링 문제를 제보합니다.",
    icon: Bug,
  },
  {
    title: "제안",
    label: "proposal",
    template: "proposal.yml",
    description: "커뮤니티 운영, 문서 범위, 기능 아이디어를 제안합니다.",
    icon: MessageSquare,
  },
  {
    title: "쇼케이스",
    label: "showcase",
    template: "showcase.yml",
    description: "Hermes로 만든 workflow, 자동화, 결과물을 공유합니다.",
    icon: Sparkles,
  },
];

export const metadata = {
  title: "커뮤니티 | Hermes KR",
  description: "GitHub Issues 기반 Hermes KR 커뮤니티",
};

export default function CommunityPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <Badge variant="info" className="mb-4">가입 없는 커뮤니티</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-5">
            GitHub Issues로 운영합니다
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Hermes KR은 초기 단계에서 별도 회원가입, DB, 댓글 시스템을 운영하지 않습니다.
            질문과 토론은 GitHub Issues에 공개적으로 남겨서 검색 가능한 지식 베이스로 쌓습니다.
          </p>
          <a
            href={siteConfig.operatorThreadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-gray-80 bg-surface-card px-4 py-3 transition-colors hover:border-hermes-primary/60"
          >
            <img
              src={withBasePath(siteConfig.operatorAvatar)}
              alt="roach_log 프로필 이미지"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-hermes-primary/30"
            />
            <span>
              <span className="block text-xs text-text-disabled">운영자</span>
              <span className="block text-sm font-semibold text-text-primary">
                roach_log · Threads에서 보기 ↗
              </span>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          <section>
            <h2 className="text-2xl font-bold font-heading text-text-primary mb-6">
              어떤 이슈를 남길까요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.label} variant="elevated" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-hermes-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-hermes-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-text-primary font-heading mb-2">
                          {category.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed mb-4">
                          {category.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <a href={newIssueUrl(category.template, [category.label])} target="_blank" rel="noopener noreferrer">
                            <Button size="sm">작성하기 ↗</Button>
                          </a>
                          <a href={issuesUrl([category.label])} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost">목록 보기</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          <aside className="lg:sticky lg:top-24 space-y-5">
            <Card variant="elevated">
              <h2 className="text-lg font-semibold text-text-primary font-heading mb-3">
                운영 원칙
              </h2>
              <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <li>• GitHub 계정만 있으면 참여할 수 있습니다.</li>
                <li>• 질문/답변은 공개 이슈로 남겨 검색 가능하게 둡니다.</li>
                <li>• 비밀키, 토큰, 개인정보는 절대 올리지 마세요.</li>
                <li>• 문서 오류는 언제든 이슈나 PR로 제안할 수 있습니다.</li>
              </ul>
            </Card>

            <Card variant="outlined">
              <h2 className="text-lg font-semibold text-text-primary font-heading mb-3">
                바로가기
              </h2>
              <div className="flex flex-col gap-3">
                <a href={`${siteConfig.repoUrl}/issues`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" variant="secondary">전체 이슈 보기</Button>
                </a>
                <a href={`${siteConfig.repoUrl}/issues/new/choose`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">새 이슈 작성</Button>
                </a>
                <a href={`${siteConfig.repoUrl}/pulls`} target="_blank" rel="noopener noreferrer" className="text-sm text-hermes-primary hover:underline text-center">
                  Pull Requests 보기 ↗
                </a>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
