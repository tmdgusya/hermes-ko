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

export const hermesUpdatesLastChecked = "2026-05-12";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-12",
    title: "Computer Use / TUI Clipboard: hermes update 시 cua-driver 갱신 + OSC52 터미널 클립보드 안전망 스킵 + guard·comment 정리",
    category: "Computer Use / TUI",
    summary:
      "hermes update 실행 시 cua-driver를 갱신(refresh)하고, install --upgrade 옵션이 추가됩니다 (#ced1990). OSC52 기능을 지원하는 터미널에서 불필요한 네이티브 클립보드 안전망(native safety net)을 건너뛰도록 수정됩니다 (#3c23b15). guard 조건 수정(#057fc7b), 주석 정리(#32abe74, #f0c2964)가 포함됩니다 (main branch 기준).",
    commits: [
      {
        sha: "ced1990",
        message: "feat(computer-use): refresh cua-driver on `hermes update` + add `install --upgrade` (#24063)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ced1990c1cab2413e6778d0eb35f526b6b9c1359",
      },
      {
        sha: "3c23b15",
        message: "fix(tui-clipboard): skip native safety net on OSC52-capable terminals (#20954)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3c23b15f815ece74bfadbe2bd38e38512f42d2ad",
      },
      {
        sha: "057fc7b",
        message: "fix guard",
        href: "https://github.com/NousResearch/hermes-agent/commit/057fc7b073731934e56850f913dbc85aa5d6ac26",
      },
      {
        sha: "32abe74",
        message: "fix comment",
        href: "https://github.com/NousResearch/hermes-agent/commit/32abe742fa81bee3acb42a274b2501afe1657c08",
      },
      {
        sha: "f0c2964",
        message: "remove comments",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0c2964f0b5a0e84e06d07ae6de7432ad792c23a",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Model / Provider: Portal 무료 모델 피커 노출, kimi·moonshot 프로바이더 매핑, kimi-k2.6 context-length 수정, 모델 카탈로그 리빌드, Portal Qwen 캐시 라우팅",
    category: "Model / Provider",
    summary:
      "curated list가 오래된 경우에도 Portal 플래그가 지정된 무료 모델을 피커에 표시합니다 (#e855925). OpenRouter를 이미 알려진 프로바이더에 대해서는 스킵하고 kimi/moonshot을 PROVIDER_TO_MODELS_DEV에 추가합니다 (#e2b713c). Ollama Cloud 및 Kimi Coding에서 kimi-k2.6의 context-length 해석이 수정됩니다 (#91eef62). Nous Portal Qwen 모델을 Portal-Claude 캐시 경로로 라우팅합니다 (#7993e03). kimi 관련 수정사항이 추가로 반영됩니다 (#528bba6). 모델 카탈로그가 리빌드됩니다 (#e155f2a) (main branch 기준).",
    commits: [
      {
        sha: "e855925",
        message: "fix(nous): surface Portal-flagged free models in picker even when curated list is stale (#24082)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e85592591e8028cceecb0ea2b4992a1643b52f93",
      },
      {
        sha: "e2b713c",
        message: "fix(model-metadata): skip OpenRouter for known providers, add kimi/moonshot to PROVIDER_TO_MODELS_DEV",
        href: "https://github.com/NousResearch/hermes-agent/commit/e2b713cced07076ccb751e28b30d235fede1fa59",
      },
      {
        sha: "91eef62",
        message: "fix: correct context-length resolution for kimi-k2.6 on Ollama Cloud and Kimi Coding",
        href: "https://github.com/NousResearch/hermes-agent/commit/91eef6255e39e0be7b0730aabf6ad2ea49eefe77",
      },
      {
        sha: "7993e03",
        message: "fix(cache): route Nous Portal Qwen through Portal-Claude cache pathway (#24151)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7993e03c06145baece40427801161918b4a9130e",
      },
      {
        sha: "528bba6",
        message: "fix kimi",
        href: "https://github.com/NousResearch/hermes-agent/commit/528bba67340f6efaac8e99f13b6d52eda9f8a5e3",
      },
      {
        sha: "e155f2a",
        message: "rebuild model catalog",
        href: "https://github.com/NousResearch/hermes-agent/commit/e155f2aca9dc9135141d37d3aade060a9a02e470",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "CLI / TUI / Agent Tools: HERMES_SESSION_ID 노출, Claude 세션 간 프리픽스 캐시, CJK 마크다운 테이블 정렬 + 세로 폴백, docker_extra_args + display.timestamps, Nous Portal 모델 카탈로그, TUI 슬래시 확인 모달, 마크다운 링크 페이지 제목 해석, TUI 빌드 로직 단순화",
    category: "CLI / TUI / Agent Tools",
    summary:
      "에이전트 도구에서 HERMES_SESSION_ID를 ContextVar와 환경 변수로 노출합니다 (#2718834). Anthropic·OpenRouter·Nous Portal에서 Claude에 대한 세션 간(cross-session) 1시간 프리픽스 캐시가 추가됩니다 (#7b76366). CLI/TUI에서 CJK 및 와이드 문자 마크다운 테이블 정렬이 수정됩니다 (#1d00716). 터미널 너비보다 넓은 마크다운 테이블에 세로(vertical) 폴백이 추가됩니다 (#ea1d046). 터미널/CLI에 docker_extra_args 및 display.timestamps 옵션이 추가됩니다 (#ebf2ea5). /model 명령에서 Nous Portal 원격 카탈로그 매니페스트의 모델을 표시합니다 (#8e2eb4b). 슬래시 명령 확인(confirm)에 TUI 모달을 사용합니다 (#054f568). 마크다운 링크를 읽기 쉬운 페이지 제목으로 해석합니다 (#75b428c). TUI 빌드 로직을 단순화하고 오래된(stale) 상태 확인을 제거합니다 (#c6ca116) (main branch 기준).",
    commits: [
      {
        sha: "2718834",
        message: "feat: expose HERMES_SESSION_ID to agent tools via ContextVar + env (#23847)",
        href: "https://github.com/NousResearch/hermes-agent/commit/271883447e7b8a5b9bd95879aca71afadc87616f",
      },
      {
        sha: "7b76366",
        message: "feat(prompt-cache): cross-session 1h prefix cache for Claude on Anthropic / OpenRouter / Nous Portal (#23828)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7b76366552eb0e2fbdf156c261403202ac064737",
      },
      {
        sha: "1d00716",
        message: "fix(cli,tui): align CJK / wide-char markdown tables (#23863)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1d007167541ef5405fde620fdcce6dfcd79c0628",
      },
      {
        sha: "ea1d046",
        message: "fix(cli): vertical fallback for markdown tables wider than terminal (#23948)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ea1d0462cf5ec3799fb0c4b8e39685302e53039b",
      },
      {
        sha: "ebf2ea5",
        message: "feat(terminal,cli): docker_extra_args + display.timestamps",
        href: "https://github.com/NousResearch/hermes-agent/commit/ebf2ea584ab2ca37cd70b80b4d8c3bc23604cf47",
      },
      {
        sha: "8e2eb4b",
        message: "fix(/model): surface Nous Portal models from remote catalog manifest (#23912)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8e2eb4b511967a0ad776c0c667f6914072e1b7ec",
      },
      {
        sha: "054f568",
        message: "fix: use TUI modal for slash confirmations",
        href: "https://github.com/NousResearch/hermes-agent/commit/054f56857842a25b8ef5f627c7c951de28eee52a",
      },
      {
        sha: "75b428c",
        message: "feat(ui-tui): resolve markdown links to readable page titles (#24013)",
        href: "https://github.com/NousResearch/hermes-agent/commit/75b428c8521d7676991c93b9ecd66eb12c6469b6",
      },
      {
        sha: "c6ca116",
        message: "refactor(tui): simplify TUI build logic, remove stale staleness checks",
        href: "https://github.com/NousResearch/hermes-agent/commit/c6ca11618a87c6b12e9a4025d339eb905a03ac8c",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Provider / Gateway / Agent 안정성: 오염된 클라이언트 비동기 래퍼 제거, 402 프로바이더 TTL 캐시, MiniMax OAuth 버그, Discord 타이핑 인디케이터 정리, 프로파일 디렉토리 가드, 슬래시 확인 상태 방어적 접근, Dashboard 빌드·dist 검증, Windows 디코딩, Codex data-URL, /goal 롤백",
    category: "Provider / Gateway / Agent 안정성",
    summary:
      "오염된(poisoned) 클라이언트에서 비동기 래퍼를 제거(evict)합니다 (#111b859). 402 응답을 받은 프로바이더를 TTL 기반으로 비정상(unhealthy) 상태로 캐시하여 호출별 재시도 폭풍(retry storm)을 방지합니다 (#228b7d2). MiniMax 'Login' 버튼이 Claude OAuth를 실행하는 버그가 수정됩니다 (#05bad7b). Discord에서 API 오류 후 타이핑 인디케이터 태스크가 정리되지 않는 문제를 수정합니다 (#ace1c4e). 프로파일 디렉토리가 없는 경우 resolve_profile_env를 보호합니다 (#5712483). CLI 슬래시 확인 상태에 대한 방어적(defensive) 접근을 추가합니다 (#cc9e788). Dashboard 빌드에서 --skip-build 설정 시 dist 존재 여부를 검증합니다 (#283381b). 빌드 실패 시 오래된(stale) dist로 폴백하고 재시도하며 --skip-build 플래그를 추가합니다 (#7085f4e). Windows에서 웹 UI 빌드 출력 디코딩을 견고하게 만듭니다 (#a479ec0). ChatGPT 계정의 Codex에서 data-URL이 거부되는 경우 이미지를 압축 대신 제거(strip)하도록 catch합니다 (#7026af4). /goal 체크리스트 및 /subgoal 기능 스택이 롤백(revert)됩니다 (#3e7145e) (main branch 기준).",
    commits: [
      {
        sha: "111b859",
        message: "fix(auxiliary): evict async wrappers on poisoned client (follow-up to #23482)",
        href: "https://github.com/NousResearch/hermes-agent/commit/111b859e49fd7b2abe30c1426ebd74101bb59477",
      },
      {
        sha: "228b7d2",
        message: "fix(auxiliary): cache 402'd providers as unhealthy with TTL to stop per-call retry storms (#23597)",
        href: "https://github.com/NousResearch/hermes-agent/commit/228b7d27bdb9b8461b9650137dd3aa2b739879eb",
      },
      {
        sha: "05bad7b",
        message: "fix(dashboard): MiniMax 'Login' button launched Claude OAuth (#22832)",
        href: "https://github.com/NousResearch/hermes-agent/commit/05bad7b1e78adef8da4dcbe91ab95c3e810a96b0",
      },
      {
        sha: "ace1c4e",
        message: "fix(discord): typing indicator task not cleaned up after API error",
        href: "https://github.com/NousResearch/hermes-agent/commit/ace1c4ea8ccefd8019e7a6a8378f6197c47636fc",
      },
      {
        sha: "5712483",
        message: "fix: guard resolve_profile_env against missing profile dirs",
        href: "https://github.com/NousResearch/hermes-agent/commit/571248348725b840acf0bcde43ffbecbba56fe2d",
      },
      {
        sha: "cc9e788",
        message: "fix(cli): defensive _slash_confirm_state access + AUTHOR_MAP",
        href: "https://github.com/NousResearch/hermes-agent/commit/cc9e788c14188bb9691237472d1c8c5bcf929eeb",
      },
      {
        sha: "283381b",
        message: "fix(dashboard): validate dist exists when --skip-build is set",
        href: "https://github.com/NousResearch/hermes-agent/commit/283381b1ce9dd8d69aaba88639d50d1f825c2121",
      },
      {
        sha: "7085f4e",
        message: "fix(dashboard): fallback to stale dist, retry build, add --skip-build flag",
        href: "https://github.com/NousResearch/hermes-agent/commit/7085f4e238508b94c9bf034c3d9bc268a49d8228",
      },
      {
        sha: "a479ec0",
        message: "fix: make web UI build output decoding robust on Windows",
        href: "https://github.com/NousResearch/hermes-agent/commit/a479ec01ed73ed43d8649f88781e433aedd980a0",
      },
      {
        sha: "7026af4",
        message: "fix(agent): catch ChatGPT-account Codex data-URL rejection so images are stripped instead of cascading to compression (#23602)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7026af4e23030a1c01a388ac60575bbf3b011187",
      },
      {
        sha: "3e7145e",
        message: "revert: roll back /goal checklist + /subgoal feature stack (#23813)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3e7145e0bbcded852a5324ceb549fe5ca94ac924",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Security / Config / Infrastructure: sudo 권한 상승 탐지·차단, 환경 정제·리덕션, YAML 파싱 경고, 방어적 수정, nix 컨테이너 엔트리포인트, sealed venv extras, hindsight-client 의존성",
    category: "Security / Config / Infrastructure",
    summary:
      "승인(approval) 시스템이 sudo 권한 상승 시도를 stdin/askpass/shell 플래그와 함께 탐지하여 차단합니다 (#976d8e2). SUDO_PASSWORD가 설정되지 않은 경우 sudo -S를 통한 비밀번호 추측을 차단합니다 (#9520a1c). Quick command에서 환경 변수를 정제(sanitize)하고 출력을 리덕션(redact)합니다 (#f6736ce). YAML 파싱 실패 시 조용히 기본값으로 대체하는 대신 명확한 경고를 표시합니다 (#228a4d1). PR #1974에서 도출된 3건의 방어적(defensive) 수정이 적용됩니다 (#3af3c4e). nix 컨테이너 엔트리포인트에서 chown -R을 대상별 find로 교체합니다 (#64145a1). sealed venv extras를 위한 extraDependencyGroups가 추가됩니다 (#5606258). hindsight-client가 선택적 의존성으로 추가됩니다 (#d992fd9) (main branch 기준).",
    commits: [
      {
        sha: "976d8e2",
        message: "fix(approval): catch sudo with stdin/askpass/shell privilege flags",
        href: "https://github.com/NousResearch/hermes-agent/commit/976d8e27ad4f2ba59ba5fc14a0c1e811267712d5",
      },
      {
        sha: "9520a1c",
        message: "fix(terminal): block sudo -S password guessing when SUDO_PASSWORD is not set",
        href: "https://github.com/NousResearch/hermes-agent/commit/9520a1ccdfd4d735b9450fe8624c44ff7f54d5fd",
      },
      {
        sha: "f6736ce",
        message: "fix(security): sanitize env and redact output in quick commands + remove write-only _pending_messages",
        href: "https://github.com/NousResearch/hermes-agent/commit/f6736ced8123e4e17bc0bde89b208c0baedbf0c4",
      },
      {
        sha: "228a4d1",
        message: "fix(config): warn loudly on YAML parse failure instead of silent default fallback (#23585)",
        href: "https://github.com/NousResearch/hermes-agent/commit/228a4d11ae258635cfecc1c322c1712191b6db3c",
      },
      {
        sha: "3af3c4e",
        message: "fix(misc): three small defensive fixes from PR #1974",
        href: "https://github.com/NousResearch/hermes-agent/commit/3af3c4eb8c65c42bdba1a7d9b11266ded5fa6d9f",
      },
      {
        sha: "64145a1",
        message: "fix(nix): replace chown -R with targeted find in container entrypoint (#23633)",
        href: "https://github.com/NousResearch/hermes-agent/commit/64145a1996554e4e81b694e9737421f34f44e212",
      },
      {
        sha: "5606258",
        message: "feat(nix): add extraDependencyGroups for sealed venv extras (#21817)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5606258855f7937659527ffffca9d9d7ef6fadc5",
      },
      {
        sha: "d992fd9",
        message: "feat(deps): add hindsight-client as optional dependency (#21818)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d992fd9aaf9fdb3a3f6f4ab449581da77da81e72",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Kanban / Multi-agent: 아카이브 태스크 의존성 해제, 반복 예산 프로토콜 위반 방지, stranded 진단, 대시보드 배치 QOL, 워커 send_message 허용, 로컬라이즈드 컬럼 라벨, HERMES_HOME/HERMES_KANBAN_BOARD 환경 변수, 게이트웨이 auto-subscribe 라우팅",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 아카이브된 상위 태스크를 의존성 해제 시 종료(terminal) 상태로 처리합니다 (#a1854ac). 반복 예산(iteration budget)이 소진되면 kanban_block을 호출하여 프로토콜 위반을 방지합니다 (#2b3bf17). 미확인(unclaimed) 태스크를 진단하는 stranded_in_ready 기능이 추가됩니다 (#3b122cc). 대시보드에 i18n, 접기(collapse), 담당자 대소문자(assignee-casing) 처리를 포함한 배치 QOL 개선이 병합됩니다 (#b8bf2f8). Kanban 워커가 send_message를 호출할 수 있도록 허용합니다 (#8ac998c). select-all aria label에서 로컬라이즈드 컬럼 라벨을 사용합니다 (#27cfe72). 워커 서브프로세스에 HERMES_HOME 환경 변수를 주입합니다 (#5af315c). 스코프드 슬래시 오버라이드 이후 HERMES_KANBAN_BOARD를 복원합니다 (#641e40c). 게이트웨이 create auto-subscribe를 명시적 보드로 라우팅합니다 (#f6d4f3c) (main branch 기준).",
    commits: [
      {
        sha: "a1854ac",
        message: "fix(kanban): treat archived parent tasks as terminal for dependency resolution",
        href: "https://github.com/NousResearch/hermes-agent/commit/a1854ac07c08c903ee1d4124746d8c08d911614a",
      },
      {
        sha: "2b3bf17",
        message: "fix(kanban): call kanban_block on iteration-budget exhaustion to prevent protocol violation",
        href: "https://github.com/NousResearch/hermes-agent/commit/2b3bf17dfa7f75c05174198f80457e6f483d2131",
      },
      {
        sha: "3b122cc",
        message: "feat(kanban): stranded_in_ready diagnostic for unclaimed tasks (#23578)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b122cc1ac3ae91e690ec8b29e54af10e52fdb18",
      },
      {
        sha: "b8bf2f8",
        message: "fix(kanban): merge dashboard batch QOL with i18n + collapse + assignee-casing",
        href: "https://github.com/NousResearch/hermes-agent/commit/b8bf2f817d7cdde1980d0940fa0b4bc90fdfddcb",
      },
      {
        sha: "8ac998c",
        message: "fix(send_message): allow kanban workers to call send_message",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ac998cb0caba8dbc382ecf6af1b17c5ecad6ad0",
      },
      {
        sha: "27cfe72",
        message: "fix(kanban): use localized column label in select-all aria label",
        href: "https://github.com/NousResearch/hermes-agent/commit/27cfe725431346e8cbac141a8b91bedba0121f4a",
      },
      {
        sha: "5af315c",
        message: "fix(kanban): inject HERMES_HOME into worker subprocess env",
        href: "https://github.com/NousResearch/hermes-agent/commit/5af315c4cc833e20d7306053cbee295b3f0639af",
      },
      {
        sha: "641e40c",
        message: "fix(kanban): restore HERMES_KANBAN_BOARD after scoped slash override",
        href: "https://github.com/NousResearch/hermes-agent/commit/641e40c4bd8eb3f7db995cf3181ad9e81483f13f",
      },
      {
        sha: "f6d4f3c",
        message: "fix(kanban): route gateway create auto-subscribe to explicit board",
        href: "https://github.com/NousResearch/hermes-agent/commit/f6d4f3c37daddc88040dd44d68399400ac12df29",
      },
    ],
  },
];
