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
    title: "Kanban: dependency selects, task_runs.summary 표시, 부모 완료 전 자식 디스패치 방지, runtime 측정, 완료 태스크의 created_cards 연결",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 dependency selects를 연결(wire)하고, 대시보드 카드와 `kanban show` 명령어에 task_runs.summary를 표시합니다. 부모 작업이 완료되지 않은 상태에서 자식 작업이 디스패치되는 것을 방지하고, 작업의 max runtime을 current run 기준으로 측정합니다. 완료되는 태스크에 연결된 created_cards를 자식으로 수락(accept)합니다 (main branch).",
    commits: [
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
    ],
  },
  {
    date: "2026-05-06",
    title: "Models / i18n / Provider: grok-4.3·deepseek-v4-pro·Arcee Trinity Large Thinking 모델 추가, 터키어·우크라이나어 로케일 지원",
    category: "Models / i18n / Provider",
    summary:
      "OpenRouter 및 Nous Portal 큐레이션 목록에 x-ai/grok-4.3과 deepseek/deepseek-v4-pro 모델이 추가되었습니다. Arcee Trinity Large Thinking 모델에 temperature 및 compression 오버라이드가 적용됩니다. 터키어(tr)와 우크라이나어(uk) 로케일 지원이 추가되며, 터키어 로케일 참조가 config, tests, docs 전반에 반영되었습니다. /model 명령어의 커스텀 별칭(alias) 문서화도 함께 진행되었습니다 (main branch).",
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
    date: "2026-05-06",
    title: "Docs: 모델 별칭 가이드, WSL Chrome MCP 브릿지, Doubao 음성 통합, Obsidian 파일 워크플로우 현대화, 중국어 README 등",
    category: "Docs",
    summary:
      "/model 명령어의 커스텀 모델 별칭(alias) 문서가 추가되었습니다. WSL 환경에서 Windows Chrome MCP 브릿지 구성 가이드, Doubao 음성 통합(TTS+STT) 예제, Obsidian 파일 워크플로우 현대화 가이드가 포함됩니다. 중국어(zh-CN) README 번역, Ollama 로컬 실행 가이드, Open WebUI 부트스트랩 스크립트, VS Code ACP 연동 설정, Docker API_SERVER 환경변수, zh-Hans Tool Gateway·이미지 생성·WSL 가이드, Discord/Telegram 트러블슈팅, Kanban handoff evidence 문서 등 다양한 문서 업데이트가 이루어졌습니다 (main branch).",
    commits: [
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
        sha: "39560c9",
        message: "docs(voice): add Doubao speech integration examples (TTS + STT)",
        href: "https://github.com/NousResearch/hermes-agent/commit/39560c948dee11244b6df7b11050537f3eabbfd7",
      },
      {
        sha: "15be493",
        message: "docs(skills): modernize Obsidian file workflows",
        href: "https://github.com/NousResearch/hermes-agent/commit/15be493055eb89d97d1faff9ff890996da0e2737",
      },
      {
        sha: "05cdcac",
        message: "docs: add Chinese (zh-CN) README translation",
        href: "https://github.com/NousResearch/hermes-agent/commit/05cdcac36240df5ef1348f7f527cc3e1a341282d",
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
];
