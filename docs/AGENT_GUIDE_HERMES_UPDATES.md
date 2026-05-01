# AGENT GUIDE: Hermes Agent Git 업데이트를 Hermes KR 커뮤니티에 올리는 방법

작성일: 2026-05-01  
대상 repo: `tmdgusya/hermes-ko`  
업스트림 repo: `NousResearch/hermes-agent`

이 문서는 다른 에이전트가 공식 Hermes Agent Git log를 확인하고, Hermes KR 사이트/커뮤니티에 업데이트를 올릴 때 따라야 하는 작업 지침입니다.

---

## 0. 핵심 원칙

1. **공식 Git log를 먼저 확인한다.**
   - 출처: <https://github.com/NousResearch/hermes-agent/commits/main>
   - GitHub API: `https://api.github.com/repos/NousResearch/hermes-agent/commits?per_page=30`

2. **commit message를 그대로 복붙만 하지 않는다.**
   - 사용자에게 의미 있는 단위로 묶는다.
   - 예: `ACP`, `Agent 안정성`, `Gateway / State`, `Config / Auth`, `Docs`, `Tools`, `Kanban`.

3. **업데이트 일자를 반드시 적는다.**
   - 각 카드의 `date`는 commit의 committer date 기준 `YYYY-MM-DD`로 쓴다.
   - 여러 날짜가 섞이면 날짜별로 카드/섹션을 나누거나, 카드 안에 대표 날짜를 쓰고 commit 링크에 실제 commit을 남긴다.

4. **추측 금지.**
   - commit message와 diff에서 확인되지 않은 기능은 “출시됨”, “공식 릴리즈됨”이라고 쓰지 않는다.
   - 릴리즈 태그가 없으면 “최근 Git log 기준” 또는 “main branch 기준”이라고 표현한다.

5. **시크릿/토큰 금지.**
   - GitHub token, API key, `.env`, auth config 값은 문서나 이슈에 절대 넣지 않는다.

6. **사이트 변경 후에는 반드시 build + vision QA를 한다.**
   - 이 프로젝트는 UI 변경 후 browser vision 확인이 필수다.

---

## 1. 작업 위치

이 프로젝트는 두 위치가 있을 수 있다.

```txt
로컬 작업본: /Users/roach/hermes-ko/
배포용 clone: /tmp/hermes-ko-deploy/
```

일반적으로 코드는 `/Users/roach/hermes-ko/`에서 수정하고, 배포 전 `/tmp/hermes-ko-deploy/`로 sync한 뒤 commit/push한다.

배포 repo:

```txt
https://github.com/tmdgusya/hermes-ko
```

배포 URL:

```txt
https://tmdgusya.github.io/hermes-ko/
```

---

## 2. 최신 Hermes Agent Git log 가져오기

터미널에서 실행한다.

```bash
python3 - <<'PY'
import json, urllib.request

url = 'https://api.github.com/repos/NousResearch/hermes-agent/commits?per_page=30'
req = urllib.request.Request(
    url,
    headers={
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'Hermes-KR-update-fetcher',
    },
)
with urllib.request.urlopen(req, timeout=20) as r:
    data = json.load(r)

for c in data:
    sha = c['sha'][:7]
    msg = c['commit']['message'].split('\n')[0]
    date = c['commit']['committer']['date'][:10]
    html = c['html_url']
    print(f'{date}\t{sha}\t{msg}\t{html}')
PY
```

날짜별로 묶어 보려면:

```bash
python3 - <<'PY'
import json, urllib.request
from collections import defaultdict

url = 'https://api.github.com/repos/NousResearch/hermes-agent/commits?per_page=50'
req = urllib.request.Request(url, headers={'User-Agent': 'Hermes-KR-update-fetcher'})
with urllib.request.urlopen(req, timeout=20) as r:
    data = json.load(r)

by_date = defaultdict(list)
for c in data:
    date = c['commit']['committer']['date'][:10]
    by_date[date].append((c['sha'][:7], c['commit']['message'].split('\n')[0], c['html_url']))

for date, items in by_date.items():
    print('\n##', date)
    for sha, msg, url in items:
        print(f'- {sha} {msg} {url}')
PY
```

---

## 3. 업데이트를 어떻게 요약할지 결정하기

raw commit을 바로 사이트에 넣지 말고, 아래 기준으로 묶는다.

| commit prefix / area | 사이트 카테고리 예시 | 설명 방향 |
|---|---|---|
| `feat(acp)`, `fix(acp)` | `ACP` | IDE/ACP 연동, steer/queue, WSL 등 개발자 흐름 개선 |
| `fix(agent)` | `Agent 안정성` | 루프 방지, tool-call 안정성, 경고/guardrail |
| `fix(gateway)` | `Gateway / State` | gateway dispatcher, callback, session branching 안정성 |
| `fix(state)` | `State / Replay` | conversation replay, metadata, finish_reason 보존 |
| `fix(auth)` | `Auth / Config` | provider config 저장, OAuth/auth 안정성 |
| `docs:` | `Docs` | 공식 문서 변경, 번역/한국어 문서 반영 필요 여부 |
| `feat(kanban)` / `kanban` | `Kanban / Multi-agent` | 멀티에이전트 운영, task dispatch, runs/log/context |
| `tools`, `mcp`, `plugins` | `Tools / MCP / Plugins` | toolset, MCP, plugin 사용성 변화 |

좋은 한국어 요약 예시:

```txt
ACP 쪽에 steer/queue slash command가 추가되고, 중단된 prompt를 steer 흐름에서 다시 이어받는 안정성 수정이 들어왔습니다. Windows/WSL 환경의 cwd 처리도 보강됐습니다.
```

나쁜 요약 예시:

```txt
Hermes가 완전히 새 ACP 기능을 공식 출시했습니다.
```

이유: commit log만 보고 “공식 출시”라고 단정하면 안 된다.

---

## 4. 사이트 업데이트 섹션 수정하기

현재 홈페이지의 업데이트 섹션 데이터는 다음 파일에 있다.

```txt
lib/hermesUpdates.ts
```

UI 컴포넌트는 다음 파일이다.

```txt
components/operator/HermesUpdates.tsx
```

홈페이지에 컴포넌트가 연결된 파일은 다음이다.

```txt
app/page.tsx
```

### 4.1 `lib/hermesUpdates.ts` 구조

다음 형태를 유지한다.

```ts
export type HermesUpdate = {
  date: string;
  title: string;
  summary: string;
  category: string;
  commits: Array<{
    sha: string;
    message: string;
    href: string;
  }>;
};

export const hermesUpdatesLastChecked = "YYYY-MM-DD";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "YYYY-MM-DD",
    title: "업데이트 제목",
    category: "카테고리",
    summary: "한국어 요약",
    commits: [
      {
        sha: "abcdef0",
        message: "commit message",
        href: "https://github.com/NousResearch/hermes-agent/commit/...",
      },
    ],
  },
];
```

### 4.2 작성 규칙

- `hermesUpdatesLastChecked`는 작업일로 갱신한다.
- `date`는 commit 날짜를 쓴다.
- `title`은 사용자 입장에서 의미가 드러나게 쓴다.
- `summary`는 1~2문장으로 쓴다.
- `commits`에는 관련 commit 2~5개 정도만 넣는다.
- 너무 많은 commit을 카드 하나에 넣지 않는다.
- commit URL은 반드시 `https://github.com/NousResearch/hermes-agent/commit/<full_sha>` 형식으로 넣는다.

---

## 5. GitHub Issues 커뮤니티에도 올리는 방법

사이트 카드만 업데이트하지 말고, 필요하면 GitHub Issue로도 “업데이트 공유” 글을 남긴다.

### 5.1 권장 label

아래 label이 없다면 만든다.

```bash
gh label create upstream-update \
  --repo tmdgusya/hermes-ko \
  --color 0EA5E9 \
  --description "공식 Hermes Agent upstream 업데이트 요약" \
  2>/dev/null || true

gh label create release-note \
  --repo tmdgusya/hermes-ko \
  --color 2DD4BF \
  --description "릴리즈/변경사항 공유" \
  2>/dev/null || true
```

### 5.2 Issue 작성 예시

```bash
gh issue create \
  --repo tmdgusya/hermes-ko \
  --title "[업데이트] Hermes Agent Git log 요약 - YYYY-MM-DD" \
  --label upstream-update \
  --label release-note \
  --body-file /tmp/hermes-update-YYYY-MM-DD.md
```

`/tmp/hermes-update-YYYY-MM-DD.md` 예시:

```md
## Hermes Agent 업데이트 요약

기준: 공식 Git log  
확인일: YYYY-MM-DD  
출처: https://github.com/NousResearch/hermes-agent/commits/main

### 1. ACP steer/queue 개선

ACP 쪽에 steer/queue slash command가 추가되고, 중단된 prompt를 steer 흐름에서 다시 이어받는 안정성 수정이 들어왔습니다.

관련 commit:
- e27b0b7 feat(acp): add steer and queue slash commands
- 7888636 fix(acp): replay interrupted prompts for steer

### 2. Agent 안정성 개선

도구 호출 반복 루프를 감지하는 guardrail이 추가됐고, 경고 우선 방식으로 조정됐습니다.

관련 commit:
- 58b8996 fix(agent): add tool-call loop guardrails
- 0704589 fix(agent): make tool loop guardrails warning-first

---

주의: 이 글은 공식 릴리즈 노트가 아니라 main branch Git log 기준 요약입니다.
```

### 5.3 Issue 작성 시 주의

- “공식 릴리즈”라고 쓰려면 GitHub Release/tag를 확인해야 한다.
- main branch commit만 본 경우에는 “Git log 기준”, “main 기준”이라고 쓴다.
- 내부 추측이나 과장 금지.
- 민감 정보, 로컬 경로, 토큰 금지.

---

## 6. 로컬 빌드 검증

사이트 데이터를 수정했다면 반드시 빌드한다.

```bash
cd /Users/roach/hermes-ko
npm run build
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/hermes-ko npm run build
```

둘 다 성공해야 한다.

성공 시 `/` route가 static으로 나오고, `/qa`, `/community`, `/docs`도 빌드되어야 한다.

---

## 7. 로컬 visual QA

UI를 바꿨다면 로컬 서버에서 확인한다.

이미 dev server가 떠 있을 수 있으니 먼저 확인한다.

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
```

필요하면 dev server 실행:

```bash
cd /Users/roach/hermes-ko
npm run dev
```

브라우저에서 확인할 URL:

```txt
http://localhost:3000/
```

확인할 항목:

- `Hermes 최근 업데이트` 섹션이 보이는가
- `마지막 확인: YYYY-MM-DD`가 보이는가
- 각 카드에 업데이트 일자가 보이는가
- commit hash 링크가 깨지지 않는가
- 모바일/좁은 화면에서 텍스트가 넘치지 않는가
- 전체 디자인 톤이 기존 `Threads에서 온 운영자 노트` 섹션과 어울리는가

이 프로젝트에서는 UI 변경 후 `browser_vision`으로 시각 검증을 반드시 수행한다.

---

## 8. 배포 절차

배포는 `/tmp/hermes-ko-deploy` clone에서 commit/push한다.

```bash
rsync -a --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude 'out' \
  --exclude '.env*' \
  /Users/roach/hermes-ko/ /tmp/hermes-ko-deploy/

cd /tmp/hermes-ko-deploy

git status --short
rm -rf .next out
npm run build
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/hermes-ko npm run build

git add .
git commit -m "Update Hermes upstream git log summary"
git push origin main
```

GitHub Pages workflow 확인:

```bash
run_id=$(gh run list --repo tmdgusya/hermes-ko --limit 1 --json databaseId --jq '.[0].databaseId')
gh run watch --repo tmdgusya/hermes-ko "$run_id" --exit-status
```

배포 성공 후 실제 URL 확인:

```txt
https://tmdgusya.github.io/hermes-ko/
```

---

## 9. 배포 후 검증

브라우저에서 실제 배포 URL을 열고 확인한다.

필수 확인:

- 업데이트 섹션이 실제 배포 페이지에 보이는가
- 최신 일자가 반영됐는가
- commit 링크들이 `github.com/NousResearch/hermes-agent/commit/...`로 연결되는가
- `공식 Git log 보기` 버튼이 `https://github.com/NousResearch/hermes-agent/commits/main`으로 연결되는가
- 레이아웃이 깨지지 않는가

브라우저 콘솔에서 링크 확인 예시:

```js
Array.from(document.querySelectorAll('a[href*="github.com/NousResearch/hermes-agent"]'))
  .map(a => ({ text: a.textContent?.trim().replace(/\s+/g, ' '), href: a.href }))
```

---

## 10. 최종 보고 형식

작업 완료 후 사용자에게 아래 형식으로 보고한다.

```md
완료했습니다.

- 기준: NousResearch/hermes-agent 최근 Git log
- 마지막 확인: YYYY-MM-DD
- 반영 위치: https://tmdgusya.github.io/hermes-ko/
- 추가/수정한 카드: N개
- 배포 commit: <short_sha> <commit_message>
- GitHub Pages deploy: success
- vision QA: 완료

주의: 이 내용은 공식 릴리즈 노트가 아니라 main branch Git log 기준 요약입니다.
```

---

## 11. 현재 사이트에 이미 들어간 업데이트 예시

현재 `2026-05-01` 기준으로 사이트에는 아래 묶음이 들어가 있다.

1. `ACP steer/queue 명령과 중단 프롬프트 복구 개선`
2. `Agent tool-call loop guardrails 추가`
3. `Gateway/session replay 메타데이터 보존 개선`
4. `Config/Auth boolean 처리와 provider config write 안정화`

새 에이전트는 다음 작업 때 이 항목을 무조건 덮어쓰기보다, 최신 commit log를 보고:

- 새 날짜가 있으면 위에 추가하거나,
- 같은 날짜의 관련 commit이 늘었으면 기존 카드에 보강하거나,
- 오래된 항목이 너무 많아지면 최근 4~6개 카드만 유지한다.

---

## 12. 체크리스트

작업 전:

- [ ] 공식 Git log 확인
- [ ] commit 날짜 확인
- [ ] 릴리즈/tag 여부 확인이 필요한지 판단

작성 중:

- [ ] `lib/hermesUpdates.ts` 갱신
- [ ] `hermesUpdatesLastChecked` 갱신
- [ ] commit URL full SHA 사용
- [ ] 한국어 요약은 추측 없이 작성

검증:

- [ ] `npm run build` 성공
- [ ] `GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/hermes-ko npm run build` 성공
- [ ] local visual QA
- [ ] deployed visual QA
- [ ] commit 링크 href 확인

배포:

- [ ] `/tmp/hermes-ko-deploy`로 rsync
- [ ] commit/push
- [ ] GitHub Actions Pages success 확인
- [ ] 최종 URL 보고
