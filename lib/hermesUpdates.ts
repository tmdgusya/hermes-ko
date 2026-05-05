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
    title: "Agent: Delegation 안정성, run_agent lock, Anthropic fast mode 제한, Gemini 호환성",
    category: "Agent 안정성",
    summary:
      "Delegation에서 provider override를 subagent에 적용하고, heartbeat stale 임계값을 높여 delegation 연결이 더 오래 유지됩니다. run_agent의 IterationBudget.used property에서 lock을 획득하여 동시성 안전성을 강화합니다. Anthropic fast mode가 API 계약에 따라 Opus 4.6으로 제한됩니다. Gemini 호환성을 위해 모든 role:tool 메시지에 name 필드를 포함합니다 (main branch).",
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
    title: "Agent 도구: Compressor, browser sandbox, file_ops 숨김 루트, models.dev cloud suffix, MiniMax TTS",
    category: "Agent 안정성",
    summary:
      "Compressor가 요약 단계에서 비문자열 tool content를 건너뛰어 AttributeError를 방지하고, _prune_old_tool_results 경계 방향을 수정합니다. Browser가 root 및 AppArmor userns 환경에서 --no-sandbox 플래그를 자동 주입합니다. file_ops가 숨겨진 루트(hidden roots)에서도 파일 검색을 허용합니다. models.dev Ollama Cloud ID에서 :cloud/-cloud suffix를 제거합니다. MiniMax TTS API 엔드포인트가 v1/text_to_speech로 업데이트되었습니다 (main branch).",
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
        sha: "eadf346",
        message: "fix(models): strip :cloud/-cloud suffix from models.dev Ollama Cloud IDs",
        href: "https://github.com/NousResearch/hermes-agent/commit/eadf34633e038c595dcf615845b992a45443e380",
      },
      {
        sha: "6875471",
        message: "fix(tts): update MiniMax API endpoint to v1/text_to_speech",
        href: "https://github.com/NousResearch/hermes-agent/commit/68754719165265e3dc152f10cabf9f46a4b45122",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway: WSL interop, stale-code 체크, planned service stops, email loop 방지, update skills sync",
    category: "Gateway / State",
    summary:
      "Gateway systemd 유닛이 WSL interop PATH를 보존합니다. stale-code 체크가 파일 mtime 대신 git HEAD SHA를 사용하여 재시작 정확도를 높입니다. Gateway가 planned service stops(의도된 서비스 중지)를 처리하여 불필요한 재시작을 방지합니다. Email이 허용 목록(allowlist)에 없는 발신자를 디스패치 전에 차단하여 메일 루프를 방지합니다. 번들 스킬이 활성 프로필을 포함한 모든 프로필로 동기화됩니다. 이 외에도 tui_gateway sys.path 보호, Teams import 경로 수정, google-workspace SKILL.md 복원, email himalaya v1.2.0 문서화, Weixin 중복 제거 등이 포함됩니다 (main branch).",
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
        sha: "20edca7",
        message: "fix(update): sync bundled skills to all profiles, including active (#16176)",
        href: "https://github.com/NousResearch/hermes-agent/commit/20edca75e9929e05435defca4e873d2366ef2fe2",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Telegram DM Topic Mode + Hyperframes 스킬, Cron no_agent 모드",
    category: "Gateway / State",
    summary:
      "Telegram DM topic-mode 세션이 도입되어 하나의 DM에서 여러 세션을 토픽별로 관리할 수 있습니다. topic mode가 CASCADE, General-topic 처리, rename guard, debounce 등으로 개선되고, /topic off, help, auth gate, screenshot debounce 기능이 추가되었습니다. DM topic binding이 switch_session과 /new에서도 유지됩니다. Hyperframes optional creative skill이 추가되고 관련 CLI 문서(inspect command) 및 SKILL.md가 정비되었습니다. Cron에 no_agent 모드(watchdog pattern)가 추가되어 스크립트 전용 cron job을 agent 없이 실행할 수 있으며, config.yaml의 ${VAR} 환경변수 확장과 concurrency regression test도 포함됩니다 (main branch).",
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
        sha: "50aabb9",
        message: "feat(skill): add hyperframes optional creative skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/50aabb9eb2a8d5b2c4f84a447d8f22529844c192",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent: TUI/CLI/터미널/Local 안정성 — 경로 완성, voice key, cwd 복구, CLI crash 방지",
    category: "Agent 안정성",
    summary:
      "TUI에서 절대 경로를 path로 완성하고, voice.record_key 설정을 존중하며, prompt separator 너비를 보존합니다. Terminal이 background process spawn 시 삭제된 cwd를 감지하여 크래시를 방지합니다. Local shell이 persistent_shell cwd가 삭제되었을 때 복구하고, test root를 ancestor candidate으로 검사하며 실제 pipe를 fake stdout에 사용합니다. CLI의 c-S-c key binding을 try/except로 보호하여 startup crash를 방지하고 dead binding을 정리합니다. 이 외에도 file_ops의 하이픈 숫자 파일명 path/line 충돌 해결, 숨김 루트 파일 검색, CLI shortcut config 충돌 수정, doctor의 GITHUB_TOKEN 부재 시 gh auth 상태 확인 등이 포함됩니다 (main branch).",
    commits: [
      {
        sha: "b816fd4",
        message: "fix(tui): complete absolute paths as paths",
        href: "https://github.com/NousResearch/hermes-agent/commit/b816fd4e26d6c7260814f53d5ba7c7eb065548c7",
      },
      {
        sha: "20428f5",
        message: "fix(tui): respect voice.record_key config (supersedes #19028, #19339) (#19835)",
        href: "https://github.com/NousResearch/hermes-agent/commit/20428f5e600cddb414ab1ec6152aabb0497d14e1",
      },
      {
        sha: "109c3e4",
        message: "fix(terminal): guard background process spawn against deleted cwd (#19933)",
        href: "https://github.com/NousResearch/hermes-agent/commit/109c3e468c8ffaf5733683aa1f02afb925104be4",
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
