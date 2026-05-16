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

export const hermesUpdatesLastChecked = "2026-05-16"; // last new commit: 2026-05-16 (v0.14.0, DeepSeek thinking, xAI OAuth fixes, docs sidebar, Kanban, Windows)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-16",
    title: "Security / Auth — OAuth PKCE state/code_verifier 분리, 의존성 CVE 패치, 도구 오류 살균, 위험 명령 감지 강화",
    category: "Security / Auth",
    summary:
      "OAuth PKCE에서 state와 code_verifier가 분리되어 보안이 강화됩니다. aiohttp, anthropic, cryptography 등 의존성의 CVE 패치 버전으로 업그레이드됩니다. 도구 오류 문자열이 모델 컨텍스트에 주입되기 전에 살균 처리됩니다. Claude Code에서 영감받아 위험 명령 감지가 강화됩니다. doctor 명령에서 OAuth가 정상일 때 오래된 direct-key 경고가 숨겨집니다 (main branch 기준).",
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
    ],
  },
  {
    date: "2026-05-16",
    title: "Gateway / Agent — TEXT follow-ups 병합, DeepSeek thinking 모드·reasoning_effort 매핑, 위임 API 모드 수정",
    category: "Gateway / Agent",
    summary:
      "활성 세션 중 rapid TEXT follow-up 메시지가 올바르게 병합됩니다. DeepSeek API에 thinking.type 및 reasoning_effort 매핑이 추가되고, DeepSeekProfile을 통해 thinking 모드가 올바르게 적용됩니다. 위임 시 api_mode가 올바르게 적용되고 anthropic_messages URL이 자동 감지됩니다. Anthropic 스트림 파서에서 잘못된 형식의 응답 시 재시도하도록 수정됩니다 (main branch 기준).",
    commits: [
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
    ],
  },
  {
    date: "2026-05-16",
    title: "xAI OAuth — entitlement 403 자격 증명 갱신 루프 수정, SSE 오류 복구, Grok-4.3 컨텍스트 1M 확장",
    category: "xAI OAuth / Grok",
    summary:
      "xAI OAuth에서 entitlement 403 오류 시 자격 증명 갱신 루프가 발생하던 문제가 수정됩니다. entitlement 403 힌트가 구독자를 비난하지 않도록 재작성되고 X Premium+ 제약 안내가 추가됩니다. prelude SSE 오류에서 복구되고 reasoning replay가 게이트됩니다. 압축 풀에서 xai OAuth가 올바르게 해결됩니다. Grok-4.3 컨텍스트가 1M으로 확장됩니다 (main branch 기준).",
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
    ],
  },
  {
    date: "2026-05-16",
    title: "Tools / MCP / Plugins — 병렬 도구 호출 지원, X 검색 도구, 내장 도구 대체 플래그, Notion 스킬 오버홀",
    category: "Tools / MCP / Plugins",
    summary:
      "MCP 서버에 supports_parallel_tool_calls 속성이 추가되어 병렬 도구 호출 지원 여부를 선언할 수 있습니다. X(Twitter) 검색 도구가 OAuth 또는 API 키 인증으로 게이트되어 추가됩니다. 플러그인에 tool override 플래그가 추가되어 내장 도구를 커스텀 구현으로 교체할 수 있습니다. Notion 스킬이 2026년 5월 Notion Developer Platform에 맞게 전면 오버홀됩니다 (main branch 기준).",
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
    ],
  },
  {
    date: "2026-05-16",
    title: "Docs / Dashboard / ACP — 스킬별 사이드바 페이지, pip 설치 문서 제거, Kanban Ready 명확화, gh-copilot 미사용 감지",
    category: "Docs / Dashboard / ACP",
    summary:
      "문서 사이드바에 스킬별 페이지가 표시됩니다. Programmatic integration 개요 문서가 새로 추가됩니다. pip 설치 방법 문서가 제거됩니다. Dashboard Kanban에서 Ready 컬럼의 의미가 명확해집니다. gh-copilot 미사용(deprecation) 감지가 강화되고 GitHub Models 413 오류 힌트가 개선됩니다 (main branch 기준).",
    commits: [
      {
        sha: "dc4cde2",
        message: "feat(docs): show per-skill pages in the left sidebar (#26646)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dc4cde278ba0523c01c2c29988e59a567a19ef22",
      },
      {
        sha: "afb97db",
        message: "docs: add Programmatic integration overview (closes #360)",
        href: "https://github.com/NousResearch/hermes-agent/commit/afb97dbc539d1b6cc812d5af2bb8e9b3ebfc4719",
      },
      {
        sha: "86a368d",
        message: "remove pip installation method from docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/86a368d8322b3977bf89b9043818eebc6adf470b",
      },
      {
        sha: "63503eb",
        message: "fix(dashboard): clarify Kanban Ready vs assignment",
        href: "https://github.com/NousResearch/hermes-agent/commit/63503ebb14069e8ba0bea91955e7ce4e01670a4e",
      },
      {
        sha: "4ded3ed",
        message: "fix: detect gh-copilot deprecation and improve GitHub Models 413 errors (#10648)",
        href: "https://github.com/NousResearch/hermes-agent/commit/4ded3ede334a7d5f8baa20f730bc8c5d3cdc399e",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "TUI / CLI / Windows — 마크다운 테이블 렌더링, DECSTBM 스크롤 영역, 승인 프롬프트 UX, Windows 경고 수정",
    category: "CLI / TUI / Windows",
    summary:
      "TUI에서 마크다운 테이블이 터미널 너비에 맞게 렌더링되고 좁은 환경에서는 세로 폴백으로 전환됩니다. DECSTBM 스크롤 영역이 하단 행을 벗어나지 않도록 수정됩니다. approval/clarify/confirm 프롬프트 중에도 트랜스크립트 스크롤과 Esc 키가 동작합니다. Windows에서 cwd-missing 및 tirith-spawn 경고가 반복 출력되지 않도록 수정됩니다 (main branch 기준).",
    commits: [
      {
        sha: "55c9f32",
        message: "fix(tui): width-aware markdown table rendering with vertical fallback (#26195)",
        href: "https://github.com/NousResearch/hermes-agent/commit/55c9f32060bbe7eb48bee2b702c157408b468eb2",
      },
      {
        sha: "566d8f0",
        message: "fix(tui): keep DECSTBM scroll region off bottom row (#26683)",
        href: "https://github.com/NousResearch/hermes-agent/commit/566d8f0d75049e5e4e4e3e3fde7f8c766ae235d6",
      },
      {
        sha: "44b63fc",
        message: "fix(tui): allow transcript scroll + Esc during approval/clarify/confirm prompts (#26414)",
        href: "https://github.com/NousResearch/hermes-agent/commit/44b63fc6de3fe2b53eac3109b4a20db41c663195",
      },
      {
        sha: "4aec25b",
        message: "fix(windows): stop spamming cwd-missing + tirith-spawn warnings on every terminal call",
        href: "https://github.com/NousResearch/hermes-agent/commit/4aec25bc4411edb4563292cadbd02c365c846286",
      },
    ],
  },
];
