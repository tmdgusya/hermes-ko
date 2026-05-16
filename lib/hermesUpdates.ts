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

export const hermesUpdatesLastChecked = "2026-05-17"; // last new commit: 2026-05-16 (PKCE separation, gateway TEXT merge, copilot-acp deprecation, osint-investigation skill, DECSTBM fix, doctor suppress)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-16",
    title: "Security — OAuth PKCE state/code_verifier 분리, 의존성 CVE 패치, 도구 오류 살균, 위험 명령 감지 강화",
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
    title: "Gateway / Agent — TEXT follow-ups 병합, 위임 api_mode 수정, 스트림 파서 재시도",
    category: "Gateway / Agent",
    summary:
      "활성 세션 중 rapid TEXT follow-up 메시지가 올바르게 병합됩니다. 위임 시 api_mode가 올바르게 적용되고 anthropic_messages URL이 자동 감지됩니다. Anthropic 스트림 파서에서 잘못된 형식의 응답 시 재시도하도록 수정됩니다 (main branch 기준).",
    commits: [
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
    title: "ACP — gh-copilot 미사용 감지, GitHub Models 413 오류 개선",
    category: "ACP",
    summary:
      "gh-copilot 미사용(deprecation) 감지가 강화되고 GitHub Models 413 오류 힌트가 개선됩니다. copilot ACP 미사용 감지 및 Azure URL 매핑에 대한 테스트가 추가됩니다 (main branch 기준).",
    commits: [
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
    title: "Skills — osint-investigation, pinggy-tunnel, darwinian-evolver 옵셔널 스킬 추가",
    category: "Skills",
    summary:
      "osint-investigation 옵셔널 스킬이 새로 추가됩니다. pinggy-tunnel 옵셔널 스킬이 추가되어 SSH 터널링을 쉽게 설정할 수 있습니다. darwinian-evolver 옵셔널 스킬이 새로 추가되고 AUTHOR_MAP 및 문서가 재생성됩니다 (main branch 기준).",
    commits: [
      {
        sha: "5f91b1a",
        message: "feat(skills): add osint-investigation optional skill (closes #355) (#26729)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5f91b1a48b06c8260dc539614abda27cf4e831cb",
      },
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
    title: "TUI / CLI — 마크다운 테이블 렌더링, 스크롤 영역 수정, 서브에이전트 상태, 승인 프롬프트 UX",
    category: "CLI / TUI",
    summary:
      "TUI에서 마크다운 테이블이 터미널 너비에 맞게 렌더링되고 좁은 환경에서는 세로 폴백으로 전환됩니다. DECSTBM 스크롤 영역이 하단 행을 벗어나지 않도록 수정됩니다. /agents 페이지에서 서브에이전트의 타임아웃·에러 상태가 올바르게 처리됩니다. approval/clarify/confirm 프롬프트 중에도 트랜스크립트 스크롤과 Esc 키가 동작합니다. 커서 동기화와 미지원 플랫폼 대응도 포함됩니다 (main branch 기준).",
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
