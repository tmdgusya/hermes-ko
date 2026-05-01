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
    title: "Agent guardrails, /goal 크로스턴 목표 및 압축 토큰 추정 개선",
    category: "Agent 안정성",
    summary:
      "도구 호출 반복 루프를 감지하는 guardrail이 warning-first 방식으로 추가되고, 크로스턴 목표를 유지하는 /goal 기능(Ralph loop)이 도입됐습니다. 압축 토큰 추정에 system prompt와 도구 스키마가 포함되며, hermes update에 --yes/-y 플래그가 추가돼 인터랙티브 프롬프트를 건너뛸 수 있습니다.",
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
        sha: "265bd59",
        message: "feat: /goal — persistent cross-turn goals (Ralph loop)",
        href: "https://github.com/NousResearch/hermes-agent/commit/265bd59c1d9f8dea658f243b257d4fae3685af53",
      },
      {
        sha: "f0dc919",
        message: "fix(compression): include system prompt + tool schemas in token estimates",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0dc919f92c5327cf8033e06c039126f1288e89c",
      },
      {
        sha: "50c0463",
        message: "feat(update): add --yes/-y flag to skip interactive prompts",
        href: "https://github.com/NousResearch/hermes-agent/commit/50c046331dc722fa875fd290ce29b9cc5130fc08",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Gateway 세션·이벤트 보존, 자동 알림 삭제 및 state replay 개선",
    category: "Gateway / State",
    summary:
      "Gateway 콜백 snapshot 시점이 agent bind 이후로 조정되고, session 분기 시 assistant metadata가 보존됩니다. 슬래시 커맨드 시스템 알림이 TTL 후 자동 삭제되며, state replay에 finish_reason이 포함되고 멀티모달 콘텐츠가 sqlite용으로 JSON 인코딩됩니다. MATRIX_HOME_ROOM 온보딩과 /status 토큰 총계를 SessionDB에서 읽도록 개선됐습니다.",
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
        sha: "4caad28",
        message: "feat(gateway): auto-delete slash-command system notices after TTL",
        href: "https://github.com/NousResearch/hermes-agent/commit/4caad285a602b75c1da1c7d553864278d7aa723d",
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
    title: "Platform 도구 안정화, Dashboard 정렬 및 Provider 수정",
    category: "Platform 도구",
    summary:
      "Discord 툴의 capability 캐시가 토큰별로 분리되고, Browser Supervisor가 캐시 반환 전 스레드/루프 상태를 확인합니다. Feishu에 운영자 설정 기반 봇 승인·멘션 정책이 추가됐으며, achievements plugin과 profile-tui 경로가 HERMES_HOME 기준으로 라우팅됩니다. Yuanbao 그룹 슬래시 커맨드에 owner identity 확인이 적용됐습니다.",
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
        sha: "dfe512c",
        message: "fix(paths): route achievements plugin + profile-tui through HERMES_HOME",
        href: "https://github.com/NousResearch/hermes-agent/commit/dfe512c58db60910676d6b9c6725f72bb8f39590",
      },
      {
        sha: "b7ad3f4",
        message: "fix(yuanbao): enforce owner identity check on group slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7ad3f478f9bc24768f88e4339fc3e6e23d0292b",
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
        sha: "a2a32688",
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
