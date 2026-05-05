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
    title: "Agent 안정성 / ACP: 429·Gemini CloudCode fallback, ACP reasoning 보존·atomic rewrite, compression context, kanban hallucination gate",
    category: "Agent 안정성",
    summary:
      "auxiliary client에서 429 rate-limit 오류 발생 시 fallback을 트리거하고, Gemini CloudCode rate-limit도 fallback을 우선합니다. ACP에서 session persistence 시 assistant reasoning metadata를 보존하고, SessionDB.replace_messages로 atomic history rewrite를 수행합니다. run_agent에서 compression context length 조회 시 aux provider를 사용합니다. Kanban에서 worker-created-card 클레임에 대한 hallucination gate와 복구 UX가 추가되었습니다 (main branch).",
    commits: [
      {
        sha: "f8ba265",
        message: "fix(aux): trigger fallback on 429 rate-limit errors in auxiliary client",
        href: "https://github.com/NousResearch/hermes-agent/commit/f8ba265340e1cb218f1e2e8f3820d2746af4ee5d",
      },
      {
        sha: "5267421",
        message: "Prefer fallback for Gemini CloudCode rate limits",
        href: "https://github.com/NousResearch/hermes-agent/commit/526742199bef2ab184c92b87d4f78edb75aeeaa6",
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
        sha: "de9238d",
        message: "feat(kanban): hallucination gate + recovery UX for worker-created-card claims (#20232)",
        href: "https://github.com/NousResearch/hermes-agent/commit/de9238d37e778da3654595a49cc7ae5b8a10fa60",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Gateway / State: lazy session regression 해결, deterministic thread eviction, JSONL 직렬화 잠금, human-delay 오류 허용, pending prompts 보존",
    category: "Gateway / State",
    summary:
      "lazy session creation regression(#18370 fallout)을 해결합니다. Gateway에서 helpers의 thread eviction을 결정적(deterministic)으로 보장하고, custom human-delay 모드와 natural 모드 모두에서 잘못된 환경변수 값을 허용(tolerate)합니다. session에서 JSONL transcript appends를 기존 잠금 아래에서 직렬화(serialize)하고, 재시작 간 pending update prompts를 보존합니다 (main branch).",
    commits: [
      {
        sha: "3b75071",
        message: "fix: resolve lazy session creation regressions (#18370 fallout) (#20363)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b750715a39ed8a96fe90dc4f7a5b7b2ff9b794e",
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
        sha: "285c208",
        message: "fix(gateway): also tolerate malformed env vars in custom human-delay mode",
        href: "https://github.com/NousResearch/hermes-agent/commit/285c208cf7b5bd67d055a952cd7e748b32ecaf73",
      },
      {
        sha: "3b16c59",
        message: "fix(gateway): ignore malformed custom delay env vars in natural mode",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b16c590e03f8208989ea2eab588c6d84b75eca7",
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
    title: "CLI / Skills / Env: TUI /provider 별칭 제거, credential-filtered picker, bracketed paste sanitize, MAX_ITERATIONS fallback, category-qualified skill, 공유 dotenv, claw workspace 처리",
    category: "CLI / Skills",
    summary:
      "TUI에서 /provider 별칭을 제거하고 /model로 통일합니다. CLI에 credential-filtered picker provider 목록(list_picker_providers)이 추가되고, setup 중 bracketed paste markers를 sanitize합니다. HERMES_MAX_ITERATIONS가 유효하지 않을 때 fallback 처리합니다. skills에서 category-qualified local skill name을 지원하고, 환경변수 로딩을 공유 Hermes dotenv loader로 리팩터링합니다. claw에서 _scan_workspace_state 실행 시 존재하지 않는 디렉터리를 처리합니다 (main branch).",
    commits: [
      {
        sha: "0397be5",
        message: "feat(tui): remove /provider alias for /model (#20358)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0397be5939079d0a0f6df491637825e7f1583f2f",
      },
      {
        sha: "60235db",
        message: "feat(cli): add list_picker_providers for credential-filtered picker",
        href: "https://github.com/NousResearch/hermes-agent/commit/60235dba5e8d1a2a518131a53de63bba37f41830",
      },
      {
        sha: "02147cc",
        message: "fix(cli): sanitize bracketed paste markers during setup",
        href: "https://github.com/NousResearch/hermes-agent/commit/02147cc850069294d215d72b55c2a2cc2390eff4",
      },
      {
        sha: "4e6f511",
        message: "fix(cli): fall back on invalid HERMES_MAX_ITERATIONS",
        href: "https://github.com/NousResearch/hermes-agent/commit/4e6f51167dd12d2812bfccbf6226618dacfff3fd",
      },
      {
        sha: "244bacd",
        message: "fix(skills): support category-qualified local skill names",
        href: "https://github.com/NousResearch/hermes-agent/commit/244bacd0dc4adcf263bb7c6d677452e9fa51c0b0",
      },
      {
        sha: "d8097d5",
        message: "refactor(env): use shared Hermes dotenv loader",
        href: "https://github.com/NousResearch/hermes-agent/commit/d8097d587f7e6cf6815ff3410e3a21bea87ebd6e",
      },
      {
        sha: "f667774",
        message: "fix(claw): handle missing dir in _scan_workspace_state",
        href: "https://github.com/NousResearch/hermes-agent/commit/f6677748a0376a386bb339a7ac4a7264d2b5675c",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Tools / Plugins / MCP: plugin command discovery, plugin-builtin 병합, Curator archive/prune, delta lint, MCP keepalive",
    category: "Tools / MCP / Plugins",
    summary:
      "CLI dispatch 시 plugin commands를 discover하고, plugin tools를 builtin toolsets에 병합(merge)합니다. Curator에 archive 및 prune 서브커맨드가 추가되고, file_tools에서 write_file과 patch 후 delta lint가 실행됩니다. MCP의 _wait_for_lifecycle_event에 주기적 keepalive가 추가되었습니다 (main branch).",
    commits: [
      {
        sha: "e805380",
        message: "Discover plugin commands during CLI dispatch",
        href: "https://github.com/NousResearch/hermes-agent/commit/e805380b82bd50d5e8e573cb2d24da50ac826f70",
      },
      {
        sha: "0120d8f",
        message: "fix: merge plugin tools into builtin toolsets",
        href: "https://github.com/NousResearch/hermes-agent/commit/0120d8f31e96d36c02965d421f0386de00d41b0b",
      },
      {
        sha: "436672d",
        message: "feat(curator): add archive and prune subcommands (#20200)",
        href: "https://github.com/NousResearch/hermes-agent/commit/436672de0efd8bcc50c6043a16223c102d30d71b",
      },
      {
        sha: "5168226",
        message: "feat(file_tools): post-write delta lint on write_file + patch, add JSON/YAML/TOML/Python in-process linters (#20191)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5168226d60f66dac01dabe151104cb8e958c99c0",
      },
      {
        sha: "44cf334",
        message: "fix(mcp): add periodic keepalive to _wait_for_lifecycle_event",
        href: "https://github.com/NousResearch/hermes-agent/commit/44cf33449d4f78f9a13eb37c7d99d2c4b021f696",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Messaging: Feishu dedup·markdown table·bot identity, WhatsApp 음성변환, hermes_home·receive_id_type 병합",
    category: "Messaging / Platform",
    summary:
      "Feishu에서 malformed dedup timestamps를 허용(tolerate)하고, markdown tables에 force text mode를 적용하며, hydration 중 bot identity를 refresh합니다. WhatsApp send-media에서 mp3/wav를 ogg/opus로 자동 변환하여 native voice bubbles를 지원합니다. _get_hermes_home() 동적 해석과 feishu receive_id_type 감지를 병합(merge)합니다 (main branch).",
    commits: [
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
        sha: "80b386a",
        message: "fix(feishu): refresh bot identity during hydration",
        href: "https://github.com/NousResearch/hermes-agent/commit/80b386a472fdb37113e137360da3cc60e796d782",
      },
      {
        sha: "dad62c4",
        message: "fix(whatsapp): auto-convert mp3/wav to ogg/opus in send-media for native voice bubbles",
        href: "https://github.com/NousResearch/hermes-agent/commit/dad62c4c474164b19cfd7b5e96746a2cdde50931",
      },
      {
        sha: "969bfff",
        message: "fix: merge _get_hermes_home() dynamic resolution and feishu receive_id_type detection",
        href: "https://github.com/NousResearch/hermes-agent/commit/969bfff4491d34b199a212defd7f1a4142a26118",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Config / i18n / Docs: OpenRouter X-Title·xiaomi, i18n 다국어, AGENTS.md 보강, auxiliary custom path 잠금 방지, SSH scp preflight",
    category: "Config / Auth",
    summary:
      "OpenRouter에서 canonical X-Title attribution header를 사용하고, xiaomi 모델을 reasoning-capable로 처리합니다. display.language 설정으로 정적 메시지를 zh/ja/de/es로 번역하는 i18n 기능이 추가되었습니다. AGENTS.md에 curator/cron/delegation/toolsets 문서가 보강되고 plugin tree가 수정되었습니다. auxiliary provider가 api_key가 비어 있을 때 custom path에 잠기지(lock) 않도록 수정되었습니다. SSH preflight 검증에 scp 사용 가능 여부 확인이 추가되었습니다 (main branch).",
    commits: [
      {
        sha: "6430d67",
        message: "fix(openrouter): use canonical X-Title attribution header",
        href: "https://github.com/NousResearch/hermes-agent/commit/6430d67569f553a2a45241d98cee5794944565a7",
      },
      {
        sha: "7de3c86",
        message: "feat(i18n): add display.language for static message translation (zh/ja/de/es) (#20231)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7de3c86c5a793485d7b686ac80448336ae996689",
      },
      {
        sha: "19eebf6",
        message: "fix(openrouter): treat xiaomi models as reasoning-capable",
        href: "https://github.com/NousResearch/hermes-agent/commit/19eebf6e0de733ffa2f28133801f79e07fbdec4e",
      },
      {
        sha: "b7bd177",
        message: "docs(AGENTS.md): add curator/cron/delegation/toolsets, fix plugin tree (#20226)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7bd177105986a0af5ec13c427e0e3837f8d05c8",
      },
      {
        sha: "96514de",
        message: "fix(auxiliary): avoid locking into custom path when api_key is empty",
        href: "https://github.com/NousResearch/hermes-agent/commit/96514de472d0019c10e5fa5928738094cb7d6a74",
      },
      {
        sha: "db84c15",
        message: "fix(ssh): add scp availability check to preflight validation",
        href: "https://github.com/NousResearch/hermes-agent/commit/db84c1535d63e4ea42fb8d0d612cebbaf72d4066",
      },
    ],
  },
];
