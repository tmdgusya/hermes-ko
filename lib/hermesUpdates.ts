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

export const hermesUpdatesLastChecked = "2026-05-07";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-06",
    title: "Web Search / Feishu: SearXNG 네이티브 검색 백엔드 추가, searxng-search 선택적 스킬 및 문서, Feishu 토픽 스레드 응답 유지",
    category: "Web / Search / Integrations",
    summary:
      "웹 검색에 SearXNG를 네이티브 검색 전용 백엔드로 추가하고, per-capability 백엔드 선택 리팩터링과 함께 동작합니다. searxng-search 선택적(opt-in) 스킬과 문서가 추가되었으며, SearXNG 설정 가이드를 포함한 웹 검색·추출(Web Search + Extract) 기능 페이지가 문서화되었습니다. Feishu에서 토픽 응답이 스레드 내에 유지되도록 수정하고 관련 후속 정리를 진행합니다 (main branch).",
    commits: [
      {
        sha: "5c906d7",
        message: "feat(web): add SearXNG as a native search-only backend",
        href: "https://github.com/NousResearch/hermes-agent/commit/5c906d70266c1bbce88fd227ea98a3f7646551fe",
      },
      {
        sha: "94016dd",
        message: "docs+skill: add searxng-search optional skill and documentation",
        href: "https://github.com/NousResearch/hermes-agent/commit/94016dd1aa7eac05765bdebf8de0838d76402dc0",
      },
      {
        sha: "48c2418",
        message: "docs: add Web Search + Extract feature page with SearXNG setup guide",
        href: "https://github.com/NousResearch/hermes-agent/commit/48c241840aa21a9b727a7efde4e4e371416d9ad3",
      },
      {
        sha: "441ef75",
        message: "fix(feishu): keep topic replies in threads",
        href: "https://github.com/NousResearch/hermes-agent/commit/441ef75d157d6308a9f14d42a7b0ec8566866ef8",
      },
      {
        sha: "28299af",
        message: "chore: follow-up cleanup for Feishu topic thread fix",
        href: "https://github.com/NousResearch/hermes-agent/commit/28299afc21a37784d93b90924317f004ea2298af",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "CLI·UI / 브라우저·대시보드 / 설치·스킬 / CI: voice push-to-talk 패리티 복원·transcript 스크롤바 안정화, TUI skin 하이라이트·가상 오프셋 갱신·thin PTY Submit, Docker CI 중복 빌드 방지, 접이식 섹션·시스템 메시지 접기, Lightpanda 브라우저·Chrome fallback, 'default-large' 테마, Linear·shop-app 스킬, install.sh Python 격리, typecheck CI, 웹 검색·추출 백엔드 분리, FaceTicker·상태 표시줄 안정화",
    category: "CLI / UI / Browser / Dashboard / Install / Skills / CI",
    summary:
      "TUI에서 음성 push-to-talk 패리티(parity)를 복원하여 음성 입력 동작을 수정하고, transcript 스크롤바를 안정화(steady)하여 흔들림을 줄입니다. TUI에서 skin 하이라이트 색상을 준수(honor)하고, row resize 이후 가상 오프셋을 갱신하며, thin PTY에서 LF Enter submit을 정상 처리합니다. Docker CI에서 중복 빌드 취소를 방지하고 :latest 태그를 가드합니다. TUI에서 virtual history offset 검색 범위를 제한(bound)하고, startup banner에서 skills·system prompt·MCP 섹션을 접이식(collapsible)으로 전환하며, transcript에서 긴 시스템 메시지를 펼침/접기 토글로 표시합니다. FaceTicker elapsed width를 고정하여 composer drift를 방지하고, duration 앞 공백을 verb segment가 숨겨졌을 때 복원하며, 스크롤 중 status-line 흔들림을 줄입니다. 브라우저에 Lightpanda 엔진 지원이 추가되어 자동 Chrome fallback과 함께 동작하며, fallback 경고를 표시하고 엣지 케이스를 보완합니다. 대시보드에 18px 기본 폰트 크기의 'default-large' 빌트인 테마가 추가되고, 웹 검색·추출 기능이 기능별(capability) 백엔드 선택 방식으로 리팩터링됩니다. CLI에서 터미널 리사이즈 후 classic 출력이 정상 복구되도록 수정하고, signal handler 내 logger.debug 호출을 보호(guard)하여 #13710 regression을 해결합니다. `hermes update` 명령어에서 pip --quiet 플래그를 제거하여 느린 설치가 멈춘 것처럼 보이지 않게 합니다. install.sh에서 상속된 Python 환경 변수가 누출되지 않도록 격리(harden) 처리합니다. Linear 스킬에 Documents 지원 및 Python 헬퍼 스크립트가 추가되었습니다. 선택적(opt-in) 스킬로 shop-app 개인 쇼핑 어시스턴트가 추가되었습니다. 긴 슬래시 명령어가 ENAMETOOLONG으로 드롭되는 것을 방지하기 위해 _resolve_attachment_path에서 OSError를 catch합니다. CI에 typecheck가 warnings-only로 추가되고 ruff/ty가 활성화됩니다 (main branch).",
    commits: [
      {
        sha: "04cf478",
        message: "fix(tui): restore voice push-to-talk parity (#20897)",
        href: "https://github.com/NousResearch/hermes-agent/commit/04cf4788ccc05003785992682e3cb25205e509cc",
      },
      {
        sha: "5ccab51",
        message: "fix(tui): steady transcript scrollbar (#20917)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5ccab51fa851d258da69ab12912657ec14bf3bc8",
      },
      {
        sha: "f1a8e99",
        message: "fix(tui): honor skin highlight colors (#20895)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f1a8e99942e6150d5785bdd734c4d9ff63dfa7f7",
      },
      {
        sha: "da60198",
        message: "fix(tui): refresh virtual offsets after row resize (#20898)",
        href: "https://github.com/NousResearch/hermes-agent/commit/da6019820a916ff7b6b89fa0fba2cccf700554d6",
      },
      {
        sha: "5044e1c",
        message: "fix(cli): submit LF enter in thin PTYs (#20896)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5044e1cbf135af1a999935c6d141e137d60d5d1b",
      },
      {
        sha: "f4031df",
        message: "ci(docker): don't cancel overlapping builds, guard :latest",
        href: "https://github.com/NousResearch/hermes-agent/commit/f4031df05dd457ad6ae17aff6a89848384447013",
      },
      {
        sha: "946ef0e",
        message: "fix(tui): bound virtual history offset searches",
        href: "https://github.com/NousResearch/hermes-agent/commit/946ef0ea19c9b898037f5e6178d8961ab260f079",
      },
      {
        sha: "6388aaf",
        message: "feat(dashboard): add 'default-large' built-in theme with 18px base size (#20820)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6388aafbd6cbfd22c26036291d884d4055b5f6bc",
      },
      {
        sha: "cd2cbc7",
        message: "refactor(web): per-capability backend selection for search/extract split",
        href: "https://github.com/NousResearch/hermes-agent/commit/cd2cbc73b7c56f0c19f41a6bb21808239078653c",
      },
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
      {
        sha: "ad7aad2",
        message: "feat(skills/linear): add Documents support + Python helper script (#20752)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ad7aad251c60cfe36bb2247603a34a958b9cdbc4",
      },
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
      {
        sha: "906881c",
        message: "fix(cli): catch OSError in _resolve_attachment_path to prevent ENAMETOOLONG dropping long slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/906881c38bdd4494420bd557cb17986e347b29ee",
      },
      {
        sha: "9627ee7",
        message: "feat(ci): add typecheck (warnings only in CI)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9627ee70e57a22bf9410f1f6f6aa2d2c386c4de8",
      },
      {
        sha: "63c51d8",
        message: "change: enable ruff/ty",
        href: "https://github.com/NousResearch/hermes-agent/commit/63c51d89628a6a8658591fd1dc2c2099c7d9c9d5",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "Kanban: dependency selects, task_runs.summary 표시, 부모 완료 전 자식 디스패치 방지, runtime 측정, 완료 태스크의 created_cards 연결, failure counter 통합, Kanban worker tools runtime-gated 처리, 코드 요소 배경 초기화, failure-column rename 안정화, migration fix 후속 정리",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 dependency selects를 연결(wire)하고, 대시보드 카드와 `kanban show` 명령어에 task_runs.summary를 표시합니다. 부모 작업이 완료되지 않은 상태에서 자식 작업이 디스패치되는 것을 방지하고, 작업의 max runtime을 current run 기준으로 측정합니다. 완료되는 태스크에 연결된 created_cards를 자식으로 수락(accept)합니다. spawn/timeout/crash 전반에서 failure counter를 통합하여 일관된 실패 추적을 제공합니다. doctor 명령어에서 Kanban worker tools를 runtime-gated로 보고하며, 보드 내 인라인 코드 요소의 배경을 초기화하여 표시를 정리합니다. fragile한 failure-column rename을 방지하고 Kanban migration fix 후속 정리를 진행합니다 (main branch).",
    commits: [
      {
        sha: "b1d420e",
        message: "fix(kanban): avoid fragile failure-column renames",
        href: "https://github.com/NousResearch/hermes-agent/commit/b1d420e75f42560738ed69d230a62feb1f7c7594",
      },
      {
        sha: "a2ff193",
        message: "chore: follow-up cleanup for Kanban migration fix",
        href: "https://github.com/NousResearch/hermes-agent/commit/a2ff193050b8054b52f3bffd4139333a60058be7",
      },
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
      {
        sha: "8a1a42d",
        message: "test(kanban): backdate task_runs.started_at alongside tasks.started_at",
        href: "https://github.com/NousResearch/hermes-agent/commit/8a1a42d0985631e267361921aac6020e9ccb0323",
      },
      {
        sha: "0b9cbc8",
        message: "test(kanban): cover metadata handoff round-trip",
        href: "https://github.com/NousResearch/hermes-agent/commit/0b9cbc8b23fc922b0317d788806f5a8270370f56",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "Models / i18n / Provider: grok-4.3·deepseek-v4-pro·Arcee Trinity Large Thinking 모델 추가, 프랑스어·터키어·우크라이나어 로케일 지원, opencode-go 프로바이더 hijack 방지",
    category: "Models / i18n / Provider",
    summary:
      "OpenRouter 및 Nous Portal 큐레이션 목록에 x-ai/grok-4.3과 deepseek/deepseek-v4-pro 모델이 추가되었습니다. Arcee Trinity Large Thinking 모델에 temperature 및 compression 오버라이드가 적용됩니다. 프랑스어(fr), 터키어(tr), 우크라이나어(uk) 로케일 지원이 추가되며, config·tests·docs 전반에 걸쳐 터키어 로케일 참조가 보강되었습니다. opencode-go 사용자가 네이티브 프로바이더로 hijack되지 않도록 수정하여 opencode-go backend를 그대로 유지합니다. /model 명령어의 커스텀 별칭(alias) 문서화도 함께 진행되었습니다 (main branch).",
    commits: [
      {
        sha: "a24789d",
        message: "fix(opencode-go): keep users on opencode-go instead of hijacking to native providers (#20802)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a24789d738b1074786f58952e299818b41da596e",
      },
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
        sha: "f0b95cc",
        message: "test(arcee): cover Trinity Large Thinking temperature + compression overrides",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0b95cc93dda1ee42cf587d1b0b6de7dd707f05d",
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
    date: "2026-05-05 ~ 2026-05-06",
    title: "Agent 안정성 / Gateway / State: Gateway 재시작 알림 게이팅·플랫폼별 플래그, salvage batch 압축·메모리·캐시 개선, Hindsight append·dedupe, SSE token batching, ACP reasoning 보존·atomic rewrite, checkpoints v2 단일 저장소 재작성 + 프루닝·디스크 가드레일, lazy session regression 해결, kanban worker lifecycle·동시성 제한, deterministic thread eviction, JSONL 직렬화 잠금, pending prompts 보존, model picker context 유지, provider auth.json 글로벌 폴백",
    category: "Agent 안정성 / Gateway / State",
    summary:
      "Gateway에서 재시작 전 'Gateway restarting' 알림도 게이팅(gate)하고, 플랫폼별 gateway_restart_notification 플래그를 지원합니다. salvage batch에서 compaction guidance, memory authority, cache eviction after compression이 개선되었습니다. Hindsight에서 update_mode='append' 지원 여부를 probe하고 프로세스 간 dedupe를 수행합니다. API Server에서 SSE token batching과 Open WebUI 성능 개선을 위한 오류 처리가 추가되었습니다. ACP에서 session persistence 시 assistant reasoning metadata를 보존하고, SessionDB.replace_messages로 atomic history rewrite를 수행합니다. run_agent에서 compression context length 조회 시 aux provider를 사용합니다. checkpoints가 v2 단일 저장소(single-store)로 재작성되어 실제 프루닝(pruning)과 디스크 가드레일(disk guardrails)을 갖추었습니다. lazy session creation regression(#18370 fallout)을 해결합니다. Gateway에서 kanban worker lifecycle을 run id 기준으로 보호(guard)하고, kanban.max_spawn config를 존중하여 동시 작업 수를 제한합니다. helpers의 thread eviction을 결정적(deterministic)으로 보장하고, session에서 JSONL transcript appends를 기존 잠금 아래에서 직렬화(serialize)하며, 재시작 간 pending update prompts를 보존합니다. model picker에서 현재 컨텍스트를 보존합니다. 프로바이더가 프로필별 auth.json을 찾지 못할 때 전역(global-root) auth.json으로 폴백합니다 (main branch).",
    commits: [
      {
        sha: "7df6115",
        message: "feat(gateway): also gate pre-restart \"Gateway restarting\" notification",
        href: "https://github.com/NousResearch/hermes-agent/commit/7df6115199278f415bd3d3dacf439e467341245c",
      },
      {
        sha: "b71f80e",
        message: "feat(gateway): per-platform gateway_restart_notification flag",
        href: "https://github.com/NousResearch/hermes-agent/commit/b71f80e6ce2af7a75e319170340dec9d64461576",
      },
      {
        sha: "33bf5f6",
        message: "fix(auth): fall back to global-root auth.json for providers missing in profile",
        href: "https://github.com/NousResearch/hermes-agent/commit/33bf5f6292f49f109f11fb9c035afae6dcd356e3",
      },
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
      {
        sha: "a0fedfb",
        message: "feat(checkpoints): v2 single-store rewrite with real pruning + disk guardrails (#20709)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a0fedfbb1b7eab8db6c8aaa187f8c35cbf12f3e2",
      },
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
    title: "Docs: 플러그인 서페이스·이미지 생성 프로바이더 가이드 및 스킬 퍼블리싱 안내, 중국어 README·zh-Hans 가이드, Ollama 로컬 실행, VS Code ACP 연동, 모델 별칭, WSL Chrome MCP 브릿지, WSL2 심화 가이드, 플러그인 서페이스·모델 프로바이더 가이드, Tool Gateway 마케팅 페이지 재작성 등 대규모 문서화",
    category: "Docs",
    summary:
      "중국어(zh-CN) README 번역과 zh-Hans Tool Gateway·이미지 생성·Windows WSL 가이드가 추가되어 중국어 사용자 지원이 대폭 강화되었습니다. Ollama로 Hermes를 로컬 실행하는 가이드, Open WebUI 부트스트랩 스크립트, VS Code ACP Client 연동 설정 가이드가 추가되었습니다. /model 명령어의 커스텀 모델 별칭(alias) 문서, WSL 환경에서 Windows Chrome MCP 브릿지 구성 가이드가 포함됩니다. WSL2 심화 가이드로 파일시스템·네트워킹·서비스·주의사항을 보강하고, 플러그인 서페이스 커버리지 문서로 모델 프로바이더 가이드·전체 플러그인 맵·opt-in 수정사항을 정리합니다. 이미지 생성 프로바이더 플러그인(image-gen-provider-plugin) 가이드와 스킬 퍼블리싱 안내(skill tap)가 추가되어 플러그인 문서의 공백을 메웁니다. Tool Gateway 문서가 pitch-first 마케팅 페이지로 재작성되었습니다 (main branch).",
    commits: [
      {
        sha: "d514dd4",
        message: "docs(tool-gateway): rewrite as pitch-first marketing page (#20827)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d514dd40552c6747eb465a539d5991376125c709",
      },
      {
        sha: "773cf48",
        message: "docs(plugins): close the gaps — image-gen-provider-plugin guide + publishing a skill tap (#20800)",
        href: "https://github.com/NousResearch/hermes-agent/commit/773cf48c50b468f25c9a46495218b43edac137f9",
      },
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
      {
        sha: "b62a82e",
        message: "docs: pluggable surfaces coverage — model-provider guide, full plugin map, opt-in fix (#20749)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b62a82e0c3fbcdf219824c1512de180bae8a125c",
      },
      {
        sha: "90a7adc",
        message: "docs(wsl2): expand Windows (WSL2) guide — filesystem, networking, services, pitfalls (#20748)",
        href: "https://github.com/NousResearch/hermes-agent/commit/90a7adcb2e90a7ac744d51a86cdde65f7733cdad",
      },
    ],
  },
];
