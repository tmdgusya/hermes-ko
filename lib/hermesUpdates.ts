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

export const hermesUpdatesLastChecked = "2026-05-05";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-05",
    title: "Microsoft Teams 메시징: threading, fallback, 진단 로깅, 문서화, Nix 빌드 갱신",
    category: "Messaging / Platform",
    summary:
      "Microsoft Teams 메시징 플랫폼이 추가되었습니다. app.reply()를 통한 스레딩(threading)이 구현되고, threading이 400 에러를 반환할 경우 flat send로 폴백합니다. reply() fallback 시 진단 로깅이 추가되었습니다. 여러 문서에 Teams가 플랫폼 목록, 사이드바, messaging 인덱스에 등록되었습니다. Nix TUI 빌드의 오래된 npmDepsHash가 갱신되고 cache-blind 감지가 수정되었습니다. Docker terminal backend가 단일 영속 컨테이너임을 명확히 하는 문서 개선도 포함됩니다 (main branch).",
    commits: [
      {
        sha: "69aeba0",
        message: "feat(teams): implement threading via app.reply()",
        href: "https://github.com/NousResearch/hermes-agent/commit/69aeba0df782b3383480ffbf0733d725a714c0a1",
      },
      {
        sha: "3f02345",
        message: "fix(teams): fall back to flat send when threading returns 400",
        href: "https://github.com/NousResearch/hermes-agent/commit/3f023450ddab8af48814fd715d3f0ee4318026ee",
      },
      {
        sha: "601e5f1",
        message: "fix(teams): log reply() fallback for diagnostics",
        href: "https://github.com/NousResearch/hermes-agent/commit/601e5f1d57cfd4ceefee50a6df05a860a1a602e8",
      },
      {
        sha: "93869b4",
        message: "docs: add Microsoft Teams to platform lists across docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/93869b48ab520ad8df386e2057013c5f78bb8d7a",
      },
      {
        sha: "13a7cbc",
        message: "fix(nix): refresh stale tui npmDepsHash + fix cache-blind detection (#20144)",
        href: "https://github.com/NousResearch/hermes-agent/commit/13a7cbcd6404c6e8ef501f98a0b315da4223228c",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Telegram: /topic 멀티세션 DM 모드, auth gate, screenshot debounce",
    category: "Messaging / Platform",
    summary:
      "Telegram 플랫폼에 /topic 멀티세션 DM 모드가 추가되어 하나의 봇에서 여러 세션을 관리할 수 있습니다. /topic off, /topic help 명령어, 인증 게이트(auth gate), 스크린샷 중복 방지(debounce)가 구현되었습니다. 토픽 모드에서 CASCADE 처리, General-topic 핸들링, 이름 변경 가드(rename guard), debounce가 개선(polish)되었습니다. /topic 멀티세션 DM 모드에 대한 문서가 추가되었습니다 (main branch).",
    commits: [
      {
        sha: "d35efb9",
        message: "feat(telegram): /topic off + help + auth gate + screenshot debounce",
        href: "https://github.com/NousResearch/hermes-agent/commit/d35efb9898843e22d3d203a7fd6822dddb09d342",
      },
      {
        sha: "1381c89",
        message: "fix(telegram): polish topic mode — CASCADE, General-topic handling, rename guard, debounce",
        href: "https://github.com/NousResearch/hermes-agent/commit/1381c89e56fd3e6abbd0233b5a361069ae1862c1",
      },
      {
        sha: "1a9542c",
        message: "docs(telegram): document /topic multi-session DM mode",
        href: "https://github.com/NousResearch/hermes-agent/commit/1a9542cf75fbdf21036a84718a2965d59c8ec09c",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Kanban: 대시보드 토글 contrast 개선, drop→running 액션, multi-project boards, worker task-ownership, 알림 토글",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban 대시보드의 홈 채널 토글 대비가 sharper하게 개선되고 'drop → running' 액션이 추가되었습니다. Multi-project boards로 하나의 설치에서 여러 kanban을 운영할 수 있습니다. Worker의 destructive tool 호출 시 task-ownership을 검사하여 권한 없는 카드 수정을 방지합니다. 대시보드 API를 통한 'running' 상태로의 직접 전환을 거부합니다. 플랫폼별 홈 채널 알림 토글이 추가되었습니다 (main branch).",
    commits: [
      {
        sha: "56a78e7",
        message: "feat(kanban-dashboard): sharper home-channel toggle contrast, drop → running action (#19916)",
        href: "https://github.com/NousResearch/hermes-agent/commit/56a78e74b26a10bd87578e019f9ef84e76a90b5d",
      },
      {
        sha: "5ec6baa",
        message: "feat(kanban): multi-project boards — one install, many kanbans (#19653)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5ec6baa40060ed677d6a3808fcb4eecc12545827",
      },
      {
        sha: "d3b22b7",
        message: "fix(kanban): enforce worker task-ownership on destructive tool calls (#19713)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d3b22b76d8b63f81c4f70a1d1aae748b883484ab",
      },
      {
        sha: "6b3efce",
        message: "fix(kanban): reject direct status transition to 'running' via dashboard API",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b3efcee49afed5fde590c56766634e8cbdf921f",
      },
      {
        sha: "1c7c7c3",
        message: "feat(kanban-dashboard): per-platform home-channel notification toggles (#19864)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1c7c7c3c5f483cccd8b671410297cd33f1120a87",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent/CLI/TUI 런타임 안정성: run_agent lock, file_ops 충돌 해결, local cwd 복구, CLI/TUI 크래시 방지, 경로 완성",
    category: "Agent 안정성",
    summary:
      "run_agent의 IterationBudget.used property에서 lock을 획득하여 동시성 안전성을 강화합니다. file_ops에서 하이픈이 포함된 숫자 파일명에 대한 search_files 경로/라인 충돌을 해결하고, 숨겨진 루트(hidden roots)에서도 파일 검색을 허용합니다. Local shell이 persistent_shell cwd 삭제를 감지하고 복구하여 크래시를 방지합니다. CLI에서 c-S-c 키 바인딩을 try/except로 감싸 startup crash를 방지합니다. 그 외에도 TUI에서 절대 경로를 경로로 완성, tui_gateway의 sys.path를 local package shadowing으로부터 보호, CLI shortcut config 충돌 해결, TUI voice.record_key config 준수, terminal background spawn cwd 보호, local root ancestor 후보 테스트, models.dev Ollama Cloud ID 접미사 제거, MiniMax TTS API 엔드포인트 갱신, doctor gh auth 상태 확인, Compressor 비문자열 tool content 처리, Browser --no-sandbox 자동 주입, delegation provider override 등이 포함됩니다 (main branch).",
    commits: [
      {
        sha: "fbc477d",
        message: "fix(run_agent): acquire lock in IterationBudget.used property",
        href: "https://github.com/NousResearch/hermes-agent/commit/fbc477df7181e459fc6b300eeaaf54b479a635dc",
      },
      {
        sha: "c050ee6",
        message: "fix(file_ops): resolve search_files path/line collision for hyphenated numeric filenames",
        href: "https://github.com/NousResearch/hermes-agent/commit/c050ee6573248057b26dc8e2852fa58d051132eb",
      },
      {
        sha: "64ad7de",
        message: "fix(file-ops): allow file search in hidden roots",
        href: "https://github.com/NousResearch/hermes-agent/commit/64ad7dec0d02256a0ef8330d98ebe5949b517e5e",
      },
      {
        sha: "9644b8a",
        message: "fix(local): recover when persistent_shell cwd is deleted (#17558)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9644b8ae67a84e4b77f3f79f20fa87ddc44f8559",
      },
      {
        sha: "429b8ec",
        message: "fix(cli): guard c-S-c key binding with try/except to prevent startup crash (#19895)",
        href: "https://github.com/NousResearch/hermes-agent/commit/429b8eceb4e053f8783440396c18e30d41509712",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway/Cron: stale-code HEAD SHA 체크, no_agent 모드, planned stops, WSL PATH, email loop 방지, update skills 동기화, cron 문서화",
    category: "Gateway / State",
    summary:
      "Gateway의 stale-code 체크가 파일 mtime 대신 git HEAD SHA를 사용하여 재시작 정확도를 높입니다. Cron에 no_agent 모드(watchdog 패턴)가 추가되어 script-only cron job을 에이전트 없이 실행할 수 있습니다. Gateway가 planned service stops(의도된 서비스 중지)를 처리하여 불필요한 재시작을 방지합니다. WSL 환경에서 systemd unit의 interop PATH를 보존합니다. Email이 허용 목록(allowlist)에 없는 발신자를 디스패치 전에 차단하여 메일 루프를 방지합니다. 번들 스킬이 활성 프로필을 포함한 모든 프로필로 동기화되도록 update가 수정되었습니다. Cron job 실행 시 config.yaml의 ${VAR} 환경변수 참조 확장, cron-script-only 가이드 사이드바 등록, no-agent 모드 문서가 agent-driven setup 중심으로 개선되었습니다 (main branch).",
    commits: [
      {
        sha: "d90f73b",
        message: "fix(gateway): use git HEAD SHA, not file mtimes, for stale-code check (#19740)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d90f73bcec3daad4fc72b9f3471392acabdd5747",
      },
      {
        sha: "3db6b9c",
        message: "feat(cron): add no_agent mode for script-only cron jobs (watchdog pattern) (#19709)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3db6b9cc871c6f1c588cccba1ff2bd09601c1b77",
      },
      {
        sha: "b632290",
        message: "fix(gateway): handle planned service stops",
        href: "https://github.com/NousResearch/hermes-agent/commit/b6322901664c0af138035d6f753feedeb1d2e8b7",
      },
      {
        sha: "8ab9f61",
        message: "fix(gateway): preserve WSL interop PATH in systemd units",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ab9f61dcf787b6cbf4c2ac258621c5f4c2b18d7",
      },
      {
        sha: "fd9c32c",
        message: "fix(email): drop non-allowlisted senders before dispatch to prevent mail loops",
        href: "https://github.com/NousResearch/hermes-agent/commit/fd9c32c0f285bb09f926e50980b71da809b3f1ed",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Skills: Hyperframes 크리에이티브 스킬 추가, Google Workspace / Himalaya 문서 수정",
    category: "Tools / MCP / Plugins",
    summary:
      "Hyperframes 선택적 크리에이티브 스킬이 추가되었습니다. hyperframes inspect 명령어가 cli.md 및 SKILL.md에 문서화되고, upstream 변경사항과 스킬 문서가 동기화되었습니다. Google Workspace 스킬의 SKILL.md에서 required_credential_files가 복원되었습니다. Email/Himalaya 스킬에 v1.2.0 folder.aliases 문법이 문서화되었습니다 (main branch).",
    commits: [
      {
        sha: "50aabb9",
        message: "feat(skill): add hyperframes optional creative skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/50aabb9eb2a8d5b2c4f84a447d8f22529844c192",
      },
      {
        sha: "20859cc",
        message: "docs(skill): sync hyperframes skill with upstream changes",
        href: "https://github.com/NousResearch/hermes-agent/commit/20859cc408980fe852e2ee96dcdfbd3fd11a8e4f",
      },
      {
        sha: "e493b1c",
        message: "docs(skill): add hyperframes inspect command to cli.md + SKILL.md",
        href: "https://github.com/NousResearch/hermes-agent/commit/e493b1c482caf8c50ba8b1b85c2af2904bb74ab7",
      },
      {
        sha: "81cd678",
        message: "fix(google-workspace): restore required_credential_files in SKILL.md (#16452)",
        href: "https://github.com/NousResearch/hermes-agent/commit/81cd67829191beba42eb54589375670122e1b57b",
      },
      {
        sha: "a919269",
        message: "fix(skills/email/himalaya): document v1.2.0 folder.aliases syntax",
        href: "https://github.com/NousResearch/hermes-agent/commit/a919269eb5c533cef80a2852e82a68472f5ad15d",
      },
    ],
  },
];
