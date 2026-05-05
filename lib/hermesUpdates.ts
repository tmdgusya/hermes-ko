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

export const hermesUpdatesLastChecked = "2026-05-05";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-05",
    title: "Agent 안정성: reasoning-block leak 방지, stale reasoning 재사용 방지, compaction/compression 연속성 보존",
    category: "Agent 안정성",
    summary:
      "agent의 reasoning block leak을 방지하는 stateful streaming scrubber가 추가되고, 턴 간 stale reasoning이 재사용되지 않도록 수정되었습니다. compaction에서 role=user fallback 시 컨텍스트 요약 종료 지점을 표시(mark)하고, compression에서 반복 요약의 연속성을 보존(preserve)합니다. CLI에서 수동 compress handoff가 유지(persist)됩니다 (main branch).",
    commits: [
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
      {
        sha: "4a3e3e2",
        message: "fix(compression): preserve iterative summary continuity",
        href: "https://github.com/NousResearch/hermes-agent/commit/4a3e3e20e5b2ed2fd0c2e727f8204efea4de8a5a",
      },
      {
        sha: "aacf36e",
        message: "fix(cli): persist manual compress handoff",
        href: "https://github.com/NousResearch/hermes-agent/commit/aacf36e94309df06bd9221e5b9027e8b3c3f0b0b",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Kanban: Dispatcher stuck-warn 억제, zombie worker 감지, dashboard completion 보존, default assignee 포함",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban dispatcher가 ready queue에 spawn 불가능한 assignee만 있을 때 stuck-warn을 억제하고, 실제 프로필이 아닌 assignee의 ready task를 건너뜁니다. 대시보드 completion summary가 보존(preserve)되고, darwin 환경에서 zombie worker가 감지(detect)됩니다. Kanban assignee 목록에 default profile이 포함됩니다 (main branch).",
    commits: [
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
      {
        sha: "542e06c",
        message: "fix: include default profile in kanban assignees",
        href: "https://github.com/NousResearch/hermes-agent/commit/542e06c789f1704ebd3253027b03b6b07a7a8c07",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Microsoft Teams 메시징: threading 구현, 400 폴백, 진단 로깅, 플랫폼 문서 등록",
    category: "Messaging / Platform",
    summary:
      "Microsoft Teams 메시징에서 app.reply()를 통한 threading이 구현되고, threading이 400 에러를 반환할 때 flat send로 폴백합니다. reply() fallback 시 진단 로깅이 추가되었습니다. 문서 측면에서는 여러 플랫폼 목록과 사이드바에 Teams가 등록되어 접근성이 개선되었습니다 (main branch).",
    commits: [
      {
        sha: "69aeba0",
        message: "feat(teams): implement threading via app.reply()",
        href: "https://github.com/NousResearch/hermes-agent/commit/69aeba0df782b3383480ffbf0733d725a714c0a1",
      },
      {
        sha: "3f02345",
        message: "fix(teams): fall back to flat send when threading returns 400",
        href: "https://github.com/NousResearch/hermes-agent/commit/3f023450ddab8af48814fd715d3f0ee4318026ee",
      },
      {
        sha: "601e5f1",
        message: "fix(teams): log reply() fallback for diagnostics",
        href: "https://github.com/NousResearch/hermes-agent/commit/601e5f1d57cfd4ceefee50a6df05a860a1a602e8",
      },
      {
        sha: "93869b4",
        message: "docs: add Microsoft Teams to platform lists across docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/93869b48ab520ad8df386e2057013c5f78bb8d7a",
      },
      {
        sha: "ef94aa2",
        message: "docs(teams): add Teams to sidebar",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef94aa201fba8c1c95a1c8ee9a4d1ee66ca40dd1",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "Telegram /topic 멀티세션 DM + Gateway: reply_to_mode, DoH DNS, pending prompts 보존",
    category: "Messaging / Platform",
    summary:
      "Telegram에 /topic off, /topic help 명령어, auth gate, screenshot debounce를 갖춘 멀티세션 DM 모드가 추가되고, CASCADE 처리, General-topic 핸들링, rename guard, debounce가 개선(polish)되었습니다. Gateway에서 Discord와 Telegram의 reply_to_mode를 config.yaml에서 로드하고, DoH 확인된 Telegram IP를 시스템 DNS와 일치시키며, 재시작 간 pending update prompts를 보존합니다 (main branch).",
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
    title: "Curator, File Tools, Linting: archive/prune, delta lint, in-process linter, llama.cpp grammar 대응",
    category: "Tools / MCP / Plugins",
    summary:
      "Curator에 archive 및 prune 서브커맨드가 추가되고, frontmatter name으로 hub skill을 보호(protect)합니다. file_tools에서 write_file과 patch 후 delta lint가 실행되며 JSON/YAML/TOML/Python in-process linter가 추가되었습니다. llama.cpp grammar 400 에러 발생 시 tool schema의 pattern/format을 reactive하게 제거(strip)합니다. Honcho의 get_prefetch_context에 user_message가 search_query로 전달됩니다 (main branch).",
    commits: [
      {
        sha: "436672d",
        message: "feat(curator): add archive and prune subcommands (#20200)",
        href: "https://github.com/NousResearch/hermes-agent/commit/436672de0efd8bcc50c6043a16223c102d30d71b",
      },
      {
        sha: "68c1a08",
        message: "fix(curator): protect hub skills by frontmatter name",
        href: "https://github.com/NousResearch/hermes-agent/commit/68c1a08ad114e6d1cfdcecd09880b5b594230b77",
      },
      {
        sha: "5168226",
        message: "feat(file_tools): post-write delta lint on write_file + patch, add JSON/YAML/TOML/Python in-process linters (#20191)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5168226d60f66dac01dabe151104cb8e958c99c0",
      },
      {
        sha: "28f4d6d",
        message: "fix(tool-schemas): reactive strip of pattern/format on llama.cpp grammar 400s",
        href: "https://github.com/NousResearch/hermes-agent/commit/28f4d6db63f450828ffe419964719d35bbeedc58",
      },
      {
        sha: "0a7cc85",
        message: "fix(honcho): pass user_message as search_query in get_prefetch_context",
        href: "https://github.com/NousResearch/hermes-agent/commit/0a7cc85eab299667777489a31995eb324d8b7818",
      },
    ],
  },
  {
    date: "2026-05-05",
    title: "CLI/TUI/Config: 시작 팁 100개, API 키 관리, TUI 클립보드/서브프로세스 보호, Nix 캐시 갱신",
    category: "Config / Auth",
    summary:
      "CLI 시작 시 100개의 새로운 팁이 추가되고, setup에서 API 키가 이미 존재할 때 Keep/Replace/Clear 옵션을 제공하여 키 관리가 개선되었습니다. TUI 클립보드 복사 폴백이 개선되고, React effect cleanup이 python TUI gateway 서브프로세스를 종료(kill)하지 않도록 방지합니다. Nix 환경에서 stale tui npmDepsHash를 갱신하고 cache-blind 감지를 수정합니다 (main branch).",
    commits: [
      {
        sha: "fc4aa66",
        message: "feat(tips): add 100 new CLI startup tips (#20168)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc4aa66ee4cda20f711416586cf3401a7cb498b7",
      },
      {
        sha: "91ce8fc",
        message: "fix(setup): offer Keep/Replace/Clear when API key already exists",
        href: "https://github.com/NousResearch/hermes-agent/commit/91ce8fc000deaa4b4bbf1edb5b3d9f6dd1668f09",
      },
      {
        sha: "c3112ad",
        message: "fix(tui): improve clipboard copy fallbacks",
        href: "https://github.com/NousResearch/hermes-agent/commit/c3112adac551f5afe4166c68a1165d60f33af74f",
      },
      {
        sha: "660ce7c",
        message: "fix(ui-tui): prevent React effect cleanup from killing python TUI gateway subprocess",
        href: "https://github.com/NousResearch/hermes-agent/commit/660ce7c54b9c397b2b1d23d9904159b645f04d30",
      },
      {
        sha: "13a7cbc",
        message: "fix(nix): refresh stale tui npmDepsHash + fix cache-blind detection (#20144)",
        href: "https://github.com/NousResearch/hermes-agent/commit/13a7cbcd6404c6e8ef501f98a0b315da4223228c",
      },
    ],
  },
];
