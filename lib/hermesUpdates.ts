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
      "설정값이 문자열처럼 들어오는 경우를 실제 boolean으로 보정하고, provider config 저장을 atomic write로 처리해 설정 파일 손상 가능성을 줄였습니다. YOLO 모드 env 파싱도 강화됐습니다.",
    commits: [
      {
        sha: "27ec74c",
        message: "fix: coerce show_reasoning and guard_agent_created config bools",
        href: "https://github.com/NousResearch/hermes-agent/commit/27ec74c68a16d411f1184dfae45d139dda33d6d5",
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
    title: "Gateway busy_ack·스레드 라우팅·세션 이미지 격리",
    category: "Gateway 운영",
    summary:
      "acknowledgement 메시지를 억제하는 busy_ack_enabled 설정이 추가되고, /update 진행 표시의 스레드 라우팅이 유지되며, /new·/reset 후 topic-bound skill이 다시 주입됩니다. 세션별 native 이미지 경로 격리와 session key 기반 이미지 버퍼 쓰기도 적용됐습니다.",
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
        sha: "bdb7edd",
        message: "fix(gateway): isolate pending native image paths by session",
        href: "https://github.com/NousResearch/hermes-agent/commit/bdb7edd89e09f5789fbb759dc1207a00eef7162b",
      },
      {
        sha: "a178081",
        message: "fix(gateway): use _session_key_for_source for native image buffer write",
        href: "https://github.com/NousResearch/hermes-agent/commit/a17808146848023b411771257208e66b8b7d7a0b",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Gateway config/env·매뉴얼 프로필 재시작 안정화",
    category: "Gateway 안정화",
    summary:
      "StreamingConfig boolean 변환, home_channel env override 적용, disabled_toolsets 게이트웨이 메시지 루프 적용 등 config/env 처리가 정비됐습니다. 매뉴얼 프로필 게이트웨이는 업데이트 후 자동 재시작되며, 재시작 전 SIGUSR1으로 안전하게 drain됩니다.",
    commits: [
      {
        sha: "ccfe6a4",
        message: "fix(gateway): coerce StreamingConfig booleans and malformed numerics safely",
        href: "https://github.com/NousResearch/hermes-agent/commit/ccfe6a47c3fd68064a286b648d118bf73d9730d7",
      },
      {
        sha: "38875d0",
        message: "fix(gateway): ensure platform configs honor home_channel env overrides",
        href: "https://github.com/NousResearch/hermes-agent/commit/38875d00a736359af948bf5052379ffc37008a36",
      },
      {
        sha: "9a75743",
        message: "fix(gateway): apply agent.disabled_toolsets in gateway message loop",
        href: "https://github.com/NousResearch/hermes-agent/commit/9a757434967f3834d3925fec057ec6d4e7d7411c",
      },
      {
        sha: "77fe7ab",
        message: "feat(gateway): restart manual profile gateways after update",
        href: "https://github.com/NousResearch/hermes-agent/commit/77fe7ab6b20d0d8ec0aeadff6d0d69074db2fdbe",
      },
      {
        sha: "9669126",
        message: "fix(gateway): drain manual profile gateways via SIGUSR1 before respawn",
        href: "https://github.com/NousResearch/hermes-agent/commit/96691268dffa40df7110bcab6bdf63ada260a06d",
      },
    ],
  },
];
