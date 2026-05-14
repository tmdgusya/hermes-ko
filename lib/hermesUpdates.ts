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

export const hermesUpdatesLastChecked = "2026-05-14"; // last new commit: 2026-05-14

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-14",
    title: "Memory / Background Review — 백그라운드 리뷰 포크 세션·캐시 적중 수정",
    category: "Memory / Background Review",
    summary:
      "백그라운드 리뷰 포크에서 session_start와 session_id가 올바르게 고정되어 세션 무결성이 보장됩니다 (#07349ce). 동일 포크에서 프리픽스 캐시가 정상 적중되도록 수정됩니다 (#5fe0672). 캐시 패리티 및 런타임 화이트리스트에 대한 회귀 테스트가 추가됩니다 (#8c6b0c9) (main branch 기준).",
    commits: [
      {
        sha: "07349ce",
        message: "fix(memory): pin session_start + session_id on background review fork",
        href: "https://github.com/NousResearch/hermes-agent/commit/07349ce4df74a98678070255f46fcee0f1718ba0",
      },
      {
        sha: "5fe0672",
        message: "fix(memory): hit prefix cache in background review fork",
        href: "https://github.com/NousResearch/hermes-agent/commit/5fe0672260e65a6ff664f5905eb69a6fca674707",
      },
      {
        sha: "8c6b0c9",
        message: "test(memory): cover cache-parity + runtime whitelist on background review fork",
        href: "https://github.com/NousResearch/hermes-agent/commit/8c6b0c9ecdabd67cb22b34e5c294e3f0aba47bbc",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Plugins / Gateway / Install — 스레드 로컬 도구 화이트리스트, lazy-install rebind, 시스템 Chromium 스킵",
    category: "Plugins / Gateway",
    summary:
      "pre_tool_call 게이트에 스레드 로컬 도구 화이트리스트가 추가되어 플러그인 권한 제어가 세분화됩니다 (#3a30c60). Slack/Feishu/Matrix 어댑터의 lazy-install 리바인드가 완료되고 ensure_and_bind 헬퍼가 추가됩니다 (#d898e0e). 시스템에 Chromium이 있으면 브라우저 다운로드를 건너뛰어 설치 시간이 단축됩니다 (#52521c9) (main branch 기준).",
    commits: [
      {
        sha: "3a30c60",
        message: "feat(plugins): add thread-local tool whitelist to pre_tool_call gate",
        href: "https://github.com/NousResearch/hermes-agent/commit/3a30c605b3d7526d412eb4c90fd7778581370a34",
      },
      {
        sha: "d898e0e",
        message: "fix(gateway): complete lazy-install rebind for slack/feishu/matrix + add ensure_and_bind helper (#25038)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d898e0eb7f2a0df757113fafbcc52d17a1a36fd9",
      },
      {
        sha: "52521c9",
        message: "fix(install): skip browser download when system chromium exists",
        href: "https://github.com/NousResearch/hermes-agent/commit/52521c937a50d94493374c1c6d8fea1a39f96f5c",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Slack / Skills / Runtime — !cmd 대체 접두어, EVM 멀티체인 스킬, tools 캐싱, Codex 런타임",
    category: "Slack / Skills / Runtime",
    summary:
      "Slack 스레드에서 !cmd를 / 명령어의 대체 접두어로 사용할 수 있습니다 (#6122a79). get_nous_auth_status()와 load_env() 결과가 캐싱되어 hermes tools 메뉴 응답 속도가 개선됩니다 (#3f13d78). 8개 체인·14개 명령어 EVM 멀티체인 스킬이 추가되고 blockchain/base가 blockchain/evm으로 통합됩니다 (#aa1e2ed, #e3fc081). OpenAI/Codex 모델용 선택적 codex app-server 런타임이 도입됩니다 (#091d8e1) (main branch 기준).",
    commits: [
      {
        sha: "6122a79",
        message: "feat(slack): support !cmd as alternate prefix for slash commands in threads (#25355)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6122a79aab45041d8b7c8d775f95be3ac6ce579f",
      },
      {
        sha: "3f13d78",
        message: "perf(tools): cache get_nous_auth_status() and load_env() to fix slow `hermes tools` menus (#25341)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3f13d78088d1a9a35eb542f29b16d11d534066e7",
      },
      {
        sha: "aa1e2ed",
        message: "feat: add EVM multi-chain skill (8 chains, 14 commands)",
        href: "https://github.com/NousResearch/hermes-agent/commit/aa1e2edd35a8e14fc02ad13b0fc4e8cecd10bbfc",
      },
      {
        sha: "e3fc081",
        message: "feat(skills): merge blockchain/base into blockchain/evm; salvage PR #2010",
        href: "https://github.com/NousResearch/hermes-agent/commit/e3fc0814996d043fa9badce7da241ef02d5f905b",
      },
      {
        sha: "091d8e1",
        message: "feat(codex-runtime): optional codex app-server runtime for OpenAI/Codex models (#24182)",
        href: "https://github.com/NousResearch/hermes-agent/commit/091d8e10306613819c6cf3a64dda5b166c3048cd",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "TTS / Tools Config / Docs — MiniMax TTS 기본값·엔드포인트 정합, video_gen.provider 기록, 스킬 표준 문서화",
    category: "TTS / Tools Config / Docs",
    summary:
      "MiniMax TTS 기본 모델이 speech-02로 변경되고 API 엔드포인트가 수정됩니다 (#c875c0d). MiniMax TTS 기본값이 현재 API에 맞게 정렬되고 GroupId 지원이 추가됩니다 (#7f08cb5). Reconfigure 도구 경로에서 video_gen.provider 설정이 올바르게 기록됩니다 (#dd5a950). 인메모리 플러그인에 대한 신규 PR이 종료되고 스킬 표준이 문서화됩니다 (#ef98e3f) (main branch 기준).",
    commits: [
      {
        sha: "c875c0d",
        message: "fix(tts): update MiniMax default model to speech-02 and correct API endpoint",
        href: "https://github.com/NousResearch/hermes-agent/commit/c875c0dc117f737d2f407ad9caea3052d13b5c6c",
      },
      {
        sha: "7f08cb5",
        message: "fix(tts): align MiniMax TTS defaults with current API and add GroupId support",
        href: "https://github.com/NousResearch/hermes-agent/commit/7f08cb59417b19d70a7bc82e05f7bbedeb8a4f82",
      },
      {
        sha: "dd5a950",
        message: "fix(tools-config): write video_gen.provider on Reconfigure tool path (#25307)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dd5a9502e389781275a1649716f6d3ca4ae98c51",
      },
      {
        sha: "ef98e3f",
        message: "docs: close in-tree memory plugins to new PRs and codify skill standards (#25302)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef98e3f9e60b6e4066050bd8c6d13409f9fedf5d",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Video Gen / CLI / Tools — 통합 video_generate 도구, 터미널 URL 클릭, zsh 자동완성 수리, LSP 서브커맨드, Docker latest/main 분리",
    category: "Video Gen / CLI / Tools",
    summary:
      "플러그형 백엔드를 갖춘 통합 video_generate 도구가 도입됩니다 (#9d42c2c). 터미널에서 URL이 클릭 가능하고 hover-highlight가 지원됩니다 (#08671d8). 손상된 zsh 자동완성 생성이 수리됩니다 (#8c4bec6). LSP가 _BUILTIN_SUBCOMMANDS에 추가되어 불필요한 플러그인 탐색이 생략됩니다 (#71c6dd0). Docker 이미지가 :latest(릴리즈)와 :main(HEAD)으로 분리됩니다 (#1149e75) (main branch 기준).",
    commits: [
      {
        sha: "9d42c2c",
        message: "feat(video_gen): unified video_generate tool with pluggable provider backends (#25126)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9d42c2c2869e5be531b6302bdc8ea6c6269a9604",
      },
      {
        sha: "08671d8",
        message: "tui: make URLs clickable + hover-highlight in any terminal (#25071)",
        href: "https://github.com/NousResearch/hermes-agent/commit/08671d877108769e99ce649bd9ea93a861a0b19b",
      },
      {
        sha: "8c4bec6",
        message: "fix(cli): repair broken zsh completion generation",
        href: "https://github.com/NousResearch/hermes-agent/commit/8c4bec61557a5a02d25956c316c33f7527cbf4b6",
      },
      {
        sha: "71c6dd0",
        message: "fix(cli): add 'lsp' to _BUILTIN_SUBCOMMANDS so plugin discovery is skipped",
        href: "https://github.com/NousResearch/hermes-agent/commit/71c6dd0dcf97721656056e5d5b99f4a0b62b8846",
      },
      {
        sha: "1149e75",
        message: "ci(docker): split :latest (releases only) from :main (main HEAD)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1149e75db20f4f3afe7b0ead23e115abcc4b9b11",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Cache / Portal / 보안 / Gateway — 프리픽스 레이아웃 수명 단축, Portal 태그 통일, Qwen Cloud 이름 변경, 승인 줄바꿈 우회 수정, 어댑터 lazy_deps 보장",
    category: "Cache / Portal / 보안 / Gateway",
    summary:
      "장수명 프리픽스 레이아웃이 제거되어 시스템 프롬프트가 세션 내에서 바이트 정적이 됩니다 (#b06e999). 모든 Portal 요청에 hermes-client-v 태그가 통일 적용됩니다 (#486b692). 프로바이더 UI에서 Alibaba Cloud가 Qwen Cloud로 이름 변경됩니다 (#1e01b25). 승인 DELETE 패턴의 줄바꿈 우회가 수정됩니다 (#80374d4). Slack/Matrix/DingTalk/Feishu 어댑터에 lazy_deps.ensure()가 추가됩니다 (#5d90386). queued follow-up transcript 기록이 보존됩니다 (#9a815b6) (main branch 기준).",
    commits: [
      {
        sha: "b06e999",
        message: "fix(cache): kill long-lived prefix layout — system prompt is now byte-static within a session (#24778)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b06e9993021a8eebd891fc60d52372446315b2f0",
      },
      {
        sha: "486b692",
        message: "feat(nous): unified client=hermes-client-v<version> tag on every Portal request (#24779)",
        href: "https://github.com/NousResearch/hermes-agent/commit/486b692ddd801f8f665d3fff023149fb1cb6509e",
      },
      {
        sha: "1e01b25",
        message: "feat(providers): rename Alibaba Cloud to Qwen Cloud, reorder picker (#24835)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1e01b25e76a9258095930c7428c169835fd03059",
      },
      {
        sha: "80374d4",
        message: "fix: approval DELETE pattern DOTALL flag allows newline bypass",
        href: "https://github.com/NousResearch/hermes-agent/commit/80374d4dd97368d00f55c551bdbfc0fab0f011a8",
      },
      {
        sha: "5d90386",
        message: "fix(gateway): add lazy_deps.ensure() to slack, matrix, dingtalk, feishu adapters (#25014)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5d90386baab5cc6355d7e73e30571466c9223a6d",
      },
    ],
  },
];
