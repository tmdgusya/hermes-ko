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
      "ACP에 steer/queue slash command가 추가되고, 중단된 prompt를 steer 흐름에서 다시 이어받는 수정이 들어왔습니다. idle 세션에서 /steer를 일반 prompt로 실행하는 처리와 Windows/WSL 환경의 cwd 정규화도 포함됐습니다.",
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
      {
        sha: "41fa1f1",
        message: "fix(acp): run /steer as a regular prompt on idle sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/41fa1f1b5cf560c22a7e9adb06eb463d7122f9e0",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Agent tool-call loop guardrails 및 도구 필터링 강화",
    category: "Agent 안정성",
    summary:
      "도구 호출 반복 루프를 감지하는 guardrail이 추가되고 warning-first 방식으로 조정됐습니다. subtractive toolset 필터링이 엄격하게 적용되며, 사용자 정의 provider가 빌트인 alias보다 우선하도록 fallback 로직이 개선됐습니다.",
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
      {
        sha: "e3624e0",
        message: "fix: enforce strictly subtractive toolset filtration",
        href: "https://github.com/NousResearch/hermes-agent/commit/e3624e00db6ddee7b1bf4009fc19453b5317f2f2",
      },
      {
        sha: "0ddc8ab",
        message: "fix(fallback): let custom_providers shadow built-in aliases",
        href: "https://github.com/NousResearch/hermes-agent/commit/0ddc8aba6826c316060ff72f571f14bbba7058a8",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Gateway 이벤트·세션·state replay 보존 개선",
    category: "Gateway / State",
    summary:
      "Gateway callback snapshot 시점 조정, session 분기 시 assistant metadata 보존, queued event 병합 시 document type 보존 등이 수정됐습니다. State 쪽에서는 conversation replay의 finish_reason 포함과 멀티모달 메시지 콘텐츠의 JSON 인코딩이 적용됐습니다.",
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
        sha: "158eb32",
        message: "fix(gateway): preserve document type when merging queued events",
        href: "https://github.com/NousResearch/hermes-agent/commit/158eb32686cdaebae6737d6874060b14b2d6eda4",
      },
      {
        sha: "a94841e",
        message: "fix(state): include finish_reason in conversation replay",
        href: "https://github.com/NousResearch/hermes-agent/commit/a94841eaa0a89bde990fe76743f1aa7ddb6866bb",
      },
      {
        sha: "531ac20",
        message: "fix(state): JSON-encode multimodal message content for sqlite",
        href: "https://github.com/NousResearch/hermes-agent/commit/531ac204081f8a925f547df0f3415bcbd7321817",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Config/Auth boolean 처리와 provider 설정 안정화",
    category: "Config / Auth",
    summary:
      "문자열로 들어오는 설정값을 실제 boolean으로 보정하고, provider config 저장을 atomic write로 전환해 설정 파일 손상을 방지합니다. YOLO 모드 env 파싱 강화와 hermes update 실행 시 skill config 스캔 실패에도 크래시되지 않도록 수정됐습니다.",
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
      {
        sha: "24130b7",
        message: "fix(approval): harden YOLO mode env parsing against quoted-bool strings",
        href: "https://github.com/NousResearch/hermes-agent/commit/24130b7e53abcd434c7d0ce06de93b27b57047f8",
      },
      {
        sha: "fc78e70",
        message: "fix(update): don't crash hermes update if skill config scan fails",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc78e708ed0c684c20987b23657208c76d45fc5a",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Gateway busy_ack·스레드 라우팅·프로필 재시작 안정화",
    category: "Gateway 운영",
    summary:
      "acknowledgement 메시지를 억제하는 busy_ack_enabled 설정 추가, /update 진행 표시의 스레드 라우팅 유지, /new·/reset 후 topic-bound skill 재주입이 포함됐습니다. 매뉴얼 프로필 게이트웨이는 재시작 전 SIGUSR1으로 drain되며, /status의 토큰 총계를 SessionDB에서 읽도록 개선됐습니다.",
    commits: [
      {
        sha: "2b512cb",
        message: "feat(gateway): add busy_ack_enabled config option to suppress ack messages",
        href: "https://github.com/NousResearch/hermes-agent/commit/2b512cbca417f84c68f6bc5cfea3ac2905120c47",
      },
      {
        sha: "25cbe3e",
        message: "fix(gateway): preserve thread routing for /update progress and prompts",
        href: "https://github.com/NousResearch/hermes-agent/commit/25cbe3e1d6cb8526e1d865a8b5d96d4d7e632933",
      },
      {
        sha: "fa9fd26",
        message: "fix(gateway): re-inject topic-bound skill after /new or /reset",
        href: "https://github.com/NousResearch/hermes-agent/commit/fa9fd26acba4d6f3907ec798974b1431b115557c",
      },
      {
        sha: "9669126",
        message: "fix(gateway): drain manual profile gateways via SIGUSR1 before respawn",
        href: "https://github.com/NousResearch/hermes-agent/commit/96691268dffa40df7110bcab6bdf63ada260a06d",
      },
      {
        sha: "7abc9ce",
        message: "fix(gateway): read /status token totals from SessionDB",
        href: "https://github.com/NousResearch/hermes-agent/commit/7abc9ce4dfc389fb2363f80a38c8a12f3017a269",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Platform 도구 안정화 및 Dashboard 인터랙티브 정렬",
    category: "Platform 도구",
    summary:
      "Discord 툴의 capability 캐시를 토큰별로 분리하고, Browser Supervisor가 캐시 반환 전 스레드/루프 상태를 확인하도록 수정됐습니다. Feishu에는 운영자 설정 기반 봇 승인·멘션 정책이 추가됐고, TUI 이미지 첨부 신뢰성이 개선됐습니다. Dashboard에서는 인터랙티브 컬럼 정렬이 추가됐습니다.",
    commits: [
      {
        sha: "fa7b0b0",
        message: "fix(discord_tool): key capability cache by token instead of single global",
        href: "https://github.com/NousResearch/hermes-agent/commit/fa7b0b0a67886f6d50e55d06370434e4f84ebb00",
      },
      {
        sha: "73a6b80",
        message: "fix(browser_supervisor): verify thread and loop health before returning cached supervisor",
        href: "https://github.com/NousResearch/hermes-agent/commit/73a6b80317652a63faad3d8f0917e38e82cf8175",
      },
      {
        sha: "b94cb8e",
        message: "feat(feishu): operator-configurable bot admission and mention policy",
        href: "https://github.com/NousResearch/hermes-agent/commit/b94cb8e2c4ebf2a8c7688cf676c3cf9899584adb",
      },
      {
        sha: "cc340c4",
        message: "fix(tui): always call input.detect_drop for reliable image attachment",
        href: "https://github.com/NousResearch/hermes-agent/commit/cc340c4a4d8a5c624b764443957cfc84fcd83664",
      },
      {
        sha: "226fd79",
        message: "feat(dashboard): add interactive column sorting to analytics tables",
        href: "https://github.com/NousResearch/hermes-agent/commit/226fd79c8e0ad0c7548a93ec2f8db91f1a9e0239",
      },
    ],
  },
];
