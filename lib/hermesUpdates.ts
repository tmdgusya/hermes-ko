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
    title: "Microsoft Teams 메시징: threading 구현, 400 폴백, 진단 로깅, 문서화 확장",
    category: "Messaging / Platform",
    summary:
      "Microsoft Teams 메시징 플랫폼에서 app.reply()를 통한 스레딩(threading)이 구현되었습니다. threading이 400 에러를 반환할 경우 flat send로 폴백하고, reply() fallback 시 진단 로깅이 추가되었습니다. 문서 측면에서는 messaging/index.md와 사이드바에 Teams가 등록되어 접근성이 개선되었습니다 (main branch).",
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
        sha: "10f89d7",
        message: "docs(teams): add Teams to messaging/index.md",
        href: "https://github.com/NousResearch/hermes-agent/commit/10f89d7b724bb9f6ae8e97dafbed6b8dba01856e",
      },
      {
        sha: "ef94aa2",
        message: "docs(teams): add Teams to sidebar",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef94aa201fba8c1c95a1c8ee9a4d1ee66ca40dd1",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Kanban dispatcher: stuck-warn 억제, non-spawnable assignee 스킵 + Gateway pending prompts 보존",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban dispatcher가 ready queue에 spawn 불가능한 assignee만 있을 때 stuck-warn을 억제하고, 실제 프로필이 아닌 assignee의 ready task를 건너뜁니다. Gateway가 재시작 간 pending update prompts를 보존하여 업데이트 프롬프트가 소실되지 않도록 합니다 (main branch).",
    commits: [
      {
        sha: "f25d3ec",
        message: "fix(kanban): suppress dispatcher stuck-warn when ready queue holds only non-spawnable assignees",
        href: "https://github.com/NousResearch/hermes-agent/commit/f25d3ec9176bc15d9be59ab32dbd4537606d0254",
      },
      {
        sha: "ca5595f",
        message: "fix(kanban): dispatcher skips ready tasks whose assignee is not a real profile",
        href: "https://github.com/NousResearch/hermes-agent/commit/ca5595fe7b707f7285147623ea2473fb7460b7e7",
      },
      {
        sha: "8ad5e98",
        message: "fix(gateway): preserve pending update prompts across restarts",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ad5e98f8d433e6e302355c77e22931f7a047eea",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "CLI/TUI/설정: 시작 팁 100개, API 키 관리, 클립보드 복사, 보안 CI, Docker 문서",
    category: "Config / Auth",
    summary:
      "CLI 시작 시 100개의 새로운 팁이 추가되었습니다. Setup에서 API 키가 이미 존재할 때 Keep/Replace/Clear 옵션을 제공하여 키 관리가 개선되었습니다. TUI 클립보드 복사 폴백이 개선되었습니다. OSV-Scanner CI와 github-actions용 Dependabot이 보안 강화를 위해 추가되었습니다. Docker terminal backend가 단일 영속 컨테이너임을 명확히 하는 문서 개선도 포함됩니다 (main branch).",
    commits: [
      {
        sha: "fc4aa66",
        message: "feat(tips): add 100 new CLI startup tips (#20168)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc4aa66ee4cda20f711416586cf3401a7cb498b7",
      },
      {
        sha: "91ce8fc",
        message: "fix(setup): offer Keep/Replace/Clear when API key already exists",
        href: "https://github.com/NousResearch/hermes-agent/commit/91ce8fc000deaa4b4bbf1edb5b3d9f6dd1668f09",
      },
      {
        sha: "c3112ad",
        message: "fix(tui): improve clipboard copy fallbacks",
        href: "https://github.com/NousResearch/hermes-agent/commit/c3112adac551f5afe4166c68a1165d60f33af74f",
      },
      {
        sha: "c77a6e3",
        message: "chore(security): add OSV-Scanner CI + Dependabot for github-actions only (#20037)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c77a6e3faaf3d400f639213ba3af02a3891ad05a",
      },
      {
        sha: "a1bed18",
        message: "docs: clarify that the Docker terminal backend is a single persistent container (#20003)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a1bed18194ff1ee8de1bf3e81007ddba06b61042",
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
];
