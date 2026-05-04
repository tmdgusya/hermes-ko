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
    title: "Kanban: Multi-project boards, worker task-ownership, dashboard API guard, notification toggles, profile ID 정규화",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban이 multi-project boards를 지원하여 하나의 설치로 여러 kanban을 운영할 수 있습니다. worker의 destructive tool 호출 시 task-ownership을 검사하여 권한 없는 카드 수정을 방지합니다. 대시보드 API를 통한 'running' 상태로의 직접 전환을 거부합니다. Kanban 대시보드에 플랫폼별 홈 채널 알림 토글이 추가되었습니다. Kanban assignee 및 lookup을 위해 profile ID가 정규화됩니다 (main branch).",
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
        sha: "1c7c7c3",
        message: "feat(kanban-dashboard): per-platform home-channel notification toggles (#19864)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1c7c7c3c5f483cccd8b671410297cd33f1120a87",
      },
      {
        sha: "a31477d",
        message: "fix(profiles): normalize profile IDs for Kanban assignees and lookups",
        href: "https://github.com/NousResearch/hermes-agent/commit/a31477dabb9b02c85283070d0069c78b76d860bb",
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
        sha: "6b4ccb9",
        message: "fix(session-search): report source from resolved parent, not FTS5 child session (#15909)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b4ccb9b148573f0c9a675b9ed24528824b0d87f",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent: Compressor, browser sandbox, file_ops, models, run_agent lock, Anthropic fast mode, TUI, vision",
    category: "Agent 안정성",
    summary:
      "Compressor의 _prune_old_tool_results 경계 방향을 수정하고, 요약 단계에서 비문자열 tool content를 건너뛰어 AttributeError를 방지합니다. Browser가 root 및 AppArmor userns 환경에서 --no-sandbox 플래그를 자동 주입합니다. file_ops가 하이픈 숫자 파일명의 search_files 경로/라인 충돌을 해결하고, 숨김 루트 디렉터리에서도 파일 검색을 허용합니다. run_agent가 IterationBudget.used property에서 lock을 획득합니다. Anthropic fast mode가 API 계약에 따라 Opus 4.6으로 제한됩니다. TUI의 프롬프트 구분자 너비가 보존되고, Vision이 custom base_url 사용 시에도 명시적 provider 인증을 유지합니다.",
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
        sha: "c050ee6",
        message: "fix(file_ops): resolve search_files path/line collision for hyphenated numeric filenames",
        href: "https://github.com/NousResearch/hermes-agent/commit/c050ee6573248057b26dc8e2852fa58d051132eb",
      },
      {
        sha: "64ad7de",
        message: "fix(file-ops): allow file search in hidden roots",
        href: "https://github.com/NousResearch/hermes-agent/commit/64ad7dec0d02256a0ef8330d98ebe5949b517e5e",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway: WSL interop, stale-code check, Weixin 중복 제거, Feishu, context_length, QQ proxy",
    category: "Gateway / State",
    summary:
      "Gateway systemd 유닛이 WSL interop PATH를 보존합니다. stale-code 체크가 파일 mtime 대신 git HEAD SHA를 사용하여 재시작 정확도를 높입니다. Weixin 메시지를 콘텐츠 지문(fingerprint)으로 중복 제거합니다. Feishu 토픽 응답이 새 스레드로 잘못 전환되지 않도록 방지합니다. custom_providers에서 context_length를 읽어 세션 정보 헤더에 반영합니다. QQ bot이 websocket 연결에 프록시 환경 변수를 적용합니다.",
    commits: [
      {
        sha: "8ab9f61",
        message: "fix(gateway): preserve WSL interop PATH in systemd units",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ab9f61dcf787b6cbf4c2ac258621c5f4c2b18d7",
      },
      {
        sha: "d90f73b",
        message: "fix(gateway): use git HEAD SHA, not file mtimes, for stale-code check (#19740)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d90f73bcec3daad4fc72b9f3471392acabdd5747",
      },
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
        sha: "0443484",
        message: "fix(qqbot): honor proxy env vars for websocket",
        href: "https://github.com/NousResearch/hermes-agent/commit/0443484115fb6f3a664defd3969ec6206786d625",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Telegram DM Topic Mode + Cron no_agent 모드, update bundled skills 동기화",
    category: "Gateway / State",
    summary:
      "Telegram DM에 topic-mode 세션이 도입되어 하나의 DM에서 여러 세션을 토픽별로 관리할 수 있습니다. DM topic binding이 switch_session과 /new에서도 유지되도록 강화되었습니다. /topic off, help, auth gate, screenshot debounce 등 편의 기능이 추가되었습니다. Cron에 no_agent 모드(watchdog pattern)가 추가되어 스크립트 전용 cron job을 agent 없이 실행할 수 있습니다. Cron job 실행 시 config.yaml의 ${VAR} 참조가 확장됩니다. hermes update 시 bundled skills가 활성 프로필을 포함한 모든 프로필에 동기화됩니다 (main branch).",
    commits: [
      {
        sha: "d6615d8",
        message: "feat: add Telegram DM topic-mode sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/d6615d8ec7d5c5a3d7b63e3c2c4bfddbd6fddd4b",
      },
      {
        sha: "d35efb9",
        message: "feat(telegram): /topic off + help + auth gate + screenshot debounce",
        href: "https://github.com/NousResearch/hermes-agent/commit/d35efb9898843e22d3d203a7fd6822dddb09d342",
      },
      {
        sha: "3db6b9c",
        message: "feat(cron): add no_agent mode for script-only cron jobs (watchdog pattern) (#19709)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3db6b9cc871c6f1c588cccba1ff2bd09601c1b77",
      },
      {
        sha: "75bce31",
        message: "fix(cron): expand ${VAR} refs in config.yaml during job execution (#15890)",
        href: "https://github.com/NousResearch/hermes-agent/commit/75bce317a30b33dc7d0610120ad2ea3c970c4ddd",
      },
      {
        sha: "20edca7",
        message: "fix(update): sync bundled skills to all profiles, including active (#16176)",
        href: "https://github.com/NousResearch/hermes-agent/commit/20edca75e9929e05435defca4e873d2366ef2fe2",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Dashboard/API/Tools: Achievements 공유 카드, api_server run.failed, Nous OAuth, security 0600, tools scalar wrapping",
    category: "Dashboard / API",
    summary:
      "Achievements가 잠금 해제된 배지에 공유 카드를 렌더링합니다. api_server가 run_conversation 실패 시 run.failed를 emit합니다. self-improvement-loop의 background-review 버짓이 16으로 증가하고 상태 유출이 억제됩니다. Nous OAuth가 공유 토큰 저장소를 통해 여러 프로필에서 지속됩니다. .env, auth.json, state.db 파일이 0600 권한으로 복원됩니다. tools가 배열 타입 인자에 bare scalar를 단일 요소 리스트로 감쌉니다.",
    commits: [
      {
        sha: "c5789f4",
        message: "feat(achievements): share card render on unlocked badges (#19657)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5789f4309f3bfc54c73623b25849ac7f12a1d80",
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
        sha: "a175f39",
        message: "feat(nous): persist Nous OAuth across profiles via shared token store (#19712)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a175f395776a83e54ac838ade06ad3b837051249",
      },
      {
        sha: "fdf9343",
        message: "fix(tools): wrap bare scalars in single-element list for array-typed args",
        href: "https://github.com/NousResearch/hermes-agent/commit/fdf9343c51467c12c5bc8f89b488340f6d14b7dc",
      },
    ],
  },
];
