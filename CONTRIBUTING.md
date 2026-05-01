# 기여하기

Hermes KR은 한국어 문서와 GitHub Issues 기반 커뮤니티를 함께 운영합니다.

## 기여 방법

### 문서 오류/개선 제안

가장 쉬운 방법은 GitHub Issue를 여는 것입니다.

- `docs` label
- `문서 개선` issue template 사용
- 가능하면 공식 문서/코드 링크를 함께 첨부

### 직접 수정 PR

```bash
git clone https://github.com/tmdgusya/hermes-ko.git
cd hermes-ko
npm install
npm run dev
```

문서는 `content/docs/*.md`에 있습니다.

수정 후 확인:

```bash
npm run build
```

UI/문서 렌더링 변경 시 확인할 페이지:

- `/docs/quickstart`
- `/docs/environment-variables`
- `/community`
- `/`

## 공식 문서 번역 원칙

Hermes Agent 문서를 번역할 때는 반드시 upstream 공식 문서나 코드 기준으로 확인합니다.

특히 아래처럼 제품 고유의 운영 디테일을 일반적인 웹앱 관습으로 바꾸면 안 됩니다.

- Secret 위치: `~/.hermes/.env`
- 일반 설정 위치: `~/.hermes/config.yaml`
- 확인 명령: `hermes config path`, `hermes config env-path`
- OAuth/auth 저장 방식
- gateway 재시작 필요 여부
- toolset 적용 시점

## 커뮤니티 이슈 분류

| Label | 용도 |
|---|---|
| `question` | 질문 |
| `tip` | 사용 팁 |
| `docs` | 문서 개선 |
| `bug` | 사이트/문서 버그 |
| `proposal` | 운영/기능 제안 |
| `showcase` | 활용 사례 공유 |

## 코드 구조

```text
app/
├── page.tsx
├── community/page.tsx
└── docs/
    ├── page.tsx
    └── [slug]/page.tsx
components/
├── docs/
├── layout/
├── providers/
└── ui/
content/docs/
.github/
├── ISSUE_TEMPLATE/
└── workflows/pages.yml
```

## 하지 않는 것

현재 프로젝트는 정적 사이트입니다. 아래 기능은 의도적으로 제거했습니다.

- 자체 회원가입
- NextAuth 로그인
- DB 게시판
- API routes
- 뉴스레터 서버 연동
- Vercel/Turso/Resend 의존

커뮤니티가 충분히 커지면 별도 논의 후 다시 도입합니다.
