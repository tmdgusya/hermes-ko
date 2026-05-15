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
    title: "Agent 안정성 — Delegate 하트비트, 비동기 코루틴 정리, Windows 파일 잠금 TOCTOU, 플랫폼 서킷 브레이커, 세션 영속화",
    category: "Agent 안정성",
    summary:
      "delegate 하트비트 스레드 join 가드와 try 블록 이동으로 고아 스레드가 방지됩니다. 모든 threadsafe bridge에서 스케줄되지 않은 코루틴이 정리됩니다. Windows 파일 잠금 TOCTOU 경쟁이 제거됩니다. gateway가 플랫폼 장애 시 서킷 브레이커로 계속 실행되고 auto-reset 상태가 재시작 간 영속화됩니다. doctor가 템플릿 누락 시 기본 설정을 생성합니다 (main branch 기준).",
    commits: [
      {
        sha: "2d7182f",
        message: "fix(delegate): move heartbeat thread start inside try block to prevent orphan",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d7182f72c398496db60de5c18f8554d7ecc6d82",
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
        sha: "518f395",
        message: "fix(gateway): keep running when platforms fail; add per-platform circuit breaker + /platform",
        href: "https://github.com/NousResearch/hermes-agent/commit/518f39557b6753a5dc766a05dd14dd5cf2b9edeb",
      },
      {
        sha: "e0e7397",
        message: "fix(session): persist auto-reset state across gateway restarts",
        href: "https://github.com/NousResearch/hermes-agent/commit/e0e7397c32fa06e4c93ce07bc276ea5c1dca7a84",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "ACP / Auth / xAI — todo 플랜 리플레이·이밋, Grok OAuth, SSH OAuth 터널 안내, NIM 빌링, env 플래그",
    category: "ACP / Auth",
    summary:
      "ACP에서 네이티브 todo 플랜 업데이트가 이밋되고 리플레이됩니다. xAI Grok OAuth(SuperGrok Subscription) 제공자가 추가되고 CORS 허용 목록이 정리됩니다. SSH OAuth 사용자가 필요한 터널을 정확히 안내받고 NVIDIA NIM 빌링 origin 헤더가 추가됩니다. env 플래그 검사가 확장되고 cronjob이 명시적 세션 환경변수를 요구합니다 (main branch 기준).",
    commits: [
      {
        sha: "bd3a587",
        message: "fix(acp): replay native todo plans",
        href: "https://github.com/NousResearch/hermes-agent/commit/bd3a5873e11f084d74be876a505a406224a6ef3e",
      },
      {
        sha: "b62c997",
        message: "feat(xai-oauth): add xAI Grok OAuth (SuperGrok Subscription) provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/b62c9979732c732480491c63a4399034f668a44f",
      },
      {
        sha: "3b9368a",
        message: "fix(auth): point SSH OAuth users at the tunnel they actually need",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b9368a0c47176b449ea0254cdac31ec4d5ae925",
      },
      {
        sha: "13c3d4b",
        message: "feat(nvidia): add NIM billing origin header",
        href: "https://github.com/NousResearch/hermes-agent/commit/13c3d4b4efa2f39d7bc3178cf3eca77167ff7699",
      },
      {
        sha: "734aa0f",
        message: "fix(cronjob): require explicit truthy session env values",
        href: "https://github.com/NousResearch/hermes-agent/commit/734aa0f367a5ace259e4c35d7b002b634a3149ae",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Tools / MCP / Platform — 브라우저 부트스트랩, MCP 보간, Yuanbao 인용 미디어, Notion 스킬, uvx 전환, SimpleX Chat",
    category: "Tools / MCP / Plugins",
    summary:
      "ACP에서 --setup-browser로 브라우저 도구를 부트스트랩합니다. MCP 환경변수 정규식이 사전 컴파일되고 보간이 통일됩니다. Yuanbao에서 인용 미디어 참조 추출·폴백이 개선됩니다. Notion 스킬이 Notion Developer Platform(May 2026)에 맞게 개편됩니다. ACP Registry가 uvx 배포로 전환되고 SimpleX Chat 플랫폼 플러그인이 추가됩니다 (main branch 기준).",
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
  {
    date: "2026-05-15",
    title: "CLI / TUI — YOLO 모드 경고, CJK/IME 렌더링, 백그라운드 알림, 스크롤백·라이트모드 수정",
    category: "CLI / TUI",
    summary:
      "YOLO 모드 시 배너와 상태 표시줄에 경고가 표시됩니다. fast-echo 바이패스가 ASCII로 제한되어 베트남어/CJK/IME 입력이 올바르게 렌더링됩니다. 자율 백그라운드 프로세스 완료 알림이 지원됩니다. 리사이즈 시 스크롤백 중복 및 라이트 모드 가시성이 수정됩니다 (main branch 기준).",
    commits: [
      {
        sha: "b6e0741",
        message: "feat(cli): show YOLO mode warning in banner and status bar",
        href: "https://github.com/NousResearch/hermes-agent/commit/b6e07417c5242f7a3d6af1c8d8f0173248b4253f",
      },
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
        sha: "f8745f5",
        message: "fix(cli): kill resize scrollback duplication + light-mode visibility",
        href: "https://github.com/NousResearch/hermes-agent/commit/f8745f59c2738025a02ca161307f4dcbfd0eb34a",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Messaging / Docs — Slack 명령어 가드, WhatsApp 빠른 실패, Cron 이름 조회, Goals 판정 확장, Langfuse, 문서 업데이트",
    category: "Messaging / Docs",
    summary:
      "Slack에서 공백만 있는 명령어 텍스트에 가드가 추가됩니다. WhatsApp Baileys sendMessage 멈춤에 빠른 실패가 추가됩니다. Cron 작업 이름 기반 조회가 지원됩니다. Goals 판정 max_tokens가 200→4096으로 확장됩니다. Langfuse 관측성이 완전히 연결되고 pip 설치·postinstall·OAuth-over-SSH 관련 문서가 업데이트됩니다 (main branch 기준).",
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
        sha: "db84a78",
        message: "fix(langfuse): complete observability fix — trace I/O, tool outputs, placeholder credentials",
        href: "https://github.com/NousResearch/hermes-agent/commit/db84a78e618bf973ffc403ed2e1f8162f2591daa",
      },
    ],
  },
];
