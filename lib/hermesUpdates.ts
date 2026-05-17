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

export const hermesUpdatesLastChecked = "2026-05-17"; // last new commit: 2026-05-17 (PR #27248 merge — xAI OAuth provider, agent model handling, gateway trust_env, system hardening)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-17",
    title: "Agent 핵심 — 비전 모델 이미지 스트리핑, Gemma 4·Kimi 추론 지원, custom_providers 안정화, OpenRouter 비전 존중",
    category: "Agent 안정성",
    summary:
      "비전 미지원 모델에 이미지 파트가 전달되지 않도록 스트리핑되고, _custom_providers에 대한 getattr 가드가 추가됩니다. Gemma 4가 reasoning 허용 목록에 추가되고, Kimi 모델이 이름 기반으로 감지되어 reasoning pad가 적용됩니다. fallback 시 custom_providers가 올바르게 전달되어 context-length 탐지가 정확해집니다. OpenRouter에서 사용자가 구성한 비전 모델 설정이 존중됩니다 (main branch 기준).",
    commits: [
      {
        sha: "563b4d9",
        message: "fix: strip image parts for non-vision models with provider profiles + getattr-safe _custom_providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/563b4d9e51a46cc421e327b351cb7efe1ccb151b",
      },
      {
        sha: "8f3bc17",
        message: "feat(agent): Added gemma 4 to reasoning allowlist",
        href: "https://github.com/NousResearch/hermes-agent/commit/8f3bc17db9ebe1d9108ae69b14fcc3f06734554b",
      },
      {
        sha: "94b3131",
        message: "fix(run_agent): detect kimi models via model name for reasoning pad",
        href: "https://github.com/NousResearch/hermes-agent/commit/94b3131be7115709c516a79be7c3d01dd71761a8",
      },
      {
        sha: "b5bcffe",
        message: "fix(fallback): forward custom_providers to fallback model context-length detection",
        href: "https://github.com/NousResearch/hermes-agent/commit/b5bcffe1674fa9ab3ba7a754c07ab77bedde83a8",
      },
      {
        sha: "52c8971",
        message: "fix: respect user-configured vision model for OpenRouter",
        href: "https://github.com/NousResearch/hermes-agent/commit/52c89715a29198d838dac54e229aba9cf328e408",
      },
    ],
  },
  {
    date: "2026-05-17",
    title: "Provider / OAuth — xAI Grok OAuth 프로바이더, SSE prelude 에러 복구, entitlement 403 체인, NIM billing header",
    category: "Provider / OAuth",
    summary:
      "xAI Grok OAuth(SuperGrok Subscription) 프로바이더가 새로 추가되어 xAI API에 OAuth 인증으로 접근할 수 있습니다. SSE 스트림에서 prelude 에러 복구, reasoning replay 게이팅, entitlement 403 노출이 개선됩니다. entitlement-403 처리 체인이 최종 정리되고, Codex fallback 스트림에서 provider 'error' SSE 프레임이 노출됩니다. NVIDIA NIM에 billing origin header가 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "b07524e",
        message: "feat(xai-oauth): add xAI Grok OAuth (SuperGrok Subscription) provider — port to extracted modules",
        href: "https://github.com/NousResearch/hermes-agent/commit/b07524e53aed5e8629b98ce3bbf3a54a27d596f4",
      },
      {
        sha: "6362e71",
        message: "fix(xai-oauth): recover from prelude SSE errors, gate reasoning replay, surface entitlement 403s",
        href: "https://github.com/NousResearch/hermes-agent/commit/6362e71973c18b407651157f818e279122ce41f6",
      },
      {
        sha: "6975a2d",
        message: "fix(xai-oauth): entitlement-403 chain — final state (ce0e189d3 + 9818b9a1a + 6784c8079 + dffb602f3)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6975a2d9ae20c5131c4fd3b3758dc9eade8cc6a0",
      },
      {
        sha: "aa05ffb",
        message: "fix(xai): surface provider 'error' SSE frame in Codex fallback stream (#27184)",
        href: "https://github.com/NousResearch/hermes-agent/commit/aa05ffba530fde599b6515120578364cce682ac7",
      },
      {
        sha: "27df249",
        message: "feat(nvidia): add NIM billing origin header — port to extracted modules",
        href: "https://github.com/NousResearch/hermes-agent/commit/27df249564b3ce6fa4d1db883df0329bfda01593",
      },
    ],
  },
  {
    date: "2026-05-17",
    title: "Gateway / 시스템 — trust_env 일괄 적용, TTS 텍스트 준비 훅, API 서버 헤더 강화, Telegram DM topic, bool 변환",
    category: "Gateway / 시스템",
    summary:
      "SMS, Slack, Teams, Google Chat 어댑터와 _LineClient의 aiohttp 세션에 trust_env=True가 일괄 적용되어 프록시 환경에서 연결이 안정화됩니다. 자동 TTS 마크다운 스트리핑이 prepare_tts_text() 훅으로 분리됩니다. API 서버 응답 헤더가 강화되고, 문자열로 변환된 boolean 값이 요청 페이로드에서 올바르게 처리됩니다. Telegram 합성 DM 이벤트에 direct_messages_topic_id가 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "c1ae18e",
        message: "fix(gateway): add trust_env=True to aiohttp sessions in SMS, Slack, Teams, Google Chat adapters",
        href: "https://github.com/NousResearch/hermes-agent/commit/c1ae18ee815eba605c1b021e1b0b2a9c765b2d71",
      },
      {
        sha: "35b7bef",
        message: "fix(line): add trust_env=True to all _LineClient aiohttp sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/35b7befc67315da5d4ce6b6a3daa4d9ba2f57c1c",
      },
      {
        sha: "0afab4a",
        message: "feat(gateway): extract auto-TTS markdown strip into prepare_tts_text() hook",
        href: "https://github.com/NousResearch/hermes-agent/commit/0afab4a32b3b371ac3b5ab17d745aab823444ae3",
      },
      {
        sha: "5631345",
        message: "[agent] fix: harden api server response headers",
        href: "https://github.com/NousResearch/hermes-agent/commit/5631345b12aa5fa7ead11203624e646b42c8936f",
      },
      {
        sha: "5338250",
        message: "fix(gateway): add direct_messages_topic_id for synthetic Telegram DM events",
        href: "https://github.com/NousResearch/hermes-agent/commit/5338250dab14b3e4f9dfb306446e8c55835adfad",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "Gateway / Agent / ACP — TEXT follow-ups 병합, DeepSeek thinking, 위임 API 모드, heartbeat 안정화, ACP 세션 리플레이, CLI 개선, npm 설치 진행 표시, Camofox 지연 설치, Signal/Moonshot/xAI 수정, 주기적 게이트웨이 메모리 로깅",
    category: "Gateway / Agent / ACP",
    summary:
      "활성 세션 중 rapid TEXT follow-up 메시지가 올바르게 병합됩니다. DeepSeek API에 thinking.type 및 reasoning_effort 매핑이 추가되고, DeepSeekProfile을 통해 thinking 모드가 올바르게 적용됩니다. 위임 시 api_mode가 올바르게 적용되고 anthropic_messages URL이 자동 감지됩니다. Anthropic 스트림 파서에서 잘못된 형식의 응답 시 재시도하도록 수정됩니다. delegate heartbeat 스레드가 시작되지 않은 상태에서 join을 가드하고, orphan 스레드가 방지됩니다. ACP session/load 시 세션 히스토리 리플레이와 assistant reasoning의 agent_thought_chunk 재생이 추가됩니다. /exit --delete 플래그로 종료 시 세션 삭제, /status에 세션 리캡 추가, 백그라운드 작업 시 ▶ N 표시기가 추가됩니다. Codex 429 오류 시 풀 회전, xAI entitlement 403에서 오래된 Premium+ 힌트가 제거되며, Telegram DM 타이핑 인디케이터 복원, TUI 커서 동기화 수정이 포함됩니다. npm install 진행 상황 스트리밍, Camofox 지연 설치, Signal groupV2 봉투 처리, Moonshot 스키마 수정, 주기적 gateway 메모리 로깅이 추가됩니다 (main branch 기준).",
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
        sha: "dffb602",
        message: "fix(xai): drop stale X Premium+ hint from entitlement 403 surfacing (#27110)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dffb602f37b3c1b9c9fd7f0417aab3af56cffa38",
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
