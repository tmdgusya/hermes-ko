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
    title: "Agent guardrails 강화와 /goal 크로스턴 목표, DeepSeek V4 Pro 대응",
    category: "Agent 안정성",
    summary:
      "도구 호출 반복 루프를 감지하는 guardrail이 warning-first 방식으로 추가되고, _detect_tool_failure display 의미 체계가 보존됩니다. 크로스턴 목표를 유지하는 /goal 기능(Ralph loop)이 도입됐으며, DeepSeek V4 Pro thinking mode에서 reasoning_content placeholder가 비어있지 않도록 수정됐습니다.",
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
        sha: "265bd59",
        message: "feat: /goal — persistent cross-turn goals (Ralph loop)",
        href: "https://github.com/NousResearch/hermes-agent/commit/265bd59c1d9f8dea658f243b257d4fae3685af53",
      },
      {
        sha: "bfb7046",
        message: "fix(deepseek): use non-empty reasoning_content placeholder for V4 Pro thinking mode",
        href: "https://github.com/NousResearch/hermes-agent/commit/bfb704684ec64675650bc39fa0f731604b12aba2",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Gateway 세션·이벤트 보존, /status 토큰 조회 및 topic skill 재주입",
    category: "Gateway / State",
    summary:
      "Gateway 콜백 snapshot 시점이 agent bind 이후로 조정되고, session 분기 시 assistant metadata가 보존됩니다. /new 또는 /reset 이후 topic-bound skill이 재주입되며, /status 명령의 토큰 총계를 SessionDB에서 읽도록 개선됐습니다. 슬래시 커맨드 시스템 알림이 TTL 후 자동 삭제됩니다.",
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
        sha: "fa9fd26",
        message: "fix(gateway): re-inject topic-bound skill after /new or /reset",
        href: "https://github.com/NousResearch/hermes-agent/commit/fa9fd26acba4d6f3907ec798974b1431b115557c",
      },
      {
        sha: "7abc9ce",
        message: "fix(gateway): read /status token totals from SessionDB",
        href: "https://github.com/NousResearch/hermes-agent/commit/7abc9ce4dfc389fb2363f80a38c8a12f3017a269",
      },
      {
        sha: "4caad28",
        message: "feat(gateway): auto-delete slash-command system notices after TTL",
        href: "https://github.com/NousResearch/hermes-agent/commit/4caad285a602b75c1da1c7d553864278d7aa723d",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Config/Auth boolean 처리와 provider 설정 안정화",
    category: "Config / Auth",
    summary:
      "문자열로 들어오는 설정값을 실제 boolean으로 보정하고, provider config 저장을 atomic write로 전환해 설정 파일 손상을 방지합니다. StreamingConfig의 boolean과 잘못된 숫자값도 안전하게 보정하며, YOLO 모드 env 파싱이 quoted-bool 문자열에 강화됐습니다.",
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
        sha: "ccfe6a4",
        message: "fix(gateway): coerce StreamingConfig booleans and malformed numerics safely",
        href: "https://github.com/NousResearch/hermes-agent/commit/ccfe6a47c3fd68064a286b648d118bf73d9730d7",
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
    ],
  },
  {
    date: "2026-05-01",
    title: "Discord·Feishu 플랫폼 도구와 Moonshot·Honcho 내부 도구 개선",
    category: "Tools / MCP / Plugins",
    summary:
      "Discord 툴의 capability 캐시가 토큰별로 분리되고, Feishu에 운영자 설정 기반 봇 승인·멘션 정책이 추가됐습니다. Moonshot에서 anyOf collapse 후 nullable/enum 제거와 누락된 타입 채우기 수정이 적용됐으며, Honcho의 캐시 읽기가 _cache_lock으로 보호됩니다.",
    commits: [
      {
        sha: "fa7b0b0",
        message: "fix(discord_tool): key capability cache by token instead of single global",
        href: "https://github.com/NousResearch/hermes-agent/commit/fa7b0b0a67886f6d50e55d06370434e4f84ebb00",
      },
      {
        sha: "b94cb8e",
        message: "feat(feishu): operator-configurable bot admission and mention policy",
        href: "https://github.com/NousResearch/hermes-agent/commit/b94cb8e2c4ebf2a8c7688cf676c3cf9899584adb",
      },
      {
        sha: "2af8b8f",
        message: "fix(moonshot): also strip nullable/enum after anyOf collapse",
        href: "https://github.com/NousResearch/hermes-agent/commit/2af8b8ff3712c71620f32b1fa57e92289e6ca202",
      },
      {
        sha: "9ca72a6",
        message: "fix(moonshot): fill missing type before enum cleanup to handle anyOf branches without explicit type",
        href: "https://github.com/NousResearch/hermes-agent/commit/9ca72a69a730e442ad6f14e5f2f51c8f2011dcb7",
      },
      {
        sha: "ec4cb16",
        message: "fix(honcho): guard _peers_cache and _sessions_cache reads under _cache_lock",
        href: "https://github.com/NousResearch/hermes-agent/commit/ec4cb16a29ec882df0ff931cda287ae97d61601c",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "문서 사이트: 사용자 스토리, llms.txt, /goal 페이지 및 사이드바 정리",
    category: "Docs",
    summary:
      "웹사이트에 User Stories 및 Use Cases 콜라주 페이지가 추가되고, 에이전트 친화적 수집을 위한 llms.txt와 llms-full.txt가 발행됐습니다. /goal 기능 문서 페이지가 추가됐으며, 사이드바의 Skills 트리가 단일 노드로 축소됐습니다.",
    commits: [
      {
        sha: "a2a3268",
        message: "docs(website): add User Stories and Use Cases collage page",
        href: "https://github.com/NousResearch/hermes-agent/commit/a2a32688ca8ad13727e38df85f3f2820f5a31902",
      },
      {
        sha: "c6eebfc",
        message: "docs: publish llms.txt and llms-full.txt for agent-friendly ingestion",
        href: "https://github.com/NousResearch/hermes-agent/commit/c6eebfc25a5779668ae2fefe27f5d85a82055ab3",
      },
      {
        sha: "cf2b2d3",
        message: "docs: add Persistent Goals (/goal) feature page",
        href: "https://github.com/NousResearch/hermes-agent/commit/cf2b2d31ce77ba87c114c53966d7f7cc629cad9e",
      },
      {
        sha: "7c6c561",
        message: "docs(sidebar): collapse exploding skills tree to a single Skills node",
        href: "https://github.com/NousResearch/hermes-agent/commit/7c6c5619a7b85ef7ed873632e25a4a4745563866",
      },
    ],
  },
];
