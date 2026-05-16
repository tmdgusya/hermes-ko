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

export const hermesUpdatesLastChecked = "2026-05-16"; // last new commit: 2026-05-16 (updated with d725407, 6ba35ec, 395e9dd, c445f48, 74d0b39, 627f8a5)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-16",
    title: "Security / Agent — 의존성 CVE 패치, 도구 오류 살균, 위험 명령 감지 강화, 위임 api_mode 수정",
    category: "Security / Agent",
    summary:
      "aiohttp, anthropic, cryptography 등 의존성의 CVE 패치 버전으로 업그레이드됩니다. 도구 오류 문자열이 모델 컨텍스트에 주입되기 전에 살균 처리됩니다. Claude Code에서 영감받아 위험 명령 감지가 강화됩니다. 위임 시 api_mode가 올바르게 적용되고 anthropic_messages URL이 자동 감지됩니다. Anthropic 스트림 파서에서 잘못된 형식의 응답 시 재시도하도록 수정됩니다 (main branch 기준).",
    commits: [
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
    title: "Tools / MCP — 병렬 도구 호출 지원, X 검색 도구, 내장 도구 대체 플래그",
    category: "Tools / MCP / Plugins",
    summary:
      "MCP 서버에 supports_parallel_tool_calls 속성이 추가되어 병렬 도구 호출 지원 여부를 선언할 수 있습니다. X(Twitter) 검색 도구가 OAuth 또는 API 키 인증으로 게이트되어 추가됩니다. 플러그인에 tool override 플래그가 추가되어 내장 도구를 커스텀 구현으로 교체할 수 있습니다 (main branch 기준).",
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
    ],
  },
  {
    date: "2026-05-16",
    title: "Skills — pinggy-tunnel 옵셔널 스킬, darwinian-evolver 옵셔널 스킬 추가",
    category: "Skills",
    summary:
      "pinggy-tunnel 옵셔널 스킬이 추가되어 SSH 터널링을 쉽게 설정할 수 있습니다. darwinian-evolver 옵셔널 스킬이 새로 추가되고 AUTHOR_MAP 및 문서가 재생성됩니다 (main branch 기준).",
    commits: [
      {
        sha: "559c6ad",
        message: "feat(skills): add optional pinggy-tunnel skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/559c6ad94aee03ddbd28b9480b9dabac292213a2",
      },
      {
        sha: "c9b32a6",
        message: "feat(skill): darwinian-evolver optional skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/c9b32a654cd1f3480920431bd4e32a035a61a29d",
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
    title: "Dashboard / Docs — Kanban Ready 할당 명확화, 스킬별 사이드바, Programmatic Integration 문서, pip 설치 제거",
    category: "Dashboard / Docs",
    summary:
      "Kanban Ready 컬럼과 에이전트 할당의 구분이 명확해지고 Ukrainian UI에서 도움말이 올바르게 정렬됩니다. Docs에 스킬별 문서 페이지가 왼쪽 사이드바에 표시됩니다. Programmatic Integration 개요 문서가 새로 추가됩니다. pip 설치 방법이 공식 문서에서 제거됩니다 (main branch 기준).",
    commits: [
      {
        sha: "63503eb",
        message: "fix(dashboard): clarify Kanban Ready vs assignment",
        href: "https://github.com/NousResearch/hermes-agent/commit/63503ebb14069e8ba0bea91955e7ce4e01670a4e",
      },
      {
        sha: "ca413c6",
        message: "fix(dashboard): align Ukrainian Kanban Ready column help",
        href: "https://github.com/NousResearch/hermes-agent/commit/ca413c6164e7957d33841353feb9cdbf838dead7",
      },
      {
        sha: "dc4cde2",
        message: "feat(docs): show per-skill pages in the left sidebar",
        href: "https://github.com/NousResearch/hermes-agent/commit/dc4cde278ba0523c01c2c29988e59a567a19ef22",
      },
      {
        sha: "afb97db",
        message: "docs: add Programmatic Integration overview (closes #360)",
        href: "https://github.com/NousResearch/hermes-agent/commit/afb97dbc539d1b6cc812d5af2bb8e9b3ebfc4719",
      },
      {
        sha: "86a368d",
        message: "remove pip installation method from docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/86a368d8322b3977bf89b9043818eebc6adf470b",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "DeepSeek / ACP — thinking 모드 매핑, xAI OAuth 자격 증명 루프 수정, grok-4.3 컨텍스트 1M 확장",
    category: "DeepSeek / ACP",
    summary:
      "DeepSeek API에 thinking.type과 reasoning_effort 매핑이 추가되어 thinking 모드가 지원됩니다. 기존 legacy fallback 대신 DeepSeekProfile을 통해 올바르게 연결됩니다. xAI OAuth에서 entitlement-403 오류 시 자격 증명 갱신이 무한 루프에 빠지던 문제가 해결되고, grok-4.3 컨텍스트가 1M 토큰으로 확장됩니다. auxiliary 프로세스 풀에서 xAI OAuth compression이 올바르게 해결되고, entitlement-403 힌트가 기존 구독자를 탓하지 않도록 재작성됩니다 (main branch 기준).",
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
        sha: "ce0e189",
        message: "fix(xai-oauth): break entitlement-403 credential-refresh loop, bump grok-4.3 context to 1M",
        href: "https://github.com/NousResearch/hermes-agent/commit/ce0e189d3e7185d6c8c6af924a1df23e17c6f85c",
      },
      {
        sha: "97a32af",
        message: "fix(auxiliary): resolve xai oauth compression from pool",
        href: "https://github.com/NousResearch/hermes-agent/commit/97a32afdc490e3d40b291dac0e67f291502052a0",
      },
      {
        sha: "9818b9a",
        message: "fix(xai-oauth): rewrite entitlement-403 hint to not accuse subscribers",
        href: "https://github.com/NousResearch/hermes-agent/commit/9818b9a1acb915971d835d1faa85949e9f7a87a5",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "TUI — 마크다운 테이블 렌더링, 서브에이전트 상태, 승인 프롬프트 UX, 커서 동기화, 미지원 플랫폼 대응",
    category: "CLI / TUI",
    summary:
      "TUI에서 마크다운 테이블이 터미널 너비에 맞게 렌더링되고 좁은 환경에서는 세로 폴백으로 전환됩니다. /agents 페이지에서 서브에이전트의 타임아웃·에러 상태가 올바르게 처리됩니다. approval/clarify/confirm 프롬프트 중에도 트랜스크립트 스크롤과 Esc 키가 동작합니다. Ink displayCursor가 fast-echo 기록과 동기화되어 커서 이탈이 방지됩니다. 미지원 플랫폼에서 tirith-unavailable 배너가 숨겨지고 install/spawn 시도가 건너뛰어집니다 (main branch 기준).",
    commits: [
      {
        sha: "55c9f32",
        message: "fix(tui): width-aware markdown table rendering with vertical fallback (#26195)",
        href: "https://github.com/NousResearch/hermes-agent/commit/55c9f32060bbe7eb48bee2b702c157408b468eb2",
      },
      {
        sha: "006937f",
        message: "fix(tui): handle timeout/error subagent statuses in /agents (#26687)",
        href: "https://github.com/NousResearch/hermes-agent/commit/006937f7d062f7f1dd830aa16476ce962bd30445",
      },
      {
        sha: "44b63fc",
        message: "fix(tui): allow transcript scroll + Esc during approval/clarify/confirm prompts (#26414)",
        href: "https://github.com/NousResearch/hermes-agent/commit/44b63fc6de3fe2b53eac3109b4a20db41c663195",
      },
      {
        sha: "70b6635",
        message: "fix(tui): keep Ink displayCursor in sync with fast-echo writes so cursor stops drifting (#26717)",
        href: "https://github.com/NousResearch/hermes-agent/commit/70b663504fee1d58a6763e862df478cf101fe51e",
      },
      {
        sha: "c5dc970",
        message: "fix(windows): silence tirith-unavailable banner + skip install/spawn attempts on unsupported platforms (#26718)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5dc9700ebc8b890e349c0cc3e978d133395909b",
      },
    ],
  },
];
