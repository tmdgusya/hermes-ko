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

export const hermesUpdatesLastChecked = "2026-05-02";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-01",
    title: "ACP steer/queue 명령, 중단 프롬프트 복구, WSL cwd 정규화 및 idle 세션 /steer 처리",
    category: "ACP",
    summary:
      "ACP에 steer/queue slash command가 추가되고, 중단된 prompt를 steer 흐름에서 다시 이어받는 수정이 적용됐습니다. Windows/WSL 환경의 cwd 정규화와 idle 세션에서 /steer를 일반 prompt로 실행하는 처리도 포함됩니다.",
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
    title: "Agent guardrails 강화 (loop 감지·display 의미 보존), Curator dry-run·지연 실행, /goal 크로스턴 목표, DeepSeek V4 Pro 보정, 압축 토큰 추정",
    category: "Agent 안정성",
    summary:
      "도구 호출 반복 루프를 감지하는 guardrail이 추가되고, warning-first 방식으로 조정됐으며 display 레벨의 도구 실패 감지 의미도 보존됩니다. Curator의 첫 실행을 지연시키고 --dry-run 미리보기 옵션이 추가됐으며, cron job skill 참조 재작성도 후속 커밋으로 적용됐습니다. 세션 생성을 첫 메시지까지 지연시켜 불필요한 DB row를 방지하며, 크로스턴 목표를 유지하는 /goal 기능(Ralph loop)도 도입됐습니다. DeepSeek V4 Pro thinking mode에서 reasoning_content placeholder가 비어있지 않도록 보정되고, 압축 시 시스템 프롬프트와 도구 스키마를 토큰 추정에 포함하도록 수정됐습니다.",
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
        sha: "77c0bc6",
        message: "fix(curator): defer first run and add --dry-run preview",
        href: "https://github.com/NousResearch/hermes-agent/commit/77c0bc6b13c8c3f849111c41f2e9233a13b3dcb2",
      },
      {
        sha: "265bd59",
        message: "feat: /goal — persistent cross-turn goals (Ralph loop)",
        href: "https://github.com/NousResearch/hermes-agent/commit/265bd59c1d9f8dea658f243b257d4fae3685af53",
      },
      {
        sha: "e2eb561",
        message: "fix(curator): rewrite cron job skill refs after consolidation",
        href: "https://github.com/NousResearch/hermes-agent/commit/e2eb561e8e1a069392b494811ea45be6779493cd",
      },
      {
        sha: "c5b4c48",
        message: "fix: lazy session creation — defer DB row until first message",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5b4c481656634ff919b214a037b830077d3bbd1",
      },
      {
        sha: "bfb7046",
        message: "fix(deepseek): use non-empty reasoning_content placeholder for V4 Pro thinking mode",
        href: "https://github.com/NousResearch/hermes-agent/commit/bfb704684ec64675650bc39fa0f731604b12aba2",
      },
      {
        sha: "f0dc919",
        message: "fix(compression): include system prompt + tool schemas in token estimates",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0dc919f92c5327cf8033e06c039126f1288e89c",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Gateway / Slack: 비공개 알림, 슬래시 커맨드 ephemeral 처리·격리, 자동 재시작, 알림 TTL, 채팅 ID 보존 및 Matrix 온보딩",
    category: "Gateway / State",
    summary:
      "Gateway에 비공개 알림(private notice) 전송과 Slack format_message 수정이 적용됐습니다. Slash command에 대한 ephemeral acknowledgment 및 라우팅이 추가되고, 리뷰 피드백을 반영해 ephemeral 범위가 커맨드로 조정되고 사용자별 세션 격리가 보존되며, 예약된 Slack 커맨드는 네이티브 슬래시 매니페스트에서 제외됩니다. Gateway가 소스 파일 변경을 감지하면 자동 재시작되며, 슬래시 커맨드 시스템 알림은 TTL 기반으로 자동 삭제됩니다. 그 외에 Slack assistant 스레드 상태 정리, case-sensitive chat ID 보존(DeliveryTarget.parse), scalar free_response_channels 문자열 변환, MATRIX_HOME_ROOM 온보딩 처리, snapshot 콜백 생성 타이밍 수정 등이 추가로 포함됩니다.",
    commits: [
      {
        sha: "0ab2d75",
        message: "feat(gateway): private notice delivery and Slack format_message fixes",
        href: "https://github.com/NousResearch/hermes-agent/commit/0ab2d752ffdae211b0f4fd06c8f62cf7eec191a7",
      },
      {
        sha: "7cda0e5",
        message: "fix(gateway/slack): ephemeral ack and routing for slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/7cda0e522443c6e7790793b93b085508fc530fc8",
      },
      {
        sha: "8fcc160",
        message: "fix(gateway/slack): review fixes — scope ephemeral to commands, user isolation",
        href: "https://github.com/NousResearch/hermes-agent/commit/8fcc160f6b979f9567e76f189e226c18cabc6308",
      },
      {
        sha: "f99676e",
        message: "fix(gateway): auto-restart when source files change out from under us",
        href: "https://github.com/NousResearch/hermes-agent/commit/f99676e315408db3742e00ca9808a31592704399",
      },
      {
        sha: "4caad28",
        message: "feat(gateway): auto-delete slash-command system notices after TTL",
        href: "https://github.com/NousResearch/hermes-agent/commit/4caad285a602b75c1da1c7d553864278d7aa723d",
      },
      {
        sha: "d05a87e",
        message: "fix(gateway): clear slack assistant thread status",
        href: "https://github.com/NousResearch/hermes-agent/commit/d05a87e68662043ac7d66dad942e428a81cd648f",
      },
      {
        sha: "a147164",
        message: "fix(slack): preserve per-user slash-command session isolation",
        href: "https://github.com/NousResearch/hermes-agent/commit/a147164d3c4ceb7e2900e240e90d0f1db7910bf8",
      },
      {
        sha: "a717199",
        message: "fix(slack): exclude reserved Slack commands from native slash manifest",
        href: "https://github.com/NousResearch/hermes-agent/commit/a717199bbf31a0900a99b06153d3ba5803cd9012",
      },
      {
        sha: "5cdc39e",
        message: "fix(gateway): preserve case-sensitive chat IDs in DeliveryTarget.parse",
        href: "https://github.com/NousResearch/hermes-agent/commit/5cdc39e29a032091c4989045b0843715737680c3",
      },
      {
        sha: "2b3923f",
        message: "fix(gateway): coerce scalar free_response_channels to str before split",
        href: "https://github.com/NousResearch/hermes-agent/commit/2b3923ff138f5bd68e576b722ee298a8ce07dfe7",
      },
      {
        sha: "1be3b74",
        message: "fix(gateway): honor MATRIX_HOME_ROOM in onboarding",
        href: "https://github.com/NousResearch/hermes-agent/commit/1be3b74cfb456a2271f16068b08f72b83b37308d",
      },
      {
        sha: "8d7500d",
        message: "fix(gateway): snapshot callback generation after agent binds it, not before",
        href: "https://github.com/NousResearch/hermes-agent/commit/8d7500d80d1e20f963d531bb459c36c6922b2ad3",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Config boolean 보정, update --yes 플래그, atomic 저장, HERMES_HOME 경로 및 YOLO 모드 파싱",
    category: "Config / Auth",
    summary:
      "문자열로 들어오는 설정값을 실제 boolean으로 보정하고, provider config 저장을 atomic write로 전환해 설정 파일 손상을 방지합니다. hermes update에 --yes/-y 플래그가 추가돼 대화형 프롬프트를 건너뛸 수 있으며, skill config scan 실패 시 update가 중단되지 않도록 수정됐습니다. achievements 플러그인과 profile-tui 경로가 HERMES_HOME을 통해 라우팅되고, YOLO 모드 환경변수 파싱이 quoted-bool 문자열에 대해 강화됐습니다. gateway의 tool_progress_command도 실제 boolean으로 안전하게 보정됩니다.",
    commits: [
      {
        sha: "27ec74c",
        message: "fix: coerce show_reasoning and guard_agent_created config bools",
        href: "https://github.com/NousResearch/hermes-agent/commit/27ec74c68a16d411f1184dfae45d139dda33d6d5",
      },
      {
        sha: "50c0463",
        message: "feat(update): add --yes/-y flag to skip interactive prompts",
        href: "https://github.com/NousResearch/hermes-agent/commit/50c046331dc722fa875fd290ce29b9cc5130fc08",
      },
      {
        sha: "fc78e70",
        message: "fix(update): don't crash hermes update if skill config scan fails",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc78e708ed0c684c20987b23657208c76d45fc5a",
      },
      {
        sha: "dfe512c",
        message: "fix(paths): route achievements plugin + profile-tui through HERMES_HOME",
        href: "https://github.com/NousResearch/hermes-agent/commit/dfe512c58db60910676d6b9c6725f72bb8f39590",
      },
      {
        sha: "bb706c3",
        message: "fix(gateway): coerce tool_progress_command as a real boolean",
        href: "https://github.com/NousResearch/hermes-agent/commit/bb706c3f38600cefdd651583220b8da1f980e3e3",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "Discord·Yuanbao·Telegram·Moonshot 도구 수정, Terminal sudo 건너뛰기 및 Browser Supervisor 헬스 체크",
    category: "Tools / MCP / Plugins",
    summary:
      "Discord 툴의 capability 캐시가 토큰별로 분리되고, Yuanbao 그룹 slash command에 owner identity 검사가 적용됩니다. Telegram에서 DM topic 생성 후 seed message를 전송하도록 수정됐으며, Moonshot 모델의 anyOf 브랜치에서 누락된 type을 채우고 nullable/enum을 정리하는 수정이 2회에 걸쳐 적용됐습니다. terminal에서 로컬 NOPASSWD sudo가 가능하면 sudo 프롬프트를 건너뛰고, browser_supervisor에서 캐시된 supervisor를 반환하기 전 thread와 loop 상태를 확인하도록 수정됐습니다.",
    commits: [
      {
        sha: "fa7b0b0",
        message: "fix(discord_tool): key capability cache by token instead of single global",
        href: "https://github.com/NousResearch/hermes-agent/commit/fa7b0b0a67886f6d50e55d06370434e4f84ebb00",
      },
      {
        sha: "b7ad3f4",
        message: "fix(yuanbao): enforce owner identity check on group slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7ad3f478f9bc24768f88e4339fc3e6e23d0292b",
      },
      {
        sha: "75e1339",
        message: "fix(telegram): send seed message after creating DM topics",
        href: "https://github.com/NousResearch/hermes-agent/commit/75e1339d4cdb32652e560eccc3930cc9264ac67b",
      },
      {
        sha: "9ca72a6",
        message: "fix(moonshot): fill missing type before enum cleanup to handle anyOf branches without explicit type",
        href: "https://github.com/NousResearch/hermes-agent/commit/9ca72a69a730e442ad6f14e5f2f51c8f2011dcb7",
      },
      {
        sha: "2af8b8f",
        message: "fix(moonshot): also strip nullable/enum after anyOf collapse",
        href: "https://github.com/NousResearch/hermes-agent/commit/2af8b8ff3712c71620f32b1fa57e92289e6ca202",
      },
    ],
  },
  {
    date: "2026-05-01",
    title: "문서 사이트: 사용자 스토리, llms.txt, /goal 페이지, 사이드바 정리, Kanban 버튼 및 TUI 개선",
    category: "Docs / UI",
    summary:
      "웹사이트에 User Stories 및 Use Cases 콜라주 페이지가 추가되고, 에이전트 친화적 수집을 위한 llms.txt와 llms-full.txt가 발행됐습니다. /goal 기능 문서 페이지가 추가되고 nav와 llms.txt에서도 접근 가능하도록 연결됐으며, 사이드바의 Skills 트리가 단일 노드로 축소됐습니다. Kanban 버튼 수정이 적용됐으며, TUI가 불필요하게 자산을 재빌드하지 않도록 수정되고 리뷰 피드백(정렬 및 숫자 단축키)이 반영됐습니다.",
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
      {
        sha: "a01c1f7",
        message: "fix: kanban button",
        href: "https://github.com/NousResearch/hermes-agent/commit/a01c1f7305bda8ebc5cbcde22f2a80a0300a2ca1",
      },
      {
        sha: "0b76d23",
        message: "docs: make Persistent Goals docs accessible in nav and llms.txt",
        href: "https://github.com/NousResearch/hermes-agent/commit/0b76d23d1acffd14bbc5061cd4f913cf7a0e1a8a",
      },
      {
        sha: "a49f4c6",
        message: "fix: prevent tui rebuilding assets",
        href: "https://github.com/NousResearch/hermes-agent/commit/a49f4c617da3ddcb37a2f438b083b960090ad42a",
      },
      {
        sha: "c23c7c9",
        message: "fix(tui): address remaining review feedback — ordering and digit shortcuts",
        href: "https://github.com/NousResearch/hermes-agent/commit/c23c7c994bf8b77c513b7c3fb4a68774970e47ac",
      },
    ],
  },
];
