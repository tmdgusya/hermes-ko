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
    date: "2026-05-04",
    title: "Kanban: Multi-project boards, worker task-ownership, dashboard API guard, auto-subscribe gateway (reverted), reference docs",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban이 multi-project boards를 지원하여 하나의 설치로 여러 kanban을 운영할 수 있습니다. worker의 destructive tool 호출 시 task-ownership을 검사하여 권한 없는 카드 수정을 방지합니다. 대시보드 API를 통한 'running' 상태로의 직접 전환을 거부합니다. Kanban assignee 및 lookup을 위해 profile ID가 정규화됩니다. kanban_create 툴 호출 시 gateway chat을 자동 구독하는 기능이 추가되었다가 같은 날 revert되었습니다 (main branch). Kanban 레퍼런스 문서에 multi-board 관련 내용이 보강되었습니다.",
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
        sha: "ff3d277",
        message: "feat(kanban): auto-subscribe gateway chat on tool-driven kanban_create (#19718)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ff3d2773e2a3aab49f282b9b075b2e0d07b18560",
      },
      {
        sha: "3fb3552",
        message: "revert: auto-subscribe gateway chat on tool-driven kanban_create (#19718) (#19721)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3fb35520c6f50626050f3cce16199984f1623004",
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
    title: "Agent: Delegation heartbeat, error classifier, Gemini tool name, model-switch, session-search",
    category: "Agent 안정성",
    summary:
      "Delegation에서 provider override를 subagent에 적용하고, heartbeat stale 임계값을 높여 delegation 연결이 더 오래 유지됩니다. Error classifier가 large-context 상황에서 false overflow 휴리스틱을 회피합니다. Gemini 호환성을 위해 모든 role:tool 메시지에 name 필드를 포함합니다. model-switch가 unlisted openai-codex 모델을 soft-accept합니다. Session-search가 FTS5 child session 대신 resolved parent에서 source를 보고합니다.",
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
        sha: "d29f90e",
        message: "fix(error_classifier): avoid large-context false overflow heuristics",
        href: "https://github.com/NousResearch/hermes-agent/commit/d29f90e89d0263d390a71b359e1afa4f5a91e1e9",
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
        sha: "6b4ccb9",
        message: "fix(session-search): report source from resolved parent, not FTS5 child session (#15909)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b4ccb9b148573f0c9a675b9ed24528824b0d87f",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent: Compressor, browser sandbox, Anthropic fast mode, backup safety, TUI, vision, CLI, Windows paths",
    category: "Agent 안정성",
    summary:
      "Compressor의 _prune_old_tool_results 경계 방향을 수정하고, 요약 단계에서 비문자열 tool content를 건너뛰어 AttributeError를 방지합니다. Browser가 root 및 AppArmor userns 환경에서 --no-sandbox 플래그를 자동 주입합니다. Anthropic fast mode가 API 계약에 따라 Opus 4.6으로 제한됩니다. pre-update backup_keep을 최소 1로 유지하여 새 백업이 업데이트 직후 삭제되지 않도록 보호합니다. 하이픈으로 시작하는 workdir에서 cd가 올바르게 동작하도록 --를 전달합니다. TUI의 프롬프트 구분자 너비가 보존됩니다. Vision이 custom base_url 사용 시에도 명시적 provider 인증을 유지합니다. CLI에서 Windows 숨김 디렉터리 경로가 마크다운에 올바르게 보존됩니다.",
    commits: [
      {
        sha: "b7bbc62",
        message: "fix(compressor): _prune_old_tool_results boundary direction",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7bbc62503d54cd95de413df7cda2e802fec0206",
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
        sha: "d89e7a3",
        message: "fix(anthropic): restrict fast mode to Opus 4.6 (Anthropic API contract)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d89e7a3cd42eb7cb30ee06e73cf2b4abbaee3248",
      },
      {
        sha: "b46b0c9",
        message: "fix(backup): floor pre-update backup_keep to 1 so the new backup survives",
        href: "https://github.com/NousResearch/hermes-agent/commit/b46b0c98885c78c171d8bd52aee5dd28e082acec",
      },
      {
        sha: "edf9c75",
        message: "fix(env): pass -- to cd for hyphen-prefixed workdirs",
        href: "https://github.com/NousResearch/hermes-agent/commit/edf9c75621e6b50c912b77b86b13543008f47f80",
      },
      {
        sha: "0ce1b9f",
        message: "fix(tui): preserve prompt separator width (#19340)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0ce1b9fe20a53459b37b7ab27dcb88336dbea781",
      },
      {
        sha: "6cf7a9e",
        message: "fix(vision): preserve explicit provider auth with custom base_url",
        href: "https://github.com/NousResearch/hermes-agent/commit/6cf7a9e330cadabd2a0b7ae21f25dc400fc3aa63",
      },
      {
        sha: "026a5e4",
        message: "fix(cli): preserve Windows hidden-dir paths in markdown",
        href: "https://github.com/NousResearch/hermes-agent/commit/026a5e47df53ed84c2b6d3573d605fe7a93b8611",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway: Weixin/Feishu/Telegram/QQ/Teams, context_length, friendly error",
    category: "Gateway / State",
    summary:
      "Gateway가 Weixin 메시지를 콘텐츠 지문(fingerprint)으로 중복 제거합니다. Feishu 토픽 응답이 새 스레드로 잘못 전환되지 않도록 방지합니다. Telegram의 send_photo 실패 시 image_dimensions 오류 외 다른 실패에도 document로 대체 전송합니다. QQ bot이 websocket 연결에 프록시 환경 변수를 적용합니다. Teams interactive_setup이 config 대신 cli_output에서 prompt/print 헬퍼를 import합니다. custom_providers에서 context_length를 읽어 세션 정보 헤더에 반영합니다. Gateway가 설치되지 않은 서비스에 대해 친화적인 오류 메시지를 표시합니다.",
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
        sha: "69fc6d9",
        message: "fix(telegram): fall back to document on any send_photo failure, not just dim errors",
        href: "https://github.com/NousResearch/hermes-agent/commit/69fc6d9c1e82ec87ec08765f10e92e8d08029851",
      },
      {
        sha: "0443484",
        message: "fix(qqbot): honor proxy env vars for websocket",
        href: "https://github.com/NousResearch/hermes-agent/commit/0443484115fb6f3a664defd3969ec6206786d625",
      },
      {
        sha: "38adfeb",
        message: "fix(teams): import prompt/print helpers from cli_output, not config",
        href: "https://github.com/NousResearch/hermes-agent/commit/38adfebe78fb210921ece43c62c46cd966279c5b",
      },
      {
        sha: "3ccf723",
        message: "fix(gateway): read context_length from custom_providers in session info header",
        href: "https://github.com/NousResearch/hermes-agent/commit/3ccf723bf999d02698e44a30e1d6a9a90d7713f7",
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
    title: "Dashboard/API: Achievements 공유 카드, 테마 팔레트, api_server run.failed, self-improvement, image-gen xAI",
    category: "Dashboard / API",
    summary:
      "Achievements가 잠금 해제된 배지에 공유 카드를 렌더링합니다. 대시보드가 커스텀 테마 팔레트 견본을 표시합니다. api_server가 run_conversation 실패 시 run.failed를 emit합니다. self-improvement-loop의 background-review 버짓이 16으로 증가하고 상태 유출이 억제됩니다. Image-gen이 xAI API 오류 발생 시 원래 상태 코드를 보존합니다.",
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
        sha: "239ea1b",
        message: "fix(image-gen): preserve xAI API error status",
        href: "https://github.com/NousResearch/hermes-agent/commit/239ea1bdeabb4bc5b56571b3f5b0aa63956b982e",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Tools/Config/Auth: Nous OAuth, 0600 권한, redact code_file, status display, scalar wrapping, profiles strict",
    category: "Tools / Config / Auth",
    summary:
      "Nous OAuth가 공유 토큰 저장소를 통해 여러 프로필에서 지속됩니다. .env, auth.json, state.db 파일이 0600 권한으로 복원됩니다. redact가 code_file 파라미터로 JSON/ENV 패턴의 오탐지를 건너뜁니다. hermes status가 주요 provider API 키 누락 여부를 함께 표시합니다. tools가 배열 타입 인자에 bare scalar를 단일 요소 리스트로 감쌉니다. profiles의 validate_profile_name이 엄격 검사를 유지하고, 호출자가 먼저 정규화하도록 수정되었습니다.",
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
        sha: "42d72b5",
        message: "fix(status): add missing popular provider API keys to hermes status display",
        href: "https://github.com/NousResearch/hermes-agent/commit/42d72b59223dca923f8bbc4c723c54837b282fc8",
      },
      {
        sha: "fdf9343",
        message: "fix(tools): wrap bare scalars in single-element list for array-typed args",
        href: "https://github.com/NousResearch/hermes-agent/commit/fdf9343c51467c12c5bc8f89b488340f6d14b7dc",
      },
      {
        sha: "ae40fca",
        message: "fix(profiles): keep validate_profile_name strict; callers normalize first",
        href: "https://github.com/NousResearch/hermes-agent/commit/ae40fca95523b2daf7d8c3245dd27ea28059a5cb",
      },
    ],
  },
];
