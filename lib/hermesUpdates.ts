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

export const hermesUpdatesLastChecked = "2026-05-16"; // last new commit: 2026-05-15

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-15",
    title: "xAI OAuth / Auth — xAI Grok OAuth 제공자, CORS 허용 목록 정리, ~/.hermes/.env 폴백 보존",
    category: "Config / Auth",
    summary:
      "xAI Grok OAuth(SuperGrok Subscription) 제공자가 추가됩니다. xAI OAuth CORS 허용 목록이 xAI 인증 오리진으로 정리됩니다. ~/.hermes/.env 폴백과 XAI_STT_BASE_URL 우선순위가 보존됩니다 (main branch 기준).",
    commits: [
      {
        sha: "b62c997",
        message: "feat(xai-oauth): add xAI Grok OAuth (SuperGrok Subscription) provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/b62c9979732c732480491c63a4399034f668a44f",
      },
      {
        sha: "aac6d97",
        message: "chore(xai-oauth): trim CORS allowlist to xAI auth origins",
        href: "https://github.com/NousResearch/hermes-agent/commit/aac6d97a143759731431ade9a098b4baa55fc53d",
      },
      {
        sha: "e13c1b8",
        message: "fix(xai-http): preserve ~/.hermes/.env fallback and XAI_STT_BASE_URL precedence",
        href: "https://github.com/NousResearch/hermes-agent/commit/e13c1b806018427aaf5fbe4b0ff2c6ca6821d6db",
      },
      {
        sha: "6af9942",
        message: "fix(url-safety): allow only http and https schemes",
        href: "https://github.com/NousResearch/hermes-agent/commit/6af99423272ed67dd1f8d88bfdf762d4e5b77a2f",
      },
      {
        sha: "04b1fda",
        message: "security(deps): add upper bounds to 5 loose deps + document supply chain policy (#24226)",
        href: "https://github.com/NousResearch/hermes-agent/commit/04b1fdaecfda15ff4c8f5c9f0041516efd01ba30",
      },
      {
        sha: "e8b9f5f",
        message: "fix(aux): surface Nous auth-unavailable warning in auxiliary client",
        href: "https://github.com/NousResearch/hermes-agent/commit/e8b9f5ff9a19f399229856e9fd5d0823a1275927",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Tools / MCP / Browser — 브라우저 부트스트랩, 웹 도구 에러 핸들링, MCP 보간, video_gen xAI 선택 반영, 에이전트 성능",
    category: "Tools / MCP / Plugins",
    summary:
      "ACP에서 --setup-browser로 브라우저 도구를 부트스트랩할 수 있습니다. 브라우저 프로바이더 네트워크 호출에 에러 핸들링이 추가됩니다. web_tools의 asyncio.gather에 return_exceptions가 적용되어 한 작업 실패가 전체를 중단시키지 않습니다. MCP 환경변수 정규식이 사전 컴파일되고 보간이 통일됩니다. AGENT_BROWSER_ARGS 사전 설정이 존중됩니다. video_gen 피커가 활성 xAI 선택을 반영하고 xai_grok post_setup이 실행됩니다. run_agent의 길이-연속 접두사 누적이 list+join으로 최적화됩니다 (main branch 기준).",
    commits: [
      {
        sha: "85782a4",
        message: "feat(acp): hermes acp --setup-browser bootstraps browser tools for registry installs",
        href: "https://github.com/NousResearch/hermes-agent/commit/85782a4ed7f2329957c4af9a4243acb51c3cf921",
      },
      {
        sha: "13c72fb",
        message: "fix(tools): wrap browser provider network calls with error handling",
        href: "https://github.com/NousResearch/hermes-agent/commit/13c72fb486e6bfc047bfde93e54116ea7ef7adf4",
      },
      {
        sha: "eacb398",
        message: "fix(tools): add return_exceptions to asyncio.gather in web_tools",
        href: "https://github.com/NousResearch/hermes-agent/commit/eacb398f755b6ee102e75c6d62aed5a9b253e29d",
      },
      {
        sha: "55f3262",
        message: "fix(mcp): pre-compile env-var regex and unify interpolation",
        href: "https://github.com/NousResearch/hermes-agent/commit/55f3262e788bdd7dd6adcab1d515d476b6cb9321",
      },
      {
        sha: "4695d27",
        message: "fix(browser): honor pre-set AGENT_BROWSER_ARGS and document the bypass",
        href: "https://github.com/NousResearch/hermes-agent/commit/4695d2716f60da89152bdc9dfa7d96e54ea7c22e",
      },
      {
        sha: "e4d7a5d",
        message: "fix(tools): video_gen picker reflects active xAI selection and runs xai_grok post_setup",
        href: "https://github.com/NousResearch/hermes-agent/commit/e4d7a5dffaa18676b8567469825c2082658d8557",
      },
      {
        sha: "4f8aaf1",
        message: "perf(run_agent): accumulate length-continuation prefix via list+join",
        href: "https://github.com/NousResearch/hermes-agent/commit/4f8aaf10465566008499e65937f659a29f1ba6ab",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "CLI / TUI — YOLO 모드 경고, CJK/IME 렌더링, 백그라운드 알림, 스크롤백/라이트모드 수정, 모델 자동 감지 로깅",
    category: "CLI / TUI",
    summary:
      "YOLO 모드 시 배너와 상태 표시줄에 경고가 표시됩니다. fast-echo 바이패스가 ASCII로 제한되어 베트남어/CJK/IME 입력이 올바르게 렌더링됩니다. 자율 백그라운드 프로세스 완료 알림이 지원됩니다. 리사이즈 시 스크롤백 중복 및 라이트 모드 가시성 문제가 수정되고 스크롤백 너비 클램프가 되돌려집니다. 런타임 모델 자동 감정에서 삼켜진 예외가 로깅됩니다 (main branch 기준).",
    commits: [
      {
        sha: "9fb40e6",
        message: "fix(tui): restrict fast-echo bypass to ASCII so Vietnamese/CJK/IME input renders correctly",
        href: "https://github.com/NousResearch/hermes-agent/commit/9fb40e6a3d6338b6a6a616010de7a16672148924",
      },
      {
        sha: "d541628",
        message: "fix(tui): autonomous background process completion notifications",
        href: "https://github.com/NousResearch/hermes-agent/commit/d5416284f11ccbc735c8357f0ab35ce5f683ccc3",
      },
      {
        sha: "b6e0741",
        message: "feat(cli): show YOLO mode warning in banner and status bar",
        href: "https://github.com/NousResearch/hermes-agent/commit/b6e07417c5242f7a3d6af1c8d8f0173248b4253f",
      },
      {
        sha: "965ae7f",
        message: "revert(cli): drop scrollback box width clamp (#25975), restore full-width borders (#26163)",
        href: "https://github.com/NousResearch/hermes-agent/commit/965ae7fa97e62e0f318eaf9a132f083e87cadf59",
      },
      {
        sha: "f8745f5",
        message: "fix(cli): kill resize scrollback duplication + light-mode visibility",
        href: "https://github.com/NousResearch/hermes-agent/commit/f8745f59c2738025a02ca161307f4dcbfd0eb34a",
      },
      {
        sha: "c4a21d7",
        message: "fix(cli): log swallowed exception in runtime model auto-detection",
        href: "https://github.com/NousResearch/hermes-agent/commit/c4a21d783131b04da443be6b624e20bb3b5b87b7",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Gateway / State / Observability — SimpleX Chat, User-Agent, 429 에러 가드, 세션 영속화, 대화 매핑 정리, Langfuse 관측성",
    category: "Gateway / State",
    summary:
      "SimpleX Chat 플랫폼 플러그인이 추가됩니다. ProviderProfile.fetch_models에 User-Agent가 설정됩니다. 429 에러 바디가 문자열 형식인 경우 isinstance 가드가 추가됩니다. gateway 재시작 간 auto-reset 상태가 영속화됩니다. 응답 퇴거/삭제 시 오래된 대화 매핑이 정리됩니다. Langfuse에 I/O 트레이스, 도구 출력, 플레이스홀더 자격 증명이 완전히 연결되어 관측성이 보완됩니다 (main branch 기준).",
    commits: [
      {
        sha: "09d9724",
        message: "feat(gateway): add SimpleX Chat platform plugin",
        href: "https://github.com/NousResearch/hermes-agent/commit/09d9724a09197b1981c318f3c51c55bc52fdfe29",
      },
      {
        sha: "5360b54",
        message: "fix(providers): set User-Agent on ProviderProfile.fetch_models",
        href: "https://github.com/NousResearch/hermes-agent/commit/5360b542447daaf0ba8d0f7c3cf0be1751ca0008",
      },
      {
        sha: "23ac522",
        message: "fix(gateway): isinstance-guard string-form 429 error body",
        href: "https://github.com/NousResearch/hermes-agent/commit/23ac522d3711ea0735f11f4d8f6131ac24554dd3",
      },
      {
        sha: "e0e7397",
        message: "fix(session): persist auto-reset state across gateway restarts",
        href: "https://github.com/NousResearch/hermes-agent/commit/e0e7397c32fa06e4c93ce07bc276ea5c1dca7a84",
      },
      {
        sha: "814c600",
        message: "fix: clean stale conversation mappings on response eviction/deletion",
        href: "https://github.com/NousResearch/hermes-agent/commit/814c60092b08df3e4f7ccfcc0bab4e1fbaa39414",
      },
      {
        sha: "db84a78",
        message: "fix(langfuse): complete observability fix — trace I/O, tool outputs, placeholder credentials",
        href: "https://github.com/NousResearch/hermes-agent/commit/db84a78e618bf973ffc403ed2e1f8162f2591daa",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Messaging / Cron / Goals — Slack 명령어 가드, WhatsApp 타임아웃, Cron 이름 조회, Goals 판정 토큰 확장, Cron 문서",
    category: "Messaging / Cron",
    summary:
      "Slack에서 공백만 있는 명령어 텍스트에 대해 split()[0]이 가드됩니다. WhatsApp에서 Baileys sendMessage가 멈출 때 빠른 실패가 추가됩니다. Cron 작업 이름 기반 조회가 지원됩니다. Goals 판정(judge)의 max_tokens가 200에서 4096으로 확장되고 설정 가능해집니다. wakeAgent pre-run gate에 대한 Cron 문서 레시피가 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "8373956",
        message: "fix(slack): guard split()[0] against whitespace-only command text",
        href: "https://github.com/NousResearch/hermes-agent/commit/837395685099b130a502db3ec25551475fe3c7cc",
      },
      {
        sha: "681778a",
        message: "fix(whatsapp): fail fast when Baileys sendMessage hangs",
        href: "https://github.com/NousResearch/hermes-agent/commit/681778a0b753bac894bd30b1d257bcb3eface63d",
      },
      {
        sha: "6682f91",
        message: "feat(cron): support name-based lookup for job operations",
        href: "https://github.com/NousResearch/hermes-agent/commit/6682f91b80bab57c65435ae6b5cdc791334ed620",
      },
      {
        sha: "f9ad740",
        message: "fix(goals): raise judge max_tokens 200 → 4096, make configurable",
        href: "https://github.com/NousResearch/hermes-agent/commit/f9ad7400e30517159712a77e6a4bc2f3a390b2db",
      },
      {
        sha: "05d9f64",
        message: "docs(cron): worked recipes for the wakeAgent pre-run gate (#26229)",
        href: "https://github.com/NousResearch/hermes-agent/commit/05d9f641c06043a538ba03e3ed008a97403fcc3b",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Platform / Yuanbao / Skills Hub — FAL 설정 메시지, Yuanbao 인용 미디어 추출·폴백·리소스 파싱, uvx 전환, Zed 메타데이터, HuggingFace Skills 탭",
    category: "Image-gen / Platform",
    summary:
      "FAL 백엔드에 연결할 수 없을 때 실행 가능한 설정 메시지가 표시됩니다. Yuanbao에서 인용 미디어 참조 추출이 QuoteContextMiddleware에 추가되고, DispatchMiddleware로 폴백이 개선되며, ybres 앵커를 위한 _parse_resource_id가 추가되고, 기록 백필보다 인용 미디어 참조가 우선됩니다. ACP Registry가 npm 런처를 제거하고 uvx 배포로 전환되며 Zed 에디터용 메타데이터가 추가됩니다. HuggingFace Skills가 신뢰할 수 있는 기본 탭으로 Skills Hub에 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "9329e06",
        message: "feat(image-gen): actionable setup message when no FAL backend is reachable (#26222)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9329e06696c968b7a960541d0ee0167df6742f21",
      },
      {
        sha: "d57a4b3",
        message: "feat(yuanbao): add _parse_resource_id and update _extract_text for ybres anchors",
        href: "https://github.com/NousResearch/hermes-agent/commit/d57a4b3eb51e5c445923d33a5c3da9266e62790b",
      },
      {
        sha: "80efe66",
        message: "feat(yuanbao): add quote_media_refs extraction to QuoteContextMiddleware",
        href: "https://github.com/NousResearch/hermes-agent/commit/80efe664ce5d822b31ca6c76162c6e1f7500796a",
      },
      {
        sha: "3df26b9",
        message: "feat(yuanbao): prioritize quote media refs over history backfill in DispatchMiddleware",
        href: "https://github.com/NousResearch/hermes-agent/commit/3df26b925cae7761763e43f03978600d175417c5",
      },
      {
        sha: "fc2754d",
        message: "fix(yuanbao): resolve quoted file/image via transcript lookup when quote desc lacks ybres",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc2754dbdff860cdeb8fe4ed5fe0464bb6295cbb",
      },
      {
        sha: "0086cda",
        message: "refactor(yuanbao): improve quote media fallback — move to DispatchMiddleware, tighten conditions",
        href: "https://github.com/NousResearch/hermes-agent/commit/0086cdaf93b2a85abe787fc9b130e45c0b8b8388",
      },
      {
        sha: "c8c6ce1",
        message: "feat(acp-registry): switch to uvx distribution, drop npm launcher",
        href: "https://github.com/NousResearch/hermes-agent/commit/c8c6ce17315c0f8512cec6f0bc8120141acdf830",
      },
      {
        sha: "4c94396",
        message: "feat: add ACP registry metadata for Zed",
        href: "https://github.com/NousResearch/hermes-agent/commit/4c94396206965580e808ceb39ae1fe007511a898",
      },
      {
        sha: "e0e4856",
        message: "feat(skills-hub): add huggingface/skills as trusted default tap (#2549)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e0e4856d466491ee8a31378c606e65ddfe061ab9",
      },
    ],
  },
];
