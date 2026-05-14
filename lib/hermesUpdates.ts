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
      "image_gen 패턴을 따르는 WebSearchProvider ABC가 도입되고, web search provider 레지스트리가 추가됩니다 (#2cea98e). 플러그인 컨텍스트에 ctx.register_web_search_provider() 파사드가 추가됩니다 (#f29f02a). ABC에 supports_crawl 및 async-extract 시맨틱이 확장됩니다 (#e3f0a88). web·image_gen 레지스트리에서 is_available()로 필터 해상도가 적용됩니다 (#0a7cbd3). Web Search picker에 image_gen 스타일 plugin-injection이 미러링됩니다 (#7146301) (main branch 기준).",
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
      {
        sha: "7146301",
        message: "feat(tools): mirror image_gen plugin-injection in Web Search picker",
        href: "https://github.com/NousResearch/hermes-agent/commit/714630110b61b3537490869ed1bfa4ac0d086da2",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Tools / MCP / Plugins — 프로바이더 플러그인 마이그레이션 (brave_free·ddgs·searxng·exa·parallel·firecrawl·tavily)",
    category: "Tools / MCP / Plugins",
    summary:
      "brave_free가 첫 번째로 마이그레이션됩니다 (#d403cf0). ddgs가 두 번째 마이그레이션입니다 (#5c7d098). searxng이 세 번째 search-only 마이그레이션입니다 (#0d085d9). exa는 최초의 multi-capability 마이그레이션입니다 (#ec8449e). parallel은 최초의 async-extract 플러그인입니다 (#4816646). firecrawl은 search + async extract + dual auth를 지원합니다 (#143184e). tavily는 최초의 three-capability 플러그인(search + extract + crawl)입니다 (#31fcde8) (main branch 기준).",
    commits: [
      {
        sha: "d403cf0",
        message: "feat(web): brave_free plugin (first migration from tools/web_providers/)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d403cf018c8e6a887e5b867bf6de76cc4aadacd9",
      },
      {
        sha: "5c7d098",
        message: "feat(web): ddgs plugin (second migration)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5c7d098bee5f22adca078d7d7632737549e1fb29",
      },
      {
        sha: "0d085d9",
        message: "feat(web): searxng plugin (search-only, third migration)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d085d9454dd841cd4afac2306414205793ac7c8",
      },
      {
        sha: "ec8449e",
        message: "feat(web): exa plugin — first multi-capability migration (search + extract)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ec8449e9c688b1e9cb8d47856e32f0a32a2d391b",
      },
      {
        sha: "4816646",
        message: "feat(web): parallel plugin — first async-extract plugin",
        href: "https://github.com/NousResearch/hermes-agent/commit/48166461093982755afd60166b1b96e2c93c48ed",
      },
      {
        sha: "143184e",
        message: "feat(web): firecrawl plugin — largest migration (search + async extract + dual auth)",
        href: "https://github.com/NousResearch/hermes-agent/commit/143184e9438c658c1080f45dbfc29e33044ed0d9",
      },
      {
        sha: "31fcde8",
        message: "feat(web): tavily plugin — first three-capability plugin (search + extract + crawl)",
        href: "https://github.com/NousResearch/hermes-agent/commit/31fcde876c3730c33a53541931ad073e705cdfef",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Tools / MCP / Plugins — 레지스트리 디스패치 통합 및 레거시 인라인 경로 완전 제거",
    category: "Tools / MCP / Plugins",
    summary:
      "brave-free/ddgs/searxng이 web_search_registry를 통해 디스패치됩니다 (#6bd16a6). 세 가지 툴이 모두 레지스트리로 디스패치됩니다 (#b05253c). 레거시 in-tree provider 모듈이 삭제됩니다 (#6b219f5). 하드코딩된 웹 피커 rows와 skiplist가 삭제되고 플러그인만이 유일한 소스가 됩니다 (#24fe60f). 인라인 벤더 헬퍼가 삭제되고 플러그인에서 re-export됩니다 (#748f3e0). firecrawl이 네이티브 crawl을 지원하며 레거시 인라인 경로가 삭제됩니다 (#21e3a86). 마이그레이션 후 crawl과 website-policy gate가 보존됩니다 (#5e54330). 설정되지 않은 시스템에서 top-level error envelope가 보존됩니다 (#4ca5e72). _LEGACY_PREFERENCE가 기존 7-provider 순서에 정렬됩니다 (#657e6d8). 레거시 tools/web_providers/ 디렉토리가 삭제됩니다 (#39b4ebf). 7-plugin 마이그레이션에 대한 테스트 커버리지가 추가됩니다 (#e8cee87) (main branch 기준).",
    commits: [
      {
        sha: "6bd16a6",
        message: "refactor(web): dispatch brave-free/ddgs/searxng via web_search_registry",
        href: "https://github.com/NousResearch/hermes-agent/commit/6bd16a645b49e4814f35a17f1c6e5bf854f8ecee",
      },
      {
        sha: "b05253c",
        message: "refactor(web): dispatch all three tools through web_search_registry",
        href: "https://github.com/NousResearch/hermes-agent/commit/b05253ceed5f9d139f4a7d8705f5c97fcf644a2c",
      },
      {
        sha: "6b219f5",
        message: "refactor(web): remove legacy in-tree provider modules",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b219f5af6022ef09d0312a8ceccf3e1b11c3aa7",
      },
      {
        sha: "24fe60f",
        message: "refactor(tools): drop hardcoded web picker rows + skiplist; plugins are sole source",
        href: "https://github.com/NousResearch/hermes-agent/commit/24fe60faa2c471686803d97e33182ccec8e3ebe5",
      },
      {
        sha: "748f3e0",
        message: "refactor(web): delete inline vendor helpers, re-export from plugins",
        href: "https://github.com/NousResearch/hermes-agent/commit/748f3e016b252a7b2a927a32dce04c92d9980021",
      },
      {
        sha: "21e3a86",
        message: "feat(web): firecrawl plugin natively supports crawl; delete legacy inline path",
        href: "https://github.com/NousResearch/hermes-agent/commit/21e3a863bbbdb241b1390d0642928d276385298f",
      },
      {
        sha: "5e54330",
        message: "fix(web): preserve firecrawl crawl + website-policy gate after migration",
        href: "https://github.com/NousResearch/hermes-agent/commit/5e54330e27d670dbf922c6d16498ca0c7d6ad08e",
      },
      {
        sha: "4ca5e72",
        message: "fix(web): preserve top-level error envelope on unconfigured systems",
        href: "https://github.com/NousResearch/hermes-agent/commit/4ca5e724446a2294bbe69090884252eee326f2a7",
      },
      {
        sha: "657e6d8",
        message: "fix(web): align _LEGACY_PREFERENCE with legacy 7-provider order + doc cleanup",
        href: "https://github.com/NousResearch/hermes-agent/commit/657e6d87cc65e14680282b6e2fdc1a9bcf702493",
      },
      {
        sha: "39b4ebf",
        message: "refactor(web): delete legacy tools/web_providers/ directory + migrate ABC tests",
        href: "https://github.com/NousResearch/hermes-agent/commit/39b4ebfceaeeb56d1c197dd22028053e5c2c1190",
      },
      {
        sha: "e8cee87",
        message: "test(plugins): tests/plugins/web/ — coverage for the 7-plugin migration",
        href: "https://github.com/NousResearch/hermes-agent/commit/e8cee87e8594747710bf600c5a4c0bee33b57bed",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Gateway / ACP — QQBot 재연결, Feishu WebSocket, Windows PID, ACP 승인 브리징 간소화",
    category: "Gateway / State",
    summary:
      "QQBot 재연결 루프가 계속 유지되도록 수정됩니다 (#8199ec3). Feishu WebSocket connect 오버라이드가 동기화되어 컨텍스트 매니저가 보존됩니다 (#71191b7). Windows에서 gateway PID 탐지가 실패하는 두 가지 문제가 수정됩니다 (#fd9c150). 프로바이더 간 위임 시 api_mode가 상속되지 않도록 수정됩니다 (#f0e46c5). ACP approval bridging이 간소화됩니다 (#31b4721) (main branch 기준).",
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
      {
        sha: "31b4721",
        message: "fix: simplify ACP approval bridging",
        href: "https://github.com/NousResearch/hermes-agent/commit/31b4721791aa163c80b5f78a7fb2f1fb3530d434",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Agent 안정성 — /subgoal, Xiaomi MiMo, 컨텍스트 압축, 클립보드 PNG, 스킨 YAML, auxiliary 개선",
    category: "Agent 안정성",
    summary:
      "활성 /goal에 사용자 추가 기준을 덧붙이는 /subgoal 명령어가 도입됩니다 (#8f19078). Xiaomi MiMo가 reasoning_content echo-back 프로바이더에 추가됩니다 (#efa97af). 컨텍스트 압축 상태가 표시됩니다 (#00ad3d3). 클립보드에서 PNG 시그니처 바이트만 읽도록 수정되고 (#d110ce4), PNG 정규화 실패 시 non-PNG 이미지가 거부됩니다 (#8db544b). 자격 증명 없는 프로바이더가 즉시 스킵됩니다 (#057f5a3). auxiliary compression model의 context-length 탐지에 custom_providers가 전달됩니다 (#7becb19). background-review에서 memory provider teardown 출력 누수가 방지됩니다 (#55ba02b). 스킨 YAML 파싱이 잘못된 section type에 대해 강화됩니다 (#5f234d4). 스킨 엔진 테스트 API 호출이 수정됩니다 (#35ce94a) (main branch 기준).",
    commits: [
      {
        sha: "8f19078",
        message: "feat(goals): /subgoal — user-added criteria appended to active /goal (#25449)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8f19078c6ad72300676376f5824fcf50cd9b693b",
      },
      {
        sha: "efa97af",
        message: "fix(agent): add Xiaomi MiMo to reasoning_content echo-back providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/efa97af7e25f0cbef92ed15bbcb47e4788c83058",
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
        sha: "8db544b",
        message: "fix(clipboard): reject non-png clipboard images when png normalization fails",
        href: "https://github.com/NousResearch/hermes-agent/commit/8db544b4d09cbbc3244def8dd78001507e4ddb04",
      },
      {
        sha: "057f5a3",
        message: "fix(auxiliary): skip providers without credentials immediately",
        href: "https://github.com/NousResearch/hermes-agent/commit/057f5a31d1b2358c8a1781c102a1e4401770e239",
      },
      {
        sha: "7becb19",
        message: "fix(auxiliary): forward custom_providers to compression model context-length detection",
        href: "https://github.com/NousResearch/hermes-agent/commit/7becb19ea00c13bdff6f78b71aa3ddfb0bdb5378",
      },
      {
        sha: "55ba02b",
        message: "fix(background-review): silence memory provider teardown output leak",
        href: "https://github.com/NousResearch/hermes-agent/commit/55ba02befbb976d2383726f1a44591c8325613f9",
      },
      {
        sha: "5f234d4",
        message: "fix(cli): harden skin yaml parsing for invalid section types",
        href: "https://github.com/NousResearch/hermes-agent/commit/5f234d4057ffb3ae7bc5e143960d2d2fd44f9c76",
      },
      {
        sha: "35ce94a",
        message: "fix(tests): correct skin engine test API call",
        href: "https://github.com/NousResearch/hermes-agent/commit/35ce94a2f8ae37bd74b10bcc86c75a7ab2e205d1",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Config / Docs — NovitaAI LLM 프로바이더, WhatsApp 인용 메타데이터, honcho 프로파일, LSP 문서",
    category: "Config / Docs",
    summary:
      "NovitaAI가 새로운 LLM 프로바이더로 추가됩니다 (#c76e879). NovitaAI 설명이 '90+ models, pay-per-use'로 업데이트됩니다 (#1551ce4). NovitaAI 프로바이더 포지셔닝이 업데이트됩니다 (#ddb8d8f). NovitaAI 캐시 가격 및 테스트 커버리지가 추가됩니다 (#0f0e20e). WhatsApp에서 인용된 답글 메타데이터가 노출됩니다 (#bd33a48). Discord에서 message_snapshots를 통해 전달된 메시지가 처리됩니다 (#b59ed9c). honcho의 HOME-기반 기본 프로파일 폴백이 존중됩니다 (#d18618f). honcho profile-mode 테스트가 추가됩니다 (#c872f07). tirith 링크가 올바른 repo를 가리키도록 수정됩니다 (#796c8a2). LSP 문서에서 'git worktree'가 'git repository'로 수정됩니다 (#8de26e2) (main branch 기준).",
    commits: [
      {
        sha: "c76e879",
        message: "feat: add NovitaAI as LLM provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/c76e8795744a00208c683b2c6319902416bce1a8",
      },
      {
        sha: "1551ce4",
        message: 'docs: update NovitaAI description to "90+ models, pay-per-use"',
        href: "https://github.com/NousResearch/hermes-agent/commit/1551ce46a4b65e8388ea6fc3347e802a8705c390",
      },
      {
        sha: "ddb8d8f",
        message: "docs: update NovitaAI provider positioning (#25532)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ddb8d8fa842283ef651a6e4514f8f561f736c72e",
      },
      {
        sha: "0f0e20e",
        message: "test(novita): cache pricing, add provider test coverage, AUTHOR_MAP entry",
        href: "https://github.com/NousResearch/hermes-agent/commit/0f0e20ef81709a6dd590b25af380b116db67628c",
      },
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
        sha: "d18618f",
        message: "fix(honcho): respect HOME-anchored default profile fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/d18618f48f18c0af5c4bba889a087557ab53a6df",
      },
      {
        sha: "c872f07",
        message: "fix(tests): exercise profile-mode HERMES_HOME for honcho fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/c872f07c47e2a751211d6ab97e816cefcd246ef0",
      },
      {
        sha: "796c8a2",
        message: "docs(user-guide): point tirith link to correct repo",
        href: "https://github.com/NousResearch/hermes-agent/commit/796c8a2d63831a5aed6b727bae6c189448cbada8",
      },
      {
        sha: "8de26e2",
        message: 'docs(lsp): replace "git worktree" with "git repository" in LSP docs',
        href: "https://github.com/NousResearch/hermes-agent/commit/8de26e280ed8126194dbbccaf9969ae5979c0aed",
      },
    ],
  },
];
