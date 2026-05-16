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

export const hermesUpdatesLastChecked = "2026-05-17"; // last new commit: 2026-05-16 (ACP session history replay follow-up, style/chore/merge commits added)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
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
    title: "Gateway / Agent — TEXT follow-ups 병합, DeepSeek thinking 모드·reasoning_effort 매핑, 위임 API 모드 수정, delegate heartbeat 스레드 안정화",
    category: "Gateway / Agent",
    summary:
      "활성 세션 중 rapid TEXT follow-up 메시지가 올바르게 병합됩니다. DeepSeek API에 thinking.type 및 reasoning_effort 매핑이 추가되고, DeepSeekProfile을 통해 thinking 모드가 올바르게 적용됩니다. 위임 시 api_mode가 올바르게 적용되고 anthropic_messages URL이 자동 감지됩니다. Anthropic 스트림 파서에서 잘못된 형식의 응답 시 재시도하도록 수정됩니다. delegate heartbeat 스레드가 시작되지 않은 상태에서 join을 가드하고, 스레드 시작이 try 블록 안으로 이동하여 orphan 스레드가 방지됩니다 (main branch 기준).",
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
    title: "Docs / Dashboard / ACP / TUI / Windows / CLI — 스킬별 사이드바, Kanban Ready 명확화, ACP reasoning replay, TUI 전반 수정, Windows tirith·cwd 경고 수정, pip 설치 문서 제거, CLI systemd PATH revert",
    category: "Docs / Dashboard / TUI / Windows",
    summary:
      "문서 사이드바에 스킬별 페이지가 표시됩니다. 중복 스킬 카테고리의 사이드바 키가 고유하게 수정됩니다. Dashboard Kanban에서 Ready 컬럼의 의미가 명확해집니다. Copilot ACP 미사용(deprecation) 감지가 추가로 강화되고 GitHub Models 413 힌트가 개선됩니다. ACP 세션 로드 시 assistant reasoning이 agent_thought_chunk로 재생(replay)되고, 응답 전에 session history도 함께 재생됩니다. TUI에서 Ink displayCursor가 fast-echo writes와 동기화되어 커서 표류가 수정되고, 마크다운 테이블 렌더링이 너비 인식 개선, /agents에서 timeout/error 서브에이전트 상태 처리, DECSTBM 스크롤 영역이 하단 행을 침범하지 않게 수정되며, approval/clarify/confirm 프롬프트 중에도 transcript 스크롤과 Esc가 허용됩니다. Programmatic integration 개요 문서가 추가됩니다. pip 설치 방법이 문서에서 제거됩니다. Windows 등 미지원 플랫폼에서 tirith-unavailable 배너가 표시되지 않고 설치·실행 시도가 건너뜁니다. Windows에서 매 터미널 호출 시 cwd-missing·tirith-spawn 경고가 반복 출력되지 않게 수정됩니다. Windows 파일 락 생성 시 TOCTOU 레이스가 제거됩니다. CLI에서 systemd PATH 구성 시 읽을 수 없는 디렉토리를 허용하는 수정이 추가 후 revert 되었습니다 (main branch 기준).",
    commits: [
      {
        sha: "dc4cde2",
        message: "feat(docs): show per-skill pages in the left sidebar (#26646)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dc4cde278ba0523c01c2c29988e59a567a19ef22",
      },
      {
        sha: "a31191c",
        message: "fix(docs): unique sidebar keys for duplicate skill categories (#26726)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a31191c3f57e2463ce4253cb1d95f93c52f3df14",
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
        sha: "ca413c6",
        message: "fix(dashboard): align Ukrainian Kanban Ready column help",
        href: "https://github.com/NousResearch/hermes-agent/commit/ca413c6164e7957d33841353feb9cdbf838dead7",
      },
      {
        sha: "374dc81",
        message: "fix(copilot-acp): tighten deprecation detection + sharpen GitHub Models 413 hint",
        href: "https://github.com/NousResearch/hermes-agent/commit/374dc81c2359a6f61e8d1efc49de29d61d7b9a88",
      },
      {
        sha: "70b6635",
        message: "fix(tui): keep Ink displayCursor in sync with fast-echo writes so cursor stops drifting (#26717)",
        href: "https://github.com/NousResearch/hermes-agent/commit/70b663504fee1d58a6763e862df478cf101fe51e",
      },
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
        sha: "c5dc970",
        message: "fix(windows): silence tirith-unavailable banner + skip install/spawn attempts on unsupported platforms (#26718)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5dc9700ebc8b890e349c0cc3e978d133395909b",
      },
      {
        sha: "3034eee",
        message: "fix(acp): replay session history before responding to session/load (#12285 follow-up) (#26957)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3034eee38ec516109566c00975be4d0276747c34",
      },
      {
        sha: "f3a4af9",
        message: "fix(acp): replay assistant reasoning as agent_thought_chunk on session/load (#12285) (#26943)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f3a4af9cf2a626cb3e055766cb1cff60168d295d",
      },
      {
        sha: "4aec25b",
        message: "fix(windows): stop spamming cwd-missing + tirith-spawn warnings on every terminal call",
        href: "https://github.com/NousResearch/hermes-agent/commit/4aec25bc4411edb4563292cadbd02c365c846286",
      },
      {
        sha: "7fee1f6",
        message: "fix(memory): eliminate TOCTOU race in Windows file lock creation",
        href: "https://github.com/NousResearch/hermes-agent/commit/7fee1f61eb52d1706af04c9606ee1a2e7ef3afc3",
      },
      {
        sha: "e377833",
        message: "Merge pull request #26711 from NousResearch/austin/fix/dashboard-kanban",
        href: "https://github.com/NousResearch/hermes-agent/commit/e377833fa629909a6c1ced6216e42bef79da497e",
      },
      {
        sha: "c7db6a5",
        message: "Merge pull request #26702 from NousResearch/remove-pip-docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/c7db6a58000c89b18717eef80e4842f114761fe9",
      },
      {
        sha: "965610f",
        message: "fix(cli): tolerate unreadable dirs when building systemd PATH",
        href: "https://github.com/NousResearch/hermes-agent/commit/965610f922be5b2afb6fa412205077486734a433",
      },
      {
        sha: "16ff946",
        message: "Revert \"fix(cli): tolerate unreadable dirs when building systemd PATH\"",
        href: "https://github.com/NousResearch/hermes-agent/commit/16ff9464a5daae9b82bf2ce2c7de5ba8f80cfd40",
      },
    ],
  },
];
