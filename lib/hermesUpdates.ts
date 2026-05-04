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

export const hermesUpdatesLastChecked = "2026-05-04";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-04",
    title: "Kanban: Multi-project boards, worker task-ownership, dashboard API guard, workspace 인라인 생성",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban이 multi-project boards를 지원하여 하나의 설치로 여러 kanban을 운영할 수 있습니다. worker의 destructive tool 호출 시 task-ownership을 검사하여 권한 없는 카드 수정을 방지합니다. 대시보드 API를 통한 'running' 상태로의 직접 전환을 거부합니다. Kanban assignee 및 lookup을 위해 profile ID가 정규화됩니다. 대시보드의 인라인 생성 폼에 workspace 종류(kind)와 경로(path) 입력 필드가 추가되었습니다.",
    commits: [
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
        sha: "a31477d",
        message: "fix(profiles): normalize profile IDs for Kanban assignees and lookups",
        href: "https://github.com/NousResearch/hermes-agent/commit/a31477dabb9b02c85283070d0069c78b76d860bb",
      },
      {
        sha: "33f554d",
        message: "feat(kanban-dashboard): workspace kind + path inputs in inline create form (#19679)",
        href: "https://github.com/NousResearch/hermes-agent/commit/33f554d83cc6a600ec87fe70449b66d40d0b7852",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent: Delegation provider/hb, Gemini tool name, compressor, error classifier, model-switch",
    category: "Agent 안정성",
    summary:
      "Delegation에서 provider override를 subagent에 적용하고, heartbeat stale 임계값을 늘려 불안정한 연결에서의 timeout을 완화합니다. Gemini 호환성을 위해 모든 role:tool 메시지에 name 필드를 포함합니다. Compressor의 _prune_old_tool_results 경계 방향을 수정하고, error_classifier가 큰 컨텍스트에서 잘못된 overflow 휴리스틱을 방지합니다. model-switch가 unlisted openai-codex 모델을 soft-accept합니다.",
    commits: [
      {
        sha: "8308077",
        message: "fix(delegation): honor provider override for subagents",
        href: "https://github.com/NousResearch/hermes-agent/commit/83080772f28793ac388d9218c394019ff8554ad0",
      },
      {
        sha: "0cc6304",
        message: "fix(delegation): increase heartbeat stale thresholds",
        href: "https://github.com/NousResearch/hermes-agent/commit/0cc63043e085dc6c12bc80007b6e6e3fafb7b3cf",
      },
      {
        sha: "52882da",
        message: "fix(agent): include name field on every role:tool message for Gemini compatibility (#16478)",
        href: "https://github.com/NousResearch/hermes-agent/commit/52882dade6f96bf88f37535925dbaeed8616cbe7",
      },
      {
        sha: "b7bbc62",
        message: "fix(compressor): _prune_old_tool_results boundary direction",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7bbc62503d54cd95de413df7cda2e802fec0206",
      },
      {
        sha: "d29f90e",
        message: "fix(error_classifier): avoid large-context false overflow heuristics",
        href: "https://github.com/NousResearch/hermes-agent/commit/d29f90e89d0263d390a71b359e1afa4f5a91e1e9",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway: Weixin/Feishu/qqbot, /new 세션명, systemd 갱신, context_length, service 에러",
    category: "Gateway / State",
    summary:
      "Gateway가 Weixin 메시지를 콘텐츠 지문(fingerprint)으로 중복 제거합니다. Feishu 토픽 응답이 새 스레드로 잘못 전환되지 않도록 방지합니다. qqbot이 WebSocket에 프록시 환경 변수를 적용합니다. /new 명령어가 선택적 세션 이름 인자를 받을 수 있고, 부팅 시 systemd 유닛을 갱신합니다. custom_providers에서 context_length를 읽어 세션 정보 헤더에 반영하며, 서비스 미설치 시 친절한 에러를 표시합니다.",
    commits: [
      {
        sha: "7a8ee8b",
        message: "fix(gateway): deduplicate Weixin messages by content fingerprint",
        href: "https://github.com/NousResearch/hermes-agent/commit/7a8ee8b29d86dcb7019677504f5c63587dc70b3b",
      },
      {
        sha: "a79b0ec",
        message: "fix: keep Feishu topic replies from falling back to new threads (local patch)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a79b0ec46157efc91537e634a3dcc44a76f6dc7e",
      },
      {
        sha: "f720751",
        message: "feat(cli,gateway): /new accepts optional session name argument",
        href: "https://github.com/NousResearch/hermes-agent/commit/f720751d796aa0b4658a5bce49995bff2b7a9954",
      },
      {
        sha: "af6f9bc",
        message: "fix: refresh systemd unit on gateway boot (not just start/restart) (#19684)",
        href: "https://github.com/NousResearch/hermes-agent/commit/af6f9bc2a12682b06fb3632acf5a9cbf01e74a85",
      },
      {
        sha: "8c8f95b",
        message: "fix(gateway): show friendly error when service is not installed",
        href: "https://github.com/NousResearch/hermes-agent/commit/8c8f95bc8e4e5d8fb7f06be8154afc3488fab787",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "CLI/Tools/MCP: Windows 경로, fork 업데이트, scalar wrapping, MCP AnyUrl, profile 검증",
    category: "Tools / MCP / Plugins",
    summary:
      "CLI가 Windows 숨김 디렉터리 경로를 마크다운에서 보존하고, fork 사용자에게 upstream/main 기준 업데이트를 확인합니다. tools가 배열 타입 인자에 bare scalar를 단일 요소 리스트로 감쌉니다. MCP에서 AnyUrl 임포트를 mcp 의존성과 분리합니다. CLI의 -p/--profile이 잘못된 argv 값을 프로바이더 해석 전에 거부합니다.",
    commits: [
      {
        sha: "026a5e4",
        message: "fix(cli): preserve Windows hidden-dir paths in markdown",
        href: "https://github.com/NousResearch/hermes-agent/commit/026a5e47df53ed84c2b6d3573d605fe7a93b8611",
      },
      {
        sha: "75b4a34",
        message: "fix(cli): check updates against upstream/main for fork users",
        href: "https://github.com/NousResearch/hermes-agent/commit/75b4a3467032f3382cc860a73a06a706ed580b12",
      },
      {
        sha: "fdf9343",
        message: "fix(tools): wrap bare scalars in single-element list for array-typed args",
        href: "https://github.com/NousResearch/hermes-agent/commit/fdf9343c51467c12c5bc8f89b488340f6d14b7dc",
      },
      {
        sha: "135b4c8",
        message: "fix(mcp): decouple AnyUrl import from mcp dependency",
        href: "https://github.com/NousResearch/hermes-agent/commit/135b4c8b351cda70da89868b9bc1a78bbbb8cf33",
      },
      {
        sha: "c8ecb56",
        message: "fix(cli): reject invalid argv values from -p/--profile before resolving",
        href: "https://github.com/NousResearch/hermes-agent/commit/c8ecb56f27b034187ce8dd24156497997d247c76",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Auth/Config/Security: Nous OAuth, 0600 권한, env cd, redact, Google OAuth TOCTOU",
    category: "Config / Auth",
    summary:
      "Nous OAuth가 공유 토큰 저장소를 통해 여러 프로필에서 지속됩니다. .env, auth.json, state.db 파일이 0600 권한으로 복원됩니다. profile 검증이 엄격하게 유지되고 호출자가 먼저 정규화합니다. env에서 cd 시 하이픈 접두사 workdir에 --를 전달합니다. redact가 code_file 파라미터로 JSON/ENV 패턴의 오탐지를 건너뜁니다. Google OAuth 자격 증명 저장 시 TOCTOU 경쟁 조건을 방지합니다.",
    commits: [
      {
        sha: "a175f39",
        message: "feat(nous): persist Nous OAuth across profiles via shared token store (#19712)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a175f395776a83e54ac838ade06ad3b837051249",
      },
      {
        sha: "60c4bc9",
        message: "fix(security): restore .env/auth.json/state.db with 0600 perms",
        href: "https://github.com/NousResearch/hermes-agent/commit/60c4bc96fd81b51277663a8283fa5eea2be8ab51",
      },
      {
        sha: "ae40fca",
        message: "fix(profiles): keep validate_profile_name strict; callers normalize first",
        href: "https://github.com/NousResearch/hermes-agent/commit/ae40fca95523b2daf7d8c3245dd27ea28059a5cb",
      },
      {
        sha: "edf9c75",
        message: "fix(env): pass -- to cd for hyphen-prefixed workdirs",
        href: "https://github.com/NousResearch/hermes-agent/commit/edf9c75621e6b50c912b77b86b13543008f47f80",
      },
      {
        sha: "412f238",
        message: "fix(google_oauth): close TOCTOU window when saving credentials",
        href: "https://github.com/NousResearch/hermes-agent/commit/412f2389f14a625074fc0ae5a1bda6f97a1c6d8f",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Dashboard/API: Achievements 공유 카드, 테마 팔레트, api_server run.failed, self-improvement, session-search",
    category: "Agent 안정성",
    summary:
      "Achievements가 잠금 해제된 배지에 공유 카드를 렌더링합니다. 대시보드가 커스텀 테마 팔레트 견본을 표시합니다. api_server가 run_conversation 실패 시 run.failed를 emit합니다. self-improvement-loop의 background-review 버짓이 16으로 증가하고 상태 유출이 억제됩니다. session-search가 FTS5 자식 세션 대신 해석된 부모 세션에서 source를 보고합니다.",
    commits: [
      {
        sha: "c5789f4",
        message: "feat(achievements): share card render on unlocked badges (#19657)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5789f4309f3bfc54c73623b25849ac7f12a1d80",
      },
      {
        sha: "da8654b",
        message: "fix(dashboard): show custom theme palette swatches",
        href: "https://github.com/NousResearch/hermes-agent/commit/da8654bb4134634f924d275bc0bc562521887cca",
      },
      {
        sha: "297eaa3",
        message: "fix(api_server): emit run.failed when run_conversation returns failed=True",
        href: "https://github.com/NousResearch/hermes-agent/commit/297eaa3533f6c98a45db4cb5c63fa07c008fd67e",
      },
      {
        sha: "1bd5ac7",
        message: "fix(self-improvement-loop): bump background-review budget to 16 and suppress status leaks (#19710)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1bd5ac7f2f839cd047366749ebbbf901220c7afe",
      },
      {
        sha: "6b4ccb9",
        message: "fix(session-search): report source from resolved parent, not FTS5 child session (#15909)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b4ccb9b148573f0c9a675b9ed24528824b0d87f",
      },
    ],
  },
];
