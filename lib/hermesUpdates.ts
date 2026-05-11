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
    date: "2026-05-11",
    title: "CLI / TUI / Agent Tools: HERMES_SESSION_ID 노출, Claude 세션 간 프리픽스 캐시, CJK 마크다운 테이블 정렬, Nous Portal 모델 카탈로그, TUI 슬래시 확인 모달",
    category: "CLI / TUI / Agent Tools",
    summary:
      "에이전트 도구에서 HERMES_SESSION_ID를 ContextVar와 환경 변수로 노출합니다 (#2718834). Anthropic·OpenRouter·Nous Portal에서 Claude에 대한 세션 간(cross-session) 1시간 프리픽스 캐시가 추가됩니다 (#7b76366). CLI/TUI에서 CJK 및 와이드 문자 마크다운 테이블 정렬이 수정됩니다 (#1d00716). /model 명령에서 Nous Portal 원격 카탈로그 매니페스트의 모델을 표시합니다 (#8e2eb4b). 슬래시 명령 확인(confirm)에 TUI 모달을 사용합니다 (#054f568) (main branch 기준).",
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
        sha: "8e2eb4b",
        message: "fix(/model): surface Nous Portal models from remote catalog manifest (#23912)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8e2eb4b511967a0ad776c0c667f6914072e1b7ec",
      },
      {
        sha: "054f568",
        message: "fix: use TUI modal for slash confirmations",
        href: "https://github.com/NousResearch/hermes-agent/commit/054f56857842a25b8ef5f627c7c951de28eee52a",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Provider / Gateway / Integrations 안정성: 오염된 클라이언트 비동기 래퍼 제거, 402 프로바이더 TTL 캐시, Discord 타이핑 인디케이터 정리, 프로파일 디렉토리 가드, 슬래시 확인 상태 방어적 접근",
    category: "Provider / Gateway 안정성",
    summary:
      "오염된(poisoned) 클라이언트에서 비동기 래퍼를 제거(evict)합니다 (#111b859). 402 응답을 받은 프로바이더를 TTL 기반으로 비정상(unhealthy) 상태로 캐시하여 호출별 재시도 폭풍(retry storm)을 방지합니다 (#228b7d2). Discord에서 API 오류 후 타이핑 인디케이터 태스크가 정리되지 않는 문제를 수정합니다 (#ace1c4e). 프로파일 디렉토리가 없는 경우 resolve_profile_env를 보호합니다 (#5712483). CLI 슬래시 확인 상태에 대한 방어적(defensive) 접근을 추가합니다 (#cc9e788) (main branch 기준).",
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
    ],
  },
  {
    date: "2026-05-11",
    title: "Security / Config: sudo 권한 상승 탐지·차단, quick command 환경 정제·리덕션, YAML 파싱 경고, 방어적 수정 3건",
    category: "Security / Config",
    summary:
      "승인(approval) 시스템이 sudo 권한 상승 시도를 stdin/askpass/shell 플래그와 함께 탐지하여 차단합니다 (#976d8e2). SUDO_PASSWORD가 설정되지 않은 경우 sudo -S를 통한 비밀번호 추측을 차단합니다 (#9520a1c). Quick command에서 환경 변수를 정제(sanitize)하고 출력을 리덕션(redact)합니다 (#f6736ce). YAML 파싱 실패 시 조용히 기본값으로 대체하는 대신 명확한 경고를 표시합니다 (#228a4d1). PR #1974에서 도출된 3건의 방어적(defensive) 수정이 적용됩니다 (#3af3c4e) (main branch 기준).",
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
    ],
  },
  {
    date: "2026-05-11",
    title: "Kanban / Multi-agent: 아카이브 태스크 의존성 해제·반복 예산 프로토콜 위반 방지·게이트웨이 자동 구독 라우팅·워커 send_message 허용·워커 환경변수 주입·슬래시 오버라이드 복원",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 아카이브된 상위 태스크를 의존성 해제 시 종료(terminal) 상태로 처리하여 정확한 의존성 그래프를 유지합니다 (#a1854ac). 반복 예산(iteration budget)이 소진되면 kanban_block을 호출하여 프로토콜 위반을 방지합니다 (#2b3bf17). 게이트웨이 생성 시 자동 구독(auto-subscribe)을 명시적 보드로 라우팅합니다 (#f6d4f3c). Kanban 워커가 send_message를 호출할 수 있도록 허용합니다 (#8ac998c). 워커 서브프로세스 환경에 HERMES_HOME을 주입합니다 (#5af315c). 범위 지정된 슬래시 오버라이드 후 HERMES_KANBAN_BOARD를 복원합니다 (#641e40c) (main branch 기준).",
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
        sha: "f6d4f3c",
        message: "fix(kanban): route gateway create auto-subscribe to explicit board",
        href: "https://github.com/NousResearch/hermes-agent/commit/f6d4f3c37daddc88040dd44d68399400ac12df29",
      },
      {
        sha: "8ac998c",
        message: "fix(send_message): allow kanban workers to call send_message",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ac998cb0caba8dbc382ecf6af1b17c5ecad6ad0",
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
    ],
  },
  {
    date: "2026-05-11",
    title: "Kanban 대시보드 UI: stranded 진단·배치 QOL(i18n·접기·대소문자)·shift-click 범위 선택·현지화 열 라벨",
    category: "Kanban / Dashboard",
    summary:
      "Kanban에 미확인(unclaimed) 태스크를 진단하는 stranded_in_ready 기능이 추가됩니다 (#3b122cc). 대시보드에 i18n, 접기(collapse), 담당자 대소문자(assignee-casing) 처리를 포함한 배치 QOL 개선이 병합됩니다 (#b8bf2f8). 대시보드에서 shift-click 범위 선택, 컬럼 전체 선택 토글, 일괄 작업 낙관적 UI(optimistic UI)가 수정됩니다 (#3df7e30). select-all ARIA 라벨에 현지화(localized)된 열 라벨을 사용합니다 (#27cfe72) (main branch 기준).",
    commits: [
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
        sha: "3df7e30",
        message: "kanban dashboard: fix shift-click range selection, column select-all toggle, and bulk action optimistic UI",
        href: "https://github.com/NousResearch/hermes-agent/commit/3df7e30244c0311d63d4ef45128cb0692e185b5b",
      },
      {
        sha: "27cfe72",
        message: "fix(kanban): use localized column label in select-all aria label",
        href: "https://github.com/NousResearch/hermes-agent/commit/27cfe725431346e8cbac141a8b91bedba0121f4a",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Dashboard 빌드 안정성 / Agent / Goals: dist 검증·재시도·skip-build, Windows 빌드 디코딩, Codex data-URL catch, /goal 롤백",
    category: "Dashboard / Agent",
    summary:
      "Dashboard 빌드에서 --skip-build 설정 시 dist 존재 여부를 검증합니다 (#283381b). 빌드 실패 시 오래된(stale) dist로 폴백하고 재시도하며, --skip-build 플래그를 추가합니다 (#7085f4e). Windows에서 웹 UI 빌드 출력 디코딩을 견고하게(robust) 만듭니다 (#a479ec0). ChatGPT 계정의 Codex에서 data-URL이 거부되는 경우 이미지를 압축 대신 제거(strip)하도록 catch합니다 (#7026af4). /goal 체크리스트 및 /subgoal 기능 스택이 롤백(revert)됩니다 (#3e7145e) (main branch 기준).",
    commits: [
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
];
