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

export const hermesUpdatesLastChecked = "2026-05-14"; // last new commit: 2026-05-14

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-14",
    title: "Slack / Tools — 스레드에서 !cmd 대체 접두어 지원, tools 메뉴 로딩 성능 개선",
    category: "Slack / Tools",
    summary:
      "Slack 스레드에서 !cmd를 / 명령어의 대체 접두어로 사용할 수 있습니다 (#6122a79). get_nous_auth_status()와 load_env() 결과가 캐싱되어 hermes tools 메뉴 응답 속도가 개선됩니다 (#3f13d78) (main branch 기준).",
    commits: [
      {
        sha: "6122a79",
        message: "feat(slack): support !cmd as alternate prefix for slash commands in threads (#25355)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6122a79aab45041d8b7c8d775f95be3ac6ce579f",
      },
      {
        sha: "3f13d78",
        message: "perf(tools): cache get_nous_auth_status() and load_env() to fix slow `hermes tools` menus (#25341)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3f13d78088d1a9a35eb542f29b16d11d534066e7",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Skills / EVM — EVM 멀티체인 스킬 도입, blockchain/base를 blockchain/evm으로 통합, SKILL.md 최신화",
    category: "Skills / EVM",
    summary:
      "8개 체인과 14개 명령어를 지원하는 EVM 멀티체인 스킬이 추가됩니다 (#aa1e2ed). 기존 blockchain/base가 blockchain/evm으로 병합되며 PR #2010이 복구(salvage)됩니다 (#e3fc081). EVM 스킬의 SKILL.md가 최신 포맷으로 정리됩니다 (#66c7096) (main branch 기준).",
    commits: [
      {
        sha: "aa1e2ed",
        message: "feat: add EVM multi-chain skill (8 chains, 14 commands)",
        href: "https://github.com/NousResearch/hermes-agent/commit/aa1e2edd35a8e14fc02ad13b0fc4e8cecd10bbfc",
      },
      {
        sha: "e3fc081",
        message: "feat(skills): merge blockchain/base into blockchain/evm; salvage PR #2010",
        href: "https://github.com/NousResearch/hermes-agent/commit/e3fc0814996d043fa9badce7da241ef02d5f905b",
      },
      {
        sha: "66c7096",
        message: "chore(skills/evm): tighten SKILL.md to modern format",
        href: "https://github.com/NousResearch/hermes-agent/commit/66c70966cd2ae3c13bacf4d57522cf86f469b9d3",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Runtime — OpenAI/Codex 모델용 선택적 codex app-server 런타임 도입",
    category: "Runtime / Codex",
    summary:
      "OpenAI/Codex 모델을 위한 선택적(optional) codex app-server 런타임이 도입됩니다 (#091d8e1) (main branch 기준).",
    commits: [
      {
        sha: "091d8e1",
        message: "feat(codex-runtime): optional codex app-server runtime for OpenAI/Codex models (#24182)",
        href: "https://github.com/NousResearch/hermes-agent/commit/091d8e10306613819c6cf3a64dda5b166c3048cd",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Tools Config / Docs — Reconfigure 경로 video_gen.provider 기록 수정, 인메모리 플러그인 PR 종료 및 스킬 표준 문서화",
    category: "Tools Config / Docs",
    summary:
      "Reconfigure 도구 경로에서 video_gen.provider 설정이 올바르게 기록됩니다 (#dd5a950). 인메모리(in-tree) 메모리 플러그인에 대한 신규 PR이 종료되고 스킬 표준이 문서화됩니다 (#ef98e3f) (main branch 기준).",
    commits: [
      {
        sha: "dd5a950",
        message: "fix(tools-config): write video_gen.provider on Reconfigure tool path (#25307)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dd5a9502e389781275a1649716f6d3ca4ae98c51",
      },
      {
        sha: "ef98e3f",
        message: "docs: close in-tree memory plugins to new PRs and codify skill standards (#25302)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef98e3f9e60b6e4066050bd8c6d13409f9fedf5d",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Cache / Portal / Provider — 프리픽스 레이아웃 수명 단축, Portal Qwen TTL 조정, 클라이언트 버전 태그 통일, Alibaba Cloud→Qwen Cloud 이름 변경, 커스텀 프로바이더 api_mode 명시적 유지",
    category: "Cache / Portal / Provider",
    summary:
      "시스템 프롬프트가 세션 내에서 바이트 정적이 되도록 장수명(long-lived) 프리픽스 레이아웃이 제거됩니다 (#b06e999). Alibaba 업스트림이 5분 캐시만 허용하므로 Portal Qwen의 TTL=1h가 삭제됩니다 (#2a18b62). 모든 Portal 요청에 hermes-client-v<version> 태그가 통일 적용됩니다 (#486b692). 프로바이더 선택 UI에서 Alibaba Cloud가 Qwen Cloud로 이름 변경되고 정렬 순서가 조정됩니다 (#1e01b25). 커스텀 프로바이더에서 사용자에게 api_mode를 명시적으로 선택하도록 프롬프트하고 세션 간 유지됩니다 (#6f2d1c8) (main branch 기준).",
    commits: [
      {
        sha: "b06e999",
        message: "fix(cache): kill long-lived prefix layout — system prompt is now byte-static within a session (#24778)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b06e9993021a8eebd891fc60d52372446315b2f0",
      },
      {
        sha: "2a18b62",
        message: "fix(cache): drop ttl=1h on Portal Qwen — Alibaba upstream is 5m-only (#24702)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a18b6283b528817e87354b1c524501b570a7d62",
      },
      {
        sha: "486b692",
        message: "feat(nous): unified client=hermes-client-v<version> tag on every Portal request (#24779)",
        href: "https://github.com/NousResearch/hermes-agent/commit/486b692ddd801f8f665d3fff023149fb1cb6509e",
      },
      {
        sha: "1e01b25",
        message: "feat(providers): rename Alibaba Cloud to Qwen Cloud, reorder picker (#24835)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1e01b25e76a9258095930c7428c169835fd03059",
      },
      {
        sha: "6f2d1c8",
        message: "feat(custom): prompt and persist explicit api_mode for custom providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f2d1c88b76fd85bda3460128fc21819a211ad1e",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "보안 / Gateway — 승인 DELETE 줄바꿈 우회 수정, 불필요한 shell=True 감소, hook_ctx 채팅 추적, WhatsApp 타임아웃 설정화, WeCom 재연결, systemd 재시작 지연 단축, 어댑터 lazy_deps 보장, queued follow-up transcript 기록 보존",
    category: "보안 / Gateway",
    summary:
      "승인(approval) DELETE 패턴에서 DOTALL 플래그로 인한 줄바꿈 우회가 수정됩니다 (#80374d4). subprocess 호출에서 불필요한 shell=True 사용이 감소합니다 (#d6c9711). Gateway hook_ctx에 chat_id가 추가되어 메시지 출처 추적이 개선됩니다 (#dd1d4e9). WhatsApp npm 설치 타임아웃이 환경변수로 설정 가능해집니다 (#1a4e8f7). WeCom에서 WebSocket 재연결 후 연결 상태가 갱신됩니다 (#e77fd75). systemd 재시작 지연이 감소합니다 (#0bc5f7b). Slack, Matrix, DingTalk, Feishu 어댑터에 lazy_deps.ensure()가 추가되어 런타임 의존성이 사전 확인됩니다 (#5d90386). queued follow-up 처리 시 transcript 기록이 보존됩니다 (#9a815b6). 해당 회귀 테스트가 일반화됩니다 (#cc64a04) (main branch 기준).",
    commits: [
      {
        sha: "80374d4",
        message: "fix: approval DELETE pattern DOTALL flag allows newline bypass",
        href: "https://github.com/NousResearch/hermes-agent/commit/80374d4dd97368d00f55c551bdbfc0fab0f011a8",
      },
      {
        sha: "d6c9711",
        message: "fix(security): reduce unnecessary shell=True in subprocess calls",
        href: "https://github.com/NousResearch/hermes-agent/commit/d6c9711ba865a8675f14367ac6211d1ae14222bc",
      },
      {
        sha: "dd1d4e9",
        message: "fix(gateway): add chat_id to hook_ctx for message source tracking",
        href: "https://github.com/NousResearch/hermes-agent/commit/dd1d4e9c5d8284ae5bc1250260493bada1e8d685",
      },
      {
        sha: "1a4e8f7",
        message: "fix(gateway): make WhatsApp npm install timeout configurable",
        href: "https://github.com/NousResearch/hermes-agent/commit/1a4e8f70415e073db257c4a31908c21e9921dd5b",
      },
      {
        sha: "e77fd75",
        message: "fix(wecom): update connection status after WebSocket reconnection",
        href: "https://github.com/NousResearch/hermes-agent/commit/e77fd75c442cc3ec6cfbc91964a6dfe2dc3f777d",
      },
      {
        sha: "0bc5f7b",
        message: "fix(gateway): reduce systemd restart delay",
        href: "https://github.com/NousResearch/hermes-agent/commit/0bc5f7b235117ccf791aab83b92164c0041d34af",
      },
      {
        sha: "5d90386",
        message: "fix(gateway): add lazy_deps.ensure() to slack, matrix, dingtalk, feishu adapters (#25014)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5d90386baab5cc6355d7e73e30571466c9223a6d",
      },
      {
        sha: "9a815b6",
        message: "fix(gateway): preserve queued follow-up transcript history",
        href: "https://github.com/NousResearch/hermes-agent/commit/9a815b6c8ca7080ac01ba04d5f195c52542c7952",
      },
      {
        sha: "cc64a04",
        message: "test(gateway): make queued follow-up regression generic",
        href: "https://github.com/NousResearch/hermes-agent/commit/cc64a04f61ff27ba7940884006a7632bf09e1ecb",
      },
    ],
  },
];
