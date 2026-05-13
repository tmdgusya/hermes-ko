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

export const hermesUpdatesLastChecked = "2026-05-14";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-13",
    title: "Cache / Portal / Provider — 프리픽스 레이아웃 수명 단축, Portal Qwen TTL 조정, 클라이언트 버전 태그 통일, Alibaba Cloud→Qwen Cloud 이름 변경",
    category: "Cache / Portal / Provider",
    summary:
      "시스템 프롬프트가 세션 내에서 바이트 정적이 되도록 장수명(long-lived) 프리픽스 레이아웃이 제거됩니다 (#b06e999). Alibaba 업스트림이 5분 캐시만 허용하므로 Portal Qwen의 TTL=1h가 삭제됩니다 (#2a18b62). 모든 Portal 요청에 hermes-client-v<version> 태그가 통일 적용됩니다 (#486b692). 프로바이더 선택 UI에서 Alibaba Cloud가 Qwen Cloud로 이름 변경되고 정렬 순서가 조정됩니다 (#1e01b25) (main branch 기준).",
    commits: [
      {
        sha: "b06e999",
        message: "fix(cache): kill long-lived prefix layout — system prompt is now byte-static within a session (#24778)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b06e9993021a8eebd891fc60d52372446315b2f0",
      },
      {
        sha: "2a18b62",
        message: "fix(cache): drop ttl=1h on Portal Qwen — Alibaba upstream is 5m-only (#24702)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a18b6283b528817e87354b1c524501b570a7d62",
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
    ],
  },
  {
    date: "2026-05-13",
    title: "보안 / Gateway — 승인 DELETE 줄바꿈 우회 수정, hook_ctx 채팅 추적, WhatsApp 타임아웃 설정화, WeCom 재연결, systemd 재시작 지연 단축, 어댑터 lazy_deps 보장",
    category: "보안 / Gateway",
    summary:
      "승인(approval) DELETE 패턴에서 DOTALL 플래그로 인한 줄바꿈 우회가 수정됩니다 (#80374d4). Gateway hook_ctx에 chat_id가 추가되어 메시지 출처 추적이 개선됩니다 (#dd1d4e9). WhatsApp npm 설치 타임아웃이 환경변수로 설정 가능해집니다 (#1a4e8f7). WeCom에서 WebSocket 재연결 후 연결 상태가 갱신됩니다 (#e77fd75). systemd 재시작 지연이 감소합니다 (#0bc5f7b). Slack, Matrix, DingTalk, Feishu 어댑터에 lazy_deps.ensure()가 추가되어 런타임 의존성이 사전 확인됩니다 (#5d90386) (main branch 기준).",
    commits: [
      {
        sha: "80374d4",
        message: "fix: approval DELETE pattern DOTALL flag allows newline bypass",
        href: "https://github.com/NousResearch/hermes-agent/commit/80374d4dd97368d00f55c551bdbfc0fab0f011a8",
      },
      {
        sha: "dd1d4e9",
        message: "fix(gateway): add chat_id to hook_ctx for message source tracking",
        href: "https://github.com/NousResearch/hermes-agent/commit/dd1d4e9c5d8284ae5bc1250260493bada1e8d685",
      },
      {
        sha: "1a4e8f7",
        message: "fix(gateway): make WhatsApp npm install timeout configurable",
        href: "https://github.com/NousResearch/hermes-agent/commit/1a4e8f70415e073db257c4a31908c21e9921dd5b",
      },
      {
        sha: "e77fd75",
        message: "fix(wecom): update connection status after WebSocket reconnection",
        href: "https://github.com/NousResearch/hermes-agent/commit/e77fd75c442cc3ec6cfbc91964a6dfe2dc3f777d",
      },
      {
        sha: "0bc5f7b",
        message: "fix(gateway): reduce systemd restart delay",
        href: "https://github.com/NousResearch/hermes-agent/commit/0bc5f7b235117ccf791aab83b92164c0041d34af",
      },
      {
        sha: "5d90386",
        message: "fix(gateway): add lazy_deps.ensure() to slack, matrix, dingtalk, feishu adapters (#25014)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5d90386baab5cc6355d7e73e30571466c9223a6d",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Agent / Model / Tools — GLM 도구 사용 강제, 모델 전환 시 context_length 초기화, thread_id 메타데이터 전달, Retry-After 소수점 처리, 파일 변경 도구 이름 공유 모듈화, 파일 변경 분류 진단 추가",
    category: "Agent / Model / Tools",
    summary:
      "GLM 모델에 대해 도구 사용(tool-use) 강제(enforcement)가 prompt_builder에 주입됩니다 (#afa5b81). 모델 전환 시 기존 context_length 설정이 초기화됩니다 (#8ac3514). _send_via_adapter 라이브 경로에서 thread_id가 메타데이터로 전달됩니다 (#420762f). Retry-After 헤더에서 소수점(sub-second) 값이 float로 처리됩니다 (#4c82555). FILE_MUTATING_TOOL_NAMES이 공유 모듈에서 import되도록 리팩터링됩니다 (#c3094b4). 파일 변경(mutation) 분류 시 진단 정보가 함께 제공됩니다 (#da0ddbf) (main branch 기준).",
    commits: [
      {
        sha: "afa5b81",
        message: "fix(prompt_builder): inject tool-use enforcement for GLM models",
        href: "https://github.com/NousResearch/hermes-agent/commit/afa5b81918617126a489f21874cb39b1af7a7e93",
      },
      {
        sha: "8ac3514",
        message: "fix(agent): clear stale config context_length on model switch",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ac351407ef8c00b3ab8f0be3a944ba921052a39",
      },
      {
        sha: "420762f",
        message: "fix(tools): forward thread_id via metadata in _send_via_adapter live path",
        href: "https://github.com/NousResearch/hermes-agent/commit/420762f867460bc603d7aab0f6e9684f63fad5a2",
      },
      {
        sha: "4c82555",
        message: "fix(retry): use float() for Retry-After header to handle sub-second values",
        href: "https://github.com/NousResearch/hermes-agent/commit/4c825554c185ddb8961e68a7b146c75636c7acfe",
      },
      {
        sha: "c3094b4",
        message: "refactor: import FILE_MUTATING_TOOL_NAMES from shared module",
        href: "https://github.com/NousResearch/hermes-agent/commit/c3094b46e9a12a8fa19dd0fe4db4bae2f9ff5ef2",
      },
      {
        sha: "da0ddbf",
        message: "fix: classify landed file mutations with diagnostics",
        href: "https://github.com/NousResearch/hermes-agent/commit/da0ddbf88af3c5aef75caca63eee2d5e01b89895",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Messaging / TUI / LSP / CLI — LINE 소스 생성 수정, Telegram 스레드 폴백 및 리액션 정리, Signal 연결 기기 그룹 메시지, TUI 경로 정확화, zsh 자동완성 생성 수정 및 dead code 정리, LSP TypeScript SDK 설치 수정, LSP 서브커맨드 플러그인 탐색 스킵, Weixin gateway 문서화",
    category: "Messaging / TUI / LSP / CLI",
    summary:
      "LINE에서 존재하지 않는 create_source 대신 build_source가 사용됩니다 (#7c67097). Telegram에서 slash-confirm 결과 전송 시 스레드 폴백 헬퍼가 사용됩니다 (#e474130). 처리 취소 시 진행 중인 리액션이 정리됩니다 (#6f285ef). Signal에서 연결된(linked) 기기에서 온 그룹 메시지가 syncMessage 경로에서 처리됩니다 (#e713932). TUI 상태 표시줄에 TERMINAL_CWD가 사용되어 경로가 정확해집니다 (#557deec). 손상된 zsh 자동완성 생성이 복구되고 (#8c4bec6), 관련 dead code인 generate_bash_completion / generate_zsh_completion이 제거되며 (#a43d7e6), zsh 자동완성 회귀 테스트가 강화됩니다 (#6d30b4a). CLI 내장 서브커맨드 목록에 'lsp'가 추가되어 플러그인 탐색이 스킵됩니다 (#71c6dd0). LSP TypeScript SDK 설치 및 tsc-missing 스킵이 수정됩니다 (#29c9ff9). LSP 후속 수정 사항이 문서화됩니다 (#80c4b27). Gateway 도움말과 독스트링에 Weixin이 추가됩니다 (#a694a26) (main branch 기준).",
    commits: [
      {
        sha: "7c67097",
        message: "fix(line): use build_source instead of nonexistent create_source",
        href: "https://github.com/NousResearch/hermes-agent/commit/7c67097325f5fe4b4b703fed16ebafca7ca686dd",
      },
      {
        sha: "e474130",
        message: "fix(telegram): use thread fallback helper in slash-confirm result send",
        href: "https://github.com/NousResearch/hermes-agent/commit/e474130c487c5e4c3d58f309ec2fdb19474cc4dc",
      },
      {
        sha: "6f285ef",
        message: "fix(telegram): clear in-progress reaction on cancelled processing (#24628)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f285efb8058ee5bd1b91e4e0ba9187ec8b183e8",
      },
      {
        sha: "e713932",
        message: "fix(signal): handle group messages from linked devices in syncMessage path",
        href: "https://github.com/NousResearch/hermes-agent/commit/e71393237efd41af688569c3100baf3a89226b47",
      },
      {
        sha: "557deec",
        message: "fix(tui): use TERMINAL_CWD in _session_info for accurate status line path",
        href: "https://github.com/NousResearch/hermes-agent/commit/557deece6f0f6081c7fb8bcf30e8abf952165170",
      },
      {
        sha: "8c4bec6",
        message: "fix(cli): repair broken zsh completion generation",
        href: "https://github.com/NousResearch/hermes-agent/commit/8c4bec61557a5a02d25956c316c33f7527cbf4b6",
      },
      {
        sha: "a43d7e6",
        message: "refactor(profiles): remove dead generate_bash_completion / generate_zsh_completion",
        href: "https://github.com/NousResearch/hermes-agent/commit/a43d7e67b4e7234b94320963ca1811fcc3a9b5d2",
      },
      {
        sha: "6d30b4a",
        message: "test(cli): strengthen zsh completion regression coverage",
        href: "https://github.com/NousResearch/hermes-agent/commit/6d30b4a7e32561483619145fb083bafe88aa4460",
      },
      {
        sha: "71c6dd0",
        message: "fix(cli): add 'lsp' to _BUILTIN_SUBCOMMANDS so plugin discovery is skipped",
        href: "https://github.com/NousResearch/hermes-agent/commit/71c6dd0dcf97721656056e5d5b99f4a0b62b8846",
      },
      {
        sha: "29c9ff9",
        message: "fix(lsp): typescript SDK install + tsc-missing skip + shellcheck warning (#24630)",
        href: "https://github.com/NousResearch/hermes-agent/commit/29c9ff9ba5d63bc81d53935c3f84f066673a06b2",
      },
      {
        sha: "80c4b27",
        message: "docs(lsp): document follow-up fixes from #24630 (#24709)",
        href: "https://github.com/NousResearch/hermes-agent/commit/80c4b27437122a605ffc187123a4375b300280f6",
      },
      {
        sha: "a694a26",
        message: "docs(gateway): mention Weixin in gateway help and docstrings",
        href: "https://github.com/NousResearch/hermes-agent/commit/a694a263309d1f2ae98fb938b76b013c2808cf35",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "CI / Tools / Install / Docker — e2e 타임아웃 연장, ripgrep 설치, 테스트 i18n 수정, Tavily Bearer 인증, doctor /models 스킵, XMPP JID 대상 인식, WSL 오디오 감지, autostash 복구 수정, Docker .venv 권한, Docker 태그 분리",
    category: "CI / Tools / Install / Docker",
    summary:
      "e2e CI 잡 타임아웃이 15분으로 연장됩니다 (#8d55305). e2e 잡에 ripgrep이 설치됩니다 (#1beb578). restart drain 테스트에서 i18n t()가 사용됩니다 (#a4289d7). Tavily /crawl 엔드포인트에 Bearer 인증 헤더가 추가됩니다 (#6f92a21). /models 미지원 프로바이더에서 doctor 체크가 스킵됩니다 (#0c233e7). XMPP JID가 명시적 전송 대상으로 인식됩니다 (#a54d4b0). WSL 환경에서 PULSE_SERVER 설정 시 오디오 장치가 감지됩니다 (#081f936). git autostash 복구 시 stash@{0}가 refs/stash 대신 사용됩니다 (#327b8ce). cron에 whatsapp 홈 타겟 환경변수가 포함됩니다 (#d8c4460). Docker 이미지에서 .venv 디렉토리가 hermes 사용자 소유로 변경되어 lazy_deps가 플랫폼 패키지를 설치할 수 있습니다 (#942adf6). Docker :latest 태그가 릴리즈 전용으로 분리되고 :main 태그가 main HEAD를 가리킵니다 (#1149e75) (main branch 기준).",
    commits: [
      {
        sha: "8d55305",
        message: "fix(ci): bump e2e job timeout to 15 minutes",
        href: "https://github.com/NousResearch/hermes-agent/commit/8d553056c0017a230228b4f43a66a254f27b3ff3",
      },
      {
        sha: "1beb578",
        message: "fix(ci): install ripgrep in e2e job",
        href: "https://github.com/NousResearch/hermes-agent/commit/1beb578fdeff23fbfade93cebae4c921473fe4ec",
      },
      {
        sha: "a4289d7",
        message: "fix(test): use i18n t() for restart drain assertion",
        href: "https://github.com/NousResearch/hermes-agent/commit/a4289d74ac99694350497fb01b15aba63ce9ffde",
      },
      {
        sha: "6f92a21",
        message: "fix(web): add Bearer auth header for Tavily /crawl endpoint",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f92a21926f04f2235d5ecd06aa4ae38a327ccbc",
      },
      {
        sha: "0c233e7",
        message: "fix(doctor): skip /models health check for providers that don't support it",
        href: "https://github.com/NousResearch/hermes-agent/commit/0c233e70f84a7598f874d6a9b31898408717eabe",
      },
      {
        sha: "a54d4b0",
        message: "fix(send_message): recognize XMPP JIDs as explicit targets",
        href: "https://github.com/NousResearch/hermes-agent/commit/a54d4b0e46429eb2d13bd41145c74c5e863d1e49",
      },
      {
        sha: "081f936",
        message: "fix(voice_mode): detect audio in WSL when sd.query_devices() returns empty list but PULSE_SERVER is set",
        href: "https://github.com/NousResearch/hermes-agent/commit/081f9368bcf341dced07bc515ce26a3b25f2eaa2",
      },
      {
        sha: "327b8ce",
        message: "fix(install): use stash@{0} instead of git rev-parse refs/stash for autostash recovery",
        href: "https://github.com/NousResearch/hermes-agent/commit/327b8cee9eaeb17724c7b5daa686e736f7d3b5e4",
      },
      {
        sha: "d8c4460",
        message: "fix(cron): include whatsapp in _HOME_TARGET_ENV_VARS",
        href: "https://github.com/NousResearch/hermes-agent/commit/d8c4460fe35e9a471b8b115b73c39527e5492477",
      },
      {
        sha: "942adf6",
        message: "fix(docker): chown .venv to hermes so lazy_deps can install platform packages (#24841)",
        href: "https://github.com/NousResearch/hermes-agent/commit/942adf617910f50a39f41bd200d8083bf4cb2bed",
      },
      {
        sha: "1149e75",
        message: "ci(docker): split :latest (releases only) from :main (main HEAD)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1149e75db20f4f3afe7b0ead23e115abcc4b9b11",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Dashboard / CLI / Gateway — 플러그인 재스캔, 설정 경로 표시, 헤드리스 브라우저 열기 방지, Windows 경로 인코딩, CJK 표시 폭, TUI 스크롤백 초기화, Telegram 메뉴 명령, Clarify 도구 인라인 키보드, Auxiliary 작업 프로바이더 수정, DeepSeek-V4-Pro 가격 추가",
    category: "Dashboard / CLI / Gateway",
    summary:
      "Dashboard에서 캐시된 플러그인 디렉토리가 제거되면 재스캔됩니다 (#2a3140a). Config 페이지에 실제 설정 파일 경로가 표시됩니다 (#80375cb). 헤드리스 Linux에서 브라우저 자동 열기가 방지됩니다 (#e385877). CLI에서 Windows cp1252 경로 디코딩 문제가 수정됩니다 (#a33ec10). 응답 박스 헤더 레이블에 CJK 문자 표시 폭이 반영됩니다 (#7a4ad5c). TUI 시작 시 스크롤백 버퍼가 초기화되어 tmux 누출이 방지됩니다 (#d33deb7). 인자가 있는 명령이 Telegram 메뉴에 포함됩니다 (#9b2488a). scoped-lock stale 체크에서 lock record argv가 참조됩니다 (#f9559c3). Telegram에서 clarify 도구가 인라인 키보드 버튼과 연결됩니다 (#29d7c24). auxiliary 작업 프로바이더 해결 시 cfg_base_url과 cfg_api_key가 전달됩니다 (#d68a0ec). deepseek-v4-pro가 공식 가격표에 추가됩니다 (#88ede80) (main branch 기준).",
    commits: [
      {
        sha: "2a3140a",
        message: "fix(dashboard): rescan plugins when cached directory is removed",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a3140a814ed5a55af49672ba355783c948f0179",
      },
      {
        sha: "80375cb",
        message: "fix(dashboard): display real config path on Config page",
        href: "https://github.com/NousResearch/hermes-agent/commit/80375cbe2c2d1da3d98558018fe357cfb9b85faa",
      },
      {
        sha: "e385877",
        message: "fix(dashboard): skip browser-open on headless Linux to prevent process exit",
        href: "https://github.com/NousResearch/hermes-agent/commit/e3858772d0465d2c5c386cb788642276138b5253",
      },
      {
        sha: "a33ec10",
        message: "fix(cli): @-file completion crash on Windows when paths aren't cp1252-decodable",
        href: "https://github.com/NousResearch/hermes-agent/commit/a33ec10874667469e037c5b0e4dbb1a9c2d3d794",
      },
      {
        sha: "7a4ad5c",
        message: "fix(cli): use display-width for response box header label to support CJK",
        href: "https://github.com/NousResearch/hermes-agent/commit/7a4ad5ccb472eed67b4287a4df9d2abb12a2255c",
      },
      {
        sha: "d33deb7",
        message: "fix(tui): clear scrollback buffer on startup to prevent tmux scrollback leakage",
        href: "https://github.com/NousResearch/hermes-agent/commit/d33deb7cbea17fbf5377c1e3f46f1016358fe88d",
      },
      {
        sha: "9b2488a",
        message: "fix: include arg-taking commands in Telegram menu",
        href: "https://github.com/NousResearch/hermes-agent/commit/9b2488af2af975329fa08a3c5d9893651215b4e2",
      },
      {
        sha: "f9559c3",
        message: "fix(gateway): consult lock record argv when cmdline unreadable in scoped-lock stale check",
        href: "https://github.com/NousResearch/hermes-agent/commit/f9559c39c4ee7cc7c40f79efb37a6530b2bf0e0e",
      },
      {
        sha: "29d7c24",
        message: "feat(gateway): wire clarify tool with inline keyboard buttons on Telegram (#24199)",
        href: "https://github.com/NousResearch/hermes-agent/commit/29d7c244c5d55230e838c049afb13d307168679c",
      },
      {
        sha: "d68a0ec",
        message: "fix(auxiliary): pass cfg_base_url and cfg_api_key when resolving task provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/d68a0ec3839fbe82d04a76bbba0a3f835f72ee15",
      },
      {
        sha: "88ede80",
        message: "fix(pricing): add deepseek-v4-pro to official docs pricing table",
        href: "https://github.com/NousResearch/hermes-agent/commit/88ede807c4cab7c2235b4e205cb7ba3521ac1117",
      },
    ],
  },
];
