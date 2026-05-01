import Link from "next/link";
import { ArrowRight, MessageSquare, Globe, Lightbulb, Bug, BookOpen, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import GithubIcon from "@/components/ui/GithubIcon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ThreadsHighlights from "@/components/operator/ThreadsHighlights";
import HermesUpdates from "@/components/operator/HermesUpdates";
import { newIssueUrl, siteConfig, withBasePath } from "@/lib/site";

const issueActions = [
  {
    title: "질문하기",
    description: "설치, 설정, 도구 사용 중 막힌 점을 질문하세요.",
    href: newIssueUrl("question.yml", ["question"]),
    icon: MessageSquare,
  },
  {
    title: "팁 공유",
    description: "Hermes를 쓰면서 알게 된 workflow나 노하우를 공유하세요.",
    href: newIssueUrl("tip.yml", ["tip"]),
    icon: Lightbulb,
  },
  {
    title: "문서 개선",
    description: "번역 오류, 빠진 공식 정보, 보강할 내용을 알려주세요.",
    href: newIssueUrl("docs.yml", ["docs"]),
    icon: BookOpen,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="info" className="mb-6">
            GitHub Issues 기반 공개 커뮤니티
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-text-primary leading-tight mb-6">
            Hermes Agent
            <br />
            <span className="text-hermes-primary">한국어 문서 허브</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            무거운 가입/DB 없이 가볍게 시작합니다.
            <br />
            문서는 정적으로, 질문과 토론은 GitHub Issues에서 이어갑니다.
          </p>
          <a
            href={siteConfig.operatorThreadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-10 inline-flex items-center gap-3 rounded-full border border-gray-80 bg-surface-card/80 px-4 py-3 shadow-soft transition-colors hover:border-hermes-primary/60"
          >
            <img
              src={withBasePath(siteConfig.operatorAvatar)}
              alt="roach_log 프로필 이미지"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-hermes-primary/30"
            />
            <span className="text-left">
              <span className="block text-xs text-text-disabled">운영</span>
              <span className="block text-sm font-semibold text-text-primary group-hover:text-hermes-primary">
                roach_log가 운영하고 있어요 ↗
              </span>
            </span>
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs">
              <Button size="lg">
                문서 읽기
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/community">
              <Button size="lg" variant="secondary">
                커뮤니티 참여하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ThreadsHighlights />

      <HermesUpdates />

      <section className="py-20 px-4 bg-surface-dark-alt/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-text-primary text-center mb-4">
            왜 GitHub Issues인가요?
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            커뮤니티가 커질지 검증하기 전에는 서버, DB, 인증보다 공개 이슈 기반 운영이 더 단순하고 오래갑니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <GithubIcon className="w-10 h-10 text-hermes-primary mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                별도 가입 없음
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                GitHub 계정으로 바로 질문하고 댓글을 남깁니다. OAuth, 세션, DB를 직접 운영하지 않습니다.
              </p>
            </Card>

            <Card variant="elevated">
              <Globe className="w-10 h-10 text-hermes-primary mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                정적 문서
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                한국어 문서는 GitHub Pages로 배포합니다. 서버가 없어도 오래 보존되고 기여 흐름도 단순합니다.
              </p>
            </Card>

            <Card variant="elevated">
              <Sparkles className="w-10 h-10 text-hermes-primary mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                작게 시작
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                커뮤니티가 살아나면 그때 게시판/뉴스레터/회원 시스템을 다시 붙이면 됩니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="success" className="mb-4">GitHub Issues</Badge>
            <h2 className="text-3xl font-bold font-heading text-text-primary mb-4">
              지금 바로 참여하기
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              질문, 팁, 문서 수정 제안은 모두 GitHub Issue로 남깁니다. 공개적으로 쌓이는 지식 베이스가 됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {issueActions.map((action) => {
              const Icon = action.icon;
              return (
                <a key={action.title} href={action.href} target="_blank" rel="noopener noreferrer">
                  <Card variant="elevated" className="h-full hover:border-hermes-primary/60 transition-colors">
                    <Icon className="w-9 h-9 text-hermes-primary mb-4" />
                    <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                      {action.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {action.description}
                    </p>
                    <span className="text-sm text-hermes-primary">Issue 작성하기 ↗</span>
                  </Card>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a href={`${siteConfig.repoUrl}/issues`} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                열린 이슈 보기
              </Button>
            </a>
            <a href={newIssueUrl("bug.yml", ["bug"])} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">
                <Bug className="w-4 h-4" />
                버그 제보
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
