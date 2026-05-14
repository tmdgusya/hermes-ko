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

export const hermesUpdatesLastChecked = "2026-05-15"; // last new commit: 2026-05-14

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-14",
    title: "Tools / MCP / Plugins — 웹 검색 플러그인 아키텍처 도입 및 7-provider 마이그레이션·레거시 완전 제거",
    category: "Tools / MCP / Plugins",
    summary:
      "image_gen 패턴을 따르는 WebSearchProvider ABC가 도입되고 레지스트리가 추가됩니다. ctx.register_web_search_provider() 파사드가 추가되고, ABC에 supports_crawl 및 async-extract 시맨틱이 확장됩니다. brave_free·ddgs·searxng·exa·parallel·firecrawl·tavily 7개 프로바이더가 플러그인으로 마이그레이션됩니다. 레거시 tools/web_providers/ 디렉토리와 인라인 벤더 헬퍼가 완전 삭제되어 플러그인이 유일한 소스가 됩니다. 마이그레이션 후 firecrawl crawl·website-policy gate·error envelope가 보존되고, 7-plugin 테스트 커버리지가 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "2cea98e",
        message: "feat(web): add WebSearchProvider ABC mirroring image_gen template",
        href: "https://github.com/NousResearch/hermes-agent/commit/2cea98e143b4016b277fb3221728e3efbb4c0cc4",
      },
      {
        sha: "f29f02a",
        message: "feat(plugins): add ctx.register_web_search_provider() facade",
        href: "https://github.com/NousResearch/hermes-agent/commit/f29f02a73fd021bc8a9ee14f0aaf176e46ce1a5f",
      },
      {
        sha: "d403cf0",
        message: "feat(web): brave_free plugin (first migration from tools/web_providers/)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d403cf018c8e6a887e5b867bf6de76cc4aadacd9",
      },
      {
        sha: "31fcde8",
        message: "feat(web): tavily plugin — first three-capability plugin (search + extract + crawl)",
        href: "https://github.com/NousResearch/hermes-agent/commit/31fcde876c3730c33a53541931ad073e705cdfef",
      },
      {
        sha: "39b4ebf",
        message: "refactor(web): delete legacy tools/web_providers/ directory + migrate ABC tests",
        href: "https://github.com/NousResearch/hermes-agent/commit/39b4ebfceaeeb56d1c197dd22028053e5c2c1190",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Gateway / State — QQBot·Feishu·이미지 첨부 전달·multi-choice clarify·MCP 인증·ACP 승인·PID",
    category: "Gateway / State",
    summary:
      "QQBot 재연결 루프가 유지되도록 수정됩니다. Feishu WebSocket connect 오버라이드가 동기화되어 컨텍스트 매니저가 보존됩니다. 백그라운드 에이전트 태스크에 이미지 첨부가 전달됩니다. multi-choice clarify fallback에 text-intercept가 활성화됩니다. 초기 MCP 인증 실패 시 재시도가 중지됩니다. 프로바이더 간 위임 시 api_mode가 상승되지 않도록 수정됩니다. ACP approval bridging이 간소화됩니다. Windows에서 gateway PID 탐지 실패가 수정됩니다 (main branch 기준).",
    commits: [
      {
        sha: "8199ec3",
        message: "fix(gateway): keep QQBot reconnect loop alive",
        href: "https://github.com/NousResearch/hermes-agent/commit/8199ec38034a675a20278261b76cf0fe42316a7d",
      },
      {
        sha: "71191b7",
        message: "fix(gateway): make Feishu ws connect override sync to preserve context manager",
        href: "https://github.com/NousResearch/hermes-agent/commit/71191b7e8e075037a814f77d37d4609e97f12029",
      },
      {
        sha: "3adde24",
        message: "fix(gateway): forward image attachments to background agent tasks",
        href: "https://github.com/NousResearch/hermes-agent/commit/3adde245b72cd19061d413993c4a56138a023295",
      },
      {
        sha: "1247ff2",
        message: "fix: stop retrying initial MCP auth failures",
        href: "https://github.com/NousResearch/hermes-agent/commit/1247ff2dca0dbc68957ee4ad153aa34f165a184d",
      },
      {
        sha: "fd9c150",
        message: "fix: gateway PID detection fails on Windows (two issues)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fd9c1504da51f204506d0b37ec592d5bed059504",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Agent 안정성 — /subgoal·MiMo·컨텍스트 압축·codex-runtime watchdog·클립보드 PNG·auxiliary·Gemini 스트림",
    category: "Agent 안정성",
    summary:
      "활성 /goal에 사용자 추가 기준을 덧붙이는 /subgoal 명령어가 도입됩니다. Xiaomi MiMo가 reasoning_content echo-back 프로바이더에 추가됩니다. 컨텍스트 압축 상태가 표시됩니다. Gemini CloudCode reasoning-only 스트림 청크에 seed delta 기본값이 설정됩니다. codex-runtime에서 wedged session이 retired되고 post-tool watchdog과 OAuth refresh classify가 추가됩니다. 클립보드 PNG 시그니처 읽기와 non-PNG 거부가 수정됩니다. 자격 증명 없는 프로바이더가 즉시 스킵되고, auxiliary compression model에 custom_providers가 전달됩니다. AUTOINCREMENT id로 메시지 정렬이 보장됩니다. CLI approval callback에서 approvals.timeout이 config에서 읽힙니다. 스킨 YAML 파싱이 강화되고 background-review teardown 누수가 방지됩니다. hermes update 시 lazy-installed backend가 새로고침됩니다 (main branch 기준).",
    commits: [
      {
        sha: "8f19078",
        message: "feat(goals): /subgoal — user-added criteria appended to active /goal (#25449)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8f19078c6ad72300676376f5824fcf50cd9b693b",
      },
      {
        sha: "12f755c",
        message: "fix(codex-runtime): retire wedged sessions + post-tool watchdog + OAuth refresh classify (#25769)",
        href: "https://github.com/NousResearch/hermes-agent/commit/12f755c9eb56a7927065c305699fc983bc1d998a",
      },
      {
        sha: "26933c2",
        message: "fix(agent/gemini-cloudcode): seed delta defaults for reasoning-only stream chunks",
        href: "https://github.com/NousResearch/hermes-agent/commit/26933c2f592bda25df735c555620a2a978cfefb6",
      },
      {
        sha: "c03acca",
        message: "fix: use AUTOINCREMENT id for message ordering instead of timestamp",
        href: "https://github.com/NousResearch/hermes-agent/commit/c03acca508bd06c78761af2653ebef1a1448b307",
      },
      {
        sha: "72b5dd8",
        message: "fix(update): refresh lazy-installed backends on hermes update (#25766)",
        href: "https://github.com/NousResearch/hermes-agent/commit/72b5dd865865f2d2c9f5b492bcac9dcdaf045d34",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "채널 통합 — Discord clarify 버튼·메시지 전달, WhatsApp 인용 메타데이터, Telegram 마크다운·모델 전환",
    category: "채널 통합",
    summary:
      "Discord에서 clarify 선택지가 버튼으로 렌더링됩니다. Discord에서 message_snapshots를 통해 전달된 메시지가 처리됩니다. WhatsApp에서 인용된 답글 메타데이터가 노출됩니다. Telegram에서 동적 마크다운이 callback flow에서 이스케이프됩니다. Telegram에서 모델 전환 성공 경로가 복원됩니다 (main branch 기준).",
    commits: [
      {
        sha: "1dca6a6",
        message: "feat(discord): render clarify choices as buttons",
        href: "https://github.com/NousResearch/hermes-agent/commit/1dca6a6960f87b07a7d270893ac35211c97913c8",
      },
      {
        sha: "b59ed9c",
        message: "fix(discord): handle forwarded messages via message_snapshots",
        href: "https://github.com/NousResearch/hermes-agent/commit/b59ed9c6bc564e1158875dc795141405c4ed927d",
      },
      {
        sha: "bd33a48",
        message: "feat(whatsapp): surface quoted reply metadata",
        href: "https://github.com/NousResearch/hermes-agent/commit/bd33a48a5839f235f17ffa1cc2542852ce55067f",
      },
      {
        sha: "a694040",
        message: "fix(telegram): escape dynamic markdown in callback flows",
        href: "https://github.com/NousResearch/hermes-agent/commit/a6940405201e9642df24ceb7a799347ca002c9b2",
      },
      {
        sha: "26deeea",
        message: "fix(telegram): restore model-switch success path + author map",
        href: "https://github.com/NousResearch/hermes-agent/commit/26deeea830eb4a4aa39651fd7b2fbb523eb2a78d",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Config / Docs — NovitaAI LLM 프로바이더, honcho 프로파일, model 키 교체, 미디어 컨텍스트 문서, AUTHOR_MAP",
    category: "Config / Docs",
    summary:
      "NovitaAI가 새로운 LLM 프로바이더로 추가되고, '90+ models, pay-per-use' 설명과 캐시 가격·테스트 커버리지가 추가됩니다. hermes model flow에서 고장난 OpenRouter/AI Gateway 키 교체가 허용됩니다. honcho의 HOME-기반 기본 프로파일 폴백이 존중됩니다. 미디어가 세션 컨텍스트에 미치는 영향에 대한 문서가 추가됩니다. LSP 문서와 tirith 링크가 수정됩니다. 25-PR 신규 기여자와 oswaldb22, mrshu에 대한 AUTHOR_MAP 항목이 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "c76e879",
        message: "feat: add NovitaAI as LLM provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/c76e8795744a00208c683b2c6319902416bce1a8",
      },
      {
        sha: "17e0e9d",
        message: "fix(cli): allow rotating broken OpenRouter / AI Gateway key in `hermes model` flow (#25750)",
        href: "https://github.com/NousResearch/hermes-agent/commit/17e0e9d174b22c55d02db42c8ada5a035b220a57",
      },
      {
        sha: "d18618f",
        message: "fix(honcho): respect HOME-anchored default profile fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/d18618f48f18c0af5c4bba889a087557ab53a6df",
      },
      {
        sha: "1dd3398",
        message: "docs: clarify media impact on session context",
        href: "https://github.com/NousResearch/hermes-agent/commit/1dd33988e26d8f16fb752b3c014a8509b2db569e",
      },
      {
        sha: "d8fdec1",
        message: "chore(release): add AUTHOR_MAP entries for second new-contributor batch",
        href: "https://github.com/NousResearch/hermes-agent/commit/d8fdec16d5a2a50e5463351af073e4401b6ed0ed",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "설치 / 보안 — .env 권한 제한, Windows install.ps1, pip 엔트리 포인트 보존, 터미널 safety filter",
    category: "설치 / 보안",
    summary:
      ".env 파일 권한이 0600으로 제한됩니다. Windows install.ps1에서 uv sync가 venv에 고정되고 기본 import가 검증됩니다. symlinked install 재실행 시 pip entry point가 보존됩니다. 터미널 safety filter에서 따옴표 안의 키워드에 대한 오탐이 방지됩니다. OpenViking 업로드에서 심볼릭 링크가 스킵됩니다 (main branch 기준).",
    commits: [
      {
        sha: "a952ca3",
        message: "fix: restrict .env file permissions to 0600",
        href: "https://github.com/NousResearch/hermes-agent/commit/a952ca3ff6af24f867737094d2d13ab2a3ba3bbe",
      },
      {
        sha: "524490a",
        message: "fix(install.ps1): pin uv sync to venv\\, verify baseline imports on Windows (#25755)",
        href: "https://github.com/NousResearch/hermes-agent/commit/524490a40937c2a74d7969842a31acaba8d11124",
      },
      {
        sha: "c75e1a0",
        message: "fix(install): preserve pip entry point when re-running on symlinked install",
        href: "https://github.com/NousResearch/hermes-agent/commit/c75e1a03f9dacd96f5b822ef2102789c926059e7",
      },
      {
        sha: "364ddd4",
        message: "fix(terminal): prevent safety filter false positives on keywords inside quoted strings",
        href: "https://github.com/NousResearch/hermes-agent/commit/364ddd45e8dbfbcdf365794e7ca8e3a3e49de100",
      },
      {
        sha: "63991bb",
        message: "fix(memory): skip OpenViking upload symlinks",
        href: "https://github.com/NousResearch/hermes-agent/commit/63991bbd9751015f459dbb27e0440b14c1c77e3a",
      },
    ],
  },
];
