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

export const hermesUpdatesLastChecked = "2026-05-17"; // last new commit: 2026-05-17 (agent fallback index reset, xai Codex fallback SSE error surfacing)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-17",
    title: "Agent 안정성 / xAI — 턴 시작 시 fallback 인덱스 리셋, Codex fallback 스트림 오류 노출",
    category: "Agent 안정성 / xAI",
    summary:
      "에이전트 턴이 시작될 때 fallback이 활성화되지 않은 경우에도 _fallback_index가 리셋되어 이후 턴에서 잘못된 인덱스 참조가 방지됩니다. xAI Codex fallback 스트림에서 provider 'error' SSE 프레임이 노출되어 오류 원인을 파악하기 쉬워집니다 (main branch 기준).",
    commits: [
      {
        sha: "33528b4",
        message: "fix(agent): reset _fallback_index at turn start even when no fallback activated",
        href: "https://github.com/NousResearch/hermes-agent/commit/33528b428d196443f788f43fec3139bd6e2c4997",
      },
      {
        sha: "2b19390",
        message: "fix(xai): surface provider 'error' SSE frame in Codex fallback stream (#27184)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2b193907d668af0c45f108d885db53a7ce8b8919",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "v0.14.0 릴리즈 — 새 옵셔널 스킬 3종 (osint-investigation, pinggy-tunnel, darwinian-evolver)",
    category: "Release / Skills",
    summary:
      "v0.14.0이 릴리즈되었습니다. 옵셔널 스킬 3종이 새로 추가됩니다: OSINT 조사 스킬(osint-investigation), Pinggy 터널 스킬(pinggy-tunnel), 진화 알고리즘 스킬(darwinian-evolver) (main branch 기준).",
    commits: [
      {
        sha: "a91a57f",
        message: "chore: release v0.14.0 (2026.5.16) (#26862)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a91a57fa5a13d516c38b07a141a9ce8a3daabeb0",
      },
      {
        sha: "5f91b1a",
        message: "feat(skills): add osint-investigation optional skill (closes #355) (#26729)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5f91b1a48b06c8260dc539614abda27cf4e831cb",
      },
      {
        sha: "c9b32a6",
        message: "feat(skill): darwinian-evolver optional skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/c9b32a654cd1f3480920431bd4e32a035a61a29d",
      },
      {
        sha: "559c6ad",
        message: "feat(skills): add optional pinggy-tunnel skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/559c6ad94aee03ddbd28b9480b9dabac292213a2",
      },
      {
        sha: "53637fb",
        message: "chore(skills/darwinian-evolver): AUTHOR_MAP + docs regen",
        href: "https://github.com/NousResearch/hermes-agent/commit/53637fb17d92b03ca3708f6df104136028459439",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "Security / Auth — OAuth PKCE state/code_verifier 분리, 의존성 CVE 패치, 도구 오류 살균, 위험 명령 감지 강화, ACP deprecation 감지",
    category: "Security / Auth",
    summary:
      "OAuth PKCE에서 state와 code_verifier가 분리되어 보안이 강화됩니다. aiohttp, anthropic, cryptography 등 의존성의 CVE 패치 버전으로 업그레이드됩니다. 도구 오류 문자열이 모델 컨텍스트에 주입되기 전에 살균 처리됩니다. Claude Code에서 영감받아 위험 명령 감지가 강화됩니다. doctor 명령에서 OAuth가 정상일 때 오래된 direct-key 경고가 숨겨집니다. GitHub Copilot ACP deprecation 감지 및 GitHub Models 413 오류 개선이 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "fcd9011",
        message: "fix(security): separate OAuth PKCE state from code_verifier",
        href: "https://github.com/NousResearch/hermes-agent/commit/fcd9011f8d02d30d5f80db1749cbeb8f2d1b3fc3",
      },
      {
        sha: "72f94f4",
        message: "test(security): regression guard for OAuth PKCE state/verifier separation",
        href: "https://github.com/NousResearch/hermes-agent/commit/72f94f4a7c281f2ac2a944a20eb615f517f64fe8",
      },
      {
        sha: "d725407",
        message: "security(deps): bump aiohttp, anthropic, cryptography to CVE-fixed versions (#26830)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d725407c5645c84607df552da5175e9a628b9bf9",
      },
      {
        sha: "627f8a5",
        message: "security: sanitize tool error strings before injecting into model context (#26823)",
        href: "https://github.com/NousResearch/hermes-agent/commit/627f8a5f1dab2847a5fb97fa79daa6d0bc96d8bd",
      },
      {
        sha: "6ba35ec",
        message: "Inspired by Claude Code: tighten dangerous-command detection (#26829)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6ba35ec336cfcf5e36f398750e630783f8715bac",
      },
      {
        sha: "d0a183c",
        message: "fix(doctor): suppress stale direct-key issues when oauth is healthy",
        href: "https://github.com/NousResearch/hermes-agent/commit/d0a183cadd877fe21a92fdc9114509729444594e",
      },
      {
        sha: "4ded3ed",
        message: "fix: detect gh-copilot deprecation and improve GitHub Models 413 errors (#10648)",
        href: "https://github.com/NousResearch/hermes-agent/commit/4ded3ede334a7d5f8baa20f730bc8c5d3cdc399e",
      },
      {
        sha: "b85b938",
        message: "test: add tests for copilot ACP deprecation detection and Azure URL mapping",
        href: "https://github.com/NousResearch/hermes-agent/commit/b85b938b1fe74ecf16dc22e4448ecbab49660727",
      },
      {
        sha: "345821b",
        message: "style: move secrets import alongside other function-level imports",
        href: "https://github.com/NousResearch/hermes-agent/commit/345821b4a1d612bc56cabb548b91b35a76bc3692",
      },
      {
        sha: "7bb97b9",
        message: "chore: add worlldz to AUTHOR_MAP for #26704 salvage",
        href: "https://github.com/NousResearch/hermes-agent/commit/7bb97b952f7edd51ce29ba9f3db4e255d6792c22",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "Gateway / Agent / Updater — TEXT follow-ups 병합, DeepSeek thinking, 위임 API 모드, heartbeat 안정화, npm 설치 진행 표시, Camofox 지연 설치, Signal 그룹V2 봉투 처리, Moonshot 스키마 수정, 주기적 게이트웨이 메모리 로깅",
    category: "Gateway / Agent / Updater",
    summary:
      "활성 세션 중 rapid TEXT follow-up 메시지가 올바르게 병합됩니다. DeepSeek API에 thinking.type 및 reasoning_effort 매핑이 추가되고, DeepSeekProfile을 통해 thinking 모드가 올바르게 적용됩니다. 위임 시 api_mode가 올바르게 적용되고 anthropic_messages URL이 자동 감지됩니다. Anthropic 스트림 파서에서 잘못된 형식의 응답 시 재시도하도록 수정됩니다. delegate heartbeat 스레드가 시작되지 않은 상태에서 join을 가드하고, 스레드 시작이 try 블록 안으로 이동하여 orphan 스레드가 방지됩니다. npm install 시 postinstall 진행 상황이 스트리밍되어 터미널에서 확인 가능합니다. Camofox가 지연 설치(lazy-install) 방식으로 변경되어 초기 설치 시간이 단축됩니다. Signal 메시지에서 groupV2.id를 envelope에서 읽고 legacy groupInfo로 폴백합니다. Moonshot(Kimi) 모델에서 $ref siblings 제거 및 tuple items 축소로 tool schema 호환성이 수정됩니다. Cline에서 포팅한 주기적 gateway 메모리 사용량 로깅이 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "c844d15",
        message: "fix(update): stream npm install output so postinstall progress is visible (#18840)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c844d15c3d27991a35bbc4ec56558d85122412c9",
      },
      {
        sha: "05af78c",
        message: "fix(update): make Camofox lazy-installed instead of eager (#27055)",
        href: "https://github.com/NousResearch/hermes-agent/commit/05af78c53d553f6dd20012ce18eb0c2c02d346c9",
      },
      {
        sha: "6c2406c",
        message: "fix(signal): read groupV2.id in envelope, fall back to legacy groupInfo (#27051)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6c2406c5e131dbbcabb69319c73c02594f63caea",
      },
      {
        sha: "068c24f",
        message: "feat(deepseek): add thinking.type + reasoning_effort mapping for DeepSeek API",
        href: "https://github.com/NousResearch/hermes-agent/commit/068c24f8a4203e86de32b0d84ccaf047e8cd6ef7",
      },
      {
        sha: "cd9470f",
        message: "fix(deepseek): wire thinking-mode via DeepSeekProfile, not legacy fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/cd9470f41638bd515db096cd934c463205790110",
      },
      {
        sha: "585d6b6",
        message: "fix(gateway): merge rapid TEXT follow-ups during active sessions (#4469) (#26822)",
        href: "https://github.com/NousResearch/hermes-agent/commit/585d6b64305ab94773a129880450d2ee3d362bbc",
      },
      {
        sha: "c445f48",
        message: "fix(delegation): honor api_mode + auto-detect anthropic_messages URLs (#26824)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c445f48b78ad9dfb142d2337b51f227bde66cc84",
      },
      {
        sha: "9c304a7",
        message: "fix(agent): retry malformed anthropic stream parser errors",
        href: "https://github.com/NousResearch/hermes-agent/commit/9c304a7f569ebf17efe120d5b61a3a745c6dc532",
      },
      {
        sha: "6068363",
        message: "fix(delegate): guard heartbeat join against unstarted thread",
        href: "https://github.com/NousResearch/hermes-agent/commit/6068363311b861ad0bb411bfffe5958bf8b6d142",
      },
      {
        sha: "2d7182f",
        message: "fix(delegate): move heartbeat thread start inside try block to prevent orphan",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d7182f72c398496db60de5c18f8554d7ecc6d82",
      },
      {
        sha: "93e109a",
        message: "fix(moonshot): strip $ref siblings and collapse tuple items in tool schemas (#27104)",
        href: "https://github.com/NousResearch/hermes-agent/commit/93e109a1d552b03c847b96077428048cceb012cd",
      },
      {
        sha: "dc3d0fe",
        message: "Port from cline/cline#10343: periodic gateway memory logging (#27102)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dc3d0fe1489aebd5747fa620d9b2eec751a92a55",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "xAI OAuth — entitlement 403 자격 증명 갱신 루프 수정, SSE 오류 복구, Grok-4.3 컨텍스트 1M 확장",
    category: "xAI OAuth / Grok",
    summary:
      "xAI OAuth에서 entitlement 403 오류 시 자격 증명 갱신 루프가 발생하던 문제가 수정됩니다. entitlement 403 힌트에서 오래된 X Premium+ 안내가 제거됩니다. entitlement 403 힌트가 구독자를 비난하지 않도록 재작성되고 X Premium+ 제약 안내가 추가됩니다. prelude SSE 오류에서 복구되고 reasoning replay가 게이트됩니다. 압축 풀에서 xai OAuth가 올바르게 해결됩니다. Grok-4.3 컨텍스트가 1M으로 확장됩니다 (main branch 기준).",
    commits: [
      {
        sha: "ce0e189",
        message: "fix(xai-oauth): break entitlement-403 credential-refresh loop, bump grok-4.3 context to 1M (#26664)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ce0e189d3e7185d6c8c6af924a1df23e17c6f85c",
      },
      {
        sha: "9818b9a",
        message: "fix(xai-oauth): rewrite entitlement-403 hint to not accuse subscribers (#26666)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9818b9a1acb915971d835d1faa85949e9f7a87a5",
      },
      {
        sha: "6784c80",
        message: "fix(xai-oauth): lead entitlement-403 hint with X Premium+ gotcha (#26672)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6784c80794bfd3cc40aae7f7d9f1a59876de7799",
      },
      {
        sha: "97a32af",
        message: "fix(auxiliary): resolve xai oauth compression from pool",
        href: "https://github.com/NousResearch/hermes-agent/commit/97a32afdc490e3d40b291dac0e67f291502052a0",
      },
      {
        sha: "31ba2b0",
        message: "fix(xai-oauth): recover from prelude SSE errors, gate reasoning replay, surface entitlement 403s (#26644)",
        href: "https://github.com/NousResearch/hermes-agent/commit/31ba2b0cbcac310f7aa2db3c8885e37f2e2e37fb",
      },
      {
        sha: "dffb602",
        message: "fix(xai): drop stale X Premium+ hint from entitlement 403 surfacing (#27110)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dffb602f37b3c1b9c9fd7f0417aab3af56cffa38",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "Tools / MCP / Plugins — 병렬 도구 호출 지원, X 검색 도구, 내장 도구 대체 플래그, Notion 스킬 오버홀, MCP remote URL 사전 검증",
    category: "Tools / MCP / Plugins",
    summary:
      "MCP 서버에 supports_parallel_tool_calls 속성이 추가되어 병렬 도구 호출 지원 여부를 선언할 수 있습니다. X(Twitter) 검색 도구가 OAuth 또는 API 키 인증으로 게이트되어 추가됩니다. 플러그인에 tool override 플래그가 추가되어 내장 도구를 커스텀 구현으로 교체할 수 있습니다. Notion 스킬이 2026년 5월 Notion Developer Platform에 맞게 전면 오버홀됩니다. MCP remote URL이 연결 전에 사전 검증되어 명확한 오류 메시지가 제공됩니다 (main branch 기준).",
    commits: [
      {
        sha: "395e9dd",
        message: "feat: add supports_parallel_tool_calls for MCP servers (#26825)",
        href: "https://github.com/NousResearch/hermes-agent/commit/395e9dd9e298df682bbf77848636e9f61f713171",
      },
      {
        sha: "74d0b39",
        message: "feat(x_search): gated X (Twitter) search tool with OAuth-or-API-key auth (#26763)",
        href: "https://github.com/NousResearch/hermes-agent/commit/74d0b392e7a87c869d9e13cf3eba5d809d8ff1fa",
      },
      {
        sha: "016c772",
        message: "feat(plugins): tool override flag for replacing built-in tools (closes #11049) (#26759)",
        href: "https://github.com/NousResearch/hermes-agent/commit/016c772e7fcf3acca54e7c87e7c5a22541adb5d0",
      },
      {
        sha: "42070ec",
        message: "feat(skills/notion): overhaul for Notion Developer Platform (May 2026) (#26612)",
        href: "https://github.com/NousResearch/hermes-agent/commit/42070ecefb9e9da3adec6d536d130d9dc3b82560",
      },
      {
        sha: "fb05f5d",
        message: "fix(mcp): validate remote URLs up-front with a clear error (#27105)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fb05f5d4b58d4fb20c3a4a98c2c150de3f729f3c",
      },
    ],
  },

];
