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
    title: "Tools / MCP / Plugins — 웹 검색 플러그인 아키텍처 도입 (ABC·레지스트리·파사드)",
    category: "Tools / MCP / Plugins",
    summary:
      "image_gen 패턴을 따르는 WebSearchProvider ABC가 도입되고, web search provider 레지스트리가 추가됩니다 (#2cea98e). 플러그인 컨텍스트에 ctx.register_web_search_provider() 파사드가 추가됩니다 (#f29f02a). ABC에 supports_crawl 및 async-extract 시맨틱이 확장됩니다 (#e3f0a88). web·image_gen 레지스트리에서 is_available()로 필터 해상도가 적용됩니다 (#0a7cbd3) (main branch 기준).",
    commits: [
      {
        sha: "2cea98e",
        message: "feat(web): add WebSearchProvider ABC mirroring image_gen template",
        href: "https://github.com/NousResearch/hermes-agent/commit/2cea98e143b4016b277fb3221728e3efbb4c0cc4",
      },
      {
        sha: "007a630",
        message: "feat(web): add web search provider registry mirroring image_gen pattern",
        href: "https://github.com/NousResearch/hermes-agent/commit/007a630b16988981e786fd562a03a177607dd9b6",
      },
      {
        sha: "f29f02a",
        message: "feat(plugins): add ctx.register_web_search_provider() facade",
        href: "https://github.com/NousResearch/hermes-agent/commit/f29f02a73fd021bc8a9ee14f0aaf176e46ce1a5f",
      },
      {
        sha: "e3f0a88",
        message: "feat(web): extend ABC with supports_crawl and async-extract semantics",
        href: "https://github.com/NousResearch/hermes-agent/commit/e3f0a8889195d3936762b375c659bdbcc394236c",
      },
      {
        sha: "0a7cbd3",
        message: "fix(plugins): filter resolution by is_available() in web + image_gen registries",
        href: "https://github.com/NousResearch/hermes-agent/commit/0a7cbd33424732694cc6e7b886376ee221613e03",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Tools / MCP / Plugins — 7개 웹 검색 프로바이더 플러그인 마이그레이션 및 레거시 제거",
    category: "Tools / MCP / Plugins",
    summary:
      "brave_free가 첫 번째로 마이그레이션됩니다 (#d403cf0). tavily는 search·extract·crawl 3개 기능을 갖춘 첫 프로바이더입니다 (#31fcde8). firecrawl이 가장 큰 마이그레이션으로 search·async extract·dual auth를 지원합니다 (#143184e). 레거시 tools/web_providers/ 디렉토리가 삭제되고 ABC 테스트가 마이그레이션됩니다 (#39b4ebf). 인메모리 인라인 프로바이더 모듈이 모두 제거됩니다 (#6b219f5) (main branch 기준).",
    commits: [
      {
        sha: "d403cf0",
        message: "feat(web): brave_free plugin (first migration from tools/web_providers/)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d403cf018c8e6a887e5b867bf6de76cc4aadacd9",
      },
      {
        sha: "31fcde8",
        message: "feat(web): tavily plugin — first three-capability plugin (search + extract + crawl)",
        href: "https://github.com/NousResearch/hermes-agent/commit/31fcde876c3730c33a53541931ad073e705cdfef",
      },
      {
        sha: "143184e",
        message: "feat(web): firecrawl plugin — largest migration (search + async extract + dual auth)",
        href: "https://github.com/NousResearch/hermes-agent/commit/143184e9438c658c1080f45dbfc29e33044ed0d9",
      },
      {
        sha: "39b4ebf",
        message: "refactor(web): delete legacy tools/web_providers/ directory + migrate ABC tests",
        href: "https://github.com/NousResearch/hermes-agent/commit/39b4ebfceaeeb56d1c197dd22028053e5c2c1190",
      },
      {
        sha: "6b219f5",
        message: "refactor(web): remove legacy in-tree provider modules",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b219f5af6022ef09d0312a8ceccf3e1b11c3aa7",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Gateway — QQBot 재연결, Feishu WebSocket, Windows PID 탐지, 프로바이더 간 api_mode 비상속",
    category: "Gateway / State",
    summary:
      "QQBot 재연결 루프가 계속 유지되도록 수정됩니다 (#8199ec3). Feishu WebSocket connect 오버라이드가 동기화되어 컨텍스트 매니저가 보존됩니다 (#71191b7). Windows에서 gateway PID 탐지가 실패하는 두 가지 문제가 수정됩니다 (#fd9c150). 프로바이더 간 위임 시 api_mode가 상속되지 않도록 수정됩니다 (#f0e46c5) (main branch 기준).",
    commits: [
      {
        sha: "8199ec3",
        message: "fix(gateway): keep QQBot reconnect loop alive",
        href: "https://github.com/NousResearch/hermes-agent/commit/8199ec38034a675a20278261b76cf0fe42316a7d",
      },
      {
        sha: "71191b7",
        message: "fix(gateway): make Feishu ws connect override sync to preserve context manager",
        href: "https://github.com/NousResearch/hermes-agent/commit/71191b7e8e075037a814f77d37d4609e97f12029",
      },
      {
        sha: "fd9c150",
        message: "fix: gateway PID detection fails on Windows (two issues)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fd9c1504da51f204506d0b37ec592d5bed059504",
      },
      {
        sha: "f0e46c5",
        message: "fix: do not inherit api_mode when delegating across providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0e46c5e9e8d4f780561554684e33810fc4f2f8f",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Agent 안정성 — /subgoal 명령어, 컨텍스트 압축 상태 표시, 클립보드 PNG, auxiliary 프로바이더",
    category: "Agent 안정성",
    summary:
      "활성 /goal에 사용자 추가 기준을 덧붙이는 /subgoal 명령어가 도입됩니다 (#8f19078). 컨텍스트 압축 상태가 표시됩니다 (#00ad3d3). 클립보드에서 PNG 시그니처 바이트만 읽도록 수정됩니다 (#d110ce4). auxiliary 프로바이더에 custom_providers가 컨텍스트 길이 감지로 전달됩니다 (#7becb19). 기본 protect_first_n이 3으로 유지되고 ABC가 정렬됩니다 (#4ceab16) (main branch 기준).",
    commits: [
      {
        sha: "8f19078",
        message: "feat(goals): /subgoal — user-added criteria appended to active /goal (#25449)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8f19078c6ad72300676376f5824fcf50cd9b693b",
      },
      {
        sha: "00ad3d3",
        message: "fix: show context compaction status",
        href: "https://github.com/NousResearch/hermes-agent/commit/00ad3d3c9c862352334c4348534dce3fed77dd9b",
      },
      {
        sha: "d110ce4",
        message: "fix(clipboard): only read PNG signature bytes, not entire file",
        href: "https://github.com/NousResearch/hermes-agent/commit/d110ce44933446eff800e6100fc54ccae821c4ad",
      },
      {
        sha: "7becb19",
        message: "fix(auxiliary): forward custom_providers to compression model context-length detection",
        href: "https://github.com/NousResearch/hermes-agent/commit/7becb19ea00c13bdff6f78b71aa3ddfb0bdb5378",
      },
      {
        sha: "4ceab16",
        message: "fix(compression): keep default protect_first_n at 3 + align ABC",
        href: "https://github.com/NousResearch/hermes-agent/commit/4ceab16893e3d77b2388bf5d1db8d9cc26a1307e",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Messaging / Docs / CLI — WhatsApp 인용 메타데이터, Discord 전달 메시지, 스킨 YAML, honcho 프로파일",
    category: "Messaging / Docs",
    summary:
      "WhatsApp에서 인용된 답글 메타데이터가 노출됩니다 (#bd33a48). Discord에서 message_snapshots를 통해 전달된 메시지가 처리됩니다 (#b59ed9c). 잘못된 섹션 타입에 대해 스킨 YAML 파싱이 강화됩니다 (#5f234d4). HOME-기반 기본 프로파일 폴백이 존중됩니다 (#d18618f). LSP 문서에서 'git worktree'가 'git repository'로 수정됩니다 (#8de26e2) (main branch 기준).",
    commits: [
      {
        sha: "bd33a48",
        message: "feat(whatsapp): surface quoted reply metadata",
        href: "https://github.com/NousResearch/hermes-agent/commit/bd33a48a5839f235f17ffa1cc2542852ce55067f",
      },
      {
        sha: "b59ed9c",
        message: "fix(discord): handle forwarded messages via message_snapshots",
        href: "https://github.com/NousResearch/hermes-agent/commit/b59ed9c6bc564e1158875dc795141405c4ed927d",
      },
      {
        sha: "5f234d4",
        message: "fix(cli): harden skin yaml parsing for invalid section types",
        href: "https://github.com/NousResearch/hermes-agent/commit/5f234d4057ffb3ae7bc5e143960d2d2fd44f9c76",
      },
      {
        sha: "d18618f",
        message: "fix(honcho): respect HOME-anchored default profile fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/d18618f48f18c0af5c4bba889a087557ab53a6df",
      },
      {
        sha: "8de26e2",
        message: "docs(lsp): replace \"git worktree\" with \"git repository\" in LSP docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/8de26e280ed8126194dbbccaf9969ae5979c0aed",
      },
    ],
  },
];
