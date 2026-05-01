import Link from "next/link";
import { siteConfig, withBasePath } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-80 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={withBasePath("/hermes_logo.png")} alt="Hermes KR" className="w-6 h-6" />
              <span className="font-semibold text-text-primary font-heading">Hermes KR</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Hermes Agent 한국어 문서와 GitHub Issues 기반 커뮤니티.
              <br />
              가볍게 시작하고, 필요할 때 키웁니다.
            </p>
            <a
              href={siteConfig.operatorThreadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-hermes-primary"
            >
              <img
                src={withBasePath(siteConfig.operatorAvatar)}
                alt="roach_log 프로필 이미지"
                className="h-7 w-7 rounded-full object-cover"
              />
              roach_log가 운영합니다 ↗
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-text-secondary hover:text-text-primary">
                  문서
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-text-secondary hover:text-text-primary">
                  커뮤니티
                </Link>
              </li>
              <li>
                <Link href="/qa" className="text-sm text-text-secondary hover:text-text-primary">
                  Q&A
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-sm text-text-secondary hover:text-text-primary">
                  TIP
                </Link>
              </li>
              <li>
                <a href={siteConfig.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary">
                  Hermes KR GitHub ↗
                </a>
              </li>
              <li>
                <a href={siteConfig.upstreamUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary">
                  공식 Hermes Agent ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">참여하기</h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              질문, 팁, 문서 개선 제안은 GitHub Issues로 남겨주세요.
            </p>
            <a href={`${siteConfig.repoUrl}/issues/new/choose`} target="_blank" rel="noopener noreferrer" className="text-sm text-hermes-primary hover:underline">
              새 이슈 작성하기 ↗
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-80 text-center">
          <p className="text-xs text-text-disabled">
            © {new Date().getFullYear()} Hermes KR Community. Static site powered by GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
