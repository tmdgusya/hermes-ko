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
    title: "Microsoft Teams 메시징: threading 지원, fallback, 진단 로깅, 문서화",
    category: "Messaging / Platform",
    summary:
      "Microsoft Teams 메시징 플랫폼이 추가되었습니다. app.reply()를 통한 스레딩(threading)이 구현되고, threading이 400 에러를 반환할 경우 flat send로 폴백합니다. reply() fallback 시 진단 로깅이 추가되었습니다. 여러 문서에 Teams가 플랫폼 목록, 사이드바, messaging 인덱스에 등록되었습니다. Docker terminal backend가 단일 영속 컨테이너임을 명확히 하는 문서 개선도 포함됩니다 (main branch).",
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
        message: "docs: add Microsoft Teams to platform lists + sidebar across docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/93869b48ab520ad8df386e2057013c5f78bb8d7a",
      },
      {
        sha: "ef94aa2",
        message: "docs(teams): add Teams to sidebar",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef94aa201fba8c1c95a1c8ee9a4d1ee66ca40dd1",
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
    title: "Agent 런타임 안정성: Delegation provider override, run_agent lock, Compressor fix, Browser sandbox, Local cwd 복구",
    category: "Agent 안정성",
    summary:
      "Delegation에서 provider override를 subagent에 적용하고, heartbeat stale 임계값을 높여 delegation 연결이 더 오래 유지됩니다. run_agent의 IterationBudget.used property에서 lock을 획득하여 동시성 안전성을 강화합니다. Compressor가 요약 단계에서 비문자열 tool content를 건너뛰어 AttributeError를 방지합니다. Browser가 root 및 AppArmor userns 환경에서 --no-sandbox 플래그를 자동 주입합니다. Local shell이 persistent_shell cwd 삭제를 감지하고 복구하여 크래시를 방지합니다 (main branch).",
    commits: [
      {
        sha: "8308077",
        message: "fix(delegation): honor provider override for subagents",
        href: "https://github.com/NousResearch/hermes-agent/commit/83080772f28793ac388d9218c394019ff8554ad0",
      },
      {
        sha: "fbc477d",
        message: "fix(run_agent): acquire lock in IterationBudget.used property",
        href: "https://github.com/NousResearch/hermes-agent/commit/fbc477df7181e459fc6b300eeaaf54b479a635dc",
      },
      {
        sha: "a7417f8",
        message: "fix(compressor): skip non-string tool content in summarization pass to prevent AttributeError",
        href: "https://github.com/NousResearch/hermes-agent/commit/a7417f8a4a413196dac350e357dec43b8f8eb3e0",
      },
      {
        sha: "74c1b94",
        message: "fix(browser): inject --no-sandbox for root and AppArmor userns restrictions",
        href: "https://github.com/NousResearch/hermes-agent/commit/74c1b946e00c89b3b7ff315033d579ccb653de2d",
      },
      {
        sha: "9644b8a",
        message: "fix(local): recover when persistent_shell cwd is deleted (#17558)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9644b8ae67a84e4b77f3f79f20fa87ddc44f8559",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway/Cron: stale-code HEAD SHA 체크, no_agent 모드, planned stops, email loop 방지, ${VAR} 확장, WSL PATH",
    category: "Gateway / State",
    summary:
      "Gateway의 stale-code 체크가 파일 mtime 대신 git HEAD SHA를 사용하여 재시작 정확도를 높입니다. Cron에 no_agent 모드(watchdog 패턴)가 추가되어 script-only cron job을 에이전트 없이 실행할 수 있습니다. Gateway가 planned service stops(의도된 서비스 중지)를 처리하여 불필요한 재시작을 방지합니다. Email이 허용 목록(allowlist)에 없는 발신자를 디스패치 전에 차단하여 메일 루프를 방지합니다. Cron job 실행 시 config.yaml의 ${VAR} 환경변수 참조를 확장합니다. WSL 환경에서 systemd unit의 interop PATH를 보존하고, doctor가 GITHUB_TOKEN 없을 때 gh auth 상태를 확인하도록 개선되었습니다 (main branch).",
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
        sha: "fd9c32c",
        message: "fix(email): drop non-allowlisted senders before dispatch to prevent mail loops",
        href: "https://github.com/NousResearch/hermes-agent/commit/fd9c32c0f285bb09f926e50980b71da809b3f1ed",
      },
      {
        sha: "75bce31",
        message: "fix(cron): expand ${VAR} refs in config.yaml during job execution (#15890)",
        href: "https://github.com/NousResearch/hermes-agent/commit/75bce317a30b33dc7d0610120ad2ea3c970c4ddd",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "CLI/TUI 안정성: c-S-c 크래시 방지, voice record_key, absolute path 완성, sys.path 보호, terminal cwd 보호",
    category: "Agent 안정성",
    summary:
      "CLI에서 c-S-c 키 바인딩을 try/except로 감싸 startup crash를 방지하고, 사용되지 않는 c-S-c 바인딩이 제거되었습니다. TUI에서 voice.record_key config 설정을 준수하고, absolute path를 경로로 완성(complete)합니다. tui_gateway가 sys.path를 로컬 패키지 shadowing으로부터 보호합니다. Terminal이 background process spawn 시 삭제된 cwd를 감지하여 크래시를 방지합니다 (main branch).",
    commits: [
      {
        sha: "429b8ec",
        message: "fix(cli): guard c-S-c key binding with try/except to prevent startup crash (#19895)",
        href: "https://github.com/NousResearch/hermes-agent/commit/429b8eceb4e053f8783440396c18e30d41509712",
      },
      {
        sha: "20428f5",
        message: "fix(tui): respect voice.record_key config (#19835)",
        href: "https://github.com/NousResearch/hermes-agent/commit/20428f5e600cddb414ab1ec6152aabb0497d14e1",
      },
      {
        sha: "b816fd4",
        message: "fix(tui): complete absolute paths as paths",
        href: "https://github.com/NousResearch/hermes-agent/commit/b816fd4e26d6c7260814f53d5ba7c7eb065548c7",
      },
      {
        sha: "60b143e",
        message: "fix(tui_gateway): guard sys.path against local package shadowing (#15989)",
        href: "https://github.com/NousResearch/hermes-agent/commit/60b143e9dfca5f90e2ecb09391a7f1832ee592e1",
      },
      {
        sha: "109c3e4",
        message: "fix(terminal): guard background process spawn against deleted cwd (#19933)",
        href: "https://github.com/NousResearch/hermes-agent/commit/109c3e468c8ffaf5733683aa1f02afb925104be4",
      },
    ],
  },
];
