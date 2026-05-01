# Hermes KR

Hermes KR은 [Nous Research Hermes Agent](https://github.com/NousResearch/hermes-agent)를 위한 한국어 문서 허브이자, GitHub Issues 기반 공개 커뮤니티입니다.

초기 운영은 일부러 가볍게 갑니다.

- 별도 회원가입 없음
- 자체 DB 없음
- OAuth 서버 없음
- Vercel/Turso/Resend 없음
- GitHub Pages 정적 배포
- 질문/토론/문서 개선은 GitHub Issues 사용

## 사이트 구조

| 경로 | 설명 |
|---|---|
| `/` | 소개와 참여 CTA |
| `/docs` | Hermes Agent 한국어 문서 |
| `/community` | GitHub Issues 기반 커뮤니티 안내 |

## 커뮤니티 운영 방식

GitHub Issues를 게시판처럼 사용합니다.

| 분류 | Label | Template |
|---|---|---|
| 질문 | `question` | `question.yml` |
| 팁 공유 | `tip` | `tip.yml` |
| 문서 개선 | `docs` | `docs.yml` |
| 버그 제보 | `bug` | `bug.yml` |
| 제안 | `proposal` | `proposal.yml` |
| 쇼케이스 | `showcase` | `showcase.yml` |

## 개발

```bash
npm install
npm run dev
```

브라우저에서 <http://localhost:3000>을 엽니다.

## 정적 빌드

```bash
npm run build
```

`next.config.ts`는 `output: "export"`를 사용합니다. 빌드 결과는 `out/`에 생성됩니다.

GitHub Pages project site(`/hermes-ko`)로 빌드할 때는 workflow에서 다음 환경변수를 설정합니다.

```bash
GITHUB_PAGES=true
NEXT_PUBLIC_BASE_PATH=/hermes-ko
```

## 배포

GitHub Actions workflow가 `.github/workflows/pages.yml`에 있습니다.

1. GitHub 저장소 Settings → Pages
2. Source를 **GitHub Actions**로 설정
3. `main` 브랜치에 push
4. Actions의 `Deploy GitHub Pages` workflow가 `out/`을 배포

## 기술 스택

| 영역 | 사용 |
|---|---|
| Framework | Next.js 16 App Router |
| Styling | Tailwind CSS 4 |
| Markdown | react-markdown + remark-gfm + rehype-highlight |
| Hosting | GitHub Pages |
| Community | GitHub Issues |

## 중요한 설계 결정

이 프로젝트는 초기 커뮤니티 검증 단계이므로 서버 기능을 의도적으로 제거했습니다.

이전 계획에는 NextAuth, Turso, Resend, Vercel이 있었지만 현재는 사용하지 않습니다. 커뮤니티가 실제로 활성화되면 그때 별도 게시판/뉴스레터/로그인 시스템을 다시 붙일 수 있습니다.

## 라이선스

MIT
