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
    title: "Security / Approval / Config: sudo 권한 상승 탐지·차단, quick command 환경 정제·리덕션, YAML 파싱 경고, 프로필 디렉토리 가드",
    category: "Security / Config",
    summary:
      "승인(approval) 시스템이 sudo 권한 상승 시도를 stdin/askpass/shell 플래그와 함께 탐지하여 차단합니다 (#976d8e2). SUDO_PASSWORD가 설정되지 않은 경우 sudo -S를 통한 비밀번호 추측을 차단합니다 (#9520a1c). Quick command에서 환경 변수를 정제(sanitize)하고 출력을 리덕션(redact)하며, 사용되지 않는 _pending_messages를 제거합니다 (#f6736ce). YAML 파싱 실패 시 조용히 기본값으로 대체하는 대신 명확한 경고를 표시합니다 (#228a4d1). 프로필 디렉토리가 없는 경우 resolve_profile_env를 가드하여 오류를 방지합니다 (#5712483) (main branch 기준).",
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
        sha: "5712483",
        message: "fix: guard resolve_profile_env against missing profile dirs",
        href: "https://github.com/NousResearch/hermes-agent/commit/571248348725b840acf0bcde43ffbecbba56fe2d",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Kanban / Multi-agent: 아카이브 태스크 의존성 해제·반복 예산 프로토콜 위반 방지·게이트웨이 자동 구독 라우팅·워커 send_message 허용·보드 환경 복원",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 아카이브된 상위 태스크를 의존성 해제 시 종료(terminal) 상태로 처리하여 정확한 의존성 그래프를 유지합니다 (#a1854ac). 반복 예산(iteration budget)이 소진되면 kanban_block을 호출하여 프로토콜 위반을 방지합니다 (#2b3bf17). 게이트웨이 생성 시 자동 구독(auto-subscribe)을 명시적 보드로 라우팅합니다 (#f6d4f3c). Kanban 워커가 send_message를 호출할 수 있도록 허용합니다 (#8ac998c). 범위 지정된 슬래시 오버라이드 후 HERMES_KANBAN_BOARD를 복원합니다 (#641e40c) (main branch 기준).",
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
        sha: "641e40c",
        message: "fix(kanban): restore HERMES_KANBAN_BOARD after scoped slash override",
        href: "https://github.com/NousResearch/hermes-agent/commit/641e40c4bd8eb3f7db995cf3181ad9e81483f13f",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Kanban 대시보드 UI + Agent/Provider 안정성 + Goals 롤백: stranded 진단·대시보드 shift-click/select-all/일괄 작업·i18n, Codex data-URL 거부 catch, 402 provider 캐시, /goal 체크리스트·/subgoal 롤백",
    category: "Kanban / Agent / Goals",
    summary:
      "Kanban에 미확인(unclaimed) 태스크를 진단하는 stranded_in_ready 기능이 추가됩니다 (#3b122cc). 대시보드에 i18n, 접기(collapse), 담당자 대소문자(assignee-casing) 처리를 포함한 배치 QOL 개선이 병합됩니다 (#b8bf2f8). 대시보드에서 shift-click 범위 선택, 컬럼 전체 선택 토글, 일괄 작업 낙관적 UI(optimistic UI)가 수정됩니다 (#3df7e30). ChatGPT 계정의 Codex에서 data-URL이 거부되는 경우 이미지를 압축 대신 제거(strip)하도록 catch합니다 (#7026af4). Auxiliary provider가 402 응답 시 TTL 기반 unhealthy 캐시로 per-call 재시도 폭풍(retry storm)을 방지합니다 (#228b7d2). /goal 체크리스트 및 /subgoal 기능 스택이 롤백(revert)됩니다 (#3e7145e) (main branch 기준).",
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
    title: "Telegram / Discord / Skills / Nix / Terminal: Telegram 분할 전송·적응형 빠른 경로, Discord typing 정리, 주식·금융 스킬, docker_extra_args + display.timestamps",
    category: "Integrations / Skills / Nix",
    summary:
      "Telegram에서 편집 메시지가 길이 제한을 초과할 때 자르는 대신 분할하여 전송(split-and-deliver)합니다 (#bf1f409). Telegram 전송 케이던스(cadence)를 조정하고 짧은 응답에 대한 적응형 빠른 경로(adaptive fast-path)를 추가합니다 (#ac95b8c). Discord에서 API 오류 후 typing indicator 태스크가 정리되지 않던 문제를 수정합니다 (#ace1c4e). API 키 없이 Yahoo Finance 데이터를 활용하는 주식·금융(stocks & finance) 스킬이 추가됩니다 (#896a7ce). 터미널과 CLI에 docker_extra_args 및 display.timestamps 설정이 추가됩니다 (#ebf2ea5) (main branch 기준).",
    commits: [
      {
        sha: "bf1f409",
        message: "fix(telegram): split-and-deliver oversized edits instead of silent truncation",
        href: "https://github.com/NousResearch/hermes-agent/commit/bf1f40996f195d7387ea0bdffd511637bab9e833",
      },
      {
        sha: "ac95b8c",
        message: "perf(gateway): tune Telegram cadence + adaptive fast-path for short replies",
        href: "https://github.com/NousResearch/hermes-agent/commit/ac95b8cdbec1748d1255cee8bb39aa5f92254864",
      },
      {
        sha: "ace1c4e",
        message: "fix(discord): typing indicator task not cleaned up after API error",
        href: "https://github.com/NousResearch/hermes-agent/commit/ace1c4ea8ccefd8019e7a6a8378f6197c47636fc",
      },
      {
        sha: "896a7ce",
        message: "feat: add stocks & finance skill (Yahoo Finance, no API key)",
        href: "https://github.com/NousResearch/hermes-agent/commit/896a7ce261f8fc6dc427550becb5d661f1040457",
      },
      {
        sha: "ebf2ea5",
        message: "feat(terminal,cli): docker_extra_args + display.timestamps",
        href: "https://github.com/NousResearch/hermes-agent/commit/ebf2ea584ab2ca37cd70b80b4d8c3bc23604cf47",
      },
    ],
  },
  {
    date: "2026-05-09",
    title: "Gateway 안정성: restart TimeoutExpired 예외도 함께 catch·stop 시 adapter disconnect cap",
    category: "Gateway / State",
    summary:
      "Gateway 재시작(restart) 시 TimeoutExpired 예외도 함께 catch하여 친절한(friendly) 메시지를 출력합니다. 이전에는 일부 타임아웃 예외가 처리되지 않아 불완전한 에러 메시지가 표시될 수 있었습니다 (#78b0008). Gateway 정지(stop) 시 adapter 연결 해제(disconnect)에 상한(cap)을 두어, 정지 과정에서 adapter가 과도하게 연결 해제를 시도하지 않도록 제한합니다 (#dccf1fb) (main branch 기준).",
    commits: [
      {
        sha: "78b0008",
        message: "fix(gateway): also catch restart TimeoutExpired; friendly message",
        href: "https://github.com/NousResearch/hermes-agent/commit/78b0008f4451c4b3047107926e466dcfc257ae3e",
      },
      {
        sha: "dccf1fb",
        message: "fix(gateway): cap adapter disconnect during stop",
        href: "https://github.com/NousResearch/hermes-agent/commit/dccf1fb6e0eacca33a3c46f44bccde35f9fa2880",
      },
    ],
  },
  {
    date: "2026-05-08 ~ 2026-05-09",
    title: "CLI 성능 최적화 / Agent 안정성 / TUI / Termux / Windows: CLI 콜드스타트 ~19초 단축(skills cache·lazy Feishu·no Nous HTTP)·플러그인 탐색 건너뛰기·Shift+Enter 개행 인식, TUI /quit 동작 CLI 정렬·마크다운 래핑 공백 정리, Termux 업데이트 경로 강화(uv bootstrap·env guard), update systemd RestartSec 우회(graceful drain 후), Ctrl+Enter Windows Terminal 문서화·Windows 네이티브 early beta 표기",
    category: "CLI / Agent / Windows",
    summary:
      "CLI 콜드스타트(cold start) 시간을 약 19초 단축합니다. 스킬 캐시(skills cache) 활용, Feishu 지연 로딩(lazy import), Nous HTTP 체크 제거로 초기 구동 속도를 대폭 개선합니다 (#22138). 기본 제공 서브커맨드(subcommand)에서 즉시(eager) 플러그인 탐색(plugin discovery)을 건너뛰어 CLI 실행 속도를 추가로 개선합니다 (#22120). CLI에서 Shift+Enter를 개행(newline) 키로 인식하여 여러 줄 입력이 더 편리해집니다. Windows Terminal 사용자를 위한 Ctrl+Enter 개행 방법을 CLI 문서에 명시합니다.\n\nTUI에서 /quit 동작이 CLI 종료 흐름(exit flow)과 일관되게 정렬(align)되고, 마크다운 래핑(wrap) 시 발생하는 불필요한 공백을 정리(trim)하여 렌더링을 개선합니다 (#22062). Termux 환경에서 uv 부트스트랩(bootstrap)과 환경 가드(env guard)를 통해 업데이트 경로가 강화(harden)됩니다. 업데이트에서 graceful drain 이후 systemd RestartSec을 우회(bypass)하여 불필요한 지연을 제거합니다 (#22101). Windows 네이티브 지원이 early beta 단계임을 문서에 명시합니다 (#22115) (main branch 기준).",
    commits: [
      {
        sha: "0ec052c",
        message: "perf(cli): cut ~19s from 'hermes' cold start (skills cache + lazy Feishu + no Nous HTTP) (#22138)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0ec052ca24476379b0004af800d049abde17323d",
      },
      {
        sha: "5089596",
        message: "perf(cli): skip eager plugin discovery on known built-in subcommands (#22120)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5089596685826ef2f63214f2fd184da88cc4cdb7",
      },
      {
        sha: "f5b635f",
        message: "feat(cli): recognise Shift+Enter as a newline key",
        href: "https://github.com/NousResearch/hermes-agent/commit/f5b635f6ab6d81499d8940f7ab650b6e11956272",
      },
      {
        sha: "d606df8",
        message: "docs(cli): call out Ctrl+Enter for Windows Terminal users",
        href: "https://github.com/NousResearch/hermes-agent/commit/d606df81263dcd4a791f438031f08f3b5bd639e3",
      },
      {
        sha: "6f7b698",
        message: "fix: keep tui /quit behavior aligned with cli exit flow",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f7b698a08bce285a8104d05b298d706e360fc14",
      },
      {
        sha: "a7e7921",
        message: "fix(tui): trim markdown wrap spaces (#22062)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a7e7921dbc0a593027f40b571861f50a71221aec",
      },
      {
        sha: "7c174e6",
        message: "fix: harden termux update path with uv bootstrap and env guard",
        href: "https://github.com/NousResearch/hermes-agent/commit/7c174e65f749dd166c71eda497b05bffe271cec2",
      },
      {
        sha: "d971b26",
        message: "fix(update): bypass systemd RestartSec after graceful drain (#22101)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d971b26bfd8305285cac1f47c84cceef67624701",
      },
      {
        sha: "7a4d5c1",
        message: "docs(windows): label native Windows support as early beta (#22115)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7a4d5c123a29e60dec647977572116bad2036a13",
      },
    ],
  },
];
