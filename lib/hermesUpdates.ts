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
    title: "Agent 안정성: compression context length, session_id 반환, reasoning-block leak, stale reasoning 방지, compaction fallback",
    category: "Agent 안정성",
    summary:
      "run_agent에서 compression context length 조회 시 aux provider를 사용하도록 수정되고, context compression 후 유효한 session_id를 반환합니다. reasoning-block leak을 방지하는 stateful streaming scrubber가 추가되고, 턴 간 stale reasoning이 재사용되지 않도록 수정되었습니다. compaction에서 role=user fallback 시 context summary의 끝을 명시적으로 표시(mark)합니다 (main branch).",
    commits: [
      {
        sha: "c46bc92",
        message: "fix(run_agent): use aux provider for compression context length lookup",
        href: "https://github.com/NousResearch/hermes-agent/commit/c46bc9294991929a3dc8f6c28111c3e7780406a2",
      },
      {
        sha: "7f735b4",
        message: "fix: return effective session_id after context compression (#16938)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7f735b4db2967849d935ef4b03bd6933107e48ff",
      },
      {
        sha: "2a285d5",
        message: "fix(agent): stateful streaming scrubber for reasoning-block leaks (#17924) (#20184)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a285d5ec228e5df782957ed1b29d1df44e2a3ae",
      },
      {
        sha: "efe1cb0",
        message: "fix: prevent stale reasoning from being reused across turns",
        href: "https://github.com/NousResearch/hermes-agent/commit/efe1cb00c88234ab4c81055a8aac07689a315508",
      },
      {
        sha: "2eef395",
        message: "fix(compaction): mark end of context summary in role=user fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/2eef395e1cafd32ebfcf91fb6e5c6ecbd4c1e7df",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Gateway / State: human-delay 환경변수 오류 허용, reply_to_mode, DoH DNS, pending prompts 보존",
    category: "Gateway / State",
    summary:
      "Gateway에서 custom human-delay 모드와 natural 모드 모두에서 잘못된 환경변수 값을 허용(tolerate)하고 정상 동작합니다. Discord와 Telegram의 reply_to_mode를 config.yaml에서 로드하고, DoH 확인된 Telegram IP를 시스템 DNS와 일치시키며, 재시작 간 pending update prompts를 보존합니다 (main branch).",
    commits: [
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
        sha: "6b76ea4",
        message: "fix(gateway): load reply_to_mode from config.yaml for Discord and Telegram",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b76ea4707e75cba4d8a1fd6094c89d778fae412",
      },
      {
        sha: "f6b68f0",
        message: "fix(gateway): keep DoH-confirmed Telegram IPs that match system DNS (#14520)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f6b68f0f5079eeb10ce00253b29236015f96d9bb",
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
    title: "Kanban: hallucination gate, stuck-warn 억제, zombie worker 감지, dashboard 보존, 비실제 프로필 건너뛰기",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban dispatcher에 worker-created-card claim에 대한 hallucination gate와 recovery UX가 추가되었습니다. ready queue에 spawn 불가능한 assignee만 있을 때 stuck-warn을 억제하고, 실제 프로필이 아닌 assignee의 ready task를 건너뜁니다. 대시보드 completion summary가 보존(preserve)되고, darwin 환경에서 zombie worker가 감지(detect)됩니다 (main branch).",
    commits: [
      {
        sha: "de9238d",
        message: "feat(kanban): hallucination gate + recovery UX for worker-created-card claims (#20232)",
        href: "https://github.com/NousResearch/hermes-agent/commit/de9238d37e778da3654595a49cc7ae5b8a10fa60",
      },
      {
        sha: "f25d3ec",
        message: "fix(kanban): suppress dispatcher stuck-warn when ready queue holds only non-spawnable assignees",
        href: "https://github.com/NousResearch/hermes-agent/commit/f25d3ec9176bc15d9be59ab32dbd4537606d0254",
      },
      {
        sha: "ca5595f",
        message: "fix(kanban): dispatcher skips ready tasks whose assignee is not a real profile",
        href: "https://github.com/NousResearch/hermes-agent/commit/ca5595fe7b707f7285147623ea2473fb7460b7e7",
      },
      {
        sha: "354502e",
        message: "fix(kanban): preserve dashboard completion summaries",
        href: "https://github.com/NousResearch/hermes-agent/commit/354502ee483f4bd3a0b1b8ef650482762b2444e0",
      },
      {
        sha: "1a03e3b",
        message: "fix(kanban): detect darwin zombie workers",
        href: "https://github.com/NousResearch/hermes-agent/commit/1a03e3b1c667600c4bb509e8afb01620b0999bec",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Messaging: Telegram /topic 멀티세션, Teams threading, Honcho prefetch, TUI gateway 안정화",
    category: "Messaging / Platform",
    summary:
      "Telegram에 /topic off, /topic help, auth gate, screenshot debounce를 갖춘 멀티세션 DM 모드가 추가되고 CASCADE 처리, General-topic 핸들링, rename guard가 개선되었습니다. Microsoft Teams에서 app.reply()를 통한 threading이 구현되었습니다. Honcho의 get_prefetch_context에 user_message를 search_query로 전달하고, React effect cleanup이 python TUI gateway 서브프로세스를 종료(kill)하지 않도록 수정되었습니다 (main branch).",
    commits: [
      {
        sha: "d35efb9",
        message: "feat(telegram): /topic off + help + auth gate + screenshot debounce",
        href: "https://github.com/NousResearch/hermes-agent/commit/d35efb9898843e22d3d203a7fd6822dddb09d342",
      },
      {
        sha: "1381c89",
        message: "fix(telegram): polish topic mode — CASCADE, General-topic handling, rename guard, debounce",
        href: "https://github.com/NousResearch/hermes-agent/commit/1381c89e56fd3e6abbd0233b5a361069ae1862c1",
      },
      {
        sha: "69aeba0",
        message: "feat(teams): implement threading via app.reply()",
        href: "https://github.com/NousResearch/hermes-agent/commit/69aeba0df782b3383480ffbf0733d725a714c0a1",
      },
      {
        sha: "0a7cc85",
        message: "fix(honcho): pass user_message as search_query in get_prefetch_context",
        href: "https://github.com/NousResearch/hermes-agent/commit/0a7cc85eab299667777489a31995eb324d8b7818",
      },
      {
        sha: "660ce7c",
        message: "fix(ui-tui): prevent React effect cleanup from killing python TUI gateway subprocess",
        href: "https://github.com/NousResearch/hermes-agent/commit/660ce7c54b9c397b2b1d23d9904159b645f04d30",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Tools / MCP / Plugins: Curator archive/prune, delta lint, hub skill 보호, MCP keepalive, skills pin",
    category: "Tools / MCP / Plugins",
    summary:
      "Curator에 archive 및 prune 서브커맨드가 추가되고, frontmatter name으로 hub skill을 보호합니다. file_tools에서 write_file과 patch 후 delta lint가 실행되며 JSON/YAML/TOML/Python in-process linter가 추가되었습니다. MCP의 _wait_for_lifecycle_event에 주기적 keepalive가 추가되고, skills pin이 삭제만 방지하고 편집은 허용하도록 변경되었습니다 (main branch).",
    commits: [
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
        sha: "68c1a08",
        message: "fix(curator): protect hub skills by frontmatter name",
        href: "https://github.com/NousResearch/hermes-agent/commit/68c1a08ad114e6d1cfdcecd09880b5b594230b77",
      },
      {
        sha: "44cf334",
        message: "fix(mcp): add periodic keepalive to _wait_for_lifecycle_event",
        href: "https://github.com/NousResearch/hermes-agent/commit/44cf33449d4f78f9a13eb37c7d99d2c4b021f696",
      },
      {
        sha: "b10e38e",
        message: "fix(skills): pin protects against deletion only, not edits (#20220)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b10e38e392ba5b1ee0f98fd513d3f120f7277565",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Config / Auth / i18n: 다국어 표시 언어, 모델 별칭, OpenRouter xiaomi, Session-Key 헤더, auxiliary 경로 잠금 방지",
    category: "Config / Auth",
    summary:
      "display.language 설정으로 정적 메시지를 zh/ja/de/es로 번역하는 i18n 기능이 추가되었습니다. /model alias resolution에서 config.yaml의 model.aliases를 해석하고, OpenRouter에서 xiaomi 모델을 reasoning-capable로 처리합니다. API 서버에 X-Hermes-Session-Key 헤더가 추가되어 long-term memory scoping이 가능해졌고, auxiliary provider가 api_key가 비어 있을 때 custom path에 잠기지(lock) 않도록 수정되었습니다 (main branch).",
    commits: [
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
        sha: "96514de",
        message: "fix(auxiliary): avoid locking into custom path when api_key is empty",
        href: "https://github.com/NousResearch/hermes-agent/commit/96514de472d0019c10e5fa5928738094cb7d6a74",
      },
      {
        sha: "fe8560f",
        message: "feat(api-server): X-Hermes-Session-Key header for long-term memory scoping (#20199)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fe8560fc1249b4a7e448b5c3b80a7d213df9d78f",
      },
      {
        sha: "34c6f93",
        message: "fix: resolve model.aliases from config.yaml in /model alias resolution",
        href: "https://github.com/NousResearch/hermes-agent/commit/34c6f93496244c4e4e0f7898f938b64d10a40537",
      },
    ],
  },
];
