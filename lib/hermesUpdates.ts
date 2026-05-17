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

export const hermesUpdatesLastChecked = "2026-05-17"; // last new commit: 2026-05-17 (discord allow_any_attachment, plugins discovery refactor, hermes send CLI, compression media strip)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-17",
    title: "Plugins / CLI / Context — 플러그인 발견 로직 정리, `hermes send` 명령, 압축 후 미디어 스트리핑",
    category: "Plugins / CLI / Context",
    summary:
      "플러그인 목록에서 카테고리 네임스페이스가 올바르게 노출되고, 사용되지 않는 bundled-source 가드와 unreachable Langfuse 경로가 제거되며 발견 로직이 정리됩니다. `hermes send` 명령이 추가되어 스크립트 출력을 임의의 메시징 플랫폼으로 파이프할 수 있습니다. Kilo-Org/kilocode에서 포팅된 압축 후 히스토리 미디어 스트리핑이 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "9b82586",
        message: "fix(plugins): surface category-namespaced plugins in hermes plugins list",
        href: "https://github.com/NousResearch/hermes-agent/commit/9b82586c6b6dd628af273b3c6875e0142f798089",
      },
      {
        sha: "8ab8bc2",
        message: "fix(plugins): remove unreachable hermes tools → Langfuse path",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ab8bc2f035ac4ed8b3b43ed2940ba3dc4589cc9",
      },
      {
        sha: "21be702",
        message: "refactor(plugins): drop dead bundled-source guard in _discover_all_plugins",
        href: "https://github.com/NousResearch/hermes-agent/commit/21be7025c584ea9b1d829e088b6049e259c6859a",
      },
      {
        sha: "5cbe0b1",
        message: "test(plugins): cover _discover_all_plugins recursion + cross-link loader",
        href: "https://github.com/NousResearch/hermes-agent/commit/5cbe0b1c4ffabf6aeca31827ba9a76ec35e4d4fb",
      },
      {
        sha: "29b1bd0",
        message: "feat(cli): add `hermes send` to pipe script output to any messaging platform (#27188)",
        href: "https://github.com/NousResearch/hermes-agent/commit/29b1bd0e20e5848e2be8de431a225174ab6a7fed",
      },
      {
        sha: "3b39096",
        message: "Port from Kilo-Org/kilocode#9434: strip historical media after compression (#27189)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b39096904ae63a9e784b2403ad6ad27160bb2ef",
      },
    ],
  },
  {
    date: "2026-05-17",
    title: "Agent 안정성 / Discord / xAI — fallback 인덱스 리셋, Discord 임의 첨부 허용, Codex fallback 스트림 오류 노출",
    category: "Agent 안정성 / Discord / xAI",
    summary:
      "에이전트 턴이 시작될 때 fallback이 활성화되지 않은 경우에도 _fallback_index가 리셋되어 이후 턴에서 잘못된 인덱스 참조가 방지됩니다. Discord에 allow_any_attachment 설정이 추가되어 임의의 파일 유형을 첨부로 받을 수 있습니다. xAI Codex fallback 스트림에서 provider 'error' SSE 프레임이 노출되어 오류 원인을 파악하기 쉬워집니다 (main branch 기준).",
    commits: [
      {
        sha: "407a11b",
        message: "feat(discord): allow_any_attachment config to accept arbitrary file types",
        href: "https://github.com/NousResearch/hermes-agent/commit/407a11b4190d7a6ebbc6429d0481545abd86aadc",
      },
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
        sha: "374dc81",
        message: "fix(copilot-acp): tighten deprecation detection + sharpen GitHub Models 413 hint",
        href: "https://github.com/NousResearch/hermes-agent/commit/374dc81c2359a6f61e8d1efc49de29d61d7b9a88",
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
    title: "Gateway / Agent / ACP — TEXT follow-ups 병합, DeepSeek thinking, 위임 API 모드, heartbeat 안정화, ACP 세션 리플레이, CLI 개선, npm 설치 진행 표시, Camofox 지연 설치, Signal/Moonshot 수정, 주기적 게이트웨이 메모리 로깅",
    category: "Gateway / Agent / ACP",
    summary:
      "활성 세션 중 rapid TEXT follow-up 메시지가 올바르게 병합됩니다. DeepSeek API에 thinking.type 및 reasoning_effort 매핑이 추가되고, DeepSeekProfile을 통해 thinking 모드가 올바르게 적용됩니다. 위임 시 api_mode가 올바르게 적용되고 anthropic_messages URL이 자동 감지됩니다. Anthropic 스트림 파서에서 잘못된 형식의 응답 시 재시도하도록 수정됩니다. delegate heartbeat 스레드가 시작되지 않은 상태에서 join을 가드하고, orphan 스레드가 방지됩니다. ACP session/load 시 세션 히스토리 리플레이와 assistant reasoning의 agent_thought_chunk 재생이 추가됩니다. /exit --delete 플래그로 종료 시 세션 삭제, /status에 세션 리캡 추가, 백그라운드 작업 시 ▶ N 표시기가 추가됩니다. Codex 429 오류 시 풀 회전, Telegram DM 타이핑 인디케이터 복원, TUI 커서 동기화 수정이 포함됩니다. npm install 진행 상황 스트리밍, Camofox 지연 설치, Signal groupV2 봉투 처리, Moonshot 스키마 수정, 주기적 gateway 메모리 로깅이 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "585d6b6",
        message: "fix(gateway): merge rapid TEXT follow-ups during active sessions (#4469) (#26822)",
        href: "https://github.com/NousResearch/hermes-agent/commit/585d6b64305ab94773a129880450d2ee3d362bbc",
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
        sha: "f3a4af9",
        message: "fix(acp): replay assistant reasoning as agent_thought_chunk on session/load (#12285) (#26943)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f3a4af9cf2a626cb3e055766cb1cff60168d295d",
      },
      {
        sha: "3034eee",
        message: "fix(acp): replay session history before responding to session/load (#12285 follow-up) (#26957)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3034eee38ec516109566c00975be4d0276747c34",
      },
      {
        sha: "fc03c95",
        message: "feat(cli): add /exit --delete flag to remove session on quit (#27101)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc03c95da13105807cb3b3f42a311e4916b456ce",
      },
      {
        sha: "e21cb8d",
        message: "feat(status): append session recap to /status output (#27176)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e21cb8d1457f603cda1dc8413efc400721d256e7",
      },
      {
        sha: "226cee4",
        message: "feat(cli): show ▶ N indicator in status bar when /background tasks are running (#27175)",
        href: "https://github.com/NousResearch/hermes-agent/commit/226cee43d97997525e4e26a20075aec98e641418",
      },
      {
        sha: "e51d74a",
        message: "fix(codex): rotate pool on usage limit 429",
        href: "https://github.com/NousResearch/hermes-agent/commit/e51d74ab917675a67e6a964d6c2c2ea2b150ac2c",
      },
      {
        sha: "6f817e1",
        message: "fix(telegram): restore DM topic typing indicator",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f817e1447499cf51d8c966b3f3a600ba3412f85",
      },
      {
        sha: "70b6635",
        message: "fix(tui): keep Ink displayCursor in sync with fast-echo writes so cursor stops drifting (#26717)",
        href: "https://github.com/NousResearch/hermes-agent/commit/70b663504fee1d58a6763e862df478cf101fe51e",
      },
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
