# GitHub Pages 배포

Hermes KR은 정적 사이트로 배포합니다. 별도 서버, DB, OAuth, secret이 필요하지 않습니다.

## 전제

- GitHub 저장소가 있어야 합니다.
- 저장소 이름은 현재 workflow 기준 `hermes-ko`입니다.
- GitHub Pages Source는 **GitHub Actions**로 설정합니다.

## 로컬 빌드

```bash
npm install
npm run build
```

정적 export 결과는 `out/` 디렉터리에 생성됩니다.

## GitHub Pages용 빌드

Project Pages URL이 `https://<user>.github.io/hermes-ko/`라면 base path가 필요합니다.

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/hermes-ko npm run build
```

`next.config.ts`는 이 값을 보고 다음을 적용합니다.

```ts
output: "export"
basePath: "/hermes-ko"
assetPrefix: "/hermes-ko/"
images: { unoptimized: true }
```

## 자동 배포

`.github/workflows/pages.yml`이 다음 일을 합니다.

1. checkout
2. Node 22 설정
3. `npm ci`
4. `GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/hermes-ko npm run build`
5. `out/` 업로드
6. GitHub Pages 배포

## GitHub 저장소 설정

1. 저장소 Settings → Pages
2. Build and deployment → Source: **GitHub Actions**
3. 저장소 Settings → Actions → General에서 workflow 권한 확인
4. `main` 브랜치에 push

## Issue templates

커뮤니티 글쓰기는 GitHub Issues template으로 처리합니다.

```text
.github/ISSUE_TEMPLATE/
├── question.yml
├── tip.yml
├── docs.yml
├── bug.yml
├── proposal.yml
├── showcase.yml
└── config.yml
```

권장 labels:

```text
question
tip
docs
bug
proposal
showcase
help wanted
good first issue
```

## 배포 후 확인

- `/` 랜딩 페이지
- `/docs`
- `/docs/quickstart`
- `/docs/environment-variables`
- `/community`
- GitHub issue template 링크
- 다크/라이트 모드

## 문제 해결

### CSS/이미지가 깨짐

Project Pages에서 `/hermes_logo.png` 같은 root path는 깨질 수 있습니다. 이 프로젝트는 `NEXT_PUBLIC_BASE_PATH=/hermes-ko`와 `withBasePath()` helper로 public asset 경로를 보정합니다.

### 404가 남

GitHub Pages Source가 GitHub Actions인지 확인하세요. `gh-pages` 브랜치 방식이 아니라 Actions artifact 방식입니다.

### 링크가 `/hermes-ko/hermes-ko`처럼 중복됨

workflow의 `NEXT_PUBLIC_BASE_PATH`와 `next.config.ts`의 repoName이 둘 다 같은지 확인하세요. 현재 기본값은 `hermes-ko`입니다.
