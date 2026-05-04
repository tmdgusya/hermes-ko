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
    title: "Agent: Delegation 안정성, run_agent lock, Anthropic fast mode, Gemini 호환성, session-search",
    category: "Agent 안정성",
    summary:
      "Delegation에서 provider override를 subagent에 적용하고, heartbeat stale 임계값을 높여 delegation 연결이 더 오래 유지됩니다. run_agent의 IterationBudget.used property에서 lock을 획득하여 동시성 안전성을 강화합니다. Anthropic fast mode가 API 계약에 따라 Opus 4.6으로 제한됩니다. Gemini 호환성을 위해 모든 role:tool 메시지에 name 필드를 포함합니다. Session-search가 FTS5 child session 대신 resolved parent에서 source를 보고합니다 (main branch).",
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
        sha: "fbc477d",
        message: "fix(run_agent): acquire lock in IterationBudget.used property",
        href: "https://github.com/NousResearch/hermes-agent/commit/fbc477df7181e459fc6b300eeaaf54b479a635dc",
      },
      {
        sha: "d89e7a3",
        message: "fix(anthropic): restrict fast mode to Opus 4.6 (Anthropic API contract)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d89e7a3cd42eb7cb30ee06e73cf2b4abbaee3248",
      },
      {
        sha: "52882da",
        message: "fix(agent): include name field on every role:tool message for Gemini compatibility (#16478)",
        href: "https://github.com/NousResearch/hermes-agent/commit/52882dade6f96bf88f37535925dbaeed8616cbe7",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent 도구: Compressor, browser sandbox, file_ops, model-switch, models.dev cloud suffix",
    category: "Agent 안정성",
    summary:
      "Compressor의 _prune_old_tool_results 경계 방향을 수정하고, 요약 단계에서 비문자열 tool content를 건너뛰어 AttributeError를 방지합니다. Browser가 root 및 AppArmor userns 환경에서 --no-sandbox 플래그를 자동 주입합니다. file_ops가 하이픈 숫자 파일명의 search_files 경로/라인 충돌을 해결하고, 숨김 루트 디렉터리에서도 파일 검색을 허용합니다. model-switch가 unlisted openai-codex 모델을 soft-accept합니다. models.dev Ollama Cloud ID에서 :cloud/-cloud suffix를 제거합니다 (main branch).",
    commits: [
      {
        sha: "a7417f8",
        message: "fix(compressor): skip non-string tool content in summarization pass to prevent AttributeError",
        href: "https://github.com/NousResearch/hermes-agent/commit/a7417f8a4a413196dac350e357dec43b8f8eb3e0",
      },
      {
        sha: "b7bbc62",
        message: "fix(compressor): _prune_old_tool_results boundary direction",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7bbc62503d54cd95de413df7cda2e802fec0206",
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
    title: "Gateway: WSL interop, stale-code check, email loop 방지, Weixin 중복 제거, tui_gateway sys.path 보호",
    category: "Gateway / State",
    summary:
      "Gateway systemd 유닛이 WSL interop PATH를 보존합니다. stale-code 체크가 파일 mtime 대신 git HEAD SHA를 사용하여 재시작 정확도를 높입니다. email이 허용 목록(allowlist)에 없는 발신자를 디스패치 전에 차단하여 메일 루프를 방지합니다. Weixin 메시지를 콘텐츠 지문(fingerprint)으로 중복 제거합니다. tui_gateway가 sys.path를 로컬 패키지 shadowing으로부터 보호합니다 (main branch).",
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
        sha: "fd9c32c",
        message: "fix(email): drop non-allowlisted senders before dispatch to prevent mail loops",
        href: "https://github.com/NousResearch/hermes-agent/commit/fd9c32c0f285bb09f926e50980b71da809b3f1ed",
      },
      {
        sha: "7a8ee8b",
        message: "fix(gateway): deduplicate Weixin messages by content fingerprint",
        href: "https://github.com/NousResearch/hermes-agent/commit/7a8ee8b29d86dcb7019677504f5c63587dc70b3b",
      },
      {
        sha: "60b143e",
        message: "fix(tui_gateway): guard sys.path against local package shadowing (#15989)",
        href: "https://github.com/NousResearch/hermes-agent/commit/60b143e9dfca5f90e2ecb09391a7f1832ee592e1",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Telegram DM Topic Mode 확장 + Cron no_agent 모드, update bundled skills 동기화",
    category: "Gateway / State",
    summary:
      "Telegram DM topic-mode 세션이 도입되어 하나의 DM에서 여러 세션을 토픽별로 관리할 수 있습니다. topic mode가 CASCADE, General-topic 처리, rename guard, debounce 등으로 개선되었습니다. DM topic binding이 switch_session과 /new에서도 유지되도록 강화되었습니다. /topic off, help, auth gate, screenshot debounce 등 편의 기능이 추가되었습니다. Cron에 no_agent 모드(watchdog pattern)가 추가되어 스크립트 전용 cron job을 agent 없이 실행할 수 있습니다. Cron job 실행 시 config.yaml의 ${VAR} 참조가 확장됩니다. hermes update 시 bundled skills가 활성 프로필을 포함한 모든 프로필에 동기화됩니다 (main branch).",
    commits: [
      {
        sha: "d6615d8",
        message: "feat: add Telegram DM topic-mode sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/d6615d8ec7d5c5a3d7b63e3c2c4bfddbd6fddd4b",
      },
      {
        sha: "1381c89",
        message: "fix(telegram): polish topic mode — CASCADE, General-topic handling, rename guard, debounce",
        href: "https://github.com/NousResearch/hermes-agent/commit/1381c89e56fd3e6abbd0233b5a361069ae1862c1",
      },
      {
        sha: "a7683d0",
        message: "fix(telegram): harden DM topic binding — persist through switch_session, rebind on /new",
        href: "https://github.com/NousResearch/hermes-agent/commit/a7683d04a9646f8946c4469c31643d7b2670b815",
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
    ],
  },
  {
    date: "2026-05-04",
    title: "모델 / 상태 / 대시보드: backup 보호, status API keys, doctor gh auth, TUI separator, error_classifier",
    category: "Dashboard / API",
    summary:
      "pre-update backup_keep 값을 최소 1로 설정하여 새 백업이 항상 생존하도록 보장합니다. hermes status 디스플레이에 주요 provider API key 상태가 추가되었습니다. doctor가 GITHUB_TOKEN 부재 시 gh auth 상태를 확인합니다. TUI의 프롬프트 구분자 너비가 보존됩니다. error_classifier가 large-context 상황에서 false overflow 휴리스틱을 회피합니다 (main branch).",
    commits: [
      {
        sha: "b46b0c9",
        message: "fix(backup): floor pre-update backup_keep to 1 so the new backup survives",
        href: "https://github.com/NousResearch/hermes-agent/commit/b46b0c98885c78c171d8bd52aee5dd28e082acec",
      },
      {
        sha: "42d72b5",
        message: "fix(status): add missing popular provider API keys to hermes status display",
        href: "https://github.com/NousResearch/hermes-agent/commit/42d72b59223dca923f8bbc4c723c54837b282fc8",
      },
      {
        sha: "103f51a",
        message: "fix(doctor): check gh auth status when GITHUB_TOKEN absent",
        href: "https://github.com/NousResearch/hermes-agent/commit/103f51ad34ee7817d3cd1cbf01144a66573333bb",
      },
      {
        sha: "0ce1b9f",
        message: "fix(tui): preserve prompt separator width (#19340)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0ce1b9fe20a53459b37b7ab27dcb88336dbea781",
      },
      {
        sha: "d29f90e",
        message: "fix(error_classifier): avoid large-context false overflow heuristics",
        href: "https://github.com/NousResearch/hermes-agent/commit/d29f90e89d0263d390a71b359e1afa4f5a91e1e9",
      },
    ],
  },
];
