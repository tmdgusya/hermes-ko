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

export const hermesUpdatesLastChecked = "2026-05-01";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-01",
    title: "ACP steer/queue 명령과 중단 프롬프트 복구 개선",
    category: "ACP",
    summary:
      "ACP 쪽에 steer/queue slash command가 추가되고, 중단된 prompt를 steer 흐름에서 다시 이어받는 안정성 수정이 들어왔습니다. Windows/WSL 환경의 cwd 처리도 보강됐습니다.",
    commits: [
      {
        sha: "e27b0b7",
        message: "feat(acp): add steer and queue slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/e27b0b76517c903541af20d0bd606fa7b3c83005",
      },
      {
        sha: "7888636",
        message: "fix(acp): replay interrupted prompts for steer",
        href: "https://github.com/NousResearch/hermes-agent/commit/78886365c2a04f3367028190b71c5b4a96433279",
      },
      {
        sha: "ec1443b",
        message: "fix(acp): normalize Windows cwd for WSL tool execution",
        href: "https://github.com/NousResearch/hermes-agent/commit/ec1443b9f106bf0c4e83669d9abea8ecf934fb3d",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Agent tool-call loop guardrails 추가",
    category: "Agent 안정성",
    summary:
      "도구 호출이 반복 루프에 빠지는 상황을 감지하는 guardrail이 추가됐고, 사용자 경험을 해치지 않도록 warning-first 방식으로 조정됐습니다.",
    commits: [
      {
        sha: "58b8996",
        message: "fix(agent): add tool-call loop guardrails",
        href: "https://github.com/NousResearch/hermes-agent/commit/58b89965c8c4489db817be737eb4e458df0a8e06",
      },
      {
        sha: "0704589",
        message: "fix(agent): make tool loop guardrails warning-first",
        href: "https://github.com/NousResearch/hermes-agent/commit/0704589ceb1365c1b7aefff382923ed28380714e",
      },
      {
        sha: "8fa44b1",
        message: "fix(guardrails): preserve display _detect_tool_failure semantics",
        href: "https://github.com/NousResearch/hermes-agent/commit/8fa44b17247efa8cae6b0f155e036e1bdf4d7da8",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Gateway/session replay 메타데이터 보존 개선",
    category: "Gateway / State",
    summary:
      "Gateway callback snapshot 시점, session branching 시 assistant metadata, conversation replay의 finish_reason 보존 등이 수정됐습니다. 장기 세션과 브랜치 흐름의 신뢰성을 높이는 업데이트입니다.",
    commits: [
      {
        sha: "8d7500d",
        message: "fix(gateway): snapshot callback generation after agent binds it, not before",
        href: "https://github.com/NousResearch/hermes-agent/commit/8d7500d80d1e20f963d531bb459c36c6922b2ad3",
      },
      {
        sha: "7ba1a2b",
        message: "fix(gateway): preserve assistant metadata when branching sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/7ba1a2b3df0cc6ebb5de37ded726ca3281a04a14",
      },
      {
        sha: "a94841e",
        message: "fix(state): include finish_reason in conversation replay",
        href: "https://github.com/NousResearch/hermes-agent/commit/a94841eaa0a89bde990fe76743f1aa7ddb6866bb",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Config/Auth boolean 처리와 provider config write 안정화",
    category: "Config / Auth",
    summary:
      "설정값이 문자열처럼 들어오는 경우를 실제 boolean으로 보정하고, provider config 저장을 atomic write로 처리해 설정 파일 손상 가능성을 줄였습니다.",
    commits: [
      {
        sha: "27ec74c",
        message: "fix: coerce show_reasoning and guard_agent_created config bools",
        href: "https://github.com/NousResearch/hermes-agent/commit/27ec74c68a16d411f1184dfae45d139dda33d6d5",
      },
      {
        sha: "bb706c3",
        message: "fix(gateway): coerce tool_progress_command as a real boolean",
        href: "https://github.com/NousResearch/hermes-agent/commit/bb706c3f38600cefdd651583220b8da1f980e3e3",
      },
      {
        sha: "5536651",
        message: "fix(auth): make provider config writes atomic",
        href: "https://github.com/NousResearch/hermes-agent/commit/55366510e55a9a15cbba3d7e59667d215d4b9a26",
      },
    ],
  },
];
