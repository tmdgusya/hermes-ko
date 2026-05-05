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
    title: "Kanban / Multi-agent: 진단 엔진 추가, worker lifecycle guard, failure counter 통합, hallucination gate, metadata handoff test",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에 worker-created-card 클레임에 대한 hallucination gate와 복구 UX가 추가되고, task distress signal을 위한 generic diagnostics engine이 도입되었습니다. kanban worker lifecycle을 run id로 guard하고, spawn/timeout/crash 모든 실패 경로에서 failure counter를 통합(unify)하여 일관된 재시도 정책을 적용합니다. metadata handoff round-trip 테스트가 추가되었습니다 (main branch).",
    commits: [
      {
        sha: "f67063b",
        message: "feat(kanban): generic diagnostics engine for task distress signals (#20332)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f67063ba81f9d7de2e42003dd086633d28448ae8",
      },
      {
        sha: "de9238d",
        message: "feat(kanban): hallucination gate + recovery UX for worker-created-card claims (#20232)",
        href: "https://github.com/NousResearch/hermes-agent/commit/de9238d37e778da3654595a49cc7ae5b8a10fa60",
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
      {
        sha: "0b9cbc8",
        message: "test(kanban): cover metadata handoff round-trip",
        href: "https://github.com/NousResearch/hermes-agent/commit/0b9cbc8b23fc922b0317d788806f5a8270370f56",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Messaging / i18n: 프랑스어 로케일 추가, 다국어 display.language, Feishu dedup·markdown table, WhatsApp 음성변환",
    category: "Messaging / Platform",
    summary:
      "i18n에 프랑스어(fr) 로케일 지원이 추가되고, display.language 설정으로 정적 메시지를 zh/ja/de/es로 번역하는 기능이 도입되었습니다. Feishu에서 malformed dedup timestamps를 허용(tolerate)하고, markdown tables에 force text mode를 적용합니다. WhatsApp send-media에서 mp3/wav를 ogg/opus로 자동 변환하여 native voice bubbles를 지원합니다 (main branch).",
    commits: [
      {
        sha: "0d41e94",
        message: "feat(i18n): add French (fr) locale support",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d41e94ca99ca873148081e597fabf5d339f267b",
      },
      {
        sha: "7de3c86",
        message: "feat(i18n): add display.language for static message translation (zh/ja/de/es) (#20231)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7de3c86c5a793485d7b686ac80448336ae996689",
      },
      {
        sha: "a877c3f",
        message: "fix(feishu): tolerate malformed dedup timestamps",
        href: "https://github.com/NousResearch/hermes-agent/commit/a877c3f6d9aefdd7338f2189b83d5bc290e17929",
      },
      {
        sha: "8e18d10",
        message: "fix(feishu): force text mode for markdown tables",
        href: "https://github.com/NousResearch/hermes-agent/commit/8e18d10318f9fb69f0b748db11e37de44b71da85",
      },
      {
        sha: "dad62c4",
        message: "fix(whatsapp): auto-convert mp3/wav to ogg/opus in send-media for native voice bubbles",
        href: "https://github.com/NousResearch/hermes-agent/commit/dad62c4c474164b19cfd7b5e96746a2cdde50931",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Docs: 중국어 README·zh-Hans 가이드, WSL Chrome MCP, Gemini·Ollama 가이드, Provider cookbook, Discord·Obsidian·cron·import 가이드 보강",
    category: "Docs",
    summary:
      "중국어(zh-CN) README 번역과 zh-Hans Tool Gateway·이미지 생성·Windows WSL 가이드가 추가되었습니다. WSL-to-Windows Chrome MCP bridge 문서가 새로 작성되었습니다. Google Gemini 가이드, Ollama 로컬 실행 가이드, Together/Groq/Perplexity custom_providers cookbook이 추가되었습니다. Discord Server Members Intent·음성 채널 가이드, Obsidian file workflows 현대화, cron context_from chaining, Dispatch tools from slash commands, hermes import reference 확장, bundled skills 복원 가이드, 플랫폼/LOC/test 카운트 갱신 등 문서 전반이 보강되었습니다 (main branch).",
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
        sha: "a11234d",
        message: "docs(browser): document WSL-to-Windows Chrome MCP bridge",
        href: "https://github.com/NousResearch/hermes-agent/commit/a11234dd68107228f7f4c9f2b8c3eea3de7aa31a",
      },
      {
        sha: "b1476c7",
        message: "docs(gemini): add Google Gemini guide",
        href: "https://github.com/NousResearch/hermes-agent/commit/b1476c76f68db7bbf19e183388da99f8f4b24adc",
      },
      {
        sha: "9a0a4c5",
        message: "docs(guides): add guide for running Hermes locally with Ollama",
        href: "https://github.com/NousResearch/hermes-agent/commit/9a0a4c5831256551394c3ca99c3913653ea53691",
      },
      {
        sha: "acca3ec",
        message: "docs(providers): Together/Groq/Perplexity cookbook via custom_providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/acca3ec3af7ebe99f520bd8f3d1e84f6447b57ac",
      },
    ],
  },
];
