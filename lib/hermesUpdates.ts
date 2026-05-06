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
    title: "Kanban / Multi-agent: 대시보드 task_runs.summary 표시, 의존성 선택 수정, 부모 완료 전 자식 디스패치 방지, worker lifecycle guard, failure counter 통합",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban 대시보드 카드와 `kanban show` 명령어에 task_runs.summary를 표시합니다. 의존성 선택(dependency selects)을 올바르게 연결(wire)하고, 부모 작업이 완료되지 않은 상태에서 자식 작업이 디스패치되는 것을 방지합니다. Kanban worker의 lifecycle을 run id로 guard하여 중복 실행을 막고, spawn/timeout/crash 실패 카운터를 통합(unify)합니다 (main branch).",
    commits: [
      {
        sha: "3f97297",
        message: "feat(kanban): surface task_runs.summary on dashboard cards + `kanban show`",
        href: "https://github.com/NousResearch/hermes-agent/commit/3f972974133659a366f5d63b01423a4709c507b3",
      },
      {
        sha: "a49670c",
        message: "fix(kanban): wire dependency selects",
        href: "https://github.com/NousResearch/hermes-agent/commit/a49670c21b3deb8384fd2069142be2040aa71187",
      },
      {
        sha: "d2c6ece",
        message: "fix(kanban): prevent child task dispatch when parent is not done",
        href: "https://github.com/NousResearch/hermes-agent/commit/d2c6eceed98d2f276240553269f630c952e022c9",
      },
      {
        sha: "56b4795",
        message: "guard kanban worker lifecycle by run id",
        href: "https://github.com/NousResearch/hermes-agent/commit/56b4795115e309b8d65bc68729fc591e90e6ffaa",
      },
      {
        sha: "1fc8733",
        message: "fix(kanban): unify failure counter across spawn/timeout/crash outcomes (#20410)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1fc8733a698664441d923408f66eaa307d44dd9a",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "i18n / Provider: 터키어·우크라이나어·프랑스어 로케일 추가, 터키어 참조 정리, Arcee temperature·compression 오버라이드",
    category: "i18n / Provider",
    summary:
      "터키어(tr), 우크라이나어(uk), 프랑스어(fr) 로케일 지원이 추가되고, 터키어 관련 config·test·docs 참조가 정리되었습니다. Arcee provider에서 Trinity Large Thinking 모델의 temperature 및 compression 오버라이드가 적용됩니다 (main branch).",
    commits: [
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
      {
        sha: "2d4eaed",
        message: "arcee temperature + compression",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d4eaed1117caccd98f34a9f48684995a6e313df",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Agent 안정성 / ACP / API: Hindsight append·dedupe, SSE token batching, ACP reasoning 보존·atomic rewrite, compression context",
    category: "Agent 안정성",
    summary:
      "Hindsight에서 update_mode='append' 지원 여부를 probe하고 프로세스 간 dedupe를 수행합니다. API Server에서 SSE token batching과 Open WebUI 성능 개선을 위한 오류 처리가 추가되었습니다. ACP에서 session persistence 시 assistant reasoning metadata를 보존하고, SessionDB.replace_messages로 atomic history rewrite를 수행합니다. run_agent에서 compression context length 조회 시 aux provider를 사용합니다 (main branch).",
    commits: [
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
        href: "https://github.com/NousResearch/hermes-agent/commit/5795b3be4e2aa5a840ce810925e3e3370f4f0",
      },
      {
        sha: "c46bc92",
        message: "fix(run_agent): use aux provider for compression context length lookup",
        href: "https://github.com/NousResearch/hermes-agent/commit/c46bc9294991929a3dc8f6c28111c3e7780406a2",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Gateway / State: lazy session regression 해결, kanban.max_spawn 동시성 제한, deterministic thread eviction, JSONL 직렬화 잠금, pending prompts 보존",
    category: "Gateway / State",
    summary:
      "lazy session creation regression(#18370 fallout)을 해결합니다. Gateway에서 kanban.max_spawn config를 존중하여 동시 작업 수를 제한하고, helpers의 thread eviction을 결정적(deterministic)으로 보장합니다. session에서 JSONL transcript appends를 기존 잠금 아래에서 직렬화(serialize)하고, 재시작 간 pending update prompts를 보존합니다 (main branch).",
    commits: [
      {
        sha: "3b75071",
        message: "fix: resolve lazy session creation regressions (#18370 fallout) (#20363)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b750715a39ed8a96fe90dc4f7a5b7b2ff9b794e",
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
    ],
  },
  {
    date: "2026-05-05",
    title: "CLI / Tools / Plugins: provider 33종 플러그화, plugin command discovery·tools 병합, /model 통일, TUI slash parity, delta lint",
    category: "CLI / Tools / Plugins",
    summary:
      "33개 provider 전체를 plugins/model-providers/ 아래에서 플러그화(pluggable)하고 ProviderProfile ABC, fetch_models, transport single-path를 도입합니다. CLI dispatch 시 plugin commands를 discover하고, plugin tools를 builtin toolsets에 병합(merge)합니다. TUI에서 /provider 별칭을 제거하고 /model로 통일하며, slash 명령어 패리티를 CLI와 맞춥니다. file_tools에서 write_file과 patch 후 delta lint가 실행됩니다 (main branch).",
    commits: [
      {
        sha: "9022804",
        message: "feat(providers): make all 33 providers pluggable under plugins/model-providers/",
        href: "https://github.com/NousResearch/hermes-agent/commit/9022804d78e88253d138d448e9107a3884b2b96c",
      },
      {
        sha: "20a4f79",
        message: "feat: provider modules — ProviderProfile ABC, 33 providers, fetch_models, transport single-path",
        href: "https://github.com/NousResearch/hermes-agent/commit/20a4f79ed11da67318756d7a98141c0ebf56183f",
      },
      {
        sha: "0397be5",
        message: "feat(tui): remove /provider alias for /model (#20358)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0397be5939079d0a0f6df491637825e7f1583f2f",
      },
      {
        sha: "794f487",
        message: "fix(tui): close slash parity gaps with CLI (#20339)",
        href: "https://github.com/NousResearch/hermes-agent/commit/794f48766c7e984236ec993e26b0da1c2586448b",
      },
      {
        sha: "5168226",
        message: "feat(file_tools): post-write delta lint on write_file + patch, add JSON/YAML/TOML/Python in-process linters (#20191)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5168226d60f66dac01dabe151104cb8e958c99c0",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Docs: 중국어 README·zh-Hans 가이드, VS Code ACP 연동, 플랫폼 통계 갱신, Obsidian 파일 워크플로 현대화",
    category: "Docs",
    summary:
      "중국어(zh-CN) README 번역과 zh-Hans Tool Gateway·이미지 생성·Windows WSL 가이드가 추가되었습니다. VS Code에서 ACP Client 연동을 위한 설정 방법이 업데이트되었습니다. 플랫폼/LOC/테스트 카운트가 최신화되고 gateway vs plugin 플랫폼 구분이 명확해졌습니다. Obsidian 파일 워크플로 가이드가 현대화(modernize)되었습니다 (main branch).",
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
        sha: "0d945d1",
        message: "docs: update VS Code setup instructions for ACP Client integration",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d945d1541eece83efa3f19bf9fc3550e55a32e6",
      },
      {
        sha: "3beef57",
        message: "docs: refresh stale platform/LOC/test counts; clarify gateway vs plugin platforms",
        href: "https://github.com/NousResearch/hermes-agent/commit/3beef5782530507a8663696300c76f62e5cc2451",
      },
      {
        sha: "15be493",
        message: "docs(skills): modernize Obsidian file workflows",
        href: "https://github.com/NousResearch/hermes-agent/commit/15be493055eb89d97d1faff9ff890996da0e2737",
      },
    ],
  },
];
