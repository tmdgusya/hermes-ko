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
    title: "Kanban: Multi-project boards, worker task-ownership, dashboard API guard, reference docs",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban이 multi-project boards를 지원하여 하나의 설치로 여러 kanban을 운영할 수 있습니다. worker의 destructive tool 호출 시 task-ownership을 검사하여 권한 없는 카드 수정을 방지합니다. 대시보드 API를 통한 'running' 상태로의 직접 전환을 거부합니다. Kanban assignee 및 lookup을 위해 profile ID가 정규화됩니다. Kanban 레퍼런스 문서에 multi-board 관련 내용이 보강되었습니다.",
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
        sha: "b2b479b",
        message: "docs(kanban): backfill multi-board refs in reference docs (#19704)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b2b479b40ece1d0eec8eaf20382bed15d9c25a6d",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent: Delegation provider/hb, Gemini tool name, model-switch, Anthropic Opus fast mode",
    category: "Agent 안정성",
    summary:
      "Delegation에서 provider override를 subagent에 적용하고, heartbeat stale 임계값을 늘려 불안정한 연결에서의 timeout을 완화합니다. Gemini 호환성을 위해 모든 role:tool 메시지에 name 필드를 포함합니다. model-switch가 unlisted openai-codex 모델을 soft-accept합니다. Anthropic fast mode가 API 계약에 따라 Opus 4.6으로 제한됩니다.",
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
        sha: "ef8c213",
        message: "fix(model-switch): soft-accept unlisted openai-codex models",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef8c213e880858dc18af1141d14e9f409b19b1d4",
      },
      {
        sha: "d89e7a3",
        message: "fix(anthropic): restrict fast mode to Opus 4.6 (Anthropic API contract)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d89e7a3cd42eb7cb30ee06e73cf2b4abbaee3248",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent: Compressor, error classifier, browser sandbox, vision auth",
    category: "Agent 안정성",
    summary:
      "Compressor의 _prune_old_tool_results 경계 방향을 수정하고, 요약 단계에서 비문자열 tool content를 건너뛰어 AttributeError를 방지합니다. error_classifier가 큰 컨텍스트에서 잘못된 overflow 휴리스틱을 방지합니다. Browser가 root 및 AppArmor userns 환경에서 --no-sandbox 플래그를 자동 주입합니다. Vision이 custom base_url 사용 시 명시적 provider 인증을 보존합니다.",
    commits: [
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
        sha: "6cf7a9e",
        message: "fix(vision): preserve explicit provider auth with custom base_url",
        href: "https://github.com/NousResearch/hermes-agent/commit/6cf7a9e330cadabd2a0b7ae21f25dc400fc3aa63",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway: Weixin/Feishu, /new 세션명, systemd 갱신, context_length",
    category: "Gateway / State",
    summary:
      "Gateway가 Weixin 메시지를 콘텐츠 지문(fingerprint)으로 중복 제거합니다. Feishu 토픽 응답이 새 스레드로 잘못 전환되지 않도록 방지합니다. /new 명령어가 선택적 세션 이름 인자를 받을 수 있고, 부팅 시 systemd 유닛을 갱신합니다. custom_providers에서 context_length를 읽어 세션 정보 헤더에 반영합니다.",
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
        sha: "3ccf723",
        message: "fix(gateway): read context_length from custom_providers in session info header",
        href: "https://github.com/NousResearch/hermes-agent/commit/3ccf723bf999d02698e44a30e1d6a9a90d7713f7",
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
  {
    date: "2026-05-04",
    title: "Tools/Config/Auth: Nous OAuth, 0600 권한, redact code_file, Windows 경로, scalar wrapping",
    category: "Tools / Config / Auth",
    summary:
      "Nous OAuth가 공유 토큰 저장소를 통해 여러 프로필에서 지속됩니다. .env, auth.json, state.db 파일이 0600 권한으로 복원됩니다. redact가 code_file 파라미터로 JSON/ENV 패턴의 오탐지를 건너뜁니다. CLI가 Windows 숨김 디렉터리 경로를 마크다운에서 보존합니다. tools가 배열 타입 인자에 bare scalar를 단일 요소 리스트로 감쌉니다.",
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
        sha: "6f864f8",
        message: "fix(redact): add code_file param to skip false-positive ENV/JSON patterns",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f864f8f942b3532bea8e10584024a509bd248b4",
      },
      {
        sha: "026a5e4",
        message: "fix(cli): preserve Windows hidden-dir paths in markdown",
        href: "https://github.com/NousResearch/hermes-agent/commit/026a5e47df53ed84c2b6d3573d605fe7a93b8611",
      },
      {
        sha: "fdf9343",
        message: "fix(tools): wrap bare scalars in single-element list for array-typed args",
        href: "https://github.com/NousResearch/hermes-agent/commit/fdf9343c51467c12c5bc8f89b488340f6d14b7dc",
      },
    ],
  },
];
