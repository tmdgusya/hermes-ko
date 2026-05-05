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
    title: "Microsoft Teams 메시징: threading 지원, fallback, 진단 로깅",
    category: "Gateway / State",
    summary:
      "Microsoft Teams 메시징 플랫폼이 추가되었습니다. app.reply()를 통한 스레딩(threading)이 구현되고, threading이 400 에러를 반환할 경우 flat send로 폴백합니다. reply() fallback 시 진단 로깅이 추가되었습니다. 여러 문서에 Teams가 플랫폼 목록과 사이드바, messaging 인덱스에 등록되었습니다 (main branch).",
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
        sha: "10f89d7",
        message: "docs(teams): add Teams to messaging/index.md",
        href: "https://github.com/NousResearch/hermes-agent/commit/10f89d7b724bb9f6ae8e97dafbed6b8dba01856e",
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
    title: "Agent: Delegation 안정성, run_agent lock, Ollama Cloud 모델, MiniMax TTS, doctor gh auth",
    category: "Agent 안정성",
    summary:
      "Delegation에서 provider override를 subagent에 적용하고, heartbeat stale 임계값을 높여 delegation 연결이 더 오래 유지됩니다. run_agent의 IterationBudget.used property에서 lock을 획득하여 동시성 안전성을 강화합니다. models.dev의 Ollama Cloud ID에서 :cloud/-cloud suffix를 제거하여 모델명을 정규화합니다. MiniMax TTS API 엔드포인트가 v1/text_to_speech로 업데이트됩니다. doctor가 GITHUB_TOKEN이 없을 때 gh auth status를 확인합니다. Anthropic fast mode가 API 계약에 따라 Opus 4.6으로 제한되고, Gemini 호환성을 위해 role:tool 메시지에 name 필드가 포함됩니다 (main branch).",
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
    title: "Agent 도구: Compressor, browser sandbox, file_ops 경로 충돌 해결, update 스킬 동기화",
    category: "Agent 안정성",
    summary:
      "Compressor가 요약 단계에서 비문자열 tool content를 건너뛰어 AttributeError를 방지합니다. Browser가 root 및 AppArmor userns 환경에서 --no-sandbox 플래그를 자동 주입합니다. file_ops가 숨겨진 루트(hidden roots)에서 파일 검색을 허용하고, 하이픈이 포함된 숫자 파일명에서 search_files 경로·라인 충돌을 해결합니다. update 시 bundled skills가 활성 프로필을 포함한 모든 프로필로 동기화됩니다 (main branch).",
    commits: [
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
        sha: "64ad7de",
        message: "fix(file-ops): allow file search in hidden roots",
        href: "https://github.com/NousResearch/hermes-agent/commit/64ad7dec0d02256a0ef8330d98ebe5949b517e5e",
      },
      {
        sha: "c050ee6",
        message: "fix(file_ops): resolve search_files path/line collision for hyphenated numeric filenames",
        href: "https://github.com/NousResearch/hermes-agent/commit/c050ee6573248057b26dc8e2852fa58d051132eb",
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
    title: "Gateway: WSL interop, stale-code HEAD SHA 체크, planned service stops, email loop 방지, cron ${VAR} 확장",
    category: "Gateway / State",
    summary:
      "Gateway systemd 유닛이 WSL interop PATH를 보존합니다. stale-code 체크가 파일 mtime 대신 git HEAD SHA를 사용하여 재시작 정확도를 높입니다. Gateway가 planned service stops(의도된 서비스 중지)를 처리하여 불필요한 재시작을 방지합니다. Email이 허용 목록(allowlist)에 없는 발신자를 디스패치 전에 차단하여 메일 루프를 방지합니다. Cron job 실행 시 config.yaml의 \\${VAR} 환경변수 참조를 확장합니다 (main branch).",
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
        sha: "75bce31",
        message: "fix(cron): expand \\${VAR} refs in config.yaml during job execution (#15890)",
        href: "https://github.com/NousResearch/hermes-agent/commit/75bce317a30b33dc7d0610120ad2ea3c970c4ddd",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "CLI/TUI 안정성 + Hyperframes 스킬: c-S-c 크래시 방지, local cwd 복구, sys.path 보호, terminal cwd 보호, 새 creative skill",
    category: "Agent 안정성",
    summary:
      "CLI에서 c-S-c 키 바인딩을 try/except로 감싸 startup crash를 방지하고, 사용되지 않는 c-S-c 바인딩이 제거되었습니다. Local 환경에서 persistent_shell cwd가 삭제되었을 때 복구하고, tui_gateway가 sys.path를 로컬 패키지 shadowing으로부터 보호합니다. Terminal이 background process spawn 시 삭제된 cwd를 감지하여 크래시를 방지합니다. TUI에서 voice.record_key 설정을 존중하고, shortcut config 충돌이 해결되었습니다. Hyperframes optional creative skill이 추가되고 관련 문서가 동기화되었습니다 (main branch).",
    commits: [
      {
        sha: "429b8ec",
        message: "fix(cli): guard c-S-c key binding with try/except to prevent startup crash (#19895)",
        href: "https://github.com/NousResearch/hermes-agent/commit/429b8eceb4e053f8783440396c18e30d41509712",
      },
      {
        sha: "9644b8a",
        message: "fix(local): recover when persistent_shell cwd is deleted (#17558)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9644b8ae67a84e4b77f3f79f20fa87ddc44f8559",
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
      {
        sha: "50aabb9",
        message: "feat(skill): add hyperframes optional creative skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/50aabb9eb2a8d5b2c4f84a447d8f22529844c192",
      },
    ],
  },
];
