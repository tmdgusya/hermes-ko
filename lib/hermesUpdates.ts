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

export const hermesUpdatesLastChecked = "2026-05-06";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-06",
    title: "CLI / Install / Skills: CLI 리사이즈 출력 복구, signal handler logger 보호, pip 진행 상황 표시, install.sh Python 환경 격리 강화, shop-app 쇼핑 어시스턴트 스킬 추가",
    category: "CLI / Install / Skills",
    summary:
      "CLI에서 터미널 리사이즈 후 classic 출력이 정상 복구되도록 수정하고, signal handler 내 logger.debug 호출을 보호(guard)하여 #13710 regression을 해결합니다. `hermes update` 명령어에서 pip --quiet 플래그를 제거하여 느린 설치가 멈춘 것처럼 보이지 않게 합니다. install.sh에서 상속된 Python 환경 변수가 누출되지 않도록 격리(harden) 처리합니다. 선택적(opt-in) 스킬로 shop-app 개인 쇼핑 어시스턴트가 추가되었습니다 (main branch).",
    commits: [
      {
        sha: "b045e7a",
        message: "feat(skills): add shop-app personal shopping assistant (optional) (#20702)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b045e7a2ba2ef6a1449b459e03a8a701eb9c46f0",
      },
      {
        sha: "76074d9",
        message: "fix(cli): recover classic CLI output after resize",
        href: "https://github.com/NousResearch/hermes-agent/commit/76074d9ee6e4d0d2688ae154acda15dbf0a3e287",
      },
      {
        sha: "043a118",
        message: "fix: harden install.sh against inherited Python env leakage",
        href: "https://github.com/NousResearch/hermes-agent/commit/043a118d4128e51480eb228d5085ad0366150c8a",
      },
      {
        sha: "e70e490",
        message: "fix(cli): guard logger.debug in signal handler (#13710 regression) (#20673)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e70e49016fe25bdd0db3b0086e0e0403daeaa834",
      },
      {
        sha: "a6f5f9c",
        message: "fix(update): drop pip --quiet so slow installs don't look hung (#20679)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a6f5f9c484ae63950d600f6c005b055499db62e5",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "TUI / Browser: startup banner 접이식 섹션, 긴 시스템 메시지 접기, FaceTicker·상태 표시줄 안정화, Lightpanda 브라우저 엔진 지원 및 Chrome fallback",
    category: "TUI / Browser",
    summary:
      "TUI startup banner에서 skills·system prompt·MCP 섹션을 접이식(collapsible)으로 전환하고, transcript에서 긴 시스템 메시지를 펼침/접기 토글로 표시합니다. FaceTicker elapsed width를 고정하여 composer drift를 방지하고, duration 앞 공백을 verb segment가 숨겨졌을 때 복원하며, 스크롤 중 status-line 흔들림을 줄입니다. 브라우저에 Lightpanda 엔진 지원이 추가되어 자동 Chrome fallback과 함께 동작하며, fallback 경고를 표시하고 엣지 케이스를 보완합니다 (main branch).",
    commits: [
      {
        sha: "d78c349",
        message: "feat(tui): collapsible sections in startup banner (skills, system prompt, MCP)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d78c34928fe9fd56c4506861a87b4134be20b448",
      },
      {
        sha: "68162eb",
        message: "fix(tui): collapse long system messages in transcript with expand toggle",
        href: "https://github.com/NousResearch/hermes-agent/commit/68162eb18fca0d8dc8dbf4dc1572fe14daf253d9",
      },
      {
        sha: "ca5febf",
        message: "fix(tui): stabilize FaceTicker elapsed width to prevent composer drift",
        href: "https://github.com/NousResearch/hermes-agent/commit/ca5febfed1429ad0e2b1565cfac48b079f5ff94d",
      },
      {
        sha: "a0556b8",
        message: "fix(tui): restore gap before duration when verb segment is hidden",
        href: "https://github.com/NousResearch/hermes-agent/commit/a0556b861f2667a49ded048c9cfac88defff8c5f",
      },
      {
        sha: "e45df2e",
        message: "fix(ui): reduce status-line jitter while scrolling",
        href: "https://github.com/NousResearch/hermes-agent/commit/e45df2e81ec818d2fb6767c0ba4eb29ed573a799",
      },
      {
        sha: "395dbcc",
        message: "feat(browser): add Lightpanda engine support with automatic Chrome fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/395dbcc873c85b8873f4e36ff91b87c739bed242",
      },
      {
        sha: "3ebdd26",
        message: "fix(browser): surface Lightpanda Chrome fallback warnings",
        href: "https://github.com/NousResearch/hermes-agent/commit/3ebdd26449dc3d4f5c92e1af96b880d2ddc067d4",
      },
      {
        sha: "629d8b8",
        message: "fix(browser): tighten Lightpanda fallback edge cases",
        href: "https://github.com/NousResearch/hermes-agent/commit/629d8b843d8d8507925fd35344f57de776cb1490",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "Kanban: dependency selects, task_runs.summary 표시, 부모 완료 전 자식 디스패치 방지, runtime 측정, 완료 태스크의 created_cards 연결, failure counter 통합, Kanban worker tools runtime-gated 처리, 코드 요소 배경 초기화",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 dependency selects를 연결(wire)하고, 대시보드 카드와 `kanban show` 명령어에 task_runs.summary를 표시합니다. 부모 작업이 완료되지 않은 상태에서 자식 작업이 디스패치되는 것을 방지하고, 작업의 max runtime을 current run 기준으로 측정합니다. 완료되는 태스크에 연결된 created_cards를 자식으로 수락(accept)합니다. spawn/timeout/crash 전반에서 failure counter를 통합하여 일관된 실패 추적을 제공합니다. doctor 명령어에서 Kanban worker tools를 runtime-gated로 보고하며, 보드 내 인라인 코드 요소의 배경을 초기화하여 표시를 정리합니다 (main branch).",
    commits: [
      {
        sha: "1768791",
        message: "fix(kanban): reset code element background inside board",
        href: "https://github.com/NousResearch/hermes-agent/commit/17687911b7c57a2357123c05ab3265d820b5e6d6",
      },
      {
        sha: "a49670c",
        message: "fix(kanban): wire dependency selects",
        href: "https://github.com/NousResearch/hermes-agent/commit/a49670c21b3deb8384fd2069142be2040aa71187",
      },
      {
        sha: "3f97297",
        message: "feat(kanban): surface task_runs.summary on dashboard cards + `kanban show`",
        href: "https://github.com/NousResearch/hermes-agent/commit/3f972974133659a366f5d63b01423a4709c507b3",
      },
      {
        sha: "d2c6ece",
        message: "fix(kanban): prevent child task dispatch when parent is not done",
        href: "https://github.com/NousResearch/hermes-agent/commit/d2c6eceed98d2f276240553269f630c952e022c9",
      },
      {
        sha: "b28ab4f",
        message: "fix(kanban): measure max runtime from current run",
        href: "https://github.com/NousResearch/hermes-agent/commit/b28ab4fc3fab1725be11c86c44ec0b09c32557e2",
      },
      {
        sha: "6d302b3",
        message: "fix(kanban): accept created_cards linked as child of completing task",
        href: "https://github.com/NousResearch/hermes-agent/commit/6d302b340e99e85e417f1bcc7d7aa498066ab2b4",
      },
      {
        sha: "1fc8733",
        message: "fix(kanban): unify failure counter across spawn/timeout/crash outcomes (#20410)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1fc8733a698664441d923408f66eaa307d44dd9a",
      },
      {
        sha: "eda326d",
        message: "fix(doctor): report Kanban worker tools as runtime-gated",
        href: "https://github.com/NousResearch/hermes-agent/commit/eda326df160acf94c9aff362c86504391265b4ed",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "Models / i18n / Provider: grok-4.3·deepseek-v4-pro·Arcee Trinity Large Thinking 모델 추가, 프랑스어·터키어·우크라이나어 로케일 지원, 터키어 로케일 참조 보강",
    category: "Models / i18n / Provider",
    summary:
      "OpenRouter 및 Nous Portal 큐레이션 목록에 x-ai/grok-4.3과 deepseek/deepseek-v4-pro 모델이 추가되었습니다. Arcee Trinity Large Thinking 모델에 temperature 및 compression 오버라이드가 적용됩니다. 프랑스어(fr), 터키어(tr), 우크라이나어(uk) 로케일 지원이 추가되며, config·tests·docs 전반에 걸쳐 터키어 로케일 참조가 보강되었습니다. /model 명령어의 커스텀 별칭(alias) 문서화도 함께 진행되었습니다 (main branch).",
    commits: [
      {
        sha: "f27fcb6",
        message: "feat(models): add x-ai/grok-4.3 to OpenRouter + Nous Portal curated lists (#20497)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f27fcb6a82b8487174ca941c15e7a5887371eede",
      },
      {
        sha: "477e4a2",
        message: "feat(models): add deepseek/deepseek-v4-pro to OpenRouter + Nous Portal curated lists (#20495)",
        href: "https://github.com/NousResearch/hermes-agent/commit/477e4a2fe6d0cb82fdb689f2302e58b4e9e1d566",
      },
      {
        sha: "2d4eaed",
        message: "arcee temperature + compression",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d4eaed1117caccd98f34a9f48684995a6e313df",
      },
      {
        sha: "9851338",
        message: "feat(i18n): add Turkish (tr) locale",
        href: "https://github.com/NousResearch/hermes-agent/commit/985133852a22863c3995424c657fd8cf4ac2938f",
      },
      {
        sha: "c4b287b",
        message: "feat(i18n): add Ukrainian locale",
        href: "https://github.com/NousResearch/hermes-agent/commit/c4b287ba539de06f79b867319568a4aa8c02a5ac",
      },
      {
        sha: "0d41e94",
        message: "feat(i18n): add French (fr) locale support",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d41e94ca99ca873148081e597fabf5d339f267b",
      },
      {
        sha: "39f451f",
        message: "fix: add Turkish locale references in config, tests, and docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/39f451f5ada6546a12fefd97397faca189d0169c",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "Agent 안정성 / ACP / API: salvage batch 압축·메모리·캐시 개선, Hindsight append·dedupe, SSE token batching, ACP reasoning 보존·atomic rewrite, compression context",
    category: "Agent 안정성",
    summary:
      "salvage batch에서 compaction guidance, memory authority, cache eviction after compression이 개선되었습니다. Hindsight에서 update_mode='append' 지원 여부를 probe하고 프로세스 간 dedupe를 수행합니다. API Server에서 SSE token batching과 Open WebUI 성능 개선을 위한 오류 처리가 추가되었습니다. ACP에서 session persistence 시 assistant reasoning metadata를 보존하고, SessionDB.replace_messages로 atomic history rewrite를 수행합니다. run_agent에서 compression context length 조회 시 aux provider를 사용합니다 (main branch).",
    commits: [
      {
        sha: "aa88dcc",
        message: "fix: salvage batch — compaction guidance, memory authority, cache eviction after compression",
        href: "https://github.com/NousResearch/hermes-agent/commit/aa88dcc57b1717cbcfb80e4eca580a3a77056702",
      },
      {
        sha: "3082fa0",
        message: "feat(hindsight): probe API for update_mode='append' support, dedupe across processes",
        href: "https://github.com/NousResearch/hermes-agent/commit/3082fa0829e0df4ce682358481fb59275b31a46e",
      },
      {
        sha: "3188e63",
        message: "fix(api_server): SSE token batching + error handling for Open WebUI performance",
        href: "https://github.com/NousResearch/hermes-agent/commit/3188e63b05a1902baecfcd7c30da3301d74b8737",
      },
      {
        sha: "e8e9147",
        message: "fix(acp): preserve assistant reasoning metadata in session persistence",
        href: "https://github.com/NousResearch/hermes-agent/commit/e8e91473774b9ceaced12920207c3c72700c9e8b",
      },
      {
        sha: "5795b3b",
        message: "fix(acp): use SessionDB.replace_messages for atomic history rewrite",
        href: "https://github.com/NousResearch/hermes-agent/commit/5795b3be4e2aa5a840ce810925e3e88e3370f4f0",
      },
      {
        sha: "c46bc92",
        message: "fix(run_agent): use aux provider for compression context length lookup",
        href: "https://github.com/NousResearch/hermes-agent/commit/c46bc9294991929a3dc8f6c28111c3e7780406a2",
      },
    ],
  },
  {
    date: "2026-05-05 ~ 2026-05-06",
    title: "Gateway / State: lazy session regression 해결, kanban worker lifecycle 보호, kanban.max_spawn 동시성 제한, deterministic thread eviction, JSONL 직렬화 잠금, pending prompts 보존, model picker context 유지",
    category: "Gateway / State",
    summary:
      "lazy session creation regression(#18370 fallout)을 해결합니다. Gateway에서 kanban worker lifecycle을 run id 기준으로 보호(guard)하고, kanban.max_spawn config를 존중하여 동시 작업 수를 제한합니다. helpers의 thread eviction을 결정적(deterministic)으로 보장하고, session에서 JSONL transcript appends를 기존 잠금 아래에서 직렬화(serialize)하며, 재시작 간 pending update prompts를 보존합니다. model picker에서 현재 컨텍스트를 보존합니다 (main branch).",
    commits: [
      {
        sha: "3b75071",
        message: "fix: resolve lazy session creation regressions (#18370 fallout) (#20363)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b750715a39ed8a96fe90dc4f7a5b7b2ff9b794e",
      },
      {
        sha: "56b4795",
        message: "guard kanban worker lifecycle by run id",
        href: "https://github.com/NousResearch/hermes-agent/commit/56b4795115e309b8d65bc68729fc591e90e6ffaa",
      },
      {
        sha: "f0d2784",
        message: "feat(gateway): respect kanban.max_spawn config to limit concurrent tasks",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0d278412f8c14e94a11678be424f6a6ddb79fa2",
      },
      {
        sha: "247c9d4",
        message: "fix(gateway): ensure deterministic thread eviction in helpers",
        href: "https://github.com/NousResearch/hermes-agent/commit/247c9d468c5ba0ccaf2e01fbc39c6eede7bda392",
      },
      {
        sha: "ecc909d",
        message: "fix(session): serialize JSONL transcript appends under existing lock",
        href: "https://github.com/NousResearch/hermes-agent/commit/ecc909de38f2fa8b014060711cb252c096d3f1fb",
      },
      {
        sha: "8ad5e98",
        message: "fix(gateway): preserve pending update prompts across restarts",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ad5e98f8d433e6e302355c77e22931f7a047eea",
      },
      {
        sha: "466f3a1",
        message: "fix(gateway): preserve model picker current context",
        href: "https://github.com/NousResearch/hermes-agent/commit/466f3a11de47b50a65230cfb019265603a5adb01",
      },
    ],
  },
  {
    date: "2026-05-05 ~ 2026-05-06",
    title: "Docs: 중국어 README·zh-Hans 가이드, Ollama 로컬 실행, VS Code ACP 연동, 모델 별칭, WSL Chrome MCP 브릿지 등 대규모 문서화",
    category: "Docs",
    summary:
      "중국어(zh-CN) README 번역과 zh-Hans Tool Gateway·이미지 생성·Windows WSL 가이드가 추가되어 중국어 사용자 지원이 대폭 강화되었습니다. Ollama로 Hermes를 로컬 실행하는 가이드, Open WebUI 부트스트랩 스크립트, VS Code ACP Client 연동 설정 가이드가 추가되었습니다. /model 명령어의 커스텀 모델 별칭(alias) 문서, WSL 환경에서 Windows Chrome MCP 브릿지 구성 가이드가 포함됩니다. 그 외 Doubao 음성 통합(TTS+STT), Obsidian 파일 워크플로우 현대화, Discord Server Members Intent·SSRC-mapping·음성 슬래시 선택, Telegram 그룹 채팅 트러블슈팅, Codex OAuth 사전 요구사항, Kanban handoff evidence 메타데이터, Gateway 의존성 FAQ 등 다양한 문서가 업데이트되었습니다 (main branch).",
    commits: [
      {
        sha: "05cdcac",
        message: "docs: add Chinese (zh-CN) README translation",
        href: "https://github.com/NousResearch/hermes-agent/commit/05cdcac36240df5ef1348f7f527cc3e1a341282d",
      },
      {
        sha: "74e4f5f",
        message: "docs(i18n): add zh-Hans Tool Gateway, image gen, and Windows WSL guide",
        href: "https://github.com/NousResearch/hermes-agent/commit/74e4f5f97aca5471cfa0b595aa94e1a10e5f3b4e",
      },
      {
        sha: "9a0a4c5",
        message: "docs(guides): add guide for running Hermes locally with Ollama",
        href: "https://github.com/NousResearch/hermes-agent/commit/9a0a4c5831256551394c3ca99c3913653ea53691",
      },
      {
        sha: "0d945d1",
        message: "docs: update VS Code setup instructions for ACP Client integration",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d945d1541eece83efa3f19bf9fc3550e55a32e6",
      },
      {
        sha: "e598e18",
        message: "docs: document custom model aliases for /model command (#20475)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e598e18529c02116da5716728d48697f2c82a129",
      },
      {
        sha: "a11234d",
        message: "docs(browser): document WSL-to-Windows Chrome MCP bridge",
        href: "https://github.com/NousResearch/hermes-agent/commit/a11234dd68107228f7f4c9f2b8c3eea3de7aa31a",
      },
      {
        sha: "1c42d8f",
        message: "docs: add Open WebUI bootstrap script",
        href: "https://github.com/NousResearch/hermes-agent/commit/1c42d8ff5307849b3c450a5536f641739e220227",
      },
    ],
  },
];
