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

export const hermesUpdatesLastChecked = "2026-05-16"; // last new commit: 2026-05-16 (updated with c5dc970, a31191c)

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-16",
    title: "TUI / Platform — 마크다운 테이블 너비 인식 렌더링, /agents 서브에이전트 상태 처리, DECSTBM 스크롤 영역 수정, 승인 프롬프트 중 스크롤·Esc 허용, 미지원 플랫폼 tirith 설치·실행 건너뜀",
    category: "CLI / TUI",
    summary:
      "TUI에서 마크다운 테이블이 터미널 너비에 맞게 렌더링되고 좁은 환경에서는 세로 폴백으로 전환됩니다. /agents 페이지에서 서브에이전트의 타임아웃·에러 상태가 올바르게 처리됩니다. DECSTBM 스크롤 영역이 마지막 행을 포함하지 않도록 수정되어 화면 깨짐이 방지됩니다. approval/clarify/confirm 프롬프트 중에도 트랜스크립트 스크롤과 Esc 키가 동작합니다. 미지원 플랫폼에서 tirith-unavailable 배너가 숨겨지고 install/spawn 시도가 건너뜁니다 (main branch 기준).",
    commits: [
      {
        sha: "c5dc970",
        message: "fix(windows): silence tirith-unavailable banner + skip install/spawn attempts on unsupported platforms (#26718)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5dc9700ebc8b890e349c0cc3e978d133395909b",
      },
      {
        sha: "44b63fc",
        message: "fix(tui): allow transcript scroll + Esc during approval/clarify/confirm prompts (#26414)",
        href: "https://github.com/NousResearch/hermes-agent/commit/44b63fc6de3fe2b53eac3109b4a20db41c663195",
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
    ],
  },
  {
    date: "2026-05-16",
    title: "ACP / Auth — xAI OAuth entitlement-403 자격 증명 갱신 루프 수정, compression pool 해결, grok-4.3 컨텍스트 1M 확장",
    category: "ACP / Auth",
    summary:
      "xAI OAuth에서 entitlement-403 오류 시 자격 증명 갱신이 무한 루프에 빠지던 문제가 해결됩니다. auxiliary 프로세스 풀에서 xAI OAuth compression이 올바르게 해결됩니다. grok-4.3 컨텍스트가 1M 토큰으로 확장됩니다. entitlement-403 힌트가 X Premium+ 구독 필요 사항을 정확히 안내하고, 기존 구독자를 탓하지 않도록 재작성됩니다 (main branch 기준).",
    commits: [
      {
        sha: "97a32af",
        message: "fix(auxiliary): resolve xai oauth compression from pool",
        href: "https://github.com/NousResearch/hermes-agent/commit/97a32afdc490e3d40b291dac0e67f291502052a0",
      },
      {
        sha: "ce0e189",
        message: "fix(xai-oauth): break entitlement-403 credential-refresh loop, bump grok-4.3 context to 1M",
        href: "https://github.com/NousResearch/hermes-agent/commit/ce0e189d3e7185d6c8c6af924a1df23e17c6f85c",
      },
      {
        sha: "9818b9a",
        message: "fix(xai-oauth): rewrite entitlement-403 hint to not accuse subscribers",
        href: "https://github.com/NousResearch/hermes-agent/commit/9818b9a1acb915971d835d1faa85949e9f7a87a5",
      },
      {
        sha: "6784c80",
        message: "fix(xai-oauth): lead entitlement-403 hint with X Premium+ gotcha",
        href: "https://github.com/NousResearch/hermes-agent/commit/6784c80794bfd3cc40aae7f7d9f1a59876de7799",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "DeepSeek / Docs — thinking 모드 매핑, DeepSeekProfile 연결, 스킬별 문서 사이드바 중복 키 수정, pip 설치 문서 제거",
    category: "DeepSeek / Docs",
    summary:
      "DeepSeek API에 thinking.type과 reasoning_effort 매핑이 추가되어 thinking 모드가 지원됩니다. 기존 legacy fallback 대신 DeepSeekProfile을 통해 올바르게 연결되도록 수정됩니다. Docs에 스킬별 문서 페이지가 왼쪽 사이드바에 표시되며, 중복 skill category 키 충돌이 해결됩니다. pip 설치 방법이 공식 문서에서 제거됩니다 (main branch 기준).",
    commits: [
      {
        sha: "a31191c",
        message: "fix(docs): unique sidebar keys for duplicate skill categories (#26726)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a31191c3f57e2463ce4253cb1d95f93c52f3df14",
      },
      {
        sha: "86a368d",
        message: "remove pip installation method from docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/86a368d8322b3977bf89b9043818eebc6adf470b",
      },
      {
        sha: "dc4cde2",
        message: "feat(docs): show per-skill pages in the left sidebar",
        href: "https://github.com/NousResearch/hermes-agent/commit/dc4cde278ba0523c01c2c29988e59a567a19ef22",
      },
      {
        sha: "cd9470f",
        message: "fix(deepseek): wire thinking-mode via DeepSeekProfile, not legacy fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/cd9470f41638bd515db096cd934c463205790110",
      },
      {
        sha: "068c24f",
        message: "feat(deepseek): add thinking.type + reasoning_effort mapping for DeepSeek API",
        href: "https://github.com/NousResearch/hermes-agent/commit/068c24f8a4203e86de32b0d84ccaf047e8cd6ef7",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Agent 안정성 — Delegate 하트비트, 비동기 코루틴 정리, Windows 파일 잠금 TOCTOU, 플랫폼 서킷 브레이커",
    category: "Agent 안정성",
    summary:
      "delegate 하트비트 스레드 join 가드와 try 블록 이동으로 고아 스레드가 방지됩니다. 모든 threadsafe bridge에서 스케줄되지 않은 코루틴이 정리됩니다. Windows 파일 잠금 TOCTOU 경쟁이 제거되고 cwd-missing·tirith-spawn 경고 스팸이 중단됩니다. gateway가 플랫폼 장애 시 서킷 브레이커로 계속 실행됩니다 (main branch 기준).",
    commits: [
      {
        sha: "2d7182f",
        message: "fix(delegate): move heartbeat thread start inside try block to prevent orphan",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d7182f72c398496db60de5c18f8554d7ecc6d82",
      },
      {
        sha: "6068363",
        message: "fix(delegate): guard heartbeat join against unstarted thread",
        href: "https://github.com/NousResearch/hermes-agent/commit/6068363311b861ad0bb411bfffe5958bf8b6d142",
      },
      {
        sha: "4e89c53",
        message: "fix(async): close unscheduled coroutines in all threadsafe bridges",
        href: "https://github.com/NousResearch/hermes-agent/commit/4e89c53082b13b71d0c7f2f662cd65ea80d9f17c",
      },
      {
        sha: "7fee1f6",
        message: "fix(memory): eliminate TOCTOU race in Windows file lock creation",
        href: "https://github.com/NousResearch/hermes-agent/commit/7fee1f61eb52d1706af04c9606ee1a2e7ef3afc3",
      },
      {
        sha: "4aec25b",
        message: "fix(windows): stop spamming cwd-missing + tirith-spawn warnings on every terminal call",
        href: "https://github.com/NousResearch/hermes-agent/commit/4aec25bc4411edb4563292cadbd02c365c846286",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Pip / Wheel 배포 — postinstall, pip 업그레이드, ensure_dependency, wheel 번들 TUI, PyPI 업데이트 확인",
    category: "Install / Distribution",
    summary:
      "pip 설치 사용자를 위한 `hermes postinstall` 명령이 추가되고 PyPI 설치 시 pip install --upgrade 업데이트가 지원됩니다. config가 설치 방식을 감지해 올바른 업데이트 명령을 안내하고, ensure_dependency() 래퍼로 TUI·브라우저 도구 의존성이 부트스트랩됩니다. wheel 내에 install.sh가 포함되고 entry.js를 npm 빌드 대신 wheel에서 먼저 탐색하며, CI에서 웹 대시보드와 TUI 번들이 사전 빌드됩니다 (main branch 기준).",
    commits: [
      {
        sha: "99b81cd",
        message: "feat: add `hermes postinstall` command for pip users",
        href: "https://github.com/NousResearch/hermes-agent/commit/99b81cd54b99d4c66812b1d076e593f566432065",
      },
      {
        sha: "79afa50",
        message: "feat(update): support pip install --upgrade for PyPI installs",
        href: "https://github.com/NousResearch/hermes-agent/commit/79afa50703d18f91fb7878a7b7a31b425ab40382",
      },
      {
        sha: "624ce11",
        message: "feat(config): detect pip install method and recommend correct update command",
        href: "https://github.com/NousResearch/hermes-agent/commit/624ce11ee846b57b59ca2e031f34e25813137c4d",
      },
      {
        sha: "259ae84",
        message: "feat: add ensure_dependency() wrapper + ship install.sh in wheel",
        href: "https://github.com/NousResearch/hermes-agent/commit/259ae846c8ae1b84d4cbd2cb1d62c6eefd81957f",
      },
      {
        sha: "b2bf658",
        message: "feat(tui): find bundled entry.js from wheel before falling back to npm build",
        href: "https://github.com/NousResearch/hermes-agent/commit/b2bf658442f413a9a1d24b011589e5e38544947e",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Tools / MCP / Platform — 브라우저 부트스트랩, MCP 보간, Notion 스킬, Yuanbao 인용 미디어, SimpleX Chat",
    category: "Tools / MCP / Plugins",
    summary:
      "ACP에서 --setup-browser로 브라우저 도구를 부트스트랩합니다. MCP 환경변수 정규식이 사전 컴파일되고 보간이 통일됩니다. Yuanbao에서 인용 미디어 참조 추출·폴백이 개선됩니다. Notion 스킬이 Notion Developer Platform(May 2026)에 맞게 개편됩니다. SimpleX Chat 플랫폼 플러그인이 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "85782a4",
        message: "feat(acp): hermes acp --setup-browser bootstraps browser tools for registry installs",
        href: "https://github.com/NousResearch/hermes-agent/commit/85782a4ed7f2329957c4af9a4243acb51c3cf921",
      },
      {
        sha: "55f3262",
        message: "fix(mcp): pre-compile env-var regex and unify interpolation",
        href: "https://github.com/NousResearch/hermes-agent/commit/55f3262e788bdd7dd6adcab1d515d476b6cb9321",
      },
      {
        sha: "42070ec",
        message: "feat(skills/notion): overhaul for Notion Developer Platform (May 2026)",
        href: "https://github.com/NousResearch/hermes-agent/commit/42070ecefb9e9da3adec6d536d130d9dc3b82560",
      },
      {
        sha: "3df26b9",
        message: "feat(yuanbao): prioritize quote media refs over history backfill in DispatchMiddleware",
        href: "https://github.com/NousResearch/hermes-agent/commit/3df26b925cae7761763e43f03978600d175417c5",
      },
      {
        sha: "09d9724",
        message: "feat(gateway): add SimpleX Chat platform plugin",
        href: "https://github.com/NousResearch/hermes-agent/commit/09d9724a09197b1981c318f3c51c55bc52fdfe29",
      },
    ],
  },
];
